var niandu = [{
    nd: 1962,
    mj: 14.55,
    zz: "0%"
}, {
    nd: 1966,
    mj: 23.09,
    zz: "58.7%"
}, {
    nd: 1971,
    mj: 33.01,
    zz: "21.2%"
}, {
    nd: 1977,
    mj: 34.88,
    zz: "5.6%"
}, {
    nd: 1996,
    mj: 52.13,
    zz: "49.4%"
}, {
    nd: 2005,
    mj: 140.73,
    zz: "99.0%"
}, {
    nd: 2007,
    mj: 156.26,
    zz: "11.0%"
}, {
    nd: 2008,
    mj: 162.20,
    zz: "3.8%"
}, {
    nd: 2010,
    mj: 169.71,
    zz: "4.3%"
}, {
    nd: 2011,
    mj: 176.05,
    zz: "4.1%"
}, {
    nd: 2012,
    mj: 192.34,
    zz: "9.0%"
}, {
    nd: 2013,
    mj: 203.29,
    zz: "5.7%"
}, {
    nd: 2014,
    mj: 221.18,
    zz: "8.8%"
}, {
    nd: 2015,
    mj: 240,
    zz: "8.5%"
}, {
    nd: 2016,
    mj: 255.03,
    zz: "6.2%"
}];

function procesZXData() { //处理加载到折线的数据
    var xaxis = [];
    var yaxis = [];
    for (var i = 0; i < niandu.length; i++) {
        xaxis.push(niandu[i].nd);
        yaxis.push(niandu[i].mj);
    }
    var data = {};
    data.xaxis = xaxis;
    data.yaxis = yaxis;
    return data;
}
var data = procesZXData();
option = {
    backgroundColor: '#222',
    title: {
        text: ''
    },
    grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    tooltip: {
        show: false,
        /*trigger: 'asix',
         axisPointer: {
         type:'none',
         lineStyle: {
         color: '#ddd'
         }
         },
         padding: [ 15, 40,15, 40],
         formatter:'{b}',
         backgroundColor: 'rgba(255,255,255,1)',
         textStyle: {
         color: '#203571',
         fontSize:18
         },
         extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'*/
    },
    xAxis: {
        type: 'category',
        data: data.xaxis,
        boundaryGap: false,
        splitLine: {
            show: false,
            interval: 'auto',
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#609ee9'
            }
        },
        axisLabel: {
            show: false,
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        }
    },
    series: [{
        name: '总面积：',
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        showAllSymbol: true,
        label: {
            normal: {
                formatter: '{b}',
                show: true,
                position: [-50, -20],
                fontSize: 25
            },
            emphasis: {
                show: true,
                position: [30, 20],
                color: '#ff0000',
                fontSize: 25,
                fontWeight: 600,
                shadowBlur: 10
            }
        },
        data: data.yaxis,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(199, 237, 250,0.5)'
                }, {
                    offset: 1,
                    color: 'rgba(199, 237, 250,0.2)'
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: '#D4DFF5',
                borderColor: '#D4DFF5',
                borderWidth: 12,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 18
            },
            emphasis: {
                show: true,
                borderColor: '#ff0000'
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }]
};