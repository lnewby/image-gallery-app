import test from 'tape';
import * as selectors from '../app/selectors/imageGallerySelectors.js';
import { getMockState } from './fixtures/getMockState.js';

test('selectors - getImage :: return an image object from state',
  ({ deepEqual, end }) => {
    const initialState = getMockState.withManyImages();
    const actualState = selectors.getImage(initialState, '3');
    const expectedState = {
      id: '3',
      src: 'http://placehold.it/100x100',
      title: 'Test Title 3'
    };

    deepEqual(actualState, expectedState);
    end();
  }
);

test('selectors - getImages :: return an array of all image objects from state',
  ({ deepEqual, end }) => {
    const initialState = getMockState.withManyImages();
    const actualState = selectors.getImages(initialState);
    const expectedState = [...initialState.byId];

    deepEqual(actualState, expectedState);
    end();
  }
);
