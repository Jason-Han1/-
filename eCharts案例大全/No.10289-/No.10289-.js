var spNum = 5,_max=100;
var legendData = ['完成', '正常期限内正在处理', '逾期正在处理','未完成'];
var y_data = ['其他处', '纳税服务处', '经济分析处', '征管科技处','数据风险局' , '货劳处'];
var _datamax = [100,100,100,100,100,100],
    _data1 = [10,15,10,13,15,11],
    _data2 = [19,5,40,33,15,51],
    _data3 = [21,55,10,13,35,11];
    _data4 = [21,55,10,13,35,11];
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
    backgroundColor: '#05224D',
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
        name: '完成',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth:20,
        itemStyle: {
            normal: {
                color: '#B740BD'
            },
            emphasis: {
                color: '#FD5916'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '正常期限内正在处理',
        stack: '2',
        legendHoverLink: false,
        barWidth: 20,
        label: _label,
        itemStyle: {
            normal: {
                color: '#7E47FF'
            },
            emphasis: {
                color: '#FD5916'
            }
        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name: '逾期正在处理',
        legendHoverLink: false,
        barWidth: 20,
        label: _label,
        itemStyle: {
            normal: {
                color: '#01A4F7'
            },
            emphasis: {
                color: '#FD5916'
            }
        },
        data: _data3
    }, {
        type: 'bar',
        stack: '2',
        name: '未完成',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#2EDDCD'
            },
            emphasis: {
                color: '#FD5916'
            }
        },
        data: _data4
    }]
};