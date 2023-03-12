let seriesData = [];
let Xdata = [
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00',
];
let series = [
   [['01:00', 10], [ '02:00', 12], [ '03:00', 12], [ '04:00', 135],null,[ '08:00', 135],[ '09:00', 135],[ '10:00', 135]],
   [[ '04:00', 135],['05:00', 10], [ '06:00', 100], [ '07:00', 120], [ '08:00', 135]],
];
let colors = [
    ['rgba(34,143,254,1)', 'rgba(34,143,254,0.7)', 'rgba(34,143,254,0.1)'],
    ['rgba(254,0,0,1)', 'rgba(254,0,0,0.7)', 'rgba(254,0,0,0.1)'],
];
let line = ['开机', '关机',];
line.map((item, index) => {
    seriesData.push({
        name: item,
        type: 'line',
        showSymbol: false,
        data: series[index],
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
                            color: colors[index][1],
                        },
                        {
                            offset: 1,
                            color: colors[index][2],
                        },
                    ],
                    false
                ),
            },
        },
        itemStyle: {
            normal: {
                color: colors[index][0],
            },
        },
        lineStyle: {
            width: 1,
        },
    });
});

option = {
    legend: {
        show: true,
    },
    grid: {
        show: false,
        width: '100%',
        left: 50,
        right: 50,
        bottom: '10%',
        top: '10%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
        },

        textStyle: {
            fontSize: 14,
        },
    },
    xAxis: {
        type: 'category',
          interval:5,
        boundaryGap: false,
        axisLabel: {
            show: true,
            color: 'red',
            fontSize: 14,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(73, 163, 255, 1)',
                width: 1,
            },
        },
        axisTick: {
            show: false,
        },
         data: Xdata,
    },
    yAxis: 
        {
            type: 'value',
            nameTextStyle: {
                color: 'red',
                padding: [0, 0, 0, 0],
            },
            axisLabel: {
                show: true,
                color: 'red',
                fontSize: 14,
            },
            axisLine: {
                lineStyle: {
                    color: '#344755',
                    width: 0,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(20, 82, 129, 1)',
                    width: 0.5,
                },
            },
            axisTick: {
                show: false,
            },
        },
    
    series: seriesData,
};
