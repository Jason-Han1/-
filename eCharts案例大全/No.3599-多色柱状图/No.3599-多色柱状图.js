var myColor = ['#2392D1', '#FDC86A', '#32DDC0'];
var data = [590, 380, 840];
var option = {
    backgroundColor: '#0A207E',
    grid: {
        left: '3%',
        top: '10%',
        right: '2%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#053C70',
                    type: 'dashed',
                },
            },
            data: ['', '', ''],
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: [],
        },
    ],
    yAxis: {
        type: 'value',
        nameGap: 35,
        nameTextStyle: {
            color: '#ffffff',
            fontSize: 16,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#053C70',
                type: 'dashed',
            },
        },
        axisLabel: {
            textStyle: {
                color: '#7181BE',
                fontSize: 14,
            },
        },
    },
    series: [
        {
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(255, 255, 255, 0.1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(4, 16, 77, 1)',
                        },
                    ]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                },
            },
            barWidth: '15%',
            data: [960, 960, 960],
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num];
                    },
                    barBorderRadius: [50,50,0,0],
                    borderWidth: 0,
                    borderColor: '#333',
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            barWidth: '15%',
            data: data,
        },
    ],
};
