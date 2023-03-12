let xLabel = ['体育休闲场所', '科教文化场所', '团体相关', '政府及社会', '两用楼宇', 'CBD及商住', '疗机构','医院或医','传媒机构','酒店宾馆','产业园区','住宅小区','交通运输','风景名胜','购物中心','商业设施','学校','其他']
let valueData = [810, 960, 1020, 1080, 1105, 1110, 1110, 1150, 1000, 1020, 1050, 980, 1000, 1020, 1150, 1190, 1195, 800]
option = {
    tooltip: {
        // backgroundColor: '#fff',
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
                        color: 'rgba(29, 145, 245, 1)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(29, 145, 245, 1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(29, 145, 245, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                width: 2,
                type: 'solid'
            },
        },
    },
    grid: {
        top: '15%',
        left: '6%',
        right: '4%',
        bottom: '15%',
    },
    xAxis: [{
        type: 'category',
        data: xLabel,
        axisLine: {
            lineStyle: {
                color: 'rgba(203, 220, 236, 1)',
                width: 1
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#000',
            },
            rotate: '-90',
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
                color: 'rgba(105, 105, 105, 1)',
                fontSize: 15
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(203, 220, 236, 1)',
            }
        }
    }],
    series: [{
            name: '分类统计',
            type: 'line',
            data: valueData,
            symbolSize: 14,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'RGBA(105, 186, 255, 1)'
                    },
                    {
                        offset: 1,
                        color: 'RGBA(105, 186, 255, 1)'
                    }
                ]),
                shadowColor: 'RGBA(165, 214, 255, 1)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            itemStyle: {
                normal: {
                    color: 'rgba(29, 145, 245, 1)',
                    borderColor: '#fff',
                    borderWidth: 3
                }
            },
            areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "RGBA(158, 209, 255, 1)"
                    },
                    {
                        offset: 0.6,
                        color: " RGBA(246, 251, 255, 1)"
                    },
                    {
                        offset: 1,
                        color: " RGBA(255, 255, 255, 1)"
                    }
                ], false),
                shadowBlur: 0 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        }
    ]
};