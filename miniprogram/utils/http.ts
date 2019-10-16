import { config } from "../config/config";

class Http {
    static request(option: wx.RequestOption) {
        return (new Promise( (resolve : any, reject: any) => {
            wx.request({
                method: 'GET',
                ...option,
                url: `${config.apiBaseUrl}${option.url}`,
                header: {
                    appkey: config.appkey,
                },
                success: resolve,
                fail: reject,
            })
        }));
    }
}

export { Http };