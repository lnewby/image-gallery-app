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

export const previousImage = ({ids}) => ({
  type: 'PREVIOUS_IMAGE',
  payload: {
    ids
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
