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
        newList: []
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
        let data = {
            "limit": 3, //获取多少个
            "size": 0, //分页（过滤的个数）
            "hot": true //是否是推荐的文章
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

    jumpNavType(e){
        console.log('jumpNavType', e);
        let index = e.currentTarget.dataset.index;
        wx.reLaunch({
          url: '/pages/classify/classify?navIndex=' + index,
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