option = {
    backgroundColor: '#fff',
    tooltip: {
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
                        color: 'rgba(255,255,255,0.2)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255, 1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255,0.2)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },

    },
    grid: {
        top: '18%',
        left: '10%',
        right: '1%',
        bottom: '25%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(245, 245, 245, 1)',
                fontSize:20
            }
        },
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(65, 80, 88, 1)'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: 'rgba(65, 80, 88, 1)',
                margin: 15,
                fontSize:16
            },
        },
        axisTick: {
            show: true,
        },
        data: ['语文', '数学', '英语', '物理', '政治', '化学', '生物'],
    }],
    yAxis: [{
        type: 'value',
        name : '成绩',
        min: 0,
        max: 120,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(245, 245, 245, 1)',
                fontSize:20
            }
        },
        axisLine: {
            show: true,
             lineStyle: {
                color: 'rgba(65, 80, 88, 1)',
                fontSize:20
                
            }
        },
        axisLabel: {
            formatter: '{value}',
            show: true,
            margin: 20,
            textStyle: {
                color: 'rgba(65, 80, 88, 1)',
                fontSize:16

            },
        },
        axisTick: {
            show: true,
        },
    }],
    series: [{
        name: '成绩',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: "rgba(158, 37, 31, 1)", // 线条颜色
            },
            borderColor: '#f00'
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: 'rgba(158, 37, 31, 1)',
                fontSize:16
            }
        },
        itemStyle: {
            normal: {
                color: "rgba(255, 73, 64, 1)",
            }
        },
        tooltip: {
            show: true
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(247, 107, 28, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(250, 217, 97, 1)'
                    }
                ], false),
                shadowColor: 'rgba(222,222,228, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [80, 100, 69,110, 107, 98, 90]
    }]
};