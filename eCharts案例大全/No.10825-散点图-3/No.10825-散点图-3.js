
var data1 = [];
var data2 = [];
var data3 = [];

var random = function (max) {
    return (Math.random() * max).toFixed(3);
};

for (var i = 0; i < 10; i++) {
    data1.push([random(15), random(10), random(1)]);
    data2.push([random(10), random(10), random(1)]);
    data3.push([random(15), random(10), random(1)]);
}

option = {
        backgroundColor: '#021236',
    animation: false,

    tooltip: {
    },
    xAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
                axisLine: {show:false},
        axisLabel: {show:false},
        axisTick: {show:false},
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 'dataMin',
        max: 'dataMax',
                axisLine: {show:false},
        axisLabel: {show:false},
        axisTick: {show:false},
        splitLine: {
            show: false
        }
    },

    series: [
        {
            name: 'scatter',
            type: 'scatter',
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data1
        },
              {
                name: 'scatter',
                  type: 'scatter',
                symbolSize:  function (val) {
                return val[2] * 41;},
                itemStyle: {
                            color: '#14B5CB',
                    borderWidth: 3,
                    borderColor: '#D4EB36'
                },
             data: data1
            },
        {
            name: 'scatter2',
            type: 'scatter',
      
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data2
        },
        {
            name: 'scatter3',
            type: 'scatter',
    
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: data3
        }
    ]
}