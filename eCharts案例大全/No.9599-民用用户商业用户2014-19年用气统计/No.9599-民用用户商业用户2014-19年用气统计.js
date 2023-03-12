var spNum = 5,_max=1000;
var legendData = ['民用用气', '商业用气', '总用气'];
var y_data = ['2014年', '2015年', '2016年', '2017年', '2018年', '2019年'];
var _datamax = [1000,1000,1000,1000,1000,1000],
    _data1 = [260,298,320,318,360,365],
    _data2 = [288,310,340,362,395,360],
    _data3 = [548,608,660,680,755,725];
   // _data4 = [30,55,10,13,35,11];
var fomatter_fn = function(v) {
    return (v.value / _max * 1000).toFixed(0) 
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
    backgroundColor: '#17385A',
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
        name: '民用用气',
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
        name: '商业用气',
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
        name: '总用气',
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
    }]
};