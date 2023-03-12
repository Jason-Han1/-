var xAxisLineColor = "#999";
var yAxisSplitLineColor = '#ddd';
var yAxisAxisLabelColor = "#666"
option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'pink',
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    legend: {
        data: [{
                name: '1',
                icon: 'circle'
            },
            {
                name: '2',
                icon: 'diamond'
            },
            {
                name: '3',
                icon: 'roundRect'
            },
            {
                name: '4',
                icon: 'triangle'
            }
        ],
        orient: 'vertical',
        right: 20,
        top: 20
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'time',
        axisLine: {
            lineStyle: {
                color: xAxisLineColor
            }
        },
        axisLabel: {
            color: yAxisAxisLabelColor
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: yAxisSplitLineColor
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: yAxisAxisLabelColor
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    series: [{
            type: 'line',
            name: '1',
            itemStyle: {
                color: 'blue'
            },
            data: [
                [34000, 511],
                [900000, 4],
                [3000000, 344],
                [10000000, 11]
            ]
        },
        {
            type: 'line',
            name: '2',
            data: [
                [34000, 5],
                [900000, 411],
                [3000000, 11],
                [10000000, 1]
            ]
        },
        {
            type: 'line',
            name: '3',
            data: [
                [34000, 45],
                [900000, 11],
                [3000000, 1111],
                [10000000, 178]
            ]
        },
        {
            type: 'line',
            name: '4',
            data: [
                [34000, 599],
                [900000, 111],
                [3000000, 1211],
                [10000000, 166]
            ]
        }
    ]
};