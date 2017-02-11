export const getImage = (state = {}, id) => state.byId[id] || {};

export const getAllImages = (state) => state.ids.map((id) => state.byId[id]);

export const getOpenImageId = (state) => state.openImageId;
