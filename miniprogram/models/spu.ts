import { Http } from "../utils/http";

// import { Paging } from "../utils/paging";

class Spu {
    static getDetail(id: number | string) {
        return Http.request({
            url: `/spu/id/${id}/detail`,
        });
    }
}

export {
    Spu,
}
