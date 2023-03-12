let xLabel = ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7']
let valueData = ["20", "28", "21", "12", "15", "20", "30"]
option = {
    tooltip: {
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#F13A76' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: '#F13A76' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: '#F13A76' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 2,
                type: 'solid'
            },
        },
    },
    grid: {
        top: '15%'
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
                color: '#000'
            },
            fontSize: 15,
            margin: 15
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
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0, 61, 154, 0.18)',
                type: 'dashed'
            }
        }
    }],
    series: [{
            name: '存量人员',
            type: 'line',
            data: valueData,
            symbolSize: 5,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 4,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF4C3D'
                    },
                    {
                        offset: 1,
                        color: '#F02970'
                    }
                ]),
                shadowColor: 'rgba(249, 37, 100, 0.38)',
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
                        color: "rgba(255, 34, 104, 0.42)"
                    },
                    {
                        offset: 1,
                        color: " rgba(252, 111, 154, 0)"
                    }
                ], false),
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        }
    ]
};