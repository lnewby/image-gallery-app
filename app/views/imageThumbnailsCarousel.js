import dom from '../../public/utils/DOMUtils.js';
import ThumbnailImage from './ThumbnailImage.js';

class ImageThumbnailsCarousel {

  constructor({images = [], thumbsPerPage, imageMarker, openImageLightboxCarousel}) {
    this.images = images;
    this.thumbsPerPage = thumbsPerPage;
    this.imageMarker = imageMarker;
    this.openImageLightboxCarousel = openImageLightboxCarousel;
  }

  imageGroup() {
    const start = this.imageMarker;
    const end = start + this.thumbsPerPage;

    return this.images.slice(start, end);
  }

  render() {
    const carouselWrapperDiv = dom.createElement('div');
    carouselWrapperDiv.classList.add('carousel-wrapper');
    const { images } = this;

    if(images.length) {
      /*
      <div>
        <img src=`${image.src} alt=`${image.title}` width='100' height='100'>
      </div>
      */
      images.map((image, index, images) => {
        const thumbnail = new ThumbnailImage({ images, image, width: 100, height: 100 });
        carouselWrapperDiv.appendChild(thumbnail.render());

      });
    } else {
      carouselWrapperDiv.innerHTML = 'No thumbnail images ¯\\_(ツ)_/¯';
    }

    return carouselWrapperDiv;
  }
}

export default ImageThumbnailsCarousel;
