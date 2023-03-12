option = {
    series: [{
        type: 'gauge',
        splitNumber: 3,
        radius: '65%',
        min: 0,
        max: 45,
        pointer: {
            show: true,
            width:7 ,
            length: "80%"
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 25,
                color: [
                    [0.3, "#4B95F3"],
                    [0.7, "#05C397"],
                    [1, "#FDAD59"],
                ],
                borderColor:'#000',
                borderWidth:'10',
            },
        },
        axisLabel: {
            show: true,
            color: "#656565",
            fontSize: 15,
        }, //刻度标签。
        axisTick: {
            show: false,

        }, //刻度样式            
        splitLine: {
            show: false,
            length: "28%",
            lineStyle: {
                color: "#fff",
                width: 2,
            },
        }, //分隔线样式
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            value: 6.3,
            name: '占比'
        }],

    },{
        type: 'gauge',
        splitNumber: 10,
        radius: '61.5%',
        min: 0,
        max: 45,
        pointer: {
            show: true,
            width:7 ,
            length: "80%"
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 25,
                color: [
                    [0.3, "transparent"],
                    [0.7, "transparent"],
                    [1, "transparent"],
                ],
                borderColor:'#000',
                borderWidth:'10',
            },
        },
        axisLabel: {
            show: false,
        }, //刻度标签。
        axisTick: {
            show: true,
            splitNumber: 5,
            lineStyle: {
                color: "#fff",
                width: 2,
            },

        }, //刻度样式            
        splitLine: {
            show: false,
            length: "28%",
            lineStyle: {
                color: "#fff",
                width: 2,
            },
        }, //分隔线样式
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            value: 6.3,
            name: '占比'
        }],

    }, {
        type: 'pie',
        radius: ['50%', '50%'],
        center: ['50%', '76%'],
        hoverAnimation: false,
        data: [{
                name: '',
                value: 1,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    color: '#fff'
                }
            },
            { //画中间的图标
                name: '',
                value: 0,
                label: {
                    position: 'inside',
                    backgroundColor: '#fff',
                    borderRadius: 7,
                    padding: 3,
                    borderWidth: 0,
                    borderColor: '#fff'

                }
            },
        ]
    }, { // 背景圆环
        name: '',
        type: 'pie',
        radius: ['53%', '70%'],
        silent: true,
        startAngle: 225,
        labelLine: {
            normal: {
                show: false
            }
        },
        z: -1,
        data: [{
            value: 75,
            itemStyle: {
                color: '#EBF3FE',
                borderWidth: 2,
                borderColor: '#EBF3FE'
            }
        }, {
            value: 25,
            itemStyle: {
                color: 'transparent'
            }
        }]
    }]
};
