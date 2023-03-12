const datas = {
			        	    value:63.5,
			        	    text:"在线率"
			        	}
option = {
    backgroundColor:"#000",
    series: [
        /*仪表盘图，做中间刻度线*/
    	{
    		type: 'gauge',
    		name: '',
    		radius:'25%',
    		startAngle:'0',
    		endAngle:'-359.99',
    		center: ['50%', '45%'],
    		splitNumber:'80',
    		pointer:{
    			show:false
    		},
    		title:{
    		    show:false
    		},
    		detail: {
    			show:false
    		},
    		axisLine:{
    			lineStyle: { 
    				width: 20,
    				opacity: 0
    			}
    		},
    		axisTick: {
    			show: false
    		},
    		splitLine: {
    			show: true,
    			length:7,
    			lineStyle: {
    				color:  {
                          type: 'linear',
                          colorStops: [{
                              offset: 0, color: '#01FFFF' // 0% 处的颜色
                          }, {
                              offset: 1, color: '#8124FF' // 100% 处的颜色
                          }],
                        },
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
        startAngle:90,
        radius: ['20%', '23%'],
        hoverAnimation: false,
        center: ['50%', '45%'],
        data: [{
            value: datas.value,
            label: {
                normal: {
                    formatter: '{d}{cell|%}\n{text|     '+datas.text+'}',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '23',
                        fontWeight: 'normal',
                        color: '#01FFFF',
                         lineHeight:20,
                        
                        rich:{
                            cell:{
                                 fontSize: '14',
                                fontWeight: 'normal',
                                color: '#01FFFF',
                                padding:[0,0,0,5]
                            },
                            text:{
                                 fontSize: 16,
                                fontFamily: 'FZLanTingHeiS-L-GB',
                                fontFeight: 400,
                                color: '#A1D1EA',
                                padding:[5,35,0,10]
                            }
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color:new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                offset: 0,
                                color: '#8124FF'
                            }, {
                                offset: 1,
                                color: '#01FFFF'
                            }]),
                    shadowColor: 'rgba(1,1,1,0.5)',
                    shadowBlur: 1
                }
            }
        }, {
            value: 100 -  datas.value,
            name: '',
            itemStyle: {
                normal: {
                    color: 'rgba(247,67,105,0)', // 未完成的圆环的颜色
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(44,59,70,0)' // 未完成的圆环的颜色
                }
            }
        }]
    }
    ]
    };
