import test from 'tape';
import * as actions from '../app/actions/imageGalleryActions.js';

test('action creator - addImage :: Create correct action',
  ({ deepEqual, end }) => {
    const id = '1'
    const url = 'http://slack.com';
    const title = 'Test Title'
    const actualAction = actions.addImage(id, url, title);
    const expectedAction = {
      type: 'ADD_IMAGE',
      payload: {
        id,
        url,
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
