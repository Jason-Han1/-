// https://www.makeapie.com/editor.html?c=xPKwkqvo8  参考地址
// import echarts from 'echarts'
let onea = 10
let charts = {
    xAxis: ['1', '2', '3', '4', '5'],
    value: [20, 40, 60, 80, 100]
}
let color = []
if (onea <= 0) {
    color = ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)']
} else if (onea <= 20) {
    color = ['rgba(255,255,255)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)']
} else if (onea > 20 && onea <= 40) {
    color = ['rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)']
} else if (onea > 40 && onea <= 60) {
    color = ['rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)']
} else if (onea > 60 && onea <= 80) {
    color = ['rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255,0.1)']
} else if (onea >= 100) {
    color = ['rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255)', 'rgba(255,255,255)']
}


let lineY = []

for (var i = 0; i < charts.xAxis.length; i++) {
    let x
    if (i === 0) {
        x = 0
    } else if (i === 1) {
        x = 1
    } else if (i === 2) {
        x = 2
    } else if (i === 3) {
        x = 3
    } else if (i === 4) {
        x = 4
    }
    //   else {
    //     x = 5
    //   }
    var data = {
        name: charts.xAxis[i],
        itemStyle: {
            borderColor: '#FFF',
            borderWidth: 1,
            color: color[x]
        },
        emphasis: {
            itemStyle: {
                borderColor: '#FFF',
                borderWidth: 1,
                color: color[x]
            }
        },
        value: charts.value[i]
    }
    lineY.push(data)
}
// console.log(lineY)
option = {
    // width:'10%',
    // height:'20%',
    backgroundColor: '#000',
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //       type: 'shadow'
    //     },
    //     transitionDuration: 0
    //   },
    grid: {
        top: '15%',
        // left: '8%',
        // right: '8%',
        bottom: '15%'
    },
    color: '#fff',
    xAxis: [{
        show: false,
        type: 'category',
        data: charts.xAxis,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            // lineStyle: {
            //     color: 'rgba(255,255,255,1)'
            // }
        },
        axisLabel: {
            show: false,
            // color: '#B1BCD2',
            // textStyle: {
            //     fontSize: 12
            // }
        }
    }],
    yAxis: [{
        axisLabel: {
            show: false,
            // formatter: '{value}',
            // color: '#B1BCD2'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false,
            //   lineStyle: {
            //     color: 'rgba(255,255,255,0.2)'
            //   }
        }
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: 20,
        data: lineY,
        //  barGap:'10%',/*多个并排柱子设置柱子之间的间距*/
        //  barCategoryGap:'50%',/*多个并排柱子设置柱子之间的间距*/
        //   animationDuration: 150,
        //   label: {
        //     normal: {
        //       color: '#fff',
        //       show: false,
        //       position: ['14px', '0'],
        //     //   textStyle: {
        //     //     fontSize: 12,
        //     //     // fontStyle: 'italic',
        //     //     // fontFamily: 'DINPro-Light'
        //     //   }
        //     }
        //   }
    }]
}