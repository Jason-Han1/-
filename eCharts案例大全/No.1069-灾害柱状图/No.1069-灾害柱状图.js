option = {
    backgroundColor: '#1b2735',
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['突发性地灾', '缓变性地灾'],
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: ['2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(23,255,243,0.3)',
                },
            },
        },
    ],
    yAxis: [
        {
            min: 0,
            max: 20,
            interval: 10,
            name: '灾害次数',
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(23,255,243,0.3)',
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgb(23,255,243,0.3)',
                },
            },
        },
    ],
    series: [
        {
            name: '突发性地灾',
            type: 'bar',
            barWidth : 30,
            // color: '#68cbff',
            data: [9, 8, 10, 7, 2, 2, 5, 10],
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#05c3d9',
                        },
                        {
                            offset: 1,
                            color: '#1b5161',
                        },
                    ],
                },
            },
        },
        {
            name: '缓变性地灾',
            type: 'bar',
            barWidth : 30,
            data: [8, 4, 9, 7, 10, 9, 6, 4, 3],
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#49d3a7',
                        },
                        {
                            offset: 1,
                            color: '#184248',
                        },
                    ],
                },
            },
        },
    ],
    legend: {
        textStyle: {
            // 图例文字的样式
            color: '#fff',
            fontSize: 18,
            padding: [2, 0, 0, 2],
            fontFamily: '微软雅黑',
            fontWeight: 'normal',
        },
    },
};
