import dom from '../../public/utils/DOMUtils.js';
import ThumbnailImage from './ThumbnailImage.js';
import createStore from '../store/createStore.js';

class ImageThumbnailsCarousel {

  constructor({images = [], thumbsPerPage, startImageMarker = 0, openImageLightboxCarousel}) {
    this.images = images;
    this.thumbsPerPage = thumbsPerPage;
    this.startImageMarker = startImageMarker;
    this.openImageLightboxCarousel = openImageLightboxCarousel;
  }

  getImagePartition() {
    const start = this.startImageMarker;
    const end = start + this.thumbsPerPage;

    return this.images.slice(start, end);
  }

  handleThumbnailImageSlider({event, direction}) {
    event.preventDefault();

    const {
      startImageMarker,
      thumbsPerPage,
      images
    } = this;

    const newStartImageMarker = (direction === 'next' ) ? startImageMarker + thumbsPerPage : startImageMarker - thumbsPerPage;
    console.log(`newStartImageMarker: ${newStartImageMarker}, images.length: ${images.length}, thumbsPerPage: ${thumbsPerPage}`);

    if (newStartImageMarker >= 0 && newStartImageMarker <=  images.length) {
      // TODO: Add some Tracking here for analytics

      this.startImageMarker = newStartImageMarker;
    }
  }

  nextImageGroupArrow() {
    const nextArrowButton = dom.createElement('button');
    nextArrowButton.classList.add('icon-right-circled', 'carousel-arrow-controls');
    nextArrowButton.setAttribute('aria-label', 'Next thumbnail images');
    nextArrowButton.addEventListener('click', (e) => this.handleThumbnailImageSlider({event: e, direction: 'next'}));

    return nextArrowButton;
  }

  previousImageGroupArrow() {
    const previousArrowButton = dom.createElement('button');
    previousArrowButton.classList.add('icon-left-circled', 'carousel-arrow-controls');
    previousArrowButton.setAttribute('aria-label', 'Previous thumbnail images');
    previousArrowButton.addEventListener('click', (e) => this.handleThumbnailImageSlider({event: e, direction: 'previous'}));

    return previousArrowButton;
  }

  render() {
    const carouselWrapperDiv = dom.createElement('div');
    const { images } = this;

    // setup carousel
    carouselWrapperDiv.classList.add('carousel-wrapper');

    // add prev arrow navigation button
    carouselWrapperDiv.appendChild(this.previousImageGroupArrow());

    if(images.length) {
      /*
      <div>
        <img src=`${image.src} alt=`${image.title}` width='100' height='100'>
      </div>
      */
      this.getImagePartition().map((image, index, images) => {
        const thumbnail = new ThumbnailImage({ images, image, width: 100, height: 100 });
        carouselWrapperDiv.appendChild(thumbnail.render());

      });
    } else {
      carouselWrapperDiv.innerHTML = 'No thumbnail images ¯\\_(ツ)_/¯';
    }

    // add next arrow navigation button
    carouselWrapperDiv.appendChild(this.nextImageGroupArrow());

    return carouselWrapperDiv;
  }
}

export default ImageThumbnailsCarousel;
