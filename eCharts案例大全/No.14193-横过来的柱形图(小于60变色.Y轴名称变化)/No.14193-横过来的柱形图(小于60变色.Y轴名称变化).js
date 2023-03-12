var normalcolor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#ffb069'
}, {
    offset: 1,
    color: '#ec2e85'
}]);


var maxcolor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    offset: 0,
    color: '#2af598'
}, {
    offset: 1,
    color: '#009efd'
}]);


option = {
    timeline: {
            top: 'center',
            right: 35,
            height: 300,
            width: 10,
            inverse: true,
            playInterval: 2500,
            symbol: 'none',
            orient: 'vertical',
            axisType: 'category',
            autoPlay: true,
            checkpointStyle: {
            color: '#04a5f1',
            borderColor: 'rgba(4, 165, 261, .5)'
        },
        lineStyle: {
            color: '#ddd'
        },
        itemStyle: {
            normal: {
                color: '#04a5f1'
            },
            emphasis: {
                color: '#04a5f1'
            }
        },
            label: {
                normal: {
                    show: false
                }
            },
             data: ['9月1日', '9月2日', '9月3日', '9月4日', '9月5日', '9月6日', '9月7日', '9月8日', '9月9日', '9月10日'],
       
        },
		
		
		
    options: [{
        title: {
            'text': '部门排名',
        },
        tooltip: {
            'trigger': 'axis'
        },
        legend: {
            "show": true,
            x: 'left',
            'data': ['上客量'],
            'selected': {
                '上客量': true,
            }
        },
        calculable: true,
        grid: {
             
        },
        xAxis: [{
            splitLine: {
                show: false
            },
            "axisLine": {
                show: false,
            },
            "axisTick": {
                "show": false
            },
            'type': 'value',
        }],

        yAxis: [{
            "axisLine": {
                show: false,
            },
            splitLine: {
                show: false
            },
            "axisTick": {
                "show": false
            },
            'type': 'category',

            'data': [
                '市场监管局', ' 卫计委', '环保局', '民宗委', '人保局', '文广局', '规土局', '发改局'
            ]

        }, {
            'data': [],
            "axisLine": {
                show: false,
            },
            'type': 'category',
        }],

        series: [{
            barWidth: 50,
            'name': '效能指数',
            'yAxisIndex': 1,
            'type': 'bar',
            'data': [5, 6, 8, 28, 8, 24, 11, 16],
            itemStyle: {
                normal: {
                    color: function(params) {
                        console.log(params.value);
                        if (params.value < 60)
                            return normalcolor
                        else
                            return maxcolor
                    }
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                            offset: 0,
                            color: '#2af598'
                        }, {
                            offset: 1,
                            color: '#009efd'
                        }]
                    ),
                    barBorderRadius: 4
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}  '
                }
            },
        }]
    }, {
        title: {
            'text': '9月2日'
        },
        yAxis: {
            'data': [
                '文广局', ' 卫计委', '环保局', '民宗委', '人保局', '文广局', '规土局', '发改局'
            ]
        },
        series: [{
            'data': [45, 43, 64, 134, 188, 43, 109, 12]
        }]
    }, {
        title: {
            'text': '9月3日'
        },
        series: [{
            'data': [110, 32, 111, 176, 73, 59, 181, 9]
        }]
    }, {
        title: {
            'text': '9月4日'
        },
        series: [{
            'data': [94, 37, 64, 55, 56, 41, 70, 17]
        }]
    }, {
        title: {
            'text': '9月5日'
        },
        series: [{
            'data': [5, 6, 5, 28, 8, 24, 11, 16]
        }]
    }, {
        title: {
            'text': '9月6日'
        },
        series: [{
            'data': [45, 34, 64, 134, 188, 43, 109, 12]
        }]
    }, {
        title: {
            'text': '9月7日'
        },
        series: [{
            'data': [5, 6, 34, 28, 8, 24, 11, 16]
        }]
    }, {
        title: {
            'text': '9月8日'
        },
        series: [{
            'data': [94, 37, 64, 55, 56, 41, 70, 17]
        }]
    }, {
        title: {
            'text': '9月9日'
        },
        series: [{
            'data': [45, 40, 64, 134, 188, 43, 109, 12]
        }]
    }, {
        title: {
            'text': '9月10日'
        },
        series: [{
            'data': [5, 6, 10, 28, 8, 24, 11, 16]
        }]
    }, ]
};