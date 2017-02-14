import ImageCrop from './ImageCrop.js';
import dom from '../../public/utils/DOMUtils.js';

class ThumbnailImage {
  constructor({ images, image, width, height }) {
    this.images = images;
    this.image = image;
    this.width = width;
    this.height = height;
    this.thumbnailImageDiv;
    this.croppedImage;
  }

  render() {
    const {
      width,
      height,
      image: {
        id,
        src,
        title: alt
      }
    } = this;
    this.thumbnailImageDiv = dom.createElement('div');
    this.thumbnailImageDiv.classList.add('thumbnail-image-wrapper');
    this.thumbnailImageDiv.setAttribute('id', id);
    this.croppedImage = new ImageCrop({ src, alt, width, height });
    this.thumbnailImageDiv.appendChild(this.croppedImage.render());

    return this.thumbnailImageDiv;
  }
}

export default ThumbnailImage;
