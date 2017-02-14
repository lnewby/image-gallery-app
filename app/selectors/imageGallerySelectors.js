export const getImage = (state = {}, id) => state.byId[id] || {};

export const getAllImages = (state) => state.ids.map((id) => state.byId[id]);

export const getIds = (state) => state.ids;

export const getOpenImageId = (state) => state.openImageId;

export const getStartImageMarker = (state) => state.startImageMarker;

export const getThumbsPerPage = (state) => state.thumbsPerPage;
