var data2 = [{
                    name: "自然资源厅",
                    label: {
                        backgroundColor: '#48a9ee'
                    },
                    children: [{//子集
                        name: "娱乐场所治安管理",
                        children: [{//子集
                            name: "娱乐场所治安管理工作",
                            label: {
                                backgroundColor: '#f3857c'
                            },
                            children: [{//子集
                                name: "测试123",
                                label: {
                                    backgroundColor: '#ffd96e'
                                },
                            }]
                        }]
                    }, {
                        name: "安保工作",
                        children: [{
                            name: "输油气管道安保工作"
                        }, {
                            name: "校园安保工作"
                        }, {
                            name: "节假日、重大活动、大型群众性活动安保和敏感期社会面管控工作"
                        }]
                    }, {
                        name: "精神病人管控工作",
                        children: [{
                            name: "精神病人肇事肇祸案事件"
                        }]
                    }, {
                        name: "物流寄递业",
                        children: [{
                            name: "物流寄递业治安管理工作"
                        }]
                    }, {
                        name: "推进基层基础工作创新",
                        children: [{
                            name: "加强派出所建设"
                        }]
                    }, {
                        name: "地网建设工作",
                        children: [{
                            name: "加强二轮电动车防盗登记备案装置安装工作"
                        }]
                    }, {
                        name: "无人机管理",
                        children: [{
                            name: "加强无人机管理"
                        }]
                    }, {
                        name: "加强社会面巡逻防控",
                        children: [{
                            name: "武装联勤巡逻"
                        }]
                    }
                    ]
                }];

                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}'
                    },
                    series: [{
                        type: 'tree',
                        orient: 'vertical', 
                        name: '自然资源厅',
                        edgeShape: 'polyline',//链接线是折现还是曲线
                        data: data2,
                        top: '1%',
                        left:'1%',
                        symbolSize: 1,
                        initialTreeDepth: 10,
                        label: {
                            normal: {
                                position: 'center',
                                verticalAlign: 'middle',
                                align: 'center',
                                backgroundColor: '#99d97c',
                                color: '#fff',
                                padding: 3,
                                formatter: [
                                    '{box|{b}}'
                                ].join('\n'),
                                rich: {
                                    box: {
                                        height: 50,
                                        width:10,
                                        color: '#fff',
                                        padding: [0, 5],
                                        align: 'center'
                                    }
                                }
                            }
                        },
                        leaves: {
                            label: {
                                normal: {
                                    position: 'center',
                                    verticalAlign: 'middle',
                                    align: 'center',
                                    backgroundColor: '#f3857c',
                                    formatter: [
                                        '{box|{b}}'
                                    ].join('\n'),
                                    rich: {
                                        box: {
                                            height: 18,
                                            color: '#fff',
                                            padding: [0, 5],
                                            align: 'center'
                                        }
                                    }
                                }
                            }
                        },
                        expandAndCollapse: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    },
                    ]
                };