import dom from '../../public/utils/DOMUtils.js';

const ImageCrop = ({src, alt, width = 150, height = 150, classList = []}) => {
  // <div class=`${image}`>
  //   <img src=`${src}` alt=`${alt}` class=`image-crop-img` />
  // </div>

  const croppedImageDiv = dom.createElement('div');
  const img = dom.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  img.classList.add(...classList);

  croppedImageDiv.appendChild(img);

  return croppedImageDiv;
};

export default ImageCrop;
