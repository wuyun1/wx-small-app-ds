import { FenceGroup } from "../_models/fence-group";
import { Judger } from "../_models/judger";
// import { Cell } from "../_models/cell";

// components/realm/realm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: {
      type: Object,
      value: null,
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    fences: [],
    judger: null,
  },

  // lifetimes: {
  //   attached() {},
  //   ready() {},
  //   created() {},
  // },

  observers: {
    'spu': function (spu: any) {
      if(!spu) {
        return;
      }
      const fenceGroup = new FenceGroup(spu);
      fenceGroup.initFences();
      const judger = new Judger(fenceGroup);
      // this.setData({
      //   judger,
      // });
      this.data.judger = judger;
      this.bindInitData(fenceGroup);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindInitData: function(this: WxComponent, fenceGroup: FenceGroup){
      this.setData!({
        fences: fenceGroup.fences,
      });
    } as () => any,
    onCellTap: function(this: WxComponent, { detail }: any ){
      // console.log(cell);
      const judger = this.data.judger as Judger;
      judger.judge(detail, () => {
        this.setData({
          fences: judger.fenceGroup.fences,
        });
      });
    } as () => any,
  }
})
