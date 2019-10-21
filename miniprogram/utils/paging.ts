

class Paging {

    constructor(
        private url: string, 
        private count: number = 10, 
        private start: number = 0
    ) {}

    getMoreData() {
        return [this.url, this.count, this.start];
    }
}