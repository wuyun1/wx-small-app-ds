import { Theme } from '../../model/theme';
import { Banner } from '../../model/banner';
import { Category } from '../../model/category';
import { Activity } from '../../model/activity';

Page({
  data: {
    themeA: null,
    themeE: null,
    themeF: null,
    themeH: null,
    bannerB: null,
    bannerG: null,
    gridC: [],
    activityD: null,
  },
  
  async onLoad() {
    await this.initAllData();
  },

  async initBottomSpuList() {

  },

  async initAllData() {
    const theme = new Theme();

    // await theme.getThemes();
    // const bannerB = await Banner.getHomeLocationB();
    // const gridC = await Category.getHomeLocationC();
    // const activityD = await Activity.getHomeLocationD();
    // const bannerG = await Banner.getHomeLocationG();

    const [
      // allTheme,
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
