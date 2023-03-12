let categoryData = ['原煤', '天然气', '原油', '一次电力', '汽油', '柴油'];
let seriesdata = [
    [1111, 11111, 1111, 1111, 22222, 2222],
    [111, 21111, 1111, 3111, 22222, 2222],
    [1111, 11111, 1111, 1111, 12222, 2222],
];
let backgroundColor = 'rgba(0,0,0,1)';
let itemcolor = {
    type: 'linear',
    colorStops: [
        {
            offset: 0,
            color: 'rgba(6, 120, 157,1)',
        },
        {
            offset: 0.5,
            color: 'rgba(6, 120, 157,0.2)',
        },
        {
            offset: 1,
            color: 'rgba(6, 120, 157,1)',
        },
    ],
};
// 若只设置一个象形柱图
// let bgdata = [];
// for (let i = 0; i < seriesdata[1].length; i++) {
//     if (Number(seriesdata[1][i]) > Number(seriesdata[2][i])) {
//         bgdata.push(seriesdata[1][i]);
//     } else {
//         bgdata.push(seriesdata[2][i]);
//     }
// }

option = {
    backgroundColor: backgroundColor,
    grid: {
        top: '15%',
        bottom: '15%', //也可设置left和right设置距离来控制图表的大小
        left: '13%',
        right: '13%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: false,
            },
        },
        //   formatter: (params) => {
        //   },
        textStyle: {
            align: 'left',
        },
    },
    xAxis: {
        data: categoryData,
        interval: 0,
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff', //X轴文字颜色
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            name: '',
            nameTextStyle: {
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1f4255',
                },
            },
            axisLabel: {
                show: true,
                formatter: (val) => {
                    return val + '';
                },
                textStyle: {
                    color: '#fff',
                },
            },
        },
        {
            type: 'value',
            name: '',
            show: true,
            nameTextStyle: {
                color: '#ebf8ac',
            },
            position: 'right',
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1f4255',
                    width: 1,
                },
            },
            axisLabel: {
                show: true,
                formatter: (val) => {
                    return val;
                },
                textStyle: {
                    color: '#fff',
                },
            },
        },
    ],
    dataZoom: [
        {
            show: false,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 1,
            end: 100,
            handleSize: '110%',
            handleStyle: {
                color: '#5B3AAE',
            },
            textStyle: {
                color: 'rgba(204,187,225,0.5)',
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)',
        },
        {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 100,
        },
    ],
    series: [
        {
            name: '余额',
            type: 'line',
            yAxisIndex: 1,
            smooth: true, //平滑曲线显示
            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            // showSymbol: false,
            itemStyle: {
                //折线拐点标志的样式
                color: {
                    type: 'radial',

                    colorStops: [
                        {
                            offset: 0,
                            color: '#fff',
                        },
                        {
                            offset: 0.2,
                            color: '#fff',
                        },
                        {
                            offset: 1,
                            color: 'transparent',
                        },
                    ],
                },
                borderColor: '#fff',
                borderWidth: 1,
            },
            lineStyle: {
                width: 2,
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 4,
                opacity: 0.8,
            },
            z: 5,
            data: seriesdata[0],
        },
        {
            name: '收入',
            type: 'bar',
            barWidth: 10,
            barMinHeight: 10,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#08e9ff',
                            },
                            {
                                offset: 1,
                                color: '#022c42',
                            },
                        ],
                    },
                },
            },
            emphasis: {
                show: true,
                itemStyle: {
                    color: '#10e5ff',
                },
            },
            data: seriesdata[1],
        },
        {
            name: '支出',
            type: 'bar',
            barWidth: 10,
            barMinHeight: 10,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        colorStops: [
                            {
                                offset: 0,
                                color: '#e6d688',
                            },
                            {
                                offset: 1,
                                color: '#46504f',
                            },
                        ],
                    },
                },
            },
            emphasis: {
                show: true,
                itemStyle: {
                    color: '#e5bc7e',
                },
            },
            data: seriesdata[2],
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: ' rgba(9, 45, 62,1)',
                },
            },
            symbolRepeat: 'fixed',
            barMinHeight: 10,
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [10, 2],
            symbolPosition: 'start',
            symbolOffset: [6, -1],
            data: seriesdata[2],
            z: 4,
            animationEasing: 'elasticOut',
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: ' rgba(9, 45, 62,1)',
                },
            },
            symbolRepeat: 'fixed',
            barMinHeight: 10,
            symbolMargin: 2,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [10, 2],
            symbolPosition: 'start',
            symbolOffset: [-6, -1],
            data: seriesdata[1],
            z: 4,
            animationEasing: 'elasticOut',
        },
    ],
};
