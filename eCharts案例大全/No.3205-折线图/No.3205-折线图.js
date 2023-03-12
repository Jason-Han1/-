option = {
    backgroundColor: '#012366',
    tooltip: {
        trigger: 'axis',
        // extraCssText: 'font-size: 50px',
        textStyle: {
            fontSize: 22,
        },
    },
    // legend: {
    //   data: ['2018', '2019'],
    // },
    grid: {
        left: '1%',
        right: '2%',
        bottom: '1%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //坐标轴两边留白
        data: ['4', '8', '12', '16', '20', '24'],
        axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 24,
            },
            formatter: function (params) {
                var newParamsName = '';
                var paramsNameNumber = params.length;
                var provideNumber = 4; //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = '';
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + '\n';
                        }
                        newParamsName += tempStr;
                    }
                } else {
                    newParamsName = params;
                }
                return newParamsName;
            },
            // rotate:50,
        },
        axisTick: {
            //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: {
            //坐标轴轴线相关设置
            lineStyle: {
                color: '#437f87',
                // opacity:0.2
            },
        },
        splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: false,
            lineStyle: {
                color: '#f00',
                // 	opacity:0.1
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 28,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#437f87',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#437f87',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#f00',
                    // 	opacity:0.1
                },
            },
        },
    ],
    series: [
        {
            name: '2018',
            type: 'line',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#ed1719',
                    fontSize: 24,
                },
            },
            itemStyle: {
                normal: {
                    color: '#ed1719',
                    lineStyle: {
                        color: '#ed1719',
                        width: 3,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(101, 55, 55,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(101, 55, 55,0.35)',
                            },
                        ]),
                    },
                },
            },
            data: [60, 100, 120, 130, 120, 110],
        },
        {
            name: '2019',
            type: 'line',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#e4b93f',
                    fontSize: 24,
                },
            },
            itemStyle: {
                normal: {
                    color: '#e4b93f',
                    lineStyle: {
                        color: '#e4b93f',
                        width: 3,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(68, 93, 73,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(68, 93, 73,0.35)',
                            },
                        ]),
                    },
                },
            },
            data: [150, 160, 200, 210, 140, 120],
        },
        {
            name: '2020',
            type: 'line',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#02e1e3',
                    fontSize: 24,
                },
            },
            itemStyle: {
                normal: {
                    color: '#02e1e3',
                    lineStyle: {
                        color: '#02e1e3',
                        width: 3,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(5, 103, 103,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(5, 103, 103,0.35)',
                            },
                        ]),
                    },
                },
            },
            data: [500, 400, 380, 350, 420, 500],
        },
        {
            name: '2021',
            type: 'line',
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#02e693',
                    fontSize: 24,
                },
            },
            itemStyle: {
                normal: {
                    color: '#02e693',
                    lineStyle: {
                        color: '#02e693',
                        width: 3,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(6, 90, 85,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(6, 90, 85,0.35)',
                            },
                        ]),
                    },
                },
            },
            data: [600, 580, 530, 540, 600, 640],
        },
    ],
};
