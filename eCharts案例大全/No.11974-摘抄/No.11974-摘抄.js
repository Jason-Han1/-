option = {
   // backgroundColor: '#0e202d',
    tooltip: {},
    xAxis: {
        data: ["企业", "农专", "个体"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: 'red'
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '年报上报率3',
        type: 'pictorialBar',
        symbolSize: [100, 25],
        symbolOffset: [0, -10],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {

                            // build a color map as your need.

                            var colorList = [

                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',

                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',

                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'

                            ];

                            return colorList[params.dataIndex]

                        },
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }, {
            value: 50,
            symbolPosition: 'end'
        }, {
            value: 20,
            symbolPosition: 'end'
        }]
    }, {
        name: '年报上报率2',
        type: 'pictorialBar',
        symbolSize: [100, 25],
        symbolOffset: [0, 10],
        z: 12,
        itemStyle: {
            normal: {
                 color: function(params) {

                            // build a color map as your need.

                            var colorList = [

                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',

                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',

                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'

                            ];

                            return colorList[params.dataIndex]

                        },
            }
        },
        data: [100, 50, 20]
    },   {
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {

                            // build a color map as your need.

                            var colorList = [

                              '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',

                               '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',

                               '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'

                            ];

                            return colorList[params.dataIndex]

                        },
                opacity: .7
            }
        },
        silent: true,
        barWidth: 100,
        barGap: '-100%', // Make series be overlap
        data: [100, 50, 20]
    }]
};