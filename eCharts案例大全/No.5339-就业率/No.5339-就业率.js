option = {
    tooltip: {
        //trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
    },
    grid: {
        top: '12%',
        left: '1%',
        right: '1%',
        bottom: '8%',
        containLabel: true,
    },
    legend: {
        itemGap: 40,
        itemWidth:20,
        itemHeight:20,
        right:'center',
        top:'2%',
        data: ['毕业人数','就业人数','就业率' ],
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#F5E2C0'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#E1C7A2',
                margin: 15,
            },
        },
        axisTick: {
            show: false,
        },
        data: ['就业情况'],
    }],
    yAxis: [{
        name:'人',
        type: 'value',
        min: 0,
        max: 5000,
        splitNumber: 5,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F5E2C0'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#F5E2C0'
            },
        },
        axisLabel: {
            margin: 5,
            textStyle: {
                color: '#F5E2C0',
            },
            formatter:function (value, index) {           
                return value.toFixed(0);      
            }
        },
        axisTick: {
            show: false,
        },
    },{
        name:'%',
        type: 'value',
        min: 0,
        max:100,
        splitNumber: 5,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#e6e5e5'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#F5E2C0'
            },
        },
        axisLabel: {
            margin: 5,
            textStyle: {
                color: '#F5E2C0',
            },
            formatter:function (value, index) {           
                return value.toFixed(0);      
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '就业率',
        type: 'line',
        symbol: 'circle',
        yAxisIndex:1,
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: "#FF4D4F", // 线条颜色
            },
            borderColor: '#FF4D4F'
        },
        itemStyle: {
            normal: {
                color: "#FF4D4F",
            }
        },
        data: [80]
    },
    {
        name: '毕业人数',
        type: 'bar',
        barWidth: 40,
        barGap: '-100%',
        yAxisIndex:0,
        color:'#806B47',
         label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#DFA955',
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 0,
            }
        },
        data: [2500]
    }, {
        name: '就业人数',
        type: 'bar',
        barWidth: 40,
        yAxisIndex:0,
        color:'#E0B873',
         label: {
            show: true,
            position: 'insideTop',
            textStyle: {
                color: '#FFFFFF',
            }
        },
        itemStyle: {
            normal: {
               barBorderRadius:0,
            }
        },
        data: [2000]
    }]
};