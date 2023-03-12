var data = [{
        "month": "2016-10",
        "sales": 3300,
        "income": 2344
    },
    {
        "month": "2016-11",
        "sales": 4330,
        "income": 3544
    },
    {
        "month": "2016-12",
        "sales": 6530,
        "income": 5444
    },
    {
        "month": "2017-01",
        "sales": 4750,
        "income": 3664
    },
    {
        "month": "2017-02",
        "sales": 6580,
        "income": 5675
    },
    {
        "month": "2017-03",
        "sales": 7430,
        "income": 6456
    },
    {
        "month": "2017-04",
        "sales": 4133,
        "income": 3670
    },
    {
        "month": "2017-05",
        "sales": 6654,
        "income": 5567
    },
    {
        "month": "2017-06",
        "sales": 6245,
        "income": 5789
    },
    {
        "month": "2017-07",
        "sales": 5908,
        "income": 4890
    },
    {
        "month": "2017-08",
        "sales": 6609,
        "income": 5298
    },
    {
        "month": "2016-09",
        "sales": 8890,
        "income": 7234
    }
]

var names = data.map(item => item.month)
var sales = data.map(item => item.sales)
var income = data.map(item => item.income.toFixed(2))

option = {
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize: 16
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '0',
        containLabel: true
    },
    legend: {
        left: 'center',
        data: ['销量 (万台)', '销售收入 (百万元)'],
        itemGap: 30,
        textStyle: {
            padding: [0, 0, 0, 5],
            color: '#9eb5be',
            fontSize: 16
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            interval: 0,
            color: '#9eb5be',
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        data: names
    }],
    yAxis: [{
            type: 'value',
            name: '销量 (万台)',
            position: 'left',
            nameTextStyle: {
                color: '#5182a1',
                fontSize: 14
            },
            axisLabel: {
                color: '#5182a1',
                fontSize: 14
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: ['#32495b']
                }
            }
        },
        {
            type: 'value',
            name: '收入 (百万元)',
            position: 'right',
            nameTextStyle: {
                color: '#5182a1',
                fontSize: 14
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#5182a1',
                fontSize: 14,
                formatter: '{value}'
            }
        }
    ],
    series: [{
            name: '销量 (万台)',
            type: 'bar',
            barWidth: '50%',
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    fontSize: 14,
                    color: '#52a7ff'
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#479aff'
                        }, {
                            offset: 1,
                            color: '#1777e3'
                        }]
                    },
                    shadowBlur: 10,
                    shadowOffsetY: 4,
                    shadowOffsetX: 4,
                    shadowColor: 'rgba(0,0,0,.5)'
                }
            },
            data: sales
        },
        {
            name: '销售收入 (百万元)',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 8,
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            smooth: false,
            itemStyle: {
                normal: {
                    color: '#09c97a'
                }
            },
            lineStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#09c97a'
                        }, {
                            offset: 1,
                            color: '#15e198'
                        }]
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetY: 4,
                    shadowBlur: 10,
                    width: 4
                }
            },
            data: income
        }
    ]
};