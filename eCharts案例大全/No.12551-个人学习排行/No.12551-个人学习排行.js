var dataMap = {};
	var img = {
		'0':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAYAAABmBXS+AAAAsklEQVQYlW3PMUoDURAG4O/JsiwqQipT6g28gaggCJsmniF1YhU8gVcI2KXWSsFK0Rt4A9OmiWCVasfC3YDkTTPwzzcMkyLCpupBD4+49vz03cU7GzCskzLmyjhTxtywTtuoiqkqalVo+7QbpYhgdHWKt39LNDh3//KRYnzZxycObdcSJ4X9ZobdDNDms79zdxdH+MqgY7eviwLsNSvcZNAKOnSASQY94Kdo31/jPYPW8As5pTLXzH2HdwAAAABJRU5ErkJggg==',
		'1':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAA50lEQVQokXXQMSxDURQG4O/qE8+bkBiMFpNBwmgwSmOyiUXX2k2WpnaTmUVsJmlYTEYSo42JpE10I3j1LL3ypM+fnNyTc77h5IaiKMDK1vsBVo3m5vZsch+SOPke18VTBe7G5hcPJsIi1irw5wjO03CN5wr8EJuwsPcxNexPUa/AHWxDkmfhEDsVKKaOPk6Sr0wTS8P6L/dohqIozB3l87jDdAXsY/llN3kM8Z9njwd1XCCUYIGNXqPWgbE47TVqnTwL7TwLStWO8A+GPA2tPA1XeRoM31Z5/3tGTHZpBufYfFv3Wt79AEhVRvIltTNEAAAAAElFTkSuQmCC',
    };
	var pList = ['印度', '孟加拉国', '马来西亚', '缅甸', '泰国', '越南', '新加坡', '印度尼西亚'];
	function dataFormatter(obj) {
		var temp;
		for (var month = 1; month <= 12; month++) {
			var max = 0;
			var sum = 0;
			temp = obj[month];
			for (var i = 0, l = temp.length; i < l; i++) {
				max = Math.max(max, temp[i]);
				sum += temp[i];
				obj[month][i] = {
					name: pList[i],
					value: parseFloat(temp[i]).toFixed(2),
					tooltip:{
						formatter:function(param){
							return (param.value+'%')
						}
					},
				}
			}
			// obj[year + 'max'] = Math.floor(max / 100) * 100;
			// obj[year + 'sum'] = sum;
		}
		return obj;
	}

	function dataFormatterX(){
		var obj = [];
		for(var i = 0, l = pList.length; i < l; i++) {
			obj[i] = {
				value: i + '  ' + pList[i],
				textStyle:{
					fontWeight: 'lighter',
					fontSize: 12
				},
			}
		}
		return obj;
	}
	dataMap.dataGDP = dataFormatter({
		//max : 60000,
		1: [2.179078579, 26.05213409, 2.065448528, 56.73868269, 19.10439787, 56.73868269, 2.465409781, 26.20403709],
		2: [24.47055544, 26.87618281, 2.179078579, 65.39159601, 18.16494975, 25.32552398, 2.54060487, 26.60949306],
		3: [24.5599364, 27.11505234, 2.244027643, 68.80481552, 18.62367525, 25.06154822, 2.386708483, 26.74029668],
		4: [25.72493886, 28.82611129, 20.362994049, 75.645227, 19.18599013, 24.96495065, 2.310275378, 24.55228543],
		5: [25.72493886, 28.82611129, 2.362994049, 75.645227, 19.18599013, 24.96495065, 2.310275378, 24.55228543],
		6: [26.31003253, 30.8666826, 2.513368784, 73.56799567, 19.22389891, 27.73858041, 2.065942832, 26.07747765],
		7: [28.37045821, 32.11488666, 2.445850309, 69.2373871, 18.73461556, 30.27155588, 1.752890372, 28.01220969],
		8: [29.15050987, 33.33041478, 2.552632581, 66.31422527, 17.8915165, 32.41755087, 1.871295601, 28.29343775],
		9: [30.16744641, 34.40536833, 2.769418304, 68.29565167, 17.36906434, 34.92618165, 1.697634151, 28.15148336],
		10: [31.18945349, 36.37704468, 2.785499852, 68.79650888, 17.35323701, 35.8546668, 1.827796937, 28.17434214],
		11: [31.83649745, 37.22191359, 3.030200263, 68.47452323, 17.13223686, 37.80436343, 1.286257571, 28.73378078],
		12: [23.46519123, 26.05213409, 2.065448528, 56.73868269, 19.10439787, 2.769418304, 2.465409781, 26.20403709],
	});
	var fontColor = '#30eee9';
	var timelineWidth = 500;
	var timeline = {
	//loop: false,        
	axisType: 'category',
	show: true,
	x:'8%',
	y:'80%',
	x2:'0%',
	y2:'10%',
	autoPlay: true,
	playInterval: 1000,
	width:timelineWidth,
	data: [
		'1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'
	],
	controlPosition:'none',
	lineStyle:{
		color:'#0f496f'
	},
	label:{
		textStyle: {
			color: fontColor
		}
	},
	/* itemStyle: {
		normal: {
			color: 'rgba(100%,50%,0,0.5)',
			borderColor:'rgba(100%,50%,0,0.5)',
			borderWidth:0
		},
		emphasis: {
			color: 'rgba(0,50%,0,0.5)',
		}
	}, */
	checkpointStyle:{
		symbolSize:10,
		borderWidth:80,
		symbol:'image://../web/img/active.png',
	},
	symbolSize:10,
	
}

	var option = {
			baseOption: {
			    backgroundColor:'#11173a',
				timeline: timeline,
				legend: {
					show:false
				},
				tooltip : {
					trigger: 'axis'
				},
				calculable: true,
				grid: {
					top: '10%',
					bottom: '20%',
					left:'15%',
					right:'5%',
					containLabel: true
				},
				color: new echarts.graphic.LinearGradient(
					0, 0, 1, 0,
					[
						{offset: 0, color: '#0073ff'},
						{offset: 1, color: '#2fece9'}
					]
				),
				yAxis: [{
					'type': 'category',
					offset: 0,
					nameLocation:'start',
					nameGap:33,
					inverse:true,
					axisLabel: {
						'interval': 0,
						textStyle: {
							color: fontColor,
							fontWeight:'bold'
						},
						inside:false,
						margin:20,
						padding:[0,0,0,-10],
						formatter: function (value) {
							var index = value.split(' ')[0];
                            return '{' + index + '|}{index|' + index + '  '+ pList[index]+'}';
                    	},
						rich: {
							index: {
								align: 'left',
								padding:[0,0,0,-120],
								fontSize:14,
							},
							0: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['0']
								}
							},
							1: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['1']
								}
							},
							2: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['0']
								}
							},
							3: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['1']
								}
							},
							4: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['0']
								}
							},
							5: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['1']
								}
							},
							6: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['0']
								}
							},
							7: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['1']
								}
							},
							8: {
								height: 12,
								align: 'left',
								backgroundColor: {
									image: img['0']
								}
							},
						}
					}, 
					axisTick:{
						alignWithLabel:true,
						interval:0,
						show:false,
					},
					axisLine:{
						show:false,
						lineStyle:{
							color: '#00ccfe',
						}
					},
					data: dataFormatterX(),
					splitLine: {
						show: false
					},
				}],
				xAxis: [{
					// type: 'value',
					name: '',
					// max: 53500
					splitLine: {
						show: false
					},
					axisLine:{
						lineStyle:{
							color: '#00ccfe',
						},
						show:false,
					},
					axisTick:{
						show:false,
					},
					axisLabel: {
						show: false,
						formatter: function(param) {
								return param + '%';
							},
						textStyle: {
							color: '#00ccfe',
						}
					}
				}],
				series: [{
					name: 'GDP',
					type: 'bar',
					barWidth:'50%',
				}]
			},
			options: [{
				series: [{
					data: dataMap.dataGDP[1],
				}]
			},  {
				series: [{
					data: dataMap.dataGDP[2]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[3]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[4]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[5]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[6]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[7]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[8]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[9]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[10]
				}]
			}, {
				series: [{
					data: dataMap.dataGDP[11]
				}]
			},{
				series: [{
					data: dataMap.dataGDP[12]
				}]
			}]
	};