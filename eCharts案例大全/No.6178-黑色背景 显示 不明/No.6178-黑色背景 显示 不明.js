 option = {
            backgroundColor: '#000',
            tooltip: {//弹窗
            trigger: 'item',
                formatter: function(params) {
                    return  params.data.datas
                   
                }
            },
            color: ['#09022C',
                '#040193',
                '#073CFE',
                '#0065C2'],
            legend: { 
                show: true,
                data: [

                ]
            },
            series: [{
                type: 'graph', 
                // name : "拓扑图", 
                layout: 'force', 
                legendHoverLink: true,
                hoverAnimation: true,
                coordinateSystem: null,
                xAxisIndex: 0, 
                yAxisIndex: 0, 
                force: {
                    repulsion: 400,
                    edgeLength: [150, 200],
                    layoutAnimation: false,
                    friction: 0.6,
                },
                cursor: "pointer", 
                roam: true,
                nodeScaleRatio: 0.6,
                draggable: true,
                focusNodeAdjacency: true,
                symbolSize: 50,
                edgeSymbolSize: 10,
                autoCurveness: 10,
                itemStyle: {
                    normal: { 
                        label: {
                            show: true
                        },
                      
                    },
                    emphasis: {
                        color: '#35afd8',
                    }
                },
                lineStyle: { 
                    normal: {
                        // color: '#31354B',
                        color: '#0a3a87',
                        width: '1',
                        type: 'solid', 
                        curveness: 0, 
                        opacity: 1,
                        
                    },
                    emphasis: {//高亮状态
                        color: '#35afd8',
                    }
                },
                label: { 
                    normal: {
                        show: false,
                        position: 'bottom',
                        textStyle: { 
                            color: '#0a3a87', 
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif', 
                            fontSize: 12, 
                        },
                    },
                    emphasis: {//高亮状态
                        textStyle: { 
                       
                            color: '#35afd8', 
                        }
                    }
                },
                edgeLabel: {
                    normal: {
                        show: false
                    },
                    emphasis: {//高亮状态

                    }
                },
                data: [    {
                "id": 0,
                "name": "node",
                "category": 0,
                "symbol": "circle",
                "symbolSize": 50,
                "type": "zone",
                "itemStyle": {
                    "normal": {
                        "color": "#0a3a87"
                    },

                },
                "label": {
                    "normal": {
                        "show": true
                    },
                },
                'datas':"其他节点颜色太暗"
            },
            {
                "id": 1,
                "name": "ssss",
                "category": 1,
                "symbol": "circle",
                "symbolSize": 20,
                "type": "cluster",
                "itemStyle": {
                    "normal": {
                        "color": "#0a3a87"
                    }
                }
            },
            {
                "id": 2,
                "name": "yyyy",
                "category": 1,
                "symbol": "circle",
                "symbolSize": 20,
                "type": "cluster",
                "itemStyle": {
                    "normal": {
                        "color": "#0a3a87"
                    }
                }
            },
            {
                "id": 3,
                "name": "eeee",
                "category": 1,
                "symbol": "circle",
                "symbolSize": 20,
                "type": "cluster",
                "itemStyle": {
                    "normal": {
                        "color": "#0a3a87"
                    }
                }
            },
            {
                "id": 4,
                "name": "eeee",
                "category": 1,
                "symbol": "circle",
                "symbolSize": 20,
                "type": "cluster",
                "itemStyle": {
                    "normal": {
                        "color": "#0a3a87"
                    }
                }
            },
            {
                "id": 5,
                "name": "eeee",
                "category": 1,
                "symbol": "circle",
                "symbolSize": 20,
                "type": "cluster",
                "itemStyle": {
                    "normal": {
                        "color": "#0a3a87"
                    }
                }
            },

        ],
                links:[
            {
                "source": 0,
                "target": 1
            },
            {
                "source": 0,
                "target": 2
            },
            {
                "source": 2,
                "target": 3
            },
            {
                "source": 2,
                "target": 4
            },
            {
                "source": 2,
                "target": 5
            },


        ],
                categories: [ 
                    {
                        name: 'a',
                        symbol: 'diamond',
                        label: { 
                        }
                    }, {
                        name: 'b',
                        symbol: 'rect'
                    }, {
                        name: 'c',
                        symbol: 'roundRect'
                    }, {
                        name: 'd',
                        symbol: 'circle'
                    },

                ]
            }]
        };