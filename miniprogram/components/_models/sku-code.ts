import { combination } from "../../utils/util";



class SkuCode {

    code: string;
    spuId: string = '';
    totalSegments: string[] = [];

    constructor(code: string) {
        this.code = code;
        this._splitToSegments();
    }

    _splitToSegments() {
        // 2$1-9#3-9#4-11
        const [ spuId, segmentStr ] = this.code.split('$');
        this.spuId = spuId;
        const specCodeArray = segmentStr.split('#');

        const length = specCodeArray.length;

        for(let i = 1; i <= length; i++) {
            const segments = combination( specCodeArray, i);
            const newSegments= segments.map(specCodes => specCodes.join('#'));
            this.totalSegments = this.totalSegments.concat(newSegments);
        }
    }

}

export {
    SkuCode,
};
