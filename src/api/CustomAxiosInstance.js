import axios from 'axios';
import _ from 'lodash';

// 스네이크 케이스를 카멜 케이스로 변환하는 함수
const keysToCamelCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(v => keysToCamelCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => {
      result[_.camelCase(key)] = keysToCamelCase(obj[key]);
      return result;
    }, {});
  }
  return obj;
}

// 카멜 케이스를 스네이크 케이스로 변환하는 함수
const keysToSnakeCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(v => keysToSnakeCase(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => {
      result[_.snakeCase(key)] = keysToSnakeCase(obj[key]);
      return result;
    }, {});
  }
  return obj;
}

// 새로운 axios 인스턴스 생성
const customApiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'},
});

// 응답 인터셉터 설정
customApiClient.interceptors.response.use(
  (response) => {
    // 응답 데이터의 키를 카멜 케이스로 변환
    response.data = keysToCamelCase(response.data);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // 요청 인터셉터 설정
// customApiClient.interceptors.request.use(
//   (config) => {
//     // 요청 데이터의 키를 스네이크 케이스로 변환
//     if (config.data) {
//       config.data = keysToSnakeCase(config.data);
//     }
//     // 요청 파라미터의 키를 스네이크 케이스로 변환
//     if (config.params) {
//       config.params = keysToSnakeCase(config.params);
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default customApiClient;
