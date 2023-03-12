option = {
							color: ['#367DA2'],
							title: {
								text: '推荐配置视图',
								left: 'center',
								textStyle: {
									fontSize: 14,
									fontWeight: 'normal',
								},
							},
							legend: {
								bottom: '0%',
								data: ['配置比例']
							},
							
							xAxis: [{
								type: 'category',
								axisLine: {
									onZero: false
								},
								axisTick: {
									show: false
								},inverse :true,
								data: ["国内固定权益", "海外固定权益", "大商品", "货币", "国内权益", "海外权益", "对冲投资", "另类投资"]
							}],
							yAxis: [{
								type: 'value',
								splitNumber: 4,
								max: 80,
								min: 0,
								interval: 20,
								axisLabel: {
									formatter: function (value) {
										return value.toFixed(2) + '%';
									}
								},
								axisLine: {
									show: false
								},
								axisTick: {
									show: false
								}
							}],
							grid: {
								left: '0%',
								right: '4%',
								bottom: '10%',
								top: '15%',
								containLabel: true
							},
							tooltip: {
			trigger: 'axis',
			padding: 0,
			extraCssText:'box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'line' // 默认为直线，可选为：'line' | 'shadow'
			},
			backgroundColor: 'rgba(255,255,255,0)',
			show: true,
			formatter: function(params) {
				var stl = '';
				$(params).each(function(index, serie) {
					if(serie.componentType === 'series' && serie.dataIndex >= 0){
						var colors = myChart.getOption().color;
						var color = colors[index % colors.length];
						if (serie.value && serie.value !== '-' )
						stl += '<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:'+color+';"></div>&emsp;' + serie.seriesName+':&emsp;'+serie.value;
					}
				});
				return stl ? '<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">' + (params[0] ? params[0].name : params.seriesName) + stl + '</div>' : '';
			}
		},
							series: [{
								name: "销量",
								type: "bar",
								barWidth: '45%',label:{
								    normal:{
								        show:true,
								        position:'top',
								        formatter:function(params){ 
								            var total = 0;
								            echarts.util.each(myChart.getOption().series[0].data, function(item, index){
								                if(item){
								                    total += item;
								                }
								            });
								            return (params.data / total * 100).toFixed(2) + '%';
								        }
								    }
								},
								data: [5, null, null, null, 15, 68, null, null]
							}]
						};