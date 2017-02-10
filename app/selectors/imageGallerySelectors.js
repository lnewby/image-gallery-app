export const getImage = (state = {}, id) => state.byId[id];

export const getImages = (state) => [...state.byId];
