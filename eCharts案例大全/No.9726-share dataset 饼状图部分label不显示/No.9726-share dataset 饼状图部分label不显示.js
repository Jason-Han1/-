setTimeout(function () {

    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            source: [
                ["record", "2019-10-25", "2019-10-26", "2019-10-27", "2019-10-28", "2019-10-29", "2019-10-30", "2019-10-31"],
                ["77", 0, 0, 0, 0, 0, 0, 0],
                ["hello", 0, 0, 0, 0, 0, 0, 0],
                ["heme", 0, 0, 0, 0, 0, 0, 0],
                ["79", 0, 0, 0, 0, 0, 0, 0],
                ["测试日志账本", 0, 0, 0, 0, 0, 0, 0],
                ["11231313", 0, 0, 0, 0, 0, 0, 0],
                ["test78", 0, 0, 0, 0, 0, 0, 0],
                ["哦", 0, 0, 0, 0, 0, 0, 0],
                ["哦1", 0, 0, 0, 0, 0, 0, 0],
                ["trst", 0, 0, 0, 0, 0, 0, 0, ],
                ["测试一下", 0, 0, 0, 0, 0, 0, 0],
                ["日常生活费", 0, 0, 0, 0, 0, 0, 0],
                ["测试账本2", 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2019-10-25} ({d}%)'
                },
                encode: {
                    itemName: 'record',
                    value: '2019-10-25',
                    tooltip: '2019-10-25'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);

});;