import test from 'tape';
import * as actions from '../app/actions/imageGalleryActions.js';

test('action creator - addImage :: Create correct action',
  ({ deepEqual, end }) => {
    const testUrl = 'http://slack.com';
    const testTitle = 'Test Title'
    const actualAction = actions.addImage(testUrl, testTitle);
    const expectedAction = {
      type: 'ADD_IMAGE'
      payload: {
        id: '1',
        url: testUrl,
        title: testTitle
      }
    }

    deepEqual(actualAction, expectedAction);
    end();
  }
);
