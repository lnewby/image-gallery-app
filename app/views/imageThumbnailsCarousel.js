import dom from '../../public/utils/DOMUtils.js';
import ThumbnailImage from './ThumbnailImage.js';

class ImageThumbnailsCarousel {

  constructor({
    images = [],
    totalPages,
    currentPage,
    handleOpenImageLightboxCarousel,
    handleThumbnailImageSlider
  }) {
    this.images = images;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
    this.handleOpenImageLightboxCarousel = handleOpenImageLightboxCarousel;
    this.handleThumbnailImageSlider = handleThumbnailImageSlider;
  }

  nextImageGroupArrow() {
    const {
      images,
      totalPages,
      currentPage,
      handleThumbnailImageSlider
    } = this;
    const nextArrowButton = dom.createElement('button');
    nextArrowButton.classList.add('icon-right-circled', 'carousel-arrow-controls');
    nextArrowButton.disabled = (currentPage + 1 >= totalPages);
    nextArrowButton.setAttribute('aria-label', 'Next thumbnail images');
    nextArrowButton.addEventListener('click', (event) => handleThumbnailImageSlider({event, direction: 'next' }));

    return nextArrowButton;
  }

  previousImageGroupArrow() {
    const {
      currentPage,
      handleThumbnailImageSlider
    } = this;

    const previousArrowButton = dom.createElement('button');
    previousArrowButton.classList.add('icon-left-circled', 'carousel-arrow-controls');
    previousArrowButton.disabled = (currentPage - 1 < 1);
    previousArrowButton.setAttribute('aria-label', 'Previous thumbnail images');
    previousArrowButton.addEventListener('click', (event) => handleThumbnailImageSlider({event, direction: 'previous' }));

    return previousArrowButton;
  }

  render() {
    const carouselWrapperDiv = dom.createElement('div');

    // setup carousel
    carouselWrapperDiv.classList.add('carousel-wrapper');

    // add prev arrow navigation button
    carouselWrapperDiv.appendChild(this.previousImageGroupArrow());

    if(this.images.length) {
      /*
      <div>
        <img src=`${image.src} alt=`${image.title}` width='100' height='100'>
      </div>
      */
      this.images.forEach((image, index, images) => {
        const handleOpenImageLightboxCarousel = this.handleOpenImageLightboxCarousel;

        const thumbnail = new ThumbnailImage({
          images,
          image,
          width: 100,
          height: 100,
          handleOpenImageLightboxCarousel
        });
        carouselWrapperDiv.appendChild(thumbnail.render());
      });

      // add next arrow navigation button
      carouselWrapperDiv.appendChild(this.nextImageGroupArrow());

    } else {
      carouselWrapperDiv.innerHTML = 'Oh no, where\'d the images go? ¯\\_(ツ)_/¯';
    }

    return carouselWrapperDiv;
  }
}

export default ImageThumbnailsCarousel;
