option = {
    graphic:[
        /*最外层圆线*/
        {
            type:'circle',
            left:'center',
            top:'middle',
            shape:{r:380},
            style:{
                fill:'#113048'
            }
        },
        /*最底层圆*/
        {
            type:'ring',
            left:'center',
            top:'middle',
            shape:{
                r:390,
                r0:392
            },
            style:{
                fill:'#113048'
            }
        }
    ],
	series: [
	    /*仪表盘图，做中间刻度线*/
		{
			type: 'gauge',
			name: '业务指标',
			radius:'60%',
			startAngle:'0',
			endAngle:'-359.99',
			splitNumber:'100',
			pointer:{
				show:false
			},
			detail: {show:false},
			data: [{value: 95, name: '完成率'}],
			axisLine:{
				lineStyle: {
					color:[[1,new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(4, 234,255, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(74, 87,254, 1)'
                    }, {
                        offset:1,
                       color: 'rgba(59, 119,254, 1)'
                    }])]],
					width: 20,
					opacity: 1
				}
			},
			axisTick: {show: false},
			splitLine: {
				show: true,
				length:20,
				lineStyle: {
					color: 'rgba(255,255,255,1)',
					width: 2,
					type: 'solid',
				},
			},
			axisLabel: {
				show: false
			}
		},
		/*内心原型图，展示整体数据概览*/
		{
        name: 'pie',
        type: 'pie',
        clockWise: true,
        startAngle:-270,
        radius: ['48%', '50%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 5,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '60',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#f74369',
                    shadowColor: '#f74369',
                    shadowBlur: 10
                }
            }
        }, {
            value: 5,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#6cf', // 未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }]
    }
	]
};option = {
    graphic:[
        /*最外层圆线*/
        {
            type:'circle',
            left:'center',
            top:'middle',
            shape:{r:380},
            style:{
                fill:'#113048'
            }
        },
        /*最底层圆*/
        {
            type:'ring',
            left:'center',
            top:'middle',
            shape:{
                r:390,
                r0:392
            },
            style:{
                fill:'#113048'
            }
        }
    ],
	series: [
	    /*仪表盘图，做中间刻度线*/
		{
			type: 'gauge',
			name: '业务指标',
			radius:'60%',
			startAngle:'0',
			endAngle:'-359.99',
			splitNumber:'100',
			pointer:{
				show:false
			},
			detail: {show:false},
			data: [{value: 95, name: '完成率'}],
			axisLine:{
				lineStyle: {
					color:[[1,new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(4, 234,255, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(74, 87,254, 1)'
                    }, {
                        offset:1,
                       color: 'rgba(59, 119,254, 1)'
                    }])]],
					width: 20,
					opacity: 1
				}
			},
			axisTick: {show: false},
			splitLine: {
				show: true,
				length:20,
				lineStyle: {
					color: 'rgba(255,255,255,1)',
					width: 2,
					type: 'solid',
				},
			},
			axisLabel: {
				show: false
			}
		},
		/*内心原型图，展示整体数据概览*/
		{
        name: 'pie',
        type: 'pie',
        clockWise: true,
        startAngle:-270,
        radius: ['48%', '50%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 5,
            label: {
                normal: {
                    formatter: '{d}%',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '60',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#f74369',
                    shadowColor: '#f74369',
                    shadowBlur: 10
                }
            }
        }, {
            value: 5,
            name: 'invisible',
            itemStyle: {
                normal: {
                    color: '#6cf', // 未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }]
    }
	]
};