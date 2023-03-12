 var dataVal = 70;
    var datasubtext = "测试";
    let Green = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#99da69' // 0% 处的颜色
        }, {
            offset: dataVal / 100,
            color: '#01babc' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    };


    option = {
         backgroundColor:"#000",
        title: {
            text: datasubtext,
            x: 'center',
            y: '65%',
            textStyle: {

                color: '#ffffff',
                fontSize:28,
            },

        },
        series: [{
           
            //渐变圆环
            name: "",
            type: "pie",
            center:["50%", "42%"],
            radius: ["25%", "36%"],
            startAngle: 180,
            hoverAnimation: false,
            avoidLabelOverlap: true,
            z: 0,
            zlevel: 0,
            label: {
                show: false,
                normal: {show: false}
            },
            data: [{
                value: dataVal,
                name: "",
                itemStyle: {
                    normal: {
                        color: Green
                    }
                },
                label: {
                    normal: {
                        formatter: function(params){
                            return '{title|'+params.value+'}'+'{cell|%}';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {

                            rich:{
                                title:{
                                    fontSize:36,
                                    fontWeight:'bold',
                                    fontFamily:'Adobe Heiti Std',
                                    color: ['#ffffff'],
                                },
                                cell:{
                                    fontSize:12,
                                    fontWeight:'bold',
                                    fontFamily:'Adobe Heiti Std',
                                    color: ['#ffffff'],
                                    padding:[10,0,0,5]
                                }
                            }

                        }
                    }
                },
            }]
        },
            {
                //仪表盘样式
                name: "",
                type: "gauge",
                center:["50%", "42%"],
                radius: "40%",
                startAngle: 180,
                clockwise:true,
                splitNumber: 50,
                hoverAnimation: true,
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 40,
                    lineStyle: {
                        width: 1,
                        color: "#fff"
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                detail: {
                    show: false
                },
                data: [{
                    value: Math.round((dataVal)),
                    name: ""
                }]
            },
            {
                //进度圆环
                name: 'Line 1',
                type: 'pie',
                startAngle: 180,
                center:["50%", "42%"],
                clockWise: true,
                radius:['40%','41%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,

                data: [{
                    value:  Math.round((dataVal)) ,
                    itemStyle: {
                        normal: {
                            color: '#20da97'
                        }
                    }
                },{//画中间的图标
                    name: "",
                    value: 0,
                    label: {
                        position:'inside',

                        width: 16,
                        height: 16,
                        borderRadius: 20,
                        padding: 11
                    }
                }, {
                    value: 100- Math.round((dataVal)) ,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: 'transparent', //未完成的圆环的颜色
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }
                ]
            }
        ]
    };