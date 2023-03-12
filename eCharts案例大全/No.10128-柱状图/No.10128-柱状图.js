var spNum = 4,_max=300;
var legendData = ['2018年', '2019年', '今年目标值'];
var y_data = ['1月', '2月', '3月', '4月', '5月', '6月','7月', '8月', '9月', '10月', '11月', '12月'];
var _datamax = [100,100,100,100,100,100],
    _data1 = [99.80,99.80,99.80,99.80,99.80,99.80,99.80,99.80,99.80,99.80,99.80,99.80],
    _data2 = [19,5,40,33,15,51],
    _data3 = [21,55,10,13,35,11];
    _data4 = [21,55,10,13,35,11];
var fomatter_fn = function(v) {
    return v.value
}
var _label = {
    normal: {
        show: true,
        position: 'inside',
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    }
};
option = {
    backgroundColor:'#fff',
    legend: {
        data: legendData,
        icon:'circle',
        textStyle: {
            color: 'rgb(0,0,0,0.8)'
        },
        itemWidth:12,
        itemGap:13
    },
    grid: {
        left: '50',
        right: '20',
        bottom: 30,
        top:'30'
    },
    tooltip: {
        show: true,
        borderColor: '#ddd',
        borderWidth: 1,
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
    },
    xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
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
            color: '#000'

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
        name: '2018年',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 20,
        barMinHeight:20,
        itemStyle: {
            normal: {
                color: '#0eb3e5',
                borderColor: '#fff',
                borderWidth:2,
                barBorderRadius:2
            },
            emphasis: {
                color: '#0eb3e5'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        stack: '2',
        name: '2019年',
        legendHoverLink: false,
        barWidth: 20,
        barMinHeight:20,
        label: _label,
        itemStyle: {
            normal: {
                color: '#80c269',
                borderColor: '#fff',
                borderWidth:2,
                barBorderRadius:2
            },
            emphasis: {
                color: '#80c269'
            }
        },
        data: _data3
    }, {
        type: 'bar',
        stack: '2',
        name: '今年目标值',
        legendHoverLink: false,
        barWidth: 20,
        barMinHeight:20,
        label: _label,
        itemStyle: {
            normal: {
                color: '#edb045',
                borderColor: '#fff',
                borderWidth:2,
                barBorderRadius:2
            },
            emphasis: {
                color: '#edb045'
            }
        },
        data: _data4
    }]
};