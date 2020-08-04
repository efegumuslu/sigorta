const BASE_URL = 'http://18.158.229.24/api/';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const request = (method, endpoint, body, isFullPath = false) => {
  console.log('api request', method, endpoint, body);
  return new Promise((resolve, reject) => {
    const requestParams = {
      method,
      headers: HEADERS,
      body: undefined,
    };

    if (body) {
      requestParams.body = JSON.stringify(body);
    }

    const { user_object } = global;
    if (user_object && user_object !== undefined && Object.keys(user_object).length > 0) {
      requestParams.headers.Authorization = `Token ${user_object.token}`;
    } else {}

    let url = `${BASE_URL}${endpoint}`;

    url = isFullPath ? endpoint : url;
    console.log('api url, requestParams', url, requestParams);
    fetch(url, requestParams)
      .then((response) => {
        console.log('api response', response);
        if (response.status >= 300) {
          response.json().then((error) => {
            reject(error);
          });
        } else {
          const contentType = response.headers.get('content-type');

          let parsedResponse = null;

          if (contentType === 'application/json') {
            parsedResponse = response.json();
          } else {
            parsedResponse = response.text();
          }
          parsedResponse.then((resp) => {
            return resolve(resp);
          });
        }
      })
      .catch((error) => {
        console.log('api error', error);
        return reject(error);
      });
  });
};

export default request;
