option = {
	yAxis: {
		axisLabel: {
			show: true,
			textStyle: {
				color: "#97D3F5",
				fontSize: 24
			}
		},
		min: 1494,
		max: 1501,
		axisLine: {
			show: false
		},
		name: "水位(m)",
		axisTick: {
			show: false
		},
		splitLine: {
			lineStyle: {
				color: "#11344E",
				width: 3
			}
		},
		type: "value",
		nameTextStyle: {
			color: "#97D3F5",
			fontSize: 26
		}
	},
	xAxis: {
		axisLabel: {
      show: true,
      showMaxLabel: true,
			textStyle: {
				color: "#97D3F5",
				fontSize: 24
			}
		},
		data: [
			"2018-03",
			"2019-04",
			"2019-05",
			"2019-06",
			"2019-07",
			"2019-08",
			"2019-09",
			"2019-10",
			"2019-11",
			"2019-12",
			"2020-01",
			"2020-02"
		],
		axisLine: {
			lineStyle: {
				color: "#398EDB",
				width: 3
			}
		},
		// name: "日期",
		axisTick: {
			show: false
		},
		type: "category",
		nameTextStyle: {
			color: "#97D3F5",
			fontSize: 22
		}
	},
	series: {
		areaStyle: {
			normal: {
				color: {
					x: 0,
					y: 0,
					y2: 1,
					globalCoord: false,
					x2: 0,
					colorStops: [
						{
							offset: 0,
							color: "rgba(55,162,218,1)"
						},
						{
							offset: 1,
							color: "rgba(55,162,218,0.1)"
						}
					],
					type: "linear"
				}
			}
		},
		data: [
			"1496.17 ",
			"1496.09 ",
			"1495.98 ",
			"1495.86 ",
			"1495.92",
			"1496.1",
			"1496.23",
			"1496.25",
			"1496.1",
			"1495.99",
			"1495.89",
			"1494.79"
		],
		symbolSize: 8,
		itemStyle: {
			normal: {
				lineStyle: {
          width: 4,
          color: "#ffce00",
				}
			}
		},
		type: "line",
		markLine: {
			symbol: "none",
			data: [
				{
					silent: false,
					yAxis: 1499.2,
					lineStyle: {
            color: "#FA3934",
						width: 4,
						type: "dashed"
					}
        },
        {
					silent: true,
					yAxis: 1501,
					lineStyle: {
            color: "#41df72",
						width: 4,
						type: "dashed"
					}
        }
			],
			label: {
				fontSize: 24,
				position: "end",
				fontWeight: 900
			}
		},
		markPoint: {
			data: [
				{
					name: "最大值",
					type: "max"
				},
				{
					name: "最小值",
					type: "min"
				}
			],
			itemStyle: {
				color: "#ffce00",
			},
			label: {
				color: "#fff",
				show: true,
				fontSize: 24,
				position: "top"
			}
		},
		smooth: true
	},
	grid: {
		top: "15%",
		left: "10%",
		bottom: "12%",
		right: "12%"
	},
	tooltip: {
		formatter: "时间：{b}<br><br>水位：{c} m",
		trigger: "axis"
	},
	title: {
		text: ""
	}
}
