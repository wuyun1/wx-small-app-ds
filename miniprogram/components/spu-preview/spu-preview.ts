// components/spu-preview/spu-preview.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      data: {
        type: Object,
        value: null,
      },
  
    },
  
    /**
     * 组件的初始数据
     */
    data: {
      tags: null,
      w: 0,
      height: 0,
    },

    observers: {
      data: function (data: any) {
        if(!data) {
          return
        }
        if(!data.tags) {
          return;
        }
        const tags = data.tags.split('$');
        this.setData({
          tags
        });
      }
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      onImgLoad: (function (this: WxComponent, event: any) {
        if(!event) {
          return;
        }
        const { width, height } = event.detail || {};
        this.setData({
          w: 340,
          h: height*(340/width),
        })
      }) as () => any,
      onItemTap: (function (this: WxComponent, event: any) {
        const pid = event.currentTarget.dataset.pid;
        wx.navigateTo({
          url: `/pages/detail/detail?pid=${pid}`,
        });
      }) as () => any,
    }
  })
  