/*
 * 仪表盘所需数据
 */
var data = {
    title: '仪表盘',
    value: 85.4,
    color: {
        pieMini: '#ffca1c', //小圆形颜色
        pieMiniMini: '#fff', //小小圆形颜色
        piePlus: '#5DD1FA', //大圆形颜色
        value: '#687284', //底部数值颜色
    },
}
//////////////////////////////////////////////////

option = {
    backgroundColor: '#fff',
    title: {
        show: true,
        text: data.title || "仪表盘",
        left: '15px',
        top: '10px',
        textStyle: {
            color: '#414957',
            fontSize: 16,
            fontFamily: '"Microsoft Yahei","微软雅黑"',
        }
    },
    series: [{
            "name": "仪表盘",
            "type": "gauge",
            "splitNumber": 10,
            "axisLine": {
                "lineStyle": {
                    "color": [
                        [data.value / 100, data.color.piePlus],
                        [1, "#f7f9fc"]
                    ],
                    "width": 40
                }
            },
            axisLabel: {
                show: false,
            },
            "axisTick": {
                show: false,

            },
            "splitLine": {
                "show": false,
            },
            "itemStyle": {
                show: false,
            },
            "detail": {
                "formatter": function(value) {
                    if (value != 0) {
                        var num = Math.round(value * 10) / 10;
                        return parseFloat(num).toFixed(1);
                    } else {
                        return 0;
                    }
                },
                "offsetCenter": [0, "70%"],
                "textStyle": {
                    "fontSize": 24,
                    fontWeight: '700',
                    "color": data.color.value || '#83af98'
                }
            },
            "title": {
                "offsetCenter": [0, "100%"]
            },
            "data": [{
                "name": "",
                "value": data.value,
            }],
            pointer: {
                show: true,
                length: '75%',
                width: 20, //指针粗细
            },
        },
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['6%', '10%'],
            "z": 10,
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
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "red"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: data.color.pieMini || "#fc9d9a"
                    },
                    emphasis: {
                        color: data.color.pieMini || "#fc9d9a"
                    }
                }
            }]
        },
        {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', '6%'],
            "z": 10,
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
                "value": 0,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "red"
                    }
                }
            }, {
                "value": 100,
                "name": '2',
                itemStyle: {
                    normal: {
                        color: data.color.pieMiniMini || "#fff"
                    },
                    emphasis: {
                        color: data.color.pieMiniMini || "#fff"
                    }
                }
            }]
        },
    ]
}