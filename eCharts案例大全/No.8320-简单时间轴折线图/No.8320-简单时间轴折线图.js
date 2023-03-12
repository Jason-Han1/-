option = {

    timeline: {
        data: [
            '2018', '2019', '2020'
        ],
        axisType: 'category',
        show: true,
        autoPlay: false,
        lineStyle:{
            color:'#a3a4a9'
        },
        label:{
            color:'#a3a4a9'
        },
        controlStyle:{
            color:'red'
        }
        // playInterval: 1000
    },
    options: [{
            backgroundColor: 'rgba(0,0,0,0)',
            legend:{
              show:true,
              data:['行政处罚数','投诉数'],
              right: 50,
              textStyle:{
                  color:'#a3a4a9'
              }
            },
            tooltip: {
                show:true,
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
                                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(255,255,255,1)' // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255,255,255,0)' // 100% 处的颜色
                                }
                            ],
                            global: false // 缺省为 false
                        }
                    }
                }
            },
            grid: {
                top: '18%',
                left: '15%',
                right: '15%',
                bottom: '25%'
                // containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: {
                    //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.4)'
                    }
                },
                axisLabel: {
                    //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#a3a4a9',
                        margin: 15
                    }
                },
                axisTick: {
                    show: false
                },
                name:'单位/月',                
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            }],
            yAxis: [{
                type: 'value',
                splitNumber: 4,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    margin: 20,
                    textStyle: {
                        color: '#a3a4a9'
                    }
                },
                axisTick: {
                    show: false
                }
            }],
            series: [{
                    name: '行政处罚数',
                    type: 'line',
                    // smooth: true, //是否平滑曲线显示
                    symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbolSize: 4,
                    lineStyle: {
                        normal: {
                            color: 'rgba(0,70,209,0.8)' // 线条颜色
                        },
                        borderColor: '#f0f'
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,70,209,1)'
                        }
                    },
                    areaStyle: {
                        //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: 'rgba(0,70,209,0.5)',
                            shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: [150, 130, 180, 200, 378, 450, 450]
                },
                {
                    name: '投诉数',
                    type: 'line',
                    // smooth: true, //是否平滑曲线显示
         			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbolSize: 4,
                    lineStyle: {
                        normal: {
                            color: '#53fdfe' // 线条颜色
                        },
                        borderColor: '#53fdfe'
                    },
                    itemStyle: {
                        normal: {
                            color: '#53fdfe'
                        }
                    },
                    areaStyle: {
                        //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: 'rgba(0,253,252,0.5)',
                            shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: [50, 30, 59, 60, 78, 55, 50]
                }
            ]
        },
        {

            series: [{
                    data: [15, 20, 25, 30, 78, 40, 50]
                },
                {
                    data: [50, 30, 59, 40, 48, 55, 50]
                }
            ]
        }, {
            series: [{
                    data: [24, 36, 36, 53, 78, 45, 50]
                },
                {
                    data: [40, 20, 63, 25,54, 70, 10]
                }
            ]
        }
    ]
}