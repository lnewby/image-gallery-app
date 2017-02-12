import ImageCrop from './ImageCrop.js';
import dom from '../../public/utils/DOMUtils.js';

class ThumbnailImage {
  constructor({images, image, width, height}) {
    this.images = images;
    this.image = image;
    this.width = width;
    this.height = height;
    this.thumbnailImageDiv;
    this.croppedImage;
  }

  render() {
    const {
      image: {
        src,
        title: alt
      },
      width,
      height
    } = this;
    this.thumbnailImageDiv = dom.createElement('div');
    this.thumbnailImageDiv.classList.add('thumbnail-image-wrapper');
    this.croppedImage = new ImageCrop({ src, alt, width, height });
    this.thumbnailImageDiv.appendChild(this.croppedImage.render())

    return this.thumbnailImageDiv;
  }
}

export default ThumbnailImage;
