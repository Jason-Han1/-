option = {
    backgroundColor: '#080b30',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#86b6eb',
                },
            },
            splitArea: {
                show: false,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#fff',
                fontSize: 14,
                formatter: (params) => {
                    let newParamName = ''; //最终拼接的字符串
                    let paramsLength = params.length;
                    let maxNum = 3;
                    let rowNum = Math.ceil(paramsLength / maxNum); //向上取整
                    if (rowNum > 1) {
                        for (let i = 0; i < rowNum; i++) {
                            let item = '';
                            let start = i * maxNum;
                            let end = start + maxNum;
                            if (i === rowNum - 1) {
                                item = params.substring(start, paramsLength);
                            } else {
                                item = params.substring(start, end) + '\n';
                            }
                            newParamName = newParamName + item;
                        }
                    } else {
                        newParamName = params;
                    }
                    return newParamName;
                },
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['还公贷提取', 'B', 'C', 'D', 'E', 'F'],
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            // name: '注册总量',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 20,
            lineStyle: {
                normal: {
                    color: '#3ec9b5',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 0,
                    shadowOffsetX: 0,
                    width: 3,
                },
                width: 10,
            },
            label: {
                show: true,
                position: 'top',
                distance: 25,
                textStyle: {
                    color: '#3ec9b5',
                    fontSize: 14,
                    fontFamily: 'PingFangSC-Regular',
                },
            },

            itemStyle: {
                color: '#3ec9b5',
                // borderColor: "#fff",
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
            },
            tooltip: {
                show: true,
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
                                color: 'rgba(0,202,149,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
        },
    ],
};
