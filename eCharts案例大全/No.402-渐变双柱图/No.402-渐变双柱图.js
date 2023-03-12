let dataC1 = [20, 30, 60, 40, 50, 30];
let dataC2 = [20, 30, 60, 40, 50, 30];
let dataC3 = [20, 30, 60, 40, 50, 30];
let xData = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'];
let legendData = ['2010', '2021'];
var fontColor = '#30eee9';
option = {
    backgroundColor: '#0b1146',
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
    legend: {
        data: legendData,
        right: '8%',
        top: '2%',
        textStyle: {
            color: '#5195da',
        },
    },
    xAxis: {
        type: 'category',
        
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        offset: 20,
        axisTick: {
            show: false,
            alignWithLabel: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        axisLabel: {
            fontSize: 16,
            color:'#A2D4E6'
        },
        data: xData,
    },
    yAxis: {
        name: '%',
        nameTextStyle:{
             color: '#A2D4E6',
        },
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dotted',
                color: '#3585d5',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 16,
            color:'#A2D4E6'
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            name: legendData[0],
            type: 'bar',
            smooth: true,
            symbol: 'none',
            showSymbol: false,
            symbolSize: 8,
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
                            color: '#FFC31F',
                        },
                        {
                            offset: 1,
                            color: '#FF5A1F',
                        },
                    ],
                },
            },
            data: dataC1,
        },
        {
            name: legendData[1],
            type: 'bar',

            smooth: true,
            symbol: 'none',
            showSymbol: false,
            symbolSize: 8,
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
                            color: '#28D8E8',
                        },
                        {
                            offset: 1,
                            color: '#0489F0',
                        },
                    ],
                },
            },
            data: dataC1,
        },
    ],
};
