let monitoringDataArr1 = [],monitoringNameArr = [],monitoringXZhou = [];//第一个数组装数据，第二个数组装名字，第三个数组装轴名称
				var monitoringSituation = [{
					"name": "八月份","value":[40,20,40,10,29,20,10],"month":['网站死链个数', '网站不更新', '空白栏个数', '互动回应问题', '服务不实用问题', '严重错误', '其他问题']
				}, {
					"name": "九月份","value":[20,20,20,10,30,10,10],"month":['网站死链个数', '网站不更新', '空白栏个数', '互动回应问题', '服务不实用问题', '严重错误', '其他问题']
				}, {
					"name": "十月份","value":[10,30,5,10,5,10,10],"month":['网站死链个数', '网站不更新', '空白栏个数', '互动回应问题', '服务不实用问题', '严重错误', '其他问题']
				}];
				for(let i=0;i<monitoringSituation.length;i++){
					let groupItem = monitoringSituation[i];
					monitoringDataArr1.push({
					name: groupItem.name,
					type: 'line',
					smooth: false,
					symbolSize: 6,
					symbol: 'circle',
					data: groupItem.value,
					lineStyle:{
							normal:{
								opacity:1,
								width: 1
							}
						},
					areaStyle: {
						normal: {
							opacity: 0.5,
						}
					}
				});
					monitoringNameArr.push(groupItem.name);
				}
				
				for (let j = 0; j < monitoringSituation[0].month.length; j++) {
					monitoringXZhou.push(monitoringSituation[0].month[j]);
				}
			option = {
			    backgroundColor:"#013d5a",
				color: ['#fe8d83', '#f48d39', '#c1fc7f', '#84e2a6','#b5e928', '#ff790d', '#ffeb3b'],
				legend: {
					textStyle:{
						color:"#fff",
						fontSize:16
					},
					itemGap:15,
					top:'1%',
					x:'center',
					data: monitoringNameArr
				},
				grid: {
					left: '3%',
					right: '4%',
					top:'32%',
					bottom: '2%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: monitoringXZhou,
					boundaryGap: false,
					axisLabel: {
							color: '#fff',
							fontSize: 16
						},
					axisLine:{
						show: true,
						lineStyle: {
							color: '#0b4e86'
						}
					},
					axisTick:{
						show:false
					},
					splitLine: {
						show: false
					},
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						color: '#fff',
						fontSize: 16
					},
					axisLine:{
						show: true,
						lineStyle: {
							color: '#0b4e86'
						}
					},
					axisTick:{
						show:false
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: '#0b4c62'
						}
					},
				},
				series: monitoringDataArr1
			};
			
			
// 			var officeEquipmentChart;
// 			var messageUseStatusClass = document.getElementsByClassName("message_use_status"); //此处用class是由于echarts和swiper合用，用了loop：true导致dom节点克隆问题，id不再是唯一的标识符
// 			for(var i = 0; i < messageUseStatusClass.length; i++) {
// 				messageUseStatusChart = echarts.init(messageUseStatusClass[i]);
// 				messageUseStatusChart.setOption(option);
// 			}
// 			window.setInterval(function () {
// 				messageUseStatusChart.clear();  
// 			    messageUseStatusChart.setOption(option);      
// 			},6000);