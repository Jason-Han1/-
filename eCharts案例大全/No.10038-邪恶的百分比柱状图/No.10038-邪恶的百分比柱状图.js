var data = {
    xData: ['ODS', 'DW', '备份库'],
    currentData: [{
            value: 13,
        },
        {
            value: 36,
        },
        {
            value: 65,
        }
    ],
    maxData: [{
            value: 100,
        },
        {
            value: 100,
        },
        {
            value: 100,
        }
    ]
};


var option = {
    backgroundColor: '#202632',
    grid: { //图表的位置
        top: '8%',
        left: '10%',
        right: '5%',
        bottom: '8%',
        // containLabel: true
    },
    xAxis: {
        show: true,
        // axisLabel: {
        //     fontSize: '10px',
        //     color: 'red',
        //     formatter: '{value} %',
        //     padding: [0, 10, 0, 0],
        // },
        type: 'category',
        // boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: '12',
            }
        },
        // data: ['ODS', 'DW', '备份库']
        data: data.xData
    },
    yAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: '12',
            }
        },
        axisPointer: {
            show: true,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
            }
        }
    },
    animationEasing: 'elasticOut',
    series: [{
            name: '正常',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [60, 8],
            symbolMargin: 4,
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            // color: '#43F2A6' // 0% 处的颜色
                            color: 'rgba(116,57,229,1)', // 0% 处的颜色
                        }, {
                            offset: 1,
                            // color: '#15CF7E' // 100% 处的颜色
                            color: 'rgba(116,57,229,1)' // 100% 处的颜色
                        }],
                    }
                }

            },
            label: {
                show: true,
                position: 'top',
                color: '#fff',
                // formatter: '{c}%',
                formatter: '{c}',
            },
            // data: [
            //     {
            //         value: 2,
            //         // formatter: '{value} %',
            //     },
            //     {
            //         value: 19,
            //     },
            //     {
            //         value: 29,
            //     }
            // ]
            data: data.currentData
        },
        {
            name: '总量',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [60, 8],
            symbolMargin: 4,
            // color: '#12121E',
            color: 'rgba(72,72,139,1)',
            barGap: '-100%',
            label: {
                show: false,
                position: 'top',
                color: '#fff',
                formatter: '{c}',
            },
            z: 1,
            // data: [
            //     {
            //         value: 500,
            //     },
            //     {
            //         value: 500,
            //     },
            //     {
            //         value: 500,
            //     }
            // ]
            data: data.maxData
        }
    ]
};