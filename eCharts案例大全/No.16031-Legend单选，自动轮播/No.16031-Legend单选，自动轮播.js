	window.chartCfg.themeName = 'vintage';

	var json = {
		chart0: {
			legend: ['蒸发量','降水量'],
			xAxisData: [
				['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
			],
			data: [
				[1,2,3,4,5,6,7,8,9,10,11,12],
				[12,11,10,9,8,7,6,5,4,3,2,1]
			]
		},
		chart1: {
			axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			data: [],
			links: []
		},
		chart2: {
			axisData: [['周一', '周二', '周三', '周四', '周五', '周六', '周日']],
			data: [[1,2,3,4,5,6,7],[10,20,13,41,25,36,47]]
		},
		chart3: {
			locations: ['福建', '内蒙古', '上海', '江苏', '山东', '广东', '浙江', '贵州', '广西', '辽宁'],
			companys: [20, 1, 2, 1, 18, 11, 15, 34, 23, 16]
		},
		chart4: {

		}
	};

	app = JSON.parse(JSON.stringify(json));//原对象不能包含function以及过于复杂的层次 Deep Clone
	
	
	app.logoTicket = setInterval(function () {
        drawLogo(myChart);
	}, 3);
	
	
	
	app.chart0.data[0] = zrUtil.map(zrUtil.map(json.chart0.data[0], function(value, index){
		return { index: index, value: value };
	}).sort(function(a, b){
		return b.value - a.value;
	}), function(item, index){
		return {name: json.chart0.xAxisData[0][item.index], value: item.value};
	});
	app.chart0.xAxisData[0] = zrUtil.map(app.chart0.data[0], function(item, index){
		return item.name;
	});
	app.chart0.legendIndex = 0;
	app.timeTicket = setInterval(function () {

		if(app.shownChartIndex === 0){
			var tindex = app.chart0.legendIndex % app.chart0.legend.length;
			
		    myChart.dispatchAction({
				type: 'legendToggleSelect',
				// 图例名称
				name: app.chart0.legend[tindex]
			});
			
			app.chart0.legendIndex++;
		}
	
	}, 5000);
	
	/*Chart 0*/
	
	var opts = [{
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data:app.chart0.legend,
			selectedMode:'single',
			selected:{
				'蒸发量':true,
				'降水量':false
			}
		},
		xAxis: [
			{
				type: 'category',
				data: app.chart0.xAxisData[0]
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '水量',
				min: 0,
				max: 20,
				interval: 5,
				axisLabel: {
					formatter: '{value} ml'
				}
			}
		],
		series: [
			{
				name:'蒸发量',
				type:'bar',
				data:app.chart0.data[0]
			},
			{
				name:'降水量',
				type:'bar',
				data:app.chart0.data[1]
			}
		]
	}];

    charts.push(myChart);

    charts[0].on('legendselectchanged', function(params){
			var tindex = zrUtil.indexOf( app.chart0.legend, params.name);
			
			opts[0].xAxis = {
				
					data: app.chart0.xAxisData[tindex]
				
			};
			option = zrUtil.merge(opts[app.shownChartIndex], baseOption, false);
		});

	app.shownChartIndex = 0;
	
	opts[app.shownChartIndex].logoColor = getColorPalette()[app.shownChartIndex % getColorPalette().length];
	option = zrUtil.merge(opts[app.shownChartIndex], baseOption, false);
	
    if (chartCfg.showVersion || false) {
            var ecInfo = '<div id="ecInfo" style="position:absolute;top:10px;left:10px;z-index:9999;">#</div>';
        
			//显示ECharts版本及依赖信息
			var tpl = 'Visits:' + zrFormat.addCommas('11223344556600') + '<br />';
			tpl += 'ECharts Version: ' + echarts.version + '<br />';
			zrUtil.each(echarts.dependencies, function(value, key) {
				tpl += zrFormat.toCamelCase('-' + key) + ' Version: ' + value;
			});
		 $(myChart.getDom()).parent().append(ecInfo.replace('#', tpl));
		} else {
		
		}
		
    
		/*Event Binding*/
		
		
		/*Event Binding*/
	