option = {
    backgroundColor:'#FFF',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        bottom:10,
        data: ['2017年税收收入', '2018年税收收入', '2017年增幅', '2018年增幅'],
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '1-2月', '1-3月', '1-4月', '1-5月', '1-6月', '1-7月', '1-8月', '1-9月', '1-10月', '1-11月', '1-12月'],
        axisPointer: {
            type: 'shadow'
        },
         axisLabel: {
                    rotate: 25,
                },
    }, ],
    yAxis: [{
            type: 'value',
            name: '亿元',
          
            interval: 2000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '%',
            position: 'right',
    
            interval: 2,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: '2017年税收收入',
            type: 'bar',
            color:'#38355E',
            barGap :'0%',
            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    rotate:'-90',
                    offset :[7, 12],
                    fontWeight:500
                }
            },
            data: [1960,3005,3959,5707,7134,8274,9667,10323,11007,11904,12392,12840],
            z: 3,
            
        },
        {
            name: '2018年税收收入',
            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    rotate:'-90',
                    offset :[6, 15],
                    fontWeight:500
                }
            },
            type: 'bar',
            color:'#BF5D39',
            data: [2197,3356,4439,6311,7799,8995,10479],
            z: 3

        },
        {
            xAxisIndex: 1,
            name: '2017年增幅',
            type: 'line',
            label: {
                normal: {
                    show: true,
                }
            },
            yAxisIndex: 1,
            color:'#3B3861',
            data: [6.6,2.5,4.1,7.2,8.8,7.8,7.8,7.8,9.1,8.7,8.4,8.4]
        },
        {
            xAxisIndex: 1,
            name: '2018年增幅',
            type: 'line',
            label: {
                normal: {
                    show: true,
                }
            },
            yAxisIndex: 1,
            color:'#B05C2F',
            data: [12.0,11.7,12.2,10.6,9.3,8.7,8.4]
        }
    ]
};

// 增加了一个隐藏的x轴，用来控制线图的点的位置
option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false
}
option.series[2].data = option.series[2].data.map((x, i) => [27 + i * 100, x])
option.series[3].data = option.series[3].data.map((x, i) => [73 + i * 100, x])
