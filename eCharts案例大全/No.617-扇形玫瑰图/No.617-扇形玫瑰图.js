/*
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
请不要直接cv发布谢谢，至少保证有你自己的东西在里面，一点改动没有，直接cv让人恶心
重要的事情说三遍，没有脸的可以直接cv发布哈
*/
option = {
    backgroundColor: 'rgb(43, 51, 59)',
    calculable: true,
    "tooltip": {
        "trigger": "item",
        "formatter": "{a}<br/>{b}:{c}/月"
    },
    "title": {
        "text": "平均工资分布",
        "left": "center",
        "top": 40,
        "textStyle": {
            "color": "#ccc",
            fontSize: 40
        }
    },
    legend:{
       data: ['分段一', '分段二', '分段三', '分段四', '分段五', '分段六','分段七','分段八','分段九'],
        textStyle:{
            color:'white'
        }
    },
    "calculable": true,
    "series": [{
        name: '半圆',
        type: 'pie',
        radius: ['0%', '5%'],
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '半圆',
                label: {
                    show: false
                }
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第一条圆弧',
        type: 'pie',
        radius: ['9.8%', '10%'],
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第一条圆弧',
                label: {
                    show: false
                }
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第二条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['19.8%', '20%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第二条圆弧',

            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]

    }, {
        name: '第三条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['29.8%', '30%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第三条圆弧',

            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }

        ]
    }, {
        name: '第四条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['39.8%', '40%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第四条圆弧',
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第五条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['49.8%', '50%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第五条圆弧',

            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        name: '第六条圆弧',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: ['59.8%', '60%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '500',
                name: '第六条圆弧',
            },
            {
                value: '500',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    }, {
        "name": "工作类型",
        "type": "pie",
        "radius": [
            37,
            255
        ],
        "avoidLabelOverlap": false,
        "startAngle": 0,
        "center": [
            "50.1%",
            "50%"
        ],
        "roseType": "area",
        "selectedMode": "single",
        "label": {
            "normal": {
                "show": true,
                "formatter": "{c}/月",
                position: 'inside',
            },
            "emphasis": {
                "show": true
            }
        },
        "labelLine": {
            "normal": {
                "show": false,
            }
        },
        "data": [{
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }

            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }

            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false
                    }

                }
            }, {
                "value": 1000,
                "name": "分段一",
                 label:{
                    normal:{
                           rotate:170//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#f845f1",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 1500,
                "name": "分段二",
                 label:{
                    normal:{
                           rotate:150//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#ad46f3",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 2000,
                "name": "分段三",
                 label:{
                    normal:{
                           rotate:130//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#5045f6",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 2500,
                "name": "分段四",
                 label:{
                    normal:{
                           rotate:110//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#4777f5",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 3000,
                "name": "分段五",
                 label:{
                    normal:{
                           rotate:90//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#44aff0",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 3500,
                "name": "分段六",
                 label:{
                    normal:{
                           rotate:70//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#45dbf7",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 4000,
                "name": "分段七",
                 label:{
                    normal:{
                           rotate:50//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#f6d54a",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 4500,
                "name": "分段八",
                 label:{
                    normal:{
                           rotate:30//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#f69846",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },
            {
                "value": 5000,
                "name": "分段九",
                 label:{
                    normal:{
                           rotate:10//文字旋转角度，新版本只能单独设置
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": "#ff4343",
                        borderWidth: 3,
                        borderColor: "rgb(43, 51, 59)",
                    }
                }
            },

        ]
    }]
};