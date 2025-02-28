Page({
  data: {
    banners: [
      '../../images/banner1.jpeg',
      '../../images/banner2.jpeg',
      '../../images/banner3.jpeg'
    ],
    grid_items: [
      { title: 'Item 1', icon: '../../images/default.png', url: '/pages/page1/page1', loginType: 0 },
      { title: 'Item 2', icon: '../../images/default.png', url: '/pages/page2/page2', loginType: 1 },
      { title: 'Item 3', icon: '../../images/default.png', url: '/pages/page3/page3', loginType: 0 },
      { title: 'Item 4', icon: '../../images/default.png', url: '/pages/page4/page4', loginType: 0 },
      { title: 'Item 5', icon: '../../images/default.png', url: '/pages/page5/page5', loginType: 0 },
      { title: 'Item 6', icon: '../../images/default.png', url: '/pages/page6/page6', loginType: 0 },
      { title: 'Item 7', icon: '../../images/default.png', url: '/pages/page7/page7', loginType: 0 },
      { title: 'Item 8', icon: '../../images/default.png', url: '/pages/page8/page8', loginType: 0 },
      { title: 'Item 9', icon: '../../images/default.png', url: '/pages/page9/page9', loginType: 0 },
      { title: 'Item 10', icon: '../../images/default.png', url: '/pages/page10/page10', loginType: 0 },
      { title: 'Item 11', icon: '../../images/default.png', url: '/pages/page11/page11', loginType: 0 }
    ],
    showIndicatorDots: true,
    tabs: [
      { title: "发现", flex: 1 },
      { title: "要闻", flex: 1 },
      { title: "7*27", flex: 1 },
      { title: "自选", flex: 1 },
      { title: "题材", flex: 1 }
    ],
    currentTab: 0,
  },

  onTabSelected(e) {
    this.setData({
      currentTab: e.detail.index
    });
  }
})