var time = ['06/05', '06/06', '06/07', '06/08', '06/09', '06/10', '06/11'];
var sportData = [1688, 1208, 2288, 1688, 1929, 1108, 2008];
var sportTime = [40, 35, 25, 40, 30, 38, 20];
option = {
    backgroundColor: '#2C313E',
    legend: {
        icon: 'rect',
        bottom: 10,
        left: 'center',
        itemWidth: 20,
        itemHeight: 5,
        itemGap: 60,
        textStyle: {
            color: '#A0A2B1',
        },
    },
    tooltip: {
        trigger: 'axis',
        // axisPointer: {
        //     label: {
        //         show: true,
        //         backgroundColor: '#fff',
        //         color: '#556677',
        //         borderColor: 'rgba(0,0,0,0)',
        //         shadowColor: 'rgba(0,0,0,0)',
        //         shadowOffsetY: 0,
        //     },
        //     lineStyle: {
        //         width: 0,
        //     },
        // },
        // backgroundColor: '#fff',
        // textStyle: {
        //     color: '#5c6c7c',
        // },
        // padding: [10, 10],
        // extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
    },
    grid: {
        top: '5%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: time,
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#DCE2E8',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#A0A2B1',
                },
            },
            boundaryGap: false,
            axisTick: {
            //坐标轴刻度相关设置。
            show: false,
        },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#DCE2E8',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#A0A2B1',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFD',
                    type: 'dashed',
                    opacity: 0.1,
                },
            },
        },
        {
            type: 'value',
            position: 'right',
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#A0A2B1',
                },
                formatter: '{value}',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#DCE2E8',
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '人均每日用时',
            type: 'line',
            data: sportTime,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: '#0571FF',
            },
            itemStyle: {
                normal: {
                    color: 'rgba(5, 113, 255, 1)',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(5, 113, 255, 0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(5, 113, 255, 1)',
                            },
                        ]),
                    },
                },
            },
        },
        {
            name: '人均每日跳绳',
            type: 'line',
            data: sportData,
            symbolSize: 1,
            yAxisIndex: 1,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                width: 5,
                color: '#F66F26',
            },
            itemStyle: {
                normal: {
                    color: 'rgba(246, 111, 38, 1)',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(246, 111, 38, 0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(246, 111, 38, 1)',
                            },
                        ]),
                    },
                },
            },
        },
    ],
};
