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
		layout : 'none',

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
			},
			x:500,
			y:0
	
		},{
			name : '杭州',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			},
			x:0,
			y:500
		},{
			name : '无锡',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			},
			x:500,
			y:1000
		},{
			name : '沈阳',
			symbolSize : 40,
			itemStyle : {
				normal : {
					color : '#85d6f7'
				}
			},
			x:1000,
			y:500
		} ],
		// links: [],
		links : [ {
			source : '沈阳',
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
					curveness : -0.3,
					color : '#DC143C'
				}
			}
		},{
			source : '上海',
			target : '沈阳',
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
					curveness : -0.3,
					color : '#DC143C'
				}
			}
		},{
			source : '沈阳',
			target : '上海',
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
					width : 10,
					curveness : 0.5,
					color : 'green'
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
					curveness : 0.5,
					color : '#000000'
				}
			}
		},
		{
			source : '无锡',
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
					curveness : -0.3,
					color : '#DC143C'
				}
			}
		}, {
			source : '杭州',
			target : '上海',
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
					curveness : -0.3,
					color : '#DC143C'
				}
			}
		},{
			source : '无锡',
			target : '沈阳',
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
					curveness : 0.5,
					color : '#DC143C'
				}
			}
		},{
			source : '杭州',
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
					curveness : 0.5,
					color : '#DC143C'
				}
			}
		}

		]
	} ]
};