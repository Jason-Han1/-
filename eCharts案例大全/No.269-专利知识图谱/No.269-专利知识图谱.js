option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: "专利知识图谱",
        subtext: "",
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 80, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['企业', '人才', '技术主题', '技术图谱']
    }],
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
        name: '专利',
        type: 'graph',
        layout: 'force',

        force: {
            repulsion: 400,
            gravity: 0.1
        },
        data: [{
            "name": "CN201110436259.7",
            // "x": 0,
            // y: 0,
            "symbolSize": 40,
            "draggable": "true",
            "value": 27

        }, {
            "name": "企业",
            "value": 15,
            "symbolSize": 20,
            "category": "企业",
            "draggable": "true"
        }, {
            "name": "广州金升阳科技有限公司",
            "symbolSize": 45,
            "category": "企业",
            "draggable": "true",
            "value": 1
        }, {
            "name": "竞争",
            "symbolSize": 15,
            "category": "企业",
            "draggable": "true",
            "value": 1
        }, {
            "name": "广州致远电子有限公司",
            "symbolSize": 30,
            "category": "企业",
            "draggable": "true",
            "value": 1
        }, {
            "name": "合作",
            "symbolSize": 10,
            "category": "企业",
            "draggable": "true",
            "value": 1
        },{
            "name": "南京航空航天大学",
            "symbolSize": 15,
            "category": "企业",
            "draggable": "true",
            "value": 1
        },{
            "name": "湖北大学",
            "symbolSize": 15,
            "category": "企业",
            "draggable": "true",
            "value": 1
        },{
            "name": "金升阳(怀化)科技有限公司",
            "symbolSize": 15,
            "category": "企业",
            "draggable": "true",
            "value": 1
        },{
            "name": "深圳南云微电子有限公司",
            "symbolSize": 15,
            "category": "企业",
            "draggable": "true",
            "value": 1
        }, {
            "name": "人才",
            "value": 60,
            "symbolSize": 20,
            "category": "人才",
            "draggable": "true"
        }, {
            "name": "王保均",
            "symbolSize": 45,
            "category": "人才",
            "draggable": "true",
            "value": 1
        }, {
            "name": "团队",
            "symbolSize": 20,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "唐寿雄",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "宋建峰",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "刘伟",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "王元泽",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "翁斌",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "杨声斌",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "王天均",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "余凤兵",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "高晶",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "金英姬",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "刘坤明",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "陶小丽",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "郑凌霄",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "谢德",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "郭国文",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "刘改",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "王志燊",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        },{
            "name": "尹向阳",
            "symbolSize": 15,
            "category": "人才",
            "draggable": "true",
            "value": 1
        }, {
            "name": "技术主题",
            "value": 5,
            "symbolSize": 15,
            "category": "技术主题",
            "draggable": "true"
        }, {
            "name": "变换器",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "饱和变压器",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "额定负载",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "电流尖峰",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "断时",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "工作频率",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "磁路长度",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "截面积",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "局部长度",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "闭合磁心",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "局部组成",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "铁心",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "磁场",
            "symbolSize": 10,
            "category": "技术主题",
            "draggable": "true",
            "value": 1
        }, {
            "name": "技术图谱",
            "value": 15,
            "symbolSize": 20,
            "category": "技术图谱",
            "draggable": "true"
        }, {
            "name": "变压器",
            "symbolSize": 30,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "上位概念",
            "symbolSize": 15,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "下位概念",
            "symbolSize": 15,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "邻近概念",
            "symbolSize": 15,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "变压器实验",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "变压器部件",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "变压器产品",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "电抗器",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "电容器",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "避雷器",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "互感器",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "开关设备",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "塔架",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "金具",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "绝缘子",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "电线电缆",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }, {
            "name": "输变电",
            "symbolSize": 10,
            "category": "技术图谱",
            "draggable": "true",
            "value": 1
        }],
        links: [{
            "source": "CN201110436259.7",
            "target": "企业"
        }, {
            "source": "企业",
            "target": "广州金升阳科技有限公司"
        },  {
            "source": "广州金升阳科技有限公司",
            "target": "竞争"
        }, {
            "source": "竞争",
            "target": "广州致远电子有限公司"
        }, {
            "source": "广州金升阳科技有限公司",
            "target": "合作"
        },{
            "source": "合作",
            "target": "深圳南云微电子有限公司"
        },{
            "source": "合作",
            "target": "金升阳(怀化)科技有限公司"
        },{
            "source": "合作",
            "target": "湖北大学"
        },{
            "source": "合作",
            "target": "南京航空航天大学"
        }, {
            "source": "CN201110436259.7",
            "target": "人才"
        }, {
            "source": "人才",
            "target": "王保均"
        }, {
            "source": "王保均",
            "target": "团队"
        }, {
            "source": "团队",
            "target": "唐寿雄"
        }, {
            "source": "团队",
            "target": "宋建峰"
        }, {
            "source": "团队",
            "target": "刘伟"
        }, {
            "source": "团队",
            "target": "王元泽"
        }, {
            "source": "团队",
            "target": "翁斌"
        }, {
            "source": "团队",
            "target": "杨声斌"
        }, {
            "source": "团队",
            "target": "王天均"
        }, {
            "source": "团队",
            "target": "余凤兵"
        }, {
            "source": "团队",
            "target": "高晶"
        }, {
            "source": "团队",
            "target": "金英姬"
        }, {
            "source": "团队",
            "target": "刘坤明"
        }, {
            "source": "团队",
            "target": "陶小丽"
        }, {
            "source": "团队",
            "target": "郑凌霄"
        }, {
            "source": "团队",
            "target": "郭国文"
        }, {
            "source": "团队",
            "target": "谢德"
        }, {
            "source": "团队",
            "target": "刘改"
        }, {
            "source": "团队",
            "target": "王志燊"
        }, {
            "source": "团队",
            "target": "尹向阳"
        }, {
            "source": "CN201110436259.7",
            "target": "技术主题"
        }, {
            "source": "技术主题",
            "target": "变换器"
        },{
            "source": "技术主题",
            "target": "磁场"
        },{
            "source": "技术主题",
            "target": "铁心"
        },{
            "source": "技术主题",
            "target": "局部组成"
        },{
            "source": "技术主题",
            "target": "闭合磁心"
        },{
            "source": "技术主题",
            "target": "局部长度"
        },{
            "source": "技术主题",
            "target": "截面积"
        },{
            "source": "技术主题",
            "target": "磁路长度"
        },{
            "source": "技术主题",
            "target": "工作频率"
        },{
            "source": "技术主题",
            "target": "断时"
        },{
            "source": "技术主题",
            "target": "电流尖峰"
        },{
            "source": "技术主题",
            "target": "额定负载"
        },{
            "source": "技术主题",
            "target": "饱和变压器"
        }, {
            "source": "CN201110436259.7",
            "target": "技术图谱"
        }, {
            "source": "技术图谱",
            "target": "变压器"
        }, {
            "source": "变压器",
            "target": "上位概念"
        }, {
            "source": "变压器",
            "target": "下位概念"
        }, {
            "source": "变压器",
            "target": "邻近概念"
        }, {
            "source": "上位概念",
            "target": "输变电"
        }, {
            "source": "邻近概念",
            "target": "电线电缆"
        }, {
            "source": "邻近概念",
            "target": "电抗器"
        }, {
            "source": "邻近概念",
            "target": "电容器"
        }, {
            "source": "邻近概念",
            "target": "避雷器"
        }, {
            "source": "邻近概念",
            "target": "互感器"
        }, {
            "source": "邻近概念",
            "target": "开关设备"
        }, {
            "source": "邻近概念",
            "target": "塔架"
        }, {
            "source": "邻近概念",
            "target": "金具"
        }, {
            "source": "邻近概念",
            "target": "绝缘子"
        }, {
            "source": "下位概念",
            "target": "变压器产品"
        }, {
            "source": "下位概念",
            "target": "变压器部件"
        }, {
            "source": "下位概念",
            "target": "变压器实验"
        }],
        categories: [{
            'name': '企业'
        }, {
            'name': '人才'
        }, {
            'name': '技术主题'
        }, {
            'name': '技术图谱'
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'top',

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