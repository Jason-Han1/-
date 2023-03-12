var link = document.createElement('link');
link.setAttribute('type', 'text/css');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'https://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css');
document.head.appendChild(link);

option = {

    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow',
            label: {
                formatter: function(params) {
                    return echarts.format.formatTime(params.value);
                }
            }
        },
        formatter: function(params) {
            var res = '<h4>' + params[0].name + '</h4>';
            res += '<table class="table">';
            res += '<tr><th>类别</th><th>严重</th><th>死亡</th><th>不确定</th></tr>';
            res += '<tr><td>确定</td><td>' + params[0].value + '</td><td>' +
                params[2].value + '</td><td>' + params[3].value + '</td></tr>';
            res += '<tr><td>可能</td><td>' + params[4].value + '</td><td>' +
                params[6].value + '</td><td>' + params[7].value + '</td></tr>';
            res += '<tr><td>排除</td><td>' + params[8].value + '</td><td>' +
                params[10].value + '</td><td>' + params[11].value + '</td></tr>';
            res += '</table>';
            return res;
        }

    },
    legend: {

        data: ['严重', '死亡', '不确定']
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        min: 0
    },
    yAxis: {
        type: 'category',
        data: ['疾病1', '疾病2', '疾病3', '疾病4'],
        offset: 30,
        axisLabel: {
            formatter: function(value, index) {
                return value;
            }
        }
    },
    series: [


        {
            name: '严重',
            type: 'bar',
            stack: '确定',

            data: [126, 302, 121, 334],
            label: {
                normal: {
                    show: true
                }
            }
        }, {
            type: 'bar',
            stack: '确定',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: '确定',
                    textStyle: {
                        color: 'red'
                    }
                }
            },
            data: [-0.1, -0.1, -0.1, -0.1]
        },
        {
            name: '死亡',
            type: 'bar',
            stack: '确定',

            data: [120, 63, 101, 134],
            label: {
                normal: {
                    show: true
                }
            }
        },
        {
            name: '不确定',
            type: 'bar',
            stack: '确定',

            data: [120, 63, 101, 134],
            label: {
                normal: {
                    show: true
                }
            }
        },
        {
            name: '严重',
            type: 'bar',
            stack: '可能',

            data: [320, 82, 301, 123],
            label: {
                normal: {
                    show: true
                }
            }
        }, {
            type: 'bar',
            stack: '可能',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: '可能',
                    textStyle: {
                        color: 'red'
                    }
                }
            },
            data: [-0.1, -0.1, -0.1, -0.1]
        },
        {
            name: '死亡',
            type: 'bar',
            stack: '可能',

            data: [120, 73, 101, 134],
            label: {
                normal: {
                    show: true
                }
            }
        },
        {
            name: '不确定',
            type: 'bar',
            stack: '可能',

            data: [120, 73, 101, 134],
            label: {
                normal: {
                    show: true
                }
            }
        },
        {
            name: '严重',
            type: 'bar',
            stack: '排除',

            data: [78, 302, 301, 233],
            label: {
                normal: {
                    show: true
                }
            }
        }, {
            type: 'bar',
            stack: '排除',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: '排除',
                    textStyle: {
                        color: 'red'
                    }
                }
            },
            data: [-0.1, -0.1, -0.1, -0.1]
        },
        {
            name: '死亡',
            type: 'bar',
            stack: '排除',
            data: [84, 34, 123, 134],
            label: {
                normal: {
                    show: true
                }
            }
        },
        {
            name: '不确定',
            type: 'bar',
            stack: '排除',
            data: [84, 34, 123, 134],
            label: {
                normal: {
                    show: true
                }
            }
        }

    ]
};