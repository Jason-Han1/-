option = {
      backgroundColor: '#0a1247',
    title: {
        text: '刑事案件关系挖掘——贝叶斯网络结构图'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    legend: {
        show : true,
        data : [ {
            name : '父节点',             
            icon : 'rect'
        },
        {
            name : '层级二',             
            icon : 'roundRect'
        }, {
            name : '层级三',              
            icon : 'circle'
        } ],
        textStyle: {
            color: '#292421'
        },
        icon: 'rect',
        type: 'scroll',
        orient: 'horizontal',
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10
    },
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 58,
            focusNodeAdjacency: true,
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
           categories:[ 
            {
                name : '父节点',
                symbol : 'rect',
                itemStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#fccb05'
                         }, {
                             offset: 1,
                             color: '#f5804d'
                         }]),
                         barBorderRadius: 12,
                     },
                   },
                label : {
                }
            }, {
                name : '层级二',
                symbol : 'roundRect',
                itemStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: '#41E1D4' // 0% 处的颜色
		                }, {
		                    offset: 1,
		                    color: '#10A7DB' // 100% 处的颜色
		                }], false),
		                barBorderRadius: [30, 30, 0, 0],
		                shadowBlur: 4,
		            }
		        },
            }, {
                name : '层级三',
                symbol : 'circle',
                itemStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#f0515e'
                         }, {
                             offset: 1,
                             color: '#ef8554'
                         }]),
                         barBorderRadius: 12,
                     },
                   },
            }],
            data: [{
                name: '张筱雨',
                draggable: true,
                
            }, {
                name: '张峰',
                category: 1,
                 itemStyle: {
                     normal: {
                          type: 'radial',
                        r: 0.9,
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#0c1746'
                         }, {
                             offset: 1,
                             color: '#ffec19'
                         }]),
                         barBorderRadius: 12,
                     },
                   },
                draggable: true,
            }, {
                name: '李丽',
                category: 1,
                 itemStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#fccb05'
                         }, {
                             offset: 1,
                             color: '#f5804d'
                         }]),
                         barBorderRadius: 12,
                     },
                   },
                draggable: true,
            }, {
                name: '卢茜',
                category: 1,
                 itemStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#fccb05'
                         }, {
                             offset: 1,
                             color: '#f5804d'
                         }]),
                         barBorderRadius: 12,
                     },
                   },
                draggable: true,
            }, {
                name: '张大奕',
                category: 1,
                 itemStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#fccb05'
                         }, {
                             offset: 1,
                             color: '#f5804d'
                         }]),
                         barBorderRadius: 12,
                     },
                   },
                draggable: true,
            }, {
                name: '张曦',
                category: 1,
                 itemStyle: {
                     normal: {
                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: '#fccb05'
                         }, {
                             offset: 1,
                             color: '#f5804d'
                         }]),
                         barBorderRadius: 12,
                     },
                   },
                draggable: true,
            }, {
                name: '张芳芳',
                category: 1,
                draggable: true,
            }, {
                name: '李晓旭',
                category: 1,
                draggable: true,
            }, {
                name: '李晓旭1',
                category: 1,
                draggable: true,
            }, {
                name: '李晓旭2',
                category: 1,
                draggable: true,
            }, {
                name: '李晓旭3',
                category: 1,
                draggable: true,
            }, {
                name: '李渠文',
                category: 1,
                draggable: true,
            }],
            links: [{
                source: 0,
                target: 1,
                value: '夫妻',
            }, {
                source: 0,
                target: 2,
                value: '夫妻1',
            }, {
                source: 0,
                target: 3,
                value: 0.16
            }, {
                source: 0,
                target: 4,
                value: 0.22
            }, {
                source: 0,
                target: 5,
                value: 0.25
            }, {
                source: 1,
                target: 2,
                value: '兄弟1',
            }, {
                source: 1,
                target: 3,
                value: '兄弟2',
            }, {
                source: 1,
                target: 4,
                value: '兄弟3',
            }, {
                source: 4,
                target: 5,
                value: '朋友',
            }, {
                source: 5,
                target: 6,
                value: '朋友2',
            }, {
                source: 2,
                target: 8,
                value: 0.18
            }, {
                source: 0,
                target: 12,
                value: 0.14
            }, {
                source: 6,
                target: 11,
                value: 0.12
            }, {
                source: 10,
                target: 11,
                value: 0.12
            }, {
                source: 9,
                target: 6,
                value: 0.12
            }, {
                source: 6,
                target: 3,
                value: 0.11
            },{
                source: 2,
                target: 7,
                value: 0.10
            }, {
                source: 1,
                target: 3,
                value: 0.13
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};