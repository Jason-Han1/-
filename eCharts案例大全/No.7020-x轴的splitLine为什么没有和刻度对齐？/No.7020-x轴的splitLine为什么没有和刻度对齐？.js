option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        axisTick: {
            show: true,
            alignWithLabel: true,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#E5E5E5',
                width: 1,
            }
        },
        axisLabel: {
            showMaxLabel: true,
            show: true,
            // interval: 3,
            color: '#666666',
            fontWeight: 400,
            fontSize: 12,
            fontFamily: 'Lato',
            lineHeight: 24,
            padding: [0, 0, 0, 0],
            formatter(value, index) {
                return value;
            }
        },
        axisPointer: { // 指示器，不需要
            show: false,
            type: "line",
            lineStyle: {
                type: "dashed"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E5E5E5',
                type: 'dashed',
            }
        }
    }],
    yAxis: [{
        type: 'value',
        max: '25',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#E5E5E5',
                width: 1,
            }
        },
        // name: 'kwh',
        data: [0, 5, 10, 15, 20, 25],
        splitNumber: 3,
        interval: 5,
        nameTextStyle: {
            padding: [0, 35, 0, 0],
            color: '#666666',
            verticalAlign: 'bottom',
        },

        axisLabel: {
            show: true,
            maxInterval: 5,
            // interval: 4,
            color: '#666666',
            fontWeight: 400,
            fontSize: 12,
            fontFamily: 'Lato',
            lineHeight: 24,
            formatter(value, index) {
                if (value === 25) {
                    return 'kwh'
                } else {
                    return value
                }
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E5E5E5',
                type: 'dashed',
            }
        },
        axisPointer: {
            show: false
        }
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: 5.5,
        itemStyle: {
            barBorderRadius: [5, 5, 0, 0],
            borderWidth: 0,
            borderType: 'solid',
            borderColor: 'red',
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                        offset: 0,
                        color: '#A7BDDF'
                    },
                    {
                        offset: 1,
                        color: '#8197BA'
                    }
                ]
            )
        },
        data: [10, 3, 7, 15, 11, 7, 8, 2, 0, 18, 10, 3, 7, 15, 13, 7, 8, 2, 0, 18, 10, 3, 7, 15, 11, 7, 8, 2, 0, 18, 12]
    }]
};