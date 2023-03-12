var barColor = [];
var emColor = [];
var color0 = ["#089280", "#af540b", "#17559e"];
var color10 = ['#12ffd0', '#ffcc00', '#0cb0ed'];
if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
    for (var i = 0; i < color0.length; i++) {
        barColor[i] = {
            color: color0[i],
        }
        emColor[i] = {
            color: color10[i]
        }
    }
} else {
    for (var j = 0; j < color0.length; j++) {
        barColor[j] = {
            color: {
                colorStops: [{
                    offset: 0,
                    color: color0[j] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: color10[j] // 100% 处的颜色
                }]
            }
        }
        emColor[j] = {
            color: {
                colorStops: [{
                    offset: 0,
                    color: color10[j] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: color0[j] // 100% 处的颜色
                }]
            }
        }
    }
}
//图表默认数组
var xzhou2 = [],
    yzhou2 = [],
    zzhou2 = [],
    xzhou3 = [],
    yzhou3 = [],
    zzhou3 = []; //节拍
for (var i = 0; i <= 40; i++) {
    xzhou2[i] = 0;
    yzhou2[i] = 0;
    zzhou2[i] = 0;
    xzhou3[i] = 0;
    yzhou3[i] = 0;
    zzhou3[i] = 0;
}


option = {
    backgroundColor:'#203958',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    legend: {
        show: true,
        shadowColor: "#fff",
        shadowBlur: 5,
        shadowOffsetX: 5,
        data: ['X轴', 'Y轴', 'Z轴'],
        top: '5%',
        //			left: "18%",
        textStyle: {
            color: '#fff',
            fontSize: 14
            //				padding: [3, 20, 5, 7]
        },
        //			itemWidth: 64,
        itemHeight: 10
    },
    grid: {
        top: '30%',
        left: '7%',
        right: '8%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: (function() {
            var now = new Date();
            var res = [];
            var len = 40; //显示个数
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 2000);
            }
            return res;
        })(),
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#2d67a7'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    }],
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#2d67a7'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
            name: 'X轴',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 1,
            data: xzhou2,
            itemStyle: {
                normal: barColor[0],
                emphasis: emColor[0]
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0,0,0,0.6)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                }
            }
        }, {
            name: 'Y轴',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 1,
            data: yzhou2,
            itemStyle: {
                normal: barColor[1],
                emphasis: emColor[1]
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0,0,0,0.6)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                }
            }
        },
        {
            name: 'Z轴',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 1,
            data: zzhou2,
            itemStyle: {
                normal: barColor[2],
                emphasis: emColor[2]
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0,0,0,0.6)',
                    shadowBlur: 10,
                    shadowOffsetY: 5
                }
            }
        }
    ]
}
setInterval(function() {
    electricityX = Math.random() * 100;
    electricityY = Math.random() * 100;
    electricityZ = Math.random() * 100;
    xzhou2.shift();
    xzhou2.push(electricityX);
    yzhou2.shift();
    yzhou2.push(electricityY);
    zzhou2.shift();
    zzhou2.push(electricityZ);
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(axisData);
    myChart.setOption(option);
}, 1000)