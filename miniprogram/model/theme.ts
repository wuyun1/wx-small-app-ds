import { Http } from "../utils/http";

class Theme {
    static async getHomeLocationA() {
        const res: any = await Http.request({
            url: `/theme/by/names`,
            data: {
                names: 't-1'
            },
        });
        return res;
    }
}

export {
    Theme
}