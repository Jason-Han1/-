var data = {
    city: ["0", "4", "8", "12", "16", "20"],
    num: ["40", "60", "22", "85", "50", "40"]
}
option = {
        backgroundColor:'#0e1c47',
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
                        color: 'rgba(255,255,255,0)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(255,255,255,1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },

    },
    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'color:"#092b5d"'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#24c4ff',
                margin: 15,
            },
            formatter: function(data) {
                return data + "时"
            }
        },
        axisTick: {
            show: false,
        },
        data: data.city
    }],
    yAxis: [{
        min: 0,
        max: 100,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#092b5d'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#092b5d"
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#24c4ff',

            },
            formatter: function(value) {
                if (value === 0) {
                    return value
                }
                return value + '%'
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: "#7c80f4", // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "rgba(14,30,73,1)",
            borderColor: "#646ace",
            borderWidth: 2

        },
        label: {
            normal: {
                show: true,
                position: "top",
                formatter: [
                    ' {a|{c}%}',
                ].join(','),
                rich: {
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                }
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
                        color: "rgba(124, 128, 244,.3)"


                    },
                    {
                        offset: 1,
                        color: "rgba(124, 128, 244, 0)"
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: data.num
    }]
};