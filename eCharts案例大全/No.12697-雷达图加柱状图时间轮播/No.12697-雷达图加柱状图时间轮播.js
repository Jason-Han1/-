var small_active = "/asset/get/s/data-1544520420656-0IBIgG42x.png";

var small_icon = "/asset/get/s/data-1544520416921-dDifNqgDb.png";



option = {
	baseOption: {
		timeline: {
			show: true,
			type: 'slider',
			axisType: 'category',
			bottom: '0',
			symbolSize: 15,
			symbol:"image://"+small_icon,
			currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
			autoPlay: true, //是否自动播放
			loop: true,
//						rewind:true,//反向轮播
			realtime: true, //拖动圆点的时候，是否实时更新视图。
			playInterval: 3000,
			left:'2%',
			right:'0%',
			bottom:'9%',
			label: {
				normal: {
					color: '#fff',
					interval:0,
					fontSize:17,
					padding:[0,0,-40,0],
					
				},
			},
			itemStyle: {
				normal: {
					color: '#fff',
					borderColor: '#2998ff',
					borderWidth: 2,
				}
			},
			lineStyle: {
				show: true, //false 不显示轴线
				color: '#2998ff',
			},
			controlStyle: {
				showPlayBtn: false,
				normal: {
					color: "#2998ff",
					borderColor: "#2998ff"
				}
			},
			checkpointStyle:{//『当前项』（checkpoint）的图形样式
				symbol:"image://"+small_active,
				symbolSize:30
			},
			data: ["经济建设","卫生健康","科学教育","民生服务","公共安全","社会资源","机构团体","城市建设","道路交通","社会发展","文化休闲", "资源环境"],
		},
		color: ["#00ffa1", "#00fcff", "#f0e751", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
		grid: [ 
	        {x: '12%', y: '58%', width: '33%', height: '25%'},
	        {x2: '7%', y: '58%', width: '33%', height: '25%'},
	     ],
	    backgroundColor:"#013d5a",
		radar: [{
            radius: '25%',
            startAngle: 90,
            splitNumber: 4,
            center: ['54%', '21%'],
            shape: 'circle',
            name:{
            	show:true,
            	fontSize:20,
            	color:"#fff"
            },
            nameGap:25,
            splitArea: {
                areaStyle: {
                    color: 'transparent',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#0095B0'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0,155,226,0.6)'
                }
            }
        },
	    ],
		title: [{
		        text: '数据使用方式',
		        x: '11%',
		        y:'48%',
		        textStyle:{
		        	 color:'#fff',
		        	 fontSize:20,
		        	 fontWeight:'400',
		        },
		        textAlign: 'center'
		    }, {
		        text: '数据格式',
		        x: '58%',
		        y:'48%',
		        textStyle:{
		        	 color:'#fff',
		        	 fontSize:20,
		        	 fontWeight:'400',
		        },
		        textAlign: 'center'
		}],
		xAxis: [{
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0a7594'
				}
			},
			axisLabel: {
				color: '#fff',
				interval:0,
				fontSize: 20
			},
			axisTick:{
				show:true,
				color:'#0a7594'
			},
			data:["数据集","文件集","API","地图"]
		},{
			gridIndex: 1,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0a7594'
				}
			},
			axisLabel: {
				color: '#fff',
				interval:0,
				fontSize: 20
			},
			axisTick:{
				show:true,
				color:'#0a7594'
			},
			data:["XLS","XML","JSON","CSV"]
		}],
		yAxis: [{
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0a7594',
				}
			},
			axisLabel: {
				color: '#01fffe',
				fontSize: 16
			},
			axisTick:{
				show:true,
				color:'#0a7594'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0a7594',
					width: 1
				}
			}

		},{
			gridIndex: 1,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0a7594',
				}
			},
			axisLabel: {
				color: '#01fffe',
				fontSize: 16
			},
			axisTick:{
				show:true,
				color:'#0a7594'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0a7594',
					width: 1
				}
			}

		}],
		series: [{
	        name: '雷达图',
	        type: 'radar',
	        symbol: "circle",
	        symbolSize: 10,
	        itemStyle:{
	            color:'rgba(231,221,89, 1)',
	            borderColor:'rgba(231,221,89, 0.3)',
	            borderWidth:10,
	        },
	        areaStyle: {
	            normal: {
	                color: 'rgba(231, 221, 89,0.6)',
	            },
	        },
	        lineStyle: {
	            normal: {
	                color: 'rgba(0, 255, 255,0.6)',
	                type: 'dashed',
	                width: 3
	            },
	            emphasis: {}
	        },
		}, {
			type: 'bar',
			barWidth: '56%',
			itemStyle: {
				normal: {
					color: '#00ffff',
				}
			},
			label:{
				normal:{
					show:true,
					position:'top',
					color:"#fff",
					fontSize:20
				}
			},
		},{
			type: 'bar',
			barWidth: '56%',
			xAxisIndex: 1,
        	yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#50e9b1',
				}
			},
			label:{
				normal:{
					show:true,
					position:'top',
					color:"#fff",
					fontSize:20
				}
			},
		}] //series结束
	},
	options: [
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","color":"#e7dd59","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [82, 82, 82, 1]
				},
				{
					data: [81, 81, 81, 81]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110,"color":"#e7dd59"},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [50, 50, 50, 10]
				},
				{
					data: [49, 49, 49, 49]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110,"color":"#e7dd59"},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [56, 56, 56, 10]
				},
				{
					data: [55, 55, 55, 55]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110,"color":"#e7dd59"},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [109, 109, 109, 29]
				},
				{
					data: [108, 108, 108, 108]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110,"color":"#e7dd59"},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [101, 101, 101, 1]
				},
				{
					data: [98, 98, 98, 98]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110,"color":"#e7dd59"},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [94, 94, 94, 0]
				},
				{
					data: [94, 94, 94, 94]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110,"color":"#e7dd59"},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [88, 88, 87, 13]
				},
				{
					data: [88, 88 ,88, 87]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110,"color":"#e7dd59"},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [78, 78, 78, 4]
				},
				{
					data: [76, 76 ,76, 76]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110,"color":"#e7dd59" },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [44, 44, 44, 6]
				},
				{
					data: [44, 44 ,44, 44]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110,"color":"#e7dd59"},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [58, 58, 58, 1]
				},
				{
					data: [57, 57 ,57, 57]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110,"color":"#e7dd59"},{ "text": "资源环境","num": "50","max":110}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [54, 54, 54, 3]
				},
				{
					data: [53, 53 ,53, 52]
				}
			]
		},
		{
			radar:[{indicator:[{ "text": "经济建设","num": "82","max":110},{ "text": "卫生健康","num": "50","max":110},{"text": "科学教育","num": "56","max":110},{"text": "民生服务","num": "109" ,"max":110},{"text": "公共安全","num": "101","max":110},{ "text": "社会资源","num": "94","max":110},{ "text": "机构团体","num": "88","max":110},{"text": "城市建设","num": "78","max":110},{"text": "道路交通","num": "44","max":110 },{"text": "社会发展","num": "58","max":110},{ "text": "文化休闲","num": "54","max":110},{ "text": "资源环境","num": "50","max":110,"color":"#e7dd59"}]}],
			series: [
				{
					data:[{value:[82,50,56,109,101,94,88,78,44,58,54,50]}]
				},
				{
					data: [50, 50, 50, 1]
				},
				{
					data: [50, 50 ,50, 50]
				}
			]
		},
	
]}