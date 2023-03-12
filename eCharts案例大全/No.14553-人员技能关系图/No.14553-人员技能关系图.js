// 指定图表的配置项和数据
var size = 40;
var size1 = 10;
var yy = 200;
var yy1 = 250;
option = {
    title: {
        text: "人员信息系图---意见分类",
        top: "top",
        left: "left",
        textStyle: {
            fontSize: 24,
            color: '#464646'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    backgroundColor: '#0F0C29',
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',

    // 图底部的图示
    // legend: [{
    //  formatter: function(name) {
    //      return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
    // },
    // tooltip: {
    //    show: true
    // },
    //  selectedMode: 'false',
    //  top: 20,
    //  right: 0,
    //  textStyle: {
    //      color: '#464646'
    //   },
    //data: ['用户体验度', '专业化咨询', '办事流程优化', '投诉建议', '其他', '监督', '特点', '专业']
    // }],

    series: [{
        name: '知识体系',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 30,
            gravity: 0.1,
            edgeLength: 30,
            layoutAnimation: true,
        },
        // 名称及对应位置
        data: [{
            "name": "意见分类",
            //symbol: 'image://../app_themes/assets/img/1.jpg',
            x: 10,
            y: yy,
            "symbolSize": 80,
            label: {
                normal: {
                    position: 'inside',
                    fontSize: 14,
                    color: '#fff',
                }
            },
            "draggable": "true"
        }, {
            "name": "用户体验度",
            x: 10,
            y: yy,
            "symbolSize": size,
            "category": "用户体验度",
            "draggable": "true",
            label: {
                normal: {
                    position: 'inside',
                    fontSize: 14,
                    color: '#fff',
                }
            },
        }, {
            "name": "办事结果反馈",
            x: 20,
            y: yy,
            "symbolSize": size1,
            "category": "用户体验度",
            "draggable": "true"
        }, {
            x: 30,
            y: yy1,
            "name": "系统功能缺陷",
            "symbolSize": size1,
            "category": "用户体验度",
            "draggable": "true"
        }, {
            x: 40,
            y: yy,
            "name": "线下办事便捷度",
            "symbolSize": size1,
            "category": "用户体验度",
            "draggable": "true",
            "value": 1
        }, {
            x: 50,
            y: yy,
            "name": "查询功能缺失",
            "symbolSize": size1,
            "category": "用户体验度",
            "draggable": "true",
            "value": 1
        }, {
            x: 60,
            y: yy,
            "name": "其他 ",
            "symbolSize": size1,
            "category": "用户体验度",
            "draggable": "true",
            "value": 1
        }, {
            x: 70,
            y: yy,
            "name": "办事流程优化",
            "symbolSize": size,
            "category": "办事流程优化",
            "draggable": "true",
            label: {
                normal: {
                    position: 'inside',
                    fontSize: 14,
                    color: '#fff',
                }
            },
        }, {
            x: 80,
            y: yy1,
            "name": "补件优先",
            "symbolSize": size1,
            "category": "办事流程优化",
            "draggable": "true"
        }, {
            x: 90,
            y: yy,
            "name": "预审准确度",
            "symbolSize": size1,
            "category": "办事流程优化",
            "draggable": "true"
        }, {
            x: 100,
            y: yy1,
            "name": "预约修正",
            "symbolSize": size1,
            "category": "办事流程优化",
            "draggable": "true"
        }, {
            x: 110,
            y: yy1,
            "name": "口径不一致",
            "symbolSize": size1,
            "category": "办事流程优化",
            "draggable": "true"
        }, {
            x: 120,
            y: yy1,
            "name": "非必要材料要求",
            "symbolSize": size1,
            "category": "办事流程优化",
            "draggable": "true"
        }, {
            x: 130,
            y: yy1,
            "name": "其他   ",
            "symbolSize": size1,
            "category": "办事流程优化",
            "draggable": "true"
        }, {
            x: 140,
            y: yy1,
            "name": "其他",
            "symbolSize": size,
            "category": "其他",
            "draggable": "true",
            label: {
                normal: {
                    position: 'inside',
                    fontSize: 14,
                    color: '#fff',
                }
            },
        }, {
            "name": "专业化咨询",
            x: 150,
            y: yy1,
            "symbolSize": size,
            "category": "专业化咨询",
            "draggable": "true",
            label: {
                normal: {
                    position: 'inside',
                    fontSize: 14,
                    color: '#fff',
                }
            },

        }, {
            "name": "办事指南",
            x: 170,
            y: yy1,
            "symbolSize": size1,
            "category": "专业化咨询",
            "draggable": "true"

        }, {
            "name": "材料预审",
            x: 180,
            y: yy1,
            "symbolSize": size1,
            "category": "专业化咨询",
            "draggable": "true"

        }, {
            "name": "经营范围专业化咨询",
            x: 190,
            y: yy1,
            "symbolSize": size1,
            "category": "专业化咨询",
            "draggable": "true"

        }, {
            "name": "申请材料",
            x: 200,
            y: yy1,
            "symbolSize": size1,
            "category": "专业化咨询",
            "draggable": "true"

        }, {
            "name": "其他  ",
            x: 210,
            y: yy1,
            "symbolSize": size1,
            "category": "专业化咨询",
            "draggable": "true"

        }, {
            x: 220,
            y: yy1,
            "name": "投诉建议",
            "symbolSize": size,
            "category": "投诉建议",
            "draggable": "true",
            label: {
                normal: {
                    position: 'inside',
                    fontSize: 14,
                    color: '#fff',
                }
            },
        }, ],
        // 对应关系
        links: [{
            "source": "意见分类",
            "target": "用户体验度"
        }, {
            "source": "意见分类",
            "target": "专业化咨询"
        }, {
            "source": "意见分类",
            "target": "办事流程优化"
        }, {
            "source": "意见分类",
            "target": "投诉建议"
        }, {
            "source": "意见分类",
            "target": "其他"
        }, {
            "source": "意见分类",
            "target": "监督"
        }, {
            "source": "意见分类",
            "target": "特点"
        }, {
            "source": "意见分类",
            "target": "专业"
        }, {
            "source": "用户体验度",
            "target": "办事结果反馈"
        }, {
            "source": "用户体验度",
            "target": "线下办事便捷度"
        }, {
            "source": "用户体验度",
            "target": "系统功能缺陷"
        }, {
            "source": "用户体验度",
            "target": "其他 "
        }, {
            "source": "用户体验度",
            "target": "查询功能缺失"
        }, {
            "source": "办事流程优化",
            "target": "补件优先"
        }, {
            "source": "办事流程优化",
            "target": "预审准确度"
        }, {
            "source": "办事流程优化",
            "target": "预约修正"
        }, {
            "source": "办事流程优化",
            "target": "口径不一致"
        }, {
            "source": "办事流程优化",
            "target": "非必要材料要求"
        }, {
            "source": "办事流程优化",
            "target": "其他   "
        }, {
            "source": "专业化咨询",
            "target": "办事指南"
        }, {
            "source": "专业化咨询",
            "target": "其他  "
        }, {
            "source": "专业化咨询",
            "target": "材料预审"
        }, {
            "source": "专业化咨询",
            "target": "经营范围专业化咨询"
        }, {
            "source": "专业化咨询",
            "target": "申请材料"
        }],
        // 大的节点名称
        categories: [{
            'name': '意见分类'
        }, {
            'name': '用户体验度'
        }, {
            'name': '专业化咨询'
        }, {
            'name': '办事流程优化'
        }, {
            'name': '投诉建议'
        }, {
            'name': '其他'
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {
                show: true,
                color: 'source',
                formatter: '{b}',
                fontSize: 13,
                fontStyle: '600',
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3.5,
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};