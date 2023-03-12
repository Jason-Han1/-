option = {
    // color: ['#ff2a00', '#ff8400', '#f1b629', '#f1ea29'],
   		title: {
			text: '数据趋势',
			left: '0%',
			top: '2%',
// 			textStyle: {
// 					fontSize: 14,
			
// 			}
		},
    tooltip: {
         padding: 10,
         backgroundColor: 'rgba(0,0,0,0.8)',
        trigger: 'axis',
       	axisPointer: {
        				show: false,
        				lineStyle: {
        					color: '#e1e3e4'
        				}
        			},
        			extraCssText: 'border-radius:0;',
        			formatter: function(params) {
        				var mark = '';
        				for(var i = 0; i < params.length; i++) {
        					mark += '<br/>' + params[i].marker + params[i].seriesName + '：' + params[i].value};
        				return '时间：' + params[0].name + mark;
        			}
    },
    legend: {show: true,
//			orient: 'vertical',
			left: 'center',
			bottom: '0',
			itemGap: 20,
			icon: 'circle',
			itemWidth: 10,
			itemHeight: 10,
		
        data: ['极敏感', '敏感', '较敏感', '低敏感']
    },
    grid: {
         left: '0%',
        right: '8%',
        top: '14%',
        bottom: '14%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
       
        boundaryGap: false,
        data: ['07-01', '07-05', '07-10', '07-15', '07-20', '07-25', '07-30'],
         axisLine: {
            show: true,
            lineStyle: {
                color: '#E1E3E4'
            },
        },
        axisLabel: {
            interval: 0,
            formatter: function(value, index) {
                return value.substring(value.length - 5);
            },
            textStyle: {
                color: '#3E4956',
            },
        },
        axisTick: {
            show: false,
        },
        
    },
    yAxis: {
        type: 'value',
         splitLine: {
            show: true,
            lineStyle: {
                color: '#E1E3E4'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#E1E3E4'
            },
        },
        axisLabel: {
            textStyle: {
                color: '#3E4956'
            },
        },
        axisTick: {
            show: false,
        },

    },
    series: [{
            name: '极敏感',
            type: 'line',
              symbol: 'circle',
           itemStyle: {
                normal: {
                    color: "#ff2a00",
                    borderWidth: 2
                }
            },
            data: [12, 13, 10, 13, 9, 15, 14]
        },
        {
            name: '敏感',
            type: 'line',
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: "#ff8400",
                    borderWidth: 2
                }
            },
            data: [22, 18, 19, 23, 29, 33, 31]
        },
        {
            name: '较敏感',
            type: 'line',
            symbol: 'circle',
            itemStyle: {
                normal: {
                    color: "#f1b629",
                    borderWidth: 2
                }
            },
            data: [25, 40, 20, 15, 19, 33, 41]
        },
        {
            name: '低敏感',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            itemStyle: {
                normal: {
                    color: "#f1ea29",
                    borderWidth: 2
                }
            },
            data: [32, 25, 22, 34, 39, 30, 22]
        },
    ]
};