var option = {
    backgroundColor: '#050038',
    title: {
        text: '90.48%',
        textStyle: {
            fontSize: 50,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: 'rgb(255, 255, 135)',
            fontSize: 30,
        },
        subtext: "↓" + '2.26%',
        subtextStyle: {
            color: '#fff',
            fontSize: 26
        },
        itemGap: 20,
        x: 'center',
        y: '50%'
    },

    graphic: [{
        type: 'group',
        left: 'center',
        top: '40%',
        children: [{
            type: 'text',
            z: 100,
            left: '10',
            style: {
                fill: '#fff',
                text: '按时办结率',
                font: '20px'
            }
        }]
    }],
    series: [{
        type: 'liquidFill',
        radius: '45%',
        center: ['50%', '50%'],
        data: [0.5, 0.5, 0.5], // data个数代表波浪数
        backgroundStyle: {
            color: {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [{
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0)'
                }, {
                    offset: 0.5,
                    color: 'rgba(255, 255, 255, .25)'
                }, {
                    offset: 0,
                    color: 'rgba(255, 255, 255, 1)'
                }],
                globalCoord: false
            },
        },
        label: {
            normal: {
                formatter: '',
            }
        },
        outline: {
            show: false,
        }
    }, ]
}