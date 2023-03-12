var spNum = 20,_max=100;
var legendData = ['正常运行', '需关注'];
var y_data = ['四川', '重庆', '成都'];
    _data1 = [10,15,10],
    _data2 = [19,5,40]
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
    backgroundColor: '#092E74',
    grid: {
        containLabel: true,
        left: '5%',
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
            return '名称：' + p.seriesName + '<br>' + '主机：' + p.value + '<br>';
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
            color: '#5C9DED'

        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            length: 100,
            lineStyle: {
                color: '#204485',
                type: 'dashed'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#204485',
                type: 'dashed'
            }
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
        name: '正常运行',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: '#559B04',
                borderWidth: 2,
                borderColor: '#092E74'
            },
            emphasis: {
                color: '#7E47FF'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '需关注',
        stack: '2',
        legendHoverLink: false,
        barWidth: 20,
        label: _label,
        itemStyle: {
            normal: {
                color: '#FC3108',
                borderWidth: 2,
                borderColor: '#092E74'
            },
            emphasis: {
                color: '#FD5916'
            }
        },
        data: _data2
    }]
};