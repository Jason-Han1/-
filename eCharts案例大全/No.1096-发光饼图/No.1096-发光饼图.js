let angle = 0;//角度，用来做简单的动画效果的
 let value = 78; //图上角度数据
option = {
    backgroundColor:"#061740",
    title: {
        text: '{a|'+ value +'}{c|%}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich:{
                a: {
                    fontSize: 45,
                    color: '#ffffff',
                    fontWeight: 'bold'
                },
                c: {
                    fontSize: 45,
                    color: '#ffffff',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [
        //内环
        {
            name: "",
            type: 'custom',
            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2,
                        cy: api.getHeight() / 2,
                        r: Math.min(api.getWidth(), api.getHeight()) / 2.3 * 0.65,
                        startAngle: (0+-angle) * Math.PI / 180,
                        endAngle: (360+-angle) * Math.PI / 180
                    },
                    style: {
                        stroke: "#0CD3DB",
                        fill: "transparent",
                        lineWidth: 0.5
                    },
                    silent: true
                };
            },
            data: [0]
        },
        //外环
        {
            name: '',
            type: 'pie',
            radius: ['85%', '70%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",
                }
            },
            data: [
                {
                    value: value,
                    name: "",
                    itemStyle: {
                        normal: {
                            //外环发光
                            borderWidth: 0.5,
                            shadowBlur: 20,
                            borderColor: '#4bf3f9',
                            shadowColor: '#9bfeff',
                            color: { // 圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#4bf3f9', // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#4bf3f9', // 100% 处的颜色
                                }]
                            },
                        }
                    }
                },
                {
                    value: 100-value,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#173164"
                        }
                    }
                }
            ]
        },
    ]
};
