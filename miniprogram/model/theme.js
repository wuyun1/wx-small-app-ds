"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../utils/http");
var Theme = (function () {
    function Theme() {
    }
    Theme.getHomeLocationA = function () {
        return http_1.Http.request({
            url: "/theme/by/names",
            data: {
                names: 't-1'
            },
        });
    };
    return Theme;
}());
exports.Theme = Theme;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxQztBQUVyQztJQUFBO0lBU0EsQ0FBQztJQVJVLHNCQUFnQixHQUF2QjtRQUNJLE9BQU8sV0FBSSxDQUFDLE9BQU8sQ0FBQztZQUNoQixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLElBQUksRUFBRTtnQkFDRixLQUFLLEVBQUUsS0FBSzthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQUdHLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCB9IGZyb20gXCIuLi91dGlscy9odHRwXCI7XG5cbmNsYXNzIFRoZW1lIHtcbiAgICBzdGF0aWMgZ2V0SG9tZUxvY2F0aW9uQSgpIHtcbiAgICAgICAgcmV0dXJuIEh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGAvdGhlbWUvYnkvbmFtZXNgLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWVzOiAndC0xJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFRoZW1lXG59Il19