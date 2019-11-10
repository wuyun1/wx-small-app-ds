
class Matrix {


    m: any[][] = [];
    constructor(matrix: any[][]) {
        this.m = matrix;
    }

    get rowNum() {
        return this.m.length;
    }

    get colsNum() {
        return this.m[0].length;
    }

    forEach(cb: (element: any, rowNum: number, colsNum: number) => void) {
        for( let j=0; j < this.colsNum; j++) {
            for( let i = 0; i < this.rowNum; i++ ){
                const element = this.m[i][j];
                cb(element, i, j);
            }
        }
    }

    transpose() {
        const desArr: any[][] = [];
        for(let j=0; j < this.colsNum; j++) {
            desArr[j] = [];
            for(let i=0; i< this.rowNum; i++) {
                desArr[j][i] = this.m[i][j];
            }
        }
        return desArr;
    }

}

export {
    Matrix,
};
