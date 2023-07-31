// pages/newsDetail/newsDetail.js
import {
    formatNumber,
    formattedDate
} from '../../utils/common'
import {
    getNewsDetailDataRequest
} from '../../api/all'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        loading : true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getData(options.id)
    },

    getData(id) {
        let transferData = {
            "id": id 
        }
        getNewsDetailDataRequest(transferData).then(res=>{
            console.log(res);
            //
            let data = res.data.data;
            data.publish_date = formattedDate(data.publish_date);
            data.view_count = formatNumber(data.view_count);
            data.loading = false;
            this.setData(data)
            // title
            wx.setNavigationBarTitle({
              title: data.title,
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
        return {
            title : this.data.title,
            path : "/pages/newsDetail/newsDetail?id=" + this.data._id,
        }
    },

    /**
     * 分享到朋友圈
     */
    onShareTimeline(){
        return {
            title : this.data.title,
            query : "id=" + this.data._id,
        }
    }

})