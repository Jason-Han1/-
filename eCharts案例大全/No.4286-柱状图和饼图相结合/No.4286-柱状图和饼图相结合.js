let color = 'rgba(255, 182, 4, 1)'
let value = 20
option = {
    title: [{
        text: '{a|'+value+'}{b|个}',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        textStyle: {
            
            color: '#333',
            textAlign: 'center',
            rich:{
                a:{
                   fontSize: 30,
                    fontWeight: '700',
                },
                b:{
                    fontSize: 18,
                    padding:[0,0,0,10]
                }
            }
        },
    },
    {
        text: '我是标题',
        x: '50%',
        y: '90%',
        textAlign: 'center',
        textStyle: {
            color: '#333',
            textAlign: 'center',
           fontWeight: '400',
        },
    }],
    polar: {
        radius: ['56%', '52%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
        startAngle:-90,
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
    series: [{
            name: '',
            type: 'bar',
            // roundCap: true,
            barWidth: 70,
            backgroundStyle: {
                color: '#2e2856',
            },
            data: [value],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: color
                    }, {
                        offset: 1,
                        color: '#fff'
                    }]),
                }
            }
        },
        {
            hoverAnimation: false,
            type: 'pie',
            z: 1,
            data: [100],
            radius: ['52%', '54%'],
            zlevel: -2,
            itemStyle: {
                color: color,
                borderColor: color,
                borderWidth: 0,
            },
            label: {
                normal: {
                    position: 'inside',
                    show: false,
                }
            },
        },

    ]
};