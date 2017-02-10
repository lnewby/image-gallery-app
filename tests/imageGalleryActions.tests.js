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
