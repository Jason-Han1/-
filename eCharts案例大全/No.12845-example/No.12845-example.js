setTimeout(function() {

    option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        dataset: {
            source: [
                ['product', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                ['Çok Mutlu', 12.01, 9.35, 9.14, 8.78, 8.71, 8.23, 7.67, 9.16, 8.53, 8.5, 9.57, 8.07, 7.95, 7.56, 7.23],
                ['Mutlu', 47.57, 48.73, 48.49, 49.05, 51.48, 47.52, 46.62, 51.99, 53.57, 52.45, 49.45, 48.19, 48.65, 53.77, 50.81],
                ['Orta', 33.17, 29.77, 29.52, 30.29, 28.75, 30.34, 31.11, 28.09, 28.02, 28.89, 30.23, 32.01, 32.02, 28.26, 30.91],
                ['Mutsuz', 5.6, 9.54, 9.92, 9.05, 8.84, 11.43, 11.5, 8.75, 7.99, 8.32, 8.17, 8.9, 8.83, 8.84, 8.94],
                ['Çok Mutsuz', 1.65, 2.61, 2.94, 2.84, 2.22, 2.47, 3.1, 2, 1.89, 1.84, 2.58, 2.83, 2.56, 1.57, 2.11],
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
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2017} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2017',

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