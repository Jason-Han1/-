option = {
				title: {
					text: 'TOP10客户分析',
					left: 'center',
					align: 'right'
				},
				color:['#77a8ae','#2f4554','#c23531'],
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						animation: false,
						crossStyle: {
							color: '#505765'
						}
					}
				},
				toolbox: {
					feature: {
						dataView: {show: true, readOnly: false},
						magicType: {show: true, type: ['line', 'bar']},
						restore: {show: true},
						saveAsImage: {show: true}
					}
				},
				legend: {
			
					data:["2018","2019","2020"],
					left: 'center',
					top:50
				},
				grid: {
					left: '3%',
					right: '5%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
					{	
						name: '排名',
						type: 'category',
						axisLine: {onZero: false},
						//动态获取，看某年最多客户数有没有10个客户，如果没有，多少就按多少，有大于10，就按10个
						data: ["1","2","3","4","5","6","7","8","9","10"],
						axisLabel:{
							rotate:0,
							interval:0
						},
						nameLocation: 'end',
						axisPointer: {
							type: 'shadow'
						}
					}
				],
				yAxis: [
					{
						name: '总销售额/万元',
						type: 'value',
						splitLine: {show: false }, 
					


					}
				],
				series: [
				
					//动态数据
					{
						name: "2018",
						type: "bar",data: [{value:505.8,name:"A公司"},{value:127.2,name:"H公司"},{value:110.9,name:"G公司"},{value:80.7,name:"Z公司"},{value:50.7,name:"C公司"},{value:40.9,name:"T公司"},{value:10.1,name:"J公司"},{value:0.9,name:"E公司"},{value:0.6,name:"B公司"}],
					itemStyle : {
							normal: {
								label : {
									//formatter:"A公司",   //这个是可以的，每个柱状图显示A公司
								 	formatter:function(params){
										//params指的是 data 里面字典的参数，现在字典里用了name（装了公司名）、value（每个公司的销售）两个参数，
										return params.name+"："+params.value;
									} , 
									show: true,
									//position:"bottom",
									position:"inside",
									//position:"top",
									rotate:90,
									interval:0,
									textStyle:{
										fontSize:"10",
										//textBorderColor:"black",
										
										},
									
									},
								}
							},
						
				
						
			},{
						name: "2019",
						type: "bar",data: [{value:472.3,name:"A公司"},{value:89,name:"E公司"},{value:49.4,name:"C公司"},{value:21.2,name:"T公司"},{value:8.1,name:"Z公司"},{value:4.9,name:"H公司"},{value:1.1,name:"O公司"},{value:1.1,name:"P公司"},{value:0.9,name:"B公司"},{value:0.3,name:"Y公司"}],
					itemStyle : {
							normal: {
								label : {
									//formatter:"A公司",   //这个是可以的，每个柱状图显示A公司
								 	formatter:function(params){
										//params指的是 data 里面字典的参数，现在字典里用了name（装了公司名）、value（每个公司的销售）两个参数，
										return params.name+"："+params.value;
									} , 
									show: true,
									//position:"bottom",
									position:"inside",
									//position:"top",
									rotate:90,
									interval:0,
									textStyle:{
										fontSize:"10",
										//textBorderColor:"black",
										
										},
									
									},
								}
							},
						
				
						
			},{
						name: "2020",
						type: "bar",data: [{value:12.8,name:"A公司"},{value:11.2,name:"C公司"},{value:10.6,name:"E公司"},{value:5.7,name:"D公司"},{value:0.1,name:"B公司"}],
					itemStyle : {
							normal: {
								label : {
									//formatter:"A公司",   //这个是可以的，每个柱状图显示A公司
								 	formatter:function(params){
										//params指的是 data 里面字典的参数，现在字典里用了name（装了公司名）、value（每个公司的销售）两个参数，
										return params.name+"："+params.value;
									} , 
									show: true,
									//position:"bottom",
									position:"inside",
									//position:"top",
									rotate:90,
									interval:0,
									textStyle:{
										fontSize:"10",
										//textBorderColor:"black",
										
										},
									
									},
								}
							},
						
				
						
			}				
					
				]
			};