"use strict";
Component({
    properties: {
        banner: {
            type: Object,
            value: null,
        }
    },
    observers: {
        'banner': function (banner) {
            if (!banner) {
                return;
            }
            if (banner.items.length === 0) {
                return;
            }
            var left = banner.items.find(function (i) { return i.name === 'left'; });
            var rightTop = banner.items.find(function (i) { return i.name === 'right-top'; });
            var rightBottom = banner.items.find(function (i) { return i.name === 'right-bottom'; });
            this.setData({
                left: left,
                rightTop: rightTop,
                rightBottom: rightBottom,
            });
        },
    },
    data: {
        left: null,
        rightTop: null,
        rightBottom: null,
    },
    methods: {}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LWxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob3QtbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFFRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUUsVUFBVSxNQUFXO1lBQzdCLElBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ1YsT0FBTzthQUNSO1lBQ0QsSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLE9BQU87YUFDUjtZQUNELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQWpCLENBQWlCLENBQUMsQ0FBQztZQUM3RCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUssSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUF0QixDQUFzQixDQUFDLENBQUM7WUFDdEUsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFLLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsSUFBSSxNQUFBO2dCQUNKLFFBQVEsVUFBQTtnQkFDUixXQUFXLGFBQUE7YUFDWixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO1FBQ2QsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFLRCxPQUFPLEVBQUUsRUFFUjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvaG90LWxpc3QvaG90LWxpc3QuanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBiYW5uZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH1cbiAgfSxcblxuICBvYnNlcnZlcnM6IHtcbiAgICAnYmFubmVyJzogZnVuY3Rpb24gKGJhbm5lcjogYW55KSB7XG4gICAgICBpZighYmFubmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKGJhbm5lci5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGVmdCA9IGJhbm5lci5pdGVtcy5maW5kKChpOmFueSkgPT4gaS5uYW1lID09PSAnbGVmdCcpO1xuICAgICAgY29uc3QgcmlnaHRUb3AgPSBiYW5uZXIuaXRlbXMuZmluZCgoaTphbnkpID0+IGkubmFtZSA9PT0gJ3JpZ2h0LXRvcCcpO1xuICAgICAgY29uc3QgcmlnaHRCb3R0b20gPSBiYW5uZXIuaXRlbXMuZmluZCgoaTphbnkpID0+IGkubmFtZSA9PT0gJ3JpZ2h0LWJvdHRvbScpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHRUb3AsXG4gICAgICAgIHJpZ2h0Qm90dG9tLFxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgbGVmdDogbnVsbCxcbiAgICByaWdodFRvcDogbnVsbCxcbiAgICByaWdodEJvdHRvbTogbnVsbCxcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG5cbiAgfVxufSlcbiJdfQ==