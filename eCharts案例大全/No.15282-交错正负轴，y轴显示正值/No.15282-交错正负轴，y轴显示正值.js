var xAxisData = [];
var data1 = [];
var data2 = [];

for (var i = 0; i < 10; i++) {
    // xAxisData.push('time' + i);
    data1.push((Math.random() * 2).toFixed(2));
    data2.push(-Math.random().toFixed(2));
}

var itemStyle = {
    normal: {},
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    title: {
        text: '奖金统计'
    },
    backgroundColor: '#fff',
    legend: {
        y: 'bottom',
        data: ['进', '出']
    },
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            },
            magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
            },
        }
    },
    tooltip: {
        formatter: function(params) {
            console.log(params);
            if (params.value < 0) {
                return params.name + '<br/>助学金额:' + -params.value
            } else {
                return params.name + '<br/>助学人数:' + params.value
            }
        }
    },
    xAxis: {
        data: xAxisData,
        name: '入学年份',
        silent: false,
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']

    },
    legend: {

        data: ['人数', '金额'],
        y: "bottom"
    },
    yAxis: [{
        inverse: true,
        name: '人数',
        splitArea: {
            show: false
        },
        axisLabel: {
            formatter: function(value) {
                if (value < 0) {
                    return -value
                } else {
                    return value
                }
            }
        }

    }, {
        inverse: true,
        name: '金额:(万元)',
        position: 'left',
        nameLocation: 'start',
        splitArea: {
            show: false
        }
    }],
    grid: {

    },
    series: [{
        name: '人数',
        type: 'bar',
        stack: 'one',
        itemStyle: itemStyle,
        data: [1300, 2000, 2500, 3800, 5500, 6000, 4000]
    }, {
        name: '金额',
        type: 'bar',
        stack: 'one',
        itemStyle: itemStyle,
        data: [-2000, -2500, -2900, -4500, -5900, -7000, -6000]
    }]
};