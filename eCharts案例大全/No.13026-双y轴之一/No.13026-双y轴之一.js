option = {
    backgroundColor:'#fff',
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
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }, ],
    yAxis: [{
            type: 'value',
            name: '亿元',
            interval: 500,
            axisLabel: {
                formatter: '{value}',
            } 
        },
        {
            type: 'value',
            name: '%',
            position: 'right',
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: '2017年税收收入',
            type: 'bar',
            color:'#93BFC6',
            barGap :'0%',
            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    rotate:'-90',
                    offset :[8, 15],
                    fontWeight:500
                }
            },
            data: [1960,1045,1954,1749,1427,1140,1393,656,684,897,488,448],
        },
        {
            name: '2018年税收收入',
            type: 'bar',
            color:'#3E626D',
            label: {
                normal: {
                    show: true,
                    position: 'insideTop',
                    rotate:'-90',
                    offset :[8, 15],
                    fontWeight:500
                }
            },
            data: [2194,1162,1083,1671,1488,1197,1487],

        },
        {
            xAxisIndex: 1,
            name: '2017年增幅',
            type: 'line',
            yAxisIndex: 1,
            data: [6.6,-4.4,9.7,15.0,15.5,2.3,7.7,6.9,35.2,3.4,3.0,6.7]
        },
        {
            xAxisIndex: 1,
            name: '2018年增幅',
            type: 'line',
            yAxisIndex: 1,
            data: [12.0,11.2,13.5,7.0,4.3,5.0,6.5]
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
