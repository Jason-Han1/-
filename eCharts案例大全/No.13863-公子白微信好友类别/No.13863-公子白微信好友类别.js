option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "公子白微信好友类别",
        // subtext: "ZBH",
        top: "top",
        left: "center"
    },
    tooltip: {},
    // legend: [{
    //     formatter: function(name) {
    //         return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
    //     },
    //     tooltip: {
    //         show: true
    //     },
    //     selectedMode: 'false',
    //     bottom: 20,
    //     data: ['女性', '男性']
    // }],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '公子白',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 300
        },
        data: [{
                "name": "公子白",
                "symbolSize": 30,
                "draggable": "true",
                "category": "公子白",
                "value": 303
            },

            {
                "name": "女性",
                "symbolSize": 155,
                "draggable": "true",
                "category": "女性",
                "value": 155
            }, {
                "name": "男性",
                "symbolSize": 148,
                "draggable": "true",
                "category": "男性",
                "value": 148
            },

            {
                "name": "女_同级",
                "symbolSize": 84,
                "draggable": "true",
                "category": "女_同级",
                "value": 84
            }, {
                "name": "师姐",
                "symbolSize": 35,
                "draggable": "true",
                "category": "师姐",
                "value": 35
            }, {
                "name": "师妹",
                "symbolSize": 17,
                "draggable": "true",
                "category": "师妹",
                "value": 17,
                'itemStyle':{
                    color:'pink'
                }
            }, {
                "name": "女_家人亲戚",
                "symbolSize": 7,
                "category": "女_家人亲戚",
                "draggable": "true",
                "value": 7
            }, {
                "name": "女_长辈",
                "symbolSize": 12,
                "category": "女_长辈",
                "draggable": "true",
                "value": 12,
                'itemStyle':{
                    color:'skyblue'
                }
            }, {
                "name": "男_同级",
                "symbolSize": 87,
                "draggable": "true",
                "category": "男_同级",
                "value": 87
            }, {
                "name": "师兄",
                "symbolSize": 29,
                "category": "师兄",
                "draggable": "true",
                "value": 1
            }, {
                "name": "师弟",
                "symbolSize": 9,
                "draggable": "true",
                "category": "师弟",
                "value": 9
            }, {
                "name": "男_家人亲戚",
                "draggable": "true",
                "symbolSize": 7,
                "category": "男_家人亲戚",
                "value": 7
            }, {
                "name": "男_长辈",
                "draggable": "true",
                "symbolSize": 16,
                "category": "男_长辈",
                "value": 16
            },

            {
                "name": "女_同专业",
                "draggable": "true",
                "symbolSize": 26,
                "category": "女_同级",
                "value": 26
            }, {
                "name": "女_同院不同专业",
                "draggable": "true",
                "symbolSize": 7,
                "category": "女_同级",
                "value": 7
            }, {
                "name": "女_同校不同学院",
                "draggable": "true",
                "symbolSize": 18,
                "category": "女_同级",
                "value": 18
            }, {
                "name": "女_不同大学",
                "draggable": "true",
                "symbolSize": 20,
                "category": "女_同级",
                "value": 20
            }, {
                "name": "女_初高中同学",
                "symbolSize": 13,
                "category": "女_同级",
                "draggable": "true",
                "value": 13
            }, {
                "name": "男_同专业",
                "symbolSize": 15,
                "category": "男_同级",
                "draggable": "true",
                "value": 15
            }, {
                "name": "男_同院不同专业",
                "symbolSize": 27,
                "category": "男_同级",
                "draggable": "true",
                "value": 27
            }, {
                "name": "男_同校不同学院",
                "draggable": "true",
                "symbolSize": 8,
                "category": "男_同级",
                "value": 8
            }, {
                "name": "男_不同大学",
                "symbolSize": 11,
                "category": "男_同级",
                "draggable": "true",
                "value": 11
            }, {
                "name": "男_初高中同学",
                "symbolSize": 26,
                "draggable": "true",
                "category": "男_同级",
                "value": 26
            },


        ],
        links: [{
                "source": "公子白",
                "target": "女性"
            }, {
                "source": "公子白",
                "target": "男性"
            },

            {
                "source": "女性",
                "target": "女_同级"
            }, {
                "source": "女性",
                "target": "师姐"
            }, {
                "source": "女性",
                "target": "师妹"
            }, {
                "source": "女性",
                "target": "女_家人亲戚"
            }, {
                "source": "女性",
                "target": "女_长辈"
            }, {
                "source": "男性",
                "target": "男_同级"
            }, {
                "source": "男性",
                "target": "师兄"
            }, {
                "source": "男性",
                "target": "师弟"
            }, {
                "source": "男性",
                "target": "男_家人亲戚"
            }, {
                "source": "男性",
                "target": "男_长辈"
            },

            {
                "source": "女_同级",
                "target": "女_同专业"
            }, {
                "source": "女_同级",
                "target": "女_同院不同专业"
            }, {
                "source": "女_同级",
                "target": "女_同校不同学院"
            }, {
                "source": "女_同级",
                "target": "女_不同大学"
            }, {
                "source": "女_同级",
                "target": "女_初高中同学"
            }, {
                "source": "男_同级",
                "target": "男_同专业"
            }, {
                "source": "男_同级",
                "target": "男_同院不同专业"
            }, {
                "source": "男_同级",
                "target": "男_同校不同学院"
            }, {
                "source": "男_同级",
                "target": "男_不同大学"
            }, {
                "source": "男_同级",
                "target": "男_初高中同学"
            },

        ],
        categories: [{
                'name': '女性'
            }, {
                'name': '男性'
            }, {
                'name': '男_同级'
            }, {
                'name': '女_同级'
            }, {
                'name': '师兄'
            }, {
                'name': '师弟'
            }, {
                'name': '男_长辈'
            }, {
                'name': '男_家人亲戚'
            }, {
                'name': '女_家人亲戚'
            }, {
                'name': '师姐'
            }, {
                'name': '女_长辈'
            }, {
                'name': '女_同级'
            }, {
                'name': '师妹'
            }, {
                'name': '公子白'
            }, 

            // {'name':'女_同级'},{'name':'男_同级'}
        ],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',
                formatter: '{b}'

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};