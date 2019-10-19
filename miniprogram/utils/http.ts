import { config } from "../config/config";
import { promisic } from "./util";

class Http {
    static async request(option: wx.RequestOption) {
        const response = await promisic(wx.request)({
            method: 'GET',
            ...option,
            url: `${config.apiBaseUrl}${option.url}`,
            header: {
                appkey: config.appkey,
            },
        });

        return (response as any).data;
    }
}

export { Http };