option = {
    backgroundColor: '#FFFFFF',
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
            color: '#767676'
        },
        interval: 1
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
            inside: true
        },
        splitLine: false
    }],
    dataZoom: [{
      type: 'inside',
      filterMode: 'empty',
      startValue: 0,
      endValue: 5,
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

                var colorMap = {
                    GREEN: '#26AA68',
                    YELLOW: '#F8C500',
                    ORIGIAL: '#FF8A00',
                    RED: '#E05A5A',
                    DARKRED: '#8E3A5B'
                };

                if (params.value >= 0 && params.value <= 50) {

                    return colorMap['GREEN'];
                } else if (params.value > 50 && params.value <= 100) {
                    return colorMap['YELLOW'];
                } else if (params.value > 100 && params.value <= 130) {
                    return colorMap['ORIGIAL'];
                } else if (params.value > 100 && params.value <= 130) {
                    return colorMap['RED'];
                } else {
                    return colorMap['DARKRED'];
                }
            },
            barBorderRadius: [5, 5, 0, 0]
        },
        data: [36, 50, 85, 113, 155, 100, 65, 40, 66, 100]
    }]
};