var legendData = ['mysql', 'orcal', '123','321'];
var _color = ['#f20', '#f60', '#ff0', '#00f']
var _datamax = [100]
    
var optiondata = [[10], [19], [21], [21]]

var _label = {
    normal: {
        show: true,
        position: [0, '24px'],
        formatter: function(v) {
          return (v.value / 100 * 100).toFixed(0) + '%'
        },
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }
}
var _data = []
optiondata.forEach((item, i) => {
    _data.push({
        type: 'bar',
        stack: '2',
        name: i,
        legendHoverLink: false,
        barWidth: 10,
        label: _label,
        itemStyle: {
            borderRadius: 10,
            normal: {
                color: _color[i]
            },
            emphasis: {
                color: _color[i]
            }
        },
        data: item
    })
    return _data
})

option = {
    backgroundColor: '#091034',
    legend: {
        show: false,
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
    xAxis: {
        splitNumber: 5,
        interval: 20,
        max: 100,
        axisLabel: {
            show: false
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
        show: false,
        data: [],
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
        data: [],
        axisLine: {
            show: false
        }
    }],
    series: _data
};