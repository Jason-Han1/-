
setTimeout(function () {

    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
        dataset: {
            source: [
                ['月份', '1月', '2月', '3月', '4月', '5月', '6月','7月','8月','9月','10月','11月','12月'],
                ['先销后采', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['先采后销', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0,
                min : function(value){
                    return value.min;
                        }
        },
        grid: {right: '30%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '50%',
                center: ['85%', '50%'],
                label: {
                    formatter: '{b}: {@1月} ({d}%)'
                },
                encode: {
                    itemName: '月份',
                    value: '1月',
                    tooltip: '1月'
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

});