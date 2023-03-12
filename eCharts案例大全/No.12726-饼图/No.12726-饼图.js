var thepieone = []; //得到饼图的图例
var thepietwo = []; //得到饼图的左边
var thepiethree = []; //得到饼图的右边
//			循环得到饼图的样子
	var pieData1 = [{
		"name": '省级',
		"theData": 80
	}, {
		"name": '市级',
		"theData": 18
	}, {
		"name": '五区',
		"theData": 2
	}];
	var pieData2 = [{
		"name": '省级',
		"theData": 74
	}, {
		"name": '市级',
		"theData": 23
	}, {
		"name": '五区',
		"theData": 3
	}];

	for(var i = 0; i < pieData1.length; i++) {
		thepieone.push(pieData1[i].name);
	}
	for(var j = 0; j < pieData1.length; j++) {
		let objects = {
			value: pieData1[j].theData,
			name: pieData1[j].name,
			label: {
				normal: {
					fontSize: 14,
					position:"outside",
					formatter: '{d}%'
				}
			}
		};
		thepiethree.push(objects);
	}

	for(var z = 0; z < pieData2.length; z++) {
		let objects2 = {
			value: pieData2[z].theData,
			name: pieData2[z].name,
			label: {
				normal: {
					fontSize: 14,
					position:"outside",
					formatter: '{d}%'
				}
			}
		};
		thepietwo.push(objects2);
	}

	option = {
		legend: {
			right: '20%',
			data: thepieone,
			bottom: '24%',
			textStyle: {
				color: ['#79bff7']
			},
			itemGap: 25,
			itemWidth: 20
		},
		backgroundColor:"#01334d",
		series: [{
				name: '第二个饼状图',
				type: 'pie',
				hoverAnimation: false, //鼠标上去效果
				radius: ['10%', '7%'],
				center: ['54%', '50%'],
				data: thepietwo,
			},
			{
				name: '第一个饼状图',
				type: 'pie',
				hoverAnimation: false, //鼠标上去效果
				radius: ['10%', '7%'],
				center: ['28%', '50%'],
				data: thepiethree,
			}

		],
		color: ['#0a96ff', '#715fcf', '#a3f450']
	};