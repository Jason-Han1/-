option = {
    backgroundColor: '#252526',
    legend: {
        data: ['各项得分', '平均值'],
        top: "12%",
        left:"20%",
        orient: 'vertical',
        textStyle: {
            color: '#fff'
        },
        icon: "circle"
    },
    title: {
        text: '总分',
        subtext:'200',
        left: 'center',
        top:'46.3%',
        textStyle: {
            color:'#5ec2fe',
            fontWeight:'normal',
            fontSize: 18
        },
        subtextStyle:{
            color:'#5eeefe',
            fontWeight:'normal',
            fontSize: 16,
            lineHeight:8
        }
    },
    tooltip: {},
    radar: [{
        indicator: [{
                text: '德',
                max: 100
            },
            {
                text: '能',
                max: 100
            },
            {
                text: '勤',
                max: 100
            },
            {
                text: '绩',
                max: 100
            }
        ],
        radius: 220,
        startAngle: 90,
        splitNumber: 4,
        // shape: 'circle',
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#a7a7a7'
            },
            fontSize: 20
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(100, 100, 100,0.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0)'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#2c2c2d', '#333334', '#3a3a3b', '#333334']
            }
        },
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        data: [{
            value: [75, 60, 98, 76],
            name: '各项得分',
            symbol: 'none',
            type: 'radar',
            itemStyle: {
                normal: {
                    color: 'rgba(5, 128, 242, 1)'
                }
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.4
                }
            },
            areaStyle: {
                normal: {
                    color: '#0580f2',
                    opacity: 0.2
                }
            }
        },{
            value: [80, 50, 90, 80],
            name: '平均值',
            symbol: 'none',
            type: 'radar',
            itemStyle: {
                normal: {
                    color: 'rgba(122, 255, 201, 1)'
                }
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.4
                }
            },
            areaStyle: {
                normal: {
                    color: '#7affc9',
                    opacity: 0.2
                }
            }
        }]
    }]
}