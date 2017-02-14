import dom from '../../public/utils/DOMUtils.js';

class ImageLightboxCarousel {

  constructor({
    images = [],
    openImageId,
    handleCloseImageLightboxCarousel
  }) {
    this.images = images;
    this.openImageId = openImageId;
    this.handleCloseImageLightboxCarousel = handleCloseImageLightboxCarousel;
    // this.thumbsPerPage = thumbsPerPage;
    // this.startImageMarker = startImageMarker;
    // this.openImageLightboxCarousel = openImageLightboxCarousel;
    // this.handleThumbnailImageSlider = handleThumbnailImageSlider;
  }

  nextImageGroupArrow() {
    const {
      images,
      // startImageMarker
      // handleLightboxImageSlider
    } = this;
    const nextArrowButton = dom.createElement('button');
    nextArrowButton.classList.add('icon-right-circled', 'lighbox-arrow-controls');
    // nextArrowButton.disabled = (startImageMarker + 1 >= images.length);
    nextArrowButton.setAttribute('aria-label', 'Next thumbnail images');
    // nextArrowButton.addEventListener('click', (event) => handleLightboxImageSlider({event, direction: 'next' }));

    return nextArrowButton;
  }

  previousImageGroupArrow() {
    // const {
      // startImageMarker,
      // handleLightboxImageSlider
    // } = this;

    const previousArrowButton = dom.createElement('button');
    previousArrowButton.classList.add('icon-left-circled', 'lighbox-arrow-controls');
    // previousArrowButton.disabled = (startImageMarker - 1 < 0);
    previousArrowButton.setAttribute('aria-label', 'Previous thumbnail images');
    // previousArrowButton.addEventListener('click', (event) => handleLightboxImageSlider({event, direction: 'previous' }));

    return previousArrowButton;
  }

  lightboxCloseButton() {
    const lightboxCloseButton = dom.createElement('button');
    lightboxCloseButton.classList.add('icon-cancel-circled', 'lightbox-close-btn')
    lightboxCloseButton.setAttribute('aria-label', 'Lightbox close button');
    lightboxCloseButton.addEventListener('click', (event) => this.handleCloseImageLightboxCarousel(event));

    return lightboxCloseButton;
  }

  render() {
    const lightboxWrapperDiv = dom.createElement('div');

    // setup carousel
    lightboxWrapperDiv.classList.add('lightbox-wrapper');

    // add lightbox close button
    lightboxWrapperDiv.appendChild(this.lightboxCloseButton());

    // add prev arrow navigation button
    lightboxWrapperDiv.appendChild(this.previousImageGroupArrow());

    if(this.images.length) {
      if (this.openImageId) {
        const image = this.images.filter((image) => image.id === this.openImageId)[0];

        // create image to display in lightbox
        const currentLightboxImage = dom.createElement('img');
        currentLightboxImage.setAttribute('src', image.src);
        currentLightboxImage.setAttribute('alt', image.alt);
        // currentLightboxImage.classList.add(...this.imgClassList);
        lightboxWrapperDiv.appendChild(currentLightboxImage)

        // add next arrow navigation button
        lightboxWrapperDiv.appendChild(this.nextImageGroupArrow());
      }
    } else {
      lightboxWrapperDiv.innerHTML = 'Oh no, where\'d the images go? ¯\\_(ツ)_/¯';
    }

    return lightboxWrapperDiv;
  }
}

export default ImageLightboxCarousel;
