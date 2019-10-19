"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../utils/http");
var Theme = (function () {
    function Theme() {
    }
    Theme.getHomeLocationA = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, http_1.Http.request({
                            url: "/theme/by/names",
                            data: {
                                names: this.getHomeLocationA,
                            },
                        })];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    Theme.getHomeLocationE = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, http_1.Http.request({
                            url: "/theme/by/names",
                            data: {
                                names: this.getHomeLocationE,
                            },
                        })];
                    case 1:
                        res = _a.sent();
                        return [2, res];
                }
            });
        });
    };
    Theme.locationA = 't-1';
    Theme.locationE = 't-2';
    return Theme;
}());
exports.Theme = Theme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxQztBQUVyQztJQUFBO0lBd0JBLENBQUM7SUFuQmdCLHNCQUFnQixHQUE3Qjs7Ozs7NEJBQ3FCLFdBQU0sV0FBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDaEMsR0FBRyxFQUFFLGlCQUFpQjs0QkFDdEIsSUFBSSxFQUFFO2dDQUNGLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCOzZCQUMvQjt5QkFDSixDQUFDLEVBQUE7O3dCQUxJLEdBQUcsR0FBUSxTQUtmO3dCQUNGLFdBQU8sR0FBRyxFQUFDOzs7O0tBQ2Q7SUFFWSxzQkFBZ0IsR0FBN0I7Ozs7OzRCQUNxQixXQUFNLFdBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ2hDLEdBQUcsRUFBRSxpQkFBaUI7NEJBQ3RCLElBQUksRUFBRTtnQ0FDRixLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjs2QkFDL0I7eUJBQ0osQ0FBQyxFQUFBOzt3QkFMSSxHQUFHLEdBQVEsU0FLZjt3QkFDRixXQUFPLEdBQUcsRUFBQzs7OztLQUNkO0lBckJNLGVBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsZUFBUyxHQUFHLEtBQUssQ0FBQztJQXFCN0IsWUFBQztDQUFBLEFBeEJELElBd0JDO0FBR0csc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwIH0gZnJvbSBcIi4uL3V0aWxzL2h0dHBcIjtcblxuY2xhc3MgVGhlbWUge1xuXG4gICAgc3RhdGljIGxvY2F0aW9uQSA9ICd0LTEnO1xuICAgIHN0YXRpYyBsb2NhdGlvbkUgPSAndC0yJztcblxuICAgIHN0YXRpYyBhc3luYyBnZXRIb21lTG9jYXRpb25BKCkge1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGAvdGhlbWUvYnkvbmFtZXNgLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWVzOiB0aGlzLmdldEhvbWVMb2NhdGlvbkEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SG9tZUxvY2F0aW9uRSgpIHtcbiAgICAgICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBIdHRwLnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiBgL3RoZW1lL2J5L25hbWVzYCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lczogdGhpcy5nZXRIb21lTG9jYXRpb25FLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFRoZW1lXG59Il19