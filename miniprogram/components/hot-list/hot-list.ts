// components/hot-list/hot-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner: {
      type: Object,
      value: null,
    }
  },

  observers: {
    'banner': function (banner: any) {
      if(!banner) {
        return;
      }
      if(banner.items.length === 0) {
        return;
      }
      const left = banner.items.find((i:any) => i.name === 'left');
      const rightTop = banner.items.find((i:any) => i.name === 'right-top');
      const rightBottom = banner.items.find((i:any) => i.name === 'right-bottom');
      this.setData({
        left,
        rightTop,
        rightBottom,
      });
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    left: null,
    rightTop: null,
    rightBottom: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
