import ImageCrop from './ImageCrop.js';
import dom from '../../public/utils/DOMUtils.js';

const ThumbnailImage = ({images, image, width, height}) => {
  console.log(image);
  const {
    src,
    title: alt
  } = image;
  return ImageCrop({src, alt});
};

export default ThumbnailImage;
