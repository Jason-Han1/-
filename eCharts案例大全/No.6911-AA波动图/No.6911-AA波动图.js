option = {
    title: {
        text: 'AA波动图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['2018', '2019','2020']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
		type: 'category',
	    id:2,
	    show:false,
	    boundaryGap: false,//坐标轴两边留白
		data: ['12201', '12202', '12203','12204','12301','12302','12303','12304','12401', '12402', '12403','12404'],
    },
    yAxis: [
		{
		    id:1,
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
			    onZeroAxisIndex:2,
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#E5E9ED',
				// 	opacity:0.1
				}
			}

		}
	],
    series: [
       
       
         {
            name: '2020',
            type: 'line',
            itemStyle: {
		        normal: {
		            color:'#ffb0f1',
		            lineStyle: {
						color:'#ffb0f1',
						width:1
		            },
		            areaStyle: '#ffb0f1',
		        }
			},
            data: [19, 15,17,18,16,17,18,17,17,16,18,16]
        },
         {
            name: '2020',
            type: 'line',
            itemStyle: {
		        normal: {
		            color:'#ffb0f1',
		            lineStyle: {
						color: '#ffb0f1',
						width:1
		            },
		            areaStyle: '#ffb0f1'
		        }
			},
            data: [-19, -15,-17,-18,-16,-17,-18,-17,-17,-16,-18,-16]
        },
         {
            name: '2019',
            type: 'line',
            itemStyle: {
		        normal: {
		            color:'#fb73e3',
		            lineStyle: {
						color:'#fb73e3',
						width:1
		            },
		            areaStyle:  '#fb73e3',
		        }
			},
            data:[14, 10, 12, 13, 11, 12, 13, 12, 12, 11, 13, 11]
        },
         {
            name: '2019',
            type: 'line',
            itemStyle: {
		        normal: {
		            color:'#fb73e3',
		            lineStyle: {
						color: '#fb73e3',
						width:1
		            },
		            areaStyle: '#fb73e3'
		        }
			},
            data: [-14, -10, -12, -13, -11, -12, -13, -12, -12, -11, -13, -11]
        },
         {
            name: '2018',
            type: 'line',
            itemStyle: {
		        normal: {
					color:'#fb5df5',
		            lineStyle: {
						color:'#fb5df5',
						width:1
		            },
		            areaStyle: '#fb5df5',
		        }
			},
            data:  [3, 4, 5, 5, 7, 8, 7, 5, 8, 7, 7, 6]
        },
        {
            name: '2018',
            type: 'line',
            itemStyle: {
		        normal: {
					color:'#fb5df5',
		            lineStyle: {
						color: '#fb5df5',
						width:1
		            },
		            areaStyle: '#fb5df5',
		        }
			},
            data: [-3, -4, -5, -5, -7, -8, -7, -5, -8, -7, -7, -6]
        },
    ]
};
