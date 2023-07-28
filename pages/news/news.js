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
        "loading" :false,
        "noData" : false,
        "limit": 8, //获取多少个
        "size": 0, //分页（过滤的个数）
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
        if(this.data.noData){
            return 
        }
        this.setData({
            "loading" : true
        })
        let data = {
            "limit": this.data.limit,
            "size": this.data.size,
        }
        getNewsDataRequest(data).then(res => {
            console.log('getNewsData', res);
            let list = res.data.data;
            
            list.forEach(item => {
                item.publish_date = formattedDate(item.publish_date)
                item.view_count = formatNumber(item.view_count)
            })
            this.data.newList = this.data.newList.concat(list)
            this.setData({
                newList: this.data.newList,
                "loading" : false
            })
            // 判断是否没有更多数据
            if(list.length <= 0){
                this.setData({
                    "noData" : true
                })
            }
            // 关闭下拉刷新
            wx.stopPullDownRefresh()
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
        console.log('下拉刷新!');
        this.setData({
            "size" : 0 ,
            "loading" :false,
            "noData" : false,
            "newList" : []
        })
        this.getNewsData();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('拉到底部！');
        this.data.size = this.data.size + this.data.limit, 
        this.getNewsData();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})