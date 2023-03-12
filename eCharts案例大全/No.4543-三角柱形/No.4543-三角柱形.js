option = {
    backgroundColor: '#232f62',

   grid: {
		left: "6%",
		top: "14%",
		right: "3%",
	},
	xAxis: {
		type: "category",
		data: ["≥100mm", "50-100mm", "25-50mm", "≤25mm"],
		axisLabel: {
			show: true,
			color: "#66dbfc",
			fontSize: 24,
		},
		axisTick: {
			show: false,
		},
		axisLine: {
			lineStyle: {
				boundaryGap: false,
				type: "solid",
				color: "#146d95", //左边线的颜色
				width: 1, //坐标线的宽度
			},
		},
		splitLine: {
			show: false,
		},
	},
	yAxis: {
		type: "value",
		axisLabel: {
			show: false,
			color: "#999999",
			fontSize: 20,
		},
		axisTick: {
			show: false,
		},
		axisLine: {
			show: false,
		},
		splitLine: {
			show: false,
		},
	},
	animationDuration: function(idx) {
		// 越往后的数据时长越大
		return 5000;
	},
	series: [{
			name: "≥100mm",
			data: [0, 0, 0, 0, 0, 0, 0],
			stack: "a",
			type: "bar",
		},
		{
			name: "50-100mm",
			data: [0, 0, 0, 0, 0, 0, 0],
			stack: "a",
			type: "bar",
		},
		{
			name: "25-50mm",
			data: [0, 0, 0, 0, 0, 0, 0],
			stack: "a",
			type: "bar",
		},
		{
			name: "≤25mm",
			data: [0, 0, 0, 0, 0, 0, 0],
			stack: "a",
			type: "bar",
		},
		{
			type: "pictorialBar",
			name: "",
			data: [{
					name: "",
					value: 10,
					label: {
						normal:{
							show: true,
							color: "rgba(221,36,36,1)",
							fontSize: "20",
							fontFamily: "Minima",
							position: "top",
							formatter: function () {
								return (10) + "%";
							},
						}
						
					},
					itemStyle: {
						normal: {
							color: {
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: "rgba(221,36,36,1)",
									},
									{
										offset: 1,
										color: "rgba(221,36,36,0)",
									},
								],
								global: false,
							},
						},
					},
				},
				{
					name: "",
					value: 20,
					label: {
						normal:{
							show: true,
							color: 'rgba(231,98,2,1)',
							fontSize: "20",
							fontFamily: "Minima",
							position: "top",
							formatter: function () {
								return (20) + "%";
							},
						}
					},
					itemStyle: {
						normal: {
							color: {
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: "rgba(231,98,2,1)",
									},
									{
										offset: 1,
										color: "rgba(231,98,2,0)",
									},
								],
								global: false,
							},
						},
					},
				},
				{
					name: "",
					value: 30,
					label: {
						normal:{
							show: true,
							color: "rgba(223,221,3,1)",
							fontFamily: "Minima",
							fontSize: "20",
							position: "top",
							formatter: function () {
								return (30) + "%";
							},
						}
					},
					itemStyle: {
						normal: {
							color: {
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: "rgba(223,221,3,1)",
									},
									{
										offset: 1,
										color: "rgba(223,221,3,0)",
									},
								],
								global: false,
							},
						},
					},
				},
				{
					name: "",
					value: 33,
					label: {
						normal:{
							show: true,
							color: "#185E88",
							fontFamily: "Minima",
							fontSize: "20",
							position: "top",
							formatter: function () {
								return (33) + "%";
							},
						}
					},
					itemStyle: {
						normal: {
							color: {
								type: "linear",
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: "rgba(41,150,216,1)",
									},
									{
										offset: 1,
										color: "rgba(41,150,216,0)",
									},
								],
								global: false,
							},
						},
					},
				},
			],
			stack: "a",
			symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
		},
	],
};
