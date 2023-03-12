
								var gauge_value='44';
								var gauge_desc;
								var gauge_desc_color;
								var gauge_color;
								gauge_desc = "血压";
								gauge_desc_color = '#000000';
								 if (gauge_value/100 > 0 && gauge_value/100 <= 0.25){	
									gauge_color =[
										[gauge_value/100,'#7CD944']
									];
								}
								else if (  gauge_value/100 <= 0.5 &&  gauge_value/100 >0.25 ){	
									gauge_color =[
										[0.25,'#7CD944'],
										[gauge_value/100,'#0FB4EB']
									];
								}
								else if (gauge_value/100 > 0.5 && gauge_value/100 <= 0.75){
									gauge_color =[
										[0.25,'#7CD944'],
										[0.5,'#0FB4EB'],
										[gauge_value/100,'#FBE043']
									];
								}
								else if ( gauge_value/100 > 0.75 && gauge_value/100 <= 1){
									gauge_color =[
										[0.25,'#7CD944'],
										[0.5,'#0FB4EB'],
										[0.75,'#FBE043'],
										[gauge_value/100,'#EC3C20']
									];
								}
								else if ( gauge_value/100 == 0 ){
									gauge_color =[
										[0,'#d4d4d4']
									];
								}
								
								
							var option = {
								
								series: [{
					        name: '背景',
					        type: 'gauge',
					        radius: '85%',
					        min: 0,
					        max: 100,
					        startAngle: 180,
					        endAngle: 0,
					        splitNumber:0, //刻度数量
							center: ["50%", "80%"],
					        axisLine: {
					            lineStyle: {
					                shadowBlur: 0,
									width:10,
					                color: [
					                      [0, '#d4d4d4'],
					                      [0.25, '#E2FFD0'],
					                     
					                      [0.5, '#C0D8E0'],
					                     
					                      [0.75, '#FFFBD0'],
					                     
					                      [1, '#FFDBDB']
					                       
					                ]
					            }
					        },
							splitLine:{show: false},
					        axisLabel: {show: false, distance:-60},
					        axisTick: {show: true,
									splitNumber:10,
									lineStyle: {
									    width: 1,
									},
									length: 1,
							},
					       detail: {show: false },
							        data: [{
									name: "",
									value: ''
									}],
					        pointer: {show: false}
					    },{
					        name: '刻度',
					        type: 'gauge',
					        radius: '75%',
							center: ["50%", "80%"],
					        splitNumber:4, //刻度数量
					        min: 0,
					        max: 100,
					        startAngle: 180,
					        endAngle: 0,
					        axisLine: {show: false,
					            lineStyle: {
					                width: 0,
					                shadowBlur: 0,
									opacity :0
					          }
					        },
					        axisLabel: {show: false},
					        axisTick: {
					            show: true,
								splitNumber:10,
								lineStyle: {
								    width: 2,
								    
								}
					        },
					        splitLine: {
					            show: false,
					            length:2,
					            lineStyle: {
					               
					            }
					        },
					        // detail: {show: false},
					        // pointer: {show: false},
							 detail: {show: false },
							        data: [{
									name: "",
									value: ''
									}]
					    },
						{
								name :'数值',
					            type: "gauge",
					            radius: "85%",
					            center: ["50%", "80%"],
					            splitNumber: 0, //刻度数量
					            startAngle: 180,
					            endAngle: 0,
					            axisLine: {
					                show: true,
					                lineStyle: {
					                    width: 10,
					                    color: gauge_color,
					                },
					            },
					            //分隔线样式。
					            splitLine: {
					                show: false,
					            },
					            axisLabel: {
					                show: false
					            },
					            
								axisTick: 
								{ show: false},
					
					            pointer: {
					                show: false
					            },
					            title: {
					                show: false
					            },
					            //仪表盘详情，用于显示数据。 
					     detail: {
					          offsetCenter: [0,1],
					         textStyle: {
					             fontSize: 14
					         	 },
					             
								   formatter: function (value) {
					                 
					                return [
					                        '正常'+'\n'
					                      ].join('\n')
					            }, 
								 
								 
								 },
					             data: [{
					         name: "",
					         value: Math.floor(gauge_value)
					     }]
					         }]
								
							};