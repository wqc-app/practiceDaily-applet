// pages/classify/classify.js
import {
    getNavDataRequest,
    getProductDataRequest
} from '../../api/all'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "loading" :false,
        "noData" : false,
        "limit": 4, //获取多少个
        "size": 0, //分页（过滤的个数）
        navList : [],
        navId : "",
        productList : []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getNavData();
    },

    getNavData() {
        getNavDataRequest().then(res => {
            console.log('classify getNavData' , res);
            this.setData({
                navList : res.data.data,
                navId : res.data.data[0]._id
            })
            this.getProductData();
        })
    },

    getProductData(){
        if(this.data.noData){
            return 
        }
        this.setData({
            "loading" : true
        })
        let data = {
            "navid": this.data.navId, //分类ID
            "limit": this.data.limit,
            "size": this.data.size,
        }
        getProductDataRequest(data).then(res=>{
            console.log('product' , res);
            let list = res.data.data;
            this.data.productList = this.data.productList.concat(list)
            this.setData({
                productList : this.data.productList,
                "loading" : false
            })
            // 判断是否没有更多数据
            if(list.length <= 0 || this.data.productList.length <= 2){
                this.setData({
                    "noData" : true
                })
            }
            // 关闭下拉刷新
            wx.stopPullDownRefresh()
        })
    },

    navTabClick(e){
        this.setData({
            "loading" :false,
            "noData" : false,
            "limit": 4, //获取多少个
            "size": 0, //分页（过滤的个数）
            navId : this.data.navList[e.detail.index]._id,
            productList : []
        })
        this.getProductData();
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
        this.setData({
            "loading" :false,
            "noData" : false,
            "limit": 4, //获取多少个
            "size": 0, //分页（过滤的个数）
            productList : []
        })
        this.getProductData();
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log('拉到底部！');
        this.data.size = this.data.size + this.data.limit, 
        this.getProductData();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})