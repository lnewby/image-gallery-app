export const getImage = (state = {}, id) => state.byId[id] || {};

export const getAllImages = (state) => state.ids.map((id) => state.byId[id]);

export const getIds = (state) => state.ids;

export const getOpenImageId = (state) => state.openImageId;

export const getCurrentPage = (state) => state.currentPage

export const getTotalPages = (state) => state.totalPages;

export const getThumbsPerPage = (state) => state.thumbsPerPage;

export const getImageSearchText = (state) => state.imageSearchText;
