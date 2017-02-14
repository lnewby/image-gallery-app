import * as apiUtils from './apiUtils.js';

const ImageGalleryAPI = {

  fetchFlickrPhotos(parameters) {
    const url = 'https://api.flickr.com/services/rest';

    const flickrRequest = {
      api_key: '5edc80bcd5e751fcc2664b790f2b1e98',
      method: 'flickr.photos.search',
      nojsoncallback: 1,
      format: 'json',
      ...parameters
    };

    const flickrRequestUrl = apiUtils.buildUrl(url, flickrRequest);

    return apiUtils.get({ url: flickrRequestUrl });
  }
}

export default ImageGalleryAPI;
