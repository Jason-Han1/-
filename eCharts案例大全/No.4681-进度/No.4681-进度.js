var num = 80;
var max = 100;
option = {
    backgroundColor: '#111',
    title: [{
        text: num,
        x: 'center',
        top: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 50
        }
    }],
    polar: {
        radius: ['44%', '50%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: max,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(66, 66, 66, .3)',
            },
            data: [num],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#31E329'
                    }, {
                        offset: 1,
                        color: '#7CFA79'
                    }]),
                }
            }

        }, 
        
    ]
};