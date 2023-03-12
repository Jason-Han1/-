	var option = {
	    tooltip: {
	        show: false
	    },
	    animation: false,
	    series: [{
	        type: 'graph',
	        layout: 'force',
	        symbol: "circle",
	        symbolSize: 50,
	        roam: false,
	        cursor: 'hand',
	        edgeSymbol: ['circle', 'arrow'],
	        edgeSymbolSize: [0, 10],
	        focusNodeAdjacency: false,
	        edgeLabel: {
	            normal: {
	                show: true,
	                textStyle: {
	                    fontSize: 15
	                },
	                formatter: "{c}"
	            }
	        },
	        lineStyle: {
	            normal: {
	                opacity: 1,
	                width: 1,
	                curveness: 0.5
	            }
	        },
	        label: {
	            normal: {
	                show: true,
	                position: [-18, -2],
	                formatter: "\n     {a|?}\n\n{b}",
	                rich: {
	                    a: {
	                        color: 'white',
	                        lineHeight: 10,
	                        fontSize: 30,
	                        fontFamily: 'iconfont'
	                    }
	                },
	                textStyle: {
	                    fontSize: 20
	                }
	            }
	        },
	        force: {
	            repulsion: 3500
	        },
	        categories: [{
	            name: '企业用户',
	            itemStyle: {
	                normal: {
	                    color: "#009800"
	                }
	            }
	        }, {
	            name: '政府用户',
	            itemStyle: {
	                normal: {
	                    color: "#4592FF"
	                }
	            }
	        }],
	        data: [{
	                name: '评估平台',
	                label: {
	                    show: true
	                },
	                draggable: true,
	                cursor: 'hand',
	                itemStyle: {
	                    normal: {
	                        color: '#f90',
	                        label: {
	                            show: true,
	                            position: 'bottom',
	                            textStyle: {
	                                color: '#f90'
	                            }
	                        }
	                    }
	                }
	            },
	            {
	                name: '企业填报',
	                category: 0,
	                itemStyle: {
	                    normal: {
	                        color: 'red'
	                    },
	                    emphasis: {
	                        color: "#000"
	                    }
	                }
	            },
	            {
	                name: '调查计划',
	                category: 1
	            },
	            {
	                name: '统计方案',
	                category: 1,
	                draggable: true
	            },
	            {
	                name: '评估体系',
	                category: 0,
	                draggable: false
	            },
	            {
	                name: '系统管理',
	                category: 0,
	                draggable: true
	            }
	        ],
	        links: [{
	                source: '评估平台',
	                target: '企业填报',
	                value: "企业用户",
	                lineStyle: {
	                    normal: {
	                        color: '#38f',
	                        curveness: 0.8
	                    }
	                },
	                label: {
	                    normal: {
	                        textStyle: {
	                            color: '#07ac72'
	                        }
	                    }
	                }
	            },
	            {
	                source: '评估平台',
	                target: '调查计划',
	                value: "政府用户"
	            },
	            {
	                source: '评估平台',
	                target: '统计方案',
	                value: "政府用户"
	            },
	            {
	                source: '评估平台',
	                target: '评估体系',
	                value: "评估专家"
	            },
	            {
	                source: '评估平台',
	                target: '系统管理',
	                value: "管理员"
	            }
	        ]
	    }]
	};