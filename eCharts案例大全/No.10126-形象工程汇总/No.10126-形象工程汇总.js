option = {
				title : {
					text: '控制性工程汇总',
					subtext: '百分比(%)'
				},
				tooltip : {
					trigger: 'axis'
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
						data : ['挖土方(m³)','挖石方(m³)','填方(m³)','涵洞通道(道)','桩基(根)','承台(个)','墩柱（含肋板）(根)','台帽盖梁(个)','梁板预制(片)','梁板安装(片)','桥面铺装(㎡)','防撞护栏(m)',
						'明洞(米)','主动掘进(米)','初期支护(米)','二次衬砌(米)','水稳底基层(米)','水稳基层(第一层)(米)','水稳基层(第二层)(米)','上基层(米)','沥青下面层(米)','沥青上面层(米)',],
						splitLine:{
							show:false
						},
						axisTick: {
							alignWithLabel: true
						},
						axisLabel:{
						    rotate:45
						}
					}
				],
				yAxis : [
					{
						type : 'value',
						splitLine:{
							show:false
						},
						splitArea:{
							show:true,
						},
					}
				],
				series : [
					{
						name:'完成量',
						type:'bar',
						label:{
						    normal:{
						        show:true,
						        position:'top'
						    }
						},
						itemStyle:{
							normal:{
								color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
							}
						},
						data:[ 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3, 30.3, 21.3, 66.3, 41.3, 15.3, 30.3, 22.3, 12.3, 82.3, 72.3, 62.3, 52.3, 42.3, 36.6],
					}
				]
			};