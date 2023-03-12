
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#00E7E5', '#1DBEFF'],
    legend: {
        left: 'left',
        orient: 'vertical',
        bottom: 10,
        textStyle: {
            color: '#333',
            padding: [5, 5, 5, -42],
            fontWeight: 600,
        },
        itemWidth: 50,
        itemHeight: 22,
    },
    series: [{
        radius: 120,
        name: '访问来源',
        type: 'pie',
        labelLine: {
            length:40,
            length2: 85
        },
        itemStyle: {
            borderWidth: 1,
            shadowBlur: 20,
            shadowOffsetY: 5
        },
        avoidLabelOverlap: true,
        data: [{
                value: 150,
                name: '在线',
                selected: true,
                itemStyle: {
                    color: '#129E92',
                    borderColor: '#3FFFE2',
                    shadowColor: 'rgba(63, 255, 226, 0.5)',
                },
                labelLine: {
                    lineStyle: {
                        color: '#00EAE8'
                    }
                },
                label: {
                    formatter: '{e|}{d|}\n{a|}{b|100/500}{c|}',
                    rich: {
                        a: {
                            padding: -40,
                        },
                        c: {
                            height: 20,
                            width: 1,
                            padding: [5, 0],
                            lineHeight: 60,
                            verticalAlign: 'top',
                            backgroundColor: '#00EAE8',
                        },
                        b: {
                            color:'#00E7E5',
                            backgroundColor: 'rgba(63, 255, 226, 0.2)',
                            height: 19,
                            width:47,
                            borderRadius: 0,
                            padding: [5, 15],
                            verticalAlign: 'top',
                        },
                        d:{
                            height: 1,
                            width: 58,
                            padding: [0, 0],
                            backgroundColor: '#00EAE8',
                        },
                         e: {
                            padding: -30,
                        },
                    }
                },
            },
            {
                value: 310,
                name: '离线',
                itemStyle: {
                    color: '#105BA4',
                    borderColor: '#31B4FF',
                    shadowColor: 'rgba(49, 180, 255, 0.8)',
                },
                labelLine: {
                    lineStyle: {
                        color: '#07D2FF'
                    }
                },
                label: {
                    formatter: '{d|}{e|}\n{c|}{b|70/500}{a|}',
                    rich: {
                        a: {
                            padding: -40,
                        },
                        c: {
                            height: 20,
                            width: 1,
                            padding: [5, 0],
                            lineHeight: 60,
                            verticalAlign: 'top',
                            backgroundColor: '#07D2FF',
                        },
                        b: {
                            color:'#1DBEFF',
                            backgroundColor: 'rgba(49, 180, 255, 0.2)',
                            height: 19,
                            width:47,
                            borderRadius: 0,
                            padding: [5, 15],
                            verticalAlign: 'top',
                        },
                        d:{
                            height: 1,
                            width: 58,
                            padding: [0, 0],
                            backgroundColor: '#07D2FF',
                        },
                        e: {
                            padding: -30,
                        },
                    }
                },
            },
        ]
    }]
};
