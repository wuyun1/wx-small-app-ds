import { Cell } from './cell';

class SkuPending {

    initSku(sku: any) {
        sku.specs.forEach( (spec: any, index: number) => {
            const cell = new Cell(spec);
            this.insetCell(cell, index);
        });
        console.log(this);
    }

    pending: (Cell|null)[] = [];

    constructor() {

    }

    insetCell(cell: Cell, fenceIndex: number) {
        this.pending[fenceIndex] = cell;
    }

    removeCell(fenceIndex: number) {
        this.pending[fenceIndex] = null;
    }

    findSelectedCellByFenceIndex(fenceIndex: number) {
        return this.pending[fenceIndex];
    }

    isSelected(cell: Cell, fenceIndex: number) {
        const pendingCell = this.pending[fenceIndex];
        if(!pendingCell) {
            return false;
        }
        return pendingCell.id === cell.id;
    }

}

export {
    SkuPending,
};
