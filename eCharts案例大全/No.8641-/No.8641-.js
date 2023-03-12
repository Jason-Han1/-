var spNum = 5,_max=100;
var legendData = ['五华区', '西山区', '嵩明县','盘龙区','官渡区', '呈贡区', '晋宁区'];
var y_data = ['2014', '2015', '2016', '2017', '2018'];
var _datamax = [100,100,100,100,100],
    _data1 = [10,15,10,13,15],
    _data2 = [19,5,40,33,15],
    _data3 = [21,55,10,13,35];
    _data4 = [21,55,10,13,35];
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
    dataZoom: [ {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 50
    }, {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'empty',
        start: 0,
        end: 100
    }],
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
        name:'频次',
        splitNumber: spNum,
        interval: _max / spNum,
        axisLabel: {
            show: true,
        },
        axisLine: {
            show: true,
            lineStyle:{
                    color:'#fff', 
                }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    },
    yAxis: [{
        name:'年',
        data: y_data,
        axisLabel: {
            fontSize: 12,
            color: '#fff'

        },
        axisLine: {
            show: true,
            lineStyle:{
                    color:'#fff', 
                }
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
        name: '五华区',
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
        name: '西山区',
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
        name:  '嵩明县',
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
        name: '官渡区',
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
    }, {
        type: 'bar',
        stack: '2',
        name: '呈贡区',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#D21F33'
            },
            emphasis: {
                color: '#D21F33'
            }
        },
        data: _data4
    }, {
        type: 'bar',
        stack: '2',
        name: '晋宁区',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#FAC84C'
            },
            emphasis: {
                color: '#FAC84C'
            }
        },
        data: _data4
    }]
};