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

export const openImageId = (state = {}, { type, payload: { ids } }) => {
  const currentOpenImageIndex = ids.indexOf(state)

  switch (type) {
    case 'NEXT_IMAGE':
      return (currentOpenImageIndex < ids.length)
        ? ids[currentOpenImageIndex + 1]
        : -1; // negative -1 indicates on more images exist

    case 'PREVIOUS_IMAGE':
      return (currentOpenImageIndex > 0)
        ? ids[currentOpenImageIndex - 1]
        : -1; // negative -1 indicates on more images exist

    case 'OPEN_IMAGE_LIGHTBOX_CAROUSEL':
    case 'CLOSE_IMAGE_LIGHTBOX_CAROUSEL':

    default:
      return state;
  }
}
