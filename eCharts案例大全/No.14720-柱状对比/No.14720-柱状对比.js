//多Y轴，自定义气泡（折柱混合）
app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
     title: {
            text: '各版本指标',
            subtext: '指标对比',
            textAlign: 'left'
        },
    backgroundColor:'#fff',
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    grid: {
		top:'8%', 
		right: '3%',
		left: '8%',
		bottom: '5%'
	},
    legend: {
        data:[ '降水量','蒸发量','降雪量','水量' ]
    },
    xAxis: [
        {
            type: 'category',
            data: ['默认版本','版本一','版本二','版本三','版本四'],
            axisPointer: {
                type: 'line'
            },
            axisLabel: {
				margin: 20,
				textStyle:{ fontSize:12},
				 lineStyle: {
                color: '#dbe0e6'
            }
			},
			
        }
    ],
    yAxis: [
        {
          
            min: 0,
            max: 2500,
            interval: 250,
            axisLabel: {
                formatter: '{value}'
            }, 
            
        },
       
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[222, 504, 887, 1323, 1395],
            barWidth:'30px',
            markPoint : {
                data : [
                    {name : '蒸发', value : 1300002.0003, xAxis: 3, yAxis: 1323,symbolSize:120,
                        itemStyle:{
                            normal:{
                                color:'#fe8040',
                            }
                        }
                    },
                    {name : '蒸发', value : 1676, xAxis: 0, yAxis: 222,symbolSize:80,
                        itemStyle:{
                            normal:{
                                color:'#6080d3',
                            }
                        }
                    },
                ],
               itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return '最低\n\n'+result;
			                 },     
                          } ,
                        
                    }  
                },
            },
            itemStyle: {
            
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#2ab6f6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#75d5ff' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30,0, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
        },
        {
            name:'降水量',
            type:'bar',
            data:[565, 244, 999, 1126, 1428],
            barWidth:'30px',
            markPoint : {
                data : [
                    {name : '降水', value : 1428, xAxis: 4, yAxis: 1428,symbolSize:120,
                         itemStyle:{
                            normal:{
                                color:'#fe8040',
                            }
                        }
                    },
                     {name : '降水', value : 1428, xAxis: 1, yAxis:244,symbolSize:80,
                         itemStyle:{
                            normal:{
                                color:'#6080d3',
                            },
                            
                        }
                    },
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return '最高\n\n'+result;
			                 },     
                          } ,
                        
                    }  
                },
            },
            itemStyle: {
            
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#40c91b' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#59df34' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30,0, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
            
        },
        {
            name:'降雪量',
            type:'bar',
            data:[165, 544, 1399, 926, 628],
            barWidth:'30px',
            markPoint : {
                 data : [
                    {name : '降水', value : 1399, xAxis: 2, yAxis: 1428,symbolSize:120,
                         itemStyle:{
                            normal:{
                                color:'#fe8040',
                            }
                        }
                    },
                     {name : '降水', value : 165, xAxis: 0, yAxis:244,symbolSize:80,
                         itemStyle:{
                            normal:{
                                color:'#6080d3',
                            },
                            
                        }
                    },
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return '最高\n\n'+result;
			                 },     
                          } ,
                        
                    }  
                },
            },
            itemStyle: {
            
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fb9b1f' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ffb14d' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30,0, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
            
        },
         {
            name:'水量',
            type:'bar',
            data:[165, 544, 1399, 1526, 628],
            barWidth:'30px',
            markPoint : {
                 data : [
                    {name : '降水', value : 1399, xAxis: 3, yAxis: 1399,symbolSize:120,
                         itemStyle:{
                            normal:{
                                color:'#fe8040',
                            }
                        }
                    },
                     {name : '降水', value : 165, xAxis: 0, yAxis:244,symbolSize:80,
                         itemStyle:{
                            normal:{
                                color:'#6080d3',
                            },
                            
                        }
                    },
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return '最高\n\n'+result;
			                 },     
                          } ,
                        
                    }  
                },
            },
            itemStyle: {
            
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8e8d8d' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#b0b0b0' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30,0, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        }
            
        },
        
    ]
};
