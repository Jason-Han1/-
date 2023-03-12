
option = {
    backgroundColor: "#1A1835",
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
 tooltip: {
        trigger: 'axis',
        axisPointer: {
            type:"shadow",
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
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
        }, axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                interval:5 
            },
       
        data: ["08:10", "09:10", "10:10", "11:10", "12:10", "13:10", "14:10", "15:10", "16:10", "17:10", "18:10", "19:10", "20:10", "21:10", "22:10", "23:10", "00:10", "01:10", "02:10", "03:10", "04:10", "05:10", "06:10", "07:10", "08:10"],
    }],

    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },

    }],
   
    series: [{
        name: "ces",
        type: "line",
        symbolSize: 1,
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
    }]
}