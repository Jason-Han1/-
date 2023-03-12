option = {
    
	    backgroundColor: '#fff',
	    title:{
	        textStyle:{
	            color: '#000000',
	        }
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['1', '2', '3', '4', '5', '6'],
	        left:'center',
	        align: 'left',
	        top:'2%',
	        textStyle: {
	            color: "#000000"
	        },
	        itemWidth: 10,
	        itemHeight: 10,
	        itemGap: 35
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        data: ['a','b','c','d','e','f'],
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: "#00c7ff",
	                width: 1,
	                type: "solid"
	            }
	        },
	        axisTick: {
	            show: true,
	        },
	        axisLabel: {
	            show: true,
	            textStyle: {
	                color: "#00c7ff",
	            }
	        },
	    }],
	    yAxis: [{
	        type: 'value',
	        axisLabel: {
	            formatter: '{value}'
	        },
	        axisTick: {
	            show: false,
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: "#00c7ff",
	                width: 1,
	                type: "solid"
	            },
	        },
	        splitLine: {
	            lineStyle: {
	                color: "#f6f6f6",
	            }
	        }
	    }],
	    series: [{
	        name: '1',
	        type: 'bar',
	        data: [330,260,40,100,60,80],
	        barWidth: 16, //柱子宽度
	        barGap: 1, //柱子之间间距
	        stack: 'sum1',
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#00C7E1'
	                }, {
	                    offset: 1,
	                    color: '#005193'
	                }]),
	                opacity: 1,
	                //barBorderRadius: 12,
	                label: {
	                    show: true, //开启显示
	                    //position: 'top', //在上方显示
	                    textStyle: { //数值样式
	                        color: '#000000',
	                        fontSize: 8
	                    }
	                },
	            }
	        }
	    }, {
	        name: '2',
	        type: 'bar',
	        data: [30,65,45,120,60,50],
	        barWidth: 16,
	        barGap: 1,
	        stack: 'sum1',
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#00da9c'
	                }, {
	                    offset: 1,
	                    color: '#007a55'
	                }]),
	                opacity: 1,
	                //barBorderRadius: 12,
	                label: {
	                    show: true, //开启显示
	                    //position: 'top', //在上方显示
	                    textStyle: { //数值样式
	                        color: '#000000',
	                        fontSize: 8
	                    }
	                },
	            }
	        }
	    }, {
	        name: '3',
	        type: 'bar',
	        data: [320,60,50,80,60,280],
	        barWidth: 16,
	        barGap: 1,
	        stack: 'sum1',
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#7CB8F8'
	                }, {
	                    offset: 1,
	                    color: '#051B8F'
	                }]),
	                opacity: 1,
	                //barBorderRadius: 12,
	                label: {
	                    show: true, //开启显示
	                    //position: 'top', //在上方显示
	                    textStyle: { //数值样式
	                        color: '#000000',
	                        fontSize: 8
	                    }
	                },
	            }
	        }
	    },{
	        name: '4',
	        type: 'bar',
	        data: [20,60,140,200,60,70],
	        barWidth: 16, //柱子宽度
	        barGap: 1, //柱子之间间距
	        stack: 'sum1',
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#02C7E1'
	                }, {
	                    offset: 1,
	                    color: '#025193'
	                }]),
	                opacity: 1,
	                //barBorderRadius: 12,
	                label: {
	                    show: true, //开启显示
	                    //position: 'top', //在上方显示
	                    textStyle: { //数值样式
	                        color: '#000000',
	                        fontSize: 8
	                    }
	                },
	            }
	        }
	    }, {
	        name: '5',
	        type: 'bar',
	        data: [130,160,40,100,60,80],
	        barWidth: 16,
	        barGap: 1,
	        stack: 'sum1',
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#03da9c'
	                }, {
	                    offset: 1,
	                    color: '#037a55'
	                }]),
	                opacity: 1,
	                //barBorderRadius: 12,
	                label: {
	                    show: true, //开启显示
	                    //position: 'top', //在上方显示
	                    textStyle: { //数值样式
	                        color: '#000000',
	                        fontSize: 8
	                    }
	                },
	            }
	        }
	    }, {
	        name: '6',
	        type: 'bar',
	        data: [30,60,40,100,60,80],
	        barWidth: 16,
	        barGap: 1,
	        stack: 'sum1',
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#7CB8FF'
	                }, {
	                    offset: 1,
	                    color: '#751B8F'
	                }]),
	                opacity: 1,
	                //barBorderRadius: 12,
	                label: {
	                    show: true, //开启显示
	                    //position: 'top', //在上方显示
	                    textStyle: { //数值样式
	                        color: '#000000',
	                        fontSize: 8
	                    }
	                },
	            }
	        }
	    }]
	
};