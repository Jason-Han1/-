let params = {
    data1: [80, 152, 101, 134, 90, 130],
    data2: [120, 182, 191, 210, 170, 110],
    data3: [110, 132, 201, 154, 150, 80],
    data4: [90, 142, 161, 114, 190, 170],
    xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
    barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
}

option = {
    backgroundColor: '#2A2D35',
    color: ['#73A0FA', '#73DEB3', '#32C5E9', '#67E0E3'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            },
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '5%',
        containLabel: true,
    },
    legend: {
        data: ['门店1', '门店2', '门店3', '门店4'],
        show: true,
        textStyle: {
            color: '#BCDCFF',
        },
    },
    xAxis: [{
            type: 'category',
            data: params.xData,
            axisLabel: {
                color: '#BCDCF0',
                textStyle: {
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            boundaryGap: true,
        },
        {
            type: 'category',
            axisLabel: {
                color: '#BCDCF0',
                textStyle: {
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            boundaryGap: true,
        },
    ],
    yAxis: [{
            type: 'value',
            name: '单位/人',
            nameTextStyle: {
                color: '#94b5ca',
            },
            axisLabel: {
                color: '#94b5ca',
                textStyle: {
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#303649',
                },
            },
        },
        {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            name: '密度',
            //网格样式
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#94b5ca',
                },
            },
        },
    ],
    series: [{
            name: '门店1',
            type: 'line',
            data: params.data1,
        },
        {
            name: '门店2',
            type: 'line',
            data: params.data2,
        },
        {
            name: '门店3',
            type: 'line',
            data: params.data3,
        },
        {
            name: '门店4',
            type: 'line',
            data: params.data4,
        },
        {
            name: '额度',
            type: 'bar',
            data: params.barData,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(34,224,214,.8)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(5,137,186,1)',
                        },
                    ]),
                    barBorderRadius: 7.5,
                },
            },
            barMaxWidth: 15,
        },
    ],
}