import ImageCrop from './ImageCrop.js';
import dom from '../../public/utils/DOMUtils.js';

const ThumbnailImage = ({images, openImageId, width, height}) => {
  console.log(openImageId);
  const {
    src,
    title
  } = images[openImageId];
  return ImageCrop({src, title});
};

export default ThumbnailImage;
