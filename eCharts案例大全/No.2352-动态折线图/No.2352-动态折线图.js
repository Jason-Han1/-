var xData = function() {
    var data = [];
    for (var i = 1; i < 31; i++) {
        data.push(i + "日");
    }
    return data;
}();

option = {
    backgroundColor: "#1A1835",

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '46%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        data: ['访问量', '订单量']
    },


    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: xData,
    }],

    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLine: {
            show:true,
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },

    }],
    dataZoom: [{
        type:'slider',
            show:false,
            realtime:true,
            startValue:0,
            endValue:24
    }],
    series: [{
        name: "访问量",
        type: "line",
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
            color: "#6f7de3",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data: [
            509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117,2000,1455,1210,719,
            733,944,2285,2208,3372,3936,3693,2962,2810,3519,2455,2610,2719,2484,2078
        ],
    }, {
        name: "订单量",
        type: "line",
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
            color: "#c257F6",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        data: [
            2136,3693,2962,3810,3519,3484,3915,3823,3455,4310,4019,3433,3544,3885,4208,3372,
            3484,3915,3748,3675,4009,4433,3544,3285,4208,3372,3484,3915,3823,4265,4298
        ]
    }, ]
}
var a = 1;

    setInterval(function () {
        if(a == (xData.length-24)){
            a=0;
        }
        myChart.dispatchAction({
            type:'dataZoom',
            startValue:a,
            endValue:a+24
        });
        a++;
    },2000)