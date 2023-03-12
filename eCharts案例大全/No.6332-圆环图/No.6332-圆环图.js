var chartData = [50];
option = {
    backgroundColor: '#487AFF',
    title: {
        text: `{value|${chartData}}{unit|%}`,
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                value: {
                    fontSize: 30,
                    color: '#fff',
                    fontWeight: 700,
                    fontFamily: 'DIN'
                },
                unit: {
                    fontSize: 14,
                    color: '#fff',
                    padding: [0, 0, 6, 1],
                    fontWeight: 700
                }
            }
        }
    },
    polar: {
        radius: ['0%', '100%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: false,
    },
    series: [{
        name: '',
        type: 'bar',
        roundCap: true,
        barWidth: 20,
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(255, 255, 255, .2)',
            shadowBlur: 20,
            shadowColor: 'rgba(0,0,0,.6)',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
        },
        data: chartData,
        coordinateSystem: 'polar',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#ffffff'
                }, {
                    offset: 1,
                    color: '#B1E1FF'
                }]),
            }
        }
    }]
};