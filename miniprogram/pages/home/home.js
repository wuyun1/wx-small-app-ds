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
var activity_1 = require("../../model/activity");
Page({
    data: {
        themeA: {
            pic_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAABGCAMAAAAHO4eUAAAAjVBMVEUAAAA0NDQ0NDQ1NTU0NDQzMzMzMzM2NjYzMzM0NDQ3Nzc0NDQ0NDQ9PT00NDQ4ODg0NDQzMzMzMzMzMzMzMzM4ODipqakzMzM0NDQ0NDQzMzM0NDQzMzM0NDQzMzM1NTUzMzM3NzczMzNHR0czMzM1NTU0NDRDQ0MzMzM1NTUzMzM0NDQ0NDQzMzMzMzMUWG4dAAAALnRSTlMAmWZctqD4J9ZgHGk3Cz8k8uji26gPAW68Ucx0xXqHS+8WfgebLUMDjzOvIlfRJHabnAAABptJREFUeNrs2ut2mkAUhuGtRVACIgZQPICIJ4z57v/yupHRahUZqm00necHnWatZGVlvyHDKCmK8g81T5CiPL3mqHk0Us0qz+/01qpus8oLUMkqL2afqeTGwB4zk+pwEtqzEnq8kL+djASDCjZJafLnGiQkY0ay1K7/C4lkudUClfmYpnw1wbpUxxCT8QeRr6PdWtKDaQAGVLDQb/1Yr+Ot7pCMdwA/SLDA5Hf/atf/hUSyFQOINWDzR8kaYE2iDpjxN5PdAPikIYAt3ZJ2Ci6ARkeYg4l1UP0TU1uoWr4i2RZYWDtZEZKbFnG1if5esqm7X4dgFt3go0Kqkn1yMgPw3bw8v36yfg/AlCjRAUREfy/ZvFU9oeATgKeS/dakBhCDbeonGwHo+URv4ub395IdiVSbAHq2SvY7EwOQiENPnJrlmYeb6wSAa58w/ccmG4NFcRzvgFEzZiu6Ln0ruABab0IEJtZqL/vs5AawhDs3+coyktbKQzc5XVzqb+gujXa73QPgttufRJPLry9xYjAZZMHliYFK9slVDsB2ch2DLyFY7JwyqVwXbCEewi54d99hjyhE7WQXmjYDMKKcoTGV7IuoHMAKt3zeaP0dbEX0oeOK+eOS9fv1kxXPhFM6Usm+iDuTnVCpBsTTmgfmsryR3mERPi7ZBnJui/UAePliQyUaLWECprV+M1fJPrs7kx1SmRAi2fi4DWgDeDssDLqLnyTJEMA0SXYn30ofgEm39HDTSCX77O5MVqMSmS6SNV0AunOWrA7o60edGHy4Ktn/SuUAfOvoPQ/j/L8eXSU6Yt0F2IZOk00ATOhByfptFCZL5gJY5YtEJftd1RiADzY+PydqlW4LhK7dAvr+WbJdEXGFLAyz6mTnYDp+N6USjpHrzgD0l8YFUyX77KQHIDLs0pELoEElhiKkLtFY79JZsvZqsFhRhbWnzedetK5Kdu0Bs7lssoI9AVvRuUCdGLyCGgNo5BWmRJb9609sRCUsYPwuEjcotNJfyTrTDVWLooAjiryKZIdDXceqUy/Z9VbsVjrtU7OdSvYFSA9AvGAUhBOIjPSbp6vDFhXJMluHPrKKZM0RAIeqZF5ALNAyKmOMsOftKE+2v2A9AF6+iOmGDVg7JRrjXBSoZJ+e/ABisKgJ1iRmg42pzDL9lWwIZhbJBvm1QVVC8cswD+madOC5J2fDHekTAxbMkcvoMtmpuss+P/kBTMCcIP9HXxJRIuItd0x2kYd12BgMAPTsO5MNZjjQvXrJmhpyPWLWVJiA9UK1MXgB0gOwxDGso+f9BUQG2E4m2cAFMD4k6+sAOlQh04qNgZfdfvVrGNpUJDsxmAugazCfSoQuRLK/JB7Y51I9fr0C6QFoYDEvBmAd0XAsk6wFZhySpW1eGlXxiseviK6bihOJAeU6+N0bXWUvgItk0xkAPUrVewxeguwAYrD3gFfrvDzXLz5iySQbAWjTMdkdWEIV1pE3n2vemq7LFrtEq5+s376SrA22Um+LeRGSA/iY4dhHCPQin5pgjkSyvjgNOyRri53B3S8l1E5WvCznvu2TtfoHYK5YxyrZJyc3gHQkjoX2hlHC1zmYL5HsFMw5JCtS25IU2WQv3sm1ohIxhom5T3aFa3Yq2ScnN4AFct2Lj+lUnazZE4Uekx0DmAWPTVb+xCAOSCX7yqQGMECucXno1ZZIVgOzTpNdghlflCwTyS41YQg21ApdleyTkxlAhNwkpVO+DkCrTnY97QFbOk12rQP48eXJHtlgpnr8ehHVA7BbyPUTOjMG21Qny4Fs9Y+zZGnkbqyHbwygM+T0nKeS/aYqB5C9F8U6JBjbVmOz8XSwnUSybEnkfJiOezgpcO7v1V4a2SeApkj2gkr2u/rZ3h30NAgEYRgeQ6RmLUm1UitCVKhgIJ3///Ms4DYlHjpJMWab97kMF077XSbZnTl3AFWuvbWTo716cWKI7Giro1rmkcY6qC+MbF2WxZceJEQ2EGcPoBouCLjTX9QrxRzZNx05mUmrvdgdIxu/T9zaIrvQ0SMvbENhGD250+lF68VJYs2RbVbaK2Qu99p7lmn75dnbr1wHr+atEhmR/Sf2Ab/NUiY2ebbPtm3xKcbI+l4pbiOZzXL1cLer5eLIFqq6fnoR+1YJ5p1fryRN00Z+fLhkI38lHV5tmTVd1zn/nVSM6MdVIrIIDOumEBqW+gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxycxCJRFRqGJXIUgOrAoTlGwfEjtge9XzyAAAAAElFTkSuQmCC',
        },
        bannerB: null,
        gridC: [],
        activityD: null,
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
            var themeA, bannerB, gridC, activityD;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, theme_1.Theme.getHomeLocationA()];
                    case 1:
                        themeA = _a.sent();
                        return [4, banner_1.Banner.getHomeLocationB()];
                    case 2:
                        bannerB = _a.sent();
                        return [4, category_1.Category.getHomeLocationC()];
                    case 3:
                        gridC = _a.sent();
                        return [4, activity_1.Activity.getHomeLocationD()];
                    case 4:
                        activityD = _a.sent();
                        this.setData({
                            themeA: themeA[0],
                            bannerB: bannerB,
                            gridC: gridC,
                            activityD: activityD,
                        });
                        return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsNkNBQTRDO0FBQzVDLGlEQUFnRDtBQUNoRCxpREFBZ0Q7QUFFaEQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFO1lBQ04sT0FBTyxFQUFFLDRrRkFBNGtGO1NBQzVrRjtRQUNYLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLEVBQUU7UUFDVCxTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUVLLE1BQU07Ozs7NEJBQ1YsV0FBTSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUF4QixTQUF3QixDQUFDOzs7OztLQUMxQjtJQUVLLFdBQVcsRUFBakI7Ozs7OzRCQUNpQixXQUFNLGFBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBdkMsTUFBTSxHQUFHLFNBQThCO3dCQUM3QixXQUFNLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBekMsT0FBTyxHQUFHLFNBQStCO3dCQUNqQyxXQUFNLG1CQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXpDLEtBQUssR0FBRyxTQUFpQzt3QkFDN0IsV0FBTSxtQkFBUSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUE3QyxTQUFTLEdBQUcsU0FBaUM7d0JBQ25ELElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ2pCLE9BQU8sU0FBQTs0QkFDUCxLQUFLLE9BQUE7NEJBQ0wsU0FBUyxXQUFBO3lCQUNWLENBQUMsQ0FBQzs7Ozs7S0FDSjtDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vbW9kZWwvdGhlbWUnO1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvYmFubmVyJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2F0ZWdvcnknO1xuaW1wb3J0IHsgQWN0aXZpdHkgfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpdml0eSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdGhlbWVBOiB7XG4gICAgICBwaWNfdXJsOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFySUFBQUJHQ0FNQUFBQUhPNGVVQUFBQWpWQk1WRVVBQUFBME5EUTBORFExTlRVME5EUXpNek16TXpNMk5qWXpNek0wTkRRM056YzBORFEwTkRROVBUMDBORFE0T0RnME5EUXpNek16TXpNek16TXpNek00T0RpcHFha3pNek0wTkRRME5EUXpNek0wTkRRek16TTBORFF6TXpNMU5UVXpNek0zTnpjek16TkhSMGN6TXpNMU5UVTBORFJEUTBNek16TTFOVFV6TXpNME5EUTBORFF6TXpNek16TVVXRzRkQUFBQUxuUlNUbE1BbVdaY3RxRDRKOVpnSEdrM0N6OGs4dWppMjZnUEFXNjhVY3gweFhxSFMrOFdmZ2ViTFVNRGp6T3ZJbGZSSkhhYm5BQUFCcHRKUkVGVWVOcnMydXQybWtBVWh1R3RSVkFDSWdaUVBJQ0lKNHo1N3YveXVwSFJhaFVacW0wMG5lY0huV2F0WkdWbHZ5SERLQ21LOGc4MVQ1Q2lQTDNtcUhrMFVzMHF6Ky8wMXFwdXM4b0xVTWtxTDJhZnFlVEd3QjR6aytwd0V0cXpFbnE4a0wrZGpBU0RDalpKYWZMbkdpUWtZMGF5MUs3L0M0bGt1ZFVDbGZtWXBudzF3YnBVeHhDVDhRZVJyNlBkV3RLRGFRQUdWTERRYi8xWXIrT3Q3cENNZHdBL1NMREE1SGYvYXRmL2hVU3lGUU9JTldEelI4a2FZRTJpRHBqeE41UGRBUGlrSVlBdDNaSjJDaTZBUmtlWWc0bDFVUDBUVTF1b1dyNGkyUlpZV0R0WkVaS2JGbkcxaWY1ZXNxbTdYNGRnRnQzZ28wS3FrbjF5TWdQdzNidzh2MzZ5ZmcvQWxDalJBVVJFZnkvWnZGVTlvZUFUZ0tlUy9kYWtCaENEYmVvbkd3SG8rVVJ2NHViMzk1SWRpVlNiQUhxMlN2WTdFd09RaUVOUG5KcmxtWWViNndTQWE1OHcvY2NtRzRORmNSenZnRkV6Wml1NkxuMHJ1QUJhYjBJRUp0WnFML3ZzNUFhd2hEczMrY295a3RiS1F6YzVYVnpxYitndWpYYTczUVBndHR1ZlJKUExyeTl4WWpBWlpNSGxpWUZLOXNsVkRzQjJjaDJETHlGWTdKd3lxVndYYkNFZXdpNTRkOTloanloRTdXUVhtallETUtLY29UR1Y3SXVvSE1BS3QzemVhUDBkYkVYMG9lT0srZU9TOWZ2MWt4WFBoRk02VXNtK2lEdVRuVkNwQnNUVG1nZm1zcnlSM21FUlBpN1pCbkp1aS9VQWVQbGlReVVhTFdFQ3ByVitNMWZKUHJzN2t4MVNtUkFpMmZpNERXZ0RlRHNzRExxTG55VEpFTUEwU1hZbjMwb2ZnRW0zOUhEVFNDWDc3TzVNVnFNU21TNlNOVjBBdW5PV3JBN282MGVkR0h5NEt0bi9TdVVBZk92b1BRL2ovTDhlWFNVNll0MEYySVpPazAwQVRPaEJ5ZnB0RkNaTDVnSlk1WXRFSmZ0ZDFSaUFEelkrUHlkcWxXNExoSzdkQXZyK1diSmRFWEdGTEF5ejZtVG5ZRHArTjZVU2pwSHJ6Z0QwbDhZRlV5WDc3S1FISURMczBwRUxvRUVsaGlLa0x0Rlk3OUpac3ZacXNGaFJoYlduemVkZXRLNUtkdTBCczdsc3NvSTlBVnZSdVVDZEdMeUNHZ05vNUJXbVJKYjk2MDlzUkNVc1lQd3VFamNvdE5KZnlUclREVldMb29BamlyeUtaSWREWGNlcVV5L1o5VmJzVmpydFU3T2RTdllGU0E5QXZHQVVoQk9JalBTYnA2dkRGaFhKTWx1SFByS0taTTBSQUllcVpGNUFMTkF5S21PTXNPZnRLRSsydjJBOUFGNitpT21HRFZnN0pScmpYQlNvWkorZS9BQmlzS2dKMWlSbWc0MnB6REw5bFd3SVpoYkpCdm0xUVZWQzhjc3dEK21hZE9DNUoyZkRIZWtUQXhiTWtjdm9NdG1wdXNzK1Ava0JUTUNjSVA5SFh4SlJJdUl0ZDB4MmtZZDEyQmdNQVBUc081TU5aampRdlhySm1ocHlQV0xXVkppQTlVSzFNWGdCMGdPd3hER3NvK2Y5QlVRRzJFNG0yY0FGTUQ0azYrc0FPbFFoMDRxTmdaZmRmdlZyR05wVUpEc3htQXVnYXpDZlNvUXVSTEsvSkI3WTUxSTlmcjBDNlFGb1lERXZCbUFkMFhBc2s2d0ZaaHlTcFcxZUdsWHhpc2V2aUs2YmloT0pBZVU2K04wYlhXVXZnSXRrMHhrQVBVclZld3hlZ3V3QVlyRDNnRmZydkR6WEx6NWl5U1FiQVdqVE1ka2RXRUlWMXBFM24ydmVtcTdMRnJ0RXE1K3MzNzZTckEyMlVtK0xlUkdTQS9pWTRkaEhDUFFpbjVwZ2prU3l2amdOT3lScmk1M0IzUzhsMUU1V3ZDem52dTJUdGZvSFlLNVl4eXJaSnljM2dIUWtqb1gyaGxIQzF6bVlMNUhzRk13NUpDdFMyNUlVMldRdjNzbTFvaEl4aG9tNVQzYUZhM1lxMlNjbk40QUZjdDJMaitsVW5helpFNFVla3gwRG1BV1BUVmIreENBT1NDWDd5cVFHTUVDdWNYbm8xWlpJVmdPelRwTmRnaGxmbEN3VHlTNDFZUWcyMUFwZGxleVRreGxBaE53a3BWTytEa0NyVG5ZOTdRRmJPazEyclFQNDhlWEpIdGxncG5yOGVoSFZBN0JieVBVVE9qTUcyMVFueTRGczlZK3paR25rYnF5SGJ3eWdNK1QwbktlUy9hWXFCNUM5RjhVNkpCamJWbU96OFhTd25VU3liRW5rZkppT2V6Z3BjTzd2MVY0YTJTZUFwa2oyZ2tyMnUvclozaDMwTkFnRVlSZ2VRNlJtTFVtMVVpdENWS2hnSUozLy8vTXM0RFlsSGpwSk1XYWI5N2tNRjA3N1hTYlpuVGwzQUZXdXZiV1RvNzE2Y1dLSTdHaXJvMXJta2NZNnFDK01iRjJXeFpjZUpFUTJFR2NQb0JvdUNMalRYOVFyeFJ6Wk54MDVtVW1ydmRnZEl4dS9UOXphSXJ2UTBTTXZiRU5oR0QyNTArbEY2OFZKWXMyUmJWYmFLMlF1OTlwN2xtbjc1ZG5icjF3SHIrYXRFaG1SL1NmMkFiL05VaVkyZWJiUHRtM3hLY2JJK2w0cGJpT1p6WEwxY0xlcjVlTElGcXE2Zm5vUisxWUo1cDFmcnlSTjAwWitmTGhrSTM4bEhWNXRtVFZkMXpuL25WU002TWRWSXJJSURPdW1FQnFXK2dFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUHh5Y3hDSlJGUnFHSlhJVWdPckFvVGxHd2ZFanRnZTlYenlBQUFBQUVsRlRrU3VRbUNDJyxcbiAgICB9IGFzIG9iamVjdCxcbiAgICBiYW5uZXJCOiBudWxsLFxuICAgIGdyaWRDOiBbXSxcbiAgICBhY3Rpdml0eUQ6IG51bGwsXG4gIH0sXG4gIFxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5pbml0QWxsRGF0YSgpO1xuICB9LFxuXG4gIGFzeW5jIGluaXRBbGxEYXRhKCkge1xuICAgIGNvbnN0IHRoZW1lQSA9IGF3YWl0IFRoZW1lLmdldEhvbWVMb2NhdGlvbkEoKTtcbiAgICBjb25zdCBiYW5uZXJCID0gYXdhaXQgQmFubmVyLmdldEhvbWVMb2NhdGlvbkIoKTtcbiAgICBjb25zdCBncmlkQyA9IGF3YWl0IENhdGVnb3J5LmdldEhvbWVMb2NhdGlvbkMoKTtcbiAgICBjb25zdCBhY3Rpdml0eUQgPSBhd2FpdCBBY3Rpdml0eS5nZXRIb21lTG9jYXRpb25EKCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB0aGVtZUE6IHRoZW1lQVswXSxcbiAgICAgIGJhbm5lckIsXG4gICAgICBncmlkQyxcbiAgICAgIGFjdGl2aXR5RCxcbiAgICB9KTtcbiAgfSxcblxufSlcbiJdfQ==