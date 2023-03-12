var option = {
    backgroundColor: '#091C3D',
    title:{
        text:'收货量趋势图',
        textStyle:{
            color:'#fff'
        },
        top:'2%',
        left:'45%'
    },
	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#6a7985'
			}
		},
		textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,
		}
	},
	grid: [{
		left: '2%',
		right: '2%',
		bottom: '50%',
		top:100,
// 		width:'100%',
	//	padding:'0 0 10 0',
		containLabel: true,
	}],
    legend: {//图例组件，颜色和名字
        right:20,
		top:45,
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[{
            name:'实收数量',
            //icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
            name:'预约数量',
        }],
        textStyle: {
			color: '#a8aab0',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,            
        }
    },
	xAxis: [
		{
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: ['2018-12-1', '2018-12-2', '2018-12-3','2018-12-4','2018-12-5','2018-12-6','2018-12-7','2018-12-8'],
			axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#078ceb',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				},
				rotate:50,
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#fff',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: '#a8aab0',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#fff'],
					opacity:0.06
				}
			}

		}
	],
    series : [
        {
            name:'实收数量',
            type:'bar',
            data:[45,42, 40, 35, 34, 32, 30, 29],
            barWidth: 10,
            barGap:0,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
          itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a98f8'
                    }, {
                        offset: 1,
                        color: '#7049f0'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
        {
            name:'预约数量',
            type:'line',
            data:[9, 5, 4, 7, 6, 6, 3, 8],
            barWidth: 10,
            barGap:0.2,//柱间距离
            label: {//图形上的文本标签
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: '#a8aab0',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 12,   
                   },
                },
            },
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
        //饼图1
        {
            name:'访问来源',
            type:'pie',
            radius : '40%',
            center: ['25%', '78%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        },
        //饼图2
        {
            name: '访问来源',
            type: 'pie',
            center: ['75%', '78%'],//饼图位置控制
            radius: ['25%', '40%'],
            data: [{
                    value: 9,
                    name: '18-24岁',
                    itemStyle: {
                        normal: {
                            color: "#ffed25"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 73,
                    name: '25-29岁',
                    itemStyle: {
                        normal: {
                            color: "#45dbf7"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 290,
                    name: '30-39岁',
                    itemStyle: {
                        normal: {
                            color: "#0089fa"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 134,
                    name: '40-49岁',
                    itemStyle: {
                        normal: {
                            color: "#ba58ff"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 39,
                    name: '50-59岁',
                    itemStyle: {
                        normal: {
                            color: "#fe9336"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 5,
                    name: '60岁+',
                    itemStyle: {
                        normal: {
                            color: "#3eff74"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                }
            ]
        }
    ]
};