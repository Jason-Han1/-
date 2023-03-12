
var datas = 1;

option = {
    backgroundColor:'rgba(34,58,124,0.9)',
    title: {
        text: '90.7%',
        textStyle: {
            fontSize: 75,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'normal',
            color: '#AFD1C6',

            rich: {
                a: {
                    fontSize: 28,
                }
            }
        },
        x: 'center',
        y: '35%'
    },
    series: [{
            type: 'liquidFill',
            radius: '80%',
            data: [0.3, 0.15, 0.07],
            backgroundStyle: {
                color: '#1e222d',
            },
            outline: {
                borderDistance: 10,
                itemStyle: {
                    margin: 0,
                    borderWidth: 4,
                    borderColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#55E2FE'
                        }, {
                            offset: 1,
                            color: '#0707FF'
                        }],
                        globalCoord: false
                    },
                }
            },
            color: ['#824DE1', '#18C5FE', '#420BFF'],
            label: {
                normal: {
                    formatter: '',
                }
            }
        },

    ]
};