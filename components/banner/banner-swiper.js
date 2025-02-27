Component({
  properties: {
    banners: {
      type: Array,
      value: []
    }
  },
  methods: {
    handleItemClick(e) {
      console.log(e)
    }
  }
})