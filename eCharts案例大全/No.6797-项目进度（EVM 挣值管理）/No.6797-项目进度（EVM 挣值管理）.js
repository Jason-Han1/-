option = {
    backgroundColor: '#fff',
    title: {
        text: "挣值管理EVM"
    },
    color: ['#73A0FA', '#73DEB3', '#FFB761'],
    tooltip1: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    grid1: {
        left: '25',
        right: '25',
        bottom: '24',
        top: '75',
        containLabel: true
    },
    legend: {
        data: ['PV', 'AC', 'EV'],
        orient: 'horizontal',
        icon1: "rect",
        show: true,
        left1: 20,
        top1: 25,
    },
    xAxis: {
        type: 'category',
        data: ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        // max: max_value>=100? max_value + 100: max_value+10,
        // max: max_value > 100 ? max_value * 2 : max_value + 10,
        // interval: 10,
        // nameLocation: "center",
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#F3F4F4'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    series: [{
            name: 'PV',
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: [10,15,45,49,55,60,90],
            itemStyle: {
		        normal: {
		            color:'rgba(115, 160, 250, 1)',
		            lineStyle: {
						color: "rgba(115, 160, 250, 1)",
						width:2
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(115, 160, 250, 0)'
						}, {
							offset: 1,
							color: 'rgba(115, 160, 250, 0.35)'
						}]),
		            }
		        }
			}
        },
        {
            name: 'AC',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [20,26,47,54, 59, 77],
            itemStyle: {
		        normal: {
		            color:'rgba(255,80,124, 1)',
		            lineStyle: {
						color: "rgba(255,80,124, 1)",
						width:2
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(255,80,124,0)'
						}, {
							offset: 1,
							color: 'rgba(255,80,124,0.35)'
						}]),
		            }
		        }
			}
        },{
           name:'ETC',
           type:'line',
           smooth:true,
           showSymbol: false,
           data:["-", "-", "-", "-", "-", 77, 105],
           itemStyle:{
               normal:{
                   lineStyle:{
                       width:2,
                       color: "rgba(255,80,124, 1)",
                       type:'dotted'  //'dotted'虚线 'solid'实线
                   }
               }
           }
       },
        {
            name: 'EV',
            type: 'line',
            smooth: true,
            showSymbol: false,
            data: [19,20,32,49,50,58],
            itemStyle: {
		        normal: {
		            color:'rgba(115, 222, 179, 1)',
		            lineStyle: {
						color: "rgba(115, 222, 179,1)",
						width:2
		            },
		            areaStyle: { 
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(115, 222, 179,0)'
						}, {
							offset: 1,
							color: 'rgba(115, 222, 179,0.35)'
						}]),
		            }
		        }
			},
			markLine: {
    			lineStyle: {
    				normal: {
    					color: '#0f77e9',
    				},
    			},
    			label: {
    				normal: {
    					formatter: function(params) {
    						return '当前 ';
    					},
    				},
    			},
    			data: [{
    				name: '当前时间',
    				xAxis: '第6周'
    			}, ]
    		}
        }
    ]
};