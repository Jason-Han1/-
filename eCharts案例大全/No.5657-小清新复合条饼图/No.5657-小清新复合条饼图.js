let getData = [{
        value: 4360,
        name: '新疆金风',
        itemStyle: {
            color: '#fff'
        }
    },

    {
        value: 20588,
        name: '江阴远景',
        itemStyle: {
            color: '#fff'
        }
    },

    {
        value: 2118,
        name: '国电龙源',
        itemStyle: {
            color: '#fff'
        }
    },
    {
        value: 3512,
        name: '山东中车',
        itemStyle: {
            color: '#fff'
        }
    },
    {
        value: 6006,
        name: '浙江运达',
        itemStyle: {
            color: '#fff'
        }
    },
    // {
    //     value: 2541,
    //     name: '三一重能',
    //     itemStyle: {
    //         color: '#fff'
    //     }
    // },
    // {
    //     value: 4336,
    //     name: '东方电气',
    //     itemStyle: {
    //         color: '#fff'
    //     }
    // },
    // {
    //     value: 1206,
    //     name: '中车株洲',
    //     itemStyle: {
    //         color: '#fff'
    //     }
    // },

]


var calcData = [{
        value: 2541,
        name: '三一重能',
    },
    {
        value: 4336,
        name: '东方电气',
    },
    {
        value: 1206,
        name: '中车株洲',
    },
]



let forceUseData = new Array(calcData.length).fill();
(function() {
    let a = calcData.map(item => item.value).reduce((prev, val) => {
        prev += val;
        return prev;
    })
    // console.log(a)
    let tmpData = {
        value: a,
        name: '合计',
        itemStyle: {
            color: '#fff'
        }
    }

    getData.splice(0, 0, tmpData)
    console.log(getData)

})()

option = {
    grid: [ //control bar's position
   
         {left: '60%'},
      
    ],
    color: ['#f79646', '#fd79aa', '#feb63b', '#987292'], //, '#bfcfd1'],
    backgroundColor: '#fff',
    title: {
        text: '小清新复合条饼图',
        x: 'center',
        y: '5%',
        textStyle: {
            fontSize: 30,
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        show: true,
       
        y: 'bottom',
      
        data: getData.map(item => item.name)
    },
    // bar settings start
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            margin: 20,
        },
        data: ['bar']
    },
    yAxis: {
        type: 'value',
        show: false
    },


    // bar over,
    series: [{
            name: '外圈',
            type: 'pie',
            radius: ['0%', '50%'],
            center: ['35%', 'center'], //饼图位置控制
            startAngle:35,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    // distance: 40,
                    color: '#fff',
                    formatter: (params) => {
                        // return params.value / 100 + '%'
                        // return params.name + ', ' + params.value
                        return params.value
                    },
                },
            
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#fff',
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: getData.map(item => {
                return {
                    value: item.value,
                    name: item.name
                }
            })
        },
   
        {
            data: [{
                value: calcData[0].value,
                name: calcData[0].name
            }],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 100,
            // seriesLayoutBy: 'row',
            itemStyle: {
                // color: '#47b9b3',
                barWidth: 30,
            },
            label: {
                show: true,
                position: 'right',
                distance: 20,
                // borderColor:  data.color,
                // borderWidth: 2,
                color: '#000',
                // fontWeight: 'bolder',
                formatter: (params) => {
                    // return params.name + params.value
                    return params.value
                }
            },
        },
        {
            data: [{
                value: calcData[1].value,
                name: calcData[1].name
            }],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 100,
            // seriesLayoutBy: 'row',
            itemStyle: {
                // color: '#47b9b3',
                barWidth: 30,
            },
            label: {
                show: true,
                position: 'right',
                distance: 20,
                // borderColor: data.color,
                // borderWidth: 2,
                color: '#000',
                // fontWeight: 'bolder',
                formatter: (params) => {
                    // return params.name + params.value
                    return params.value
                }
            },
        },
        {
            data: [{
                value: calcData[2].value,
                name: calcData[2].name
            }],
            type: 'bar',
            stack: 'one', //堆叠
            barWidth: 100,
            // seriesLayoutBy: 'row',
            itemStyle: {
                // color: '#47b9b3',
                barWidth: 30,
            },
            label: {
                show: true,
                position: 'right',
                distance: 20,
                // borderColor: data.color,
                // borderWidth: 2,
                color: '#000',
                // fontWeight: 'bolder',
                formatter: (params) => {
                    // return params.name + params.value
                    return params.value
                }
            },
        },

        //bar end
    ]
};




myChart.setOption(option);



(function() {
    var zr = myChart.getZr();
    // zr.on('click', params => {
    //     console.log('X:' + params.offsetX + ' Y:' + params.offsetY)

    // })


    var line1;

    line1 = new echarts.graphic.Line({
        shape: {
            x1: zr.getWidth() / 1.8,
            y1: zr.getHeight() / 2.55,
            x2: zr.getWidth() / 1.55,
            y2: zr.getHeight() / 3
        },
        style: {
            stroke: '#dbdbdb',
            lineWidth: 5
        }
    });
    line2 = new echarts.graphic.Line({
        shape: {
            x1: zr.getWidth() / 1.8,
            y1: zr.getHeight() / 1.65,
            x2: zr.getWidth() / 1.55,
            y2: zr.getHeight() / 1.5
        },
        style: {
            stroke: '#dbdbdb',
            lineWidth: 5
        }
    });

    zr.add(line1)
    zr.add(line2)

})();

