import { v4 } from 'uuid';

export const addImage = (id = v4(), url, title) => ({
  type: 'ADD_IMAGE',
  payload: {
    id,
    url,
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

export const nextImage = () => ({
  type: 'NEXT_IMAGE'
});

export const previousImage = () => ({
  type: 'PREVIOUS_IMAGE'
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
