var data = [
    [[120,4,48000000,'电视'],[60,18,108000000,'吊灯'],[1500,18,2700000000,'空调']],
    [[200,20,400000000,'冰箱'],[2000,1,200000000,'电磁炉'],[1000,1,100000000,'电饭煲']],
    [[3000,3,900000000,'热水器'],[2000,1,200000000,'浴霸'],[800,0.5,40000000,'吹风机'],[500,2,100000000,'洗衣机']]
];

var option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    },]),
    title: {
        text: '家用电器能耗统计'
    },
    legend: {
        right: 10,
        data: ['客厅', '厨房','卫浴']
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
        name: '客厅',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) /5e2;
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
                    color: 'rgb(28, 28, 28)'
                }])
            }
        }
    }, {
        name: '厨房',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
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
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(28, 28, 28)'
                }])
            }
        }
    },
    {
        name: '卫浴',
        data: data[2],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
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
                shadowColor: 'rgba(225, 225, 0, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(225, 225, 0)'
                }, {
                    offset: 1,
                    color: 'rgb(28, 28, 28)'
                }])
            }
        }
    }]
};