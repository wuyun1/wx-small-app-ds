import { FenceGroup } from "./fence-group";
import { SkuCode } from "./sku-code";
import { Cell } from "./cell";
import { CellStatus } from "../../core/enum";
import { Fence } from "./fence";


class Judger {

    fenceGroup: FenceGroup;
    pathDict: string[] = [];
    selectedPath: string[] = [];

    constructor( fenceGroup : FenceGroup) {
        this.fenceGroup = fenceGroup;
        this._initPathDict();
    }

    _initPathDict() {
        this.pathDict = [];
        this.fenceGroup.skuList.forEach(s => {
            const skuCode = new SkuCode(s.code);
            this.pathDict = [
                ...this.pathDict,
                ...skuCode.totalSegments,
            ];
        });
    }

    judge({ cell, x, y }: { cell: Cell, x: number, y: number}, cb: Function) {
        if(cell.status === CellStatus.FORBIDDEN) {
            return;
        }
        this._changeCurrentCellStatus(cell, x, y);
        this.fenceGroup.eachCell(this._changeOtherCellStatus.bind(this));
        cb();
    }

    _changeCurrentCellStatus(cell: Cell, x: number, y: number) {
        if(cell.status === CellStatus.WAITING) {
            this.fenceGroup.fences[y].cells[x].status = CellStatus.SELECTED;
        }
        if(cell.status === CellStatus.SELECTED) {
            this.fenceGroup.fences[y].cells[x].status = CellStatus.WAITING;
        }
        this.selectedPath = this._getSelectedCellPath();
    }

    _getSelectedCellPath(){
        const pathArr: string[] = [];
        this.fenceGroup.fences.forEach(fence => {
            fence.cells.forEach(cell => {
                if(cell.status === CellStatus.SELECTED) {
                    pathArr.push(`${fence.id}-${cell.id}`)
                }
            })
  
        });
        return pathArr;
    }

    _changeOtherCellStatus({ fence, cell, x, y }: { fence: Fence, cell: Cell, x: number, y: number }) {
        if(cell.status === CellStatus.SELECTED) {
            return;
        }
        if(this.selectedPath.length === 0) {
            this.fenceGroup.fences[y].cells[x].status = CellStatus.WAITING;
            return;
        }
        const judgePath = this.selectedPath.concat(`${fence.id}-${cell.id}`).sort();
        const path = judgePath.join('#');
        if(!this.pathDict.includes(path)){
            this.fenceGroup.fences[y].cells[x].status = CellStatus.FORBIDDEN;
        } else {
            this.fenceGroup.fences[y].cells[x].status = CellStatus.WAITING;
        }
    }

}

export {
    Judger,
};
