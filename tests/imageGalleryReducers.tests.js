import test from 'tape';
import * as reducers from '../app/reducers/imageGalleryReducers.js';
import * as actions from '../app/actions/imageGalleryActions.js';
import { getMockState } from './fixtures/getMockState.js'

test('reducers - byId :: Handle addImage action',
  ({ deepEqual, end }) => {
    const state = getMockState.withoutImages();
    const id = '1'
    const src = 'http://placehold.it/100x100';
    const title = 'Test Title'
    const actualState = reducers.byId(state.byId, actions.addImage(id, src, title));
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
    const state = getMockState.withOneImage();
    const id = '1'
    const actualState = reducers.byId(state.byId, actions.removeImage(id));
    const expectedState = {};

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - ids :: Handle addImage action',
  ({ deepEqual, end }) => {
    const state = getMockState.withoutImages();
    const id = '1'
    const src = 'http://placehold.it/100x100';
    const title = 'Test Title'
    const actualState = reducers.ids(state.ids, actions.addImage(id, src, title));
    const expectedState = [id];

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - ids :: Handle removeImage action',
  ({ deepEqual, end }) => {
    const state = getMockState.withOneImage();
    const id = '1'
    const actualState = reducers.ids(state.ids, actions.removeImage(id));
    const expectedState = [];

    deepEqual(actualState, expectedState);
    end();
  }
);

test('reducers - ids :: Handle removeAllImages action',
  ({ deepEqual, end }) => {
    const state = getMockState.withManyImages();
    const actualState = reducers.ids(state.ids, actions.removeAllImages());
    const expectedState = [];

    deepEqual(actualState, expectedState);
    end();
  }
);
