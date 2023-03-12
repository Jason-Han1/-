var option = {
    backgroundColor: '#051433',
	tooltip: { //提示框组件
		trigger: 'axis',

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
	grid: {
		left: '10%',
		right: '10%',
		bottom: '10%',
		top:'40%',
	//	padding:'0 0 10 0',
		containLabel: true,
	},
    legend: {//图例组件，颜色和名字
        right:'10%',
		top:'30%',
		itemGap: 16,
		itemWidth: 18,
		itemHeight: 10,
        data:[{
            name:'健康度',
            //icon:'image://../wwwroot/js/url2.png', //路径
        },
        {
            name:'可用度',
        },
         {
            name:'新人',
        }
        ],
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
			data: ['22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40','22:18', '22:23', '22:25','22:28','22:30','22:33','22:35','22:40'],
			axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: '#078ceb',
					fontStyle: 'normal',
					fontFamily: '微软雅黑',
					fontSize: 12,
				},
				rotate:0,
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
	    //给x轴设置滚动条
dataZoom: [{
    start:0,//默认为0
    end: 100-1500/31,//默认为100
    type: 'slider',
    show: true,
    xAxisIndex: [0],
    handleSize: 0,//滑动条的 左右2个滑动条的大小
    height: 10,//组件高度
    left: '10%', //左边的距离
    right: '10%',//右边的距离
    bottom: 70,//xia边的距离
    borderColor: "#051433",
    fillerColor: '#4fd8e6',
    borderRadius:10,
    backgroundColor: '#051433',//两边未选中的滑动条区域的颜色
    showDataShadow: false,//是否显示数据阴影 默认auto
    showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
    realtime:true, //是否实时更新
    filterMode: 'filter',

  },
  //下面这个属性是里面拖到
  {
    type: 'inside',
    show: true,
    xAxisIndex: [0],
    start: 0,//默认为1
    end: 100-1500/31,//默认为100
  },
],   

    series : [
        {
            name:'健康度',
            type:'bar',
            data:[10,15, 30, 45, 55, 60, 62, 80,80,62, 60, 55, 45, 30, 15, 10],
            barWidth: 10,
            barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
          itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#286488'
                    }, {
                        offset: 1,
                        color: '#50c4f7'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },

        {
            name:'可用度',
            type:'bar',
            data:[8,5, 25, 30, 35, 55, 62, 78,65,55, 60, 45, 42, 15, 12, 5],
            barWidth: 10,
            barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3ca59f'
                    }, {
                        offset: 1,
                        color: '#33ffff'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
           {
            name:'新人',
            type:'bar',
            data:[8,5, 20, 25, 30, 69, 50, 98,60,55, 60, 45, 42, 15, 22, 15],
            barWidth: 10,
            barGap:0,//柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,   
            //       },
            //     },
            // },
             itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ce4d51'
                    }, {
                        offset: 1,
                        color: '#ff455e'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        }
    ]
};