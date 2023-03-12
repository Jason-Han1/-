option = {
    backgroundColor: '#001C69',
    title: {
        text: '本期购进',
        x: 'left',
        y: 'top',
        textStyle: {
            color: '#3dd4de',
            fontSize: 20,
        },
        subtext: '300吨',
        subtextStyle: {
            color: '#3dd4de',
            fontSize: 18,
        },
    },
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    // graphic: {
    //     type: 'text',
    //     left: 'center',
    //     top: 'center',
    //     style: {
    //         text: '25%',
    //         textAlign: 'center',
    //         fill: '#3dd4de',
    //         fontSize: 20,
    //         fontWeight: 'normal',
    //     }
    // },
    series: [{
        name: 'loading',
        type: 'pie',
        clockWise: true, // 是否是顺时针
        radius: ['29%', '30%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: '#3dd4de',
                shadowBlur: 10, // 阴影大小
                shadowColor: '#3dd4de' // 阴影颜色
            }
        },
        data: [{
            value: 25,
            label: {
                normal: {
                    // formatter: '{d}%',
                    formatter: function(params) {
                        console.error(params)
                        return '累计购进\n'+params.value+'%'
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: 20,
                        fontWeight: 'normal',
                        color: '#3dd4de'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#3dd4de',
                    shadowBlur: 10, // 阴影大小
                    shadowColor: '#3dd4de' // 阴影颜色
                }
            }
        }, {
            value: 100 - 75,
            itemStyle: {
                normal: {
                    color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            }
        }],
    }]
};