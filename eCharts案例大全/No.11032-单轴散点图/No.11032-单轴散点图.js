// 散点数据
let seriesData = {
    "c207620e-aa8f-4f4d-849b-455a39915e65": [
        [0, 3, 701, "c207620e-aa8f-4f4d-849b-455a39915e65"],
        [1, 4530, 700, "c207620e-aa8f-4f4d-849b-455a39915e65"],
        [2, 2, 696, "c207620e-aa8f-4f4d-849b-455a39915e65"],
        [3, 16627, 700, "c207620e-aa8f-4f4d-849b-455a39915e65"],
        [4, 480, 691, "c207620e-aa8f-4f4d-849b-455a39915e65"],
        [5, 1184, 696, "c207620e-aa8f-4f4d-849b-455a39915e65"],
        [6, 244, 700, "c207620e-aa8f-4f4d-849b-455a39915e65"]
        // [0, 3],
        // [1, 10],
        // [2, 2],
        // [3, 11],
        // [4, 6],
        // [5, 4],
        // [6, 2]
    ],
    "08b97216-23e3-442d-a2a3-443595eea9d5": [
        [0, 3, 701, "08b97216-23e3-442d-a2a3-443595eea9d5"],
        [1, 1, 700, "08b97216-23e3-442d-a2a3-443595eea9d5"],
        [2, 7261, 697, "08b97216-23e3-442d-a2a3-443595eea9d5"],
        [3, 5, 700, "08b97216-23e3-442d-a2a3-443595eea9d5"]
        // [0, 3],
        // [1, 1],
        // [2, 12],
        // [3, 5]
    ]
}

// x轴时间数据
let xAxisData = {
    // "c207620e-aa8f-4f4d-849b-455a39915e65": ["2019-06-19 10:04:43", "2019-06-19 10:30:19", "2019-06-19 12:00:09", "2019-06-19 12:35:29", "2019-06-19 17:13:13", "2019-06-19 17:22:12", "2019-06-19 17:50:36"],
    "c207620e-aa8f-4f4d-849b-455a39915e65": ["10:04", "10:30", "12:00", "12:35", "17:13", "17:22", "17:50"],
    // "08b97216-23e3-442d-a2a3-443595eea9d5": ["2019-06-19 10:24:07", "2019-06-19 10:25:58", "2019-06-19 10:27:54", "2019-06-19 12:41:46"]
    "08b97216-23e3-442d-a2a3-443595eea9d5": ["10:24:07", "10:25", "10:27", "12:41"]
}

// 映射数据
let inRangeData = [701, 700, 696, 691, 697]
let _colors = [
    "#c23531",
    "#2f4554",
    "#61a0a8",
    "#d48265",
    "#91c7ae",
    "#749f83",
    "#ca8622",
    "#bda29a",
    "#6e7074",
    "#546570",
    "#c4ccd3"
]

let colors = {}
inRangeData.forEach((item, idx) => {
    colors[item] = _colors[idx]
})

let newTitle = []
let singleAxisData = []
Object.keys(xAxisData).forEach((k, idx) => {
    console.log(k, idx)
    newTitle.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 7 + '%',
        text: 'Person ' + idx // k
    })
    singleAxisData.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        top: (idx * 100 / 7 + 5) + '%',
        height: (100 / 7 - 10) + '%',
        axisLabel: {
            // interval: 1
        },
        data: xAxisData[k]
    })
})

// console.log('singleAxisData', singleAxisData)

// coordinateSystem: 'singleAxis', 
let newSeries = []
Object.keys(seriesData).forEach((k, idx) => {
    newSeries.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        name: idx > 0 ? '701' : '700',
        data: seriesData[k],
        itemStyle: {
            color: (params) => {
                let data = params.data
                console.log(data, data.length, colors[data[data.length - 2]])
                return colors[data[data.length - 2]]
            }
        },
        symbolSize: function(dataItem) {
            return dataItem[1] > 10 ? dataItem[1] / 1e3 : dataItem[1] * 10;
        }
    })
})

// console.log('newSeries', newSeries)




option = {
    tooltip: {
        // position: 'top'
    },
    title: newTitle,
    singleAxis: singleAxisData,
    // visualMap: [{
    //     show: false,
    //     dimension: 3,
    //     categories: inRangeData,
    //     calculable: true,
    //     precision: 0.1,
    //     textGap: 30,
    //     textStyle: {
    //         color: '#ccc'
    //     },
    //     inRange: {
    //         color: (function() {
    //             var colors = ['#000', '#0f0', '#00f', '#f00'];
    //             return colors.concat(colors);
    //         })()
    //     }
    // }],
    series: newSeries
};