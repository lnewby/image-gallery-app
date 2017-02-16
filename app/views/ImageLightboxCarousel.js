import {dom} from '../../public/utils/DOMUtils.js';

class ImageLightboxCarousel {

  constructor({
    ids,
    images = [],
    openImageId,
    handleLightboxImageSlider,
    handleCloseImageLightboxCarousel
  }) {
    this.ids = ids;
    this.images = images;
    this.openImageId = openImageId;
    this.handleLightboxImageSlider = handleLightboxImageSlider;
    this.handleCloseImageLightboxCarousel = handleCloseImageLightboxCarousel;
  }

  nextImageGroupArrow() {
    const {
      ids,
      openImageId,
      handleLightboxImageSlider
    } = this;
    const nextArrowButton = dom.createElement('button');
    nextArrowButton.classList.add('icon-right-circled', 'lighbox-arrow-controls');
    nextArrowButton.disabled = (ids.indexOf(openImageId) + 1 >= ids.length);
    nextArrowButton.setAttribute('aria-label', 'Next lightbox image');
    nextArrowButton.addEventListener('click', (event) => handleLightboxImageSlider({event, direction: 'next' }));

    return nextArrowButton;
  }

  previousImageGroupArrow() {
    const {
      ids,
      openImageId,
      handleLightboxImageSlider
    } = this;

    const previousArrowButton = dom.createElement('button');
    previousArrowButton.classList.add('icon-left-circled', 'lighbox-arrow-controls');
    previousArrowButton.disabled = (ids.indexOf(openImageId) - 1 < 0);
    previousArrowButton.setAttribute('aria-label', 'Previous lightbox image');
    previousArrowButton.addEventListener('click', (event) => handleLightboxImageSlider({event, direction: 'previous' }));

    return previousArrowButton;
  }

  lightboxCloseButton() {
    const lightboxCloseButton = dom.createElement('button');
    lightboxCloseButton.classList.add('icon-cancel-circled', 'lightbox-close-btn')
    lightboxCloseButton.setAttribute('aria-label', 'Lightbox close button');
    lightboxCloseButton.addEventListener('click', (event) => this.handleCloseImageLightboxCarousel(event));

    return lightboxCloseButton;
  }

  // Get the current image
  image() {
    return this.images.filter((image) => image.id === this.openImageId)[0];
  }

  lightboxImage() {
    const lightboxImageWrapperDiv = dom.createElement('div');
    const currentLightboxImage = dom.createElement('img');

    // add style & attributes
    lightboxImageWrapperDiv.classList.add('lightbox-img-wrapper');
    currentLightboxImage.classList.add('lightbox-img');
    currentLightboxImage.setAttribute('src', this.image().src.medium);
    currentLightboxImage.setAttribute('alt', this.image().title);
    lightboxImageWrapperDiv.appendChild(currentLightboxImage);

    return lightboxImageWrapperDiv;
  }

  lightboxImageTitle() {
    // add title
    const currentLightboxImageTitleSpan = dom.createElement('h1');
    currentLightboxImageTitleSpan.classList.add('lightbox-img-title');
    currentLightboxImageTitleSpan.innerHTML = this.image().title;

    return currentLightboxImageTitleSpan;
  }

  render() {
    const lightboxWrapperDiv = dom.createElement('div');
    const lightboxGrayOverlayDiv = dom.createElement('div');

    // setup carousel
    lightboxGrayOverlayDiv.classList.add('lighbox-transparent-gray-bg');
    lightboxWrapperDiv.classList.add('lightbox-wrapper');

    // add lighbox full screen transparent overlay
    lightboxWrapperDiv.appendChild(lightboxGrayOverlayDiv);

    // add lightbox close button
    lightboxWrapperDiv.appendChild(this.lightboxCloseButton());

    if(this.images.length) {
      if (this.openImageId) {
        const lightboxImgNavWrapperDiv = dom.createElement('div');
        lightboxImgNavWrapperDiv.classList.add('lightbox-img-nav-wrapper');

        // add prev arrow navigation button
        lightboxImgNavWrapperDiv.appendChild(this.previousImageGroupArrow());

        // add image with title to display in lightbox
        lightboxImgNavWrapperDiv.appendChild(this.lightboxImage());

        // add next arrow navigation button
        lightboxImgNavWrapperDiv.appendChild(this.nextImageGroupArrow());

        lightboxWrapperDiv.appendChild(this.lightboxImageTitle());
        lightboxWrapperDiv.appendChild(lightboxImgNavWrapperDiv);

      }
    } else {
      lightboxWrapperDiv.innerHTML = 'Oh no, where\'d the images go? ¯\\_(ツ)_/¯';
    }

    return lightboxWrapperDiv;
  }
}

export default ImageLightboxCarousel;
