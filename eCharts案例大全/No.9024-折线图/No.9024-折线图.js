var option = {
    // backgroundColor:'#000',
	        tooltip: {
                trigger: 'axis',       
                backgroundColor:"rgba(255,255,255,0.1)",
                axisPointer:{type:'none',lineStyle:{color:'rgba(255,255,255,0.1)'}},
       textStyle:{
          fontSize:'28',
          },
 
          formatter: function(params){
            var result = ""
            var respon = ""
                       for (var key = 0;  key < params.length ; key++){
                respon =params[key].seriesName +"："+ params[key].value;
                if(params[key].seriesName=="占比"){
                        result = result + respon + "%" + "<br/>" 
                 }else{
                        result = result + respon + "个" + "<br/>"
                }
            }
            return params[0].name+"<br/>"+result   
          }
	            // padding: [8, 8, 8, 8],
	        },
	   //     legend: {
	   //     //   icon: 'stack',
	   //       left:697,
	   //       top:10,
	   //       itemWidth: 15,
	   //       itemHeight: 10,
	   //       textStyle: {
	   //         color: '#ccc'
	   //       },
	   //       data: ['电信', '移动'],
	   //   },
	        grid: {
	           // top: '20%',
	           // left: '3%',
	           // right: '4%',
	           // bottom: '30%',
	           // height: '75%',
	            containLabel: true
            },
         
	        xAxis: {
	            type: 'category',
	            boundaryGap: false,
	            data: ['标准支持', '服务支持', '技术支持', '市场支持', '资金支持','信息人才', '政策支持', '其他'],
	            axisLine: {
	                lineStyle: {
	                      color: "#50556b",
						  type:'dotted',
	                }
	            },
	              axisLabel:{
	                  textStyle:{
	                      color:'#fff',fontSize:24
	                  },
                    rotate:-30,
                    interval:0
                },
	           // axisLabel:{ textStyle:{color: '#999999', fontSize:'10', fontFamily: 'Microsoft YaHei'}},
	            axisTick:{length:0},
	        },
	        yAxis:[{
	            type: 'value',
	            min:0,
	            max:300,
	            yAxisIndex:1,
	            interval:60,
	            axisLabel: {textStyle:{color: '#fff',fontSize:'20',fontFamily: 'Microsoft YaHei'}},
	            axisTick: {
	                show: false,
	                length: 15,
	                lineStyle: {
	                    color: "#e4e4e4",
	                }
	            },
	            splitLine: {
	                // show:true,
	                lineStyle: {
	                    type: 'bolid',
	                    color: '#50556b'
	                }
	            },
	            axisLine: {
	                show: false,
	                lineStyle: {
	                    color: "#50556b"
	                },
	            },
	            nameTextStyle: {
	                color: "#999"
	            },
	            splitArea: {
	                show: false
	            }
	        },
	           //   {
            //     type: 'value',
            //     min: 0,
            //     max: 100,
            //     interval: 20,
            //     axisLabel: {textStyle:{color: '#fff',fontSize:'20',fontFamily: 'Microsoft YaHei'},formatter: '{value}%'},
            //     axisTick: {
            //         show: false,
            //         length: 15,
            //         lineStyle: {
                        
            //             color: "#e4e4e4",
            //         }
            //     },
            //     splitLine: {
            //         // show:true,
            //         lineStyle: {
            //             type: 'bolid',
            //             color: '#50556b'
            //         }
            //     },
            //     axisLine: {
            //         show: false,
            //         lineStyle: {
            //             type:'bolid',
            //             color: "#50556b"
            //         },
            //     },
            //     nameTextStyle: {
            //         color: "#999"
            //     },
            //     splitArea: {
            //         show: false
            //     }
            // }
	        ],
	        series: [{
	                name: '企业申请数量',
	                type: 'line',
	              //   里面小圆点true
	               // symbol:'circle',
	                symbolSize:'3',
	                showSymbol:true,
	          
                    data: [101,97,109,45,200,118,227,1],
                    
                   
	               //  color: "#9173f8",
	        lineStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'red'
                  },
                  {
                      offset: 1,
                      color: 'red'
                  }
              ], false), // 线条颜色
              width:3, // 线条颜色
            },
        },
        label: {
            // show: true,
            position: 'top',
            textStyle: {
                color: '#fff',
            }

        },
        itemStyle: {
            // color: "red",
            borderColor: "red",
            borderWidth: 3
        },
        // tooltip: {
        //     show: false
        // },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'red'
                    },
                    {
                        offset: 1,
                        color: 'rgb(255,187,201,.1)'
                    }
                ], false),
            }
        },
	                smooth: false
	            },
	            {
	                name: '占比',
	                type: 'line',
	              //   里面小圆点
	                symbol:'circle',
	                symbolSize:'5',
	                showSymbol:true,
                    data: [11.2,10.8,12.1,5.0,22.3,13.1,25.3,0.1],
	              //   color: "#9173f8",
	                lineStyle: {
	                    normal: {
	                        width: 3,
	                        color: {
	                            type: 'linear',
	  
	                            colorStops: [{
	                                offset: 0,
	                                color: '#2997f4' // 0% 紫色
	                            },
	                             {
	                                offset: 1,
	                                color: '#39b9f4' // 100% 青色
	                            }],
	                            globalCoord: false // 缺省为 false
	                        },
	                    }
	                },
	                itemStyle: {
	                    normal: {   
	                    borderWidth: 0,
	                    borderColor:  '#2a9af4' ,        
	                  color: {
	                      type: 'stack',
	                      colorStops: [{
	                          offset: 0,
	                          color: '#2a9af4'// 0% 紫色
	                      },
	                       {
	                          offset: 1,
	                          color: '#39b9f4' // 100% 青色
	                      }],
	                      globalCoord: false // 缺省为 false
	                  },
	              }
	          },
	                smooth: false
	            },
	  
	    
	        ],
	    };