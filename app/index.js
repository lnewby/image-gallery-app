import dom from '../public/utils/DOMUtils.js';
import createStore from './store/createStore.js';
import * as actions from './actions/imageGalleryActions.js';
import * as selectors from './selectors/imageGallerySelectors.js';
import { imageGalleryReducers } from './reducers/imageGalleryReducers.js';
import ImageThumbnailsCarousel from './views/ImageThumbnailsCarousel.js';
import ImageLightboxCarousel from './views/ImageLightboxCarousel.js';


const store = createStore(imageGalleryReducers);

const handleThumbnailImageSlider = ({ event, direction }) => {
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

const handleOpenImageLightboxCarousel = ({event, id}) => {
  event.preventDefault();

  const state = store.getState();

  store.dispatch(
    actions.openImageLightboxCarousel({
      id
    })
  );

  // TODO: Add some Tracking here for analytics
};

const handleCloseImageLightboxCarousel = (event) => {
  event.preventDefault();

  const state = store.getState();

  store.dispatch(
    actions.closeImageLightboxCarousel()
  );

  // TODO: Add some Tracking here for analytics
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
    handleOpenImageLightboxCarousel,
    handleCloseImageLightboxCarousel
  };

  const carousel = new ImageThumbnailsCarousel(props);
  const lightbox = new ImageLightboxCarousel(props);
  const rootImageGalleryNode = dom.getElementById('image-gallery-app');
  const rootLightboxNode = dom.getElementById('lightbox');

  rootImageGalleryNode.innerHTML = '';
  rootLightboxNode.innerHTML = '';

  if (props.openImageId) {
    rootLightboxNode.classList.remove('hidden');
  } else {
    rootLightboxNode.classList.add('hidden');
  }
  rootImageGalleryNode.appendChild(carousel.render());
  rootLightboxNode.appendChild(lightbox.render());
};

store.subscribe(render);
render();
