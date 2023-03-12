let salvProName = ['区域一', '区域二', '区域三', '区域四', '区域五'];
// 街边秩序
let salvProValue = [15, 6, 8, 14, 1];
// 违章建筑
let buildingValue = [9, 15, 12, 9, 2];
let areaData = [salvProValue, buildingValue];
let total = areaData.flat().sort((a, b) => b - a)[0] + 1;

const colorArr = [
    {
        star: '#081A28',
        end: '#34A5E2',
    },
    {
        star: '#071722',
        end: '#039157',
    },
];
let colorValue0 = [];
let endCircleArr0 = [];
let colorValue1 = [];
let endCircleArr1 = [];
areaData.forEach((arr, index) => {
    arr.forEach((value) => {
        // 1. 生成渐变柱形图
        eval(`colorValue${index}`).push({
            itemStyle: {
                normal: {
                    barBorderRadius: 0,

                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0.1,
                            color: colorArr[index].end,
                        },
                        {
                            offset: 1,
                            color: colorArr[index].star,
                        },
                    ]),
                },
            },
            value: value,
        });
        // 生成模糊度的圆球
        eval(`endCircleArr${index}`).push({
            value: value,
            itemStyle: {
                shadowBlur: 10,
                shadowColor: colorArr[index].end,
            },
            symbolPosition: 'end',
        });
    });
});

option = {
    backgroundColor: '#333',
    grid: {
        left: '10',
        right: '10',
        bottom: '0',
        top: '15',
        containLabel: true,
    },
    tooltip: [
        {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    color: 'rgba(238, 238, 238, .1)',
                },
            },
        },
    ],
    xAxis: {
        type: 'value',
        max: total,
        show: false,
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    padding: [0, 5, 0, 0],
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 183, 238, .2)',
                },
            },
            data: salvProName,
        },
    ],
    series: [
        {
            // 主要展示
            name: '街边秩序',
            type: 'bar',
            barWidth: 18,
            axisLabel: {
                show: false,
            },
            data: colorValue0,
        },
        {
            // 主要展示
            name: '违章建筑',
            type: 'bar',
            axisLabel: {
                show: false,
            },
            barWidth: 18,
            data: colorValue1,
        },
        {
            // 小圆圈
            name: '',
            type: 'pictorialBar',
            symbol: 'circle',
            axisLabel: {
                show: false,
            },
            symbolSize: 18,
            symbolOffset: [6, -11],
            zlevel: 3,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
            data: endCircleArr0,
        },
        {
            // 小圆圈
            name: '',
            type: 'pictorialBar',
            symbol: 'circle',
            symbolSize: 18,
            symbolOffset: [6, 11],
            zlevel: 3,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
            data: endCircleArr1,
        },
    ],
};
