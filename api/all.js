import {
    request
} from '../utils/request';


export function getNavDataRequest() {
    return request({
        url: '/nav/get',
        method: "post",
    });
}

export function getNewsDataRequest(data) {
    return request({
        url: '/news/get',
        method: "post",
        data
    });
}

export function getNewsDetailDataRequest(data) {
    return request({
        url: '/news/detail',
        method: "post",
        data
    });
}
