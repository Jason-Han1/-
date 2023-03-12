const mainCategoryMap = {
    "湿巾": [{
        "sceneName": "基准场景",
        "mainCategory": "湿巾",
        "detailCategory": "便携装",
        "totalValue": 86.5,
        "totalCount": 173,
        "totalWeight": 17.3,
        "totalSquare": 17.3
    }, {
        "sceneName": "基准场景",
        "mainCategory": "湿巾",
        "detailCategory": "标准装",
        "totalValue": 388,
        "totalCount": 388,
        "totalWeight": 194,
        "totalSquare": 194
    }],
    "纸品": [{
        "sceneName": "基准场景",
        "mainCategory": "纸品",
        "detailCategory": "厨房纸",
        "totalValue": 1601,
        "totalCount": 370,
        "totalWeight": 740,
        "totalSquare": 1110
    }, {
        "sceneName": "基准场景",
        "mainCategory": "纸品",
        "detailCategory": "抽纸",
        "totalValue": 1788,
        "totalCount": 661,
        "totalWeight": 1089,
        "totalSquare": 1127
    }],
    "笔": [{
        "sceneName": "基准场景",
        "mainCategory": "笔",
        "detailCategory": "铅笔",
        "totalValue": 1601,
        "totalCount": 370,
        "totalWeight": 740,
        "totalSquare": 1110
    }, {
        "sceneName": "基准场景",
        "mainCategory": "笔",
        "detailCategory": "钢笔",
        "totalValue": 1788,
        "totalCount": 661,
        "totalWeight": 1089,
        "totalSquare": 1127
    }]
}

let skuCount = 0
let productList = []
for (let key in mainCategoryMap) {
    const dcArr = mainCategoryMap[key]
    skuCount += dcArr.length
    productList = productList.concat(dcArr)
}

let series = []
const markLines = [
    [{
            symbol: 'none',
            x: 0,
            y: '0',
            // coord: [0, '0'],
        },
        {
            symbol: 'none',
            x: '100%',
            y: '0',
            // coord: ['100%', '0'],
        }
    ],
    [{
            symbol: 'none',
            x: 0,
            y: '33.33%',
            // coord: [0, '0'],
        },
        {
            symbol: 'none',
            x: '100%',
            y: '33.33%',
            // coord: ['100%', '0'],
        }
    ],
    [{
            symbol: 'none',
            x: 0,
            y: '66.66%',
            // coord: [0, '0'],
        },
        {
            symbol: 'none',
            x: '100%',
            y: '66.66%',
            // coord: ['100%', '0'],
        }
    ],
    [{
            symbol: 'none',
            x: 0,
            y: '99%',
            // coord: [0, '0'],
        },
        {
            symbol: 'none',
            x: '100%',
            y: '99%',
            // coord: ['100%', '0'],
        }
    ]
]
let beUsed = 0

for (let key in mainCategoryMap) {
    const num = mainCategoryMap[key].length
    series.push({
        name: '产品大类',
        z: 0,
        data: [{
            name: key,
            value: 1
        }],
        label: {
            offset: [0, 0],
            show: true,
            position: 'insideLeft',
            formatter: ({
                name
            }) => name.split('').join('\n\n'),
            textStyle: {
                fontSize: 14,
                color: '#000',
                fontWeight: 'bold',
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: `${(num)/skuCount*100}%`,
        itemStyle: {
            normal: {
                // color: (params) => {
                //   console.log(params)
                //   let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                //   return colors[params.dataIndex]
                // },
                // opacity: 0.1,
                color: 'rgba(0, 0, 0, 0)',
                // borderColor: 'rgba(0, 0, 0, 0.2)',
                // borderType: 'dashed',
                // borderWidth: 1,
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1,
    })


}

const productNameList = productList.map(item => item.detailCategory)
const totalCountList = productList.map(item => item.totalCount)
const totalSquareList = productList.map(item => item.totalSquare)
const totalWeightList = productList.map(item => item.totalWeight)
const totalValueList = productList.map(item => item.totalValue)

option = {
    // title: {
    //   text: productList[0].sceneName,
    // },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //     restore: {},
    //   }
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    legend: {
        data: ['总需求数量', '总需求体积', '总需求重量', '总价值'],
        selectedMode: 'single',
        top: 30,
    },
    grid: [{
            top: 100,
            bottom: 100,
            right: 100,
            left: 200,
        },
        {
            top: 100,
            bottom: 100,
            right: 100,
            left: 100,
        },
    ],
    xAxis: [{
            type: 'value',
            gridIndex: 0,
            minInterval: 1,
            axisLabel: {
                color: '#333',
                // show: false,
            },
            splitLine: {
                // show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ccc'
                },
                // show: false,
            },
            z: 1,
        },
        {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            z: 0,
        },
    ],
    yAxis: [{
            type: 'category',
            data: productNameList,
            gridIndex: 0,
            axisLabel: {
                color: '#333',
                margin: 4,
            },
            // axisLine: {
            //   lineStyle: {
            //     color: '#e7e7e7'
            //   }
            // },
            axisTick: {
                show: false,
            },
            z: 2,
        },
        {
            type: 'category',
            // data: [],
            gridIndex: 1,
            axisLine: {
                show: false
            },
            axisTick: {
                show: true,
            },
            z: 1,
        },
    ],
    series: [{
            z: 1,
            name: '总需求数量',
            data: totalCountList,
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideLeft',
                textStyle: {
                    color: '#555'
                }
            },
            itemStyle: {
                normal: {
                    color: '#5B9BD5',
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            // barWidth: '100%',
            markLine: {
                silent: true,
                lineStyle: {
                    type: 'solid',
                    color: 'red',
                },
                data: markLines
            },
        },
        {
            z: 1,
            name: '总需求体积',
            data: totalSquareList,
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideLeft',
                textStyle: {
                    color: '#555'
                }
            },
            itemStyle: {
                normal: {
                    color: '#5B9BD5',
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            // barWidth: '100%',
            markLine: {
              silent: true,
              lineStyle: {
                type: 'solid',
                color: 'red',
              },
              data: markLines
            },
        },
        {
            z: 1,
            name: '总需求重量',
            data: totalWeightList,
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideLeft',
                textStyle: {
                    color: '#555'
                }
            },
            itemStyle: {
                normal: {
                    color: '#5B9BD5',
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            // barWidth: '100%',
            markLine: {
              silent: true,
              lineStyle: {
                type: 'solid',
                color: 'red',
              },
              data: markLines
            },
        },
        {
            z: 1,
            name: '总价值',
            data: totalValueList,
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideLeft',
                textStyle: {
                    color: '#555'
                }
            },
            itemStyle: {
                normal: {
                    color: '#5B9BD5',
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            // barWidth: '100%',
            markLine: {
              silent: true,
              lineStyle: {
                type: 'solid',
                color: 'red',
              },
              data: markLines
            },
        },
        ...series,
    ]
};