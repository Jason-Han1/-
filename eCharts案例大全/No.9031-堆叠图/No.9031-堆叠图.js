var spNum = 5,_max=100;
var legendData = ['重大风险', '较大风险', '一般风险','低风险'];
var y_data = ['郑州', '洛阳', '开封', '南阳', '信阳', '平顶山','新乡'];
var _datamax = [100,100,100,100,100,100],
    _data1 = [10,15,10,13,15,11,13],
    _data2 = [19,5,40,33,15,51,20],
    _data3 = [21,55,10,13,35,11,34];
    _data4 = [21,55,10,13,35,11,20];

var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0) 
}
var _label = {
    normal: {
        show: true,
        position: 'inside',
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }
};
option = {
    backgroundColor: '#091034',
    legend: {
        data: legendData,
        textStyle: {
            color: '#ccc'
        }
    },
    grid: {
        containLabel: true,
        left: 0,
        right: 15,
        bottom: 5
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
            fontSize: 16,
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
        name: '重大风险',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 30,
        itemStyle: {
            normal: {
                color: '#FD5916'
            },
            emphasis: {
                color: '#FD5916'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '较大风险',
        stack: '2',
        legendHoverLink: false,
        barWidth: 30,
        label: _label,
        itemStyle: {
            normal: {
                color: '#7E47FF'
            },
            emphasis: {
                color: '#7E47FF'
            }
        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name: '一般风险',
        legendHoverLink: false,
        barWidth: 30,
        label: _label,
        itemStyle: {
            normal: {
                color: '#01A4F7'
            },
            emphasis: {
                color: '#01A4F7'
            }
        },
        data: _data3
    }, {
        type: 'bar',
        stack: '2',
        name: '低风险',
        legendHoverLink: false,
        barWidth: 30,
        label: _label,
        itemStyle: {
            normal: {
                color: '#2EDDCD'
            },
            emphasis: {
                color: '#2EDDCD'
            }
        },
        data: _data4
    }]
};