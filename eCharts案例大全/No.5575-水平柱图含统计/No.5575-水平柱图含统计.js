var spNum = 5,
    _max = 100;
var y_data = ['一大队', '二大队', '三大队', '四大队', '五大队', '六大队'];
var _data1 = [10, 15, 10, 13, 15, 11],
    _data2 = [19, 5, 40, 33, 15, 51],
    _data3 = [21, 55, 10, 13, 35, 11];
var attackSourcesColor = ['#C86E0B', '#1378C0', '#279654', '#6989BB'];

function contains(arr, dst) {
    var i = arr.length;
    while (i -= 1) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}
option = {
    backgroundColor: '#021730',
    grid: {
        containLabel: true,
        left: '-2%',
        right: 0,
        bottom: 0,
        top:10
    },
    tooltip: {
        show: true,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
            color: '#3c3c3c',
            fontSize: 16
        },
        formatter: function(p) {
            // console.log(p);
            var _arr = p.seriesName.split('/'),
                idx = p.seriesIndex; //1，2，3
            return '名称：' + p.seriesName + '<br>' + '完成：' + p.value + '<br>' + '占比：' + (p.value / _max * 100).toFixed(0) + '%';
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
    },
    xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
        max: _max,
        axisLabel: {
            show: false,
            formatter: function(v) {
                var _v = (v / _max * 100).toFixed(0);
                return _v == 0 ? _v : _v + '%';
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    },
    yAxis: [{
        data: y_data,
        inverse: true,
        axisLabel: {
            verticalAlign: "bottom",
            align: "left",
            padding: [0, 12, 12, 6],
            textStyle: {
                fontSize: 14,
                color: "#ffffff",
                fontFamily: "SourceHanSansCN-Regular"
            },
            rich: {
                nt1: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[0],
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 4,
                    fontFamily: 'DIN',
                    fontSize: 14
                },
                nt2: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[1],
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 4,
                    fontFamily: 'DIN',
                    fontSize: 14
                },
                nt3: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[2],
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 4,
                    fontFamily: 'DIN',
                    fontSize: 14
                },
                nt: {
                    color: '#fff',
                    backgroundColor: attackSourcesColor[3],
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 4,
                    fontFamily: 'DIN',
                    fontSize: 14
                },
            },
            formatter: function(value, index) {
                index = contains(y_data, value) + 1
                if (index - 1 < 3) {
                    return [
                        '{nt' + index + '|' + index + '}' + '  {title' + index + '|' + value + '}'
                    ].join('\n')
                } else {
                    return [
                        '{nt|' + index + '}' + '  {title|' + value + '}'
                    ].join('\n')
                }
            }

        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        show: false,
        data: y_data,
        axisLine: {
            show: false
        }
    }],
    dataZoom: [{
        type: 'slider',
        yAxisIndex: 0,
        zoomLock: true,
        width: 10,
        handleSize: 0,
        showDetail: false,
        start: 0,
        end: 50,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "blue",
        },
        borderColor: "red",
        fillerColor:'blue'
    }, {
        type: 'inside',
        id: 'insideY',
        yAxisIndex: 0,
        start: 0,
        end: 50,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true
    }],
    series: [{
            name: '总量',
            barWidth: 6,
            type: 'bar',
            stack: '1',
            barGap: '-100%', // 将总计与其他数据重合
            label: {
                normal: {
                    show: true,
                    position: ['102%', '-3'], // 总计数据的位置,
                    textStyle: {
                        fontSize: 14,
                        color: '#18CEFE' //总计数据的颜色
                    },
                },
            },
            itemStyle: {
                color: 'transparent', // 颜色自己设
            },
            data: [50, 75, 60, 59, 65, 73]
        },
        {
            type: 'bar',
            name: '已处置',
            stack: '2',
            label: {
                normal: {
                    show: false
                },
            },
            legendHoverLink: false,
            animationDuration: 1500,
            barWidth: 6,
            label: {
                normal: {
                    show: false
                },
            },
            itemStyle: {
                normal: {
                    color: '#0096FF',
                    barBorderRadius: [20, 20, 20, 20],
                },
                emphasis: {
                    color: '#0096FF'
                }
            },
            data: _data1
        }, {
            type: 'bar',
            name: '未处置',
            stack: '2',
            legendHoverLink: false,
            barWidth: 6,
            label: {
                normal: {
                    show: false
                },
            },
            itemStyle: {
                normal: {
                    color: '#00FFFF',
                    barBorderRadius: [20, 20, 20, 20],
                },
                emphasis: {
                    color: '#00FFFF'
                }
            },
            data: _data2
        }, {
            type: 'bar',
            stack: '2',
            name: '处置中',
            legendHoverLink: false,
            barWidth: 6,
            label: {
                normal: {
                    show: false
                },
            },
            itemStyle: {
                normal: {
                    color: '#2CD00E',
                    barBorderRadius: [20, 20, 20, 20],
                },
                emphasis: {
                    color: '#2CD00E'
                }
            },
            data: _data3
        }
    ]
};