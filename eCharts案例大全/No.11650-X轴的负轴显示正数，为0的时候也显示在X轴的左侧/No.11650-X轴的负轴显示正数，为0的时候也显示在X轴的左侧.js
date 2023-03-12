//      1、无设备字段需要在X轴的负轴，有数据的情况下显示正常，值为0的时候也要显示
// 在X轴的负轴（实际情况是-0是没有意义的数值，即显示在X轴的正轴）
//      2、当值为0的时候，传的值用-0.01代替0（为了让显示效果位置在X轴的负轴）
//      3、用0代替X轴负轴显示的-0.01
//      4、鼠标移入效果同理，用0代替原来的数值
var sda={
    a:100,
    b:120,
    c:130,
    d:0,
    e:150
}
if(sda.d==0){
    sda.d=-0.01
}
option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
		        },
		         formatter:function(params){ // 改鼠标悬浮提示值格式
//		         	alert(params[3].value)
		         	if(params[3].value == -0.01){
		         		params[3].value=0
		         	}
		            var relVal = params[0].seriesName+ ' : ' +params[0].value+'<br/>'+
		            			 params[1].seriesName+ ' : ' +params[1].value+'<br/>'+
		            			 params[2].seriesName+ ' : ' +params[2].value+'<br/>'+
		            			 params[3].seriesName+ ' : ' +(-params[3].value)+'<br/>'+
		            			 params[4].seriesName+ ' : ' +params[4].value
		            return relVal;
		        }
		    },
		    grid: {
		    	top:'8%',
		        left: '6%',
		        right: '25%',
		        bottom: '1%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'value',
		            show:false,
//					type : 'category',
		            axisLabel:{
		                formatter:function(value){
		                    if (value<0) {
		                        return -value;
		                    }
		                }
		            }
		        }
		    ],
		    yAxis : [
		        {
		            show:false,
		            axisTick : {show: false},
		            data : [''],
//		            axisLabel:{
//		            	formatter:function(value, index){
//		            		if(value<0){
//		            			return -value
//		            		}
//		            	}
//		            	formatter:function (value, index) { if(value<0){ return -value;
//		            }
		        }
		    ],
		    series : [
		        {
		            name:'铁塔',
		            type:'bar',
		            stack: '总量1',
		             barMinHeight:34,
		             barWidth:20,
		             barGap:'180%',/*多个并排柱子设置柱子之间的间距*/

		            label: {
		                normal: {
		                    show: true,
		                    formatter: '{a}\n\n{c}',
		                    position: ['12%','-90%']
							
		                }
		            },
		            data:[sda.a],
		            itemStyle: {
						normal: {
							color: "#83B2FA",
							label: {
									textStyle: { 
										color: 'black',	//fontSize: 14
									}
								}
						},
					}
		        },
		        {
		            name:'自留',
		            type:'bar',
		            stack: '总量1',
		             barMinHeight:34,
		             barWidth:20,
		            label: {
		                normal: {
		                    show: true,
		                    formatter: '{a}\n\n{c}',
		                    position: ['12%','-90%']
		                }
		            },
		            data:[sda.b],
		            itemStyle: {
						normal: {
							color: "#90FB91",
							label: {
									textStyle: { 
										color: 'black',	//fontSize: 14
									}
								}
						},
					}
		        },
		        {
		            name:'三方',
		            type:'bar',
		            stack: '总量1',
		             barMinHeight:34,
		             barWidth:20,
		            label: {
		                normal: {
		                    show: true,
		                    formatter: '{a}\n\n{c}',
		                    position: ['12%','-90%']
		                }
		            },
		            data:[sda.c],
		            itemStyle: {
						normal: {
							color: "#fff",
							 shadowColor: '#1B66FF',
		                    shadowBlur:1.5,
							label: {
									textStyle: { 
										color: 'black',	//fontSize: 14
									}
								}
						},
					}
		        },
		        {
		            name:'无设备',
		            type:'bar',
		            stack: '总量2',
		            barMinHeight:34,
		             barWidth:20,
		            label: {
		                normal: {
		                    show: true,
		                    position: ['12%','26%'],
		                    formatter: function(value){
		                    	var numss = ''
		                    	if(value.data!=-0.01){
		                    		numss = -value.data+'\n\n无设备';
		                    	}else if(value.data == -0.01){
		                    		numss = 0+'\n\n无设备';
		                    	}
		                       	return numss;
		                   	}
//		                    formatter:function (value){
//		                    	if(value.data<0){
//		                            return -value.data+'\n\n无设备';
//		                        }
//		                    }
		                }
		            },
		            data:[sda.d],
//		            data:[2],
		            itemStyle: {
						normal: {
							color: "#fff",
							 shadowColor: '#1B66FF',
		                    shadowBlur:1.5,
							label: {
									textStyle: { 
										color: 'black',	//fontSize: 14
									}
								}
						},
					}
		        },
		        {
		            name:'有设备',
		            type:'bar',
		            stack: '总量2',
		             barMinHeight:34,
		             barWidth:20,
		            label: {
		                normal: {
		                    show: true,
		                    formatter: '{c}\n\n{a}',
		                    position: ['12%','26%']
		                }
		            },
		            data:[sda.e],
		            itemStyle: {
						normal: {
							color: "#83B2FA",
							label: {
									textStyle: { 
										color: 'black',	//fontSize: 14
									}
								}
						},
					}
		        }
		    ]
		};