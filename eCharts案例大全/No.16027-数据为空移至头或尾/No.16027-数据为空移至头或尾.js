var json = {
			chart1: {
				series:[
					{ name: '', data:[120, '-', 101, 134, 90, 230, 210] },
					{ name: '', data:[220, 182, '-', 234, '-', 330, 310] },
					{ name: '', data:[150, 232, '-', '-', '-', '-', 410] },
					{ name: '', data:['-', 332, '-', 334, 390, 330, 320] },
					{ name: '', data:[820, 932, '-', 934, '-', 1330, 1320] }
				]
			}
		};
		
		var odata = [
					{ name: '', data:[120, '-', 101, 134, 90, 230, 210] },
					{ name: '', data:[220, 182, '-', 234, '-', 330, 310] },
					{ name: '', data:[150, 232, '-', '-', '-', '-', 410] },
					{ name: '', data:['-', 332, '-', 334, 390, 330, 320] },
					{ name: '', data:[820, 932, '-', 934, '-', 1330, 1320] }
				];
		var cols = json.chart1.series[0].data.length;
		var rows = json.chart1.series.length;
		var result = [];
		for(var i = 0;i < cols; i++){
			var arr = [];
			json.chart1.series.forEach(function(item, index){
				arr.push(item.data[i]);
			});
			var temp = arr.filter(function(value){ return value !== '-'; });
			var count = rows - temp.length;
			for(var j = 0; j < count; j++){
				temp.push('-');
			}
			result.push(temp);
		}
		
		for(var i = 0;i < cols; i++){
			for(var j = 0; j < rows; j++){
				json.chart1.series[j].data[i] = result[i][j];
			}
		}
		
			window.chartCfg.themeName = 'vintage';

	app = JSON.parse(JSON.stringify(json));//原对象不能包含function以及过于复杂的层次 Deep Clone
	
	
	app.timeTicket = setInterval(function () {
        drawLogo(myChart);
	}, 3000);
	
	/*调整DOM*/
	
	/*Chart 0*/
	
	var opts = [{
			tooltip: {
				trigger: 'axis',
				padding: 0,
				extraCssText:'box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'line' // 默认为直线，可选为：'line' | 'shadow'
				},
				backgroundColor: 'rgba(255,255,255,0)',
				show: true,
				formatter: function(params, ticket, callback) {
					var stl = '';
					console.log(params);
					var colIndex = 0;
					$(params).each(function(index, serie) {
						var colors = charts[1].chart.getOption().color;
						var color = colors[index % colors.length];
						if(odata[index].data[serie.dataIndex] != '-'){
							stl += '<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:'+color+';"></div>&emsp;' + serie.seriesName+':&emsp;'+ odata[index].data[serie.dataIndex] //serie.value;
						}
					});
					return '<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">' + params[0].name + stl + '</div>';
				}
			},
			legend: {
				data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
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
					data : ['周一','周二','周三','周四','周五','周六','周日']
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'直接访问',barGap:0,
					type:'bar',
					data:json.chart1.series[0].data//[320, {value:'-', itemStyle:{normal:{opacity:0}}},20]
				},
				{
					name:'邮件营销',barGap:0,
					type:'bar',
					data:json.chart1.series[1].data
				},
				{
					name:'联盟广告',barGap:0,
					type:'bar',
					data:json.chart1.series[2].data
				},
				{
					name:'视频广告',barGap:0,
					type:'bar',
					data:json.chart1.series[3].data
				},
				{
					name:'搜索引擎',barGap:0, type:'bar',
					data:json.chart1.series[4].data
				}
			]
		}];

	app.shownChartIndex = 0;
	
	opts[app.shownChartIndex].logoColor = getColorPalette()[app.shownChartIndex % getColorPalette().length];
	option = zrUtil.merge(opts[app.shownChartIndex], baseOption, false);
	
    if (chartCfg.showVersion || false) {
            var ecInfo = '<div id="ecInfo" style="position:absolute;top:10px;left:10px;z-index:9999;">#</div>';
        
			//显示ECharts版本及依赖信息
			var tpl = '<br />';
			tpl += 'ECharts Version: ' + echarts.version + '<br />';
			zrUtil.each(echarts.dependencies, function(value, key) {
				tpl += zrFormat.toCamelCase('-' + key) + ' Version: ' + value;
			});
		 $(myChart.getDom()).parent().append(ecInfo.replace('#', tpl));
		} else {
		
		}
		
    
		/*Event Binding*/
		
		
		/*Event Binding*/
	