let barWidth = 12;
var data1 = [42];
var titlename = ['时间'];
var valdata = [100];
option = {
    backgroundColor: 'balck',
    xAxis: {
        show: false,
        inverse: true,
    },
    yAxis: [
        {
            show: false,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            show: false,
            inverse: true,
            data: titlename,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        //内
        {
            type: 'bar',
            barWidth: barWidth,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#74ddff', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#ffc975', // 100% 处的颜色
                        },
                    ],
                },
                shadowBlur: 4,
                shadowColor: '#74ddff',
            },
            data: data1,
            z: 1,
            animationEasing: 'elasticOut',
        },
        // 背景
        {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [6, barWidth],
            itemStyle: {
                normal: {
                    color: '#12272A',
                },
            },
            label: {
                show: false,
            },
            data: data1,
            z: 0,
            animationEasing: 'elasticOut',
        },
        //分隔
        {
            type: 'pictorialBar',
            itemStyle: {
                color: '#000',
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [2, barWidth],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: data1,
            z: 2,
            animationEasing: 'elasticOut',
        },
        // 图标
        {
            name: '图标',
            type: 'pictorialBar',
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
            symbolSize: [50, 50],
            symbolOffset: [-25, 0],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#14b1eb',
                },
            },
            symbolPosition: 'end',
            data: data1,
        },
        // 外框
        {
            name: '外框',
            type: 'bar',
            barGap: '-100%', // 设置外框粗细
            yAxisIndex: 1,
            data: [100],
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#74ddff',
                },
            },
        },
    ],
};
