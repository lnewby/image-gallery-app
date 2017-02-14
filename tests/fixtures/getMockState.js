/*
The reason we are using methods to return a new state objects every time —
instead of simply having a large static object — is because we want to protect
ourselves from making it possible for tests to affect one another. If a test
was to accidentally mutate part of the state inside the helper (and the helper
was just a plain mutable JS object), it would result in the following tests
working with modified data, probably making those tests fail without a good
reason — a debugging nightmare! Using a method to return a new state object
each time makes sure our tests are truly isolated from one another.
*/
export const getMockState = {
  withoutImages: () => ({
    byId: {},
    ids: [],
    openImageId: null,
    startImageMarker: 0,
    thumbsPerPage: null
  }),

  withOneImage: () => ({
    byId: {
      '1': {
        id: '1',
        src: 'http://placehold.it/100x100',
        title: 'Test Title'
      }
    },
    ids: ['1'],
    openImageId: '1',
    startImageMarker: 0,
    thumbsPerPage: 1
  }),

  withManyImages: () => ({
    byId: {
      '1': {
        id: '1',
        src: 'http://placehold.it/100x100',
        title: 'Test Title 1'
      },
      '2': {
        id: '2',
        src: 'http://placehold.it/100x100',
        title: 'Test Title 2'
      },
      '3': {
        id: '3',
        src: 'http://placehold.it/100x100',
        title: 'Test Title 3'
      },
      '4': {
        id: '4',
        src: 'http://placehold.it/100x100',
        title: 'Test Title 4'
      },
      '5': {
        id: '5',
        src: 'http://placehold.it/100x100',
        title: 'Test Title 5'
      },
      '6': {
        id: '6',
        src: 'http://placehold.it/100x100',
        title: 'Test Title 6'
      },
      '7': {
        id: '7',
        src: 'http://placehold.it/100x100',
        title: 'Test Title 7'
      }
    },
    ids: ['1', '2', '3', '4', '5', '6', '7'],
    openImageId: '4',
    thumbsPerPage: 4,
    startImageMarker: 0
  })
};
