
option = {
    title: [{
        text: '问题整改率',
        x: 'center',
        top: '82%',
        textStyle: {
            color: 'rgba(51,51,51,1)',
            fontSize: 40,
            fontWeight: '100',
        }
    }, {
        text: '60%',
        x: 'center',
        top: 'center',
        textStyle: {
            fontSize: '50',
            color: 'rgba(56,173,255,1)',
            fontFamily: 'Lato',
            foontWeight: '600',
        },
    }],
    polar: {
        radius: ['44%', '50%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
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
            barWidth: 70,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(66, 66, 66, .3)',
            },
            data: [60],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color:'rgba(56,173,255,1)'
                }
            }

        }, 
    ]
};
