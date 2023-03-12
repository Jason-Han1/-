const source = [{
    "sceneName": "基准场景",
    "stockName": "DC1",
    "totalCount": 29,
    "totalWeight": 37.3,
    "totalSquare": 42.3,
    "totalStockCost": 1630.7,
    "totalStockInCost": 29,
    "totalStockOutCost": 58,
    "totalStorageCost": 1100.7,
    "totalStockHoldCost": 443
}, {
    "sceneName": "基准场景",
    "stockName": "DC2",
    "totalCount": 280,
    "totalWeight": 460,
    "totalSquare": 540,
    "totalStockCost": 19665.7,
    "totalStockInCost": 560,
    "totalStockOutCost": 840,
    "totalStorageCost": 12599.3,
    "totalStockHoldCost": 5666.4
}]

option = {
    title: {
        text: source[0].sceneName,
        left: 14,
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    dataset: {
        dimensions: [
            {
                name: 'stockName',
                displayName: '仓库名称'
            },

            {
                name: 'totalStockInCost',
                displayName: '入库成本'
            },
            {
                name: 'totalStockOutCost',
                displayName: '出库成本'
            },
            {
                name: 'totalStorageCost',
                displayName: '存储成本'
            },
            {
                name: 'totalStockHoldCost',
                displayName: '持有成本'
            },

            {
                name: 'totalCount',
                displayName: '数量'
            },
            {
                name: 'totalWeight',
                displayName: '重量'
            },
            {
                name: 'totalSquare',
                displayName: '体积'
            },
        ],
        source,
    },
    legend: [
        {
            data: ['数量', '重量', '体积'],
            selectedMode: 'single',
        },
        {
            top: 24,
            data: ['入库成本', '出库成本', '存储成本', '持有成本'],
            selectedMode: 'single',
        },
    ],
    xAxis: {
        type: 'category',
    },
    yAxis: [
        {
            type: 'value'
        },
        {
            type: 'value',
            splitLine: {
                show: false
            },
        }
    ],
    series: [
        {
            type: 'bar',
            stack: 'stack',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
        },
        {
            type: 'bar',
            stack: 'stack',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
        },
        {
            type: 'bar',
            stack: 'stack',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
        },
        {
            type: 'bar',
            stack: 'stack',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
        },

        {
            type: 'line',
            stack: 'totalCount',
            label: {
                show: true
            },
            yAxisIndex: 1,
        },
        {
            type: 'line',
            stack: 'totalWeight',
            label: {
                show: true
            },
            yAxisIndex: 1,
        },
        {
            type: 'line',
            stack: 'totalSquare',
            label: {
                show: true
            },
            yAxisIndex: 1,
        },
    ]
};