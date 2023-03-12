option = {

		    title: {
		        text: "IPFS分布式存储模型",
		        top: "top",
		        left: "center"
		    },
		    itemStyle: {
		        normal: {
		            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                offset: 0,
		                color: '#157eff'
		            }, {
		                offset: 1,
		                color: '#35c2ff'
		            }]),
		        },
		        shadowBlur: 10
		    },
		    textStyle: {
		        color: '#333',
		        fontSize: 16,
		        fontWeight: 600,
		    },
		    legend: [{
		        formatter: function(name) {
		            return echarts.format.truncateText(name, 200, '12px', '…');
		        },
		        tooltip: {
		            show: true
		        },
		        selectedMode: 'false',
		        bottom: 20,
		    }],
		    animationDuration: 1500,
		    animationEasingUpdate: 'quinticInOut',
		    xAxis: {
		        show: false,
		        type: 'value'
		    },
		    yAxis: {
		        show: false,
		        type: 'value'
		    },
		    series: [{
		        type: 'graph',
		        coordinateSystem: 'cartesian2d',
		        legendHoverLink: false,
		        hoverAnimation: true,
		        nodeScaleRatio: false,
		        //建头
		        edgeSymbol: ['circle', 'none'],
		        edgeSymbolSize: [2, 15],
		        edgeLabel: {
		            show: false,
		            normal: {
		                show: true,
		                position: 'middle',
		                textStyle: {
		                    fontSize: 12
		                },
		                formatter: "{c}"
		            }
		        },
		        focusNodeAdjacency: true,
		        roam: false,
		        //圆形上面的文字	
		        label: {
		            normal: {
		                position: "inside",
		                show: true,
		                textStyle: {
		                    fontSize: 12
		                },
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                    offset: 0,
		                    color: '#157eff'
		                }, {
		                    offset: 1,
		                    color: '#35c2ff'
		                }]),
		            },
		            shadowBlur: 10
		        },
		        lineStyle: {
		            normal: {
		                width: 1,
		                shadowColor: 'none',
		                color:'#ff0000'
		            },
		        },
		        data: [
					{
		                name: "大数据",
		                symbolSize: 80,
		                draggable: false,
		                value:[0,150]
		            },{
		                name: "节点A",
		    			symbolSize: 80,
		                draggable: false,
		                fixed: true,
		                value: [40,150]
	                },{
		                name: " 大数据",
		    			symbolSize: 80,
		                draggable: false,
		                fixed: true,
		                value: [80,150]
		            },{
		                name: "块1",
		    			value: [200,250],
		                draggable: false,
		                fixed: true,
		                symbol: "rect",
		                symbolSize: [50,30],
		                itemStyle: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                        offset: 0,
		                        color: '#ffb402'
		                    }, {
		                        offset: 1,
		                        color: '#ffdc84'
		                    }]),
		                }
		            },{
		                name: "块2",
		    			value: [200,200],
		                draggable: false,
		                fixed: true, 
		                symbol: "rect",
		                symbolSize: [50,30],
		                itemStyle: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                        offset: 0,
		                        color: '#ffb402'
		                    }, {
		                        offset: 1,
		                        color: '#ffdc84'
		                    }]),
		                }
		            },{
		                name: "块3",
		    			value: [200,150],
		                draggable: false,
		                symbol: "rect",
		                symbolSize: [50,30],
		                itemStyle: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                        offset: 0,
		                        color: '#ffb402'
		                    }, {
		                        offset: 1,
		                        color: '#ffdc84'
		                    }]),
		                }
		            },{
		                name: "...",
		    			value: [200,125],
		                draggable: false,
		                symbol: "rect",
		                symbolSize: [50,30],
		                itemStyle: {
		                    color:"rgba(0, 0, 0, 0)"
		                }
		            },{
		                name: "块n-1",
		    			value: [200,100],
		                draggable: false,
		                symbol: "rect",
		                symbolSize: [50,30],
		                itemStyle: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                        offset: 0,
		                        color: '#ffb402'
		                    }, {
		                        offset: 1,
		                        color: '#ffdc84'
		                    }]),
		                }
		            },{
		                name: "块n",
		    			value: [200,50],
		                draggable: false,
		                symbol: "rect",
		                symbolSize: [50,30],
		                itemStyle: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		                        offset: 0,
		                        color: '#ffb402'
		                    }, {
		                        offset: 1,
		                        color: '#ffdc84'
		                    }]),
		                }
		            }, 
		            //节点B,C,D ....n
		            {
		                name: "节点B",
		    			symbolSize: 80,
		                draggable: false,
		                value: [300,280]
		            },{
		                name: "节点C",
		    			symbolSize: 80,
		                draggable: false,
		                value: [300,215]
		            },{
		                name: "节点D",
		    			symbolSize: 80,
		                draggable: false,
		                value: [300,150]
		            },{
		                name: "....",
		    			symbolSize: 80,
		                draggable: false,
		                value: [300, 118],
		                itemStyle: {
		                    color:"rgba(0, 0, 0, 0)"
		                }
		            },{
		                name: "节点N-1",
		    			symbolSize: 80,
		                draggable: false,
		                value: [300,85]
		            },{
		                name: "节点N",
		    			symbolSize: 80,
		                draggable: false,
		                value: [300,20]
		            },{
		                name: "节点X",
		    			symbolSize: 80,
		                draggable: false,
		                value: [400,150]
	                },{
		                name: "大数据 ",
		    			symbolSize: 80,
		                draggable: false,
		                value: [440,150]
		            },
		            ],

		        links: [
		        	{
		                source: "大数据",
		                value:'',
		                target: "节点A",
	                },{
		                source: "节点A",
						value: " ",
		                target: " 大数据",
		            },{
		                source: " 大数据",
						value: " ",
		                target: "块1",
		            },{
		                source: " 大数据",
						value: " ",
		                target: "块2",
		            },{
		                source: " 大数据",
						value: " ",
		                target: "块3",
		            },{
		                source: " 大数据",
						value: " ",
		                target: "块n-1",
		            },{
		                source: " 大数据",
						value: " ",
		                target: "块n",
		            },{
		                source: "节点B",
						value: " ",
		                target: "节点X",
		            },{
		                source: "节点C",
						value: " ",
		                target: "节点X",
		            },{
		                source: "节点D",
						value: " ",
		                target: "节点X",
		            },{
		                source: "节点N-1",
						value: " ",
		                target: "节点X",
		            },{
		                source: "节点N",
						value: " ",
		                target: "节点X",
		            },{
		                source: "块1",
						value: " ",
		                target: "节点B",
		            },{
		                source: "块2",
						value: " ",
		                target: "节点C",
		            },{
		                source: "块3",
						value: " ",
		                target: "节点D",
		            },{
		                source: "块n-1",
						value: " ",
		                target: "节点N-1",
		            },{
		                source: "块n",
						value: " ",
		                target: "节点N",
	                },{
		                source: "节点X",
						value: " ",
		                target: "大数据 ",
		            }],
		    }, {
		        type: 'lines',//大数据到节点A
		        coordinateSystem: 'cartesian2d',
		        z: 1,
		        effect: {
		            show: true,
		            smooth: true,
		            trailLength: 0,
		            symbol: "arrow",
		            color: '#ff0000',
		            symbolSize: 8,
		            period: 1.5,
		            loop: false,
		        },
		        lineStyle: {
		            normal: {
		                curveness: 0,
		                color:'#ff0000',
		                width: 0,
		            }
		        },
		        data: [
		            {
		                coords:[
		                    [0,150],
		                    [40,150]
		                ]
		            }
		        ]
	         }, {
		        type: 'lines',//节点A到大数据
		        coordinateSystem: 'cartesian2d',
		        z: 1,
		        effect: {
		            show: true,
		            smooth: true,
		            trailLength: 0,
		            symbol: "arrow",
		            color: '#ff0000',
		            symbolSize: 8,
		            period: 1.5,
		            delay: 1000,
		            loop: false,
		        },
		        lineStyle: {
		            normal: {
		                curveness: 0,
		                color:'#ff0000',
		                width: 0,
		            }
		        },
		        data: [
		            {
		                coords:[
		                    [40,150],
		                    [80,150]
		                ]
		            }
		        ]
	        }, {
		        type: 'lines',//节点A到块1,2,...n
		        coordinateSystem: 'cartesian2d',
		        z: 1,
		        effect: {
		            show: true,
		            smooth: true,
		            trailLength: 0,
		            symbol: "arrow",
		            color: '#ff0000',
		            symbolSize: 8,
		            period: 3,
		            delay: 2500,
		            loop: false,
		        },
		        lineStyle: {
		            normal: {
		                curveness: 0,
		                color:'#ff0000',
		                width: 0,
		            }
		        },
		        data: [
		            {
		                coords:[
		                    [80,150],
		                    [200,250]
		                ]
		            },{
		                coords:[
		                    [80,150],
		                    [200,200]
		                ]
		            },{
		                coords:[
		                    [80,150],
		                    [200,150]
		                ]
		            },{
		                coords:[
		                    [80,150],
		                    [200,100]
		                ]
		            },{
		                coords:[
		                    [80,150],
		                    [200,50]
		                ]
		            
		            }
		        ]
		    }, {
		        type: 'lines',//块1,2...n到节点A,B...N
		        coordinateSystem: 'cartesian2d',
		        // animationDelay: 10000,
		        z: 1,
		        effect: {
		            show: true,
		            smooth: true,
		            trailLength: 0,
		            symbol: "arrow",
		            color: '#ff0000',
		            symbolSize: 8,
		            period: 3,
		            delay: 5500,
		            loop: false,
		        },
		        lineStyle: {
		            normal: {
		                curveness: 0,
		                color:'#ff0000',
		                width: 0,
		            }
		        },
		        data: [
		            {
		                coords:[
		                    [200,250],
		                    [300,280]
		                ]
		            },{
		                coords:[
		                    [200,200],
		                    [300,215]
		                ]
		            },{
		                coords:[
		                    [200,150],
		                    [300,150]
		                ]
		            },{
		                coords:[
		                    [200,100],
		                    [300,85]
		                ]
		            },{
		                coords:[
		                    [200,50],
		                    [300,20]
		                ]
		            }
		        ]
		    }, {
		        type: 'lines',//节点A,B...N到节点X
		        coordinateSystem: 'cartesian2d',
		        z: 1,
		        effect: {
		            show: true,
		            smooth: true,
		            trailLength: 0,
		            symbol: "arrow",
		            color: '#ff0000',
		            symbolSize: 8,
		            period: 3,
		            delay: 8500,
		            loop: false,
		        },
		        lineStyle: {
		            normal: {
		                curveness: 0,
		                color:'#ff0000',
		                width: 0,
		            }
		        },
		        data: [
		            {
		                coords:[
		                    [300,280],
		                    [400,150]
		                ]
		            },{
		                coords:[
		                    [300,215],
		                    [400,150]
		                ]
		            },{
		                coords:[
		                    [300,150],
		                    [400,150]
		                ]
		            },{
		                coords:[
		                    [300,85],
		                    [400,150]
		                ]
		            },{
		                coords:[
		                    [300,20],
		                    [400,150]
		                ]
		            }
		        ]
	        }, {
		        type: 'lines',//节点X到大数据
		        coordinateSystem: 'cartesian2d',
		        z: 1,
		        effect: {
		            show: true,
		            smooth: true,
		            trailLength: 0,
		            symbol: "arrow",
		            color: '#ff0000',
		            symbolSize: 8,
		            period: 1.5,
		            delay: 11000,
		            loop: false,
		        },
		        lineStyle: {
		            normal: {
		                curveness: 0,
		                color:'#ff0000',
		                width: 0,
		            }
		        },
		        data: [
		           {
		                coords:[
		                    [400,150],
		                    [440,150]
		                ]
		            }
		        ]
		    }]
		}