import test from 'tape';
import * as reducers from '../app/reducers/imageGalleryReducers.js';
import * as actions from '../app/actions/imageGalleryActions.js';
import { getMockState } from './fixtures/getMockState.js';

test('reducers - byId :: Handle addImage action',
  ({ deepEqual, end }) => {
    const initialState = getMockState.withoutImages();
    const id = '1'
    const src = 'http://placehold.it/100x100';
    const title = 'Test Title'
    const actualState = reducers.byId(
      initialState.byId,
      actions.addImage(id, src, title)
    );
    const expectedState = {
      [id]: {
        id,
        src,
        title
      }
    };

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - byId :: Handle removeImage action',
  ({ deepEqual, end }) => {
    const initialState = getMockState.withOneImage();
    const id = '1'
    const actualState = reducers.byId(
      initialState.byId,
      actions.removeImage(id)
    );
    const expectedState = {};

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - ids :: Handle addImage action',
  ({ deepEqual, end }) => {
    const initialState = getMockState.withoutImages();
    const id = '1'
    const src = 'http://placehold.it/100x100';
    const title = 'Test Title'
    const actualState = reducers.ids(
      initialState.ids,
      actions.addImage(id, src, title)
    );
    const expectedState = [id];

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - ids :: Handle removeImage action',
  ({ deepEqual, end }) => {
    const initialState = getMockState.withOneImage();
    const id = '1'
    const actualState = reducers.ids(
      initialState.ids,
      actions.removeImage(id)
    );
    const expectedState = [];

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - ids :: Handle removeAllImages action',
  ({ deepEqual, end }) => {
    const initialState = getMockState.withManyImages();
    const actualState = reducers.ids(
      initialState.ids,
      actions.removeAllImages()
    );
    const expectedState = [];

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - openImageId :: Handle nextImage action',
  ({ equal, end }) => {
    const initialState = getMockState.withManyImages();
    const actualState = reducers.openImageId(
      initialState.openImageId,
      actions.nextImage(initialState)
    );
    const expectedState = '5';

    equal(actualState, expectedState);
    end();
  }
);

test('reducers - openImageId :: Handle nextImage action edge case if no more images are next up',
  ({ equal, end }) => {
    const initialState = getMockState.withOneImage();
    const actualState = reducers.openImageId(
      initialState.openImageId,
      actions.nextImage(initialState)
    );
    const expectedState = initialState.openImageId;

    equal(actualState, expectedState);
    end();
  }
);

test('reducers - openImageId :: Handle previousImage action',
  ({ equal, end }) => {
    const initialState = getMockState.withManyImages();
    const actualState = reducers.openImageId(
      initialState.openImageId,
      actions.previousImage(initialState)
    );
    const expectedState = '3';

    equal(actualState, expectedState);
    end();
  }
);

test('reducers - openImageId :: Handle previousImage action edge case if no more images are previous',
  ({ equal, end }) => {
    const initialState = getMockState.withOneImage();
    const actualState = reducers.openImageId(
      initialState.openImageId,
      actions.previousImage(initialState)
    );
    const expectedState = initialState.openImageId;

    equal(actualState, expectedState);
    end();
  }
);

test('reducers - openImageId :: Handle openImageLightboxCarousel action',
  ({ equal, end }) => {
    const initialState = getMockState.withManyImages();
    const id = '7' // id of selected/clicked image
    const actualState = reducers.openImageId(
      initialState.openImageId,
      actions.openImageLightboxCarousel(id)
    );
    const expectedState = '7';

    equal(actualState, expectedState);
    end();
  }
);

test('reducers - openImageId :: Handle closeImageLightboxCarousel action',
  ({ equal, end }) => {
    const initialState = getMockState.withManyImages();
    const actualState = reducers.openImageId(
      initialState.openImageId,
      actions.closeImageLightboxCarousel()
    );
    const expectedState = null;

    equal(actualState, expectedState);
    end();
  }
);
