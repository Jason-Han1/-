/**
 * 双x轴不等分情况实现思路
 * 一个网格为常规图，常规x轴作为子级
 * 另一个网格绘制柱状图，每根柱子就是一个父级，设置柱子的宽度（子级数占总数的百分比）即可
 * 
 * 2021-12-06更新 支持区域缩放
 */
const baseData = [{
		value: '贵阳市',
		children: [
			{ value: '花溪区', num: 0.1 },
			{ value: '南明区', num: 0.15 },
			{ value: '观山湖区', num: 0.18 }
		]
	},{
		value: '六盘水市',
		children: [
			{ value: '钟山区', num: 0.25 },
			{ value: '六枝特区', num: 0.23 }
		]
	},{
		value: '遵义市',
		children: [
			{ value: '红花岗区', num: 0.32 },
			{ value: '汇川区', num: 0.33 },
			{ value: '遵义县', num: 0.36 }
		]
	},{
		value: '安顺市',
		children: [
			{ value: '西秀区', num: 0.57 },
			{ value: '平坝县', num: 0.72 }
		]
	},{
		value: '铜仁市',
		children: [
			{ value: '玉屏县', num: 0.45 }
		]
}]
const dLength = baseData.map(item => item.children.length).reduce((n, m) => n + m) // x轴数据总长度，用于计算父级x轴的宽度
let xData = []
let yData = []
let series = [{
	data: yData,
	type: 'bar',
	label: {
		show: true,
		position: 'top',
		textStyle: {
			color: '#555'
		}
	},
	itemStyle: {
		color: (params) => {
			return colorBg(params.dataIndex)
		}
	},
	xAxisIndex: 0,
	yAxisIndex: 0
}]
let baseObj = {
	data: [{
		name: '',
		value: 1
	}],
	label: {
		show: true,
		position: 'inside',
		formatter: '{b}',
		offset: [0, 10],
		textStyle: {
			color: '#666'
		}
	},
	type: 'bar',
	barGap: 0,
	barWidth: '',
	itemStyle: {
		color: '',
		opacity: .8
	},
	animationEasing: 'bounceOut',
	xAxisIndex: 1,
	yAxisIndex: 1
}
baseData.forEach((item, index) => {
	let pObj = JSON.parse(JSON.stringify(baseObj))
	pObj.data[0].name = item.value
	pObj.barWidth = item.children.length / dLength * 100 + '%'
	pObj.itemStyle.color = colorBg(index)
	series.push(pObj)
	item.children.forEach(cItem => {
		xData.push({
			value: cItem.value,
			pName: item.value
		})
		yData.push(cItem.num)
	})
})

function colorBg(index) {
	const colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
	return colors[index]
}

myChart.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	grid: [{
			top: 100,
			bottom: 111
		},{
			height: 60,
			bottom: 50,
			tooltip: { show: false }
	}],
	dataZoom: {
		type: 'slider'
	},
	xAxis: [{
		type: 'category',
		data: xData,
		gridIndex: 0,
		axisLabel: {
			color: '#333',
		},
		axisLine: {
			lineStyle: {
				color: '#e7e7e7'
			}
		},
		axisTick: {
			lineStyle: {
				color: '#e7e7e7'
			}
		},
		zlevel: 2
	}, {
		type: 'category',
		gridIndex: 1,
		axisLine: { show: false },
		axisLabel: { show: false },
		axisTick: { show: false },
		zlevel: 1
	}],
	yAxis: [{
		type: 'value',
		gridIndex: 0,
		axisLabel: {
			color: '#333'
		},
		splitLine: {
			lineStyle: {
				type: 'dashed'
			}
		},
		axisLine: {
			lineStyle: {
				color: '#ccc'
			}
		},
		axisTick: {
			lineStyle: {
				color: '#ccc'
			}
		}
	},{
		type: 'value',
		gridIndex: 1,
		axisLabel: { show: false },
		axisLine: { show: false },
		splitLine: { show: false },
		axisTick: { show: false }
	}],
	series
})

// dataZoom缩放事件
myChart.on('dataZoom', params => {
	const dataZoom = myChart.getModel().option.dataZoom[0]
	const { startValue, endValue } = dataZoom
	let curXdata = xData.slice(startValue, endValue + 1) // 缩放后的子级
	let curPdata = [...new Set(curXdata.map(item => item.pName))] // 取出父级去重
	series.length = 1 // 
	curPdata.forEach((item, index) => {
		let length = 0
		curXdata.forEach(cItem => {
			if (cItem.pName === item) {
				length++
			}
		})
		let pObj = JSON.parse(JSON.stringify(baseObj))
		pObj.data[0].name = item
		pObj.barWidth = length / curXdata.length * 100 + '%'
		pObj.itemStyle.color = colorBg(index)
		series.push(pObj)
	})
	myChart.setOption({
		series
	}, {
		replaceMerge: 'series', // 替换合并series，默认普通合并
	})
})