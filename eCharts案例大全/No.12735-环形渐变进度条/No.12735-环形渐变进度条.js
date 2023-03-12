option = {
    title: {
        text: '月指标',
        x: 'center',
        y: 'bottom',
        textStyle:{
                    color:'#333',
                    fontWeight:"bold",
                    fontSize:14
                },
    },
    color: ['#EBF4F7'],
    tooltip: {
        show: false
    },
    series: [{
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        hoverAnimation: false,
        data: [{
            value: 190,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#F5474A' // 0% 处的颜色
                        },{
                            offset: 0.5,
                            color: '#FDDC53' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#56B85F' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{d}%',
                    textStyle: {
                        color: '#000',
                        fontSize: 38,
                        fontWeight: 'bold'
                    }
                }
            },
        }, {
            value: 158,
            name: '占位',
            label: {
                normal: {
                    formatter: '\n158',
                    textStyle: {
                        color: '#F4781B',
                        fontSize: 14
                    }
                }
            },

        }]
    }]
};