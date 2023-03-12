let backgroundColor = 'rgba(0,0,0,1)';
let chartdata = [
    [111, 222],
    ['交付效率', '环节时长'],
];

var getmydmc = chartdata[1]; //数据点名称
var getmyd = chartdata[0]; //收入金额
var getmydzd = [];

let big = 0;
getmyd.forEach((el) => {
    if (!(el === undefined || el === '')) {
        if (big < Number(el)) {
            big = Number(el);
        }
    }
});
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(big * 4);
}
//计算最大值
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < Number(el1)) {
                    max = Number(el1);
                }
            }
        });
    });
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度
    let maxval = maxint * 10;
    //让显示的刻度是整数
    return maxval;
}

var max = Math.ceil(calMax([getmyd]) / 10) * 10;
option = {
    backgroundColor: backgroundColor,
    grid: {
        left: '3%',
        right: '13%',
        bottom: '10%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        show: false,
    },
    xAxis: [
        {
            type: 'value',
            show: false,
            axisLabel: {
                show: false,
            },
            min: 0,
            max: max, // 计算最大值
            interval: max / 5, //  平均分为5份
            splitNumber: 5,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'value',
            axisLabel: {
                show: false,
            },
            min: 0,
            max: max, // 计算最大值
            interval: max / 10, //  平均分为5份
            splitNumber: 10,
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#D8D8D8',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                padding: [-40, -66, 40, 2],
                textStyle: {
                    color: 'rgba(255,255,255)',
                    fontSize: '14',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: getmydmc,
        },
    ],
    dataZoom: [
        {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 100,
            orient: 'vertical',
            zlevel: 66,
        },
    ],
    series: [
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#000',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [4, 15],
            symbolPosition: 'start',
            symbolOffset: [-1, 0],
            data: getmydzd,
            z: 66,
            animationEasing: 'elasticOut',
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            xAxisIndex: 1,
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [
                            {
                                offset: 0,
                                color: '#052a32', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#052a32', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            z: 0,
        },
        {
            name: '值',
            type: 'bar',
            // zlevel: 1,
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    // barBorderRadius: [0, 5, 5, 0],
                    color: {
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(255,255,255,0)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#00e5d3', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            barWidth: 15,
            data: getmyd,
            z: 0,
        },
        {
            // 外边框
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: 'none',
                },
            },
            data: getmyd,
            z: 77,
            animationEasing: 'elasticOut',
        },
    ],
};
