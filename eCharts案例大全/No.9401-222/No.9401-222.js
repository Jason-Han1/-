option = {
	color: [
		"#37a2da",
		"#9fe6b8",
		"#ff9f7f",
		"#32c5e9",
		"#ffdb5c",
		"#fb7293",
		"#e7bcf3",
		"#32CD32",
		"#FAEBD7",
		"#7FFFD4",
		"#54FF9F",
		"#87CEFA",
		"#8470FF",
		"#DA70D6",
		"#FFD700",
		"#FF82AB",
		"#1E90FF"
	],
	legend: {
		orient: "vertical",
		top: "10%",
		bottom: "10%",
		right: "right",
		textStyle: {
			color: "#5b84b3",
			fontSize: 10
		},
		type: "scroll",
		pageIconColor: "#6495ed"
	},
	series: [
		{
			data: [
				{
					name: "浙江省",
					value: "10905"
				},
				{
					name: "安徽省",
					value: "762"
				},
				{
					name: "黑龙江省",
					value: "193"
				},
				{
					name: "山西省",
					value: "174"
				},
				{
					name: "福建省",
					value: "108"
				},
				{
					name: "辽宁省",
					value: "101"
				},
				{
					name: "广西壮族自治区",
					value: "100"
				},
				{
					name: "内蒙古",
					value: "85"
				},
				{
					name: "吉林省",
					value: "83"
				},
				{
					name: "四川省",
					value: "77"
				},
				{
					name: "其它",
					value: "458"
				}
			],
			center: [
				"35%",
				"55%"
			],
			name: "访问来源",
			label: {
				normal: {
					formatter: "{c}",
					show: true
				}
			},
			labelLine: {
				length2: 3,
				length: 3
			},
			type: "pie",
			radius: [
				"35%",
				"45%"
			]
		}
	],
	grid: {
		top: "20%",
		left: "10%",
		bottom: "10%",
		right: "5%"
	},
	tooltip: {
		formatter: "{b}:{c} ({d}%)",
		trigger: "item"
	}
}