
var data = [
    //X轴，Y轴，半径，名称，颜色
    [[1,1,100,'a','blue'],[4,0.9,90,'d','blue'],[5,0.85,85,'e','blue']],
    [[2,0.5,50,'b','yellow'],[3,0.4,40,'c','yellow'],[6,0.3,30,'f','yellow']],
    [[7,0.5,50,'g','red'],[8,0.4,40,'t','red'],[9,0.3,30,'y','red']]
];

option = {
    legend: {
        right: 10,
        data: ['blue', 'yellow','red']
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: 'blue',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2])*1e1;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return (param.data[3]+" "+param.data[2]);
                },
                position: 'top'
            }
        },
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: '#40c2ff'
            }, {
                offset: 1,
                color: '#40c2ff'
            }])
        }
    }, {
        name: 'yellow',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2])*1e1;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: '#ffcc1b'
            }, {
                offset: 1,
                color: '#ffcc1b'
            }])
        }
    }, {
        name: 'red',
        data: data[2],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2])*1e1;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: '#ff3c3c'
            }, {
                offset: 1,
                color: '#ff3c3c'
            }])
        }
    }]
};
