var spNum = 100,_max=400;
var legendData = ['权力距离', '不确定性规避', '个人主义','男性化',"长期导向"]
var y_data = ['中国', '印度', '俄罗斯', '美国', '英国', '德国','加拿大','日本','韩国'];
var _datamax = [100,100,100,100,100,100,100,100,100],
    _data1 = [80,77,93,40,35,35,39,54,60],
    _data2 = [30,40,95,46,35,65,48,92,85],
    _data3 = [20,48,39,91,89,67,80,46,18];
    _data4 = [66,56,36,62,66,66,52,95,39];
    _data5 = [118,61,0,29,25,31,23,80,75];
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
        name: '权力距离',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 40,
        itemStyle: {
            normal: {
                color: '#7E47FF'
            },
            emphasis: {
                color: '#7E47FF'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '不确定性规避',
        stack: '2',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#FD5916'
            },
            emphasis: {
                color: '#FD5916'
            }
        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name: '个人主义',
        legendHoverLink: false,
        barWidth: 40,
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
        name: '男性化',
        legendHoverLink: false,
        barWidth: 40,
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
    },{
        type: 'bar',
        name: '长期导向',
        stack: '2',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#7E47EF'
            },
            emphasis: {
                color: '#7E47EF'
            }
        },
        data: _data5
    }]
};