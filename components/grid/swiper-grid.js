Component({
  properties: {
    items: {
      type: Array,
      value: []
    },
    indicatorDots: {
      type: Boolean,
      value: true
    },
    autoplay: {
      type: Boolean,
      value: false
    },
    // interval: {
    //   type: Number,
    //   value: 5000
    // },
    // duration: {
    //   type: Number,
    //   value: 500
    // }
  },
  data: {
    swiperItems: [],
    showIndicatorDots: true
  },
  observers: {
    'items': function (items) {
      const swiperItems = [];
      for (let i = 0; i < items.length; i += 10) {
        swiperItems.push(items.slice(i, i + 10));
      }
      this.setData({
        swiperItems,
        showIndicatorDots: items.length > 10 //不满10个不显示
      });
    }
  },
  methods: {
    handleItemClick(e) {
      const url = e.currentTarget.dataset.url;
      const loginType = e.currentTarget.dataset.loginType;
      console.log('点击了' + ' loginType: ' + loginType + ' url: ' + url);
      if (loginType == 1) {
        console.log('需要登录');
      }
      // wx.navigateTo({
      //   url: url,
      // })
    }
  }
})