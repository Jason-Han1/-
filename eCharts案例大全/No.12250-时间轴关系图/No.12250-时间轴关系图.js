var option = {
    baseOption:{
        timeline: {
            //loop: false,
            axisType: 'category',
            show: true,
            autoPlay: false,
            playInterval: 2500,
            data: ['1', '2', '3'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            legend:{
                
            },
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                // showNextBtn: false,
                // showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
        },
        backgroundColor: '#041326',
        title:[
            {
                text: '',
                textAlign: 'center',
                // right: '3%',
                left: 150,
                bottom: 80,
                textStyle: {
                    fontSize: 70,
                    color: 'rgba(255, 255, 255, 0.9)'
                }
            },
            {
                text: "招标倾向性分析",
                subtext: "根据时间轴改变房建项目的名称及颜色、symbol、指向等",
                top: "top",
                left: "center",
                subtextStyle: {
                    color: '#ccc'
                },
                textStyle: {
                    color: '#ccc'
                },
            },    
            
        ],
        legend: [{
            formatter: function(name) {
                return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
            },
            tooltip: {
                show: true
            },
            selectedMode: 'true',
            left: 20,
            data:[
                {
                    'name': '项目类型'
                }, {
                    'name': '评标办法'
                }, {
                    'name': '父节点'
                }, {
                    'name': '定标办法'
                }, {
                    'name': '中标企业'
                }
            ]
        }],
        tooltip: {},
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
        series: [ ],
    },
    options:[
        {
            title:{
                text:'1'
            },
            series:[
                {
                    name: '招标倾向性分析',
                    type: 'graph',
                    layout: 'force',
            
                    force: {
                        repulsion: 300,
                        edgeLength: 100
                    },
                    data: [
                        {
                            "id": 0,
                            "name": "招标倾向性",
                            // "x": 0,
                            // y: 0,
                            "symbolSize": [60, 60],
                            "draggable": "false",
                            "category": "父节点",
                            "value": 200
                        }, {
                            "id": 1,
                            "name": "房建项目",
                            "value": 25,
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true"
                        }, {
                            "id": 2,
                            "name": "市政项目",
                            "symbolSize": 32,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 3,
                            "name": "装饰装修项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 4,
                            "name": "园林绿化项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 5,
                            "name": "其他项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 6,
                            "name": "定性评审法",
                            "symbolSize": 53,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 7,
                            "name": "抽签定标法",
                            "symbolSize": 26,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 8,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 9,
                            "name": "综合评估法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 10,
                            "name": "综合定性评审法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 11,
                            "name": "抽签定标法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 12,
                            "name": "低价法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 13,
                            "name": "抽签定标法",
                            "symbolSize": 26,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 14,
                            "name": "票决抽签",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 15,
                            "name": "直接票决",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 16,
                            "name": "逐轮票决",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 17,
                            "name": "直接定标",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 18,
                            "name": "随机抽取",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 19,
                            "name": "先评后抽",
                            "symbolSize": 26,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 20,
                            "name": "集体议事法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 21,
                            "name": "价格法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 22,
                            "name": "价格竞争法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 23,
                            "name": "价格偏离法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 24,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        } , {
                            "id": 25,
                            "name": "特级",
                            "symbolSize": 45,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 26,
                            "name": "一级",
                            "symbolSize": 30,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 27,
                            "name": "二级",
                            "symbolSize": 25,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 28,
                            "name": "三级",
                            "symbolSize": 20,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 29,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }
                    ],
                    links: [
                        {
                            "source": "0",
                            "target": "1"
                        }, {
                            "source": "0",
                            "target": "2"
                        }, {
                            "source": "0",
                            "target": "3"
                        }, {
                            "source": "0",
                            "target": "4"
                        }, {
                            "source": "0",
                            "target": "5"
                        }, {
                            "source": "1",
                            "target": "6"
                        }, {
                            "source": "1",
                            "target": "7"
                        }, {
                            "source": "1",
                            "target": "8"
                        }, {
                            "source": "2",
                            "target": "9"
                        }, {
                            "source": "2",
                            "target": "10"
                        }, {
                            "source": "2",
                            "target": "11"
                        }, {
                            "source": "3",
                            "target": "12"
                        }, {
                            "source": "6",
                            "target": "13"
                        }, {
                            "source": "6",
                            "target": "14"
                        }, {
                            "source": "6",
                            "target": "15"
                        }, {
                            "source": "7",
                            "target": "16"
                        }, {
                            "source": "7",
                            "target": "17"
                        }, {
                            "source": "8",
                            "target": "18"
                        }, {
                            "source": "9",
                            "target": "19"
                        }, {
                            "source": "9",
                            "target": "20"
                        }, {
                            "source": "10",
                            "target": "21"
                        }, {
                            "source": "10",
                            "target": "22"
                        }, {
                            "source": "11",
                            "target": "23"
                        }, {
                            "source": "12",
                            "target": "24"
                        }, {
                            "source": "14",
                            "target": "25"
                        }, {
                            "source": "14",
                            "target": "26"
                        }, {
                            "source": "14",
                            "target": "27"
                        }, {
                            "source": "14",
                            "target": "28"
                        }, {
                            "source": "14",
                            "target": "29"
                        }
                    ],
                    categories: [
                        {
                            'name': '项目类型'
                        }, {
                            'name': '评标办法'
                        }, {
                            'name': '父节点'
                        }, {
                            'name': '定标办法'
                        }, {
                            'name': '中标企业'
                        }
                    ],
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
                }
            ]
        },
        {
            title:{
                text:'2'
            },
            series:[
                {
                    name: '招标倾向性分析',
                    type: 'graph',
                    layout: 'force',
            
                   force: {
                        repulsion: 300,
                        edgeLength: 100
                    },
                    data: [
                        {
                            "id": 0,
                            "name": "招标倾向性",
                            // "x": 0,
                            // y: 0,
                            "symbolSize": [60, 60],
                            "symbolSize": [120, 120],//2时 指标倾向性放大
                            "draggable": "false",
                            "category": "父节点",                
                            "value": 200
                        }, {
                            "id": 1,
                            "name": "房建项目",
                            "value": 25,
                            "symbolSize": 80,//2时 房建项目 放大
                            "category": "项目类型",
                            "draggable": "true"
                        }, {
                            "id": 2,
                            "name": "市政项目",
                            "symbolSize": 32,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 3,
                            "name": "装饰装修项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 4,
                            "name": "园林绿化项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 5,
                            "name": "其他项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 6,
                            "name": "定性评审法",
                            "symbolSize": 53,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 7,
                            "name": "抽签定标法",
                            "symbolSize": 26,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 8,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 9,
                            "name": "综合评估法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 10,
                            "name": "综合定性评审法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 11,
                            "name": "抽签定标法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 12,
                            "name": "低价法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 13,
                            "name": "抽签定标法",
                            "symbolSize": 26,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 14,
                            "name": "票决抽签222222222222222222222222222",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 15,
                            "name": "直接票决",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 16,
                            "name": "逐轮票决",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 17,
                            "name": "直接定标",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 18,
                            "name": "随机抽取",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 19,
                            "name": "先评后抽",
                            "symbolSize": 26,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 20,
                            "name": "集体议事法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 21,
                            "name": "价格法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 22,
                            "name": "价格竞争法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 23,
                            "name": "价格偏离法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 24,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        } , {
                            "id": 25,
                            "name": "特级",
                            "symbolSize": 45,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 26,
                            "name": "一级",
                            "symbolSize": 30,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 27,
                            "name": "二级",
                            "symbolSize": 25,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 28,
                            "name": "三级",
                            "symbolSize": 20,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 29,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }
                    ],
                    links: [
                        {
                            // "source": "0",
                            "source": "2",//2时，房建项目指向市政项目
                            "target": "1"
                        }, {
                            "source": "0",
                            "target": "2"
                        }, {
                            "source": "0",
                            "target": "3"
                        }, {
                            "source": "0",
                            "target": "4"
                        }, {
                            "source": "0",
                            "target": "5"
                        }, {
                            "source": "1",
                            "target": "6"
                        }, {
                            "source": "1",
                            "target": "7"
                        }, {
                            "source": "1",
                            "target": "8"
                        }, {
                            "source": "2",
                            "target": "9"
                        }, {
                            "source": "2",
                            "target": "10"
                        }, {
                            "source": "2",
                            "target": "11"
                        }, {
                            "source": "3",
                            "target": "12"
                        }, {
                            "source": "6",
                            "target": "13"
                        }, {
                            "source": "6",
                            "target": "14"
                        }, {
                            "source": "6",
                            "target": "15"
                        }, {
                            "source": "7",
                            "target": "16"
                        }, {
                            "source": "7",
                            "target": "17"
                        }, {
                            "source": "8",
                            "target": "18"
                        }, {
                            "source": "9",
                            "target": "19"
                        }, {
                            "source": "9",
                            "target": "20"
                        }, {
                            "source": "10",
                            "target": "21"
                        }, {
                            "source": "10",
                            "target": "22"
                        }, {
                            "source": "11",
                            "target": "23"
                        }, {
                            "source": "12",
                            "target": "24"
                        }, {
                            "source": "14",
                            "target": "25"
                        }, {
                            "source": "14",
                            "target": "26"
                        }, {
                            "source": "14",
                            "target": "27"
                        }, {
                            "source": "14",
                            "target": "28"
                        }, {
                            "source": "14",
                            "target": "29"
                        }
                    ],
                    categories: [
                        {
                            'name': '项目类型'
                        }, {
                            'name': '评标办法'
                        }, {
                            'name': '父节点'
                        }, {
                            'name': '定标办法'
                        }, {
                            'name': '中标企业'
                        }
                    ],
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
                }
            ]
        },
        {
            title:{
                text:'3'
            },
            series:[
                {
                    name: '招标倾向性分析',
                    type: 'graph',
                    layout: 'force',
            
                    force: {
                        repulsion: 300,
                        edgeLength: 100
                    },
                    data: [
                        {
                            "id": 0,
                            "name": "招标倾向性",
                            // "x": 0,
                            // y: 0,
                            "symbolSize": [60, 60],
                            "symbolSize": [130, 130],//3时 指标倾向性放大
                            "draggable": "false",
                            "category": "父节点",                
                            "value": 200
                        }, {
                            "id": 1,
                            "name": "房建项目",
                            "value": 25,
                            "symbolSize": 90,//3时 房建项目 放大
                            "category": "项目类型",
                            "category": "中标企业",//，改为 中标 类
                            "draggable": "true"
                        }, {
                            "id": 2,
                            "name": "市政项目",
                            "symbolSize": 32,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 3,
                            "name": "装饰装修项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 4,
                            "name": "园林绿化项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 5,
                            "name": "其他项目",
                            "symbolSize": 40,
                            "category": "项目类型",
                            "draggable": "true",
                            "value": 15
                        }, {
                            "id": 6,
                            "name": "定性评审法",
                            "symbolSize": 53,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 7,
                            "name": "抽签定标法",
                            "symbolSize": 26,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 8,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 9,
                            "name": "综合评估法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 10,
                            "name": "综合定性评审法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 11,
                            "name": "抽签定标法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 12,
                            "name": "低价法",
                            "symbolSize": 45,
                            "category": "评标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 13,
                            "name": "抽签定标法",
                            "symbolSize": 26,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, 
                        {
                            "id": 14,
                            "name": "票决抽签33333333333333333333333333",
                            symbol :'arrow',
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10,
                            itemStyle:{
                                color:'red'
                            },
                            label:{
                                color:'red',
                                fontSize:16
                            }
                        }, 
                        {
                            "id": 15,
                            "name": "直接票决",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 16,
                            "name": "逐轮票决",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 17,
                            "name": "直接定标",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 18,
                            "name": "随机抽取",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 19,
                            "name": "先评后抽",
                            "symbolSize": 26,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 20,
                            "name": "集体议事法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 21,
                            "name": "价格法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 22,
                            "name": "价格竞争法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 23,
                            "name": "价格偏离法",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 24,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "定标办法",
                            "draggable": "true",
                            "value": 10
                        } , {
                            "id": 25,
                            "name": "特级",
                            "symbolSize": 45,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 26,
                            "name": "一级",
                            "symbolSize": 30,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 27,
                            "name": "二级",
                            "symbolSize": 25,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }, {
                            "id": 28,
                            "name": "三级",
                            "symbolSize": 20,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                
                        }, {
                            "id": 29,
                            "name": "其他",
                            "symbolSize": 45,
                            "category": "中标企业",
                            "draggable": "true",
                            "value": 10
                        }
                    ],
                    links: [
                        {
                            "source": "0",
                            "target": "1"
                        }, {
                            "source": "0",
                            "target": "2"
                        }, {
                            "source": "0",
                            "target": "3"
                        }, {
                            "source": "0",
                            "target": "4"
                        }, {
                            "source": "0",
                            "target": "5"
                        }, {
                            "source": "1",
                            "target": "6"
                        }, {
                            "source": "1",
                            "target": "7"
                        }, {
                            "source": "1",
                            "target": "8"
                        }, {
                            "source": "2",
                            "target": "9"
                        }, {
                            "source": "2",
                            "target": "10"
                        }, {
                            "source": "2",
                            "target": "11"
                        }, {
                            "source": "3",
                            "target": "12"
                        }, {
                            "source": "6",
                            "target": "13"
                        }, {
                            "source": "6",
                            "target": "14"
                        }, {
                            "source": "6",
                            "target": "15"
                        }, {
                            "source": "7",
                            "target": "16"
                        }, {
                            "source": "7",
                            "target": "17"
                        }, {
                            "source": "8",
                            "target": "18"
                        }, {
                            "source": "9",
                            "target": "19"
                        }, {
                            "source": "9",
                            "target": "20"
                        }, {
                            "source": "10",
                            "target": "21"
                        }, {
                            "source": "10",
                            "target": "22"
                        }, {
                            "source": "11",
                            "target": "23"
                        }, {
                            "source": "12",
                            "target": "24"
                        }, {
                            "source": "14",
                            "target": "25"
                        }, {
                            "source": "14",
                            "target": "26"
                        }, {
                            "source": "14",
                            "target": "27"
                        }, {
                            "source": "14",
                            "target": "28"
                        }, {
                            "source": "14",
                            "target": "29"
                        }
                    ],
                    categories: [
                        {
                            'name': '项目类型'
                        }, {
                            'name': '评标办法'
                        }, {
                            'name': '父节点'
                        }, {
                            'name': '定标办法'
                        }, {
                            'name': '中标企业'
                        }
                    ],
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
                }
            ]
        },
    ]
};