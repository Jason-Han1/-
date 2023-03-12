
var json = {
	chart0: {
		text: '未来一周气温变化',
		subtext: '纯属虚构',
		legend: [['最高气温', '最低气温'], ['A', 'B']],
		xcategory: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		high: [11, 11, 15, 13, 12, 13, 10],
		highLine: []
	}
};

var baseOption = {
	toolbox: {
		show: true
	},
	tooltip: {
		trigger: 'axis',
		/*position: function (pt) {
		console.log(pt);
		return [pt[0], '10%'];
		},*/
		padding: 0,
		extraCssText: 'box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'line' // 默认为直线，可选为：'line' | 'shadow'
		},
		backgroundColor: 'rgba(255,255,255,0)',
		show: true
	}
};

/*EChart内置辅助类*/
var zrUtil = echarts.util;

/*JSON数据处理*/

//计算描点路径
//zrUtil.each(json.chart0.xcategory, function (item, index) {
// 	json.chart0.highLine.push([{
// 				coord: [0, json.chart0.high[0]]
// 			}, {
// 				coord: [1, json.chart0.high[1]]
// 			},{
// 				coord: [2, json.chart0.high[2]]
// 			}
// 		]);
		json.chart0.highLine=[{coords: [
        [0, json.chart0.high[0]],  // 起点
        [1, json.chart0.high[1]],  // 终点
        [2, json.chart0.high[2]],  // 终点
        [3, json.chart0.high[3]],  // 终点
        [4, json.chart0.high[4]],  // 终点
        [5, json.chart0.high[5]],  // 终点
        [6, json.chart0.high[6]],  // 终点
    ]}];
//});

var opt = {
	title: {
		text: json.chart0.text,
		subtext: json.chart0.subtext
	},
	animationEasing: 'ElasticOut',
	legend: [{
			data: json.chart0.legend[0]
		}, {
			data: json.chart0.legend[1],
			top: 15,
		}
	],
	calculable: true,
	xAxis: [{
			type: 'category',
			axisLabel: {
				formatter: function (value) {

					var sepCount = 1; //每几个字符分隔

					return value.replace(/(\S{1})(?=[^$])/g, "$1\n\n")
				}
			},
			boundaryGap: false,
			data: json.chart0.xcategory
		}
	],
	yAxis: [{
			type: 'value',
			axisLabel: {
				formatter: '{value} °C'
			}
		}
	],
	series: [{
			name: '最高气温',
			type: 'line',
			data: json.chart0.high
		}, {
			name: 'A',
			type: 'lines',
			coordinateSystem: 'cartesian2d',
			zlevel: 20,
			polyline:true,
			effect: {
				show: true,
				smooth: false,
				period: 6,
				symbolSize: 20
			},
			lineStyle: {
				normal: {
				    color: function(){
							return '#c23531';
						}(),
					width: 1,
					opacity: 0.4,
					curveness: 0 //贝塞尔曲线度
				}
			},
			data: json.chart0.highLine
		}
	]
};

option = zrUtil.merge(opt, baseOption, false);
