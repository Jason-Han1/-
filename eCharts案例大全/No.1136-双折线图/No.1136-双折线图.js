option = {
    backgroundColor: 'rgba(30, 34, 48, 1)',
    legend: {
        top: 17,
        right: 30,
        icon: 'roundRect',
        itemWidth: 10,
        itemHeight: 8,
        itemGap: 15,
        textStyle: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: 14,
            color: 'rgba(255, 255, 255, 1)'
        },
        data: ['计划量', '完成量' ]
    },
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(113, 113, 113, 1)',
            },
        },
        backgroundColor: 'rgba(42, 51, 74, 1)',
        borderColor: 'transparent',
        formatter: function (params) {
            let colors = ['rgba(124, 124, 191, 1)', 'rgba(233, 195, 116, 1)']
            let returnData = '<div style="padding: 5px 10px;">'
            returnData += '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: rgba(210, 221, 249, 1);">' + params[0].axisValue + '</span><br/>'
            for (let i = 0; i < params.length; i++) {
                returnData += '<span style="display:inline-block; width:10px; height:8px; margin-right:5px; border-radius:1px; background-color:' + colors[i] + '"></span>'
                returnData += '<span style="font-family: MicrosoftYaHei; font-size: 14px; color: ' + colors[i] + '">' + params[i].seriesName + '：</span><span style="font-family: Verdana; font-size: 14px; color: ' + colors[i] + '">' + params[i].value + '</span><span style="display:inline-block; margin-left: 4px; line-height: 10px; font-family: MicrosoftYaHei; font-size: 12px; color: ' + colors[i] + '">车</span><br/>'
            }
            returnData += '</div>'
            return returnData
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(52, 51, 51, 1)',
            },
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)',
        },
        axisTick: {
            show: false,
            alignWithLabel: true,
        },
        boundaryGap: false,
        data: ['2021.12.18', '2021.12.19', '2021.12.20', '2021.12.21', '2021.12.22', '2021.12.23'],
    },
    yAxis: {
        type: 'value',
        name: '车',
        nameTextStyle: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)',
        },
        min: 0,
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(52, 51, 51, 0.8)',
            },
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                fontFamily: 'MicrosoftYaHei',
                fontSize: 12,
                color: 'rgba(113, 113, 113, 1)',
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '计划量',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                color: 'rgba(155, 155, 226, 1)'
            },
            label: {
                show: false
            },
            itemStyle: {
                color: 'rgba(155, 155, 226, 0.8)',
                borderColor: 'rgba(155, 155, 226, 0.8)',
                borderWidth: 3
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(155, 155, 226, 0.8)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(155, 155, 226, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(155, 155, 226, 0.8)',
                    shadowBlur: 20,
                },
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
        },
        {
            name: '完成量',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            lineStyle: {
                color: 'rgba(233, 195, 116, 1)'
            },
            label: {
                show: false
            },
            itemStyle: {
                color: 'rgba(233, 195, 116, 0.8)',
                borderColor: 'rgba(233, 195, 116, 0.8)',
                borderWidth: 3
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(233, 195, 116, 0.8)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(233, 195, 116, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(233, 195, 116, 0.8)',
                    shadowBlur: 20,
                },
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
        },
    ],
};
