let colors = [
    ['#FFC900', '#D1852F'],
    ['#FE5050', '#FF0000'],
    ['#0C71AC', '#178AFF'],
    ['#0599ca', '#02a9e0'],
    ['#abe427', '#c3ff3b'],
    ['#49BE5F', '#4CFABF'],
];
// 圆环值
let data1 = [
    { text: '巡查上报', value: 478 },
    { text: '视频上报', value: 227 },
    { text: '百姓城管', value: 192 },
    { text: '专项任务', value: 268 },
    { text: '考评上报', value: 300 },
    { text: '车载视频', value: 321 },
];

let max = 0;
data1.map((item) => {
    max += item.value;
});

let color = colors.map((item, index) => {
    return {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: item[0], // 0% 处的颜色
            },
            {
                offset: 1,
                color: item[1], // 100% 处的颜色
            },
        ],
    };
});
// 内环边框

let num = 0;
const seriesOption2 = data1.map((item, index) => {
    num += item.value * 0.64;
    const a = {
        type: 'bar',
        data: [, , , num],
        coordinateSystem: 'polar',
        z: 9999 - index,
        name: item.text + " " + item.value,
        roundCap: true,
        color: color[index],
        barGap: '-100%',
        itemStyle: {
            normal: {
                // borderWidth: 6,
                shadowBlur: 5,
                // color: "transparent",
                // borderColor: color[i],
                shadowColor: color[index],
            },
        },
    };
    return a;
});

option = {
    backgroundColor: '#010818',
    color: color,
    tooltip: {
        formatter(params) {
            return params.seriesName;
        },
    },
    grid: {
        top: '3%',
        left: '3%',
        right: '3%',
        bottom: '3%',
    },
    legend: {
        show: false,
    },
    angleAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        min: 0,
        max: max,
        boundaryGap: ['0', '100'],
        startAngle: 203,
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        data: ['a', 'b', 'c', 'd', 'e', 'f'],
        z: 10,
    },
    polar: {
        radius: '70%',
    },
    toolbox: {
        show: false,
    },
    series: [...seriesOption2],
};
