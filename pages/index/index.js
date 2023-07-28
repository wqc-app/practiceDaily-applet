import {
    formatNumber,
    formattedDate
} from '../../utils/common'
import {
    getNavDataRequest,
    getNewsDataRequest
} from '../../api/all'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        NavList: [{
            _id: "1",
            classname: "ikun",
            icon: "/static/imgs/ikun.jpg",
        }],
        newList: [{
            _id: "1",
            title: "大家好，我是练习两年半的ikun，擅长唱、跳、rap!1111111111111",
            picurl: "/static/imgs/ikun.jpg",
            publish_date: 1672486225000,
            view_count: 999,
            author: "ikun",
            is_essence: true,
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getNavData()
        this.getNewsData()
    },

    // 获取导航数据
    getNavData() {
        getNavDataRequest().then(res => {
            console.log('getNavData', res);
            this.setData({
                NavList: res.data.data
            })
        })
    },

    // 获取最新动态数据
    getNewsData() {
        getNewsDataRequest().then(res => {
            console.log('getNewsData', res);
            let list = res.data.data;
            list.forEach(item => {
                item.publish_date = formattedDate(item.publish_date)
                item.view_count = formatNumber(item.view_count)
            })
            this.setData({
                newList: list
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})