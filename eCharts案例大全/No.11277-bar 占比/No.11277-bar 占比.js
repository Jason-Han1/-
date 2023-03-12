
var spNum = 0,_max=100;
var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0)
}
var _label = {
    normal: {
        show: true,
        position: 'top',
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }
};
option = {
    backgroundColor:'#082D78',
    legend: {
        data: ['10kV', '380V', '220V'],
        textStyle: {
            color: '#fff',
            fontSize:14,
        },
        itemGap:70,
        bottom:250,
        itemWidth:20,
        itemHeight:10
    },
    grid: {
        containLabel: true,
        left: 80,
        right: 80,
        top: 45
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

        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
    },
    xAxis: {
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
        data: [''],
        axisLabel: {
            fontSize: 16,
            color: '#fff',
            show:false

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
        data: [''],
        axisLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        name: '10kV',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 14,
        itemStyle: {
            normal: {
                color: '#74E8FF',
                barBorderRadius: [30, 0, 0, 30]
            },
            emphasis: {
                color: '#74E8FF'
            }
        },
        data: [30]
    }, {
        type: 'bar',
        name: '380V',
        stack: '2',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#4CC4B5'
            },
            emphasis: {
                color: '#4CC4B5'
            }
        },
        data: [20]
    }, {
        type: 'bar',
        stack: '2',
        name: '220V',
        legendHoverLink: false,
        barWidth: 40,
        label: _label,
        itemStyle: {
            normal: {
                color: '#B49BD3',
                barBorderRadius: [0, 30, 30, 0]
            },
            emphasis: {
                color: '#B49BD3'
            }
        },
        data: [30]
    }]
};