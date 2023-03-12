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
	}, 3000);
	
	
	/*Chart 0*/
	
	var opts = [{
		name:'超出最值',
		grid:{
			show:true
		},
		visualMap: [{
			type:'piecewise',
			show:false,
			dimension: 0,
			pieces: [
				{min: 30, max: 56,color:'red'},
				{min: 24, max: 30,color:'red'},
				{min: 18, max: 24,color:'red'},
				{min: 0, max: 18, label: '10 到 200（自定义label）'}
			],
			itemSymbol:'triangle',
			target: { // 表示 目标系列 的视觉样式。
				inRange: {
					color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
					symbol:'diamond',
					symbolSize: [15, 200]
				}
			},
			controller: { // 表示  本身的视觉样式。
				inRange: {
					symbolSize: [30, 100]
				}
			}
		}],
		xAxis:{
			type:'category',
			splitLine:{
				show:false  
			},
			data: app.chart2.axisData[0]
		},
		yAxis:{
			min:0,
			max:56,
			
			interval:2,
			name: '轴轴轴轴轴轴轴'.split('').join('\n'),
			nameLocation:'middle',
			nameGap:25,
			axistLine:{
				show:true  
			},
			axisTick:{
				interval:5,
				iinterval:16,//每隔多长绘制ilength的长度,其他环境使用 10
				length:2,
				ilength:10,
				show:true
			},
			axisLabel:{
				formatter:function(value){
					if(value % 10 === 0){
						return value.toFixed(2);
					}
					return '';
				}
			},
			splitArea:{
				show:true
			}
		},
		series:[{
			type:'line',
			data: app.chart2.data[0]
		}]
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
	