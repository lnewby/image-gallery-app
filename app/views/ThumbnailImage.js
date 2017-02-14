import ImageCrop from './ImageCrop.js';
import dom from '../../public/utils/DOMUtils.js';

class ThumbnailImage {
  constructor({ images, image, width, height, openImageLightboxCarousel }) {
    this.images = images;
    this.image = image;
    this.width = width;
    this.height = height;
    this.openImageLightboxCarousel = openImageLightboxCarousel;
  }

  render() {
    const {
      openImageLightboxCarousel,
      width,
      height,
      image: {
        id,
        src,
        title: alt
      }
    } = this;
    const thumbnailImageDiv = dom.createElement('div');
    const croppedImage = new ImageCrop({ src, alt, width, height });
    thumbnailImageDiv.classList.add('thumbnail-image-wrapper');
    thumbnailImageDiv.setAttribute('id', id);
    thumbnailImageDiv.addEventListener('click', (event) => openImageLightboxCarousel(event));
    thumbnailImageDiv.appendChild(croppedImage.render());

    return thumbnailImageDiv;
  }
}

export default ThumbnailImage;
