import dom from '../../public/utils/DOMUtils.js';
import ThumbnailImage from './ThumbnailImage.js';

const ImageThumbnailsCarousel = ({images = [], openImageId, openImageLightboxCarousel}) => {
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
      dom.write(`${index}: ${image.title}, `);
      rootImageGalleryNode.appendChild(ThumbnailImage({images, openImageId}));
    });
  } else {
    dom.write('No images');
  }


};

export default ImageThumbnailsCarousel;
