option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['A', 41.1, 30.4, 100, 100],
            ['B', 86.5, 192.1, 100, 50],
            ['C', 54.1, 67.2, 100, 50]
        ]
    },
    xAxis: [{
            type: 'category',
            gridIndex: 0
        },
        {
            type: 'category',
            gridIndex: 1
        },
        {
            type: 'category',
            gridIndex: 2
        },
        {
            type: 'category',
            gridIndex: 3
        }
    ],
    yAxis: [{
            gridIndex: 0
        },
        {
            gridIndex: 1
        },
        {
            gridIndex: 2
        },
        {
            gridIndex: 3
        }
    ],
    grid: [{
            x: '7%',
            y: '7%',
            width: '38%',
            height: '38%',
            tooltip: {
                trigger: "axis"
            }
        },
        {
            x2: '7%',
            y: '7%',
            width: '38%',
            height: '38%',
            tooltip: {
                trigger: "axis"
            }
        },
        {
            x: '7%',
            y2: '7%',
            width: '38%',
            height: '38%'
        },
        {
            x2: '7%',
            y2: '7%',
            width: '38%',
            height: '38%'
        }
    ],
    series: [
        // These series are in the first grid.
        {
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'column'
        },
        {
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'column'
        },
        {
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'column'
        },
        {
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            seriesLayoutBy: 'column'
        },
        // These series are in the second grid.
        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            seriesLayoutBy: 'row'
        },
        //
        {
            id: 'pie1',
            type: 'pie',
            radius: '30%',
            seriesLayoutBy: 'row',
            center: ['25%', '75%'],
            xAxisIndex: 2,
            yAxisIndex: 2,
            encode: {
                itemName: 'product',
                value: 3,
                tooltip: 'C',
            }
        },
        {
            id: 'pie2',
            type: 'pie',
            radius: '30%',
            seriesLayoutBy: 'column',
            center: ['75%', '75%'],
            xAxisIndex: 3,
            yAxisIndex: 3,
            encode: {
                itemName: 'product',
                value: 4,
                tooltip: '2014'
            }
        }
    ]
};

myChart.on('updateAxisPointer', function(event) {
    console.info(event)
    var xAxisInfo = event.axesInfo[0];
    var seriesIndex = event.seriesIndex;
    var dataIndexInside = event.dataIndexInside;
    var dataIndex = event.dataIndex;

    if (xAxisInfo && seriesIndex === 0) {
        let dimension = xAxisInfo.value + 1;
        console.info(dimension)
        myChart.setOption({
            series: {
                id: "pie1",
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: dimension,
                    //tooltip:'A',
                }
            }
        });
    } else if (xAxisInfo && seriesIndex === 4) {
        let dimension = xAxisInfo.value + 1;
        console.info(dimension)
        myChart.setOption({
            series: {
                id: "pie2",
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: dimension,
                    //tooltip:'A',
                }
            }
        });
    }
});