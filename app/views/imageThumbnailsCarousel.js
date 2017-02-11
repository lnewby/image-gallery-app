import dom from '../../public/utils/DOMUtils.js';
import ThumbnailImage from './ThumbnailImage.js';

const ImageThumbnailsCarousel = ({images = [], thumbsPerPage, imageMarker, openImageLightboxCarousel}) => {
  const imageGroup = () => {
    const start = imageMarker;
    const end = start + thumbsPerPage;

    return this.props.images.slice(start, end);
  }

  const rootImageGalleryNode = dom.getElementById('image-gallery-app');

  const div = dom.createElement('div');
  div.textContent = 'Hello, Image Thumbnail Carousel!';
  rootImageGalleryNode.appendChild(div);

  if(images.length) {
    /*
    <div>
      <img src=`${image.src} alt=`${image.title}` width='100' height='100'>
    </div>
    */
    images.map((image, index, images) => {
      const thumbnail = new ThumbnailImage({ images, image, width: 100, height: 100 });
      rootImageGalleryNode.appendChild(thumbnail.render());
    });
  } else {
    dom.write('No images');
  }


};

export default ImageThumbnailsCarousel;
