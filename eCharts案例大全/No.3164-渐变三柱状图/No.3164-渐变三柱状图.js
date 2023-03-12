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
        data: ['越秀', '海珠', '天河', '荔湾', '白云', '增城', '黄埔']
    },
    yAxis:[
	    {
	    name: '家',
	    nameTextStyle:{
	      color: '#5C91C4',
	      fontSize: 14,
	    },
		  type: 'value',
      position: 'left',
          max: 8,
		  interval: 2,
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
    series: [{
        type: 'bar',
        barWidth: 8,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF8000'
                }, {
                    offset: 1,
                    color: '#FF0000'
                }]),
                barBorderRadius: [4,4,0,0],
            },
          },
        data:[3.9, 3.9, 2, 2.8, 6.2, 1, 5.6]
    },{
        type: 'bar',
        barWidth: 8,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FFE000'
                }, {
                    offset: 1,
                    color: '#FF7500'
                }]),
                barBorderRadius: [4,4,0,0],
            },
          },
        data:[5.8, 5.8, 4.4, 4, 4.4, 2.8, 6]
    },{
        type: 'bar',
        barWidth: 8,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FDFF00'
                }, {
                    offset: 1,
                    color: '#BDFF00'
                }]),
                barBorderRadius: [4,4,0,0],
            },
          },
        data:[5.8, 5.8, 4.4, 4, 4.4, 2.8, 6]
    }]
};
