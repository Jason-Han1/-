option = {
    backgroundColor:"#FFFFFF",
	title: {
		show:false,
		text: "",
		textStyle:{
			color:"#666666",
			fontSize: 16,
			fontWeight:"normal"
		},
		top:"0",
		left:"3%"
	},
	legend: {
		show:false,
		data:[],
		top:"0",
		right:'0',
		textStyle:{
			color:"#666666",
			fontWeight:"normal"
		}
	},
	grid: {
		left: '5%',
		right: '5%',
		top:'0%',
		bottom:"0%",
		containLabel: true
	},
	xAxis :{
		show:false,
		type : 'value',
	},
	yAxis :[
		{
			type : 'category',
			data: ['其他','阴湿','痰热','气血两湿'],
			axisLine:{
				show:false
			},
			axisTick:{
				show:false
			}
		}
	],
	series : [
		{
			type:'bar',
			data:[100,100,100,100],
			barGap: "-100%",
			barWidth: "40%",
			silent:true,
			itemStyle:{
				color:"#D5F4EE",
				//柱形图圆角，初始化效果
				barBorderRadius:[0, 50, 50, 0],
			}
		},
		{
			type:'bar',
			barWidth: "40%",
			silent:true,
			itemStyle:{
				color:"#2CC9A9",
				//柱形图圆角，初始化效果
				barBorderRadius:[0, 50, 50, 0],
			},
			label: {
				show: true,
				position: 'inside',
				formatter: '{c}%',
				textStyle:{
					fontSize:'12'
				}
			},
			data:[81,88,86,70]
		}
	]
};