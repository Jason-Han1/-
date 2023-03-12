var option = {
	animationDurationUpdate : 1500,
	animationEasingUpdate : 'quinticInOut',
	series : [{
        name: 'test',
        type: 'gauge',
        radius: '68%',
        center: ['50%', '50%'],
        links:
        {    source:'2:00',
         target:'12:00',},
        min: 0,
        max: 120,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 24,
        animation: 0,
        pointer: {
            show: true,
            length: '95%',
            width: 4,
        },
        itemStyle: {
            normal: {
                color: '#000000',
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 10,
                shadowOffsetX: 4,
                shadowOffsetY: 4
            }
        },
        axisLine: { //仪表盘轴线样式
            lineStyle: {
                color: [
                    [1, '#4B96F3']
                ],
                width: 3
            }

        },
        splitLine: { //分割线样式长刻度
            length: -10,
            lineStyle: {
                color: '#4B96F3',
                width: 3
            }
        },
        axisTick: { //仪表盘刻度小标记样式
            show: 1,
            splitNumber: 5,
            length: -5,
            lineStyle: {
                color: ['#4B96F3']
            }
        },
        axisLabel: { //刻度盘标签
            show: false,
            distance:-35, //标签与刻度线的距离,
            textStyle: {
                fontWeight: 'bold',
                fontSize: 12
            },
            formatter: function(t) {
                switch (t + '') {
                    case '0':
                        return '';
                    case '5':
                        return '';
                    case '10':
                        return '2:00';
                    case '15':
                        return '';
                    case '20':
                        return '4:00';
                    case '25':
                        return '';
                    case '30':
                        return '6:00';
                    case '35':
                        return '';
                    case '40':
                        return '8:00';
                    case '45':
                        return '';
                    case '50':
                        return '10:00';
                    case '55':
                        return '';
                    case '60':
                        return '12:00';
                    case '65':
                        return '';
                    case '70':
                        return '14:00';
                    case '75':
                        return '';
                    case '80':
                        return '16:00';
                    case '85':
                        return '';
                    case '90':
                        return '18:00';
                    case '95':
                        return '';
                    case '100':
                        return '20:00';
                    case '105':
                        return '';
                    case '110':
                        return '22:00';
                    case '115':
                        return '';
                    case '120':
                        return '24:00';

                }
            }
        },
        title: {
            show: 0
        },
        detail: {
            show: 0,
            formatter: '{value}',
            offsetCenter: [0, '60%'],
        },
        data: [{}]
    },{
		type : 'graph',
        tooltip : {},
		ribbonType : true,
		layout : 'none',

		circular : {
			rotateLabel : true
		},
		symbolSize : 40,
		roam : false,
		focusNodeAdjacency : true,

		circular : {
		// rotateLabel:true
		},
		label : {

			normal : {

				position : 'inside',
				fontWeight : 'bold',
				formatter : '{b}',
				fontSize : 13,
				// rotate:90,
				// verticalAlign:'bottom',
				// align:'left',
				normal : {
					textStyle : {

						fontFamily : '宋体'
					}
				}
			}
		},

		edgeSymbol : [ 'none' ],
		edgeSymbolSize : [ 4, 10 ],
		edgeLabel : {
			normal : {
				textStyle : {
					fontSize : 17,
					fontWeight : 'bold',
					fontFamily : '宋体'
				}
			}
		},

		itemStyle : {
			normal : {
				label : {
					rotate : true,
					show : true,
					textStyle : {
						color : '#333',
						fontWeight : 'bold'
					}
				},
				color : [ "#393f51", "#393f51", "#393f51", "#393f51",
						"#393f51", "#393f51", "#393f51", "#85d6f7",
						"#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7",
						"#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7",
						"#85d6f7" ]
			/* 内的颜色#393f51，外的颜色#85d6f7 */
			},
			emphasis : {
				label : {
					show : true
				// textStyle: null // 默认使用全局文本样式，详见TEXTSTYLE
				}
			}
		},

		data : [ {
            name : '  ',
			symbolSize : 0,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:500,
			y:500
	
		},{
            name : '24:00',
			symbolSize : 10,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:500,
			y:0
	
		},{
            name : '2:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:750,
			y:66.99
	
		},{
            name : '4:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:933.01,
			y:250
	
		},{
            name : '18:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : '#FFFFFF'
				}
			},
			x:0,
			y:500
		},{
            name : '8:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:933.01,
			y:750
	
		},{
            name : '10:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:750,
			y:933.01
	
		},{
            name : '12:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : '#FFFFFF'
				}
			},
			x:500,
			y:1000
		},{
            name : '14:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:250,
			y:933.01
	
		},{
            name : '16:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:66.99,
			y:750
	
		},{
            name : '6:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : '#FFFFFF'
				}
			},
			x:1000,
			y:500
		},{
            name : '20:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:66.99,
			y:250
	
		},{
            name : '22:00',
			symbolSize : 30,
			itemStyle : {
				normal : {
					color : "#FFFFFF"
				}
			},
			x:250,
			y:66.99
	
		} ],
		// links: [],
		links : [ {
            source : '  ',
            target : '8:00',
			lineStyle : {
				normal : {
					width : 4,
					color : '#4B96F3',
                    opacity: 1
				}
			}
		},{
            source : '24:00',
            target : '12:00',
			lineStyle : {
				normal : {
					width : 4,
					color : '#4B96F3',
                    opacity: 1
				}
			}
		},{
            source : '6:00',
            target : '18:00',
			lineStyle : {
				normal : {
					width : 4,
					color : '#4B96F3',
                    opacity: 1
				}
			}
		},{
            source : '8:00',
            target : '12:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		},{
            source : '12:00',
            target : '14:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		},{
            source : '14:00',
            target : '18:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		}, {
            source : '14:00',
            target : '18:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : 1,
					color : '#FFD18C'
				}
			}
		},
		{
            source : '16:00',
            target : '18:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		}, {
            source : '18:00',
            target : '20:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		}, {
            source : '18:00',
            target : '24:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		},{
            source : '20:00',
            target : '22:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		},{
            source : '20:00',
            target : '24:00',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 2, 2 ],
			label : {
				normal : {
					formatter : function(params, ticket, callback) {
						params.name = params.data.name;
						return params.name;
					},
					show : true
				}
			},
			lineStyle : {
				normal : {
					width : 2,
					curveness : -1,
					color : '#FFD18C'
				}
			}
		}

		]
	} ]
};

return option;