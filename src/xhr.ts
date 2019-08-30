import {AxiosRequestConfig} from './types';
export default function xhr(config: AxiosRequestConfig) {
    let {url, method = 'get', data = null} = config;
    const request  = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, async: true);
    request.send(data);
}