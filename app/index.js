import dom from '../public/utils/DOMUtils.js';
import * as selectors from './selectors/imageGallerySelectors.js';
import { getMockState } from '../tests/fixtures/getMockState.js';
import ImageThumbnailsCarousel from './views/ImageThumbnailsCarousel.js';

const state = getMockState.withManyImages();
const {
  getAllImages,
  getOpenImageId
} = selectors;

const props = {
  images: getAllImages(state),
  openImageId: getOpenImageId(state)
};
console.log(props.images);

const rootImageGalleryNode = dom.getElementById('image-gallery-app');
const carousel = new ImageThumbnailsCarousel(props);

rootImageGalleryNode.appendChild(carousel.render());
