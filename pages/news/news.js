import {
    formatNumber,
    formattedDate
} from '../../utils/common'
import {
    getNewsDataRequest
} from '../../api/all'

// pages/news/news.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        newList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getNewsData();
    },

    // 获取最新动态数据
    getNewsData() {
        let data = {
            "limit": 8, //获取多少个
            "size": 0, //分页（过滤的个数）
        }
        getNewsDataRequest(data).then(res => {
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
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})