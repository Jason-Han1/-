var data=[128,64,32,16,8]
option = {
	tooltip : {
		trigger: 'item',
	    formatter: "{a} <br/>{b} : {c} ({d}%)"
	},
	legend: {
		orient : 'horizontal',
		x : 'center',
		width:'80%',
		icon:'circle',
		data:['Chrome','Firefox','Safari','IE9+','IE8-'],
	},
	calculable : false,
	series : (function (){
		var series = [];
		for (var i = 0; i < 30; i++) {
			series.push({
			    name: '浏览器（数据纯属虚构）',
				type:'pie',
				hoverAnimation:false,
				startAngle:90+i*2,
				itemStyle : {normal : {
					label : {show : i > 28,formatter:'{d}%',},
					labelLine : {show : i > 28, length:35}
				}},
				radius : [i * 6 + 60, i * 6 + 64],
				data:[
					{value: data[0], name:'Chrome'},
					{value: data[1], name:'Firefox'},
					{value: data[2], name:'Safari'},
					{value: data[3], name:'IE9+'},
					{value: data[4], name:'IE8-'}
				]
			})
		}
		return series;
	})()
};