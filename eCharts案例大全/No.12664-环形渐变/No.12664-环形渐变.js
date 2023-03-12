var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
option = {
    backgroundColor: '#142058',
    title: {
        text: '电信业务经营许可\n2222',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff",
        }
    },
    tooltip: {
        trigger: 'item',
        show: false,
        formatter: "{b} : <br/>{d}%",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            radius: [180, 210],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 120,
            data: [{
                    value: 80,
                    name: '四级匹配度',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color:'rgba(221,198,148,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(233,178,82,0)'
                            }])
                            // color:{
                            //     type: 'linear',
                            //     x: 0,
                            //     y: 0,
                            //     x2: 0,
                            //     y2: 1,
                            //     colorStops: [{
                            //         offset: 0, color: 'red' // 0% 处的颜色
                            //     }, {
                            //         offset: 1, color: 'blue' // 100% 处的颜色
                            //     }],
                            //     globalCoord: false // 缺省为 false
                            // }
                        }
                    }
                // },{
                //     value: 40,
                //     name: 'zhanwei',
                //     itemStyle: {
                //         normal: {
                //             color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                //                 offset: 1,
                //                 color:'rgba(221,198,148,1)'
                //             }, {
                //                 offset: 0,
                //                 color: 'rgba(233,178,82,0)'
                //             }])
                //             // color:'rgba(233,178,82,0)'
                //         }
                //     }
                }
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            radius: [150, 180],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 120,
            data: [{
                    value: 1,
                    name: '三级匹配度',
                    itemStyle: {
                        normal: {
                            color: '#464E6D'
                        }
                    }
                },
            ]
        }
    ]
};