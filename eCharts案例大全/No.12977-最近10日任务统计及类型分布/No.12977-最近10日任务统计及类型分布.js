option = {
    backgroundColor: "rgba(2,13,34,1)",
    title: {
        text: '最近10日任务统计及类型分布',
        textStyle: {
            fontSize: 16,
            fontWeight: 200,
            color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['全景扫描', '甚高频扫描', '民航通导', 'TDOA', '任务统计'],
        textStyle: {
            color: '#ffffff'
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '25',
        right: '25',
        bottom: '25',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['十', '九', '八', '七', '六', '五', '四', '三', '二', '一']
    }],
    yAxis: [{
        type: 'value'
    }],
    visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 200,
                color: '#096'
            }, {
                gt: 200,
                lte: 400,
                color: '#ffde33'
            }, {
                gt: 400,
                lte: 600,
                color: '#ff9933'
            }, {
                gt: 600,
                lte: 800,
                color: '#cc0033'
            }, {
                gt: 800,
                lte: 1200,
                color: '#660099'
            }, {
                gt: 1200,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
    series: [{
            name: '全景扫描',
            smooth: true,
            type: 'line',
            stack: '总量',
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(61,234,255, 0.8)'
                        },
                        {
                            offset: 0.7,
                            color: 'rgba(61,234,255, 0.2)'
                        }
                    ], false),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 300, 300, 300]
        },
        {
            name: '甚高频扫描',
            smooth: true,
            type: 'line',
            stack: '总量',
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(61,234,255, 0.8)'
                        },
                        {
                            offset: 0.7,
                            color: 'rgba(61,234,255, 0.2)'
                        }
                    ], false),

                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 400, 400, 400]
        },
        {
            name: '民航通导',
            smooth: true,
            type: 'line',
            stack: '总量',
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                            color: 'rgba(61,234,255, 0.8)'
                        },
                        {
                            offset: 0.7,
                            color: 'rgba(61,234,255, 0.2)'
                        }
                    ], false),

                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [150, 232, 201, 154, 190, 330, 410, 450, 400, 400, 400]
        },
        {
            name: 'TDOA',
            smooth: true,
            type: 'line',
            stack: '总量',
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                            color: 'rgba(61,234,255, 0.8)'
                        },
                        {
                            offset: 0.7,
                            color: 'rgba(61,234,255, 0.2)'
                        }
                    ], false),

                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [320, 332, 301, 334, 390, 330, 320, 300, 300, 300]
        },
        {
            name: '任务统计',
            type: 'line',
            smooth: true,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                            color: 'rgba(61,234,255, 0.8)'
                        },
                        {
                            offset: 0.7,
                            color: 'rgba(61,234,255, 0.2)'
                        }
                    ], false),

                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1450, 1450, 1450]
        }
    ]
};