export const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case 'ADD_IMAGE':
      return Object.assign({}, state, {[payload.id]: payload});

    case 'REMOVE_IMAGE':
    default:
      return state;
  }
}
