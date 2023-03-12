const source = {
    "DC1": [{
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU1",
        "stockOutAmount": 5,
        "stockOutWeight": 10,
        "stockOutSquare": 5,
        "stockInCost": 5,
        "stockOutCost": 10,
        "avgStockAmount": 5,
        "storageCost": 116.9,
        "stockHoldCost": 66.8
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU2",
        "stockOutAmount": 2,
        "stockOutWeight": 3,
        "stockOutSquare": 4,
        "stockInCost": 2,
        "stockOutCost": 4,
        "avgStockAmount": 2,
        "storageCost": 93.8,
        "stockHoldCost": 40.2
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU3",
        "stockOutAmount": 4,
        "stockOutWeight": 6,
        "stockOutSquare": 8,
        "stockInCost": 4,
        "stockOutCost": 8,
        "avgStockAmount": 4,
        "storageCost": 186.2,
        "stockHoldCost": 79.8
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU4",
        "stockOutAmount": 1,
        "stockOutWeight": 2,
        "stockOutSquare": 3,
        "stockInCost": 1,
        "stockOutCost": 2,
        "avgStockAmount": 1,
        "storageCost": 69.3,
        "stockHoldCost": 33
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU5",
        "stockOutAmount": 3,
        "stockOutWeight": 6,
        "stockOutSquare": 9,
        "stockInCost": 3,
        "stockOutCost": 6,
        "avgStockAmount": 3,
        "storageCost": 210,
        "stockHoldCost": 80
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU6",
        "stockOutAmount": 6,
        "stockOutWeight": 12,
        "stockOutSquare": 18,
        "stockInCost": 6,
        "stockOutCost": 12,
        "avgStockAmount": 6,
        "storageCost": 420,
        "stockHoldCost": 160
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU7",
        "stockOutAmount": 7,
        "stockOutWeight": 3.5,
        "stockOutSquare": 3.5,
        "stockInCost": 7,
        "stockOutCost": 14,
        "avgStockAmount": 7,
        "storageCost": 174.75,
        "stockHoldCost": 46.6
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU8",
        "stockOutAmount": 1,
        "stockOutWeight": 0.5,
        "stockOutSquare": 0.5,
        "stockInCost": 1,
        "stockOutCost": 2,
        "avgStockAmount": 1,
        "storageCost": 24.75,
        "stockHoldCost": 6.6
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC1",
        "productName": "SKU9",
        "stockOutAmount": 3,
        "stockOutWeight": 0.3,
        "stockOutSquare": 0.3,
        "stockInCost": 3,
        "stockOutCost": 6,
        "avgStockAmount": 3,
        "storageCost": 15,
        "stockHoldCost": 10
    }],
    "DC2": [{
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC2",
        "productName": "SKU1",
        "stockOutAmount": 60,
        "stockOutWeight": 120,
        "stockOutSquare": 60,
        "stockInCost": 120,
        "stockOutCost": 180,
        "avgStockAmount": 60,
        "storageCost": 1400,
        "stockHoldCost": 800
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC2",
        "productName": "SKU2",
        "stockOutAmount": 60,
        "stockOutWeight": 90,
        "stockOutSquare": 120,
        "stockInCost": 120,
        "stockOutCost": 180,
        "avgStockAmount": 60,
        "storageCost": 2800,
        "stockHoldCost": 1200
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC2",
        "productName": "SKU3",
        "stockOutAmount": 60,
        "stockOutWeight": 90,
        "stockOutSquare": 120,
        "stockInCost": 120,
        "stockOutCost": 180,
        "avgStockAmount": 60,
        "storageCost": 2800,
        "stockHoldCost": 1200
    }, {
        "sceneId": 0,
        "sceneName": "基准场景",
        "stockName": "DC2",
        "productName": "SKU4",
        "stockOutAmount": 30,
        "stockOutWeight": 60,
        "stockOutSquare": 90,
        "stockInCost": 60,
        "stockOutCost": 90,
        "avgStockAmount": 30,
        "storageCost": 2100,
        "stockHoldCost": 1000
    }]
}


let skuCount = 0
let productList = []
for (let key in source) {
    const dcArr = source[key]
    skuCount += (dcArr.length + 1)
    productList = productList.concat(dcArr, [{
        productName: '',
    }])
}

let series = []
for (let key in source) {
    const num = source[key].length
    series.push({
        data: [{
            name: key,
            value: 1
        }],
        label: {
            show: true,
            position: 'inside',
            formatter: '{b}',
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
                // opacity: 0.4,
                // color: 'rgba(0, 0, 0, 0)',
            }
        },
        xAxisIndex: 1,
        yAxisIndex: 1
    }, {
        type: 'bar',
        barGap: 0,
        barWidth: `${1/skuCount*100}%`,
        xAxisIndex: 1,
        yAxisIndex: 1
    })
}

const productNameList = productList.map(item => item.productName)
const stockOutAmountList = productList.map(item => item.stockOutAmount)
const avgStockAmountList = productList.map(item => item.avgStockAmount)

option = {
    toolbox: {
        feature: {
            saveAsImage: {},
            restore: {},
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    legend: {
        data: ['出库量', '库存'],
    },
    grid: [{
            top: 40,
            height: 100,
        },
        {
            height: 50,
            top: 140
        },
        {
            top: 190,
            height: 100,
        },
    ],
    xAxis: [{
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
            zlevel: 2
        },
        {
            type: 'category',
            gridIndex: 1,
            axisLine: {
                show: false
            },
            zlevel: 3
        },
        {
            position: 'top',
            type: 'category',
            data: productNameList,
            gridIndex: 2,
            axisLabel: {
                color: '#333',
                margin: 0,
            },
            // axisLine: {
            //   lineStyle: {
            //     color: '#e7e7e7'
            //   }
            // },
            axisTick: {
                show: false,
            },
            zlevel: 2
        },
    ],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            minInterval: 1,
            axisLabel: {
                color: '#333'
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ccc'
                }
            }
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
            }
        },
        {
            type: 'value',
            inverse: true,
            gridIndex: 2,
            minInterval: 1,
            axisLabel: {
                color: '#333'
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
    ],
    series: [{
            name: '出库量',
            data: stockOutAmountList,
            type: 'bar',
            label: {
                show: true,
                position: 'top',
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
        },
        
        ...series,
        
        {
            name: '库存',
            data: avgStockAmountList,
            type: 'bar',
            label: {
                show: true,
                position: 'bottom',
                textStyle: {
                    color: '#555'
                }
            },
            itemStyle: {
                normal: {
                    color: '#DBDBDB',
                }
            },
            xAxisIndex: 2,
            yAxisIndex: 2,
            // barWidth: '100%',
        },
    ]
};