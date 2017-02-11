import * as selectors from './selectors/imageGallerySelectors.js';
import { getMockState } from '../tests/fixtures/getMockState.js';
import ImageThumbnailsCarousel from './views/ImageThumbnailsCarousel.js';

const state = getMockState.withManyImages();
const {
  getAllImages,
  getOpenImageId
} = selectors;
const images = getAllImages(state);
const openImageId = getOpenImageId(state);
console.log(images);
ImageThumbnailsCarousel({images, openImageId, null});
