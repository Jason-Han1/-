var option = {
    backgroundColor: '#FFFFFF',
    // animation: false,
    grid: {
        left: '9%',
        right: '5%',
        bottom: '6%',
        top: '4%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['现在', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        axisTick: {
            alignWithLabel: true,
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#767676',
            fontSize: 10
        },
        interval: 1,
    }],
    yAxis: [{
        type: 'value',
        offset: 30,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#E9E9E9'
            }
        },
        axisLabel: {
            color: '#767676',
            inside: true,
            margin:4,
        },
        splitLine: false
    }],
    dataZoom: [{
        type: 'inside',
        filterMode: 'none',
        startValue: 0,
        endValue: 7,
    }],
    series: [{
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            color: '#333333'
        },
        barWidth: '24px',
        itemStyle: {
            color: function(params) {

                var aqiColorMap = {
                    Healthy: '#26AA68',
                    Moderate: '#F8C500',
                    UnhealthySensitive: '#EF7F2B',
                    Unhealthy: '#EF3F3F',
                    VeryUnhealthy: '#8E3A5B',
                    Hazardous: '#4F0B37',
                }

                if (params.value <= 50) {
                    return aqiColorMap['Healthy'];
                } else if (params.value > 50 && params.value <= 100) {
                    return aqiColorMap['Moderate'];
                } else if (params.value > 100 && params.value <= 150) {
                    return aqiColorMap['UnhealthySensitive'];
                } else if (params.value > 150 && params.value <= 200) {
                    return aqiColorMap['Unhealthy'];
                } else if (params.value > 200 && params.value <= 300) {
                    return aqiColorMap['VeryUnhealthy'];
                } else {
                    return aqiColorMap['Hazardous'];
                }
            },
            barBorderRadius: [5, 5, 0, 0]
        },
        data: [36, 50, 85, 113, 155, 100, 65, 40, 66, 100]
    }]
};