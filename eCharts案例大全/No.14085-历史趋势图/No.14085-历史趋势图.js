option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + 'h';
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '个';
                }
            }
            return res;

        }
    },
    grid: {
        containLabel: true
    },
    legend: {
        data: ['总得分', '动态得分', '静态得分', '轨道几何', '轨道加速度', '轨道质量指数', '添乘', '人体感觉', '轨检小车', '其他病害']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12']
    }],
    dataZoom: [{
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }],
    yAxis: [{
        type: 'value',
        name: '总得分',
        min: 0,
        position: 'left',
        axisLabel: {
            formatter: '{value} 分 '
        }
    }, {
        type: 'value',
        name: '得分',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} 分'
        }
    }],
    series: [{
        name: '总得分',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [78, 90, 56, 77, 67, 88, 55, 89, 98, 64, 67, 78]
    }, {
        name: '静态得分',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 2]

    }, {
        name: '动态得分',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [21, 22, 23, 7, 4, 5, 5, 9, 8, 13, 16, 32]
    }, {
        name: '轨道几何',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [5, 6, 3, 7, 14, 11, 15, 19, 18, 11, 12, 12]
    }, {
        name: '轨道加速度',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [2, 12, 13, 17, 24, 25, 15, 9, 12, 22, 11, 4]
    }, {
        name: '轨道质量指数',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4]
    }, {
        name: '添乘',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [11, 12, 13, 14, 15, 16, 17, 16, 15, 15, 14, 13]
    }, {
        name: '人体感觉',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [16, 15, 14, 13, 12, 10, 9, 8, 7, 8, 9, 10]
    }, {
        name: '轨检小车',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [12, 11, 10, 11, 12, 13, 14, 13, 12, 11, 12, 13]
    }, {
        name: '其他病害',
        type: 'bar',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [15, 13, 11, 13, 15, 17, 15, 13, 11, 8, 11, 14]
   
    }]
};