import { v4 } from 'uuid';

export const addImage = (id = v4(), src, title) => ({
  type: 'ADD_IMAGE',
  payload: {
    id,
    src,
    title
  }
});

export const removeImage = (id) => ({
  type: 'REMOVE_IMAGE',
  payload: {
    id
  }
});

export const removeAllImages = () => ({
  type: 'REMOVE_ALL_IMAGES'
});

export const nextImage = ({ids}) => ({
  type: 'NEXT_IMAGE',
  payload: {
    ids
  }
});

export const nextImageGroup = ({ids, thumbsPerPage}) => ({
  type: 'NEXT_IMAGE_GROUP',
  payload: {
    ids,
    thumbsPerPage
  }
});

export const previousImage = ({ids}) => ({
  type: 'PREVIOUS_IMAGE',
  payload: {
    ids
  }
});

export const previousImageGroup = ({ids, thumbsPerPage}) => ({
  type: 'PREVIOUS_IMAGE_GROUP',
  payload: {
    ids,
    thumbsPerPage
  }
});

export const openImageLightboxCarousel = (id) => ({
  type: 'OPEN_IMAGE_LIGHTBOX_CAROUSEL',
  payload: {
    id
  }
});

export const closeImageLightboxCarousel = () => ({
  type: 'CLOSE_IMAGE_LIGHTBOX_CAROUSEL'
});

export const setThumbsPerPage = (thumbsPerPage) => ({
  type: 'SET_THUMBS_PER_PAGE',
  payload: {
    thumbsPerPage
  }
});

export const setStartImageMarker = (startImageMarker) => ({
  type: 'SET_START_IMAGE_MARKER',
  payload: {
    startImageMarker
  }
});
