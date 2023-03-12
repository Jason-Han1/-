var barWidth = 100,
    symbolSize = [25, barWidth],
    totalVal = 15000,
    centerVal = 8170;

var colorList = [

    '#C1232B',

];
option = {
    // backgroundColor: '#0e202d',
    tooltip: {
        show: false
    },
    xAxis: {
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
        },
        splitLine: {
            show: false
        },
    },
    yAxis: {
        data: [""],
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
        name: '最后面',
        type: 'pictorialBar',
        symbolSize: symbolSize,
        symbolPosition: 'end',
        symbolOffset: ['50%', 0],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {

                    // build a color map as your need.

                    return colorList[params.dataIndex]

                },
            }
        },
        zlevel: 2,
        data: [totalVal]
    }, {
        name: '最前面',
        type: 'pictorialBar',
        symbolSize: symbolSize,
        symbolPosition: 'end',
        symbolOffset: ['50%', 0],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {

                    // build a color map as your need.

                    return colorList[params.dataIndex]

                },
            }
        },
        zlevel: 1,
        data: [centerVal]
        // data: [{
        //     value: '100%',
        //     symbolPosition: 'end'
        // }]
    }, {
        name: '中间',
        type: 'pictorialBar',
        symbolSize: symbolSize,
        symbolOffset: ['-50%', 0],
        z: 12,
        zlevel: 1,
        itemStyle: {
            normal: {
                color: function(params) {

                    return colorList[params.dataIndex]

                },
            }
        },
        data: [100]
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#25A4FF',
                opacity: 1
            }
        },
        zlevel: 1,
        silent: true,
        barWidth,
        label: {
            show: true,
            formatter: [`{a|${centerVal}}`, `{b|/${totalVal}}`].join(""),
            rich: {
                a: {
                    color: '#54FF00'
                },
                b: {
                    color: '#999999'
                }
            },
            fontWeight: 600,
            position: "insideTopRight",
            offset: [40, -20],
            color: "#00B9FF",

        },

        // barGap: '-100%', // Make series be overlap
        data: [centerVal]
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                // color: '#25A4FF',
                color: '#c6e0f2',
                // opacity: 0.2,
            }
        },
        label: {
            show: true,
            formatter: '当前客流负载',
            position: "insideTopLeft",
            offset: [0, -20],
            color: "#00B9FF",

        },
        silent: true,
        barWidth,
        barGap: '-100%', // Make series be overlap
        data: [totalVal]
    }]
};