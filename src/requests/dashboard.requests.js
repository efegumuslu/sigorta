import request from '../helpers/api';

class DashboardRequests {
  fetchDashboard(postBody) {
    return new Promise((resolve, reject) => {
      request('GET', 'dashboard/', postBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}

const dashboardRequests = new DashboardRequests();
export default dashboardRequests;
