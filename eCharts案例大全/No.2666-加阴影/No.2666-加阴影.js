
var  xData = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
var back_one=[50,50,50,50,50,50,50,50,50,50,50,50]
var back_two=[60,60,60,60,60,60,60,60,60,60,60,60]
var planData =[10,20,30,40,50,10,60,80,99,10,50,70]
var actualData = [20,30,50,40,60,80,70,88,90,43,50,60]
option = {
    backgroundColor: '#fff',
   
    legend: {
        top: 20,
        textStyle: {
            color: 'rgba(51,51,51,1)',
        },
        data: ['计划量', '实际量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
       
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(221,221,221,1)',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(221,221,221,1) ',
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(153,153,153,1)',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(221,221,221,1)',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: 'rgba(153,153,153,1)',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data:xData
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xData
        },

    ],
    series: [
        {
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(221,221,221,1)',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(221,221,221,1)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                    barBorderRadius: [50,50,0,0],
                }
            },
            barWidth: '10%',
            data: back_one
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            barGap: '100%',
            itemStyle: {
                normal: {
                    color: 'rgba(221,221,221,1)',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(221,221,221,1)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                    barBorderRadius: [50,50,0,0],
                }
            },
            barWidth: '10%',
            data: back_two
        },

        {
            name: '计划量',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5089FE'
                    }, {
                        offset: 1,
                        color: '#52C5FF'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: planData
        }, 
         {
            name: '实际量',
            type: 'bar',
            barGap: '100%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FE7150'
                    }, {
                        offset: 1,
                        color: '#FFB852'
                    }]),
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: actualData
        }, 
    ]
};