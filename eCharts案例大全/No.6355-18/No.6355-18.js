option = {
    title:[
    //   {
    //     text: '全日进站量（万人次）',
    //     left: '25%',
    //     bottom: '2%',
    //     textAlign: 'center'
    //   },
    //   {
    //     text: '同比增长',
    //      left: '75%',
    //      bottom: '2%',
    //     textAlign: 'center'
    //   }
    ],
    tooltip:  {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: (params) => {
            console.log(params)
            if(params[0].axisIndex === 0) {
              return params.reduce( (t, v) => {
                  t +=  `${v.marker}${v.seriesName}: ${v.value}% <br/>`
                  return t
              }, '')
            } else {
               return params.reduce( (t, v) => {
                  t +=  `${v.marker}${v.seriesName}: ${v.value} <br/>`
                  return t
              }, '  ')
            }
        }
     },
    legend: {
    
    },
    grid: [{
            left: '3%',
            bottom: '10%',
            width: '50%',
            containLabel: true
        },
        {
            left: '55%',
            right: '4%',
            bottom: '10%',
            width: '50%',
            containLabel: true
        }
    ],
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        max: 100,
        splitNumber: 2,
        axisLine: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
             align: 'center',
             formatter: '{value}%'
        }

    }, {
        gridIndex: 1,
        type: 'value',
        max: 100,
        splitNumber: 2,
        axisLine: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel : {
            align: 'center'
        }
    }],
    yAxis: [{
        gridIndex: 0,
        type: 'category',
        data: ['L2', 'L14东', 'L1', 'L9', 'L10', 'L7'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
    }, {
        gridIndex: 1,
        type: 'category',
        data: ['L2', 'L14东', 'L1', 'L9', 'L10', 'L7'],
        axisLabel: {
            show: false   
        },
         axisTick: {
            show: false
        },
         axisLine: {
            show: false
        }
    }],
    series: [{
            name: '早高峰',
            type: 'bar',
            stack: '比例',
            label: {
                normal: {
                    position: 'inside',
                    show: true,
                    formatter: '{c}%'
                }
            },
            data: [18, 2, 2, 1, 13, 44],
            markLine: {
                label: {
                    show: false
                },
                silent: true,
                symbolSize: 0,
                lineStyle: {
                    color: 'rgba(255,165,0,1)',
                    width: 2
                },
                data: [{
                    name: 'x',
                    xAxis: 50,
                }]
            }
        },
        {
            name: '晚高峰',
            type: 'bar',
            stack: '比例',
            label: {
                normal: {
                    position: 'inside',
                    show: true,
                    formatter: '{c}%'
                }
            },
            data: [8, 2, 2, 1, 13, 44]
        },
         {
            name: '其他时段',
            type: 'bar',
            stack: '比例',
            label: {
                normal: {
                    position: 'inside',
                    show: true,
                    formatter: '{c}%'
                }
            },
            data: [8, 2, 2, 1, 13, 44]
        },
        {
            name: '早高峰',
            type: 'bar',
            stack: '',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: '人次',
            label: {
                normal: {
                    position: 'inside',
                    show: false
                }
            },
            data: [18, 2, 2, 1, 13, 44]
        },
        {
             xAxisIndex: 1,
            yAxisIndex: 1,
            name: '晚高峰',
            type: 'bar',
            stack: '人次',
            label: {
                normal: {
                    position: 'inside',
                    show: false
                }
            },
            data: [8, 2, 2, 1, 13, 24]
        },
         {
            xAxisIndex: 1,
            yAxisIndex: 1,
            name: '其他时段',
            type: 'bar',
            stack: '人次',
            label: {
                normal: {
                    position: 'inside',
                    show: false
                }
            },
            data: [8, 2, 2, 1, 13, 14]
        }
    ]
};