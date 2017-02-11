import * as selectors from './selectors/imageGallerySelectors.js';
import { getMockState } from '../tests/fixtures/getMockState.js';
import ImageThumbnailsCarousel from './views/ImageThumbnailsCarousel.js';

const state = getMockState.withManyImages();
const images = selectors.getAllImages(state);
console.log(images);
ImageThumbnailsCarousel({images, null, null});
