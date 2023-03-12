var uploadedDataURL = "/asset/get/s/data-1611736969745-XwYPMOSjT.png";

var min = 1;
var max = 8;
var upArray = ["2015.5.4", "2016.5.10", "2016.5.18", "2016.6.8", "2016.6.22", "2016.7.10", "2016.8.4", '2017.5.10'];
var scatterArray = [
    [0, .6],
    [1, .7],
    [2, .8],
    [3, .9],
    [4, 1],
    [5, 1.1],
    [6, 1.2],
    [7, 1.3],
    [8, 1.4]
];
var upInfo = [
    [1, "2015.5.4\n\n会员入驻"],
    [3, "2016.5.18\n\n第一笔销售成交"],
    [5, "2016.6.22\n\n完成法人信用认证"],
    [7, "2016.8.4\n\n销售金额突破千万"]
];
var downInfo = [
    [2, "2016.5.10\n\n第一批产品上线"],
    [4, "2016.6.8\n\n第一笔采购成交"],
    [6, "2016.7.10\n\n完成产品质量评价"],
    [8, "2017.5.10\n\n采购金额突破千万"]
];

var option = {
    backgroundColor: {
        color: {
            image: uploadedDataURL, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
            repeat: 'no-repeat' // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
        }
    },
    tooltip: {
        position: 'top'
    },
    singleAxis: [{
        type: "value", // 上线
        top: "50",
        height: "20",
        splitLine: {
            show: false
        },
        interval: 1,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            // show:false
        },
        min: min,
        max: max
    }, {
        type: "category", //散点
        boundaryGap: false,
        top: "50",
        height: "20",
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: upArray
    }, {
        type: "value", // 线
        top: "50",
        height: "20",
        splitLine: {
            show: false
        },
        interval: 1,
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        min: min,
        max: max
    }],
    series: [{
        singleAxisIndex: 0, // 上
        coordinateSystem: "singleAxis",
        type: "scatter",
        symbol: 'rect',
        // symbol: "path://M1024 476.279467c0 0 0 33.4848 0 41.591467 0 72.362667 0 136.6528 0 136.6528 0 15.479467-12.100267 28.040533-27.016533 28.040533l-41.284267 0c0-56.610133-45.8752-102.5024-102.4512-102.5024s-102.4512 45.8752-102.4512 102.5024L290.304 682.564267c-0.017067-56.610133-45.8752-102.5024-102.468267-102.5024-56.558933 0-102.434133 45.8752-102.4512 102.5024L27.0336 682.564267c-14.916267 0-27.016533-12.544-27.016533-28.040533L0.017067 318.173867C0.017067 290.423467 17.988267 273.066667 44.100267 273.066667c0 0 811.3152 0 844.032 0s98.4576 43.281067 124.125867 101.870933C1025.655467 406.289067 1024 476.279467 1024 476.279467zM170.786133 324.317867 78.574933 324.317867c-15.086933 0-27.323733 12.219733-27.323733 27.306667l0 81.834667c0 15.086933 12.2368 27.2896 27.323733 27.2896l92.2112 0L170.786133 324.317867zM324.471467 324.317867l-119.534933 0 0 136.413867 119.534933 0L324.471467 324.317867zM477.610667 324.317867l-119.005867 0 0 136.413867 119.005867 0L477.610667 324.317867zM631.210667 324.317867l-119.005867 0 0 136.413867 119.005867 0L631.210667 324.317867zM784.896 324.317867l-119.534933 0 0 136.413867 119.534933 0L784.896 324.317867zM784.8448 524.919467c0-7.0144-7.645867-12.6976-17.083733-12.6976s-17.066667 5.6832-17.066667 12.6976l0 25.361067c0 7.0144 7.6288 12.6976 17.066667 12.6976s17.083733-5.6832 17.083733-12.6976L784.8448 524.919467zM966.024533 404.155733c-11.008-46.728533-71.3728-79.837867-88.1152-79.837867-41.0112 0-58.845867 0-58.845867 0l0 136.413867L971.741867 460.8C971.741867 460.8 974.848 441.719467 966.024533 404.155733zM187.835733 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.3008-30.600533-68.3008-68.334933C119.534933 644.846933 150.101333 614.2464 187.835733 614.2464zM853.265067 614.2464c37.717333 0 68.3008 30.600533 68.3008 68.352 0 37.7344-30.583467 68.334933-68.3008 68.334933-37.7344 0-68.317867-30.600533-68.317867-68.334933C784.9472 644.846933 815.530667 614.2464 853.265067 614.2464z",
        symbolSize: [100, 60],
        symbolOffset: [
            0,
            -40
        ],
        itemStyle: {
            color: 'transparent'
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(data) {
                    return data.value[1];
                },
                color: 'white',
                borderRadius: 3,
                padding: [2, 2, 2, 2],
            }
        },
        emphasis: {
            label: {
                color: '#FFFD8E'
            }
        },
        data: upInfo
    }, {
        singleAxisIndex: 1, // 上 
        coordinateSystem: "singleAxis",
        type: "scatter",
        symbolSize: function(dataItem) {
            return dataItem[1] > 10 ? dataItem[1] / 1e3 : dataItem[1] * 10;
        },
        symbolOffset: [
            0,
            9
        ],
        itemStyle: {
            normal: {
                opacity: 1,
                color: '#fff',
            }
        },
        data: scatterArray
    }, {
        singleAxisIndex: 2, // 下 
        coordinateSystem: "singleAxis",
        type: "scatter",
        symbol: 'rect',
        // symbol: vehicleSymbolPath,
        symbolSize: [100, 60],
        symbolOffset: [
            0,
            75
        ],
        itemStyle: {
            color: 'transparent'
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(data) {
                    return data.value[1];
                },
                color: 'white',
                borderRadius: 3,
                padding: [2, 2, 2, 2]
            }
        },
        emphasis: {
            label: {
                color: '#FFFD8E'
            }
        },
        data: downInfo
    }]
};