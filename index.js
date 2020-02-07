// Page({
//   formSubmit: function (e) {
//     console.log('form发生了submit事件，携带数据为：', e.detail.value)
//   },
//   formReset: function () {
//     console.log('form发生了reset事件')
//   }
// })
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifStudent:true,
    ifTeacher:false,
    userinfo:[{
      title: '您的称呼',
      holderTitle:'例如XX爸爸，数学老师',

    }, {
        title: '学校',
        holderTitle: '例如XX学校',
      }, {
        title: '班级',
        holderTitle: '例如七年级八班',
      }, {
        title: '科目',
        holderTitle: '例如数学',
      }, {
        title: '联系方式',
        holderTitle: '例如13xxxxxx',
      }
   ],
    region: ['浙江省', '杭州市', '上城区'],
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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