/**
 * 无法单独设置坐标轴是否显示
 * 将坐标轴颜色设置为透明即可隐藏坐标轴
 * */
var hours = ['子时', '丑时', '寅时', '卯时', '辰时','巳时','午时', '未时', '申时','酉时', '戊时', '亥时'];
var days = [''];
var data = [
	[0,0,4],[0,1,1],[0,2,1],[0,3,3],[0,4,4],[0,5,6],[0,6,4],[0,7,4],[0,8,3],[0,9,3],[0,10,2],[0,11,5],
];
option = {
    title: {
        text: '3D 柱状图'
    },
    tooltip: {},
	visualMap: {
		max: 20,
		inRange: {
			color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
		}
	},
    grid3D: {
		// show: false, // 是否显示坐标系
		boxWidth: 200,
		boxDepth: 20,
		light: {
			main: {
				intensity: 1.2,
				shadow: true
			},
			ambient: {
				intensity: 0.3
			}
		},
		environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			offset: 0, color: '#00aaff' // 天空颜色
		}, {
			offset: 0.7, color: '#998866' // 地面颜色
		}, {
			offset: 1, color: '#998866' // 地面颜色
		}], false),
		
	},
	xAxis3D: {
		type: 'category',
		data: hours,
		axisLabel: {
			interval: 0,
		},
		axisLine: {
			lineStyle: {
				color: 'transparent'
			}
		}
	},
	yAxis3D: {
		type: 'category',
		data: days,
		axisLine: {
			lineStyle: {
				color: 'transparent'
			}
		}
	},
	zAxis3D: {
		type: 'value',
		axisLine: {
			lineStyle: {
				color: 'transparent'
			}
		}
	},
	
	series: [{
		type: 'bar3D',
		data: data.map(function (item) {
			return {
				value: [item[1], item[0], item[2]],
			}
		}),
		shading: 'lambert',
		label: {
			show: false,
			distance: 10,
			textStyle: {
				fontSize: 16,
				borderWidth: 1,
				borderColor: '#440255'
			}
		},
		
		emphasis: {
			label: {
				textStyle: {
					fontSize: 20,
					color: '#900'
				}
			},
			itemStyle: {
				color: '#900'
			}
		}
	}]
};