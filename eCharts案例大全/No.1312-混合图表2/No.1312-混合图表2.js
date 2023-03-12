let chartData = {
    xdata: ['01/01', '01/02', '01/03', '01/04', '01/05'],
    currentYearList: [10, 20, 30, 40, 50],
    lastYearList: [20, 10, 30, 40, 20],
    rateDataOne: [10, 40, 20, 30, 50],
};
let dataZoomFlag = false;
let zoomEnd = 100;
if (chartData.xdata.length > 6) {
    dataZoomFlag = true;
    zoomEnd = 60;
}
option = {
    backgroundColor:"#313131",
    grid: {
        top: '40',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: (params) => {
            return (
                params[0].name +
                '<br/>' +
                params[0].seriesName +
                ':' +
                params[0].value +
                '<br/>' +
                params[1].seriesName +
                ':' +
                params[1].value +
                '<br/>' +
                params[2].seriesName +
                ':' +
                params[2].value +
                '%'
            );
        },
    },
    dataZoom: [
        {
            show: dataZoomFlag,
            realtime: true,
            height: 8,
            start: 0,
            textStyle: {
                show: false,
            },
            end: zoomEnd,
            borderColor: 'rgba(255,255,255,0.20)',
            backgroundColor: 'rgba(255,255,255,0.10)',
            bottom: '1%',
        },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
        },
    ],
    barWidth: 12,
    xAxis: {
        type: 'category',
        data: chartData.xdata,
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变x轴颜色
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
                type: 'solid',
            },
        },
        axisLabel: {
            //  改变x轴字体颜色和大小
            show: true,
            textStyle: {
                color: 'rgba(250,250,250,1)',
                fontSize: 12,
            },
        },
    },
    yAxis: [
        {
            name: '',
            nameTextStyle: {
                color: 'rgb(250,250,250,.7)',
                fontSize: 12,
                padding: [0, 25, 0, 0],
            },
            type: 'value',
            color: '#fff',
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                    type: 'dotted',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                //  改变y轴颜色
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 12,
                },
            },
        },
        {
            name: '%',
            nameTextStyle: {
                color: 'rgb(250,250,250,.7)',
                fontSize: 12,
                padding: [0, 0, 0, 40],
            },
            show: true,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: 'rgba(255,255,255, .7)',
                },
            },
        },
    ],
    series: [
        {
            name: '今年',
            type: 'bar',
            barWidth: 12,
            barGap: 0.4,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(26,160,255,0.7)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(88,184,253,0.3)',
                    },
                ]),
            },
            data: chartData.currentYearList,

            legendHoverLink: false,
        },
        {
            name: 'b',
            tooltip: {
                show: false,
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(88,184,253,1)',
                },
            },
            symbolRotate: 0,
            symbolSize: [14, 6],
            symbolOffset: [-9, 1],
            symbolPosition: 'start',
            data: chartData.currentYearList,
            z: 3,
        },
        {
            name: 'b',
            tooltip: {
                show: false,
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(26,160,255,1)',
                    borderWidth: 1,
                },
            },
            symbolRotate: 0,
            symbolSize: [12, 5],
            symbolOffset: [-9, -1],
            symbolPosition: 'end',
            data: chartData.currentYearList,
            z: 3,
        },
        {
            type: 'bar',
            name: '去年',
            // stack: 1,
            barWidth: 12,
            barGap: 0.4,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(243,75,75,0.7)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(241,130,129,0.3)',
                    },
                ]),
            },
            data: chartData.lastYearList,
        },
        {
            tooltip: {
                show: false,
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(241,130,129,1)',
                },
            },
            symbolRotate: 0,
            symbolSize: [14, 6],
            symbolOffset: [9, 1],
            symbolPosition: 'start',
            data: chartData.lastYearList,
            z: 7,
        },
        {
            tooltip: {
                show: false,
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(243,75,75,1)',
                },
            },
            symbolRotate: 0,
            symbolSize: [12, 5],
            symbolOffset: [8, -1],
            symbolPosition: 'end',
            data: chartData.lastYearList,
            z: 7,
        },
        {
            z: 9,
            yAxisIndex: 1,
            name: '增幅',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
                color: '#fff',
                width: 1,
                shadowColor: '#fff',
                borderColor: 'rgba(255,189,70,1)',
                shadowBlur: 2,
            },
            lineStyle: {
                width: 1,
                color: 'rgba(255,189,70,1)',
            },
            data: chartData.rateDataOne,
        },
    ],
};
