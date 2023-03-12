var legendData =['良好', '一般', '较差'],
xAxisData =  ['宁句线', '南七线'],
data1 =  [8, 15, 10],
data2 = [8, 17, 26],
data3 = [8, 17, 26],
bgdata =[50,50,50]
option = {
    backgroundColor: '#142058',
    color:['#2DD7FE','#138AF5','#F1180A'],
    // title: {

    //     textStyle: {
    //         color: '#00FFFF',
    //         fontSize: 26
    //     }
    // },
    legend: {
        top: 20,
        right: '4%',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 13,
        textStyle: {
            color: '#D8EFFF',
        },
        data: legendData
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter:function(params){
            let res = '';
            params.forEach((v,i) => {
                if (i <= 2) {
                    res += `<div>${v.marker} ${ v.seriesName }：${v.data}</div>`
                }
            })
            return res;
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#0066FF',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#0066FF ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#A7D6F4',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0066FF',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#A7D6F4',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data:xAxisData
        }, {
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
            data: xAxisData
        },

    ],
    series: [{
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [26, 4], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#0442DA',
                    opacity:0.45,
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            barWidth: '10%',
            data:bgdata
        }, {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [26, 4], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            xAxisIndex: 1,
            barGap: '100%',
            data: bgdata,
            zlevel: 1,
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: '#0442DA',
                    opacity:0.45,
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
        }, {
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [26, 4], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            xAxisIndex: 1,
            barGap: '100%',
            data:bgdata,
            zlevel: 1,
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: '#0442DA',
                    opacity:0.45,
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
        }, {
            name: legendData[0],
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [26, 4], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            itemStyle: {
                normal: {
                    show: true,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data:data1
        }, {
            name: legendData[1],
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [26, 4], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: data2
        }, {
            name: legendData[2],
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [26, 4], //图形元素的尺寸
            symbolMargin: 2,
            symbolRepeat: 'repeat',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: data3
        }

    ]
};