// $(function() {
// 	var myChart = echarts.init(document.getElementById('zx'));
	option = {
		backgroundColor: '#394056',
		title: {
			text: '波纹折线图',
			subtext: '去注释直接应用',
			left: 'center',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 20,
				color: '#F1F1F3'
			},
			left: '6%'
		},
		tooltip: {
			trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		legend: {
			icon: 'rect', //设置图例的图形形状，circle为圆，rect为矩形
			itemWidth: 14, //图例标记的图形宽度[ default: 25 ] 
			itemHeight: 5, //图例标记的图形高度。[ default: 14 ] 
			itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。[ default: 10 ] 
			data: ['波纹', '折线'],
			right: '4%', //图例组件离容器右侧的距离
			textStyle: {
				fontSize: 12,
				color: '#F1F1F3'
			}
		},
		grid: {
			left: '3%', //grid 组件离容器左侧的距离。
			right: '4%', //grid 组件离容器右侧的距离。
			bottom: '3%', //grid 组件离容器下侧的距离。
			containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisLine: {
				lineStyle: {
					color: '#57617B' //坐标轴线线的颜色。
				}
			},
			data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
		}],
		yAxis: [{
			type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
			name: '单位（%）', //坐标轴名称。
			axisTick: {
				show: false //是否显示坐标轴刻度
			},
			axisLine: {
				lineStyle: {
					color: '#57617B' //坐标轴线线的颜色
				}
			},
			axisLabel: {
				margin: 10, //刻度标签与轴线之间的距离
				textStyle: {
					fontSize: 14 //文字的字体大小
				}
			},
			splitLine: {
				lineStyle: {
					color: '#57617B' //分隔线颜色设置
				}
			}
		}],
		series: [{
			name: '波纹',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 1
				}
			},
			areaStyle: {
				normal: {
					color: 'rgb(0,136,212)'
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(0,136,212)',
					borderColor: 'rgba(0,136,212,0.2)',
					borderWidth: 15

				}
			},
			data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150],
		}, {
			// symbol:'circle',
			// symbolSize: 42,
			name: "折线",
			type: "line",
			// yAxisIndex: 1,
			data: [150, 120, 180, 50, 32, 65, 122, 220, 100, 111, 160, 134],
			itemStyle: {
				normal: {
					borderWidth: 10,
					color: {
						colorStops: [{
								offset: 0,
								color: '#00FFFF'
							},

							{
								offset: 1,
								color: '#F0FFFF'
							}
						],
					}
				}
			}
		}]
	};
	myChart.setOption(option);
// })