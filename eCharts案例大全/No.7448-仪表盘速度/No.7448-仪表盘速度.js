option = {
	"title": {
		"text": "速度",
		"textStyle": {
			"color": "white"
		}
	},
	"backgroundColor": "#03486c",
	"tooltip": {
		"formatter": "{a}:<br/>{c}{b}"
	},
	"series": [
		{
			"name": "内浇道速度",
			"title": {
				"fontFamily": "黑体",
				"fontSize": 20,
				"color": "white",
				"offsetCenter": [
					0,
					"-24%"
				]
			},
			"type": "gauge",
			"min": 0,
			"max": 20,
			"startAngle": 165,
			"endAngle": 15,
			"radius": "130%",
			"center": [
				"50%",
				"90%"
			],
			"detail": {
				"formatter": function (value) {
                    let detailValue = '';
                    detailValue += value;
					while(detailValue.length < 4){
						detailValue = `0${detailValue}`;
					}
                    return detailValue;
                },
				"fontWeight": "bolder",
				"borderRadius": 2,
				"backgroundColor": "#444",
				"borderColor": "#aaa",
				"shadowBlur": 5,
				"shadowColor": "#333",
				"shadowOffsetX": 0,
				"shadowOffsetY": 0,
				"borderWidth": 1,
				"textBorderColor": "#000",
				"textBorderWidth": 0,
				"textShadowBlur": 0,
				"textShadowColor": "#fff",
				"textShadowOffsetX": 0,
				"textShadowOffsetY": 0,
				"fontFamily": "微软雅黑",
				"fontSize": 12,
				"width": "40%",
				"height": "10%",
				"color": "#eee",
				"offsetCenter": [
					0,
					"-40%"
				],
				"rich": {}
			},
			"axisLine": {
				"lineStyle": {
					"width": 0
				}
			},
			"axisLabel": {
				"fontSize": 8,
				"color": "#fff"
			},
			"axisTick": {
				"length": 14,
				"splitNumber": 10,
				"lineStyle": {
					"color": "#fff",
					"width": 1
				}
			},
			"splitLine": {
				"length": 20,
				"lineStyle": {
					"width": 2,
					"color": "#fff"
				}
			},
			"pointer": {
				"width": 6,
				"length": "90%"
			},
			"itemStyle": {
				"borderColor": "#000",
				"borderWidth": 1,
				"color": "red",
				"shadowColor": "rgba(116, 10, 9)",
				"shadowBlur": 10
			},
			"data": [
				{
					"value": 5,
					"name": "m/s"
				}
			]
		}
	]
};