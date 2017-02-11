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
    const { src, title: alt } = this.image;
    const thumbnailImage = new ImageCrop({ src, alt });

    return thumbnailImage.render();
  }
}

export default ThumbnailImage;
