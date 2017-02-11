const ImageThumbnailsCarousel = ({images = [], openImageId, openImageLightboxCarousel}) => {
  const $d = document;
  const rootImageGalleryNode = $d.getElementById('image-gallery-app');

  const div = $d.createElement('div');
  div.textContent = 'Hello, Image Thumbnail Carousel!';
  rootImageGalleryNode.appendChild(div);

  if(images.length) {
    /*
    <div>
      <img src=`${image.src} alt=`${image.title}` width='100' height='100'>
    </div>
    */
    images.map((image, index) => {
      $d.write(`${index}: ${image.title}, `);
    });
  } else {
    $d.write('No images');
  }

};

export default ImageThumbnailsCarousel;
