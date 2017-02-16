import ImageCrop from './ImageCrop.js';
import {dom} from '../../public/utils/DOMUtils.js';

class ThumbnailImage {
  constructor({ images, image, width, height, handleOpenImageLightboxCarousel }) {
    this.images = images;
    this.image = image;
    this.width = width;
    this.height = height;
    this.handleOpenImageLightboxCarousel = handleOpenImageLightboxCarousel;
  }

  render() {
    const {
      handleOpenImageLightboxCarousel,
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
    thumbnailImageDiv.addEventListener('click', (event) => handleOpenImageLightboxCarousel({event, id}));
    const loadingIconWrapper = dom.createElement('div');
    const loadingIcon = dom.createElement('div');
    loadingIcon.classList.add('loader', 'icon-spin5', 'animate-spin');
    loadingIconWrapper.classList.add('loader-wrapper');
    loadingIconWrapper.appendChild(loadingIcon);
    thumbnailImageDiv.appendChild(loadingIconWrapper);

    // Use promise to handle display of spinner for image loading
    const imagePromise = croppedImage.render();
    imagePromise.then((image) => {
      loadingIconWrapper.classList.add('hidden');
      loadingIconWrapper.classList.remove('loader-wrapper');
      image.classList.remove('hidden');
      thumbnailImageDiv.appendChild(image);
    });

    return thumbnailImageDiv;
  }
}

export default ThumbnailImage;
