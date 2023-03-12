var fontSize = (val) => {
    return val
}
let x = []
for (let i = 0; i < 10; i++) {
    let now = new Date()
    let time = new Date(now.getTime() + i * 1000 * 60 * 60 * 24)
    x.push(time.getMonth() + '月' + time.getDate() + '日')
}
// console.log(x)
let name = ['a', 'b', 'c', 'd', 'e']
let data = []
for (let i = 0; i < name.length; i++) {
    let arr = []
    for (let j = 0; j < x.length; j++) {
        arr.push(Math.abs(Math.random() * 100).toFixed(2))
    }
    data.push(arr)
}
// console.log(data)
let series = []
for (let i = 0; i < name.length; i++) {
    series.push({
        name: name[i],
        type: "line",
        // stack: "总量",
        symbolSize: 0,
        lineStyle: {
            width: 1.5,
            opacity: 0.9
        },
        /* areaStyle: {
           opacity: 0.4
         },*/
        data: data[i]
    })
}
option = {
    backgroundColor: '#012248',
    color: ['#f08080', '#ebcc7b', '#69d4b5', '#81afe7', "#5085f2", '#af89d6'],
    /*title: {
      text: '各类指数历史记录',
      textStyle: {
        color: "#dcdcdc",
        fontWeight: "normal",
        fontSize: fontSize(12),
      },
      left: "center",
      top: 0,
    },*/
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['bar', 'tiled']
            },
            restore: {
                show: true
            }
        },
        top: 'top',
        right: 'right',
        itemSize: fontSize(14),
        itemGap: fontSize(14),
    },
    legend: {
        icon: 'line',
        data: name,
        itemWidth: fontSize(20),
        itemHeight: fontSize(10),
        itemGap: fontSize(10),
        top: '20%',
        textStyle: {
            color: "#ffffff",
            fontSize: fontSize(14),
        }
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
            fontSize: fontSize(12)
        },
        axisTick: {
            show: true,
            inside: true,
            alignWithLabel: true
        },
        data: x
    }],
    yAxis: [{
        type: "value",
        nameTextStyle: {
            color: "#ffffff"
        },
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
            fontSize: fontSize(12),
            formatter: "{value}"
        },
        axisTick: {
            show: false,
            inside: true,
            alignWithLabel: true
        }
    }],
    series: series
}