import request from '../helpers/api';

class ContactRequests {
  fetchContact(postBody) {
    return new Promise((resolve, reject) => {
      request('GET', 'contact/', postBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}

const contactRequests = new ContactRequests();
export default contactRequests;
