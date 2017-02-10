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
    id: [],
    openImageId: null
  }),

  withOneImage: () => ({
    byId: {
      '1': {
        id: '1',
        src: 'http://placehold.it/100x100',
        title: 'Test Title'
      }
    },
    id: ['1'],
    openImageId: null
  }),
}
