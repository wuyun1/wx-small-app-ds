import { Http } from "../utils/http";

class Theme {

    static locationA = 't-1';
    static locationE = 't-2';

    static async getHomeLocationA() {
        const res: any = await Http.request({
            url: `/theme/by/names`,
            data: {
                names: this.getHomeLocationA,
            },
        });
        return res;
    }

    static async getHomeLocationE() {
        const res: any = await Http.request({
            url: `/theme/by/names`,
            data: {
                names: this.getHomeLocationE,
            },
        });
        return res;
    }
}

export {
    Theme
}