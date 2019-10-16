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
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config/config");
var Http = (function () {
    function Http() {
    }
    Http.request = function (option) {
        return (new Promise(function (resolve, reject) {
            wx.request(__assign({ method: 'GET' }, option, { url: "" + config_1.config.apiBaseUrl + option.url, header: {
                    appkey: config_1.config.appkey,
                }, success: resolve, fail: reject }));
        }));
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEwQztBQUUxQztJQUFBO0lBZUEsQ0FBQztJQWRVLFlBQU8sR0FBZCxVQUFlLE1BQXdCO1FBQ25DLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBRSxVQUFDLE9BQWEsRUFBRSxNQUFXO1lBQzVDLEVBQUUsQ0FBQyxPQUFPLFlBQ04sTUFBTSxFQUFFLEtBQUssSUFDVixNQUFNLElBQ1QsR0FBRyxFQUFFLEtBQUcsZUFBTSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBSyxFQUN4QyxNQUFNLEVBQUU7b0JBQ0osTUFBTSxFQUFFLGVBQU0sQ0FBQyxNQUFNO2lCQUN4QixFQUNELE9BQU8sRUFBRSxPQUFPLEVBQ2hCLElBQUksRUFBRSxNQUFNLElBQ2QsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBRVEsb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ1wiO1xuXG5jbGFzcyBIdHRwIHtcbiAgICBzdGF0aWMgcmVxdWVzdChvcHRpb246IHd4LlJlcXVlc3RPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIChuZXcgUHJvbWlzZSggKHJlc29sdmUgOiBhbnksIHJlamVjdDogYW55KSA9PiB7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbixcbiAgICAgICAgICAgICAgICB1cmw6IGAke2NvbmZpZy5hcGlCYXNlVXJsfSR7b3B0aW9uLnVybH1gLFxuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICBhcHBrZXk6IGNvbmZpZy5hcHBrZXksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEh0dHAgfTsiXX0=