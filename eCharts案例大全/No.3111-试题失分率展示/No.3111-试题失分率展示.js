var xName = ['第1题', '第2题', '第3题', '第4题', '第5题'];
var yRate = [100, 80, 50, 30, 70];
var barCol = function (n) {//0差-选中，1-差，2好-选中，3好
    switch (n) {
        case 0:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#ff5602',
                },
                {
                    offset: 1,
                    color: '#ffc270',
                },
            ]);
        case 1:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#ff7402',
                },
                {
                    offset: 1,
                    color: '#ffc371',
                },
            ]);
        case 2:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#2274ed',
                },
                {
                    offset: 1,
                    color: '#4cbbf0',
                },
            ]);
        default:
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#5499ff',
                },
                {
                    offset: 1,
                    color: '#88d3f6',
                },
            ]);
    }
};
var textCol = ['#ff5602','#2274ed']
option = {
    backgroundColor: '#fff',
    xAxis: {
        name: '小题序号',
        type: 'category',
        nameTextStyle: {
            color: '#999',
        },
        data: xName,
        axisLabel: {
            color: '#333',
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
            },
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        name: '失分率（%）',
        type: 'value',
        nameTextStyle: {
            color: '#999',
        },
        splitLine: {
            lineStyle: {
                color: '#dee1e2',
                type: 'dashed',
            },
        },
        axisLabel: {
            color: '#999',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#e5e5e5',
            },
        },
    },
    tooltip: {},
    series: [
        {
            cursor: 'default',
            data: yRate,
            type: 'bar',
            name: '失分率',
            label: {
                show: false,
                position: 'top',
                color:'red'
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [50, 50, 0, 0],
                    color: barCol(0),
                },
                emphasis:{
                    color:barCol(1)
                }
            },
            barWidth: '30%',
        },
    ],
};
