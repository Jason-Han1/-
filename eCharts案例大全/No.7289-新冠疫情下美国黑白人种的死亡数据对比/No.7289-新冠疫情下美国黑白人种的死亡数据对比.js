const data = [
	{
		name: 'Black, African American',
		label: '黑人',
		population: 1849077,
		death: 4280
	},
	{
		name: 'White',
		label: '白人',
		death: 4240,
		population: 2694258
	}
];
const styleList = [
	{
		itemStyle: {
			normal: {
				color: '#000'
			}
		}
	},
	{
		itemStyle: {
			normal: {
				color: '#fff'
			}
		}
	},
	{
		itemStyle: {
			normal: {
				color: 'rgba(227,161,96,0.8)'
			}
		}
	},
	{
		itemStyle: {
			normal: {
				color: '#ccc'
			}
		}
	}
];
let xData = [];
let population = [];
let death = [];
for (let i = 1; i <= data.length; i++) {
	const index = data.length - i;
	xData.push(data[index].label);
	const style = styleList[index].itemStyle;
	population.push({
		value: data[index].population,
		itemStyle: style
	});
	death.push({
		value: data[index].death,
		itemStyle: style
	});
}
const dataTotal = [
	{
		name: 'Black',
		value: 1849077,
		type: 'population'
	},
	{
		name: 'White',
		value: 2694258,
		type: 'population'
	},
	{
		name: 'Black',
		value: 4280,
		type: 'death'
	},
	{
		name: 'White',
		value: 4240,
		type: 'death'
	}
];
let legendData = [
	{
		name: '黑人',
		icon: 'rect',
		textStyle: {
			color: '#000'
		},
		backgroundColor: '#000'
	},
	{
		name: '白人',
		icon: 'rect',
		textStyle: {
			color: '#fff'
		},
		backgroundColor: '#fff'
	},
	{
		name: '亚裔',
		icon: 'rect',
		textStyle: {
			color: 'rgba(227,161,96,0.8)'
		},
		backgroundColor: 'rgba(227,161,96,0.8)'
	},
	{
		name: '其他',
		icon: 'rect',
		textStyle: {
			color: '#ccc'
		},
		backgroundColor: '#ccc'
	}
];
const cityColorOfCoronavirusData = [
	{
		city: '纽约',
		white: 84.3,
		black: 259.9
	},
	{
		city: '康涅狄格',
		white: 125.8,
		black: 171.9
	},
	{
		city: '密歇根',
		white: 39.0,
		black: 171.6
	},
	{
		city: '新泽西州',
		white: 98.0,
		black: 168.0
	},
	{
		city: '马萨诸塞州',
		white: 111.2,
		black: 127.2
	},
	{
		city: '哥伦比亚特区',
		white: 20.8,
		black: 117.8
	},
	{
		city: '路易斯安那州',
		white: 43.4,
		black: 100.2
	},
	{
		city: '伊利诺斯',
		white: 33.9,
		black: 98.2
	},
	{
		city: '宾夕法尼亚',
		white: 41.4,
		black: 85.1
	},
	{
		city: '马里兰',
		white: 39.7,
		black: 65.0
	},
	{
		city: '罗德岛州',
		white: 74.3,
		black: 64.8
	},
	{
		city: '印第安纳州',
		white: 25.2,
		black: 51.5
	},
	{
		city: '特拉华州',
		white: 41.8,
		black: 50.7
	},
	{
		city: '科罗拉多州',
		white: 25.1,
		black: 47.5
	},
	{
		city: '威斯康星州',
		white: 9.1,
		black: 44.2
	},
	{
		city: '密苏里州',
		white: 9.7,
		black: 41.6
	}
];
const yAxis = [
	{
		type: 'category',
		inverse: true,
		position: 'right',
		splitLine: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false
		},
		data: xData
	},
	{
		gridIndex: 1,
		type: 'category',
		inverse: true,
		position: 'left',
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false,
			padding: [ 0, 0, 0, 15 ],
			textStyle: {
				color: '#ffffff',
				fontSize: 20
			},
			align: 'center'
		},
		data: xData
	},
	{
		gridIndex: 2,
		type: 'category',
		splitLine: {
			show: false
		},
		inverse: true,
		position: 'left',
		axisLine: {
			show: true,
			lineStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			show: false
		},
		data: xData
	}
];
const xAxis = [
	{
		nameTextStyle: {
			color: '#fff'
		},
		type: 'value',
		name: '人口(总)',
		inverse: true,
		axisLine: {
			show: true,
			lineStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		},
		position: 'bottom',
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false,
			lineStyle: {}
		}
	},
	{
		gridIndex: 1,
		show: false
	},
	{
		nameTextStyle: {
			color: '#fff'
		},
		name: '死亡人数(总)',
		gridIndex: 2,
		axisTick: {
			show: false
		},
		axisLine: {
			show: true,
			lineStyle: {
				color: '#fff'
			}
		},
		position: 'bottom',
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false,
			lineStyle: {}
		}
	}
];
const renderCircle = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const style = api.style();
	style.fill = 'rgba(68,81,104,0.1)';
	return {
		type: 'circle',
		shape: {
			cx: width / 2,
			cy: height / 2,
			r: size / 4
		},
		style: style
	};
};
const circleSeries = {
	name: '圆',
	type: 'custom',
	silent: true,
	itemStyle: {
		borderColor: 'rgb(68,81,104)',
		borderWidth: 1
	},
	renderItem: renderCircle,
	data: [ 1 ]
};
const renderCirclePin = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const rangeLineLength = size * 0.3;
	const baseLineLength = size * 0.1;
	const baseR = size * 0.005;
	const rangeR = size * 0.01;
	const style = api.style({
		fill: api.value(0) % 2 === 0 ? '#000' : '#fff',
		stroke: api.value(0) % 2 === 0 ? '#000' : '#fff'
	});
	const index = api.value(0);
	const dataLength = api.value(1);
	const value = api.value(2);
	const maxValue = api.value(3);
	const k = value / maxValue;

	const key = (index - 0.5) * 2 * Math.PI / dataLength - Math.PI / 2;
	const cx = Math.cos(key) * (size + baseLineLength + rangeLineLength * k) / 4 + width / 2;
	const cy = Math.sin(key) * (size + baseLineLength + rangeLineLength * k) / 4 + height / 2;
	const x = Math.cos(key) * size / 4 + width / 2;
	const y = Math.sin(key) * size / 4 + height / 2;
	return {
		type: 'group',
		children: [
			{
				silent: true,
				type: 'line',
				shape: {
					x1: x,
					y1: y,
					x2: cx,
					y2: cy
				},
				style: style
			},
			{
				type: 'circle',
				shape: {
					cx,
					cy,
					r: baseR + rangeR * k
				},
				style: style
			}
		],
		style: style
	};
};

function getRenderData() {
	const textRenderData = [];
	for (let i = 0; i < cityColorOfCoronavirusData.length; i++) {
		textRenderData.push([
			2 * i,
			cityColorOfCoronavirusData.length * 2,
			cityColorOfCoronavirusData[i].black,
			cityColorOfCoronavirusData[0].black
		]);
		textRenderData.push([
			2 * i + 1,
			cityColorOfCoronavirusData.length * 2,
			cityColorOfCoronavirusData[i].white,
			cityColorOfCoronavirusData[0].black
		]);
	}
	return textRenderData;
}
const circlePinSeries = {
	type: 'custom',
	itemStyle: {
		borderColor: '#fff',
		borderWidth: 1
	},
	renderItem: renderCirclePin,
	data: getRenderData()
};

const renderCirclePoint = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	let fill = undefined;
	let stroke = undefined;
	let cx = undefined;
	let cy = undefined;
	let r = undefined;
	let z = undefined;
	let populationBaseR = 50;
	let deathBaseR = 20;

	if (api.value(2) === 'Black') stroke = '#000';
	if (api.value(2) === 'White') stroke = '#fff';

	if (api.value(2) === 'Black' && api.value(3) === 'population') {
		fill = 'rgba(0,0,0,0.5)';
		cx = width / 2 + size * 0.1;
		cy = height / 2 + size * 0.1;
		r = api.value(1) / api.value(4) * populationBaseR;
		z = 1;
	}
	if (api.value(2) === 'Black' && api.value(3) === 'death') {
		fill = 'rgba(0,0,0,1)';
		cx = width / 2 + size * 0.11;
		cy = height / 2 + size * 0.1;
		r = api.value(1) / api.value(5) * deathBaseR;
		z = 3;
	}
	if (api.value(2) === 'White' && api.value(3) === 'population') {
		fill = 'rgba(255,255,255,0.5)';
		cx = width / 2 - size * 0.09;
		cy = height / 2 - size * 0.09;
		r = api.value(1) / api.value(4) * populationBaseR;
		z = 1;
	}
	if (api.value(2) === 'White' && api.value(3) === 'death') {
		fill = 'rgba(255,255,255,1)';
		cx = width / 2 - size * 0.08;
		cy = height / 2 - size * 0.08;
		r = api.value(1) / api.value(5) * deathBaseR;
		z = 3;
	}

	const style = api.style({
		fill,
		stroke
	});
	return {
		type: 'circle',
		shape: {
			cx,
			cy,
			r,
			z
		},
		style: style
	};
};

function getCirclePointSeriesRenderData() {
	const textRenderData = [];
	for (let i = 0; i < dataTotal.length; i++) {
		textRenderData.push([ i, dataTotal[i].value, dataTotal[i].name, dataTotal[i].type, 2694258, 4280 ]);
	}
	return textRenderData;
}
const circlePointSeries = {
	name: 'circlePointSeries',
	type: 'custom',
	itemStyle: {
		borderWidth: 1
	},
	renderItem: renderCirclePoint,
	data: getCirclePointSeriesRenderData()
};
const renderCircleText = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);
	const style = api.style({
		textAlign: 'center',
		textVerticalAlign: 'middle',
		text: api.value(2),
		fontSize: size * 0.015
	});

	const key = api.value(0) * 2 * Math.PI / api.value(1) - Math.PI / 2;
	const x = Math.cos(key) * size / 4.2 + width / 2;
	const y = Math.sin(key) * size / 4.2 + height / 2;
	let rotation = -api.value(0) / api.value(1) * 2 * Math.PI;
	if (Math.cos(rotation) < 0) {
		rotation = rotation + Math.PI;
	}
	return {
		type: 'text',
		silent: true,
		rotation,
		position: [ x, y ],
		style: style
	};
};

function getCircleTextSeriesRenderData() {
	const textRenderData = [];
	for (let i = 0; i < cityColorOfCoronavirusData.length; i++) {
		textRenderData.push([ i, cityColorOfCoronavirusData.length, cityColorOfCoronavirusData[i].city ]);
	}
	return textRenderData;
}
const circleTextSeries = {
	type: 'custom',
	itemStyle: {
		color: '#000'
	},
	renderItem: renderCircleText,
	data: getCircleTextSeriesRenderData()
};
const renderLegend = function(params, api) {
	const width = api.getWidth();
	const height = api.getHeight();
	const size = Math.min(width, height);

	return {
		type: 'group',
		silent: true,
		children: [
			{
				type: 'group',
				children: [
					{
						type: 'circle',
						shape: {
							cx: 50,
							cy: 50,
							r: 10
						},
						style: api.style({
							fill: '#fff',
							stroke: '#fff'
						})
					},
					{
						type: 'line',
						shape: {
							x1: 50,
							y1: 50,
							x2: 50,
							y2: 100
						},
						style: api.style({
							fill: '#fff',
							stroke: '#fff'
						})
					}
				]
			},
			{
				type: 'group',
				children: [
					{
						type: 'circle',
						shape: {
							cx: 80,
							cy: 50,
							r: 10
						},
						style: api.style({
							fill: '#000',
							stroke: '#000'
						})
					},
					{
						type: 'line',
						shape: {
							x1: 80,
							y1: 50,
							x2: 80,
							y2: 100
						},
						style: api.style({
							fill: '#000',
							stroke: '#000'
						})
					}
				]
			},
			{
				type: 'text',
				silent: true,
				position: [ 100, 75 ],
				style: api.style({
					textVerticalAlign: 'middle',
					text: '按种族/民族划分的每10万人死亡人数',
					fontSize: size * 0.015
				})
			}
		]
	};
};

const legendSeries = {
	type: 'custom',
	itemStyle: {
		color: '#000',
		borderColor: '#fff',
		borderWidth: 1
	},
	renderItem: renderLegend,
	data: [ 1 ]
};
option = {
	title: {
		text: '  黑与白  \n  生与死  \n自由与民主',
		textStyle: {
			color: '#fff',
			textAlign: 'center'
		},
		left: 'center',
		top: '2%',
		subtext: `数据来源APM实验室`
	},
	backgroundColor: 'rgb(59,59,59)',
	yAxis,
	xAxis,
	grid: [
		{
			show: false,
			left: '39%',
			top: '40%',
			bottom: '40%',
			containLabel: true,
			width: '10%'
		},
		{
			show: false,
			left: '50%',
			top: '40%',
			bottom: '40%',
			width: '0%'
		},
		{
			show: false,
			right: '41%',
			top: '40%',
			bottom: '40%',
			containLabel: true,
			width: '10%'
		}
	],
	tooltip: {
		show: true,
		trigger: 'item',
		formatter: function(v) {
			if (typeof v.data[2] === 'string') {
				return '';
			}
			return v.data[2];
		}
	},
	series: [
		circleSeries,
		circleTextSeries,
		circlePinSeries,
		legendSeries,
		// circlePointSeries
		{
			name: '人口',
			type: 'bar',
			label: {
				normal: {
					show: false
				}
			},
			tooltip: {
				show: true,
				formatter: function(v) {
					return v.data.value;
				}
			},
			barWidth: '20%',
			data: population,
			animationEasing: 'elasticOut'
		},
		{
			name: '死亡率',
			type: 'bar',
			xAxisIndex: 2,
			yAxisIndex: 2,
			barWidth: '20%',
			label: {
				normal: {
					show: false
				}
			},
			tooltip: {
				show: true,
				formatter: function(v) {
					return v.data.value;
				}
			},
			data: death,
			animationEasing: 'elasticOut'
		}
	]
};