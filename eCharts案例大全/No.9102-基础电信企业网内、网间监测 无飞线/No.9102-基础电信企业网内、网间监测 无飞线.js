	option = {
	    // backgroundColor: '#000',
	    title: {
	        text: '基础电信企业网内、网间监测'
	    },
	    tooltip: {
	        trigger: 'item',
	           formatter: function(params) {
	           console.log(params)
	           time = params.data.time
	           degree = params.data.degree
	           loss = params.data.loss
	           if(params.data.source != undefined && params.data.target != undefined){
				if (time != undefined){
				return "IPv4时延：" + time[0] + 'ms' + '<br/>' + "IPv6时延：" + time[1] + 'ms'
				} else if (degree != undefined) {
				return   '劣化度：'+degree +'%'
				} else if (loss != undefined) {
				 return "IPv4丢包率：" + loss[0] + '%' + '<br/>' + "IPv6丢包率：" + loss[1] + '%'
				}
				}else{
					return params.name + '<br/>'+ params.data.number[0]+'<br/>'+params.data.number[1]
				}
	    },
 },
	    legend: {
	        icon: 'circle',
	        textStyle: {
	            color: '#ccc'
	        },
	        data: ['劣化度', '时延', '丢包率'],
	    },
	    series: [{
	        type: 'graph',
	        layout: 'circular',
	        // layout: 'force',
	        // symbolSize: 50,
	        roam: true,
	        draggable: true,
	        label: {
	            normal: {
	                show: true
	            }
	        },
	        edgeSymbol: ['circle', 'arrow'],
	        edgeSymbolSize: [2, 10],
	        edgeLabel: {
	            normal: {
	                textStyle: {
	                    fontSize: 20
	                }
	            }
	        },
	        focusNodeAdjacency: true,
	        force: {
	            initLayout: 'circular',
	            gravity: .05,
	            repulsion: 100,
	            edgeLength: [30, 400]
	        },
	        categories: [{
	            name: '劣化度',
	            itemStyle: {
	                normal: {
	                      color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#88FFA0'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#00440E'
	                            },
	                            {
	                                offset: 1,
	                                color: '#002207'
	                            }
	                        ]),
	                },
	            },
	        }, {
	            name: '时延',
	            itemStyle: {
	                normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#99ADFF'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#0030EE'
	                            },
	                            {
	                                offset: 1,
	                                color: '#0022AA'
	                            }
	                        ]),
	                },
	            },
	        }, {
	            name: '丢包率',
	            itemStyle: {
	                normal: {
	                   color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#FFCF11'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#665200'
	                            },
	                            {
	                                offset: 1,
	                                color: '#221b00'
	                            }
	                        ]),
	                },
	            },
	        }],
	        lineStyle: {
	            normal: {
	                // color: 'source',
	                curveness: 0.3
	            }
	        },
	        itemStyle: {
	
	            normal: {
	
	                label: {
	                    rotate: true,
	                    show: true,
	                    textStyle: {
	                        color: '#ccc',
	                        fontWeight: 'bold'
	                    }
	                },
	            },
	        },
	        data: [
	
	            {
	                name: '中国电信劣化度',
	                type: 'pie',
	                value: 40,
	       //   number:[1.2],
	                category: '劣化度',
	                symbolSize: 100,
	                textStyle: {
	
	                },
	                itemStyle: {
	                    normal: {
	                        color: '#6ac439'
	                    }
	                },
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国电信劣化度}',
	                            // '{a|劣化度}',
	                            '{b|1.2%}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	                            },
	                        }
	
	                    },
	                },
	         itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#88FFA0'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#00440E'
	                            },
	                            {
	                                offset: 1,
	                                color: '#002207'
	                            }
	                        ]),
	                    },
	                },
	            }, // 0
	            {
	                name: '中国移动时延',
	                symbolSize: 100,
	                value: 40,
	                category: '时延',
	                number:['IPv4时延：44.13ms','IPv6时延：43.82ms'],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国移动时延}',
	                            // '{a|劣化度}',
	                            '{b|43.82ms}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                },
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#99ADFF'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#0030EE'
	                            },
	                            {
	                                offset: 1,
	                                color: '#0022AA'
	                            }
	                        ]),
	                    },
	                },
	            }, //1
	            {
	                name: '中国移动丢包率',
	                symbolSize: 100,
	                value: '40',
	                category: '丢包率',
	                number:['IPv4丢包率：0%','IPv6丢包率：0%'],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国移动丢包率}',
	                            // '{a|劣化度}',
	                            '{b|0%}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                },
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#FFCF11'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#665200'
	                            },
	                            {
	                                offset: 1,
	                                color: '#221b00'
	                            }
	                        ]),
	                    },
	                },
	            }, //2
	            {
	                name: '中国移动劣化度',
	
	                symbolSize: 100,
	                category: '劣化度',
	                value: '40',
	               // number:[-0.7],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国移动劣化度}',
	                            // '{a|劣化度}',
	                            '{b|-0.70%}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                },
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#88FFA0'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#00440E'
	                            },
	                            {
	                                offset: 1,
	                                color: '#002207'
	                            }
	                        ]),
	                    },
	                },
	            }, //3 
	            {
	                name: '中国电信时延',
	                symbolSize: 100,
	                value: 40,
	                category: '时延',
	                number:['IPv4时延：36.88ms','IPv6时延：37.33ms'],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国电信时延}',
	                            // '{a|劣化度}',
	                            '{b|37.33ms}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                    
	                },
	             itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#99ADFF'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#0030EE'
	                            },
	                            {
	                                offset: 1,
	                                color: '#0022AA'
	                            }
	                        ]),
	                    },
	                },
	            }, //4
	            {
	                name: '中国电信丢包率',
	                symbolSize: 100,
	                value: 40,
	                category: '丢包率',
	                number:['IPv4丢包率：0%','IPv6丢包率：0%'],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国电信丢包率}',
	                            // '{a|劣化度}',
	                            '{b|0%}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                },
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#FFCF11'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#665200'
	                            },
	                            {
	                                offset: 1,
	                                color: '#221b00'
	                            }
	                        ]),
	                    },
	                },
	            }, //5
	            {
	                name: '中国联通劣化度',
	                symbolSize: 100,
	                value: '40',
	                category: '劣化度',
	               // number:[1.2],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国联通劣化度}',
	                            // '{a|劣化度}',
	                            '{b|5.44%}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                },
	                 itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#88FFA0'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#00440E'
	                            },
	                            {
	                                offset: 1,
	                                color: '#002207'
	                            }
	                        ]),
	                    },
	                },
	            }, //6
	            {
	                name: '中国联通时延',
	                symbolSize: 100,
	                value: 40,
	                category: '时延',
	                number:['IPv4时延：38.19ms','IPv6时延：40.39ms'],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国联通时延}',
	                            // '{a|劣化度}',
	                            '{b|30.39ms}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                },
	               itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#99ADFF'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#0030EE'
	                            },
	                            {
	                                offset: 1,
	                                color: '#0022AA'
	                            }
	                        ]),
	                    },
	                },
	            }, //7
	            {
	                name: '中国联通丢包率',
	                symbolSize: 100,
	                value:40,
	                category: '丢包率',
	                number:['IPv4丢包率：0%','IPv6丢包率：0%'],
	                label: {
	                    normal: {
	                        //   color: "rgba(255,255,255,.45)",
	                        //             fontSize: 20,
	                        formatter: [
	                            '{a|中国联通丢包率}',
	                            // '{a|劣化度}',
	                            '{b|0%}',
	                        ].join('\n'),
	                        rich: {
	                            a: {
	                                color: "#fef1e8",
	                                fontSize: 12,
	                                lineHeight: 30,
	                                align: 'center'
	                            },
	                            b: {
	                                color: "#fdf9f1",
	                                fontSize: 23,
	                                //   lineHeight: 40,
	                                align: 'center'
	                                //   fontWeight:'bold',
	                            },
	                            x: {
	                                fontSize: 40,
	                                fontFamily: 'Microsoft YaHei',
	                                borderColor: '#fdf9f1',
	                                lineHeight: 10,
	
	                                // borderRadius: 4
	                            },
	                        }
	
	                    },
	                },
	                itemStyle: {
	                    normal: {
	                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
	                                offset: 0,
	                                color: '#FFCF11'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#665200'
	                            },
	                            {
	                                offset: 1,
	                                color: '#221b00'
	                            }
	                        ]),
	                    },
	                },
	            }, //8
	        ],
	        links: [{
	                source: '中国电信劣化度',
	                target: '中国移动劣化度',
	                name: '',
	                degree:2.42,
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                  
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: false
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        curveness: 0.2,
	                        type: 'dashed',
	                        show: false,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国移动劣化度',
	                target: '中国电信劣化度',
	                name: '',
	                degree:2.22,
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        curveness: -0.2,
	                        type: 'dashed',
	                        show: false,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	            {
	                source: '中国电信劣化度',
	                target: '中国联通劣化度',
	                name: '',
	                degree:6.33,
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        show: true,
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)',
	                    }
	                }
	            },
	            {
	                source: '中国联通劣化度',
	                target: '中国电信劣化度',
	                name: '',
	                degree:6.06,
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        show: true,
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)',
	                    }
	                }
	            },
	            {
	                source: '中国移动劣化度',
	                target: '中国联通劣化度',
	                name: '',
	                 degree:-2.42,
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国联通劣化度',
	                target: '中国移动劣化度',
	                name: '',
	                 degree:6.22,
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	            {
	                source: '中国电信时延',
	                target: '中国移动时延',
	                name: '',
	                time:[48.79,50.1],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国移动时延',
	                target: '中国电信时延',
	                name: '',
	                 time:[48.52,49,62],
	                // tooltip: {
	                //     trigger: 'item',
	                //     formatter: function(params, ticket, callback) {
	                //         return params.data.name;
	                //     }
	                // },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	         
	            {
	                source: '中国联通时延',
	                target: '中国电信时延',
	                name: '',
	                 time:[42.79,45.55],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	               {
	                source: '中国电信时延',
	                target: '中国联通时延',
	                name: '',
	                 time:[43.05,45.96],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国移动时延',
	                target: '中国联通时延',
	                name: '',
	                 time:[48.62,47.49],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国联通时延',
	                target: '中国移动时延',
	                name: '',
	                 time:[49.27,48.22],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	            {
	                source: '中国电信丢包率',
	                target: '中国移动丢包率',
	                name: '',
	                loss:[0,0],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国移动丢包率',
	                target: '中国电信丢包率',
	                name: '',
	                loss:[0.01,0],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	            {
	                source: '中国电信丢包率',
	                target: '中国联通丢包率',
	                name: '',
	                loss:[0,0],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国联通丢包率',
	                target: '中国电信丢包率',
	                name: '',
	                loss:[0,0],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	            {
	                source: '中国移动丢包率',
	                target: '中国联通丢包率',
	                name: '',
	                loss:[0,0.01],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: 0.2,
	                        color: 'rgb(133,109,188)'
	                    }
	                }
	            },
	            {
	                source: '中国联通丢包率',
	                target: '中国移动丢包率',
	                name: '',
	                loss:[0.01,0],
	                tooltip: {
	                    trigger: 'item',
	                    formatter: function(params, ticket, callback) {
	                        return params.data.name;
	                    }
	                },
	                symbolSize: [0, 8],
	                label: {
	                    normal: {
	                        formatter: function(params, ticket, callback) {
	                            params.name = params.data.name;
	                            return params.name;
	                        },
	                        show: true
	                    }
	                },
	                lineStyle: {
	                    normal: {
	                        width: 2.0,
	                        type: 'dashed',
	                        curveness: -0.2,
	                        color: 'rgb(24,5,125)'
	                    }
	                }
	            },
	        ]
	    }]
	};

