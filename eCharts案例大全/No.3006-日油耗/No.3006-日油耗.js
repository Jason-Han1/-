var option = {
	color: ["#B2C773", "#96C4D8", "#E97879"],
	title: {
		left: "center",
		text: "日油耗"
	},
	xAxis: {
		type: "category",
		data: ["2020-05-27", "2020-05-28", "2020-05-29", "2020-05-30", "2020-05-31", "2020-06-01", "2020-06-02", "2020-06-03", "2020-06-04", "2020-06-05", "2020-06-06", "2020-06-07", "2020-06-08", "2020-06-09", "2020-06-10", "2020-06-11", "2020-06-12", "2020-06-13", "2020-06-14", "2020-06-15", "2020-06-16", "2020-06-17", "2020-06-18", "2020-06-19", "2020-06-20", "2020-06-21", "2020-06-22", "2020-06-23", "2020-06-24", "2020-06-25", "2020-06-26"]
	},
	yAxis: [{
		name: "油耗(t)",
		scale: true,
		type: "value"
	}, {
		name: "转速(rpm)",
		scale: false,
		type: "value"
	}],
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "cross"
		},
		backgroundColor: "rgba(245, 245, 245, 0.8)",
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		textStyle: {
			color: "#000"
		}
	},
	axisPointer: {
		link: {
			xAxisIndex: "all"
		},
		label: {
			backgroundColor: "#777"
		}
	},
	toolbox: {
		feature: {
			dataZoom: {
				yAxisIndex: false
			},
			brush: {
				type: ["lineX", "clear"]
			}
		}
	},
	dataZoom: [{
		type: "slider",
		show: true,
		xAxisIndex: [0],
		top: "85%",
		start: 0,
		end: 100
	}, {
		type: "slider",
		show: true,
		yAxisIndex: [0],
		left: "92%",
		start: 0,
		end: 100
	}, {
		type: "inside",
		xAxisIndex: [0],
		start: 0,
		end: 100
	}, {
		type: "inside",
		yAxisIndex: [0],
		start: 0,
		end: 100
	}],
	legend: {
		top: 30,
		data: ["主机油耗", "总油耗", "转速"]
	},
	grid: {
		left: "10%",
		right: "10%",
		bottom: "15%",
		containLabel: true
	},
	series: [{
		name: "主机油耗",
		symbol: "none",
		data: [30.37, 46.78, 46.45, 50.79, 48.48, 47.61, 47.24, 48.58, 48.11, 48.04, 45.95, 47.77, 51.05, 52.51, 53.3, 52.03, 50.09, 48.45, 47.3, 47.46, 46.24, 48.08, 46.81, 47.37, 45.63, 45.06, 45.97, 47.9, 49.64, 46.8, 15.45],
		type: "bar",
		connectNulls: false,
		itemStyle: {
			opacity: 0.7
		}
	}, {
		name: "总油耗",
		symbol: "none",
		data: [33.32, 51.77, 52.03, 56.47, 54.17, 52.95, 52.4, 53.7, 53.3, 53.16, 50.98, 52.8, 55.85, 57.54, 58.34, 56.97, 55.01, 53.81, 52.14, 52.33, 51.1, 52.97, 51.83, 52.39, 50.64, 50.05, 50.93, 52.85, 54.6, 51.66, 17.08],
		type: "bar",
		connectNulls: false,
		barGap: "-50%",
		barCategoryGap: "50%",
		itemStyle: {
			opacity: 0.7
		}
	}, {
		yAxisIndex: 1,
		name: "转速",
		symbol: "none",
		data: [42.32, 43.88, 43.7, 44.62, 44.07, 43.6, 43.38, 43.91, 44.2, 44.21, 43.49, 44.16, 45.14, 44.35, 43.94, 43.96, 44.12, 44.27, 44.1, 44.08, 44.1, 44.48, 44.19, 44.33, 43.7, 43.69, 44.15, 43.89, 44.29, 44.1, 44.1],
		type: "line",
		connectNulls: false,
	}]
}
console.log(JSON.stringify(option))