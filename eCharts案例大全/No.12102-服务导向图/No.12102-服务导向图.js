var option = {
	animationDurationUpdate : 1500,
	animationEasingUpdate : 'quinticInOut',
	title : {

		// text:'2017-2018年上海大仪服务长三角主要城市',
		left : '25%'
	},
	series : [ {
		type : 'graph',
		tooltip : {},
		ribbonType : true,
		layout : 'circular',

		circular : {
			rotateLabel : true
		},
		symbolSize : 40,
		roam : true,
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

		edgeSymbol : [ 'circle' ],
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
			name : '上海',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : 'red'
				}
			}
	
		}, {
			name : '湖州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '绍兴',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '温州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '杭州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '宁波',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '嘉兴',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		},

		{
			name : '台州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '合肥',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '淮南',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '芜湖',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '镇江',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '盐城',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '扬州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '泰州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '无锡',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '徐州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '常州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '苏州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '南京',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		}, {
			name : '南通',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			}
		} ],
		// links: [],
		links : [ {
			source : '上海',
			target : '合肥',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 9,
					curveness : 0.2,
					color : '#fcae00'
				}
			}
		}, {
			source : '上海',
			target : '苏州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 20,
					curveness : 0.2,
					color : 'red'
				}
			}
		}, {
			source : '上海',
			target : '无锡',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 20,
					curveness : 0.2,
					color : '#DC143C'
				}
			}
		}, {
			source : '上海',
			target : '杭州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 20,
					curveness : 0.2,
					color : '#DC143C'
				}
			}
		}, {
			source : '上海',
			target : '南京',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 20,
					curveness : 0.2,
					color : '#DC143C'
				}
			}
		}, {
			source : '上海',
			target : '宁波',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 20,
					curveness : 0.2,
					color : '#DC143C'
				}
			}
		}, {
			source : '上海',
			target : '常州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 9,
					curveness : 0.2,
					color : '#fcae00'
				}
			}
		}, {
			source : '上海',
			target : '南通',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 9,
					curveness : 0.2,
					color : '#fcae00'
				}
			}
		}, {
			source : '上海',
			target : '嘉兴',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#53FF53'
				}
			}
		}, {
			source : '上海',
			target : '温州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 9,
					curveness : 0.2,
					color : '#fcae00'
				}
			}
		}, {
			source : '上海',
			target : '扬州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '泰州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '盐城',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 9,
					curveness : 0.2,
					color : '#fcae00'
				}
			}
		}, {
			source : '上海',
			target : '台州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '湖州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '绍兴',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '徐州',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '镇江',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '南通',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 9,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '芜湖',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}, {
			source : '上海',
			target : '淮南',
			name : '',
			tooltip : {
				trigger : 'item',
				formatter : function(params, ticket, callback) {
					return params.data.name;
				}
			},
			symbolSize : [ 5, 20 ],
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
					width : 1,
					curveness : 0.2,
					color : '#fe611e'
				}
			}
		}

		]
	} ]
};