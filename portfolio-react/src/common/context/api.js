import axios from 'axios'
import * as Const from "../../store/const";
let API_URL = '/api/v1/';
if (window.location.origin.indexOf("localhost:") !== -1 || window.location.origin.indexOf("127.0.0.1:") !== -1) {
    API_URL = 'http://localhost:11001/api/v1/';
}

const checkAccessToken = () => {
    const token  = window.localStorage.getItem(Const.TOKEN['user']);

    if (token) {
        return token;
    } else {
        console.log('/Lib/Api/index.js :: checkAccessToken :: Failed!');
    }
};

const pathParamParsing = (path, parameters) => {
    let result = '';
    let pathItems = path.toString().split('/');
    pathItems.forEach((item, index) => {
        if (index !== 0) result += '/';
        if (item.substring(0, 1) === ':' && parameters[item.substring(1, item.length)]) {
            console.log(parameters[item.substring(1, item.length)]);
            result += parameters[item.substring(1, item.length)];
        } else {
            result += item;
        }
    });
    return result;
};

/* API 호출 방식 : 상황에 따라 필요한 함수 정의 (get, post, etc.) */
export const get = (path, parameters = {}) => {
    const realPath = pathParamParsing(path, parameters);
    if (typeof parameters === 'object') {
        parameters.updateCallback = new Date();
    }

    return axios.get(API_URL + realPath, Object.assign({params: parameters},
        {headers: {'Authorization': 'Bearer ' + checkAccessToken()}}
    ))
        .then((response) => {
            console.log('/Lib/Api/index.js :: GET :: ' + path + ' :: Success!');
            return Promise.resolve(response.data);
        })
        .catch((err) => {
            console.log('/Lib/Api/index.js :: GET :: ' + path + ' :: Failed!');
            return Promise.reject(err);
        });
};


