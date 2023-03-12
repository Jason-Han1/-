var spNum = 5,_max=100;
var legendData = ['1月', '2月', '3月'];
var y_data = ['装饰', '管线进度', '现浇结构安装', '管片安装', '盾构掘进'];
var _datamax = [100,100,100,100,100],
    _data1 = [10,15,10,13,15],
    _data2 = [19,5,40,33,15],
    _data3 = [21,55,10,13,35];
var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0) + '%'
}
var _label = {
    normal: {
        show: true,
        position: 'inside',
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 18
        }
    }
};
option = {
    backgroundColor: '#020a1f',
    grid: {
        containLabel: true,
        left: 0,
        right: 15,
        bottom: 30
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
            console.log(p);
            var _arr = p.seriesName.split('/'),
            idx = p.seriesIndex;//1，2，3
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
        axisLabel: {
            fontSize: 18,
            color: '#fff'

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
    series: [{
        type: 'bar',
        silent: true,
        yAxisIndex: 1,
        barWidth: 40,
        itemStyle: {
            normal: {
                color: 'rgba(255,255,255,0.1)'
            },
            emphasis: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        data: _datamax
    }, {
        type: 'bar',
        name: '1月',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 40,
        itemStyle: {
            normal: {
                color: '#1089E7'
            },
            emphasis: {
                color: '#01A4F7'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '2月',
        stack: '2',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#F57474'
            },
            emphasis: {
                color: '#FF8989'
            }
        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name: '3月',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#F8B448'
            },
            emphasis: {
                color: '#FFC96C'
            }
        },
        data: _data3
    }]
};