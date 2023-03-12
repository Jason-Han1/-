var spNum = 5,
    _max = 100;
var legendData = ['致命', '严重', '重要', '轻微'];
var y_data = ['资产1', '资产2', '资产3', '资产4', '资产5'];
var _datamax = [100, 100, 100, 100, 100],
    _data1 = [1, 15, 10, 13, 15],
    _data2 = [19, 5, 40, 33, 15],
    _data3 = [21, 55, 10, 13, 35],
    _data4 = [21, 55, 10, 13, 35]
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
    backgroundColor: '#ffffff',
    grid: {
        containLabel: true,
        left: '10%',
        right: '10%',
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
        extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
    },
    xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
        max: _max,
        axisLabel: {
            show: false,
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
            type: 'category',
            data: y_data,
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                padding: [-50, 0, 10, 0],
                color: 'rgba(102, 102, 102, 1)',
                fontSize: 28,
            },
            splitLine: {
                show: false
            },
            axisTick: { //y轴刻度线
                show: false
            },
        },
        {
            type: 'category',
            data: [342, 324, 2342, 2432, 324],
            axisLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                padding: [-50, 0, 10, 0],
                color: 'rgba(102, 102, 102, 1)',
                fontSize: 28,
            },
            splitLine: {
                show: false
            },
            axisTick: { //y轴刻度线
                show: false
            },
        }
    ],
    series: [{
        type: 'bar',
        name: '致命',
        stack: '2',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(243, 48, 24, 1)'
            }

        },
        data: _data1
    }, {
        type: 'bar',
        name: '严重',
        stack: '2',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(245, 101, 35, 1)'
            }

        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name: '重要',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(245, 166, 35, 1)'
            }

        },
        data: _data3
    }, {
        type: 'bar',
        stack: '2',
        name: '轻微',
        legendHoverLink: false,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: 'rgba(176, 121, 8, 1)'
            }
        },
        data: _data4
    }, {
        type: 'bar',
        barGap: '-100%',
        barBorderRadius: 50,
        barWidth: 20,
        silent: true,
        label: _label,
        itemStyle: {
            normal: {
                barBorderRadius: 50,
                color: 'rgba(241, 241, 241, 1)'
            },

        },
        z: 1,
        data: _datamax
    }]
};