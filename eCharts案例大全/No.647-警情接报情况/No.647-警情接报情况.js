let xLabel = ['周一', '周二', '周三', '周四', '周五','周六','周日']
let valueData = [64, 159, 112, 86, 151, 131, 118]
option = {
    tooltip: {
        textStyle: {
            color: '#000'
        },
        padding: [10, 10],
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: 'rgba(112, 119, 242, 0.8)',
        borderWidth: 1,
        axisPointer: {
            lineStyle: {
                color: 'RGBA(105, 136, 217, 1)',
            }
        }
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
    xAxis: {
        type: 'category',
        data: xLabel,
        axisLine: {
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
            }
        },
        axisLabel: {
            textStyle: {
                color: "rgba(0, 0, 0, 1)"
            }
        },
    },
    yAxis: [{
            type: 'value',
            minInterval: 50,
            axisLabel: {                
                textStyle: {
                    color: "rgba(0, 0, 0, 1)"
                }}    ,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#cdd5e2'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(193, 207, 220, 1)',
                }
            },
        }
    ],
    series: [
        {
            name: '警情接报情况',
            type: 'line',
            data: valueData,
            symbolSize: 10,
            symbol: 'circle',
            showSymbol: false,
            smooth: false,
            yAxisIndex: 0,
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'RGBA(96, 122, 209, 1)'
                    },
                    {
                        offset: 1,
                        color: 'RGBA(96, 122, 209, 1)'
                    }
                ]),
                shadowColor: 'RGBA(96, 122, 209, 0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(167, 181, 230, 1)',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(167, 181, 230, 0.7)',
                    shadowBlur: 5,
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "RGBA(184, 204, 241, 1)"
                        },
                        {
                            offset: 0.5,
                            color: "RGBA(184, 204, 241, 0.5)"
                        },
                        {
                            offset: 0.7,
                            color: "RGBA(184, 204, 241, 0)"
                        }
                    ], false),
                    shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }
    ]
};
