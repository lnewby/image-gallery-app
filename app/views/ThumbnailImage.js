import ImageCrop from './ImageCrop.js';
import dom from '../../public/utils/DOMUtils.js';

class ThumbnailImage {
  constructor({images, image, width, height}) {
    this.images = images;
    this.image = image;
    this.width = width;
    this.height = height;
    console.log(this.image);
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
    const thumbnailImage = new ImageCrop({ src, alt, width, height });

    return thumbnailImage.render();
  }
}

export default ThumbnailImage;
