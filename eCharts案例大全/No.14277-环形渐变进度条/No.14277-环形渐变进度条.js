option = {
    color: ['#40d738','#2235d4'],
    tooltip: {
        show: false
    },
    series: [{
        name: '任务进度',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        hoverAnimation: false,
        data: [{
            value: 20,
            name: '任务进度',
            itemStyle:{
                normal:{
                    // color: {
                    //     type: 'linear',
                    //     x: 0,
                    //     y: 0,
                    //     x2: 0,
                    //     y2: 1,
                    //     colorStops: [{
                    //         offset: 0, color: '#40d738' // 0% 处的颜色
                    //     }, {
                    //         offset: 1, color: '#2235d4' // 100% 处的颜色
                    //     }],
                    //     globalCoord: false // 缺省为 false
                    // }
// }
//                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                         offset: 0,
//                         color: '#'
//                     }, {
//                         offset: 0,
//                         color: '#'
//                     }, {
//                         offset: 0,
//                         color: '#40d738'
//                     }])
                }
            },
            label: {
                normal: {
                    formatter: '{d}%',
                    textStyle: {
                        color:'#15ce56',
                        fontSize: 38,
                        fontWeight:'bold'
                    }
                }
            },
        }, {
            value:80,
            name: '占位',
            label: {
                normal: {
                    formatter: '\n任务进度',
                    textStyle: {
                        color: '#a5b3ef',
                        fontSize: 14
                    }
                }
            },
            itemStyle:{
                normal:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#40d738' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2235d4' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
        }]
    }]
};


