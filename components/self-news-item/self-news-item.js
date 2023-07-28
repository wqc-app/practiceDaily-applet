// components/self-news-item/self-news-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        news : {
            type : Object,
            value : {
                _id: "1" ,
                title: "大家好，我是练习两年半的ikun，擅长唱、跳、rap!1111111111111" ,
                picurl: "/static/imgs/ikun.jpg" ,
                publish_date: 1672486225000 ,
                view_count: 999 ,
                author: "ikun" ,
                is_essence: true ,
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
