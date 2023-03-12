setTimeout(function () {

    option = {
        legend: {top: '5%'},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
                ['收入', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1, 56.5, 82.1, 88.7, 70.1],
                ['边际', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7, 51.1, 51.4, 55.1, 53.3],
                ['净利润', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5, 40.1, 62.2, 69.5, 36.4]

            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '20%',bottom: '30%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
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

});