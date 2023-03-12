option = {
    "grid": {
       left: "3%",
			top: 40,
			right: "3%",
			bottom: 40,
			containLabel: true
    },
    "legend": {
            show: true,
			icon: "rect",
			itemWidth: 20,
			itemHeight: 3, 
			bottom: "10",
			textStyle: {
				color: "#fff"
			},
          data:['增长率', '数值'],
    },
  	tooltip: {
			trigger: "axis",
			// formatter: function(params) {
			// 	var str = "";
			// 	for (var i = 0; i < params.length; i++) {
			// 		if (params[i].seriesName !== "") {
			// 			str +=
			// 				params[i].name +
			// 				":" +
			// 				params[i].seriesName +
			// 				params[i].value +
			// 				"<br/>";
			// 		}
			// 	}
			// 	return str;
			// }
			backgroundColor: '#fff',
			textStyle: {
				color: '#79bcff'
			},
			formatter: function(params) { 
				var str = params[0].axisValue + '<br>';
				if (Array.isArray(params)) {
					params.forEach(item => { 
						str += item.marker + ' ' + item.seriesName + ' : ' + item.value + '<br>';
					 
					});
					return str;
				}
			},
			padding: [10, 10],
			extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
		},
     xAxis: [
        {
          type: "category",
          data: [
            "桥北",
            "镜湖",
            "目澜",
            "山塘",
            "坛丘",
            "衡悦"
        
          ],
			axisPointer: {
				type: "shadow"
			},
			axisLabel: {
				textStyle: {
					color: '#9DA5C7'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#1F2FA9'
				}
			},
			splitLine: {
				show:true,
				lineStyle: {
					color: '#1F2FA9'
				}
			},
			axisTick: {
				show: false
			},
        },
      ],
    "yAxis": [{
          name: '单位：条',
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#ccc'
              }
          },
          type: "value",
				axisTick: {
					show: true,
					length:30,
					lineStyle:{
						color: '#1F2FA9',
					}
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#1F2FA9'
					}
				},
				axisLabel: {
					verticalAlign:'top',
					lineHeight:30,
					textStyle: {
						color: '#9DA5C7'
					}
				},
				splitLine: {
					show:true,
					lineStyle: {
						color: '#1F2FA9'
					}
				},
        },
        {
            "type": "value",
            "name": "安全指数",
            "position": "right",

            "max": 100,
            "splitLine": {
                "show": false
            },
            "axisPointer": {
                "show": false
            },
            "axisTick": {
                show: false
            },
				splitLine: {
					show:false,
					lineStyle: {
						color: '#1F2FA9'
					}
				},
								axisLine: {
					show: true,
					lineStyle: {
						color: '#1F2FA9'
					}
				},
        }
    ],
    "series": [
        {
            "type": "bar",
            "name": "数值",
            "barWidth": "20",
            "data": [6, 9, 10, 5, 7],
            itemStyle: {
         
                normal: {
                  
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#42B7FD',
                        },
                        {
                            offset: 1,
                            color: '#3299FF',
                        },
                    ])
                }
                
            }
        },
        {
            "type": "bar",
            "name": "数值1",
            "barWidth": "20",
            "data": [16, 19, 10, 5, 7],
            itemStyle: {
         
                normal: {
                          color: '#3299FF'
                }
                
            }
        },
        {
            "type": "line",
            "name": "增长率",
            "yAxisIndex": 1,
            itemStyle: {
                color: '#20C578',
            },
            symbolSize: 10,
            symbol: 'circle',
            "data": [89, 93, 95, 88, 90]
        }
    ]
};