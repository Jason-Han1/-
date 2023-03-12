option = {
    backgroundColor:'#fff3d3',
    tooltip: {
        showDelay: 0,
        formatter: function(Pr) {
            if (Pr.value.length > 1) {
                return Pr.seriesName + ' :<br/>' +
                    Pr.value[0] + 'cm ' +
                    Pr.value[1] + 'kg ';
            } else {
                return Pr.seriesName + ' :<br/>' +
                    Pr.name + ' : ' +
                    Pr.value + 'kg ';
            }
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    legend: {
        data: ['Ms', 'Mr'],
        top: '20',
        left: 'center'
    },
    xAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} cm'
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#6d5d48'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} kg'
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#6d5d48'
            }
        },
    }],
    series: [
        {
            name: 'Ms',
            type: 'effectScatter',
            data: [
                [168, 63],
                [167, 59],
                [164, 60],
                [177, 60],
                [166, 53],
                [170, 59],
                [159, 57],
                [166, 69],
                [160, 66],
                [160, 75]
            ],
            // symbol: 'roundRect',
            rippleEffect: {
                period: 1,
                scale: 2.5, 
                brushType: 'fill'
            },
            symbolSize: [30, 30],
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.3)',
                    shadowOffsetY: 5,
                    borderType: 'solid',
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: '#fce6a9'
                    }, {
                        offset: 1,
                        color: '#ef901e'
                    }])
                }
            }
        },
        {
            name: 'Mr',
            type: 'effectScatter', //scatter
            data: [
                [185, 66],
                [177, 70],
                [175, 68],
                [176, 65],
                [172, 76],
                [170, 70],
                [169, 76],
                [182, 77],
                [173, 73],
                [178, 75]
            ],
            symbol: 'roundRect',
            symbolSize: [30, 30],
            rippleEffect: {
                period: 1,
                scale: 2.5,
                brushType: 'fill'
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.3)',
                    shadowOffsetY: 5,
                    borderType: 'solid',
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: '#c2d963'
                    }, {
                        offset: 1,
                        color: '#006836'
                    }])
                }
            }
        },
    ]
};