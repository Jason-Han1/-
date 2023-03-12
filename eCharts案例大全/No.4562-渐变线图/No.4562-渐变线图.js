let colorArr = [
    [213, 82, 83],
    [213, 175, 7],
    [59, 167, 209]
]

let dataArr = [
    [213, 82, 83],
    [213, 175, 7],
    [59, 167, 209]
]


let _series = []

dataArr.forEach((data, i) => {
    let curColor = colorArr[i]
    _series.push({
        type: 'line',
        name: i,
        data,
        lineStyle: {
            // color: 'rgba(0,202,149,1)'
            color: `rgba(${curColor.toString()},1)`
        },
        symbolSize: 0,
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        // color: 'rgba(0,202,149,0.3)'
                        color: `rgba(${curColor.toString()},0.3)`
                    },
                    {
                        offset: 1,
                        // color: 'rgba(0,202,149,0)'
                        color: `rgba(${curColor.toString()},0)`
                    }
                ], false),
                // shadowColor: 'rgba(0,202,149, 0.9)',
                shadowColor: `rgba(${curColor.toString()},0.9)`,
                shadowBlur: 20
            }
        },
    })
})


option = {
    backgroundColor: '#999',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#FF9A22',
                type: 'dashed'
            }
        }
        // show: true
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['2019Q1', '2019Q2', '2019Q3', '2019Q4'],
        axisLabel: {
            margin: 20,
            color: '#fff',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: '#42B7FD',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        axisLabel: {
            formatter: '{value}%',
            color: '#fff',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: '#42B7FD',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'RGBA(67, 182, 255, 0.3)',
                // type: 'dashed',
            }
        }
    }],
    series: _series
    // series: [

    //         {
    //         type: 'line',
    //         data: [30, 80, 20],
    //         lineStyle:{
    //             color: 'rgba(0,202,149,1)'
    //         }  ,
    //         symbolSize: 0,
    //         smooth: true ,
    //         areaStyle: {
    //             normal: {
    //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                         offset: 0,
    //                         color: 'rgba(0,202,149,0.3)'
    //                     },
    //                     {
    //                         offset: 1,
    //                         color: 'rgba(0,202,149,0)'
    //                     }
    //                 ], false),
    //                 shadowColor: 'rgba(0,202,149, 0.9)',
    //                 shadowBlur: 20
    //             }
    //         },
    //     }

    // ]
};

