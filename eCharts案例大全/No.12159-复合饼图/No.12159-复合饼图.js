var option = {
    title: [{
        text: "各问题类型占比",
        textStyle: {
            color: "#333",
            fontSize: "14"
        }
    }],

    tooltip: {
        formatter: '{b} ({c} 处)'
    },
    series: [{
            name: '各缺陷类型占比',
            type: 'pie',
            radius: '60%',
            center: ['60%', '60%'],
            hoverAnimation: false,
            data: [{
				"value": 11138,
				"name": "采集库大"
			}, {
				"value": 2379,
				"name": "未取到价格"
			}, {
				"name": "采集库相等",
				"value": 50404
			}],
            labelLine: {
                normal: {
                    show: true,
                    length: 5,
                    length2: 5
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b} \n ({d}%)'
                    }
                }
            }
        },
        {
            name: '其他',
            type: 'pie',
            clockWise: false,
            radius: ['70%', '80%'],
            center: ['60%', '60%'],
            data: [{
				"value": 36069,
				"name": "采集库相等"
			}, {
				"value": 10492,
				"name": "相等-拼单"
			}, {
				"value": 3843,
				"name": "采集库小"
			},{
                "value":13517,
                "name":"placeholder",
                "itemStyle": {
		            "normal": {
		                "label": {
		                    "show": false
		                },
		                "labelLine": {
		                    "show": false
		                },
		                "color": "transparent",
		                "borderColor": "transparent",
		                "borderWidth": 0
		            },
		            "emphasis": {
		                "color": "transparent",
		                "borderColor": "transparent",
		                "borderWidth": 0,
		                "label": {
		                    "show": false
		                }
		            }
		        }
            }],
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10
                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{b}({d}%)'
                    }
                }
            }
        }

    ]

};