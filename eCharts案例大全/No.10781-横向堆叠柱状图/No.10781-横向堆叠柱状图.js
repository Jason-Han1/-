var spNum = 2,_max=100;
var legendData = ['电子资源', '纸本资源'];
var y_data = ['馆藏总量', '净刊量'];
var _datamax = [1000,1000];
//电子资源=【馆藏总量，净刊量】
var _data1 = [60,50];
//纸本资源=[馆藏总量，净刊量]
var _data2 = [15,33];
   
var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0) 
}
var _label = {
    normal: {
        show: true,
        position:  ['90%', -20],
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }
};
option = {
    backgroundColor: '#1d1f34',
  
    grid: {
        containLabel: true,
        left: 0,
        right: 15,
        bottom: 30
    },
   
    xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
        max: _max,
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
        name: '电子资源',
        stack: '1',
        label: _label,
        legendHoverLink: false,
        barWidth: 10,
        itemStyle: {
            normal: {
                color: '#7E47FF'
            },
            emphasis: {
                color: '#5c16ff'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '纸本资源',
        stack: '1',
        legendHoverLink: false,
        barWidth: 10,
        label: _label,
        itemStyle: {
            normal: {
                color: '#fc6525'
            },
            emphasis: {
                color: '#fe8e5e'
            }
        },
        data: _data2
    }]
};