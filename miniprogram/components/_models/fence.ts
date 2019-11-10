import { Cell } from "./cell";

class Fence {
    specs: any[];
    cells: Cell[] = [];
    title: string;
    id: number;

    constructor(specs: any[]) {
        this.specs = specs;
        this.title = specs[0].key;
        this.id = specs[0].key_id;
    }

    init() {
        this._initCells();
    }

    _initCells() {
        this.specs.forEach(spec => {
            const existed = this.cells.some( c => {
                return c.id === spec.value_id;
            });
            if (existed) {
                return;
            }
            const cell = new Cell(spec);
            this.cells.push(cell);
        });
    }

}

export {
    Fence,
};
