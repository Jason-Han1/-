let barWidth = 10 /* 进度条及进度条radius宽度 */,
    nameWidth = 60 /* 进度条名称宽度 */,
    unit = '亿' /* 单位 */,
    attaData = [] /* 进度条数据 */,
    attaVal = [] /* 进度条数值 */,
    topName = [] /* 进度条名称 */,
    salvProMax = []; /* 背景条数据 */
let datas = [
    {
        name: '空军',
        value: 2400,
    },
    {
        name: '海军',
        value: 1800,
    },
    {
        name: '火箭军',
        value: 1400,
    },
    {
        name: '陆军',
        value: 1000,
    },
    {
        name: '陆军',
        value: 600,
    },
];
let attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#FE9C5A' },
        { offset: 1, color: '#EB3B5A' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#FFD14C' },
        { offset: 1, color: '#FA8231' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#FFEE96' },
        { offset: 1, color: '#F7B731' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: '#2EC7CF' },
        { offset: 1, color: '#395CFE' },
    ]),
];
datas.forEach((it, i) => {
    let itemStyle = {
        color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i],
    };
    topName[i] = `${it.name}`;
    attaVal[i] = it.value;
    attaData[i] = {
        value: parseFloat(it.value).toFixed(2),
        itemStyle: itemStyle,
    };
});
/* 该值无具体作用，取进度最大值 * 1.2 */
salvProMax = Array(attaVal.length).fill(Math.max(...attaVal) * 1.2);
option = {
    backgroundColor: '#BBE4EC',
    tooltip: {
        show: false,
        backgroundColor: 'rgba(3,169,244, 0.5)', //背景颜色（此时为默认色）
        textStyle: {
            fontSize: 16,
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '5%',
        bottom: '5%',
        containLabel: true,
    },
    legend: {
        show: false,
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            //名称
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#1F4265',
                },
                formatter: (val, i) => {
                    return `{num|${(i += 1)}}{name|${val}}`;
                },
                rich: {
                    num: {
                        width: 16,
                        fontSize: 16,
                        fontWeight: 800,
                    },
                    name: {
                        width: nameWidth,
                        fontSize: 16,
                        fontWeight: 600,
                    },
                },
            },
            data: topName,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#1F4265',
                    fontSize: 20,
                },
                formatter: (val) => {
                    return `{num|${val}}{unit|(${unit})}`;
                },
                rich: {
                    num: {
                        fontSize: 16,
                        fontWeight: 600,
                    },
                    unit: {
                        fontSize: 14,
                    },
                },
            },
            data: attaVal,
        },
    ],
    series: [
        // 进度条
        {
            zlevel: 1,
            name: '',
            type: 'bar',
            barWidth: barWidth,
            animationDuration: 1500,
            data: attaData,
            align: 'center',
            itemStyle: {
                normal: {
                    barBorderRadius: barWidth,
                },
            },
            label: {
                show: false,
            },
        },
        // 背景条
        {
            name: '',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    barBorderRadius: barWidth,
                    color: 'rgba(165, 213, 232, 1)',
                },
                emphasis: {
                    color: 'rgba(165, 213, 232, 1)',
                },
            },
        },
    ],
};
