// import { Cell } from "../_models/cell";

// components/cell/cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell: {
      type: Object,
      value: null,
    },
    fenceIndex: {
      type: Number,
      value: null,
    },
    cellIndex: {
      type: Number,
      value: null,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  // observers: {
  //   'cell': function (cell: Cell) {
  //     if(!cell) {
  //       return;
  //     }
  //     console.log(cell);
  //   },
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (this: WxComponent) {
      this.triggerEvent('celltop', {
        cell: this.properties.cell,
        fenceIndex: this.properties.fenceIndex,
        cellIndex: this.properties.cellIndex,
      }, {
        bubbles: true,
        composed: true,
      });
    },
  }
})
