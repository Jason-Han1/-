var data = ['2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04', '2018.05', '2018.06', '2018.07', '2018.08', '2018.09', '2018.10'];
			var data1 = ['421933', '465598', '350710', '342709', '222150', '380286', '344377', '458423', '349656', '412181', '413242', '342666', '313821'];
			var data2 = ['106721', '140940', '99359', '107668', '69945', '124540', '129531', '202868', '130540', '161280', '158094', '134946', '109971'];
			var data3 = ['88405', '113480', '80426', '82886', '58070', '96797', '88888', '110649', '93307', '95622', '95914', '86346', '76287'];
			var lablesBars = {
					normal:{
						show:false,
						position:'top',
						color:"#fff",
						fontSize:16,
						distance:6
					}
			}
			option = {
				grid: {
					right: '4%',
					left: '10%',
					top: '15%',
					bottom: '26%'

				},
				backgroundColor:"#013d5a",
				color:["#51e9b2","#e9dc5b","#fc8d81"],
				legend: {
					right: '5%',
					top: '4%',
					itemGap: 15,
					itemWidth: 18,
					itemHeight: 10,
					textStyle:{
						color:"#FFF",
						fontSize:16
					},
					data: [{name:'浏览量',icon:"rect"}, {name:'独立访客(UV)',icon:"rect"}, {name:'IP',icon:"rect"}]
				},
				xAxis: {
					axisLabel: {
						interval: 0,
						show: true,
						rotate:20,
						textStyle: {
							color: "#fff",
							fontSize:18
						}
					},
					axisTick:{
						show:false
					},
					axisLine: {
						lineStyle: {
							show: false,
							color: "#0c526a",
							width: 1
						}
					},
					data: data,
				},
				yAxis: [{
						type: 'value',
						axisLabel: {
							show: true,
							textStyle: {
								"color": "#fff",
								fontSize:16
							}
						},
						axisLine: {
							show:false
						},
						axisTick:{
							show:false
						},
						splitLine: {
							lineStyle: {
								color: "#0c526a",
								width: 1
							}
						}
					}
				],
				series: [{
					name: '浏览量',
					type: 'bar',
					barGap: 0,//第一个设置了间隔为0，后面的两个也会默认这个设置
					label:lablesBars,
					data: data1
				}, {
					name: '独立访客(UV)',
					type: 'bar',
					label:lablesBars,
					data: data2
				}, {
					name: 'IP',
					type: 'bar',
					label:lablesBars,
					data: data3
				}]
			};