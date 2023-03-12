let chartData = {
    xData: ['微信公众号', '微信小程序', '容器镜像', '微服务微应用', '信息系统', '数据产品', '移动APP'],
    data: [212, 305, 260, 283, 20, 555, 125, 142],
    percent: ['22%', '35%', '35%', '35%', '35%', '35%', '35%', '35%'],
    max: 1902,
    color: ['#01DA99', '#00A7C0', '#0E468F', '#62AFE1', '#D66B30', '#D5AC52', '#D6C7A8'],
    color2: ['#01CD91', '#009AB0', '#0D3F82', '#5BAADF', '#CC6228', '#CF9E38', '#CEBC97'],
};

let effectScatterData = [];
let bottomBarData = [];
let topData = [];
let middleData = [];
let bgData = [];
for (let i = 0; i < chartData.xData.length; i++) {
    //底部
    effectScatterData.push({
        name: '',
        value: '0',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: chartData.color[i],
                    },
                    {
                        offset: 1,
                        color: chartData.color2[i],
                    },
                ]),
            },
        },
    });

    //下半截柱状图
    bottomBarData.push({
        name: '',
        value: chartData.data[i],
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        { offset: 0, color: chartData.color[i] },
                        { offset: 0.5, color: chartData.color[i] },
                        { offset: 0.5, color: chartData.color2[i] },
                        { offset: 1, color: chartData.color2[i] },
                    ],
                },
            },
        },
    });

    //下半部的顶
    middleData.push({
        name: '',
        value: chartData.data[i],
        symbolPosition: 'end',
        label: {
            formatter: '{c}',
            color: '#fff',
            offset: [0, -5],
            show: true,
            position: 'top',
            fontSize: 10,
            fontWeight: 400,
            fontFamily: 'zcool-gdh',
        },
        itemStyle: {
            color: chartData.color[i],
        },
    });
    //头顶
    topData.push({
        name: '',
        value: chartData.max,
        symbolPosition: 'end',
        label: {
            formatter: chartData.percent[i],
            color: '#000',
            offset: [0, -5],
            show: true,
            position: 'top',
            fontSize: 10,
            fontWeight: 400,
            fontFamily: 'zcool-gdh',
        },
        itemStyle: {
            color: '#F4F4F4',
        },
    });
    // 背景
    bgData.push({
        name: '',
        value: chartData.max - chartData.data[i],
        symbolPosition: 'end',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        { offset: 0, color: '#dadada33' },
                        { offset: 0.5, color: '#dadada33' },
                        { offset: 0.5, color: '#dadada26' },
                        { offset: 1, color: '#dadada26' },
                    ],
                },
            },
        },
    });
}

option = {
    grid: {
        top: '2%',
        left: '2%',
        right: '2%',
        bottom: '10%',
    },
    xAxis: {
        offset: 20,
        data: chartData.xData,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#A5C8E6',
                fontSize: 12,
            },
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        //'最低下,
        {
            name: '最低下的圆片',
            stack: 'a',
            // type: 'pictorialBar',
            // symbolSize: [66, 12],
            // symbolOffset: [0, 6],
            type: 'effectScatter',
            symbol: 'diamond',
            symbolSize: [20, 12],
            symbolOffset: [0, 0],
            z: 22,
            data: effectScatterData,
        },
        //下半截柱状图
        {
            name: '下半截柱状图',
            stack: 'a',
            type: 'bar',
            barWidth: 20,
            z: 2,
            barGap: '-100%',
            data: bottomBarData,
        },
        //替代柱状图 默认不显示颜色
        {
            name: '替代柱状图',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            stack: 'b',
            itemStyle: {
                color: 'transparent',
            },
            data: chartData.data,
        },
        //下半部的顶
        {
            name: '头部1',
            stack: 'a',
            type: 'pictorialBar',
            symbolSize: [20, 12],
            symbol: 'diamond',
            symbolOffset: [0, -6],
            z: 22,
            data: middleData,
        },
        //顶部
        {
            name: '头部2',
            stack: 'a',
            type: 'pictorialBar',
            symbol: 'diamond',
            symbolSize: [20, 12],
            symbolOffset: [0, -6],
            z: 22,
            data: topData,
        },
        //底色
        {
            name: '底色',
            type: 'bar',
            barWidth: 20,
            z: 2,
            barGap: '-100%',
            stack: 'b',
            data: bgData,
        },
    ],
};
