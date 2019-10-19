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
var theme_1 = require("../../model/theme");
var banner_1 = require("../../model/banner");
var category_1 = require("../../model/category");
Page({
    data: {
        themeA: {
            pic_url: 'data:image/png;base64,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',
        },
        bannerB: null,
        grid: [],
    },
    onLoad: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.initAllData()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    },
    initAllData: function () {
        return __awaiter(this, void 0, void 0, function () {
            var themeA, bannerB, grid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, theme_1.Theme.getHomeLocationA()];
                    case 1:
                        themeA = _a.sent();
                        return [4, banner_1.Banner.getHomeLocationB()];
                    case 2:
                        bannerB = _a.sent();
                        return [4, category_1.Category.getGridCategory()];
                    case 3:
                        grid = _a.sent();
                        this.setData({
                            themeA: themeA[0],
                            bannerB: bannerB,
                            grid: grid,
                        });
                        return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsNkNBQTRDO0FBQzVDLGlEQUFnRDtBQUVoRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU7WUFDTixPQUFPLEVBQUUsNGtGQUE0a0Y7U0FDNWtGO1FBQ1gsT0FBTyxFQUFFLElBQUk7UUFDYixJQUFJLEVBQUUsRUFBRTtLQUNUO0lBRUssTUFBTTs7Ozs0QkFDVixXQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXhCLFNBQXdCLENBQUM7Ozs7O0tBQzFCO0lBRUssV0FBVyxFQUFqQjs7Ozs7NEJBQ2lCLFdBQU0sYUFBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUF2QyxNQUFNLEdBQUcsU0FBOEI7d0JBQzdCLFdBQU0sZUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUF6QyxPQUFPLEdBQUcsU0FBK0I7d0JBQ2xDLFdBQU0sbUJBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQTs7d0JBQXZDLElBQUksR0FBRyxTQUFnQzt3QkFDN0MsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDWixNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDakIsT0FBTyxTQUFBOzRCQUNQLElBQUksTUFBQTt5QkFDTCxDQUFDLENBQUM7Ozs7O0tBQ0o7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4uLy4uL21vZGVsL3RoZW1lJztcbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJy4uLy4uL21vZGVsL2Jhbm5lcic7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVsL2NhdGVnb3J5JztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB0aGVtZUE6IHtcbiAgICAgIHBpY191cmw6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQXJJQUFBQkdDQU1BQUFBSE80ZVVBQUFBalZCTVZFVUFBQUEwTkRRME5EUTFOVFUwTkRRek16TXpNek0yTmpZek16TTBORFEzTnpjME5EUTBORFE5UFQwME5EUTRPRGcwTkRRek16TXpNek16TXpNek16TTRPRGlwcWFrek16TTBORFEwTkRRek16TTBORFF6TXpNME5EUXpNek0xTlRVek16TTNOemN6TXpOSFIwY3pNek0xTlRVME5EUkRRME16TXpNMU5UVXpNek0wTkRRME5EUXpNek16TXpNVVdHNGRBQUFBTG5SU1RsTUFtV1pjdHFENEo5WmdIR2szQ3o4azh1amkyNmdQQVc2OFVjeDB4WHFIUys4V2ZnZWJMVU1EanpPdklsZlJKSGFibkFBQUJwdEpSRUZVZU5yczJ1dDJta0FVaHVHdFJWQUNJZ1pRUElDSUo0ejU3di95dXBIUmFoVVpxbTAwbmVjSG5XYXRaR1ZsdnlIREtDbUs4ZzgxVDVDaVBMM21xSGswVXMwcXorLzAxcXB1czhvTFVNa3FMMmFmcWVUR3dCNHprK3B3RXRxekVucThrTCtkakFTRENqWkphZkxuR2lRa1kwYXkxSzcvQzRsa3VkVUNsZm1ZcG53MXdicFV4eENUOFFlUnI2UGRXdEtEYVFBR1ZMRFFiLzFZcitPdDdwQ01kd0EvU0xEQTVIZi9hdGYvaFVTeUZRT0lOV0R6UjhrYVlFMmlEcGp4TjVQZEFQaWtJWUF0M1pKMkNpNkFSa2VZZzRsMVVQMFRVMXVvV3I0aTJSWllXRHRaRVpLYkZuRzFpZjVlc3FtN1g0ZGdGdDNnbzBLcWtuMXlNZ1B3M2J3OHYzNnlmZy9BbENqUkFVUkVmeS9adkZVOW9lQVRnS2VTL2Rha0JoQ0RiZW9uR3dIbytVUnY0dWIzOTVJZGlWU2JBSHEyU3ZZN0V3T1FpRU5QbkpybG1ZZWI2d1NBYTU4dy9jY21HNE5GY1J6dmdGRXpaaXU2TG4wcnVBQmFiMElFSnRacUwvdnM1QWF3aERzMytjb3lrdGJLUXpjNVhWenFiK2d1alhhNzNRUGd0dHVmUkpQTHJ5OXhZakFaWk1IbGlZRks5c2xWRHNCMmNoMkRMeUZZN0p3eXFWd1hiQ0Vld2k1NGQ5OWhqeWhFN1dRWG1qWURNS0tjb1RHVjdJdW9ITUFLdDN6ZWFQMGRiRVgwb2VPSytlT1M5ZnYxa3hYUGhGTTZVc20raUR1VG5WQ3BCc1RUbWdmbXNyeVIzbUVSUGk3WkJuSnVpL1VBZVBsaVF5VWFMV0VDcHJWK00xZkpQcnM3a3gxU21SQWkyZmk0RFdnRGVEc3NETHFMbnlUSkVNQTBTWFluMzBvZmdFbTM5SERUU0NYNzdPNU1WcU1TbVM2U05WMEF1bk9XckE3bzYwZWRHSHk0S3RuL1N1VUFmT3ZvUFEvai9MOGVYU1U2WXQwRjJJWk9rMDBBVE9oQnlmcHRGQ1pMNWdKWTVZdEVKZnRkMVJpQUR6WStQeWRxbFc0TGhLN2RBdnIrV2JKZEVYR0ZMQXl6Nm1UbllEcCtONlVTanBIcnpnRDBsOFlGVXlYNzdLUUhJRExzMHBFTG9FRWxoaUtrTHRGWTc5Slpzdlpxc0ZoUmhiV256ZWRldEs1S2R1MEJzN2xzc29JOUFWdlJ1VUNkR0x5Q0dnTm81QldtUkpiOTYwOXNSQ1VzWVB3dUVqY290TkpmeVRyVERWV0xvb0FqaXJ5S1pJZERYY2VxVXkvWjlWYnNWanJ0VTdPZFN2WUZTQTlBdkdBVWhCT0lqUFNicDZ2REZoWEpNbHVIUHJLS1pNMFJBSWVxWkY1QUxOQXlLbU9Nc09mdEtFKzJ2MkE5QUY2K2lPbUdEVmc3SlJyalhCU29aSitlL0FCaXNLZ0oxaVJtZzQycHpETDlsV3dJWmhiSkJ2bTFRVlZDOGNzd0QrbWFkT0M1SjJmREhla1RBeGJNa2N2b010bXB1c3MrUC9rQlRNQ2NJUDlIWHhKUkl1SXRkMHgya1lkMTJCZ01BUFRzTzVNTlpqalF2WHJKbWhweVBXTFdWSmlBOVVLMU1YZ0IwZ093eERHc28rZjlCVVFHMkU0bTJjQUZNRDRrNitzQU9sUWgwNHFOZ1pmZGZ2VnJHTnBVSkRzeG1BdWdhekNmU29RdVJMSy9KQjdZNTFJOWZyMEM2UUZvWURFdkJtQWQwWEFzazZ3RlpoeVNwVzFlR2xYeGlzZXZpSzZiaWhPSkFlVTYrTjBiWFdVdmdJdGsweGtBUFVyVmV3eGVndXdBWXJEM2dGZnJ2RHpYTHo1aXlTUWJBV2pUTWRrZFdFSVYxcEUzbjJ2ZW1xN0xGcnRFcTUrczM3NlNyQTIyVW0rTGVSR1NBL2lZNGRoSENQUWluNXBnamtTeXZqZ05PeVJyaTUzQjNTOGwxRTVXdkN6bnZ1MlR0Zm9IWUs1WXh5clpKeWMzZ0hRa2pvWDJobEhDMXptWUw1SHNGTXc1SkN0UzI1SVUyV1F2M3NtMW9oSXhob201VDNhRmEzWXEyU2NuTjRBRmN0MkxqK2xVbmF6WkU0VWVreDBEbUFXUFRWYit4Q0FPU0NYN3lxUUdNRUN1Y1hubzFaWklWZ096VHBOZGdobGZsQ3dUeVM0MVlRZzIxQXBkbGV5VGt4bEFoTndrcFZPK0RrQ3JUblk5N1FGYk9rMTJyUVA0OGVYSkh0bGdwbnI4ZWhIVkE3QmJ5UFVUT2pNRzIxUW55NEZzOVkrelpHbmticXlIYnd5Z00rVDBuS2VTL2FZcUI1QzlGOFU2SkJqYlZtT3o4WFN3blVTeWJFbmtmSmlPZXpncGNPN3YxVjRhMlNlQXBrajJna3IydS9yWjNoMzBOQWdFWVJnZVE2Um1MVW0xVWl0Q1ZLaGdJSjMvLy9NczREWWxIanBKTVdhYjk3a01GMDc3WFNiWm5UbDNBRld1dmJXVG83MTZjV0tJN0dpcm8xcm1rY1k2cUMrTWJGMld4WmNlSkVRMkVHY1BvQm91Q0xqVFg5UXJ4UnpaTngwNW1VbXJ2ZGdkSXh1L1Q5emFJcnZRMFNNdmJFTmhHRDI1MCtsRjY4VkpZczJSYlZiYUsyUXU5OXA3bG1uNzVkbmJyMXdIcithdEVobVIvU2YyQWIvTlVpWTJlYmJQdG0zeEtjYkkrbDRwYmlPWnpYTDFjTGVyNWVMSUZxcTZmbm9SKzFZSjVwMWZyeVJOMDBaK2ZMaGtJMzhsSFY1dG1UVmQxem4vblZTTTZNZFZJcklJRE91bUVCcVcrZ0VBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFQeHljeENKUkZScUdKWElVZ09yQW9UbEd3ZkVqdGdlOVh6eUFBQUFBRWxGVGtTdVFtQ0MnLFxuICAgIH0gYXMgb2JqZWN0LFxuICAgIGJhbm5lckI6IG51bGwsXG4gICAgZ3JpZDogW10sXG4gIH0sXG4gIFxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5pbml0QWxsRGF0YSgpO1xuICB9LFxuXG4gIGFzeW5jIGluaXRBbGxEYXRhKCkge1xuICAgIGNvbnN0IHRoZW1lQSA9IGF3YWl0IFRoZW1lLmdldEhvbWVMb2NhdGlvbkEoKTtcbiAgICBjb25zdCBiYW5uZXJCID0gYXdhaXQgQmFubmVyLmdldEhvbWVMb2NhdGlvbkIoKTtcbiAgICBjb25zdCBncmlkID0gYXdhaXQgQ2F0ZWdvcnkuZ2V0R3JpZENhdGVnb3J5KCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB0aGVtZUE6IHRoZW1lQVswXSxcbiAgICAgIGJhbm5lckIsXG4gICAgICBncmlkLFxuICAgIH0pO1xuICB9LFxuXG59KVxuIl19