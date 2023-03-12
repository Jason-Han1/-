


   let data =[[729,774,648,822,638,669,762,690,757,650,639,665,796,781,766,670],[3092,2505,3136,2579,2529,3090,2676,2755,3134,2497,3105,2614,3301,2532,2948,3122],[121,117,122,126,126,120,126,118,124,119,125,123,126,119,123,118]] ;
  let  xAxis=[100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000];



	let legend = ['省际漫入', '省内漫游', '本地用户'];
	let end = Math.floor((10 / data[0].length) * 100);
	let data1=data[0];//实心柱子
	let data2=data[1];//虚空柱子
	let data3=data[2];//线

option={    
    //提示框，包括显示竖线
    tooltip: {
        trigger: 'axis'
    },
		grid: {
			top: "15%",
			left: "60",
			right: "60",
			bottom: "20%"
		},
		legend: {
			show: true,
			right: '10%',
			top: '3%',
			itemWidth: 20,
			itemHeight: 12,
		//	itemGap: 16,
			textStyle: {
			//	color: "#feffff",
				fontSize: 14,
				fontFamily: 'SansM'
			},
			data: legend
		},
		dataZoom: [{
			show: true,
			height: 8,
			xAxisIndex: 0,
			bottom: "5%",
			start: 0,
			end: end,
			fillerColor: "rgba(107, 152, 255, .8)",
			handleIcon: "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
			handleSize: "100%",
			handleStyle: {
				color: "transparent",
				borderColor: "transparent"
			},
			textStyle: {
				color: "#feffff",
				fontSize: 14,
				fontFamily: 'Aldrich, SansM'
			},
			borderColor: "transparent",
			backgroundColor: 'rgba(107, 152, 255, 0.2)'
		}],
		xAxis: [{
			type: "category",
			boundaryGap: true,
			axisLine: {
				show: false
			},
			axisLabel: {
			//	color: "rgba(254, 255, 255, 0.5)",
				fontSize: 14,
				fontFamily: 'Aldrich'
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: ["rgba(255,255,255, 0.05)", "rgba(255,255,255, 0)"]
				}
			},
			data: xAxis
		}],

		yAxis: [{
				type: 'value',
				axisLabel: {
				//	color: "rgba(254, 255, 255, 0.3)",
					fontSize: 14,
					fontFamily: 'Aldrich'
				},
				splitNumber: 3,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,0.1)"
					}
				}
			},
			{
				axisLabel: {
					formatter: "{value}%",
				//	color: "rgba(254, 255, 255, 0.3)",
					fontSize: 14,
					fontFamily: 'Aldrich'
				},
				axisLine: {
					show: false
				},
				splitNumber: 3,
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				}
			}
		],
		series: [
		    	    {
				name: legend[0],
				type: "line",
				yAxisIndex: 0,
				// smooth: true, //是否平滑
				//是否显示线条上节点的图形，这里就是节点上的圆圈
				showSymbol :false,
				showAllSymbol: false,
				symbol: "circle",
				symbolSize: 8,
				lineStyle: {
					normal: {
						color: "rgba(44, 255, 219, 1)",
						width: 2
					}
				},
				label: {
					show: false
				},
				//线条下面的渐变效果
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(44, 255, 219, 0.4)'
						}, {
							offset: 1,
							color: 'rgba(44, 255, 219,0.1)'
						}],
						global: false
					}
				},
				itemStyle: {
					normal: {
						color: "rgba(44, 255, 219, 1)",
						borderColor: "rgba(44, 255, 219, 0.01)",
						borderWidth: 4
					}
				},
				data: data1
			},
		    			{
				name: legend[1],
				type: "line",
				yAxisIndex: 0,
				// smooth: true, //是否平滑
				//是否显示线条上节点的图形，这里就是节点上的圆圈
				showSymbol :false,
				showAllSymbol: false,
				symbol: "circle",
				symbolSize: 8,
				lineStyle: {
					normal: {
						color: "rgba(26, 130, 255, 1)",
						width: 2
					}
				},
				label: {
					show: false
				},
				//线条下面的渐变效果
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(26, 130, 255, 0.4)'
						}, {
							offset: 1,
							color: 'rgba(26, 130, 255,0.1)'
						}],
						global: false
					}
				},
				itemStyle: {
					normal: {
						color: "rgba(26, 130, 255, 1)",
						borderColor: "rgba(26, 130, 255, 0.01)",
						borderWidth: 4
					}
				},
				data: data2
			},
			{
				name: legend[2],
				type: "line",
				yAxisIndex: 0,
				// smooth: true, //是否平滑
				showSymbol :false,
				showAllSymbol: false,
				symbol: "circle",
				symbolSize: 8,
				lineStyle: {
					normal: {
						color: "rgba(255, 61, 61, 1)",
						width: 2
					}
				},
				label: {
					show: false
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(255, 61, 61, 0.4)'
						}, {
							offset: 1,
							color: 'rgba(255, 61, 61, 0.1)'
						}],
						global: false
					}
				},
				itemStyle: {
					normal: {
						color: "rgba(255, 61, 61, 1)",
						borderColor: "rgba(255, 61, 61, 0.01)",
						borderWidth: 4
					}
				},
				data: data3
			}
			]
	};