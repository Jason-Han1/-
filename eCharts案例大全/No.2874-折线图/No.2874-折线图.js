let xLabel = ['01', '02', '03', '04', '05', '06', '07']
let valueData = ["10", "30", "25", "15", "16", "25", "18"]
let valueData1 = ["20", "28", "21", "12", "15", "20", "30"]
option = {
    tooltip: {
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
        trigger: 'axis',
        backgroundColor: '#fff',
        type: 'cross'
    },
    legend: {
        icon: 'circle',
        textStyle: {
            color: '#000',
            fontSize: 15
        },
        right: '5%',
        top: '2%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: false
    },
    xAxis: [{
        type: 'category',
        data: xLabel,
        axisLine: {
            lineStyle: {
                color: 'rgba(0, 61, 154, 0.38)',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#000',
                fontSize: 15
            },
            margin: 15
        },
        axisPointer: {
            snap: true,
            lineStyle: {
                color: '#5B8FF9',
                width: 2
            },
            label: {
                show: false,
            },
            handle: {
                show: false,
            }
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#000',
                fontSize: 15
            },
            formatter: function(params) {
             return params + 'w'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0, 61, 154, 0.18)',
                type: 'dashed'
            }
        },
        axisPointer: {
            show: true,
            snap: true,
            lineStyle: {
                color: '#5B8FF9',
                width: 1,
                type: 'dashed'
            },
            label: {
                show: true,
                backgroundColor: 'rgba(255,255,255,0)',
                color: '#4683FF',
                fontSize: 16,
                formatter: function(params) {
                 return params.value + 'w'
                }
            },
            handle: {
                show: false,
            },
            triggerOn: 'none'
        },
    }],
    series: [
        {
            name: '抓拍数',
            type: 'line',
            data: valueData,
            symbolSize: 5,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5B8FF9'
                    },
                    {
                        offset: 1,
                        color: '#5B8FF9'
                    }
                ]),
                shadowColor: 'rgba(91, 143, 249, 0.38)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: '#5B8FF9',
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(91, 143, 249, 0.42)"
                    },
                    {
                        offset: 1,
                        color: "rgba(255, 255, 255, 0)"
                    }
                ], false),
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        },
        {
            name: '预警数',
            type: 'line',
            data: valueData1,
            symbolSize: 5,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FE4747'
                    },
                    {
                        offset: 1,
                        color: '#FE4747'
                    }
                ]),
                shadowColor: 'rgba(255, 64, 64, 0.38)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: '#F32E69',
                    borderColor: '#fff',
                    borderWidth: 2
                }
            },
            areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(255, 64, 64, 0.42)"
                    },
                    {
                        offset: 1,
                        color: "rgba(255, 255, 255, 0)"
                    }
                ], false),
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        }
    ]
};
