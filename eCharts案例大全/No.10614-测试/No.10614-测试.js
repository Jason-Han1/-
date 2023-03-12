option = {
    backgroundColor: '#fff',

    tooltip: {},
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 300,
            edgeLength: 100
        },
        roam: true,
        label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    fontSize: 30,
                    fontStyle: '600',
                }
            }
            ,
        data: [{
            "name": "考研",
            "value": 10000,
            x: 500,
            y: 56,
            "symbolSize": 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#FF8C00",
                    "borderWidth": 4,
                    "shadowBlur": 100,
                    "shadowColor": "#FF8C00",
                    "color": "#FF8C00"
                }
            }
        }, {
            "name": "兼职",
            "value": 6181,
            x: 0,
            y: 0,
            "symbolSize": 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#FF4500",
                    "borderWidth": 4,
                    "shadowBlur": 100,
                    "shadowColor": "#FF4500",
                    "color": "#FF4500",
                }
            },
            
        }, {
            "name": "食堂",
            "value": 4386,
            x: 0,
            y: 0,
            "symbolSize": 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "rgb(165, 190, 198)",
                    "borderWidth": 4,
                    "shadowBlur": 100,
                    "shadowColor": "rgb(165, 190, 198)",
                    "color": "rgb(165, 190, 198)"
                }
            }
        }, {
            "name": "家教",
            "value": 4055,
            "symbolSize": 180,
            x: 0,
            y: 0,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#4DFB37",
                    "borderWidth": 4,
                    "shadowBlur": 100,
                    "shadowColor": "#4DFB37",
                    "color": "#4DFB37"
                }
            }
        }, {
            "name": "大四",
            "value": 2467,
            x: 0,
            y: 0,
            "symbolSize": 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#00BFFF",
                    "borderWidth": 4,
                    "shadowBlur": 100,
                    "shadowColor": "#00BFFF",
                    "color": "#00BFFF"
                }
            }
        }, {
            "name": "研友",
            "value": 2244,
            x: 0,
            y: 0,
            "symbolSize": 100,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "borderColor": "#FFD700",
                    "borderWidth": 4,
                    "shadowBlur": 100,
                    "shadowColor": "#FFD700",
                    "color": "#FFD700"
                }
            }
        }],
        links:[{
            "source": "食堂",
            "target": "家教"
        },
        {
            "source": "研友",
            "target": "家教"
        },
        {
            "source": "兼职",
            "target": "家教"
        },
        {
            "source": "考研",
            "target": "家教"
        },
        {
            "source": "大四",
            "target": "家教"
        }]
    }]
}