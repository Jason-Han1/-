let data = [],
    randomLen = 40,
    timelineData = Array.from({
        length: randomLen
    }).map((item, idx) => {
        item = 'Person' + idx
        return item
    }),
    itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    },
    levelData = ['进门', '点餐', '取餐', '离开'],
    seriesData = Array.from({
        length: randomLen
    }).map((item, idx) => {
        return [
            [
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 40),
                levelData[Math.ceil(Math.random() * levelData.length-1)],
                'Person' + Math.ceil(Math.random() * randomLen)
            ],
            [
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 50),
                levelData[Math.ceil(Math.random() * levelData.length-1)],
                'Person' + Math.ceil(Math.random() * randomLen)
            ],
            [
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 60),
                levelData[Math.ceil(Math.random() * levelData.length-1)],
                'Person' + Math.ceil(Math.random() * randomLen)
            ],
            [
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 4) - 1,
                Math.ceil(Math.random() * 70),
                levelData[Math.ceil(Math.random() * levelData.length-1)],
                'Person' + Math.ceil(Math.random() * randomLen)
            ]
        ]
    }),
    sizeFunction = function(x) {
        var y = Math.sqrt(x / 1e2) + 0.1
        return y * 80
    },
    randomPoint = Math.ceil(Math.random() * 3),
    optionsData = []

function autoAddZero(val) {
    return val < 10 ? '0' + val : val
}

function createXaxisData() {
    return [
        createTime(),
        createTime(),
        createTime(),
        createTime()
    ]
}

function createTime() {
    return `${autoAddZero(Math.ceil(Math.random()*23))}:${autoAddZero(Math.ceil(Math.random()*59))}:${autoAddZero(Math.ceil(Math.random()*59))}`
}

option = {
    animation: false,
    baseOption: {
        title: {
            text: '单轴散点图'
        },
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 10000,
            left: null,
            right: 0,
            top: 20,
            bottom: 20,
            width: 80,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#999'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: []
        },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            axisTick: {
                // show: false
            },
            axisLabel: {
                align: 'center'
            },
            data: createXaxisData()
        },
        yAxis: {
            type: 'category',
            data: levelData,
            splitLine: {
                lineStyle: {
                    color: '#f00'
                }
            },
            // splitArea: {
            //     show: true,
            //     areaStyle: {
            //         color: ['rgba(0,0,0,.3)', 'rgba(0,255,0,.3)', 'rgba(0,0,255,.3)', 'rgba(255,0,0,.3)']
            //     }
            // }
        },
        visualMap: [
            {
                show: false,
                dimension: 3,
                categories: levelData,
                calculable: true,
                precision: 0.1,
                textGap: 30,
                textStyle: {
                    color: '#ccc'
                },
                inRange: {
                    color: (function () {
                        var colors = ['#000', '#0f0', '#00f', '#f00'];
                        return colors.concat(colors);
                    })()
                }
            }
        ],
        series: [{
            type: 'scatter',
            itemStyle: itemStyle,
            data: seriesData[0],
            label: {
                normal: {
                    show: true
                }
            },
            formatter: (params) => {
                return params.seriesName
            },
            symbolSize: function(val) {
                return sizeFunction(val[2]);
            }
        }],

        tooltip: {},
    },
    options: optionsData
}

console.log(seriesData)

timelineData.forEach((item, idx) => {
    option.baseOption.timeline.data.push(item)
    optionsData.push({
        title: {
            show: true,
            'text': item + ''
        },
        xAxis: {
            data: createXaxisData()
        },
        series: {
            name: item,
            label: {
                normal: {
                    show: true,
                    formatter: (params) => {
                        return params.seriesName
                    },
                }
            },
            itemStyle: itemStyle,
            type: 'scatter',
            data: seriesData[idx],
            symbolSize: function(val) {
                return sizeFunction(val[2]);
            }
        }
    })
})

console.log(option)