import axios from 'axios';

export const numberWithCommas = (x: number) => {
  if (!x) {
    return x;
  }
  return x
    .toLocaleString('en-US', {minimumFractionDigits: 2})
    .replace('.', ',');
};

export function CustomAxios(token?: string) {
  const instance = axios.create({
    headers: {
      accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      authorization: `Bearer ${token}`,
    },
    baseURL: 'http://localhost:8080/api/v1/',
    transformRequest: (data, headers) => {
      return data;
    },
  });

  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log('Instance error', error);
      // if (error?.response?.status === 401) {
      //   if (navigationRef.isReady()) {
      //     AsyncStorage.removeItem(USER_LOGIN_TOKEN);
      //     getFCMUserToken().then(fmToken => {
      //       deleteDeviceId(fmToken, null);
      //     });
      //     showToast(t('Session Expired, Please login again'));
      //     navigationRef.navigate(HOME, {isTokenExpired: true});

      //     // navigationRef.reset({
      //     //   index: 0,
      //     //   routes: [{ name: LOGIN_DUPLICATE }],
      //     // });
      //   }
      // }
      return Promise.reject(error);
    },
  );
  return instance;
}
