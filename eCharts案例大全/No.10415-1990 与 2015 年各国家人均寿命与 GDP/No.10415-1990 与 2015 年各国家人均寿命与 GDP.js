app.title = '气泡图';

var data = [
    [[28604,77,1990,'1990',],
	[37062,75.4,'1990',1990]],
    [[44056,81.8,23968973,'2015',2015],
	[53354,79.1,321773631,'2015',2015]],
	[[44556,82.8,23968973,'2018',2018],
	[53554,89.1,321773631,'2018',2018]],
];

option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: '类型、地价、出行时间关系'
    },
    legend: {
        right: 10,
        data: ['1990', '2015', '2018']
    },
    xAxis: {

        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        splitNumber:10,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return 10;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return 10;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(0, 139, 0)'
                }, {
                    offset: 1,
                    color: 'rgb(0, 139, 0)'
                }])
            }
        }
    },{
        name: '2018',
        data: data[2],
        type: 'scatter',
        symbolSize: function (data) {
            return 10;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(0, 0, 255)'
                }, {
                    offset: 1,
                    color: 'rgb(0, 0, 255)'
                }])
            }
        }
    }]
};