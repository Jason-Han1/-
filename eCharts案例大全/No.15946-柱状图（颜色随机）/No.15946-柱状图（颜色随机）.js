option = {
				title : {
					text: '某地区降水量',
					subtext: '纯属虚构'
				},
				tooltip : {
					trigger: 'axis'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis : [
					{
						type : 'category',
						data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
						splitLine:{
							show:false
						},
						axisTick: {
							alignWithLabel: true
						}
					}
				],
				yAxis : [
					{
						type : 'value',
						splitLine:{
							show:false
						},
						splitArea:{
							show:true,
						},
					}
				],
				series : [
					{
						name:'降水量',
						type:'bar',
						label:{
						    normal:{
						        show:true,
						        position:'top'
						    }
						},
						itemStyle:{
							normal:{
								color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
							}
						},
						data:[32.6, 25.9, 39.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3],
					}
				]
			};