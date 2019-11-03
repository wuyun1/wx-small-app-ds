import { Http } from "./http";

interface PagingResult {
    empty: boolean,
    items: any[],
    moreData: boolean,
    accumulator: any[],
}

interface PagingResponse {
    total_page: number;
    total: number;
    page: number;
    items: any[];
}

class Paging {

    private locker: boolean = false;
    private url: string;
    public moreData: boolean = true;
    private accumulator: any[] = [];

    constructor(
        private req: wx.RequestOption, 
        private count: number = 10, 
        private start: number = 0
    ) {
        this.url = req.url;
    }

    async getMoreData() {
        if(!this.moreData) {
            return;
        }
        if(!this._getLocker()) {
            return;
        }
        const data = await this._actualGetData();
        this._releaseLocker();
        return data;
    }

    async _actualGetData(): Promise<PagingResult|null>  {
        const req = this._getCurrentReq();
        const response: PagingResponse  = await Http.request(req);
        if(!response) {
            return null;
        }
        if(response.total === 0) {
            return {
                empty: true,
                items: [],
                moreData: false,
                accumulator: [],
            }
        }
        this.moreData = Paging._moreData(response.total_page, response.page);
        if(this.moreData) {
            this.start += this.count;
        }
        this._accumulator(response.items);
        return {
            empty: false,
            items: response.items,
            moreData: this.moreData,
            accumulator: this.accumulator,
        };
    }

    static _moreData(totalPage: number, pageNum: number) {
        return pageNum < totalPage -1;
    }

    _accumulator(items: any[]){
        this.accumulator = this.accumulator.concat(items);
    }

    _getCurrentReq(): wx.RequestOption {
        let url = this.url;
        const params = `start=${this.start}&count=${this.count}`;

        if(url.includes('?')) {
            url += '&' + params;
        } else {
            url += '?' + params;
        }

        return ({
            ...this.req,
            url,
        });
    }

    _getLocker() {
        if(this.locker) {
            return false;
        }
        this.locker = true;
        return true;
    }

    _releaseLocker() {
        this.locker = false;
    }
}

export {
    Paging,
}