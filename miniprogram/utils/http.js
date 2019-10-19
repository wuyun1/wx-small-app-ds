"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var config_1 = require("../config/config");
var util_1 = require("./util");
var Http = (function () {
    function Http() {
    }
    Http.request = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, util_1.promisic(wx.request)(__assign(__assign({ method: 'GET' }, option), { url: "" + config_1.config.apiBaseUrl + option.url, header: {
                                appkey: config_1.config.appkey,
                            } }))];
                    case 1:
                        response = _a.sent();
                        return [2, response.data];
                }
            });
        });
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUMxQywrQkFBa0M7QUFFbEM7SUFBQTtJQWFBLENBQUM7SUFaZ0IsWUFBTyxHQUFwQixVQUFxQixNQUF3Qjs7Ozs7NEJBQ3hCLFdBQU0sZUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMscUJBQ3ZDLE1BQU0sRUFBRSxLQUFLLElBQ1YsTUFBTSxLQUNULEdBQUcsRUFBRSxLQUFHLGVBQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUssRUFDeEMsTUFBTSxFQUFFO2dDQUNKLE1BQU0sRUFBRSxlQUFNLENBQUMsTUFBTTs2QkFDeEIsSUFDSCxFQUFBOzt3QkFQSSxRQUFRLEdBQUcsU0FPZjt3QkFFRixXQUFRLFFBQWdCLENBQUMsSUFBSSxFQUFDOzs7O0tBQ2pDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBRVEsb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuaW1wb3J0IHsgcHJvbWlzaWMgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNsYXNzIEh0dHAge1xuICAgIHN0YXRpYyBhc3luYyByZXF1ZXN0KG9wdGlvbjogd3guUmVxdWVzdE9wdGlvbikge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb21pc2ljKHd4LnJlcXVlc3QpKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgICB1cmw6IGAke2NvbmZpZy5hcGlCYXNlVXJsfSR7b3B0aW9uLnVybH1gLFxuICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgYXBwa2V5OiBjb25maWcuYXBwa2V5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChyZXNwb25zZSBhcyBhbnkpLmRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgeyBIdHRwIH07Il19