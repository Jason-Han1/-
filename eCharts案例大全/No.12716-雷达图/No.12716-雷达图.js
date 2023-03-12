var color = "#189cbb";
	var scale = 1;
	var attackFlaw = [

		{
			text: '172.16.6.15\n2038',
			max: 10000
		},
		{
			text: '219.16.50.195\n2844',
			max: 10000
		},
		{
			text: '172.16.50.1\n3045',
			max: 10000
		},
		{
			text: '219.130.221.163\n8080',
			max: 20000
		},
		{
			text: '219.130.221.107\n16143',
			max: 20000
		},
	];
	var weekDatas = [{
			text: '信息攻击\n734',
			max: 22000
		},
		{
			text: '目录攻击\n1345',
			max: 20000
		},
		{
			text: 'WEBSHELL\n2266',
			max: 10000
		},
		{
			text: 'web漏洞\n1295',
			max: 10000
		},
		{
			text: 'web系统\n542',
			max: 10000
		},
	];
	var student = [2038, 2844, 3045, 8080, 16143];
	var flaw = [20734, 13145, 2266, 1295, 542];
	option = {
	    backgroundColor:"#013954",
		radar: [{
			indicator: attackFlaw,
			center: ['25%', '55%'],
			radius: '32%',
			nameGap: 5,
			name: {
				formatter: function(value, indicator) {
					let name = value.substring(0, value.indexOf("\n"));
					let values = value.substring(value.indexOf("\n") + 1, value.length); //去掉\n
					return '{yellow|' + name + '\n}{white| ' + values + '}';
				},
				rich: {
					yellow: {
						color: '#ddff8f',
						fontSize: 16,
						padding:[6,0,0,0]
					},
					white: {
						color: '#fff',
						fontSize: 16
					}
				}
			},
			splitLine: {
				lineStyle: {
					color: '#5b9ea5',
					opacity: 1,
					width: 1
				},
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: 'rgb(19,98,137)',
					opacity: 0.4
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#189cbb',
					type: "dashed",
				}
			}
		}, {
			indicator: weekDatas,
			center: ['75%', '55%'],
			radius: '32%',
			name: {
				formatter: function(value, indicator) {
					let name = value.substring(0, value.indexOf("\n"));
					let values = value.substring(value.indexOf("\n") + 1, value.length); //去掉\n
					return '{yellow|' + name + '\n}{white| ' + values + '}';
				},
				rich: {
					yellow: {
						color: '#23dcd7',
						fontSize: 16,
						padding:[6,0,0,0]
					},
					white: {
						color: '#fff',
						fontSize: 16
					}
				}
			},
			nameGap: 5,
			splitLine: {
				lineStyle: {
					color: '#5b9ea5',
					opacity: 1,
					width: 1
				},
			},
			splitArea: {
				show: true,
				areaStyle: {
					color: 'rgb(19,98,137)',
					opacity: 0.4
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#189cbb',
					type: "dashed",
				}
			}
		}],
		grid: {
			containLabel: true,
			left: '2%',
			top: '12%'
		},
		series: [{
			type: 'radar',
			data: [{
				value: student,
				name: '考生数量对比'
			}],
			symbolSize: 3,
			itemStyle: {
				normal: {
					borderColor: 'rgb(221,255,143)',
					opacity: 0.5,
					borderWidth: 2,
				}
			},
			lineStyle: {
				normal: {
					color: "#ffde00",
					width: 1
				}
			},
			areaStyle: {
				normal: {
					color: '#b2ff00',
					opacity: 0.9
				}
			}
		}, {
			type: 'radar',
			data: [{
				value: flaw
			}],
			radarIndex: 1,
			symbolSize: 3,
			itemStyle: {
				normal: {
					borderColor: '#23dcd7',
					borderWidth: 2,
				}
			},
			lineStyle: {
				normal: {
					color: "#23dcd7",
					width: 2
				}
			},
			areaStyle: {
				normal: {
					color: '#00fff8',
					opacity: 0.9
				}
			}
		}]
	};