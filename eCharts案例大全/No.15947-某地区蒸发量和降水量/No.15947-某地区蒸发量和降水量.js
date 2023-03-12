option = {
			title : {
				text: '某地区蒸发量和降水量',
				subtext: '纯属虚构'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['蒸发量','降水量']
			},
			toolbox: {
				show : true,
				feature : {
					dataView : {show: true, readOnly: false},
					magicType : {show: true, type: ['line', 'bar']},
					restore : {show: true},
					saveAsImage : {show: true}
				}
			},
			calculable : true,
			xAxis : [
				{
					type : 'category',
					data : ['2015-01-01','2015-02-01','2015-03-01','2015-04-01','2015-05-01','2015-06-01','2015-07-01','2015-08-01','2015-09-01','2015-10-01','2015-11-01','2015-12-01'],
					axisTick:{
						interval: 0
					},
					axisLabel:{
						// 使用字符串模板，模板变量为刻度默认标签 {value}
						formatter: '{value} kg',
						interval: 0, 
						// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
						formatter: function (value, index) {
							// 格式化成月/日，只在第一个刻度显示年份
							var date = new Date(value);
							var texts = [(date.getMonth() + 1), date.getDate()];
							if (index === 0) {
								texts.unshift(date.getFullYear());
							}
							return texts.join('-');
						}
					}
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'蒸发量',
					type:'bar',
					data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
					showAllSymbol:true,
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'},
							[{coord:[0,1] },{coord:[3,100]}]
						]
					}
				}
			]
		}