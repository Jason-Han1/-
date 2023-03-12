var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

		var provs = [
				{
					name:"北京",
					order_count : 120000,
					mail_count : 91000,
					clct_count : 78000,
					clct_ratio : 87.01
				},
				{																	
					name:"上海",
					order_count : 100000,
					mail_count : 71000,
					clct_count : 58000,
					clct_ratio : 87.01							
				},{																	
					name:"江苏",
					order_count : 90000,
					mail_count : 71000,
					clct_count : 58000,
					clct_ratio : 87.01							
				},
				{																	
					name:"浙江",
					order_count : 80000,
					mail_count : 61000,
					clct_count : 58000,
					clct_ratio : 87.01							
				},
				{																	
					name:"广东",
					order_count : 60000,
					mail_count : 41000,
					clct_count : 30000,
					clct_ratio : 87.01							
				},
				{																	
					name:"湖北",
					order_count : 40000,
					mail_count : 21000,
					clct_count : 18000,
					clct_ratio : 87.01							
				},
				{																	
					name:"湖南",
					order_count : 20000,
					mail_count : 9100,
					clct_count : 7800,
					clct_ratio : 87.01							
				},
				{																	
					name:"四川",
					order_count : 10000,
					mail_count : 9100,
					clct_count : 7800,
					clct_ratio : 87.01							
				}];

        // 指定图表的配置项和数据
        var geoCoordMap = {
						'上海': [121.4648,31.2891],
						'新疆': [87.9236,43.5883],
						'甘肃': [103.5901,36.3043],
						'总部': [70.4551,50.2539],
						'北京': [116.4551,40.2539],
						'江苏': [118.8062,31.9208],
						'广西': [108.479,23.1152],
						'江西': [116.0046,28.6633],
						'安徽': [117.29,32.0581],
						'内蒙古': [111.4124,40.4901],
						'黑龙江': [127.9688,45.368],
						'天津': [117.4219,39.4189],
						'山西': [112.3352,37.9413],
						'广东': [113.5107,23.2196],
						'四川': [103.9526,30.7617],
						'西藏': [91.1865,30.1465],
						'云南': [102.9199,25.4663],
						'浙江': [119.5313,29.8773],
						'湖北': [114.3896,30.6628],
						'辽宁': [123.1238,42.1216],
						'山东': [117.1582,36.8701],
						'海南': [110.3893,19.8516],
						'河北': [114.4995,38.1006],
						'福建': [119.4543,25.9222],
						'青海': [101.4038,36.8207],
						'陕西': [109.1162,34.2004],
						'贵州': [106.6992,26.7682],
						'河南': [113.4668,34.6234],
						'重庆': [107.7539,30.1904],
						'宁夏': [106.3586,38.1775],
						'吉林': [125.8154,44.2584],
						'湖南': [113.0823,28.2568]
						};

		var convertData = function (data) {
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var geoCoord = geoCoordMap[data[i].name];
				if (geoCoord) {
					res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value)
					});
				}
			}
			return res;
		};
		var convertData2 = function (data) {
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var dataItem = data[i];
				var fromCoord = geoCoordMap[dataItem[0].name];
				var toCoord = geoCoordMap[dataItem[1].name];
				if (fromCoord && toCoord) {
					res.push({
						fromName: dataItem[0].name,
						toName: dataItem[1].name,
						coords: [fromCoord, toCoord]
					});
				}
			}
			return res;
		};

		option = {
			backgroundColor: '#404a59',
			title: {
				text: '全国主要城市空气质量',
				subtext: 'data from PM25.in',
				sublink: 'http://www.pm25.in',
				x:'center',
				textStyle: {
					color: '#fff'
				}
			},
			tooltip : {
				trigger : 'item',
				 formatter: function (v) {
						   var html="";
						  provs.forEach(function(item){

							   if(item.name==v.name)
							   {

								html="订单量："+item.order_count/1000+"K<br>邮件量："+item.mail_count/1000+"K<br>收寄量："+item.clct_count/1000+"K<br>收寄率："+item.clct_ratio+"%";

							   }

						  });
						  return html;
						}
			},
			geo: {
				map: 'china',
				label: {
					emphasis: {
						show: false
					}
				},
				roam: true,
				itemStyle: {
					normal: {
						areaColor: '#323c48',
						borderColor: '#111'
					},
					emphasis: {
						areaColor: '#2a333d'
					}
				}
			},
			dataRange : {
					show:false,
					min : 0,
					max : 120000,
					x : 'left',
					y : 'bottom',
					text : ['低', '高'],
					calculable : true,
					color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
				},
			series: [
				{
					name: 'pm2.5',
					type: 'scatter',
					coordinateSystem: 'geo',
					data: convertData((function () {
								var data = [];
								for (var i = 0; i < provs.length; i++) {
									data.push({
										name : provs[i].name,
										value : provs[i].order_count
									});
								}
								return data;
							})()),
					symbolSize: function (val) {
						return 50 + val[2]/5000;
					},
					label: {
						normal: {
							show: true,
							formatter:function(obj){
												return obj['name']+'\n'+obj['value'][2];
											}
						},
						emphasis: {
							show: false
						}
					},
					itemStyle: {
						emphasis: {
							borderColor: '#fff',
							borderWidth: 1
						}
					}
				},{
					name: ' Top10',
					type: 'lines',
					zlevel: 1,
					effect: {
						show: true,
						period: 6,
						trailLength: 0.7,
						color: '#fff',
						symbolSize: 3
					},
					lineStyle: {
						normal: {
							color: '#a6c84c',
							width: 0,
							curveness: 0.2
						}
					},
					data: convertData2([
						[{name:'上海'},{name:'北京',value:95}],
						[{name:'上海'},{name:'广东',value:90}],
						[{name:'上海'},{name:'四川',value:80}],
						[{name:'四川'},{name:'上海',value:80}],
						[{name:'北京'},{name:'广东',value:80}],
						[{name:'广东'},{name:'北京',value:80}]
					])
				},
				{
					name: ' Top10',
					type: 'lines',
					zlevel: 2,
					symbol: ['none', 'arrow'],
					symbolSize: 10,
					effect: {
						show: true,
						period: 6,
						trailLength: 0,
						symbol: planePath,
						symbolSize: 15
					},
					lineStyle: {
						normal: {
							width: '',
							color: '#a6c84c',
							curveness: 0.2
						}
					},
					data: convertData2([
						[{name:'上海'},{name:'北京',value:95}],
						[{name:'上海'},{name:'广东',value:90}],
						[{name:'上海'},{name:'四川',value:80}],
						[{name:'四川'},{name:'上海',value:80}],
						[{name:'北京'},{name:'广东',value:80}],
						[{name:'广东'},{name:'北京',value:80}]
					])
				}
			]
		};
		
		console.info(convertData2([
						[{name:'上海'},{name:'北京',value:95}],
						[{name:'上海'},{name:'广东',value:90}],
						[{name:'上海'},{name:'四川',value:80}]
						
					]));