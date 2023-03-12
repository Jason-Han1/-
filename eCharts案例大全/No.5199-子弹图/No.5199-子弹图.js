option = {
    title: {
        text: '子弹图',
        subtext: '虚拟数据'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value', 
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['PM2.5', 'CO', 'CO2', 'O3', 'SO', 'all']
    },
    series: [{
            name: '2011年',
            type: 'bar',
            barWidth: 28,
            zlevel: 2,
            data: [183, 239, 290, 104, 234, 630]
        },
        {
            name: '2012年',
            type: 'bar',
            barWidth: 40,
            barGap: '-120%',
            data: [125, 308, 310, 121, 134, 481]
        }
    ]
};