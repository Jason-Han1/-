var imgeURL = "/asset/get/s/data-1544518654374-oRnsCy-29.png";

var topsArr = [{name:"BS漏洞",value:85},{name:"Apache httpd漏洞",value:64},{name:"跨脚本(XSS)漏洞",value:56},
			{name:"目录遍历漏洞",value:51},{name:"MySQL漏洞",value:48},{name:"其他",value:40}];
			let colorListTops = [new echarts.graphic.LinearGradient(1, 0, 0, 0, [{offset: 1,color: '#ff6a5d'}, {offset: 0,color: '#fe897e'}]),
			new echarts.graphic.LinearGradient(1, 0, 0, 0, [{offset: 1,color: '#f67f4a'}, {offset: 0,color: '#fcc07d'}]),
			new echarts.graphic.LinearGradient(1, 0, 0, 0, [{offset: 1,color: '#f99b4e'}, {offset: 0,color: '#ffdd9f'}]),
			new echarts.graphic.LinearGradient(1, 0, 0, 0, [{offset: 1,color: '#dfc328'}, {offset: 0,color: '#f0e86f'}]),
			new echarts.graphic.LinearGradient(1, 0, 0, 0, [{offset: 1,color: '#c1fc7f'}, {offset: 0,color: '#cff4ad'}]),
			new echarts.graphic.LinearGradient(1, 0, 0, 0, [{offset: 1,color: '#51ebb3'}, {offset: 0,color: '#9ffedb'}])];
			
			let topsLable = { //图形上的文本标签
				normal: {
					show: true,
					position: 'right',
					formatter: function(params, i) {
						console.log(params)
						return params.value +"{small| 个}";
					},
					textStyle: {
						color: '#fff',
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 22,
						rich:{
							"small":{
								fontSize:16,
								color:'#FFF'
							}
						}
					},
				}
			}
			let topsImage = {
				"type": "pictorialBar",
				symbol: 'image://'+imgeURL,
				"symbolSize": [20, 140],
				symbolRotate: 0,
				"symbolOffset": [-30,0],
				"symbolBoundingData": 300,
				"data": [1, 2, 3],
				zlevel: 100,
				z: 100
			}
			let topsPush = [];//用于装漏洞
			let topLegend = [];//用于装Legend
			for (let i = 0; i < topsArr.length; i++) {
				let topsSizese = {
					name: topsArr[i].name,
					type: 'bar',
					data: [topsArr[i].value],
					barWidth: 16,
					barGap: '80%', //柱间距离
					label: topsLable,
					itemStyle: { //图形样式
						normal: {
							barBorderRadius: 10,
							color: function(params){
								return colorListTops[i]
							}
						},
					},
					zlevel: 9
				}
				topLegend.push(topsArr[i].name)
				topsPush.push(topsSizese);
			}
			topsPush.push(topsImage)
			
			var option = {
				grid: {
					left: '15%',
					right: '-4%',
					bottom: '1%',
					top: '23%',
				},
				backgroundColor:"#013d5a",
				legend: { //图例组件，颜色和名字
					top: '40%',
					x:'center',
					itemGap: 15,
					itemWidth: 18,
					itemHeight: 10,
					textStyle: {
						color: '#fff',
						fontStyle: 'normal',
						fontFamily: '微软雅黑',
						fontSize: 16,
					},
					data:topLegend
				},
				yAxis: [{
					type: 'category',
					boundaryGap: true, //坐标轴两边留白
					data: [''],
					name:"{white| 180}{paddingleft| 个\n漏洞总数}",
					nameTextStyle:{
						color:'#fff',
						fontSize:16,
						align:'left',
						rich:{
							'white':{
								fontWeight:'bold',
								fontSize:24,
								padding:[10,5,0,0]
							},
							'paddingleft':{
								fontSize:16,
								padding:[10,26,0,0]
							}
						}
					},
					nameLocation:'middle',
					nameRotate:'0',
					axisLabel: {
						interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
						margin: 20,
						textStyle: {
							color: '#fff',
							fontStyle: 'normal',
							fontFamily: '微软雅黑',
							fontSize: 12,
						}
					},
					axisTick: { //坐标轴刻度相关设置。
						show: false,
					},
					axisLine: {
						show: false
					},
					splitLine: { //坐标轴在 grid 区域中的分隔线。
						show: false,
					}
				}],
				xAxis: [{
					type: 'value',
					splitNumber: 5,
					axisLabel: {
						show: false,
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					splitLine: {
						show: false
					}

				}],
				series: topsPush
			};