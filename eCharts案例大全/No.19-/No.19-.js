let  IndexGlobe = null;
let datas = {
    	datas_line:{
    		colors:['rgba(255, 201, 13', 'rgba(52, 249, 177', 'rgba(255, 69, 69', 'rgba(255, 114, 0'],    		
    		lineX:["测试1", "测试2","测试3", "测试4", "测试5", "测试6","测试7","测试8"],
        	names:["2020",	"2021"],
        	value:[
        	       [100,90,90,80,70,60,50,40],
        	       [99,89,109,69,59,48,39,95]]
      
    	},
    	datas_bar:{
    		colors: ["rgba(56, 223, 238, 1)","rgba(125, 56, 238, 1)"],
        	lineX:["测试1", "测试2","测试3", "测试4", "测试5", "测试6","测试7","测试8"],
        	names:["2020",	"2021"],
        	value:[[21,21,16,95,14,11,32,34],
        	       [34,33,27,25,23,19,39,40]]
        
       
    	}
    }
let seriesArr = [];
	let legendArr = [];
	legendArr.push({
	    top: '0%',
	    data: datas.datas_line.names,
	    textStyle: {
	        fontSize: 14,
	        color: 'F1F1F3'
	    },
	    left: '70',
	    itemWidth:10,
	    itemHeight:10
	})
	
	legendArr.push({
	    top:"0%",
	    data: datas.datas_bar.names,
	    textStyle: {
	        fontSize: 14,
	        color: 'F1F1F3'
	    },
	    left: '70',
	    itemWidth:10,
	    itemHeight:10
	})
	
	
	datas.datas_line.value.forEach(function(data,index){
		seriesArr.push({
			 name: datas.datas_line.names[index],
		        type: 'line',
		        xAxisIndex: 1,
		         yAxisIndex: 1,
		        color: datas.datas_line.colors[index] + ',1)',
		        symbolSize: 0,
		         symbol: 'circle',
		        smooth: false,
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: datas.datas_line.colors[index] + ', 0.3)'
		                }, {
		                    offset: 0.8,
		                    color: datas.datas_line.colors[index] + ', 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		       
		        data: datas.datas_line.value[index],
		            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#ffffff',
                },
                 formatter:function(result){
                  
                    if(result.dataIndex == IndexGlobe){
                        return result.value
                    }else {
                        return ""
                    }
                }
            },
		    })
		})
	datas.datas_bar.value.forEach(function(data,index){
		seriesArr.push({
            name: datas.datas_bar.names[index],
            type: 'bar',
            barWidth: '15',
            itemStyle: {
                normal: {
                    color: datas.datas_bar.colors[index],
                    barBorderRadius: [12, 12, 0, 0],
                },
            },
            data:data,
             label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#ffffff',
                },
                 formatter:function(result){
                
                    if(result.dataIndex == IndexGlobe){
                        return result.value
                    }else {
                        return ""
                    }
                }
            },
        })
	})
	
	
	
	 option = {
	  backgroundColor:"rgba(0,0,0,1)",
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                backgroundColor  : 'rgba(0,0,0,0.7)',
		        textStyle:{
		        	color:"#ffffff"
		        },
		        borderWidth :0,
		        formatter:function(params){
		        debugger
		        let html = "";
		        html += params[0].name + "\n";
		        debugger
         for(let i = 0;i<datas.datas_line.names.length;i++){
          	html+= "<div>"+ datas.datas_line.names[i] +": "+datas.datas_line.value[i][params[0].dataIndex] + "</div>"
          }
		         html+="<div style='margin-top:10px'></div>"
		         for(let j = 0;j<datas.datas_bar.names.length;j++){
          	html+=   "<div>" +datas.datas_bar.names[j] +": "+datas.datas_bar.value[j][params[0].dataIndex]+ "</div>"
          }
		          IndexGlobe = params[0].dataIndex;
		         myChart.setOption(option)
		         return html
		        },
            },
            axisPointer: {
                link: [
                   {
                      // 表示所有 xAxisIndex 为 0、3、4 和 yAxisName 为 'someName' 的坐标轴联动。
                      xAxisIndex: [0, 1],
                      yAxisName: 'someName',
                   },
                  
                ],
             },
            dataZoom: [{
		        show: false,
		        height: 0,
		        xAxisIndex: [0, 1],
		        bottom: 30,
		        
		        "start": 0,
		        "end": 40,
		      
		        handleStyle: {
		            color: "rgba(0,0,0,0)",
		        },
		        textStyle:{
		            color:"rgba(204,187,225,0)",
		        },
		        fillerColor:"rgba(67,55,160,0)",
		        borderColor: "rgba(204,187,225,0)",

		    },{
		        show: false,
		        height: 0,
		        xAxisIndex: [0, 1],
		        bottom: 30,
		        
		        "start": 0,
		        "end": 20,
		      
		        handleStyle: {
		            color: "rgba(0,0,0,0)",
		        },
		        textStyle:{
		            color:"rgba(204,187,225,0)",
		        },
		        fillerColor:"rgba(67,55,160,0)",
		        borderColor: "rgba(204,187,225,0)",

		    }],
		    legend: legendArr,
		    grid: [{
		        top: '50',
		        left: '4%',
		        right: '4%',
		        bottom: '50%',
		        containLabel: true
		    },{
		        top: '55%',
		        left: '4%',
		        right: '4%',
		        bottom: '25',
		        containLabel: true
		    }
		           ],
            xAxis: [
					{
					    type: 'category',
					    data:datas.datas_line.lineX ,
					    axisLabel: {
					         textStyle: {
					            color: '#7CAAFB',
					            fontSize:12
					        },
					        interval:0
					
					    },
					     splitLine: {
					         show:true,
					        lineStyle: {
					            color: '#2883E0'
					        }
					    },
					
					    axisLine: {
					        	show:true,
					        lineStyle: {
					            color: '#2883E0'
					        }
					    }
					},
					{
					    type: 'category',
					    gridIndex: 1, 
					    data:datas.datas_bar.lineX ,
					    axisLabel: {
					         textStyle: {
					            color: '#7CAAFB',
					            fontSize:12
					        },
					        interval:0
					    },
					     splitLine: {
					         show:true,
					        lineStyle: {
					            color: '#2883E0'
					        }
					    },
					
					    axisLine: {
					        	show:true,
					        lineStyle: {
					            color: '#2883E0'
					        }
					    }
					}
                    ],
            yAxis:[ {
                type: 'value',
                axisLabel: {
			         textStyle: {
			            color: '#7CAAFB',
			            fontSize:12
			        },
                 },
			     splitLine: {
			         show:true,
			        lineStyle: {
			            color: '#2883E0'
			        }
			    },
			    axisLine: {
			        show:true,
			        lineStyle: {
			            color: '#2883E0'
			        }
			    }
            } ,{
                type: 'value',
                gridIndex: 1,
                axisLabel: {
			         textStyle: {
			            color: '#7CAAFB',
			            fontSize:12
			        },
                 },
			     splitLine: {
			         show:true,
			        lineStyle: {
			            color: '#2883E0'
			        }
			    },
			    axisLine: {
			        show:true,
			        lineStyle: {
			            color: '#2883E0'
			        }
			    }
            }],
            series:seriesArr
};
	

   
    var timeOut=null
    myChart.on('mouseover',stop);
    myChart.on('mouseout',goMove);
    autoMove()
    function autoMove(){
       timeOut = setInterval(() => {
           
            if (Number(option.dataZoom[0].end)  > 100) {
                option.dataZoom[0].end = 40;
                option.dataZoom[0].start = 0;
            } else {
                option.dataZoom[0].end = option.dataZoom[0].end + 1 *  (100 / option.series[0].data.length);
                option.dataZoom[0].start = option.dataZoom[0].start + 1 *  (100 / option.series[0].data.length);
            }
            myChart.setOption(option);
        }, 2500);
    }
        //停止滚动
      function stop(){
          clearInterval(timeOut)
      }
        //继续滚动
       function goMove(){
          autoMove()
         
        }

