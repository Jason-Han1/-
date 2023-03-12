	window.chartCfg.themeName = 'vintage';

    var json = {
			categories: ['A', 'B', 'C'],
			lineData: [1, 0, 5],
			barData: [2, 4, 6],
			weather:[11, 11, 15, '-', 12,'-', 10],
			weatherFixed:[]
		};

	app = JSON.parse(JSON.stringify(json));//原对象不能包含function以及过于复杂的层次 Deep Clone
	
	//柱状图前后加0
		app.lineData.push({
			value: '-',
			itemStyle: {
				normal: {
					opacity: 0
				},
				emphasis: {
					opacity: 0
				}
			}
		});
		app.lineData.unshift({
			value: '-',
			itemStyle: {
				normal: {
					opacity: 0
				},
				emphasis: {
					opacity: 0
				}
			}
		});
		
		
		app.barData.push({
			value: 0,
			itemStyle: {
				normal: {
					opacity: 0
				},
				emphasis: {
					opacity: 0
				}
			}
		});
		app.barData.unshift({
			value: 0,
			itemStyle: {
				normal: {
					opacity: 0
				},
				emphasis: {
					opacity: 0
				}
			}
		});
		app.categories.push('');
		app.categories.unshift('');
	
	var maxP = (app.lineData.length >= app.barData.length ? app.lineData.length  : app.barData.length) - 1;
	
	app.timeTicket = setInterval(function () {
        //drawLogo(myChart);
	}, 3000);
	

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

					if (params[0].dataIndex === 0 || params[0].dataIndex === maxP) {
						return '';
					}

					var stl = '';
					$(params).each(function(index, serie) {
						var colors = myChart.getOption().color;
						var color = colors[index % colors.length];
						stl += '<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:'+color+';"></div>&emsp;' + serie.seriesName+':&emsp;'+serie.value;
					});
					return '<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">' + params[0].name + stl + '</div>';
				}
			},
			legend: {
				data: ['最新成交价', '预购队列']
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: app.categories
			}],
			yAxis: [{
				type: 'value',
				scale: true,
				name: '价格',
				
				max: 20,
				min: 0,
				boundaryGap: [0.2, 0.2]
			}, {
				type: 'value',
				scale: true,
				name: '预购量',
				max: 1200,
				min: 0,
				boundaryGap: [0.2, 0.2]
			}],
			series: [{
				name: '预购队列',
				silent:true,
				type: 'bar',//stack:'A',
				itemStyle: {
					normal: {
						opacity: 1
					},
					emphasis: {
						opacity: 1
					}
				},
				data: app.barData
			}, {
				name: '最新成交价',silent:true,
				type: 'line',//stack:'A',
				data: app.lineData
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
	