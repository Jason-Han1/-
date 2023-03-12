var titleDatas = ['机 动\n车交\n通 违\n法 监\n控 抓\n拍 位\n置 信\n息', '道 路\n客 运\n企 业\n信 息', '文 化\n设 施\n名 录', '特 色\n产 业\n（广 东\n省 专\n业 镇\n信 息）', '企 业\n驰 名\n商 标\n及 著\n名 商\n标 信\n息', '水 雨\n情 信\n息', '高 管\n人 员\n信 息',
		'商 事\n主 体\n基 础\n信 息', '市 人\n口 规\n模 及\n分 布\n情 况\n（年 度）', '地 税\n税 务\n登 记\n信 息'];
	var cityName = ['北京'];

	var nowDatas = [
		[0, 0, 123],
		[0, 1, 103],
		[0, 2, 101],
		[0, 3, 80],
		[0, 4, 85],
		[0, 5, 70],
		[0, 6, 60],
		[0, 7, 55],
		[0, 8, 50],
		[0, 9, 40]
	];

	 option = {
		title: [],
		singleAxis: [],
		series: [],
		backgroundColor:"#013d5a",
	};
	//这里应该是遍历的意思，idx是遍历每一根轴的标志
	echarts.util.each(cityName, function(day, idx) {
		option.singleAxis.push({
			type: 'category',
			boundaryGap: false,
			data: titleDatas,
			top: '26%',
			height: (100 / 5 - 19) + '%', //5是指有五根轴，这里计算的是每根轴离顶端的距离
			left: '6%',
			axisLabel: {
				interval: 0,
				margin: 30,
				color:"#fff",
				fontSize:18
			},
			axisLine:{
				lineStyle:{
					color:"#fff"
				}
			},
			axisTick:{
				lineStyle:{
					color:"#fff"
				}
			}
		});
		option.series.push({
			singleAxisIndex: idx,
			coordinateSystem: 'singleAxis',
			type: 'scatter',
			label: {
				normal: {
					show: false,
					position: 'top'
				}
			},
			itemStyle: {
                normal: {
                    color: function(params) {
                    	var colors = ["#9cb3e2","rgba(215,205,251,0.9)","#e2b6e4","#e2b9a7","#dabd73","#dbd586","#d1eb98","#a2e27c","#48d8a9","#00ecee"];
                            var num=colors.length;
                            return colors[params.dataIndex%num]
                    },
                }
           },
			data: [],
			symbolSize: function(dataItem) {
				return dataItem[1] * 0.5;
			}
		});
	});

	echarts.util.each(nowDatas, function(dataItem) {
		option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
	});