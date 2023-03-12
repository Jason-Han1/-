let dataC1 = [20, 30, 60, 40, 50, 30];
let dataC2 = [20, 30, 60, 40, 50, 30];
let dataC3 = [20, 30, 60, 40, 50, 30];
let xData = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'];

var fontColor = '#30eee9';
option = {
    backgroundColor: 'transparent',
    grid: {
        left: '5%',
        right: '2%',
        top: '10%',
        bottom: '15%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            lineStyle: {
                color: '#57617B',
            },
        },
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        offset: 20,
        axisTick: {
            show: false,

            alignWithLabel: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        axisLabel: {
            fontSize: 10,
        },
        data: xData,
    },
    yAxis: {
        name: '%',
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#dddddd',
            },
        },
        axisTick: {
            show: true,
        },
        axisLabel: {
            fontSize: 16,
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            name: '',
            type: 'line',
            stack: '总量',
            smooth: true,
            symbol: 'none',
            showSymbol: false,
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#71bd27',
                    lineStyle: {
                        color: '#71bd27',
                        width: 3,
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0.4,
                                color: 'rgba(240, 250, 230,0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(240, 250, 230,0.9)',
                            },
                        ]),
                    },
                },
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red',
                    },
                },
            },
            data: dataC1,
        },
    ],
};
