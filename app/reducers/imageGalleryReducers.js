export const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_IMAGE':
      return Object.assign({}, state, {[payload.id]: payload});

    case 'REMOVE_IMAGE':
      const {[payload.id]: remove, ...rest } = state;
      return rest;

    default:
      return state;
  }
}

export const ids = (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_IMAGE':
      return [...state, payload.id];

    case 'REMOVE_IMAGE':
      return state.filter( element => element != payload.id );

    case 'REMOVE_ALL_IMAGES':
      return [];

    default:
      return state;
  }
}
