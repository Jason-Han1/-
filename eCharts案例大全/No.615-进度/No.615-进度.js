option = {
    backgroundColor: "#072B79",
    tooltip: {
        formatter: "{b}{c}"
    },
    series: [{
        tooltip: {
            show: false
        },
        "name": 'wrap',
        "type": 'pie',
        "hoverAnimation": false,
        "legendHoverLink": false,
        center: ['50%','60%'],
        "radius": ['0%', '7%'],
        "z": 5,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
            "value": 100,
            itemStyle: {
                normal: {
                    color: "#072B79"
                },
                emphasis: {
                    color: "#072B79"
                }
            }
        }]
    }, {
        tooltip: {
            show: false
        },
        "name": 'wrap',
        "type": 'pie',
        "hoverAnimation": false,
        "legendHoverLink": false,
        center: ['50%','60%'],
        "radius": ['6%', '8%'],
        "z": 5,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
            "value": 100,
            itemStyle: {
                normal: {
                    color: "#24D8E7"
                },
                emphasis: {
                    color: "#24D8E7"
                }
            }
        }]
    }, {
        tooltip: {
            show: false
        },
        name: '刻度',
        type: 'gauge',
        radius: '83%',
        z: 1,
        min: 0,
        max: 1,
        center: ['50%','60%'],
        splitNumber: 5, //刻度数量
        startAngle: 180,
        endAngle: 0,
        axisLine: {
            show: true,
            lineStyle: {
                width: 5,
                color: [
                    [0.12, '#E71A6D'],
                    [0.35, '#F88168'],
                    [0.63, '#FBF76B'],
                    [0.8, '#7AD4DF'],
                    [1, '#70C27E'],
                ]
            }
        }, //仪表盘轴线
        axisLabel: {
            show: false
        }, //刻度标签。
        axisTick: {
            show: true,
            lineStyle: {
                color: 'auto',
                width: 0
            },
            length: -15
        }, //刻度样式
        splitLine: {
            show: true,
            length: 0,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        }, //分隔线样式
        detail: {
            show: false
        },
        pointer: {
            show: false
        }
    }, {
        name: '本期',
        type: 'gauge',
        radius: '80%',
        min: 0,
        max: 1,
        center: ['50%','60%'],
        data: [{
            value: 0.89,
            name: '本期'
        }],
        splitNumber: 12, //刻度数量
        startAngle: 180,
        endAngle: 0,
        z: 5,
        axisLine: {
            show: true,
            lineStyle: {
                width: 0,
                color: [
                    [0.12, '#E71A6D'],
                    [0.35, '#F88168'],
                    [0.63, '#FBF76B'],
                    [0.8, '#7AD4DF'],
                    [1, '#70C27E'],
                ]
            }
        }, //仪表盘轴线
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize:20,
            distance: -70,
            formatter:function(params){
                var value = params.toFixed(2)
                
                if(value == 0.00){
                    return '危'
                }else if(value == 0.25){
                    return '差'
                }else if(value == 0.50){
                    return '中'
                }else if(value == 0.75){
                    return '良'
                }else if(value == 1.00){
                    return '优'
                }else{
                    return ''
                }
            }
        }, //刻度标签。
        axisTick: {
            splitNumber: 10,
            show: true,
            lineStyle: {
                color: 'auto',
                width: 2
            },
            length: 20,
        }, //刻度样式
        splitLine: {
            show: true,
            length: 25,
            lineStyle: {
                color: 'auto',
                width: 5
            }
        }, //分隔线样式

        "itemStyle": {
            "normal": {
                "color": "#24D8E7" //指针颜色
            }
        },
        pointer: {
            width: 10,
            length: '80%'
        },
        detail: {
            formatter: function(params){
                return (params*100).toFixed(0) + '%'
            },
            fontSize: 50,
            color: "#fff",
            offsetCenter: ['0%', '-35%']
        },
        title: {
            offsetCenter: ['0', '-60%'], 
            fontSize: 40,
            color: "#fff",
            show: true
        },
    }]
};