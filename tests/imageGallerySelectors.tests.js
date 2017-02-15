import test from 'tape';
import * as selectors from '../app/selectors/imageGallerySelectors.js';
import { getMockState } from './fixtures/getMockState.js';

test('selectors - getImage :: return an image object from state',
  ({ deepEqual, end }) => {
    const state = getMockState.withManyImages();
    const actualImage = selectors.getImage(state, '3');
    const expectedImage = {
      id: '3',
      src: 'http://placehold.it/100x100',
      title: 'Test Title 3'
    };

    deepEqual(actualImage, expectedImage);
    end();
  }
);

test('selectors - getImage :: return an empty object if no images exist',
  ({ deepEqual, end }) => {
    const state = getMockState.withoutImages();
    const actualImage = selectors.getImage(state, '3');
    const expectedImage = {};

    deepEqual(actualImage, expectedImage);
    end();
  }
);

test('selectors - getAllImages :: return an array of all image objects from state',
  ({ deepEqual, end }) => {
    const state = getMockState.withOneImage();
    const actualImages = selectors.getAllImages(state);
    const expectedImages = [{
      id: '1',
      src: 'http://placehold.it/100x100',
      title: 'Test Title'
    }];

    deepEqual(actualImages, expectedImages);
    end();
  }
);

test('selectors - getAllImages :: return an empty array if no images exist',
  ({ deepEqual, end }) => {
    const state = getMockState.withoutImages();
    const actualImages = selectors.getAllImages(state);
    const expectedImages = [];

    deepEqual(actualImages, expectedImages);
    end();
  }
);

test('selectors - getOpenImageId :: return id of the open Image',
  ({ equal, end }) => {
    const state = getMockState.withOneImage();
    const actualId = selectors.getOpenImageId(state);
    const expectedId = '1'

    equal(actualId, expectedId)
    end();
  }
);

test('selectors - getOpenImageId :: return null if no image is open',
  ({ equal, end }) => {
    const state = getMockState.withoutImages();
    const actualId = selectors.getOpenImageId(state);
    const expectedId = null;

    equal(actualId, expectedId)
    end();
  }
);
