import { Theme } from '../../model/theme';
import { Banner } from '../../model/banner';
import { Category } from '../../model/category';
import { Activity } from '../../model/activity';

Page({
  data: {
    themeA: {
      pic_url: 'data:image/png;base64,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',
    } as object,
    bannerB: null,
    gridC: [],
    activityD: null,
  },
  
  async onLoad() {
    await this.initAllData();
  },

  async initAllData() {
    const themeA = await Theme.getHomeLocationA();
    const bannerB = await Banner.getHomeLocationB();
    const gridC = await Category.getHomeLocationC();
    const activityD = await Activity.getHomeLocationD();
    this.setData!({
      themeA: themeA[0],
      bannerB,
      gridC,
      activityD,
    });
  },

})
