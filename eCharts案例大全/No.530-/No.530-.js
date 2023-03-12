let data1 = [
    {
        name: '近机位',
        value: 10,
        sum: 100,
    },
    {
        name: '远机位',
        value: 20,
        sum: 100,
    },
    {
        name: '廊桥位',
        value: 23,
        sum: 500,
    },
];

let getArrByKey = (data, k) => {
    let key = k || 'value';
    let res = [];
    if (data) {
        data.forEach(function (t) {
            res.push(t[key]);
        });
    }
    return res;
};
let getSymbolData = (data) => {
    let arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push({
            value: data[i].value,
            symbolPosition: 'end',
        });
    }
    return arr;
};

data = data1.sort((a, b) => {
    return b.value - a.value;
});
option = {
    backgroundColor: 'blurScope',
    grid: {
        top: '2%',
        bottom: -15,
        right: 80,
        left: '10%',
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                shadowOffsetX: '-50px',
                color: ['#fff'],
                align: 'right',
                verticalAlign: 'bottom',
                lineHeight: 55,
                fontSize: 14,
                formatter: function (value, index) {
                    // return (data[index].value / data[index].sum) * 100
                    return `占用 8   剩余 2`;
                },
            },
        },
    ],
    series: [
        //     {
        //     name: 'XXX',
        //     type: 'pictorialBar',
        //     symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
        //     symbolSize: [50, 50],
        //     symbolOffset: [20, 0],
        //     z: 12,
        //     itemStyle: {
        //         normal: {
        //             color: '#fff'
        //         }
        //     },
        //     data: getSymbolData(data)
        // },
        {
            name: '条',
            type: 'bar',
            showBackground: true,
            yAxisIndex: 0,
            data: data,
            barWidth: 20,
            zlevel: 1,
            // align: left,
            backgroundStyle: {
                color: '#FFBD5B',
                barBorderRadius: 20,
            },
            itemStyle: {
                // normal: {
                //     color: new echarts.graphic.LinearGradient(
                //         0,
                //         0,
                //         1,
                //         0,
                //         [
                //             {
                //                 offset: 0,
                //                 color: '#A71A2B',
                //             },
                //             {
                //                 offset: 0.7,
                //                 color: '#A71A2B',
                //             },
                //             {
                //                 offset: 1,
                //                 color: '#5EDEE5',
                //             },
                //         ],
                //         false
                //     ),
                //     barBorderRadius: 10,
                // },
                color: '#35FFF5',
                barBorderRadius: 20,
            },
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-30px'],
                    textStyle: {
                        fontSize: 18,
                    },
                    formatter: function (a, b) {
                        return a.name;
                    },
                },
            },
        },
    ],
};
