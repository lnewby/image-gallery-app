// TODO: build out library to handle DOM API manipulation
export const dom = document;

export const checkImageLoaded = ( path ) => {

  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({path, status: 'ok', img});
    img.onerror = () => resolve({path, status: 'error'});

    img.src = path;
  });
}
