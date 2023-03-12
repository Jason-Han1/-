var fontSize = (val) => {
    return val
}

let x = []
for (let i = 0; i < 10; i++) {
    let now = new Date()
    let time = new Date(now.getTime() + i * 1000 * 60 * 60 * 24)
    x.push(time.getMonth() + '月' + time.getDate() + '日')
}
let name = ['a', 'b', 'c']
let data = []
for (let i = 0; i < name.length; i++) {
    let arr = []
    for (let j = 0; j < x.length; j++) {
        arr.push(Math.abs(Math.random() * 50 + 50).toFixed(2))
    }
    data.push(arr)
}
let series = []
for (let i = 0; i < name.length; i++) {
    series.push({
        name: name[i],
        type: "line",
        // smooth: true, //是否平滑曲线显示
        // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbolSize: 4,
        lineStyle: {
            normal: {},
        },
        label: {
            show: true,
            position: "bottom",
            textStyle: {
                // color: "#fff"
            }
        },
        itemStyle: {
            normal: {}
        },
        areaStyle: {
            //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(44,88,166,0.2)"
                        },
                        {
                            offset: 1,
                            color: "rgba(44,88,166,0)"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: data[i]
    })
}
option = {
    backgroundColor: '#012248',
    color: ['#00b7ee', '#69d4b5', '#8d7fec'],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        // icon: 'circle',
        itemWidth: fontSize(30),
        itemHeight: fontSize(10),
        itemGap: fontSize(10),
        top: "20%",
        textStyle: {
            color: "#ffffff",
            fontSize: fontSize(14),
        },
    },
    grid: {
        top: "center",
        left: "center",
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100,
        xAxisIndex: [0],
        orient: 'horizontal'
    }, ],
    xAxis: [{
        type: "category",
        gridIndex: 0,
        axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.3)"
            }
        },
        axisLabel: {
            //坐标轴刻度标签的相关设置
            show: true,
            color: "#ffffff",
            fontSize: fontSize(14)
        },
        axisTick: {
            alignWithLabel: true
        },
        data: x
    }],
    yAxis: [{
        type: "value",
        min: 0,
        // max: 140,
        // splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.1)"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.3)"
            }
        },
        axisLabel: {
            color: "#ffffff",
            fontSize: fontSize(14),
            formatter: "{value}"
        },
        axisTick: {
            show: false
        }
    }],
    series: series
}