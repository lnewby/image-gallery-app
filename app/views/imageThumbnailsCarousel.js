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
    carouselWrapperDiv.style.cssText = `
      position: absolute;
      display: flex;
      padding: 5px;
      box-shadow: rgba(50, 50, 50, 0.74902) 1px 1px 10px 0px
    `;
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
