var fontColor = '#30eee9';
option = {
    backgroundColor: '#11183c',
    grid: {
        left: '5%',
        right: '10%',
        top: '5%',
        bottom: '5%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        top: 'bottom',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 2,
        textStyle: {
            color: 'rgba(255,255,255,0.6)'
        },
        data: ['事件', '部件', '报警']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: 'rgba(255,255,255,0.6)'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#44566b'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.25)'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: 'rgba(255,255,255,0.45)'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.45)'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.15)',
                    type: 'dashed'
                }
            }
        },

    ],
    series: [{
            name: '事件',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: 'rgba(0,157,255,1)',
                    lineStyle: {
                        color: "rgba(0,157,255,1)",
                        width: 1
                    },
                    areaStyle: { 
            			//color: '#94C9EC'
            			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            				offset: 0,
            				color: 'rgba(0,157,255,0.2)'
            			}, {
            				offset: 1,
            				color: 'rgba(0,157,255,0)'
            			}]),
                    }
                }
            },
            markPoint: {
                symbol: 'path://M512.005117 958.708971C265.683035 958.708971 65.290005 758.316965 65.290005 511.99386c0-246.310825 200.39303-446.703855 446.715111-446.703855 246.310825 0 446.703855 200.39303 446.703855 446.703855C958.708971 758.316965 758.316965 958.708971 512.005117 958.708971zM512.005117 169.716356c-188.738595 0-342.289784 153.545048-342.289784 342.277504 0 188.738595 153.551188 342.289784 342.289784 342.289784 188.733479 0 342.278527-153.551188 342.278527-342.289784C854.283644 323.261405 700.738595 169.716356 512.005117 169.716356z',
                symbolOffset: ['34%', '-50%'],
                symbolKeepAspect: true,// 如果 symbol 是 path:// 的形式，是否在缩放时保持该图形的长宽比。
                label:{
                    position: "insideTop",
                    distance: 7,
                    formatter: function (data){
                        return toHSpeed(data.value, 2);
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
        },
        {
            name: '部件',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,

            itemStyle: {
                normal: {
                    color: 'rgba(17,195,114,1)',
                    lineStyle: {
                        color: "rgba(17,195,114,1)",
                        width: 1
                    },
                    areaStyle: { 
            			//color: '#94C9EC'
            			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            				offset: 0,
            				color: 'rgba(17,195,114,0.2)'
            			}, {
            				offset: 1,
            				color: 'rgba(17,195,114,0)'
            			}]),
                    }
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
        },
        {
            name: '报警',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: "#1a1e26",
                borderColor: "#009DFF",
                borderWidth: 2,
                normal: {
                    color: 'rgba(255,79,92,1)',
                    lineStyle: {
                        color: "rgba(255,79,92,1)",
                        width: 1
                    },
                    areaStyle: { 
            			//color: '#94C9EC'
            			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            				offset: 0,
            				color: 'rgba(255,79,92,0.2)'
            			}, {
            				offset: 1,
            				color: 'rgba(255,79,92,0)'
            			}]),
                    }
                }
            },
            data: [300, 400, 240, 285, 245, 560, 700, 200, 800, 400, 700, 410]
        },
    ]
};