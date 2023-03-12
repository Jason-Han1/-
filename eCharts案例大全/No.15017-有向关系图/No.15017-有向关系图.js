option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        text: ",,,,",
        subtext: "-Acring",
        top: "top",
        left: "center"
    },
    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['计算机科学与教育软件学院', '地理科学学院', '机械与电气工程学院', '经济与统计学院', '土木工程学院', '新闻与传播学院', '外国语学院', '人文学院', '数学与信息科学学院', '工商管理学院', '法学院', '公共管理学院', '卫斯理安学院', '政治与公民教育学院', '旅游学院', '教育学院', '环境科学与工程学院', '化学化工学院', '物理与电子工程学院', '建筑与城市规划学院', '美术与设计学院', '生命科学学院', '体育学院', '音乐舞蹈学院']
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
        name: '广州大学',
        type: 'graph',
        layout: 'force',
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [0, 10],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: "{c}"
            }
        },
        force: {
            repulsion: 1000
        },
        data: [{
            "name": "A",
            "symbolSize": 20,
            "draggable": "true",
            "value": 27
        }, {
            "name": "B",
            "value": 3,
            "symbolSize": 9,
            "category": "计算机科学与教育软件学院",
            "draggable": "true"
        }, {
            "name": "计算机科学与技术",
            "symbolSize": 3,
            "category": "计算机科学与教育软件学院",
            "draggable": "true",
            "value": 1
        }, {
            "name": "网络工程",
            "symbolSize": 3,
            "category": "计算机科学与教育软件学院",
            "draggable": "true",
            "value": 1
        }, {
            "name": "软件工程",
            "symbolSize": 3,
            "category": "计算机科学与教育软件学院",
            "draggable": "true",
            "value": 1
        }, {
            "name": "舞蹈编导(教师教育)",
            "symbolSize": 3,
            "category": "音乐舞蹈学院",
            "draggable": "true",
            "value": 1
        }, {
            "name": "舞蹈编导",
            "symbolSize": 6,
            "category": "舞蹈编导",
            "draggable": "true",
            "value": 15
        }, {
            "name": "舞蹈",
            "symbolSize": 6,
            "category": "舞蹈",
            "draggable": "true",
            "value": 15
        }],
        links: [{
            "source": "广州大学",
            "target": "计算机科学与教育软件学院",
            'value':22
        }, {
            "source": "计算机科学与教育软件学院",
            "target": "计算机科学与技术",
            'value':2
        }, {
            "source": "计算机科学与教育软件学院",
            "target": "软件工程",
            'value':10
        }, {
            "source": "计算机科学与教育软件学院",
            "target": "网络工程",
            'value':5
        }, {
            "source": "广州大学",
            "target": "舞蹈编导",
            'value':5
        }, {
            "source": "计算机科学与教育软件学院",
            "target": "软件工程",
            'value':10
        }, {
            "source": "舞蹈编导",
            "target": "舞蹈编导(教师教育)",
            'value':15
        }, {
            "source": "音乐舞蹈学院",
            "target": "舞蹈编导(教师教育)",
            'value':20
            
        }],
        categories: [{ //节点分类的类目
            'name': 'HIGH'
        }, {
            'name': 'MID'
        }, {
            'name': 'LOW'
        }, {
            'name': 'SAFE'
        }, {
            'name': '美术与设计学院'
        }, {
            'name': '软件工程'
        }, {
            'name': '音乐舞蹈学院'
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