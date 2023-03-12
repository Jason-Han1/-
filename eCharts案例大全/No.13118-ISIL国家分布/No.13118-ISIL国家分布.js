setTimeout(function() {

    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['年份', '2013', '2014', '2015', '2016', '2017'],
                ['Russia', 0, 0, 0, 2, 2],
                ['United Kingdom', 0, 0, 0, 0, 2],
                ['Iraq', 341, 1100, 996, 1206, 1154],
                ['West Bank and Gaza Strip', 0, 0, 2, 0, 1],
                ['Lebanon', 0, 23, 12, 7, 8],
                ['Philippines', 0, 0, 0, 8, 18],
                ['France', 0, 0, 9, 0, 0],
                ['Georgia', 0, 0, 0, 1, 0],
                ['Indonesia', 0, 0, 0, 1, 0],
                ['Israel', 0, 1, 0, 0, 0],
                ['Jordan', 0, 0, 1, 5, 0],
                ['Turkey', 2, 4, 12, 57, 7],
                ['Germany', 0, 0, 0, 1, 0],
                ['Egypt', 0, 3, 0, 0, 0],
                ['Somalia', 0, 0, 1, 0, 0],
                ['Iran', 0, 0, 0, 0, 2],
                ['Yemen', 0, 0, 0, 1, 0],
                ['Australia', 0, 0, 0, 0, 1],
                ['Belgium', 0, 1, 0, 2, 0],
                ['Syria', 29, 114, 179, 151, 120],
                ['Malaysia', 0, 0, 0, 1, 0],
                ['Tunisia', 1, 0, 0, 4, 0],
                ['Saudi Arabia', 0, 1, 7, 7, 0],
                ['Bahrain', 0, 0, 2, 0, 0],
                ['Libya', 0, 2, 0, 0, 0]
            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            gridIndex: 0
        },
        grid: {
            top: '55%'
        },
        series: [{
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            }, {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            }, {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            }, {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            }, {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '36%'],
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: '年份',
                    value: '2013',
                    tooltip: '2013'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function(event) {
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