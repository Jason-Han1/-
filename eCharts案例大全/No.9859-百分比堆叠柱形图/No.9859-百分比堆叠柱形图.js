var data = [
    {
        "month": "16-09",
        "fourG": 87,
        "nonFourG": 13
    },
    {
        "month": "16-10",
        "fourG": 60,
        "nonFourG": 40
    },
    {
        "month": "16-11",
        "fourG": 70,
        "nonFourG": 30
    },
    {
        "month": "16-12",
        "fourG": 78,
        "nonFourG": 22
    },
    {
        "month": "17-01",
        "fourG": 80,
        "nonFourG": 20
    },
    {
        "month": "17-02",
        "fourG": 89,
        "nonFourG": 11
    },
    {
        "month": "17-03",
        "fourG": 85,
        "nonFourG": 15
    },
    {
        "month": "17-04",
        "fourG": 79,
        "nonFourG": 21
    },
    {
        "month": "17-05",
        "fourG": 90,
        "nonFourG": 10
    },
    {
        "month": "17-06",
        "fourG": 88,
        "nonFourG": 12
    },
    {
        "month": "17-07",
        "fourG": 83,
        "nonFourG": 17
    },
    {
        "month": "17-08",
        "fourG": 78,
        "nonFourG": 22
    },
]

var names = data.map(item => item.month)
var fourG = data.map(item => item.fourG)
var nonFourG = data.map(item => item.nonFourG)
var fourGTotal = []
var nonFourGTotal = []
var fourGCount = 0
var nonFourGCount = 0
var total = 0

for (var i = 0; i < data.length; i++) {
    fourGCount += data[i].fourG
    nonFourGCount += data[i].nonFourG
}
total = fourGCount + nonFourGCount

fourGTotal.push({
    value: (fourGCount / total * 100).toFixed(2) + '%',
    name: '4G占总比'
})

nonFourGTotal.push({
    value: (nonFourGCount / total * 100).toFixed(2) + '%',
    name: '非4G占总比'
})

option = {
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize: 16
        }
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '20',
        containLabel: true
    },
    legend: {
        left: '30%',
        data: ['4G手机(%)', '非4G手机(%)'],
        itemGap: 30,
        textStyle: {
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
        name: '单位 (%)',
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
    }],
    series: [{
            name: '非4G手机(%)',
            type: 'bar',
            stack: 'mode',
            zlevel: 2,
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
            data: nonFourG
        },
        {
            name: '4G手机(%)',
            type: 'bar',
            barWidth: '60%',
            stack: 'mode',
            zlevel: 1,
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
            data: fourG
        },
        
    ]
}