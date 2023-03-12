let xLabel = ['12', '13', '14', '15', '16','17','18日']
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
        borderWidth: 1
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
            name: '近7日新登记数量',
            type: 'line',
            data: valueData,
            symbolSize: 10,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            label: {
                "show": true,
                "textStyle": {
                    "color": "rgba(107, 49, 164, 1)",
                    fontSize: 20,
                    fontFamily: 'DIN',
                    fontWeight: 'bold'
                },
                "position": "top",
                formatter: function(p) {
                    return p.value > 0 ? (p.value) : '';
                }
            },
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(107, 49, 164, 0.5)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(107, 49, 164, 0.6)'
                    }
                ]),
                shadowColor: 'rgba(107, 49, 164, 0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(107, 49, 164, 1)',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(107, 49, 164, 0.7)',
                    shadowBlur: 5,
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(165, 170, 247, 1)"
                        },
                        {
                            offset: 0.5,
                            color: "rgba(165, 170, 247, 0.2)"
                        },
                        {
                            offset: 1,
                            color: "rgba(165, 170, 247, 0)"
                        }
                    ], false),
                    shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }
    ]
};
