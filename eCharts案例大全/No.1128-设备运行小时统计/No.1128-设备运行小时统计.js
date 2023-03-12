option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: ['主机', 'NO.1辅机', 'NO.2辅机', 'NO.3辅机'],
        axisLine: {
            lineStyle: {
                color: '#7e9fb6'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#7e9fb6',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        name: '单位：万元',
        axisLabel: {
            color: '#7e9fb6',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#7e9fb6'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(126,159,182,0.12)'
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [5000, 2600, 1300, 1300],
        barWidth: '20px',
        itemStyle: {
            color:'#6EC3C9'
        },
    }]
};