var uploadedDataURL = "/asset/get/s/data-1636163707194-oSkF9fGq_.json";


	
	var outname = ['广东省','广西壮族自治区','海南省','台湾省','香港特别行政区','澳门特别行政区'];
	var outvalue = [10,23,33,66,55,44];
	var outvalueje = ['10','23','33','66','55','44'];

	var outdata = [];
	$.getJSON(uploadedDataURL, function(geoJson) {
		echarts.registerMap('华南大区', geoJson);

		for (var i = 0; i < outname.length; i++) {
			outdata.push({
				name: outname[i],
				value: outvalue[i],
				moneys: outvalueje[i]
			})
		}
		
		option = {
			backgroundColor: '#131C38',
			tooltip: {
				backgroundColor: '#000259',
				trigger: 'axis',
			},
			legend: {
				show: false,
			},
			geo: [{
					map: '华南大区',
					aspectScale: 1,
					zoom: 0.45,
					layoutCenter: ['50%', '50%'],
					layoutSize: '180%',
					show: true,
					roam: false,
					label: {
						emphasis: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							borderColor: 'rgba(192,245,249,.8)',
							borderWidth: 3,
							shadowColor: '#6FFDFF',
							shadowOffsetY: 0,
							shadowBlur: 10,
							areaColor: 'rgba(29,85,139,.6)',
						},

					},
					emphasis: {
						areaColor: 'rgba(29,85,139,.6)',
					}
				}, {
					map: '华南大区',
					aspectScale: 1,
					zoom: 0.45,
					layoutCenter: ['50%', '50%'],
					layoutSize: '180%',
					show: true,
					roam: false,
					label: {
						emphasis: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							borderColor: 'rgba(192,245,249,.8)',
							borderWidth: 3,
							shadowColor: '#2C99F6',
							shadowOffsetY: 0,
							shadowBlur: 120,
							areaColor: 'rgba(29,85,139,.6)',
						},

					},
					emphasis: {
						areaColor: 'rgba(29,85,139,.6)',
					}
				},
				//重影
				{
					type: 'map',
					map: '华南大区',
					zlevel: -1,
					aspectScale: 1,
					zoom: 0.45,
					layoutCenter: ['50%', '50.7%'],
					layoutSize: '180%',
					roam: false,
					silent: true,
					itemStyle: {
						normal: {
							borderColor: 'rgba(172, 122, 255,0.5)',
							shadowColor: 'rgba(172, 122, 255,0.5)',
							shadowOffsetY: 5,
							shadowBlur: 15,
							areaColor: 'rgba(5,21,35,0.1)'
						}
					}
				},
				{
					type: 'map',
					map: '华南大区',
					zlevel: -2,
					aspectScale: 1,
					zoom: 0.45,
					layoutCenter: ['50%', '51.4%'],
					layoutSize: '180%',
					roam: false,
					silent: true,
					itemStyle: {
						normal: {
							borderColor: 'rgba(172, 122, 255,0.4)',
							shadowColor: 'rgba(172, 122, 255,0.6)',
							shadowOffsetY: 5,
							shadowBlur: 15,
							areaColor: 'rgba(5,21,35,0.1)'
						}
					}
				},
				{
					type: 'map',
					map: '华南大区',
					zlevel: -3,
					aspectScale: 1,
					zoom: 0.45,
					layoutCenter: ['50%', '52.1%'],
					layoutSize: '180%',
					roam: false,
					silent: true,
					itemStyle: {
						normal: {
							borderColor: 'rgba(172, 122, 255,0.3)',
							shadowColor: 'rgba(172, 122, 255,0.8)',
							shadowOffsetY: 15,
							shadowBlur: 8,
							areaColor: 'rgba(5,21,35,0.1)'
						}
					}
				}
			],
			series: [{
				tooltip: {
					trigger: 'item',
					position: 'inside',
					formatter: function(item) {
						var tipHtml = '';
						if(item.value>0){
						tipHtml = '<div style="font-size: 16px;height: 30px;line-height: 30px;background:#000259;opacity: 0.75;border-radius: 3px;color:#fff">' + '&nbsp;&nbsp;' + item.name + '&nbsp;&nbsp;&nbsp;' + item.value + '次&nbsp;&nbsp;&nbsp;&nbsp;'+ item.data.moneys +'元&nbsp;&nbsp;'
							'</div>';
						}else{
						tipHtml = '<div style="font-size: 16px;height: 30px;line-height: 30px;background:#000259;opacity: 0.75;border-radius: 3px;color:#fff">' + '&nbsp;&nbsp;' + item.name + '&nbsp;&nbsp;&nbsp;0次&nbsp;&nbsp;&nbsp;&nbsp;0元&nbsp;&nbsp;'
							'</div>';							
						}
						return tipHtml;
					}
				},
				//name: '广东省数据',
				type: 'map',
				map: '华南大区', // 自定义扩展图表类型
				aspectScale: 1,
				zoom: 0.45, //缩放
				showLegendSymbol: false,
				label: {
					normal: {
						show: false,
					},
					emphasis: {
						show: false,
					}
				},
				itemStyle: {
					normal: {
						areaColor: {
							type: 'linear-gradient',
							x: 0,
							y: 300,
							x2: 0,
							y2: 0,
							colorStops: [{
								offset: 0,
								color: 'RGBA(37,108,190,1)' // 0% 处的颜色
							}, {
								offset: 1,
								color: 'RGBA(15,169,195,1)' // 50% 处的颜色
							}],
							global: true // 缺省为 false
						},
						borderColor: '#4ECEE6',
						borderWidth: 1,
					},
					emphasis: {
						areaColor: {
							type: 'linear-gradient',
							x: 0,
							y: 300,
							x2: 0,
							y2: 0,
							colorStops: [{
								offset: 0,
								color: 'RGBA(37,108,190,1)' // 0% 处的颜色
							}, {
								offset: 1,
								color: 'RGBA(15,169,195,1)' // 50% 处的颜色
							}],
							global: true // 缺省为 false
						},
					}
				},
				layoutCenter: ['50%', '50%'],
				layoutSize: '180%',
				markPoint: {
					symbol: 'none'
				},
				data: outdata,
			}]
		}
    myChart.setOption(option);
    //showTips('广州市');
})