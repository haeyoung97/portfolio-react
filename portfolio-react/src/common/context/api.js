import axios from 'axios'
import * as Const from "../../store/const";
let API_URL = '/api/v1/';
if (window.location.origin.indexOf("localhost:") !== -1 || window.location.origin.indexOf("127.0.0.1:") !== -1) {
    API_URL = 'http://localhost:11001/api/v1/';
}

const checkAccessToken = () => {
    // 토큰 구분은 나중에
    let token;
    const pathnameItems = (window.location.pathname || '').split('/');

    if (pathnameItems[1] === 'code-admin') {
        token = window.localStorage.getItem(Const.TOKEN['admin']);
    } else {
        token = window.localStorage.getItem(Const.TOKEN['user']);
    }

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

const getRealPath = (parameters, path) => {
    if (typeof parameters === 'object') {
        parameters.updateCallback = new Date();
    }
    let realPath = '';
    if (parameters.param) {
        realPath = path.replace(/:boardId|:optionId|:productId|:hashtagId|:userId|:commentId|:shopId/g, parameters.param);
    } else {
        realPath = path.replace(/:boardId|:optionId|:productId|:hashtagId|:userId|:commentId|:shopId/g, parameters);
    }
    return API_URL + realPath;
}

export const get = (path, parameters = {}) => {

    let realPath;
    if (typeof parameters === 'object') {
        parameters.updateCallback = new Date();
    }
    realPath = pathParamParsing(path, parameters);

    return axios.get(API_URL + realPath, Object.assign({params: parameters},
        {headers: {'Authorization': 'Bearer ' + checkAccessToken()}}
    ))
        .then((response) => {
            console.log('/Lib/Api/index.js :: GET :: ' + path + ' :: Success!');
            return Promise.resolve(response.data);
        })
        .catch((err) => {
            if (err && err.response && err.response.data && err.response.data.msg) {
                alert (err.response.data.msg);
            }
            console.log('/Lib/Api/index.js :: GET :: ' + path + ' :: Failed!');
            return Promise.reject(err);
        });
};

export const post = (path, parameters = {}) => {
    console.log('/Lib/Api/index.js :: POST :: ' + API_URL);
    const realPath = getRealPath(parameters, path);
    return axios.post(realPath, parameters,
        {headers: {'Authorization': 'Bearer ' + checkAccessToken()}}
    ).then((response) => {
        console.log('/Lib/Api/index.js :: POST :: ' + path + ' :: Success!');
        return Promise.resolve(response.data);
    }).catch((err) => {
        if (err && err.response && err.response.data && err.response.data.msg) {
            alert (err.response.data.msg);
        }
        console.log('/Lib/Api/index.js :: POST :: ' + path + ' :: Failed!');
        return Promise.reject(err);
    });
};

export const put = (path, parameters = {}) => {
    console.log('/Data/Api/index.js :: PUT :: ' + API_URL);
    let realPath;
    if (typeof parameters === 'object') {
        parameters.updateCallback = new Date();
    }

    realPath = pathParamParsing(API_URL, parameters)

    return axios.put(API_URL + realPath, parameters)
        .then((response) => {
            console.log('/Data/Api/index.js :: PUT :: ' + path + ' :: Success!');
            return Promise.resolve(response);
        })
        .catch((err) => {
            console.log('/Data/Api/index.js :: PUT :: ' + path + ' :: Failed!');
            console.log(err);
            return Promise.reject(err);
        });
};

export const del = (path, parameters = {}) => {
    console.log('/Data/Api/index.js :: DELETE :: ' + API_URL);

    let realPath;
    if (typeof parameters === 'object') {
        parameters.updateCallback = new Date();
    }

    realPath = pathParamParsing(API_URL, parameters)

    return axios.delete(API_URL + realPath, {data: parameters})
        .then((response) => {
            console.log('/Data/Api/index.js :: DELETE :: ' + path + ' :: Success!');
            return Promise.resolve(response);
        })
        .catch((err) => {
            console.log('/Data/Api/index.js :: DELETE :: ' + path + ' :: Failed!');
            console.log(err);
            return Promise.reject(err);
        });
};

export const upload = (path, parameters = {}) => {
    console.log('/Lib/Api/index.js :: UPLOAD :: ' + path);
    const realPath = getRealPath(parameters, path);
    const body = new FormData();
    for (let file of parameters.file) {
        body.append('file', file);
    }

    return axios.post(realPath, body, {headers: {'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer '}})
        .then((response) => {
            console.log('/Lib/Api/index.js :: UPLOAD :: ' + path + ' :: Success!');
            return Promise.resolve(response.data);
        })
        .catch((err) => {
            console.log('/Lib/Api/index.js :: UPLOAD :: ' + path + ' :: Failed!');
            console.log(err);
            return Promise.reject(err);
        });
};
