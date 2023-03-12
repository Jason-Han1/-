let xLabel = ['10/23', '10/24', '10/25', '10/26', '10/27', '10/28', '10/29']
let valueData = ["135", "130", "150", "121", "136", "156", "130"]
option = {
    tooltip: {
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        // extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
        trigger: 'axis',
        backgroundColor: '#fff',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
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
                color: 'rgba(193, 207, 220, 1)',
                width: 1
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'rgba(0, 0, 0, 0.72)',
                fontSize: 15
            },
            margin: 15
        },
        axisPointer: {
            snap: true,
            lineStyle: {
                color: 'rgba(237, 130, 71, 1)',
                width: 1
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
                color: 'rgba(0, 0, 0, 0.72)',
                fontSize: 15
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193, 207, 220, 1)',
                // type: 'dashed'
            }
        },
    }],
     "dataZoom": [{
        "show": true,
        "height": 8,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '180%',
        handleStyle:{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff',
                },
                {
                    offset: 1,
                    color: '#F0F5FA',
                },
            ]),
            borderColor: '#D1DCED'
        },
       textStyle:{
        color:"#333",
        fontSize: 14,
        zlevel: 10
       },
       borderColor: 'RGBA(221, 233, 242, 1)',
       backgroundColor: 'RGBA(221, 233, 242, 1)'
    }, {
        "type": "inside",
        "show": true,
        "height": 5,
        "start": 1,
        "end": 35
    }],
    series: [
        {
            name: '人口变化',
            type: 'line',
            data: valueData,
            symbolSize: 10,
            symbol: 'circle',
            smooth: false,
            yAxisIndex: 0,
            // showSymbol: false,
            label: {
                "show": true,
                "textStyle": {
                    "color": "rgba(237, 130, 71, 1)",
                    fontSize: 20,
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
                        color: 'RGBA(255, 178, 121, 1)'
                    },
                    {
                        offset: 1,
                        color: 'RGBA(255, 178, 121, 1)'
                    }
                ]),
                shadowColor: 'RGBA(255, 178, 121, 0.5)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(237, 130, 71, 1)',
                    borderColor: '#fff',
                    borderWidth: 3,
                    shadowColor: 'rgba(237, 130, 71, 1)',
                    shadowBlur: 5,
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "RGBA(255, 195, 151, 1)"
                        },
                        {
                            offset: 0.6,
                            color: "RGBA(255, 237, 223, 1)"
                        },
                        {
                            offset: 1,
                            color: "RGBA(255, 255, 255, 1)"
                        }
                    ], false),
                    shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
        }
    ]
};
