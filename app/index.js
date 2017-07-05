import {dom} from '../public/utils/DOMUtils.js';
import createStore from './store/createStore.js';
import * as actions from './actions/imageGalleryActions.js';
import * as selectors from './selectors/imageGallerySelectors.js';
import { imageGalleryReducers } from './reducers/imageGalleryReducers.js';
import ImageThumbnailsCarousel from './views/ImageThumbnailsCarousel.js';
import ImageLightboxCarousel from './views/ImageLightboxCarousel.js';
import ImageGalleryAPI from './api/imageGalleryAPI.js';

// Setup store management
const store = createStore(imageGalleryReducers);

// Setup number of thumbnails images per page
store.dispatch(
  actions.setThumbsPerPage(4)
);

// Initial total number of page return by api
store.dispatch(
  actions.setTotalPages(100)
);

// Setup current page number of thumbnail image displaying
store.dispatch(
  actions.setCurrentPage({
    currentPage: 1,
    totalPages: selectors.getTotalPages(store.getState())
  })
);

const handleLightboxImageSlider = ({ event, direction }) => {
  event.preventDefault();

  const state = store.getState();

  const { getIds } = selectors;

  if (direction === 'next') {
    store.dispatch(
      actions.nextImage({
        ids: getIds(state),
      })
    );

    // TODO: Add some Tracking here for analytics
  } else {
    store.dispatch(
      actions.previousImage({
        ids: getIds(state),
      })
    );

    // TODO: Add some Tracking here for analytics
  }
};

const handleThumbnailImageSlider = ({ event, direction }) => {
  event.preventDefault();

  const {
    getIds,
    getTotalPages
  } = selectors;

  if (direction === 'next') {
    // get next set of images if possible
    fetchFlickrPhotos({
      text: selectors.getImageSearchText(store.getState()),
      per_page: selectors.getThumbsPerPage(store.getState()),
      page: selectors.getCurrentPage(store.getState()) + 1
    });

    store.dispatch(
      actions.nextImageGroup({
        ids: getIds(store.getState()),
        totalPages: getTotalPages(store.getState())
      })
    );

    // TODO: Add some Tracking here for analytics
  } else {
    // get previous set of images if possible
    fetchFlickrPhotos({
      text: selectors.getImageSearchText(store.getState()),
      per_page: selectors.getThumbsPerPage(store.getState()),
      page: selectors.getCurrentPage(store.getState()) - 1
    });

    store.dispatch(
      actions.previousImageGroup()
    );
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

const fetchFlickrPhotos = ({text, per_page, page}) => {
  // Update image search text in state
  store.dispatch(
    actions.setImageSearchText(text)
  )

  // create request object
  const flickrRequest = { text, per_page, page };

  // fetch the set of images fro Flickr
  ImageGalleryAPI.fetchFlickrPhotos(flickrRequest)
    .then(JSON.parse)
    .then((data) => {
      // clear current set of images from state
      store.dispatch(
        actions.removeAllImages()
      );

      const {
        photos: {
          page,
          pages,
          photo: photos
        }
      } = data;
      photos.forEach((photo) => {
        const {
          farm,
          id,
          isfamily,
          isfriend,
          ispublic,
          owner,
          secret,
          server,
          title
        } = photo;

        // build photo urls for different sizes
        const src = {
          'thumbnail': `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_t.jpg`,
          'medium': `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`,
          'large': `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_h.jpg`
        };

        // Add iimage to set
        store.dispatch(
          actions.addImage(id, src, title)
        );

        // Update total pages in state
        store.dispatch(
          actions.setTotalPages(pages)
        );
      });
    });
}

const render = () => {
  // Fetch photos and setup state
  const state = store.getState();
  const {
    getIds,
    getAllImages,
    getOpenImageId,
    getThumbsPerPage,
    getTotalPages,
    getCurrentPage
  } = selectors;

  const props = {
    ids: getIds(state),
    currentPage: getCurrentPage(state),
    totalPages: getTotalPages(state),
    images: getAllImages(state),
    openImageId: getOpenImageId(state),
    handleLightboxImageSlider,
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

// Now get the initial stote set of imnage from Flickr
fetchFlickrPhotos({
  text: 'kittens',
  per_page: selectors.getThumbsPerPage(store.getState()),
  page: selectors.getCurrentPage(store.getState())
});

// Do the initial page render
render();
