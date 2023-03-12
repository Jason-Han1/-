var spNum = 5,_max=100;
var legendData = ['巡逻民警', '巡逻车', '备勤民警','保安'];
var y_data = ['贵兵楼', '罗京酒店', '东方广场', '君悦酒店', '长安大厦'];
var _data1 = [10,15,10,13,15],
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
    grid: {
        containLabel: true,
        left: 20,
        right: 15,
        bottom: 30
    },
    tooltip: {
        show: true,
        // backgroundColor: '#fff',
        // borderColor: '#ddd',
        // borderWidth: 1,
        // textStyle: {
        //     color: '#3c3c3c',
        //     fontSize: 16
        // },
        // formatter: function(p) {
        //     console.log(p);
        //     var _arr = p.seriesName.split('/'),
        //     idx = p.seriesIndex;//1，2，3
        //     return '名称：' + p.seriesName + '<br>' + '完成：' + p.value + '<br>' + '占比：' + (p.value / _max * 100).toFixed(0) + '%';
        // },
        // extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
    },
    xAxis: {
        splitNumber: spNum,
        // interval: _max / spNum,
        // max: _max,
        axisLabel: {
            show: true,
            textStyle:{
                color:'#B7BECA',
                fontSize:"18"
            }
            // formatter: function(v) {
            //     var _v = (v / _max * 100).toFixed(0);
            //     return _v == 0 ? _v : _v + '%';
            // }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle:{
                type:"dashed",
                color:"#252F3B"
            }
        }

    },
    yAxis: [{
        data: y_data,
        axisLabel: {
            fontSize: 18,
            color: '#fff',
            margin:20
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
        name: '巡逻民警',
        stack: '2',
        // label: _label,
        legendHoverLink: false,
        barWidth: 30,
        itemStyle: {
            normal: {
                color: '#02A0EA'
            },
            emphasis: {
                color: '#02A0EA'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name:  '巡逻车',
        stack: '2',
        legendHoverLink: false,
        barWidth: 30,
        // label: _label,
        itemStyle: {
            normal: {
                color: '#31AF72'
            },
            emphasis: {
                color: '#31AF72'
            }
        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2',
        name:  '备勤民警',
        legendHoverLink: false,
        barWidth: 30,
        // label: _label,
        itemStyle: {
            normal: {
                color: '#EA970D'
            },
            emphasis: {
                color: '#EA970D'
            }
        },
        data: _data3
    }, {
        type: 'bar',
        stack: '2',
        name: '保安',
        legendHoverLink: false,
        barWidth: 30,
        // label: _label,
        itemStyle: {
            normal: {
                color: '#A489C0'
            },
            emphasis: {
                color: '#A489C0'
            }
        },
        data: _data4
    }]
};