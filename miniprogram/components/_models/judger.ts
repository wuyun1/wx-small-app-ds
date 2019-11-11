import { FenceGroup } from "./fence-group";
import { SkuCode } from "./sku-code";
import { Cell } from "./cell";
import { CellStatus } from "../../core/enum";
import { SkuPending } from "./sku-pending";


class Judger {

    fenceGroup: FenceGroup;
    pathDict: string[];
    skuPending: SkuPending;

    constructor( fenceGroup : FenceGroup ) {
        this.fenceGroup = fenceGroup;
        this.pathDict = this._initPathDict();
        this.skuPending = this._initSkuPending();
        this.judge({
            isInit: true,
        });

        // this.fenceGroup.eachCell(this._changeOtherCellStatus.bind(this));
    }

    _initSkuPending() {
        const skuPending = new SkuPending();
        const defaultSku = this.fenceGroup.getDefaultSku();
        if(defaultSku) {
            skuPending.initSku(defaultSku);
            skuPending.pending.forEach((cell, fenceIndex) => {
                if(!cell) {
                    return;
                }
                const selectedCell = this.fenceGroup.fences[fenceIndex].cells
                    .find(c => c.id === cell.id);
                if(selectedCell) {
                    selectedCell.status = CellStatus.SELECTED;
                }
            });
        }
        return skuPending;
    }

    _initPathDict() {
        let pathDict : string[] = [];
        this.fenceGroup.skuList.forEach(s => {
            const skuCode = new SkuCode(s.code);
            pathDict = [
                ...pathDict,
                ...skuCode.totalSegments,
            ];
        });
        return pathDict;
    }

    judge({ cell, cellIndex = 0, fenceIndex = 0, isInit = false }: { cell?: Cell, fenceIndex?: number, cellIndex?: number, isInit: boolean }) {
        if(!isInit && cell) {
            this._changeCurrentCellStatus(cell, fenceIndex, cellIndex);
        }
        this.fenceGroup.eachCell(this._changeOtherCellStatus.bind(this));
    }

    _isInDict(path: string) {
        return this.pathDict.includes(path);
    }

    _changeCurrentCellStatus(cell: Cell, fenceIndex: number, cellIndex: number) {
        if(cell.status === CellStatus.WAITING) {
            // this.fenceGroup.fences[y].cells[x].status = CellStatus.SELECTED;
            this.fenceGroup.fences[fenceIndex].cells.forEach( (currentCell, index) => {
                if(index === cellIndex) {
                    currentCell.status = CellStatus.SELECTED;
                    return;
                }
                if(currentCell.status === CellStatus.SELECTED) {
                    currentCell.status = CellStatus.WAITING;
                }
            });
            this.skuPending.insetCell(cell, fenceIndex);
        }
        if(cell.status === CellStatus.SELECTED) {
            this.fenceGroup.fences[fenceIndex].cells[cellIndex].status = CellStatus.WAITING;
            this.skuPending.removeCell(fenceIndex);
        }
    }

    _changeOtherCellStatus({ cell, fenceIndex,  cellIndex}: { cell: Cell, fenceIndex: number, cellIndex: number }) {
        const potentialPath = this._findPotentialPath(cell, fenceIndex);
        if(!potentialPath) {
            return;
        }
        const isDict = this._isInDict(potentialPath);
        if(isDict) {
            this.fenceGroup.fences[fenceIndex].cells[cellIndex].status = CellStatus.WAITING;
        } else {
            this.fenceGroup.fences[fenceIndex].cells[cellIndex].status = CellStatus.FORBIDDEN;
        }
    }


    _findPotentialPath(cell: Cell, fenceIndex: number) {
        const pathArr: string[] = [];
        for(let i = 0; i < this.fenceGroup.fences.length; i++) {
            if(fenceIndex === i) {
                if(this.skuPending.isSelected(cell, fenceIndex)) {
                    return;
                }
                const cellCode = this._getCellCode(cell.spec);
                pathArr.push(cellCode);
            } else {
                const selected = this.skuPending.findSelectedCellByFenceIndex(i);
                if(selected) {
                    const selectedCellCode = this._getCellCode(selected.spec);
                    pathArr.push(selectedCellCode);
                }
            }
        }
        return pathArr.join('#');
    }

    _getCellCode(spec: any) {
        return `${spec.key_id}-${spec.value_id}`;
    }

}

export {
    Judger,
};
