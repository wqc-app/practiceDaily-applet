import {
    request
} from '../utils/request';


export function getNavDataRequest() {
    return request({
        url: '/nav/get',
        method: "post",
    });
}

export function getNewsDataRequest() {
    return request({
        url: '/news/get',
        method: "post",
        data: {
            "limit": 3, //获取多少个
            "size": 0, //分页（过滤的个数）
            "hot": true //是否是推荐的文章
        }
    });
}