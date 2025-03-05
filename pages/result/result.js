Page({
  data: {
    results: []
  },
  
  onLoad(options) {
    const results = JSON.parse(options.results);
    this.setData({ results });
  }
});