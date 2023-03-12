	var shownChart;
	
	var json = {
		chart1: {
			legend:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
			series:[
				{ name: '直接访问', data:[120, 100, 101, 134, 90, 230, 210] },
				{ name: '邮件营销', data:[220, 182, 300, 234, 100, 330, 310] },
				{ name: '联盟广告', data:[150, 232, 300, 566, 52, 89, 410] },
				{ name: '视频广告', data:[180, 332, 200, 334, 390, 330, 320] },
				{ name: '搜索引擎', data:[820, 932, 60, 934, 63, 1330, 1320] }
			]
		}
    };	
    
    var cfg = {
		showVersion: false,
		colors: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],//应用主题的时候，需要把主题的color数组extend到此对象
		themeName: 'shine'
	};
	
	window.chartCfg = cfg;
	
	function getColorPalette(name){
		name = name || window.chartCfg.themeName;
		return  window.chartCfg.colors;
	}
    
    var oldToolBox = [];
	
	var baseOption = {
		toolbox: {
			show: true,
			feature: {
				dataView: {show: true, readOnly: false,optionToContent: function(opt) {
					var axisData = opt.xAxis[0].data;
					var series = opt.series;
					var table = '<table style="width:100%;text-align:center"><tbody><tr>'
								 + '<td>'+(opt.xAxis[0].name || 'xAxis')+'</td>'
								 + '<td>' + series[0].name + '</td>'
								 + '<td>' + series[1].name + '</td>'
								 + '</tr>';
					for (var i = 0, l = axisData.length; i < l; i++) {
						table += '<tr>'
								 + '<td>' + axisData[i] + '</td>'
								 + '<td>' + series[0].data[i] + '</td>'
								 + '<td>' + series[1].data[i] + '</td>'
								 + '</tr>';
					}
					table += '</tbody></table>';
					return table;
				}},
				magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
				restore: {show: false},
				saveAsImage: {show: true},
				myShare: {
					show: true,
					title: 'Share',
					icon: 'image://images/share_23.png',
					name:'share',
					onclick: function (chart){
						//console.log(chart);
						var features = chart.option.toolbox[0].feature;
						//console.log(features);
						for(var key in features){
							//console.log(features[key]);
						}
						
						//遍历取得初始工具栏
						zrUtil.each(features, function(index, key){
							//console.log(features[key]);
							if(features[key].name !== 'share' && features[key].show === true){
								oldToolBox.push(key);
							}
						});
						
						//调整工具栏显示
						zrUtil.each(features, function(index, key){
							//console.log(features[key]);
							if(zrUtil.indexOf(oldToolBox, key) > -1){
								features[key].show = !features[key].show;
							}
						});
						
						zrUtil.map(oldToolBox, function(item, index){
							item.show = !item.show;
							return item;
						});
						//console.log(charts[2].chart);
						shownChart.setOption({
							toolbox:{
								feature: features
							}
						});
					}
				}
			}
		},
		tooltip: {
			trigger: 'axis',
			/*position: function (pt) {
				console.log(pt);
				return [pt[0], '10%'];
			},*/
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
					if(serie.componentType === 'series' && serie.dataIndex > -1){
						var colors = myChart.getOption().color;
						var color = colors[index % colors.length];
						stl += '<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:'+color+';"></div>&emsp;' + serie.seriesName+':&emsp;'+serie.value;
					}
				});
				return stl ? '<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">' + (params[0] ? params[0].name : params.seriesName) + stl + '</div>' : '';
			}
		}
	};
	
	/*EChart内置辅助类*/
	var zrUtil = echarts.util;
	var zrVector = echarts.vector;
	var zrMatrix = echarts.matrix;
	var zrNumber = echarts.number;
	var zrFormat = echarts.format;
	var zrGraphic = echarts.graphic;
	
	var opt = {
			title: {
				text: '堆叠区域图'
			},
			tooltip : {
				trigger: 'axis'
			},
			legend: {
				data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			},
			toolbox: {
				feature: {
					saveAsImage: {}
				}
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
					boundaryGap : false,
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
					name:'邮件营销',
					type:'line',
					stack: '总量',
					lineStyle:{
						normal:{
							smooth:true
						}
					},
					areaStyle: {normal: {
						color: function(){ 
							var color = getColorPalette()[0];
							return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: color.colorRgba(0).toLowerCase()
							}, {
								offset: 1,
								color: color.colorRgba(1).toLowerCase()
							}]);
						}()
					}},
					data:[120, 132, 101, 134, 90, 230, 210]
				},
				{
					name:'联盟广告',
					type:'line',
					stack: '总量',
					smooth:true,
					areaStyle: {normal: {
						color: function(){ 
							var color = getColorPalette()[1];
							return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: color.colorRgba(0).toLowerCase()
							}, {
								offset: 1,
								color: color.colorRgba(1).toLowerCase()
							}]);
						}()
					}},
					data:[220, 182, 191, 234, 290, 330, 310]
				},
				{
					name:'视频广告',
					type:'line',
					stack: '总量',
					areaStyle: {normal: {
						color: function(){ 
							var color = getColorPalette()[2];
							return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: color.colorRgba(0).toLowerCase()
							}, {
								offset: 1,
								color: color.colorRgba(1).toLowerCase()
							}]);
						}()
					}},
					data:[150, 232, 201, 154, 190, 330, 410]
				},
				{
					name:'直接访问',
					type:'line',
					stack: '总量',
					areaStyle: {normal: {
						color: function(){ 
							var color = getColorPalette()[3];
							return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: color.colorRgba(0).toLowerCase()
							}, {
								offset: 1,
								color: color.colorRgba(1).toLowerCase()
							}]);
						}()
					}},
					data:[320, 332, 301, 334, 390, 330, 320]
				},
				{
					name:'搜索引擎',
					type:'line',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'top'
						}
					},
					areaStyle: {normal: {
						color: function(){ 
							var color = getColorPalette()[4];
							return new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: color.colorRgba(0).toLowerCase()
							}, {
								offset: 1,
								color: color.colorRgba(1).toLowerCase()
							}]);
						}()
					}},
					data:[820, 932, 901, 934, 1290, 1330, 1320]
				}
			]
		};
		
		option = zrUtil.merge(opt, baseOption, false)