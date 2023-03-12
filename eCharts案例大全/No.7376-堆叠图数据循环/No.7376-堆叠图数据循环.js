let sData = [
     {
        name: '注意',
        data: [20],
        color: '#e12424'
      }, {
        name: '警告',
        data: [30],
        color: '#ff9805'
      }, {
        name: '危险',
        data: [50],
        color: '#12cbf6'
      }
]
let series = []
sData.forEach((item)=>{
        series.push({
            type: 'bar',
            name: item.name,
            stack: '2',
            label: {
                normal: {
                    show:true,
                    position: 'inside',
                    formatter: '{c}%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    }
                }
            },
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: item.color
                }
            },
            data: item.data
    
        }) 
})
// console.log('series',series)
option = {
    backgroundColor: '#091034',
    legend: {
        top:'0',
        data: ['注意', '警告', '危险'],
        textStyle: {
            color: '#ccc'
        }
    },
    grid: {
        containLabel: true,
        left: 10,
        right: 10,
    },
    tooltip: {},
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel:{
            show:false
        }

    },
    yAxis: {
        data: ['告警等级'],
        axisLabel: {
            fontSize: 16,
            color: '#fff'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series:
    series
    //  [{
    //     type: 'bar',
    //     name: '注意',
    //     stack: '2',
    //     label: {
    //         normal: {
    //             show:true,
    //             position: 'inside',
    //             formatter:function(params){
    //                 let total = 200
    //                 let percent = 0
                    
    //                  for (var i = 0; i < 3; i++) {
    //                          total += Number(series[i].data); //总值的问题（总值要等于点量的图例的值）
    //                       }
    //                 percent = ((params.value / total) * 100).toFixed(0) + '%';
    //                 return percent
    //                  },
    //             textStyle: {
    //                 color: '#fff',
    //                 fontSize: 16
    //             }
    //         }
    //     },
    //     barWidth: 40,
    //     itemStyle: {
    //         normal: {
    //             color: '#3694ff'
    //         },
    //     },
    //     data: [10]
    // }, {
    //     type: 'bar',
    //     name: '危险',
    //     stack: '2',
    //     label: {
    //         normal: {
    //             show:true,
    //             position: 'inside',
    //             formatter: '{c}%',
    //             textStyle: {
    //                 color: '#fff',
    //                 fontSize: 16
    //             }
    //         }
    //     },
    //     barWidth: 40,
    //     itemStyle: {
    //         normal: {
    //             color: '#e02020'
    //         }
    //     },
    //     data: [30]
    // }, {
    //     type: 'bar',
    //     name: '警告',
    //     stack: '2',
    //     label: {
    //         normal: {
    //             show:true,
    //             position: 'inside',
    //             formatter: '{c}%',
    //             textStyle: {
    //                 color: '#fff',
    //                 fontSize: 16
    //             }
    //         }
    //     },
    //     barWidth: 40,
    //     itemStyle: {
    //         normal: {
    //             color: '#f7b500'
    //         }
    //     },
    //     data: [30]
    // }]
}