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
    initBottomSpuList: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    },
    initAllData: function () {
        return __awaiter(this, void 0, void 0, function () {
            var theme, _a, bannerB, gridC, activityD, bannerG, themeA, themeE, themeESpuList, data, themeF, themeH;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        theme = new theme_1.Theme();
                        return [4, Promise.all([
                                theme.getThemes(),
                                banner_1.Banner.getHomeLocationB(),
                                category_1.Category.getHomeLocationC(),
                                activity_1.Activity.getHomeLocationD(),
                                banner_1.Banner.getHomeLocationG()
                            ])];
                    case 1:
                        _a = _b.sent(), bannerB = _a[1], gridC = _a[2], activityD = _a[3], bannerG = _a[4];
                        return [4, theme.getHomeLocationA()];
                    case 2:
                        themeA = _b.sent();
                        return [4, theme.getHomeLocationE()];
                    case 3:
                        themeE = _b.sent();
                        themeESpuList = [];
                        if (!themeE.online) return [3, 5];
                        return [4, theme_1.Theme.getHomeLocationESpu()];
                    case 4:
                        data = _b.sent();
                        if (data) {
                            themeESpuList = data.spu_list.slice(0, 8);
                        }
                        _b.label = 5;
                    case 5: return [4, theme.getHomeLocationF()];
                    case 6:
                        themeF = _b.sent();
                        return [4, theme.getHomeLocationH()];
                    case 7:
                        themeH = _b.sent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDMUMsNkNBQTRDO0FBQzVDLGlEQUFnRDtBQUNoRCxpREFBZ0Q7QUFFaEQsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLElBQUk7UUFDWixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLEVBQUU7UUFDVCxTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUVLLE1BQU07Ozs7NEJBQ1YsV0FBTSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUE7O3dCQUF4QixTQUF3QixDQUFDOzs7OztLQUMxQjtJQUVLLGlCQUFpQjs7Ozs7O0tBRXRCO0lBRUssV0FBVyxFQUFqQjs7Ozs7O3dCQUNRLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO3dCQWV0QixXQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0NBQ3BCLEtBQUssQ0FBQyxTQUFTLEVBQUU7Z0NBQ2pCLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDekIsbUJBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDM0IsbUJBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDM0IsZUFBTSxDQUFDLGdCQUFnQixFQUFFOzZCQUMxQixDQUFDLEVBQUE7O3dCQWJJLEtBT0YsU0FNRixFQVZBLE9BQU8sUUFBQSxFQUNQLEtBQUssUUFBQSxFQUNMLFNBQVMsUUFBQSxFQUNULE9BQU8sUUFBQTt3QkFTTSxXQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBdkMsTUFBTSxHQUFHLFNBQThCO3dCQUM5QixXQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBdkMsTUFBTSxHQUFHLFNBQThCO3dCQUN6QyxhQUFhLEdBQUcsRUFBRSxDQUFDOzZCQUNwQixNQUFNLENBQUMsTUFBTSxFQUFiLGNBQWE7d0JBQ0QsV0FBTSxhQUFLLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7d0JBQXhDLElBQUksR0FBRyxTQUFpQzt3QkFDOUMsSUFBRyxJQUFJLEVBQUU7NEJBQ1AsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDM0M7OzRCQUVZLFdBQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUF2QyxNQUFNLEdBQUcsU0FBOEI7d0JBQzlCLFdBQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUF2QyxNQUFNLEdBQUcsU0FBOEI7d0JBRTdDLElBQUksQ0FBQyxPQUFRLENBQUM7NEJBQ1osTUFBTSxRQUFBOzRCQUNOLE1BQU0sUUFBQTs0QkFDTixhQUFhLGVBQUE7NEJBQ2IsTUFBTSxRQUFBOzRCQUNOLE1BQU0sUUFBQTs0QkFDTixPQUFPLFNBQUE7NEJBQ1AsS0FBSyxPQUFBOzRCQUNMLFNBQVMsV0FBQTs0QkFDVCxPQUFPLFNBQUE7eUJBQ1IsQ0FBQyxDQUFDOzs7OztLQUNKO0NBRUYsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi9tb2RlbC90aGVtZSc7XG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICcuLi8uLi9tb2RlbC9iYW5uZXInO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXRlZ29yeSc7XG5pbXBvcnQgeyBBY3Rpdml0eSB9IGZyb20gJy4uLy4uL21vZGVsL2FjdGl2aXR5JztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB0aGVtZUE6IG51bGwsXG4gICAgdGhlbWVFOiBudWxsLFxuICAgIHRoZW1lRjogbnVsbCxcbiAgICB0aGVtZUg6IG51bGwsXG4gICAgYmFubmVyQjogbnVsbCxcbiAgICBiYW5uZXJHOiBudWxsLFxuICAgIGdyaWRDOiBbXSxcbiAgICBhY3Rpdml0eUQ6IG51bGwsXG4gIH0sXG4gIFxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgYXdhaXQgdGhpcy5pbml0QWxsRGF0YSgpO1xuICB9LFxuXG4gIGFzeW5jIGluaXRCb3R0b21TcHVMaXN0KCkge1xuXG4gIH0sXG5cbiAgYXN5bmMgaW5pdEFsbERhdGEoKSB7XG4gICAgY29uc3QgdGhlbWUgPSBuZXcgVGhlbWUoKTtcblxuICAgIC8vIGF3YWl0IHRoZW1lLmdldFRoZW1lcygpO1xuICAgIC8vIGNvbnN0IGJhbm5lckIgPSBhd2FpdCBCYW5uZXIuZ2V0SG9tZUxvY2F0aW9uQigpO1xuICAgIC8vIGNvbnN0IGdyaWRDID0gYXdhaXQgQ2F0ZWdvcnkuZ2V0SG9tZUxvY2F0aW9uQygpO1xuICAgIC8vIGNvbnN0IGFjdGl2aXR5RCA9IGF3YWl0IEFjdGl2aXR5LmdldEhvbWVMb2NhdGlvbkQoKTtcbiAgICAvLyBjb25zdCBiYW5uZXJHID0gYXdhaXQgQmFubmVyLmdldEhvbWVMb2NhdGlvbkcoKTtcblxuICAgIGNvbnN0IFtcbiAgICAgIC8vIGFsbFRoZW1lLFxuICAgICAgLFxuICAgICAgYmFubmVyQixcbiAgICAgIGdyaWRDLFxuICAgICAgYWN0aXZpdHlELFxuICAgICAgYmFubmVyRyxcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhlbWUuZ2V0VGhlbWVzKCksXG4gICAgICBCYW5uZXIuZ2V0SG9tZUxvY2F0aW9uQigpLFxuICAgICAgQ2F0ZWdvcnkuZ2V0SG9tZUxvY2F0aW9uQygpLFxuICAgICAgQWN0aXZpdHkuZ2V0SG9tZUxvY2F0aW9uRCgpLFxuICAgICAgQmFubmVyLmdldEhvbWVMb2NhdGlvbkcoKVxuICAgIF0pXG5cbiAgICBjb25zdCB0aGVtZUEgPSBhd2FpdCB0aGVtZS5nZXRIb21lTG9jYXRpb25BKCk7XG4gICAgY29uc3QgdGhlbWVFID0gYXdhaXQgdGhlbWUuZ2V0SG9tZUxvY2F0aW9uRSgpO1xuICAgIGxldCB0aGVtZUVTcHVMaXN0ID0gW107XG4gICAgaWYodGhlbWVFLm9ubGluZSkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFRoZW1lLmdldEhvbWVMb2NhdGlvbkVTcHUoKTtcbiAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgdGhlbWVFU3B1TGlzdCA9IGRhdGEuc3B1X2xpc3Quc2xpY2UoMCwgOCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lRiA9IGF3YWl0IHRoZW1lLmdldEhvbWVMb2NhdGlvbkYoKTtcbiAgICBjb25zdCB0aGVtZUggPSBhd2FpdCB0aGVtZS5nZXRIb21lTG9jYXRpb25IKCk7XG5cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHRoZW1lQSxcbiAgICAgIHRoZW1lRSxcbiAgICAgIHRoZW1lRVNwdUxpc3QsXG4gICAgICB0aGVtZUYsXG4gICAgICB0aGVtZUgsXG4gICAgICBiYW5uZXJCLFxuICAgICAgZ3JpZEMsXG4gICAgICBhY3Rpdml0eUQsXG4gICAgICBiYW5uZXJHLFxuICAgIH0pO1xuICB9LFxuXG59KVxuIl19