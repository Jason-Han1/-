// 1.该图形只适合在正方形盒子的带圆角图形。
// 1.该图形只适合在正方形盒子的带圆角图形。
// 1.该图形只适合在正方形盒子的带圆角图形。
// 当前版本为 4.2.0 出现问题有可能是版本问题

// 2.一般我们通过请求得到的数据
var nameMe = ['工程建设', '产权交易', '土地交易', '其他交易', '政府采购'];
var valueMe = [310, 180, 90, 227, 123];
// 自设定颜色数据
var colorMe = ['rgba(194, 53, 49, 1)', 'rgba(49, 72, 85, 1)', 'rgba(97, 160, 168, 1)', 'rgba(212, 130, 101, 1)', 'rgba(145, 199, 174, 1)'];
var colorL = ['rgba(214, 73, 69, 1)', 'rgba(69, 92, 105, 1)', 'rgba(117, 180, 188, 1)', 'rgba(232, 150, 121, 1)', 'rgba(165, 219, 194, 1)'];
// 2.1.可变动的数据
var info = {
	radiusStart: 0.4,
	radiusEnd: 0.7,
	sun: 0,
	centerX: 50,
	centerY: 50,
	stratAngle: 0,
	circleLocation: []
}

// 3.通过处理后形成的数据格式
// 3.1.js 遍历数组，返回新数组（可对数组进行过滤、计算等操作），item 元素 index 元素索引 arr 遍历的数组
var assembly = nameMe.map(function(item, index, arr) {
	return {
		name: item,
		value: valueMe[index],
		itemStyle: {
			color: colorMe[index]
		},
        emphasis: {
            itemStyle: {
                color: colorL[index],
            }
        }
	}
})

// 3.2.计算数据总和和需要在什么位置画圆
// sun：为了计算饼图上的从第一段到当前段的所有占比
// circleLocation 计算每个圆在每段的位置
for (var i = 0; i < valueMe.length; i++) {
	info.sun += valueMe[i]
	info.circleLocation.push(info.sun)
}

// 4.初始配置项
var option = {
	series: [{
	    type: 'pie',
	    clockWise: false,
	    startAngle: 0,
	    radius: [info.radiusStart*100+'%', info.radiusEnd*100+'%'],
	    hoverAnimation: false,
	    data: assembly,
	}]
}

// 5.计算公式
// 5.1.x1y1绘制圆的中心坐标
// 5.2.xy为当前饼图所在的盒子的坐标比例（按100%来算）
// 5.3.r为绘制圆的半径
// 5.4.c为绘制圆的角度
// x1 = x + r * Math.cos(-c * Math.PI/180)
// y1 = y + r * Math.sin(-c * Math.PI/180)
var c, x1, y1, r = ((info.radiusEnd - info.radiusStart)/2 + info.radiusStart)/2*100;
for (var i = 0; i < info.circleLocation.length; i++) {

	c = 360 * (info.circleLocation[i]/info.sun) + info.stratAngle;
	x1 = info.centerX + r * Math.cos(-c * Math.PI/180);
	y1 = info.centerY + r * Math.sin(-c * Math.PI/180);
	
	option.series.push({
		type: 'pie',
		data: [1],
		name: nameMe[i],
		radius: ['0', (info.radiusEnd - info.radiusStart)/2*100+'%'],
		center: [x1+'%', y1+'%'],
		hoverAnimation: false,
		itemStyle: {
			color: colorMe[i],
		},
		emphasis: {
			itemStyle: {
				color: colorMe[i],
			}
		},
		labelLine: {
			show: false
		},
	    animationType: 'scale'
	})
}
var myColor;
myChart.on('mouseover', function(params){
	for (var i = 1; i < option.series.length; i++) {
		if(params.name == option.series[i].name) {

			myColor = colorMe[i-1]
			option.series[i].itemStyle.color = colorL[i-1]
			option.series[0].data[i-1].itemStyle.color = colorL[i-1]

			option.series.push({
				type: 'pie',
				data: [1],
				name: nameMe[i],
				radius: ['0', (info.radiusEnd - info.radiusStart)/2*100+'%'],
				center: [option.series[i-1==0?5:i-1].center[0], option.series[i-1==0?5:i-1].center[1]],
				hoverAnimation: false,
				itemStyle: {
					color: colorL[i-1],
				},
				emphasis: {
					itemStyle: {
						color: colorL[i-1],
					}
				},
				labelLine: {
					show: false
				},
			    animationType: 'scale'
			})

			myChart.setOption(option);
		}
	}
	
})

myChart.on('mouseout', function(params){
	for (var i = 1; i < option.series.length; i++) {
		if(params.name == option.series[i].name) {

			option.series[i].itemStyle.color = myColor
			option.series[0].data[i-1].itemStyle.color = myColor
			
			option.series.pop()

			myChart.setOption(option, true);
		}
	}
})

myChart.setOption(option)