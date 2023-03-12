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
	
	
	app.timeTicket = setInterval(function () {
        drawLogo(myChart);
	}, 10000);
	
	
	/*Chart 0*/
	
	var opts = [{
		title: {
			text: '某站点用户访问来源',
			subtext: '纯属虚构',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			top: 'center',
			data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
				value: 335,
				name: '直接访问',
				title: '直接访问标题'
			}, {
				value: 310,
				name: '邮件营销',
				title: '邮件营销标题'
			}, {
				value: 234,
				name: '联盟广告',
				title: '联盟广告标题'
			}, {
				value: 135,
				name: '视频广告',
				title: '视频广告标题'
			}, {
				value: 1548,
				name: '搜索引擎',
				title: '搜索引擎标题'
			}],
			itemStyle: {
				normal: {
					borderWidth: 10,
					borderColor: getBackgroundColor()
				},
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	}];

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
	