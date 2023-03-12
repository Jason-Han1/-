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

	var json = {
		chart0:{
            text: '未来一周气温变化',
            subtext: '纯属虚构',
            legend: [['最高气温', '最低气温'],['A','B']],
            xcategory: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            high: [11, 11, 15, 13, 12, 13, 10],
			highLine: [],
            low: [1, -2, 2, 5, 3, 2, 0],
			lowLine:[],
			avg:[]
		}
    };	
    
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
				saveAsImage: {show: true}
			
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
						var colors = charts[0].chart.getOption().color;
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
	
	/*JSON数据处理*/
	
	//计算描点路径
	zrUtil.each(json.chart0.xcategory, function(item, index){
		json.chart0.highLine.push([{coord:[index,json.chart0.high[index]] },{coord:[index+1,json.chart0.high[index+1]]}]);
	});
	zrUtil.each(json.chart0.xcategory, function(item, index){
		json.chart0.lowLine.push([{coord:[index,json.chart0.low[index]] },{coord:[index+1,json.chart0.low[index+1]]}]);
	});
	zrUtil.each(json.chart0.high, function(item, index){
		json.chart0.avg.push((json.chart0.low[index] + json.chart0.high[index]) / 2);
	});
	
	
	var opt = {
			title: {
				text: json.chart0.text,
				subtext: json.chart0.subtext
			},
			animationEasing: 'ElasticOut',
			legend: [{
				data: json.chart0.legend[0]
			},{
				data: json.chart0.legend[1],
				top:15,
			}],
			calculable: true,
			xAxis: [{
				type: 'category',
				axisLabel:{
					formatter:function(value){
					
						var sepCount = 1;//每几个字符分隔
					
						return value.replace(/(\S{1})(?=[^$])/g, "$1\n\n")
					}
				},
				boundaryGap: false,
					data: json.chart0.xcategory
				}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					formatter: '{value} °C'
				}
			}],
            series: [{
                name: '最高气温',
                type: 'line',
                data: json.chart0.high
            }, {
                name: '最低气温',
                type: 'line',
                data: json.chart0.low
            },{
                name: '平均气温',
                type: 'line',
                data: json.chart0.avg,
				lineStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: 'rgb(255, 0, 0)'
						}, {
							offset: 1,
							color: 'rgb(0, 255, 0)'
						}])
					}
				}
            },{
				name: 'A',
				type: 'lines',
				coordinateSystem: 'cartesian2d',
				zlevel: 2,
				effect: {
					show: true,
					smooth: false,
					period: 6,
					//trailLength: 0,
					//symbol: planePath,
					//color:'rgba(55,155,255,0.5)',
					symbolSize: 8
				},
				lineStyle: {
					normal: {
						color: function(){
							return getColorPalette()[0];
						}(),
						/*color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: 'rgb(255, 0, 0)'
						}, {
							offset: 1,
							color: 'rgb(0, 255, 0)'
						}]),*/
						width: 1,
						opacity: 0.4,
						curveness: 0//贝塞尔曲线度
					}
				},
				data: json.chart0.highLine
			},{
				name: 'B',
				type: 'lines',
				coordinateSystem: 'cartesian2d',
				zlevel: 2,
				effect: {
					show: true,
					smooth: false,
					period: 6,
					symbolSize: 8
				},
				lineStyle: {
					normal: {
						color: function(){
							return getColorPalette()[1];
						}(),
						width: 1,
						opacity: 0.4,
						curveness: 0//贝塞尔曲线度
					}
				},
				data: json.chart0.lowLine
			}]
        };
        
    option = zrUtil.merge(opt, baseOption, false);