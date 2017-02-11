export const getImage = (state = {}, id) => state.byId[id] || {};

export const getAllImages = (state) => [...state.byId];
