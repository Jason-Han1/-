options = [{ // 柱图，折线
        legend: {},
        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['product', '2016', '2017', '2018'],
                ['Laxtte', 43.3, 85.8, 93.7],
                ['Tea', 83.1, 73.4, 55.1],
                ['Cocoa', 86.4, 65.2, 82.5],
            ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {
            type: 'category',
            axisLabel: {
                interval: 0
            },
            axisTick: {
                // interval:0
            },
            // splitArea:{
            //     show:true,
            //     areaStyle:{
            //         color:['blue','orange']
            //     }
            // }
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{
                type: 'bar',
                // encode:{
                //     // x:0
                //     // y:2
                // },
                // seriesLayoutBy: 'row',
            },
            {
                type: 'bar',
                // seriesLayoutBy: 'row',
            },
            {
                type: 'bar',
                // seriesLayoutBy: 'row',
            }
        ]
    },
    { // 饼图
        legend: {},
        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['Latte', 43.3],
                ['Tea', 83.1],
                ['Cocoa', 86.4],
                // ['Latte','Tea','Cocoa'],
                // [12,21,123]
            ],
        },
        series: {
            type: 'pie',
            // seriesLayoutBy:'row',
        }
    },
    { // 散点
        legend: {},
        tooltip: {},
        dataset: [{
                source: [
                    ['x', 'y', 'value'],
                    [12, 323, 11.2],
                    [23, 167, 8.3],
                    [81, 284, 12],
                    [91, 413, 4.1],
                    [13, 287, 13.5]
                ]
            },
            {
                source: [
                    ['x', 'y', 'value'],
                    [52, 323, 11.2],
                    [13, 167, 8.3],
                    [41, 284, 12],
                    [71, 413, 4.1],
                    [53, 287, 13.5]
                ]
            },
            {
                source: [
                    ['x', 'y', 'value'],
                    [12, 323,0],
                    [33, 167,0],
                    [51, 284,0],
                    [71, 413,0],
                    [93, 287,0]
                ]
            }
        ],
        visualMap: [{
            show: false,
            dimension: 2, // 指向第三列（列序号从 0 开始记，所以设置为 2）。
            min: 2, // 需要给出数值范围，最小数值。
            max: 15, // 需要给出数值范围，最大数值。
            inRange: {
                // 气泡尺寸：5 像素到 60 像素。
                symbolSize: [5, 30]
            }
        }],
        xAxis: {},
        yAxis: {},
        series: [{
            type: 'scatter',
            name: '系列1',
            datasetIndex: 0,
            encode: {
                tooltip: 2,
            }
        }, {
            type: 'scatter',
            name: '系列2',
            datasetIndex: 1,
            encode: {
                tooltip: 2
            }
        },
        {
            type: 'line',
            name: '系列1',
            showSymbol:false,
            datasetIndex: 2,
            // encode: {
            //     tooltip: 2
            // }
        }
        ]
    },
    { // 漏斗
        legend: {},
        tooltip: {},
        color: ['red', 'blue', 'pink'],
        dataset: {
            // 提供一份数据。
            source: [
                ['Latte', 43.3],
                ['Tea', 83.1],
                ['Cocoa', 86.4],
            ],
        },
        series: [{
            type: 'funnel',
        }]
    },
    {
        polar: {
            // radius: 190, // 10条数据的时候 190
        },
        dataset: {
            // 提供一份数据。
            source: [
                ['Latte', 43.3],
                ['Tea', 83.1],
                ['Cocoa', 86.4],
            ],
        },
        angleAxis: {
            show: false,
        },
        radiusAxis: {
            type: 'category',
        },
        series: [{
            type: 'bar',
            stack: 1,
            coordinateSystem: 'polar',
            barWidth: 10, // 10条数据的时候 10
            barCategoryGap: "100%",
            itemStyle: {
                color: (params) => {
                    console.log(params);
                    return ['red', 'blue', 'pink'][params.dataIndex]
                }
            }
        }]
    }, {
        dataset: {
            // 提供一份数据。
            source: [
                ['product', '2015', '2016', '2017'],
                ['Laxtte', 43.3, 85.8, 93.7],
                ['Tea', 83.1, 73.4, 55.1],
                ['Cocoa', 86.4, 65.2, 82.5],
            ]
        },
        angleAxis: {
            type: 'category',
        },
        radiusAxis: {},
        polar: {},
        series: [{
                type: 'bar',
                coordinateSystem: 'polar',
                stack: 'a'
            },
            // {
            //     type: 'bar',
            //     coordinateSystem: 'polar',
            //     stack: 'a'
            // }, {
            //     type: 'bar',
            //     coordinateSystem: 'polar',
            //     stack: 'a'
            // }
        ],
    }
]