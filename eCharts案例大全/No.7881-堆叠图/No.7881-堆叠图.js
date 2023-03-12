var spNum = 5,_max=100;
var legendData = ['1级风险', '2级风险', '3级风险'];
var y_data = ['景洪', '勐海', '勐腊',];
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
    backgroundColor: '#091034',
    legend: {
        data: legendData,
        textStyle: {
            color: '#ccc'
        }
    },
    grid: {
        containLabel: true,
        left: 50,
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
            // return p.name + '<br>' + '1级风险：' + '10个' + '<br>' + '2级风险：' + '10个' + '<br>' + '3级风险：' + '10个';
            // var _arr = p.seriesName.split('/'),
            // idx = p.seriesIndex;//1，2，3
            // return  p.seriesName + '<br>' + '完成：' + p.value + '<br>' + '占比：' + (p.value / _max * 100).toFixed(0) + '%';
        },
        // extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
    },
    xAxis: {
        splitNumber: spNum,
        interval: _max / spNum,
        max: _max,
        axisLabel: {
            show: false,
            formatter: function(v) {
                var _v = (v / _max * 100).toFixed(0);
                // return _v == 0 ? _v : _v + '%';
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
        name: '1级风险',
        stack: '2',
        label: _label,
        legendHoverLink: false,
        barWidth: 80,
        // barGap:'10%',/*多个并排柱子设置柱子之间的间距*/
  	    barCategoryGap:'-10%',/*多个并排柱子设置柱子之间的间距*/
        itemStyle: {
            normal: {
                color: 'rgb(129,12,30)',
                borderColor:'red',
            },
            emphasis: {
                // color: '#7E47FF'
            }
        },
        data: _data1
    }, {
        type: 'bar',
        name: '2级风险',
        stack: '2',
        legendHoverLink: false,
        barWidth: 80,
        // barGap:'10%',/*多个并排柱子设置柱子之间的间距*/
  	    barCategoryGap:'-10%',/*多个并排柱子设置柱子之间的间距*/
        label: _label,
        itemStyle: {
            normal: {
                color: 'rgb(135,137,87)',
                 borderColor:'yellow',
            },
            emphasis: {
                // color: '#FD5916'
            }
        },
        data: _data2
    }, {
        type: 'bar',
        stack: '2', 
        name: '3级风险',
        legendHoverLink: false,
        barWidth: 80,
        //  barGap:'10%',/*多个并排柱子设置柱子之间的间距*/
  	    barCategoryGap:'-10%',/*多个并排柱子设置柱子之间的间距*/
        label: _label,
        itemStyle: {
            normal: {
                color: 'rgb(3,106,178)',
                borderColor:'rgb(34,254,254)'
            },
            emphasis: {
                // color: 'rgb(34,254,254)'
            }
        },
        data: _data3
    }]
};