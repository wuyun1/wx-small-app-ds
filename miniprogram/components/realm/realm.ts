import { FenceGroup } from "../_models/fence-group";
import { Judger } from "../_models/judger";
// import { Cell } from "../_models/cell";
// import { CellStatus } from "../../core/enum";
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
    previewImg: null,
    price: 0,
    discountPrice: 0,
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
      const defaultSku = fenceGroup.getDefaultSku();
      if(defaultSku) {
        this.bindSkuData(defaultSku)
      } else {
        this.bindSpuData();
      }
      this.bindInitData(fenceGroup);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindSpuData() {
      const spu = this.properties.spu as any;
      this.setData({
        previewImg: spu.img,
        title: spu.title,
        price: spu.price,
        discountPrice: spu.discount_price,
      })
    },
    bindSkuData: function(this: WxComponent, sku: any) {
      this.setData({
        previewImg: sku.img,
        title: sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock: sku.stock,
      })
    } as () => any,
    bindInitData: function(this: WxComponent, fenceGroup: FenceGroup){
      this.setData!({
        fences: fenceGroup.fences,
      });
    } as () => any,
    onCellTap: function(this: WxComponent, { detail }: any ){
      // console.log(cell);
      const judger = this.data.judger as Judger;
      judger.judge(detail);
      this.setData({
        fences: judger.fenceGroup.fences,
      });
    } as () => any,
  }
})
