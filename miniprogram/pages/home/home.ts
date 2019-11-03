import { Theme } from '../../model/theme';
import { Banner } from '../../model/banner';
import { Category } from '../../model/category';
import { Activity } from '../../model/activity';
import { SpuPaging } from '../../model/spu-paging';
import { Paging } from '../../utils/paging';

interface HomePageData {
  themeA: any,
  themeE: any,
  themeF: any,
  themeH: any,
  bannerB: any,
  bannerG: any,
  gridC: any[],
  activityD: any,
  spuPaging?: Paging,
  moreData: boolean,
  // ac: string;
}

interface HomePageMethod {
  initBottomSpuList: any;
  initAllData: any;
}

Page<HomePageData, HomePageMethod>({
  data: {
    themeA: null,
    themeE: null,
    themeF: null,
    themeH: null,
    bannerB: null,
    bannerG: null,
    gridC: [],
    activityD: null,
    spuPaging: undefined,
    moreData: true,
  },
  
  async onLoad() {
    await Promise.all([
      this.initAllData(), this.initBottomSpuList()
    ]);
  },

  async initBottomSpuList() {
    const spuPaging = SpuPaging.getLatestPaging();
    this!.data!.spuPaging = spuPaging;
    const data = await spuPaging.getMoreData();
    this.setData!({
      moreData: spuPaging.moreData
    });
    if(!data) {
      return;
    }
    wx.lin.renderWaterFlow(data.items);
  },

  async onReachBottom () {
    if(!this.data || !this.data.spuPaging) {
      return;
    }
    const data = await this.data.spuPaging.getMoreData();
    this.setData!({
      moreData: this.data.spuPaging.moreData
    });
    if(!data) {
      return;
    }
    wx.lin.renderWaterFlow(data.items);
  },

  async initAllData() {
    const theme = new Theme();
    const [
      ,
      bannerB,
      gridC,
      activityD,
      bannerG,
    ] = await Promise.all([
      theme.getThemes(),
      Banner.getHomeLocationB(),
      Category.getHomeLocationC(),
      Activity.getHomeLocationD(),
      Banner.getHomeLocationG()
    ])

    const themeA = await theme.getHomeLocationA();
    const themeE = await theme.getHomeLocationE();
    let themeESpuList = [];
    if(themeE.online) {
      const data = await Theme.getHomeLocationESpu();
      if(data) {
        themeESpuList = data.spu_list.slice(0, 8);
      }
    }
    const themeF = await theme.getHomeLocationF();
    const themeH = await theme.getHomeLocationH();

    this.setData!({
      themeA,
      themeE,
      themeESpuList,
      themeF,
      themeH,
      bannerB,
      gridC,
      activityD,
      bannerG,
    });
  },

})
