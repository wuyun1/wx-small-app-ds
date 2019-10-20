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
        this.themes = [];
    }
    Theme.prototype.getThemes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var names, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        names = Theme.locationA + "," + Theme.locationE + "," + Theme.locationF + "," + Theme.locationH;
                        return [4, http_1.Http.request({
                                url: "/theme/by/names",
                                data: {
                                    names: names,
                                },
                            })];
                    case 1:
                        res = _a.sent();
                        this.themes = res;
                        return [2, res];
                }
            });
        });
    };
    Theme.prototype.getHomeLocationA = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.themes.find(function (t) { return t.name === Theme.locationA; })];
            });
        });
    };
    Theme.prototype.getHomeLocationE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.themes.find(function (t) { return t.name === Theme.locationE; })];
            });
        });
    };
    Theme.prototype.getHomeLocationF = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.themes.find(function (t) { return t.name === Theme.locationF; })];
            });
        });
    };
    Theme.prototype.getHomeLocationH = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.themes.find(function (t) { return t.name === Theme.locationH; })];
            });
        });
    };
    Theme.getHomeLocationESpu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Theme.getThemeSpuByName(Theme.locationE)];
            });
        });
    };
    Theme.getThemeSpuByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, http_1.Http.request({
                            url: "/theme/name/" + name + "/with_spu"
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Theme.locationA = 't-1';
    Theme.locationE = 't-2';
    Theme.locationF = 't-3';
    Theme.locationH = 't-4';
    return Theme;
}());
exports.Theme = Theme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxQztBQUVyQztJQUFBO1FBT0ksV0FBTSxHQUFTLEVBQUUsQ0FBQztJQXVDdEIsQ0FBQztJQXJDUyx5QkFBUyxHQUFmOzs7Ozs7d0JBQ1UsS0FBSyxHQUFNLEtBQUssQ0FBQyxTQUFTLFNBQUksS0FBSyxDQUFDLFNBQVMsU0FBSSxLQUFLLENBQUMsU0FBUyxTQUFJLEtBQUssQ0FBQyxTQUFXLENBQUM7d0JBQzNFLFdBQU0sV0FBSSxDQUFDLE9BQU8sQ0FBQztnQ0FDaEMsR0FBRyxFQUFFLGlCQUFpQjtnQ0FDdEIsSUFBSSxFQUFFO29DQUNKLEtBQUssT0FBQTtpQ0FDTjs2QkFDSixDQUFDLEVBQUE7O3dCQUxJLEdBQUcsR0FBUSxTQUtmO3dCQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO3dCQUNsQixXQUFPLEdBQUcsRUFBQzs7OztLQUNkO0lBRUssZ0NBQWdCLEdBQXRCOzs7Z0JBQ0ksV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFDOzs7S0FDNUQ7SUFFSyxnQ0FBZ0IsR0FBdEI7OztnQkFDSSxXQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsU0FBUyxFQUExQixDQUEwQixDQUFDLEVBQUM7OztLQUM1RDtJQUVLLGdDQUFnQixHQUF0Qjs7O2dCQUNJLFdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQTFCLENBQTBCLENBQUMsRUFBQzs7O0tBQzVEO0lBRUssZ0NBQWdCLEdBQXRCOzs7Z0JBQ0ksV0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBMUIsQ0FBMEIsQ0FBQyxFQUFDOzs7S0FDNUQ7SUFFWSx5QkFBbUIsR0FBaEM7OztnQkFDSSxXQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUM7OztLQUNuRDtJQUVZLHVCQUFpQixHQUE5QixVQUErQixJQUFZOzs7OzRCQUNoQyxXQUFNLFdBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ3RCLEdBQUcsRUFBRSxpQkFBZSxJQUFJLGNBQVc7eUJBQ3RDLENBQUMsRUFBQTs0QkFGRixXQUFPLFNBRUwsRUFBQTs7OztLQUNMO0lBM0NNLGVBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsZUFBUyxHQUFHLEtBQUssQ0FBQztJQUNsQixlQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLGVBQVMsR0FBRyxLQUFLLENBQUM7SUF5QzdCLFlBQUM7Q0FBQSxBQTlDRCxJQThDQztBQUdHLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCB9IGZyb20gXCIuLi91dGlscy9odHRwXCI7XG5cbmNsYXNzIFRoZW1lIHtcblxuICAgIHN0YXRpYyBsb2NhdGlvbkEgPSAndC0xJztcbiAgICBzdGF0aWMgbG9jYXRpb25FID0gJ3QtMic7XG4gICAgc3RhdGljIGxvY2F0aW9uRiA9ICd0LTMnO1xuICAgIHN0YXRpYyBsb2NhdGlvbkggPSAndC00JztcblxuICAgIHRoZW1lczphbnlbXSA9IFtdO1xuXG4gICAgYXN5bmMgZ2V0VGhlbWVzKCkge1xuICAgICAgICBjb25zdCBuYW1lcyA9IGAke1RoZW1lLmxvY2F0aW9uQX0sJHtUaGVtZS5sb2NhdGlvbkV9LCR7VGhlbWUubG9jYXRpb25GfSwke1RoZW1lLmxvY2F0aW9uSH1gO1xuICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IEh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGAvdGhlbWUvYnkvbmFtZXNgLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBuYW1lcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRoZW1lcyA9IHJlcztcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRIb21lTG9jYXRpb25BKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVtZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gVGhlbWUubG9jYXRpb25BKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRIb21lTG9jYXRpb25FKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVtZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gVGhlbWUubG9jYXRpb25FKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRIb21lTG9jYXRpb25GKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVtZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gVGhlbWUubG9jYXRpb25GKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRIb21lTG9jYXRpb25IKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVtZXMuZmluZCh0ID0+IHQubmFtZSA9PT0gVGhlbWUubG9jYXRpb25IKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SG9tZUxvY2F0aW9uRVNwdSgpIHtcbiAgICAgICAgcmV0dXJuIFRoZW1lLmdldFRoZW1lU3B1QnlOYW1lKFRoZW1lLmxvY2F0aW9uRSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldFRoZW1lU3B1QnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgSHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogYC90aGVtZS9uYW1lLyR7bmFtZX0vd2l0aF9zcHVgXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFRoZW1lXG59Il19