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
        themeA: null,
        themeE: null,
        themeF: null,
        themeH: null,
        bannerB: null,
        bannerG: null,
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
            var theme, bannerB, gridC, activityD, themeA, themeE, themeESpuList, data, themeF, themeH, bannerG;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        theme = new theme_1.Theme();
                        return [4, theme.getThemes()];
                    case 1:
                        _a.sent();
                        return [4, banner_1.Banner.getHomeLocationB()];
                    case 2:
                        bannerB = _a.sent();
                        return [4, category_1.Category.getHomeLocationC()];
                    case 3:
                        gridC = _a.sent();
                        return [4, activity_1.Activity.getHomeLocationD()];
                    case 4:
                        activityD = _a.sent();
                        return [4, theme.getHomeLocationA()];
                    case 5:
                        themeA = _a.sent();
                        return [4, theme.getHomeLocationE()];
                    case 6:
                        themeE = _a.sent();
                        themeESpuList = [];
                        if (!themeE.online) return [3, 8];
                        return [4, theme_1.Theme.getHomeLocationESpu()];
                    case 7:
                        data = _a.sent();
                        if (data) {
                            themeESpuList = data.spu_list.slice(0, 8);
                        }
                        _a.label = 8;
                    case 8: return [4, theme.getHomeLocationF()];
                    case 9:
                        themeF = _a.sent();
                        return [4, theme.getHomeLocationH()];
                    case 10:
                        themeH = _a.sent();
                        return [4, banner_1.Banner.getHomeLocationG()];
                    case 11:
                        bannerG = _a.sent();
                        this.setData({
                            themeA: themeA,
                            themeE: themeE,
                            themeESpuList: themeESpuList,
                            themeF: themeF,
                            themeH: themeH,
                            bannerB: bannerB,
                            gridC: gridC,
                            activityD: activityD,
                            bannerG: bannerG,
                        });
                        return [2];
                }
            });
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsNkNBQTRDO0FBQzVDLGlEQUFnRDtBQUNoRCxpREFBZ0Q7QUFFaEQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLElBQUk7UUFDWixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLEVBQUU7UUFDVCxTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUVLLE1BQU07Ozs7NEJBQ1YsV0FBTSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUF4QixTQUF3QixDQUFDOzs7OztLQUMxQjtJQUVLLFdBQVcsRUFBakI7Ozs7Ozt3QkFDUSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQzt3QkFDMUIsV0FBTSxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF2QixTQUF1QixDQUFDO3dCQUNSLFdBQU0sZUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUF6QyxPQUFPLEdBQUcsU0FBK0I7d0JBQ2pDLFdBQU0sbUJBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBekMsS0FBSyxHQUFHLFNBQWlDO3dCQUM3QixXQUFNLG1CQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQTdDLFNBQVMsR0FBRyxTQUFpQzt3QkFFcEMsV0FBTSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXZDLE1BQU0sR0FBRyxTQUE4Qjt3QkFDOUIsV0FBTSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXZDLE1BQU0sR0FBRyxTQUE4Qjt3QkFDekMsYUFBYSxHQUFHLEVBQUUsQ0FBQzs2QkFDcEIsTUFBTSxDQUFDLE1BQU0sRUFBYixjQUFhO3dCQUNELFdBQU0sYUFBSyxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O3dCQUF4QyxJQUFJLEdBQUcsU0FBaUM7d0JBQzlDLElBQUcsSUFBSSxFQUFFOzRCQUNQLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQzNDOzs0QkFFWSxXQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBdkMsTUFBTSxHQUFHLFNBQThCO3dCQUM5QixXQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBdkMsTUFBTSxHQUFHLFNBQThCO3dCQUM3QixXQUFNLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBekMsT0FBTyxHQUFHLFNBQStCO3dCQUcvQyxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNaLE1BQU0sUUFBQTs0QkFDTixNQUFNLFFBQUE7NEJBQ04sYUFBYSxlQUFBOzRCQUNiLE1BQU0sUUFBQTs0QkFDTixNQUFNLFFBQUE7NEJBQ04sT0FBTyxTQUFBOzRCQUNQLEtBQUssT0FBQTs0QkFDTCxTQUFTLFdBQUE7NEJBQ1QsT0FBTyxTQUFBO3lCQUNSLENBQUMsQ0FBQzs7Ozs7S0FDSjtDQUVGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vbW9kZWwvdGhlbWUnO1xuaW1wb3J0IHsgQmFubmVyIH0gZnJvbSAnLi4vLi4vbW9kZWwvYmFubmVyJztcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2F0ZWdvcnknO1xuaW1wb3J0IHsgQWN0aXZpdHkgfSBmcm9tICcuLi8uLi9tb2RlbC9hY3Rpdml0eSc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgdGhlbWVBOiBudWxsLFxuICAgIHRoZW1lRTogbnVsbCxcbiAgICB0aGVtZUY6IG51bGwsXG4gICAgdGhlbWVIOiBudWxsLFxuICAgIGJhbm5lckI6IG51bGwsXG4gICAgYmFubmVyRzogbnVsbCxcbiAgICBncmlkQzogW10sXG4gICAgYWN0aXZpdHlEOiBudWxsLFxuICB9LFxuICBcbiAgYXN5bmMgb25Mb2FkKCkge1xuICAgIGF3YWl0IHRoaXMuaW5pdEFsbERhdGEoKTtcbiAgfSxcblxuICBhc3luYyBpbml0QWxsRGF0YSgpIHtcbiAgICBjb25zdCB0aGVtZSA9IG5ldyBUaGVtZSgpO1xuICAgIGF3YWl0IHRoZW1lLmdldFRoZW1lcygpO1xuICAgIGNvbnN0IGJhbm5lckIgPSBhd2FpdCBCYW5uZXIuZ2V0SG9tZUxvY2F0aW9uQigpO1xuICAgIGNvbnN0IGdyaWRDID0gYXdhaXQgQ2F0ZWdvcnkuZ2V0SG9tZUxvY2F0aW9uQygpO1xuICAgIGNvbnN0IGFjdGl2aXR5RCA9IGF3YWl0IEFjdGl2aXR5LmdldEhvbWVMb2NhdGlvbkQoKTtcblxuICAgIGNvbnN0IHRoZW1lQSA9IGF3YWl0IHRoZW1lLmdldEhvbWVMb2NhdGlvbkEoKTtcbiAgICBjb25zdCB0aGVtZUUgPSBhd2FpdCB0aGVtZS5nZXRIb21lTG9jYXRpb25FKCk7XG4gICAgbGV0IHRoZW1lRVNwdUxpc3QgPSBbXTtcbiAgICBpZih0aGVtZUUub25saW5lKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgVGhlbWUuZ2V0SG9tZUxvY2F0aW9uRVNwdSgpO1xuICAgICAgaWYoZGF0YSkge1xuICAgICAgICB0aGVtZUVTcHVMaXN0ID0gZGF0YS5zcHVfbGlzdC5zbGljZSgwLCA4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGhlbWVGID0gYXdhaXQgdGhlbWUuZ2V0SG9tZUxvY2F0aW9uRigpO1xuICAgIGNvbnN0IHRoZW1lSCA9IGF3YWl0IHRoZW1lLmdldEhvbWVMb2NhdGlvbkgoKTtcbiAgICBjb25zdCBiYW5uZXJHID0gYXdhaXQgQmFubmVyLmdldEhvbWVMb2NhdGlvbkcoKTtcblxuXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB0aGVtZUEsXG4gICAgICB0aGVtZUUsXG4gICAgICB0aGVtZUVTcHVMaXN0LFxuICAgICAgdGhlbWVGLFxuICAgICAgdGhlbWVILFxuICAgICAgYmFubmVyQixcbiAgICAgIGdyaWRDLFxuICAgICAgYWN0aXZpdHlELFxuICAgICAgYmFubmVyRyxcbiAgICB9KTtcbiAgfSxcblxufSlcbiJdfQ==