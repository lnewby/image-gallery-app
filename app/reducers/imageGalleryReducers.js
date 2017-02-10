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

export const ids = (state = [], { type, payload }) => {
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

export const openImageId = (state = null, { type, payload }) => {
  const currentOpenImageIndex = ((payload || {}).ids || []).indexOf(state);

  switch (type) {
    case 'NEXT_IMAGE':
      return (currentOpenImageIndex < payload.ids.length - 1)
        ? payload.ids[currentOpenImageIndex + 1]
        : state

    case 'PREVIOUS_IMAGE':
      return (currentOpenImageIndex > 0)
        ? payload.ids[currentOpenImageIndex - 1]
        : state

    case 'OPEN_IMAGE_LIGHTBOX_CAROUSEL':
      return payload.id;

    case 'CLOSE_IMAGE_LIGHTBOX_CAROUSEL':
      return null;

    default:
      return state;
  }
}
