
		function getPageList(arrays, pageNum, pageSize){
			//计算分页页数
			pageNum = pageNum - 1;
			const dataList = [];
			const pageRows = arrays.length;
			const pageTotal = (pageRows + pageSize - 1) / pageSize;
			//循环判断值
			let startIndex = pageNum <= 0 ?  0 : pageNum * pageSize;
			let endIndex = (pageNum + 1) * pageSize > pageRows ? pageRows : (pageNum + 1) * pageSize;
			if(startIndex > pageRows) return dataList;
			for(startIndex; startIndex < endIndex; startIndex ++){
			  dataList.push(arrays[startIndex]);
			}
			return dataList;
		}
		
		let yLabel = ['幼儿园', '小一', '小二', '小三','小四','小五','小六','初一','初二','初三','高一','高二','高三','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']		
		var pageNum = 1, pageSize = 10;
		var baseRows = getPageList(yLabel, pageNum, pageSize);
		
		let yData = []
		baseRows.forEach(item => {
			yData.push(Math.random() * 1000)
		});
		let bgData = []
		for(let i in yData){
			bgData.push(2000)
		}
		
		var option = {
			grid: {
				left: '5%',
				right: '5%',
				bottom: '5%',
				top: '5%',
				containLabel: true
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
				formatter: function(params) {
					return params[0].name + '<br/>' +
						"<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
						params[0].seriesName + ' : ' + params[0].value + ' <br/>'
				}
			},
			backgroundColor: 'rgb(20,28,52)',
			xAxis: {
				show: false,
				type: 'value'
			},
			yAxis: [{
				type: 'category',
				inverse: true,
				axisLabel: {
					show: true,
					margin:15,
					textStyle: {
						color: '#fff',
					},
				},
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				data: baseRows
			}, 
			{
				type: 'category',
				inverse: true,
				axisTick: 'none',
				axisLine: 'none',
				show: true,
				axisLabel: {
					textStyle: {
						color: '#9aeced',
						fontSize: '12'
					},
				},
				data: yData
			}
			],
			series: [
				{
					name: '人数',
					type: 'bar',
					zlevel: 1,
					itemStyle: {
						normal: {
							barBorderRadius: [0,30,30,0],
							color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: '#52d8da'
							}, {
								offset: 1,
								color: '#57dcde'
							}]),
							shadowBlur:0,
							shadowColor:'rgba(87,220,222,0.7)'
						},
					},
					barWidth: 20,
					data: yData
				},
				{
					name: '背景',
					type: 'bar',
					barWidth: 20,
					barGap: '-100%',
					data: bgData,
					itemStyle: {
						normal: {
							color: 'rgba(24,31,68,1)',
							barBorderRadius: [0,30,30,0],
						}
					},
				},
			]
		};
		
		
		setInterval(()=>{
			pageNum++;
			var rows = getPageList(yLabel, pageSize + pageNum, 1);
			if(rows.length ==0){
				pageSize = 0;
				pageNum = 0;
				return;
			}
			//原始数组
			baseRows.splice(0,1);
			baseRows.push(...rows);
			//原始数组y刻度值
			yData.splice(0,1);
			rows.forEach(item => {
				yData.push(Math.random() * 1000)
			});
			//x轴
			bgData.splice(0,1);
			rows.forEach(item => {
				bgData.push(2000)
			});
			
			myChart.setOption({
				yAxis: [{
					data: baseRows
				}, 
				{
					data: yData
				}
				],
				series: [
					{
						name: '人数',
						data: yData
					},
					{
						name: '背景',
						data: bgData,
					},
				]
			});
		}, 1000);