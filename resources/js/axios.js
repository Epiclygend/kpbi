const { default: axios } = require('axios');

const apiUrl = new URL(location.origin);
apiUrl.pathname = '/api';

const axiosInstance = axios.create({
  baseURL: apiUrl.toString(),
});

axiosInstance.defaults.headers.common = {
  ...axiosInstance.defaults.headers.common,
  'X-Requested-With': 'XMLHttpRequest',
};

export default Object.assign(axiosInstance, {
  setAuthToken(token) {
    axiosInstance.defaults.headers = {
      ...axiosInstance.defaults.headers,
      Authorization: `Bearer ${token}`,
    };
  },
});
