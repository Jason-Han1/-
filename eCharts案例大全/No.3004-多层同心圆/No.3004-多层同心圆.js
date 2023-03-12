var option;

var getname = ['正常', '质差', '疑似中断'];

var getvalue = [5, 2, 1];
let chartData = getname.map((item, index) => {
    return { name: item, value: getvalue[index] };
});

var arrName = [];
var arrValue = [];
var sum = 0;
var pieSeries = [],
    lineYAxis = [];

// 数据处理
chartData.forEach((v, i) => {
    arrName.push(v.name);
    arrValue.push(v.value);
    sum = sum + v.value;
});

// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '图表',
        type: 'pie',
        startAngle: 270,
        clockwise: true,
        emphasis: {
            scale: false,
        },
        radius: [55 + i * 15 + '%', 50 + i * 15 + '%'],
        center: ['50%', '50%'],
        label: {
            show: false,
        },
        data: [
            {
                value: v.value,
                name: v.name,
            },
            {
                value: sum / 10*2,
                name: '',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    });
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        startAngle: 270,
        clockwise: true, //顺时加载
        emphasis: {
            scale: false, //鼠标移入变大
        },
        radius: [55 + i * 15 + '%', 50 + i * 15 + '%'],
        center: ['50%', '50%'],
        label: {
            show: false,
        },
        data: [
            // 底层圆
            {
                value: 10,
                itemStyle: {
                    color: '#3A3A3A',
                },
            },
            // 空白部分
            {
                value: 2,
                name: '',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    });
    lineYAxis.push({
        value: i,
    });
});

option = {
    title: [
        {
            text: '总量',
            top: '56%',
            left: '46%',
            textStyle: {
                color: '#999',
                fontSize: 34,
            },
        },
        {
            text: sum,
            left: '48%',
            top: '42%',
            textStyle: {
                color: '#fff',
                fontSize: 54,
            },
        },
    ],
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: '#5CCBB1',
        },
        {
            offset: 1,
            color: '#3765D1',
        },
    ]),
    grid: {
        top: '73%',
        bottom: '5%',
        left: '50%',
        containLabel: false,
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: function (params) {
                    let item = chartData[params];
                    return item.name + item.value;
                },
                interval: 0,
                inside: true,
                color: '#999',
                fontSize: 10,
                show: true,
            },
            data: lineYAxis,
        },
    ],
    xAxis: [
        {
            show: false,
        },
    ],
    series: pieSeries,
};

option && myChart.setOption(option);
