option = {
    backgroundColor: '#0e2147',
    legend: {
	    show:false,
	},
    xAxis: {
        axisLabel: {
            textStyle: {
				color: '#5C91C4', 
		        fontSize: 12
		   },
        },
        axisLine: {
            lineStyle: {
                color: '#5C91C4'
            }
        },
        data: ['第一人民医院', '第一人民医院', '第一人民医院', '第一人民医院', '第一人民医院']
    },
    yAxis:[
	    {
	    name: '人',
	    nameTextStyle:{
	      color: '#5C91C4',
	      fontSize: 14,
	    },
		  type: 'value',
      position: 'left',
          max: 80,
		  interval: 20,
		  axisLabel: {
		    formatter: '{value}',
		    textStyle: {
				color: '#5C91C4', 
		    fontSize: 12
		  },
		},
		axisLine: { show: false },
		axisTick: { show: false },
		splitLine: {
		    lineStyle: {
		        color: '#5C91C4',
		        type: 'dashed'
		    }
		}
	}],
    series: [
        {
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [20, 2], //宽度
            symbolOffset: [-30, 0],
            symbolMargin: 0, //间隔
            data:[80, 80, 80, 80, 80],
            barGap: 50,
            barCategoryGap: 0,
            zlevel: -1,

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00102A'
                    }, {
                        offset: 1,
                        color: '#00102A'
                    }]),
                }
            }
        },
        {
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [20, 2], //宽度
            symbolMargin: 0, //间隔
            symbolOffset: [0, 0],
            data:[80, 80, 80, 80, 80],
            barGap: 50,
            barCategoryGap: 0,
            z: -1,

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00102A'
                    }, {
                        offset: 1,
                        color: '#00102A'
                    }]),
                }
            }
        },
        {
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [20, 2], //宽度
            symbolMargin: 0, //间隔
            symbolOffset: [30, 0],
            data:[80, 80, 80, 80, 80],
            barGap: 50,
            barCategoryGap: 0,
            zlevel: -1,

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00102A'
                    }, {
                        offset: 1,
                        color: '#00102A'
                    }]),
                }
            }
        },
        {
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [10, 4], //宽度
            symbolOffset: [-30, 0],
            symbolMargin: 1, //间隔
            data:[26, 26, 60, 18, 30],
            barCategoryGap: 150,
            zlevel: 1,

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF0000'
                    }, {
                        offset: 1,
                        color: '#FF0000'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            }
        },
        {
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [10, 4], //宽度
            symbolMargin: 1, //间隔
            symbolOffset: [0, 0],
            data:[60, 20, 40, 12, 42],
            barCategoryGap: 150,
            zlevel: 1,

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFAF00'
                    }, {
                        offset: 1,
                        color: '#FFAF00'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            }
        },{
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [10, 4], //宽度
            symbolMargin: 1, //间隔
            symbolOffset: [30, 0],
            data:[60, 10, 20, 28, 4],
            barCategoryGap: 150,
            zlevel: 1,

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FDFF00'
                    }, {
                        offset: 1,
                        color: '#FDFF00'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            }
        }]
};
