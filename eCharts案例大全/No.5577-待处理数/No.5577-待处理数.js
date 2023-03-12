option = {
    backgroundColor: 'rgb(20,28,52)',
    title: {
        text: '待处理',
        x: 'center',
        y: '55%',
        itemGap: 10,
        textStyle: {
            color: '#37FFD5',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 24
        },
        subtextStyle: {
            color: '#37FFD5',
            fontWeight: 'bolder',
            fontSize: 24,
            fontFamily: '微软雅黑'
        }
    },
    series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['70%', '85%'],
            x: '0%',
            tooltip: {
                show: false
            },
            data: [{
                    name: '达成率',
                    value: 79,
                    itemStyle: {
                        color: 'rgba(55,255,213,0.8)'
                    },
                    hoverAnimation: false,
                    label: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            fontFamily: '微软雅黑',
                            fontWeight: 'bolder',
                            color: '#B7E1FF',
                            fontSize: 24
                        }
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    name: '79%',
                    value: 21,
                    itemStyle: {
                        color: 'rgba(55,255,213,0.1)'
                    },
                    hoverAnimation: false,
                    label: {
                        show: true,
                        position: 'center',
                        padding: 20,
                        textStyle: {
                            fontFamily: '微软雅黑',
                            fontSize: 24,
                            color: '#37FFD5'
                        }
                    },
                    labelLine: {
                        show: false
                    }
                }
            ]
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['90%', '95%'],
            x: '0%',
            hoverAnimation: false,
            data: [{
                value: 100,
                itemStyle: {
                    color: 'rgba(55,255,213,0.3)'
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }]
        },
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['59%', '65%'],
            x: '0%',
            hoverAnimation: false,
            data: [{
                value: 100,
                itemStyle: {
                    color: 'rgba(55,255,213,0.3)'
                },
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }]
        }
    ]
};