"use strict";
var Paging = (function () {
    function Paging(url, count, start) {
        if (count === void 0) { count = 10; }
        if (start === void 0) { start = 0; }
        this.url = url;
        this.count = count;
        this.start = start;
    }
    Paging.prototype.getMoreData = function () {
        return [this.url, this.count, this.start];
    };
    return Paging;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUVJLGdCQUNZLEdBQVcsRUFDWCxLQUFrQixFQUNsQixLQUFpQjtRQURqQixzQkFBQSxFQUFBLFVBQWtCO1FBQ2xCLHNCQUFBLEVBQUEsU0FBaUI7UUFGakIsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUMxQixDQUFDO0lBRUosNEJBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQVhELElBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgUGFnaW5nIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVybDogc3RyaW5nLCBcbiAgICAgICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMTAsIFxuICAgICAgICBwcml2YXRlIHN0YXJ0OiBudW1iZXIgPSAwXG4gICAgKSB7fVxuXG4gICAgZ2V0TW9yZURhdGEoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy51cmwsIHRoaXMuY291bnQsIHRoaXMuc3RhcnRdO1xuICAgIH1cbn0iXX0=