var uploadedDataURL = "/asset/get/s/data-1559120606810-8K55q2kWT.png";
let Green = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#99da69' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#01babc' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
};
var dataValArray = 0.63;
var datatext = ['17.25','20','12','32','19'];
var datasubtext = ['体育意识','体育技能','体育行为','体育知识','体质健康'];
option = {
    backgroundColor: '#fff',
    title: {
        text: datatext[0]+'%',
        subtext: datasubtext[0],
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize:26,
            fontWeight:'normal',
            color: ['#67828c']
        },
        subtextStyle: {
            color: '#67828c',
            fontSize: 16,
            align: 'center',
        }
    },
    series: [{
        //渐变圆环
        name: "",
        type: "pie",
        radius: ["35%", "50%"],
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
            value: 0,
            name: "",
            itemStyle: {
                normal: {
                    color: Green
                }
            }
        }]
    },
        {
            //仪表盘样式
            name: "",
            type: "gauge",
            radius: "50%",
            startAngle: 180,
            clockwise:true,
            splitNumber: 50,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 20,
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
                value: Math.round((dataValArray*100)),
                name: ""
            }]
        },
        {
            //进度圆环
            name: 'Line 1',
            type: 'pie',
            startAngle: 180,
            clockWise: true,
            radius:['55%','56%'],
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            hoverAnimation: false,

            data: [{
                value:  Math.round((dataValArray*100)) ,
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
                    backgroundColor: {
                        image: uploadedDataURL
                    },
                    width: 16,
                    height: 16,
                    borderRadius: 20,
                    padding: 11
                }
            }, {
                value: 100- Math.round((dataValArray*100)) ,
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