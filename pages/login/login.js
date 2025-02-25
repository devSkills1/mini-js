Page({
  data: {
    appList: [
      { name: 'APP 1' },
      { name: 'APP 2' },
      { name: 'APP 3' },
      { name: 'APP 4' },
      { name: 'APP 5' },
      { name: 'APP 6' },
      { name: 'APP 7' },
      { name: 'APP 8' },
      { name: 'APP 9' },
      { name: 'APP 10' },
      { name: 'APP 11' },
      { name: 'APP 12' },
      // 可以继续添加更多 APP
    ],
    appPages: []
  },
  onLoad() {
    this.splitAppsIntoPages();
  },
  splitAppsIntoPages() {
    const { appList } = this.data;
    const pages = [];
    const pageSize = 10;
    for (let i = 0; i < appList.length; i += pageSize) {
      pages.push(appList.slice(i, i + pageSize));
    }
    this.setData({
      appPages: pages
    });
  }
});