// 指定图表的配置项和数据
var data1 = [20, 30, 40, 50];
var data2 = [30, 30, 9, 60];
var data3 = [20, 30, 20, 30];
var data4 = [20, 30, 40, 50];
var data5 = [50, 30, 9, 60];
var data6 = [20, 30, 20, 30];
var datacity = ['安徽理工大学', '安徽新华学院', '安徽国际商务职业学院'];
var option = {
    color: ['#313AF9', '#4CA0FF', '#A6D0FF', '#31F9C8', '#01F1FF', '#ADF9FF'],
    tooltip: {
        trigger: 'axis',

    },
    legend: {
        bottom: '0',
        data: ['权益类', '市值固收', '成本固收', '流动性', '其他类资产', '费用及其他'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '30',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        name: '人次/次数',
        nameTextStyle: {
            color: '#666'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            color: '#666'
        },



    }],
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#666'
        },

        data: datacity,
    }],
    series: [{
            name: '市值固收',
            type: 'bar',
            stack: 'sum',
            barWidth: '30px',
            data: data1

        },
        {
            name: '成本固收',
            type: 'bar',
            barWidth: '30px',
            stack: 'sum',
            data: data2,

        },
        {
            name: '权益类',
            type: 'bar',
            stack: 'sum',
            barWidth: '30px',
            data: data3

        },
        {
            name: '流动性',
            type: 'bar',
            stack: 'sum1',
            barWidth: '30px',
            data: data4

        },
        {
            name: '其他类资产',
            type: 'bar',
            stack: 'sum1',
            barWidth: '30px',
            data: data5

        },
        {
            name: '费用及其他',
            type: 'bar',
            stack: 'sum1',
            barWidth: '30px',
            data: data6

        },
    ]
};