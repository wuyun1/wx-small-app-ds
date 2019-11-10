import { Matrix } from "./matrix";
import { Fence } from "./fence";

class FenceGroup {

    skuList: any[] = [];
    spu: any;
    fences: Fence[] = [];

    constructor(spu: any) {
        this.spu = spu;
        this.skuList = spu.sku_list;
    }
    
    initFences() {
        const matrix = FenceGroup._createMatrix(this.skuList);
        const fences: Fence[] = [];
        const AT = matrix.transpose();
        AT.forEach( r => {
            const fence = new Fence(r);
            fence.init();
            fences.push(fence);
        });
        this.fences = fences;
    }

    eachCell(cb: Function) {
        this.fences.forEach((fence, y) => {
            fence.cells.forEach((cell, x) => {
                cb({fence, cell, x, y});
            })
        });
    }

    static _createMatrix(skuList: any[]) {
        const m = [] as any[][];
        skuList.forEach( sku => {
            m.push(sku.specs);
        });
        return new Matrix(m);
    }
}

export {
    FenceGroup,
};
