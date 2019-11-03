
declare namespace wx {
    interface LinUtils {
        renderWaterFlow: (data: any[], refresh?: boolean) => any;
    }
    interface Wx {
        lin: LinUtils;
    }
}
