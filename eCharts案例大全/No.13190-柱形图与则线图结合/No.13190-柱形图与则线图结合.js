var xData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var sulv = [232, 454, 345, 671, 552, 664, 657, 414, 655, 572, 766, 538];
var sczz = [5, 6, 8, 8, 7, 7, 8, 5, 7, 8, 9, 6];

//配置信息
var option = {
    backgroundColor: '#0F4583',
    legend: {
        data: ["入库数", "增长率（%）"],
        top: 0,
        x: 'right',
        textStyle: {
            color: "#fff"
        }

    },
    tooltip: {},
    grid: {
        left: 40,
        right: 40,
        bottom: 45,
        top: 25,
    },
    xAxis: {
        data: xData,
        silent: false,
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            interval: 0
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#506D91'
            }
        },
        splitArea: {
            show: false
        }
    },
    yAxis: [{
        type: 'value',
        min: 0,
        max: 10,
        position: 'right',
        splitNumber: 10,
        // silent: false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,

        },
        axisLabel: {
            color: '#fff'
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        min: 0,
        max: 1000,
        position: 'left',
        splitNumber: 10,
        axisLine: {
            lineStyle: {
                color: '#506D91'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff'
        },
        splitArea: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#16508C'
            }
        },
        
    }],
    series: [{
        name: '增长率（%）',
        type: 'line',
        stack: '总量',
        label: {
            normal: {
                color: "#FFCA28",
                show: true,
                position: 'top'
            },
            emphasis: {
                show: true,
                fontSize: 22
            }
        },
        color:'#FFCA28',
        smooth:false,
        symbol:'circle',
        symbolSize:8,
        // markPoint:{
        //     symbol:'diamond'
        // },
        lineStyle: {
            normal: {
                type:'solid',
                color: "#FFCA28",
                width: 2,
                shadowColor: 'rgba(255,255,255,0.4)',
                shadowBlur: 1,
                shadowOffsetY: 1
            }
        },
        data: sczz
    }, {
        name: '入库数',
        type: 'bar',
        yAxisIndex: 1,
        barWidth: 18,
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                color: "#29B6F6"
            }
        },
        data: sulv
    }]
};