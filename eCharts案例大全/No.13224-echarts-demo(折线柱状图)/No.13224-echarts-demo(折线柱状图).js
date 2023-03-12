option={
      title: {
	        text: '2019年销售水量和主营业务收入对比',
	        textStyle: {
	        	 align: 'center',
	            color: '#fff',
	            fontSize: 20,
	        },
	        top: '3%',
	        left: '10%',
	    },
                backgroundColor:'#08254F',
                 grid: {
                        top: "25%",
                        bottom: "10%"
                    },
                                // tooltip（提示框组件）
                tooltip: {
                    //trigger(触发类型)，可选'item','axis','none'
                    trigger: 'axis',
                    axisPointer: {
                        //指示器类型,可选'line','shadow','cross'
                        type: 'shadow'
                        },
                        
                        //使用回调函数自定义显示
                        // formatter: function(prams) {
                        //     return ('降水量：'+prams[0].data+'ml'+'<br />'+
                        //             '蒸发量：'+prams[1].data+'ml'+'<br />'+
                        //             '平均气温：'+prams[2].data+'℃');
                        //         },

                        //使用字符串模板自定义显示
                        formatter:'{a0}：{c0}ml<br/>{a1}：{c1}ml<br/>{a2}：{c2}℃',
                    },
                legend:{
                     top: "10%",
                     right:"5%",
                    name:['蒸发量','降水量','平均气温'],
                    textStyle:{
                        fontSize:24,
                        color:'#fff',
                    },
                },
                xAxis: {
                    type: 'category',
                    //axisTick 坐标轴刻度相关设置
                    axisTick: {
                        show: false
                        },
                    //axixLine 坐标轴轴线相关设置
                    axisLine: {
                        lineStyle: {
                            color: '#FFFFFF',
                            }
                        },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun'],
                    //axisLabel 坐标轴刻度标签的相关设置
                    axisLabel: {
                        // show: true,
                        color: '#fff',
                        fontSize: 14,
                        }
                    },
                yAxis: [{
                        name:'降水量/蒸发量',
                        type: 'value',
                        axisLabel: {
                            show: true,
                            color: '#fff',
                            fontSize: 14,
                            formatter:'{value}ml',
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFFFFF'
                                }
                        },
                        axisTick: {
                            // show: false
                        },
                    },{
                        name:'平均气温',
                        type: 'value',
                        position:'right',
                        axisLabel: {
                            show: true,
                            color: '#fff',
                            fontSize: 14,
                            formatter:'{value}℃',
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#FFFFFF'
                                }
                        },
                        axisTick: {
                            // show: false
                        },
                    }
                    ],
                series: [{
                        name: '降水量',
                        //type决定图表类型
                        type: 'bar',
                        data: [150,160,120,120,180,40,20,],
                        barWidth: '30%',
                        itemStyle: {
                            color:'#00C1FF',
                        }
                    },{
                        name: '蒸发量',
                        //type决定图表类型
                        type: 'bar',
                        data: [20,15,25,10,15,30,40],
                        barWidth: '30%',
                        itemStyle: {
                            color:'#51FFAE',
                        }
                    },{
                        name: '平均气温',
                        //type决定图表类型
                        type: 'line',
                        yAxisIndex:1,
                        data: [24,22,24,26,30,28,32],
                        itemStyle: {
                            color:'#39E7FB',
                        }
                    }
                    ]
                };