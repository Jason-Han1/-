var value = 0.8;
var colorScore = value * 100;
var colorList = [];
var textcolor = ''
if (colorScore >= 90) {
	let color1 = "rgb(45,224,135)";
	let color2 = "rgb(74,227,141)";
	textcolor =  "rgb(45,224,135)";
	colorList.push(color1);
	colorList.push(color2);
} else if (colorScore >= 80 && colorScore < 90) {
	let color1 = "rgb(41,145,235)";
	let color2 = "rgb(0,137,255)";
	textcolor =  "rgb(41,145,235)";
	colorList.push(color1);
	colorList.push(color2);
} else if (colorScore >= 60 && colorScore < 80) {
	let color1 = "rgb(219,185,246)";
	let color2 = "rgb(253,208,0)";
	textcolor =  "rgb(219,185,246)";
	colorList.push(color1);
	colorList.push(color2);
} else if (colorScore < 60) {
	let color1 = "rgb(207,74,84)";
	let color2 = "rgb(243,17,34)";
	textcolor =  "rgb(207,74,84)";
	colorList.push(color1);
	colorList.push(color2);
}
var data = [];
data.push(value);
data.push(value);
data.push(value);
data.push(value);
option = {
    backgroundColor: '#fff',
				/* title:{
					top: '33%',
					left: 'center',
					text: '安全状态',
					color:'red',
					textStyle: {
						color: 'rgba(0, 0, 0, 0.45)',
						fontWeight: 'normal',
						fontSize: 14
					},
					subtext: (value * 100) + '%',
					subtextStyle: {
						color: 'rgba(0, 0, 0, 0.85)',
						fontSize: 18,
					}
				}, */
				series: [{
					type: 'liquidFill', //水球echarts-liquidfill.min.js
					radius: '80%',
					center: ['50%', '40%'],
					data: data,
					backgroundStyle: {
						color: "#fff"
					},
					outline: {
						show: true, //是否显示轮廓 布尔值
						borderDistance: 2, //外部轮廓与图表的距离 数字
						itemStyle: {
							borderColor: "#edf2f6", //边框的颜色
							borderWidth: 1 //边框的宽度
						}
					},
					color: [...colorList],
					label: {
						fontSize: 50,
						color: textcolor
						
					},
					/* color: [  //color一定要是个数组 ，每一项对应一个波浪，可以给每个波浪单独配置颜色
					  {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
						  {
							offset: 1,
							color: "rgba(255,255,255,1)"
						  },
						  {
							offset: 0,
							color: "rgba(103,205,251,1)"
						  }
						],
						globalCoord: false
					  }], */
				}]
};
