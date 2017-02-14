export const get = ({ url }) => {
  // Use promise to handle the request
  return new Promise((resolve, reject) => {
    // Create new request handler object
    const request = new XMLHttpRequest();
    
    request.open('GET', url);

    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };

    // Errors handling
    request.onerror = () => reject(Error("Network Error"));

    // Send the request
    request.send();
  });
}

export const buildUrl = (url, parameters) => {
  let newUrl = `${url}/?`;

  for (let key of Object.keys(parameters)) {
    newUrl = `${newUrl}${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}&`;
  }

  // clip off trailing ampersand &
  newUrl = newUrl.slice(0, -1);

  // return build url
  return newUrl;
}
