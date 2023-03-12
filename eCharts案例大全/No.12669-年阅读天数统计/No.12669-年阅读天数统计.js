var colors = [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
];
var bgColor = {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.7,
    colorStops: [{
        offset: 0,
        color: '#b6a2de' // 0% 处的颜色
    }, {
        offset: .4,
        color: '#9a7fd1' // 100% 处的颜色
    }, {
        offset: 1,
        color: '#59678c' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
};

option = {
    backgroundColor: bgColor,
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        top: '40%',
    },
    calculable: true,
    "tooltip": {
        "trigger": "item",
        "formatter": "{a}<br/>{b}<br/>年阅读率：{c}%"
    },
    "title": {
        "text": "年阅读天数统计",
        subtext: '全年阅读{r|331}天\n一年{r|91%}的时间有阅读行为',
        //"left": "left",

        subtextStyle: {
            fontSize: 22,
            align: 'center',
            color: '#DDD',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
            rich: {
                r: {
                    color: 'rgba(255,0,0,0.9)',
                    fontWeight: 'bold',
                    fontSize: 25,
                },

            }
        },
        textStyle: {
            fontSize: 30,
            align: 'center',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },
    },
    "series": [{
        "name": "年阅读天数统计",
        "type": "pie",

        "radius": [
            '30%',
            '100%'
        ],
        "avoidLabelOverlap": false,
        "startAngle": 0,
        "center": [
            "50%",
            "30%"
        ],
        "roseType": "area",
        "selectedMode": "single",
        "label": {
            "normal": {
                "show": true,
                formatter: "{b} \n{r|{c}%}",
                        rich: {
                            r: {
                                color: 'rgba(255,255,255,0.9)',
                                fontWeight: 'bold',
                                fontSize: 25,
                            },
                        },
                position: 'inside',
                
                        color:'#DDD',
                textShadowBlur: 5,
                textShadowOffsetX: 1,
                textShadowOffsetY: 2,
                textShadowColor: 'rgba(0,0,0,0.3)',
            },
            "emphasis": {
                "show": true,
                
                        color:'#DDD',
            }
        },
        itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowColor: 'rgba(0,0,0,0.3)',

        },

        "data": [{
                "value": 91,
                "name": "2018年\n{r|331}天",
                label: {
                    normal: {
                        fontSize: 30,
                        fontStyle: 'bold',
                        rich: {
                            r: {
                                color: 'rgba(255,0,0,0.9)',
                                fontWeight: 'bold',
                                fontSize: 25,
                            },
                        },
                        
                    }
                },
            },
            {
                "value": 76,
                "name": "2017年\n276天",
                label: {
                    normal: {
                        fontSize: 23,
                        color:'#DDD',
                        fontStyle: 'bold'
                    }
                },

            },
            {
                "value": 67,
                "name": "2016年\n246天",
                label: {
                    normal: {
                        fontSize: 20,
                        fontStyle: 'bold'
                    }
                },

            },
            {
                "value": 58,
                "name": "2015年\n211天",
                label: {
                    normal: {
                        fontSize: 18,
                        fontStyle: 'bold'
                    }
                },
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false,
                    }
                },

            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false,
                    }
                },
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false,
                    }
                },
            },
            {
                "value": 0,
                "name": "",
                label: {
                    normal: {
                        show: false,
                    }
                },
            }
        ]
    }]
};