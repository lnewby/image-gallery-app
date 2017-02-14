import dom from '../public/utils/DOMUtils.js';
import createStore from './store/createStore.js';
import * as actions from './actions/imageGalleryActions.js';
import * as selectors from './selectors/imageGallerySelectors.js';
import { imageGalleryReducers } from './reducers/imageGalleryReducers.js';
import ImageThumbnailsCarousel from './views/ImageThumbnailsCarousel.js';


const store = createStore(imageGalleryReducers);

const handleThumbnailImageSlider = ({event, direction}) => {
  event.preventDefault();

  const state = store.getState();

  const {
    getIds,
    getAllImages,
    getThumbsPerPage,
    getStartImageMarker
  } = selectors;

  if (direction === 'next') {
    store.dispatch(
      actions.nextImageGroup({
        ids: getIds(state),
        thumbsPerPage: getThumbsPerPage(state)
      })
    );

    // TODO: Add some Tracking here for analytics
  } else {
    store.dispatch(
      actions.previousImageGroup({
        ids: getIds(state),
        thumbsPerPage: getThumbsPerPage(state)
      })
    );

    // TODO: Add some Tracking here for analytics
  }
};

const openImageLightboxCarousel = (event) => {
  event.preventDefault();

  console.log('openImageLightboxCarousel');
};

const render = () => {
  const state = store.getState();

  const {
    getAllImages,
    getOpenImageId,
    getThumbsPerPage,
    getStartImageMarker
  } = selectors;

  const props = {
    thumbsPerPage: getThumbsPerPage(state),
    startImageMarker: getStartImageMarker(state),
    images: getAllImages(state),
    openImageId: getOpenImageId(state),
    handleThumbnailImageSlider,
    openImageLightboxCarousel
  };

  const carousel = new ImageThumbnailsCarousel(props);
  const rootImageGalleryNode = dom.getElementById('image-gallery-app');

  rootImageGalleryNode.innerHTML = '';
  rootImageGalleryNode.appendChild(carousel.render());
};

store.subscribe(render);
render();
