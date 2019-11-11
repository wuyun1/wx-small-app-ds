import { CellStatus } from "../../core/enum";


class Cell {
    title: string;
    id: number;
    status: CellStatus = CellStatus.WAITING;
    spec: any;

    constructor(spec: any) {
        this.spec = spec;
        this.title = spec.value;
        this.id = spec.value_id;
    }

    getCellCode() {
        return `${this.spec.key_id}-${this.spec.value_id}`;
    }
}

export {
    Cell,
};
