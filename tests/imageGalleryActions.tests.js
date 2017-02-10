import test from 'tape';
import * as actions from '../app/actions/imageGalleryActions.js';

test('action creator - addImage :: Create correct action',
  ({ deepEqual, end }) => {
    const id = '1'
    const src = 'http://placehold.it/100x100';
    const title = 'Test Title'
    const actualAction = actions.addImage(id, src, title);
    const expectedAction = {
      type: 'ADD_IMAGE',
      payload: {
        id,
        src,
        title
      }
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator - removeImage :: Create correct action',
  ({ deepEqual, end }) => {
    const id = '1'
    const actualAction = actions.removeImage(id);
    const expectedAction = {
      type: 'REMOVE_IMAGE',
      payload: {
        id
      }
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator - removeAllImages :: Create correct action',
  ({ deepEqual, end }) => {
    const actualAction = actions.removeAllImages();
    const expectedAction = {
      type: 'REMOVE_ALL_IMAGES'
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator - nextImage :: Create correct action',
  ({ deepEqual, end }) => {
    const actualAction = actions.nextImage();
    const expectedAction = {
      type: 'NEXT_IMAGE'
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator - previousImage :: Create correct action',
  ({ deepEqual, end }) => {
    const actualAction = actions.previousImage();
    const expectedAction = {
      type: 'PREVIOUS_IMAGE'
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator - openImageLightboxCarousel :: Create correct action',
  ({ deepEqual, end }) => {
    const id = '1';
    const actualAction = actions.openImageLightboxCarousel(id);
    const expectedAction = {
      type: 'OPEN_IMAGE_LIGHTBOX_CAROUSEL',
      payload: {
        id
      }
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
);

test('action creator - closeImageLightboxCarousel :: Create correct action',
  ({ deepEqual, end }) => {
    const actualAction = actions.closeImageLightboxCarousel();
    const expectedAction = {
      type: 'CLOSE_IMAGE_LIGHTBOX_CAROUSEL'
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
)
