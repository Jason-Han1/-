option = {
    title: {
        text: '花费的人数分布',
        x: 'center'
    },
    tooltip: {
        formatter: function(params, ticket, callback) {
            return params.seriesName + '<br />' + params.name + '：' + params.value + '%';
        }
    },
    legend: {
        data: ['0-100元会员', '100-200元会员', '200-300元会员', '300-400元会员', '400-500元会员', '500元以上会员'],
        y: 30
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['人数占比']
    },
    series: [{
        name: '0-100元会员',
        type: 'bar',
        stack: '会员',
        barWidth:'25%',
        label: {
            normal: {
                show: true,
                position: 'inside',
                //拼接
                formatter: function(params, ticket, callback) {
                    return params.value + '%';
                }
            }
        },

        itemStyle: {
            normal: {
                color: '#5b9bd5'
            }
        },
        data: [12] //数据
    }, {
        name: '100-200元会员',
        type: 'bar',
        barWidth:'25%',
        stack: '会员',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(params, ticket, callback) {
                    return params.value + '%';
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#ed7d31'
            }
        },
        data: [16] //数据源
    }, {
        name: '200-300元会员',
        type: 'bar',
        barWidth:'25%',
        stack: '会员',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(params, ticket, callback) {
                    return params.value + '%';
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#a5a5a5'
            }
        },
        data: [18]
    }, {
        name: '300-400元会员',
        type: 'bar',
        barWidth:'25%',
        stack: '会员',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(params, ticket, callback) {
                    return params.value + '%';
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#ffc000'
            }
        },
        data: [25]
    }, {
        name: '400-500元会员',
        type: 'bar',
        barWidth:'25%',
        stack: '会员',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(params, ticket, callback) {
                    return params.value + '%';
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#4472c4'
            }
        },
        data: [18]
    }, {
        name: '500元以上会员',
        type: 'bar',
        barWidth:'25%',
        stack: '会员',
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(params, ticket, callback) {
                    return params.value + '%';
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#70ad47'
            }
        },
        data: [11]
    }]
};