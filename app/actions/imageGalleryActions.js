import { v4 } from 'uuid';

export const addImage = (id = v4(), url, title) => ({
  type: 'ADD_IMAGE',
  payload: {
    id,
    url,
    title
  }
});
