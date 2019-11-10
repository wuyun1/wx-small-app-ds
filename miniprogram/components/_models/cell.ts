import { CellStatus } from "../../core/enum";


class Cell {
    title: string;
    id: number;
    status: CellStatus = CellStatus.WAITING;

    constructor(spec: any) {
        this.title = spec.value;
        this.id = spec.value_id;
    }
}

export {
    Cell,
};
