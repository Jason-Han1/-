var img = 'path://M12 0l-12 16h12l-8 16 28-20h-16l12-12z'
var option = {
    xAxis: {
        // show: false,
        position: 'bottom',
        type: 'value',
        show: false
        // data: ['新都区', '锦江区', 'B4', 'B5', 'N', 'D4']
    },
    yAxis: {
        type: 'category',
        data: ['新都区', '锦江区', 'B4', 'B5', 'N'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            type: 'pictorialBar',
            name: 'all',
            hoverAnimation: true,
            label: {
                show: false,
                position: 'top',
                // formatter: '{c} m',
                fontSize: 16,
                color: '#e54035'
            },
            symbol: img,
            symbolRepeat: true,
            animationDelay: function (dataIndex, params) {
                return params.index * 30;
            },
            symbolSize: ['10%', '20%'],
            symbolOffset: [0, 0],
            symbolMargin: '200%',
            data: [900, 500, 300, 600, 800],
            markLine: {
                symbol: ['none', 'none'],
                label: {
                    show: false
                },
                lineStyle: {
                    color: '#e54035',
                    width: 2
                },
                data: [{
                    yAxis: 8844
                }]
            }
        }
    ]
}