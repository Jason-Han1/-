var spNum = 5,_max=100;
var legendData = ['优秀', '良好', '及格','需努力'];
var y_data = [ '50米*8折返跑', '1分钟仰卧起坐', '1分钟跳绳', '坐位体前屈', '50米跑','肺活量'];
var _datamax = [100,100,100,100,100,100],
    _data1 = [10,30,10,10,25,20],
    _data2 = [19,15,40,30,15,50],
    _data3 = [21,20,20,35,25,10];
    _data4 = [50,35,30,25,35,20];
var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0) 
}
var _label = {
    normal: {
        show: false,
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
    // legend: {
    //     data: legendData,
    //     textStyle: {
    //         color: '#ccc'
    //     }
    // },
    grid: {
        containLabel: true,
        left: 5,
        right: 15,
        bottom: 10,
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
            show: true,
            color:'#fff',
            formatter: function(v) {
                var _v = (v / _max).toFixed(1);
                return _v == 0 ? _v : _v;
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
            show: true
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
        name: '优秀',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 40,
        itemStyle: {
            normal: {
                color: '#02D8FF'
            },
            emphasis: {
                color: '#02D8FF'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '良好',
        stack: '2',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#3F89FF'
            },
            emphasis: {
                color: '#3F89FF'
            }
        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name: '及格',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#A530FF'
            },
            emphasis: {
                color: '#A530FF'
            }
        },
        data: _data3
    }, {
        type: 'bar',
        stack: '2',
        name: '需努力',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#6C62FF'
            },
            emphasis: {
                color: '#6C62FF'
            }
        },
        data: _data4
    }]
};