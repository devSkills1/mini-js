Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    direction: {
      type: String,
      value: "horizontal"
    }
  },

  data: {
    currentTab: 0
  },

  methods: {
    selectTab(e) {
      const index = e.currentTarget.dataset.index;
      this.setData({
        currentTab: index
      });
      this.triggerEvent('tabSelected', { index });
    }
  }
});