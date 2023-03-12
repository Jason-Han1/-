var xdata = ['去年同月累计', '去年同月', '年初至本月累计', '本月']
var ydata = ['集装箱（万TEU）', '内河（万吨）', '沿海（万吨）', '其中：外贸（万吨）', '总港口吞吐量（万吨）']
var vdata1 = [1623, 4963, 38279, 13865, 43242]
var vdata2 = [600, 1966, 14011, 4799, 15876]
var vdata3 = [1350, 4806, 37360, 13632, 41900]
var vdata4 = [515, 2028, 14361, 4887, 16389]
var fontColor = '#30eee9';
var piedata1 = [{
        name: '水路运输',
        value: 4947289.9
    },
    {
        name: '铁路运输',
        value: 58478.1
    },
    {
        name: '公路运输',
        value: 1108923.3
    },
    {
        name: '航空运输',
        value: 1166309.8
    },
    {
        name: '邮件运输',
        value: 394.8
    },
    {
        name: '其它运输',
        value: 108465.2
    }
]
var piedata2 = [{
        name: '水路运输',
        value: 2994962.7
    },
    {
        name: '铁路运输',
        value: 52694.2
    },
    {
        name: '公路运输',
        value: 495376.5
    },
    {
        name: '航空运输',
        value: 514103.1
    },
    {
        name: '邮件运输',
        value: 332.6
    },
    {
        name: '其它运输',
        value: 100384.2
    },
]

var piedata3 = [{
        name: '水路运输',
        value: 9834899.5
    },
    {
        name: '铁路运输',
        value: 35975.8
    },
    {
        name: '公路运输',
        value: 3103988.4
    },
    {
        name: '航空运输',
        value: 2478583.1
    },
    {
        name: '邮件运输',
        value: 118873.6
    },
    {
        name: '其它运输',
        value: 51835.6
    },
]

option = {
    backgroundColor: '#0C1E49',
    title: {
        text: '2020年1-4月港口吞吐量情况',
        fontColor:'#FFF'
    },
    legend: {
        data: xdata,
        textStyle: {
            color: fontColor
        },
        bottom: '45%'
    },
    tooltip: {},
    xAxis: {
        type: 'value',
        max: 45000,
        axisLabel: {
            color: fontColor,
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: fontColor
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: fontColor
            }
        },

    },
    yAxis: {
        data: ydata,
        axisLabel: {
            color: fontColor,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: fontColor
            }
        },
    },
    grid: [{
        bottom: '55%',
        top: '15%',
        left: '15%',
        right: '5%',
    }],
    series: [{
            name: '去年同月累计',
            type: 'bar',
            data: vdata1
        },
        {
            name: '去年同月',
            type: 'bar',
            data: vdata2
        },
        {
            name: '年初至本月累计',
            type: 'bar',
            data: vdata3
        },
        {
            name: '本月',
            type: 'bar',
            data: vdata4
        },
        {
            name: '进出口合计（5月）',
            type: 'pie',
            radius: '55%',
            //center: ['50%', '50%'],
            data: piedata1,
            bottom: '0%',
            top: '55%',
            left: '0%',
            right: '65%',
        },
                {
            name: '人民币(万）_出口_2020年5月',
            type: 'pie',
            radius: '55%',
            //center: ['50%', '50%'],
            data: piedata2,
            bottom: '0%',
            top: '55%',
            left: '33%',
            right: '32%',
        },
                {
            name: '人民币(万）_进口_2020年1月至2020年5月',
            type: 'pie',
            radius: '55%',
            //center: ['50%', '50%'],
            data: piedata3,
            bottom: '0%',
            top: '55%',
            left: '65%',
            right: '0%',
        },
    ]
};