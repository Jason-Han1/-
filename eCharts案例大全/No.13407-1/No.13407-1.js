var data1 = [8351, 4500, 2360];
var data2 = [8790, 5700, 1800];
option = {
    legend: {
        data: ['设计', '监理', '施工'],

    },
    grid: {
        left: '8%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
        height: '70%',
    },
    xAxis: {
        type: 'value',
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [10, 50],
        },

        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 22,
            borderWidth: 20,
            interval: 10,

        },
    },
    yAxis: {
        type: 'category',
        data: ['设计', '监理', '施工'],
        axisLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
        axisLabel: {
            fontSize: 22,
            borderWidth: '20',
        },
        axisTick: {
            show: false,
        },

    },
    series: [
        {
        type: 'bar',
        itemStyle:{
                color:'#CC3433',
        },
        silent: true,
        barWidth: 40,
        barGap: '0%', // Make series be overlap
        data: [22, 12, 16,21],
        },
        
        {
        type: 'bar',
        itemStyle:{
                color:'#009999',
        },
        barWidth: 40,
        z: 10,
        data: [8790, 5700, 1800],
    }]
};