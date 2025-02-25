Page({
  data: {
    items: Array.from({ length: 25 }, (v, k) => k + 1), // 示例数据
    currentPage: 0,
    pageSize: 10,
    currentPageItems: [],
    totalPages: 0
  },

  onLoad: function() {
    this.updatePagination();
  },

  updatePagination: function() {
    const { items, currentPage, pageSize } = this.data;
    const start = currentPage * pageSize;
    const end = start + pageSize;
    const currentPageItems = items.slice(start, end);
    const totalPages = Math.ceil(items.length / pageSize);

    this.setData({
      currentPageItems,
      totalPages
    });
  },

  nextPage: function() {
    if (this.data.currentPage < this.data.totalPages - 1) {
      this.setData({
        currentPage: this.data.currentPage + 1
      }, this.updatePagination);
    }
  },

  prevPage: function() {
    if (this.data.currentPage > 0) {
      this.setData({
        currentPage: this.data.currentPage - 1
      }, this.updatePagination);
    }
  }
})