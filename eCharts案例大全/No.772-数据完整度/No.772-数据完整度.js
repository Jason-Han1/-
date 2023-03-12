option = {
  color:["#29CB97","#4072EE","#FDAC41"],
  title: {
    left: "center",
    text: '完整度',
		textStyle: {
			color: "#748AA1"
		}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    textStyle: {
			color: "#748AA1"
		}
  },
  grid: {
    left: '3%',
    right: '10%',
    bottom: '3%',
    containLabel: true
  },
  legend: {
		top: 30,
		data: ["完整度"],
		textStyle: {
			color: "#748AA1"
		}
	},
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    name: "完整度(%)",
    min: 0,
    max: 100,
    axisLine: {
		  lineStyle: {
				color: "#748AA1"
			}
		},
    axisTick: {
		  lineStyle: {
				color: "#748AA1"
			}
		},
    axisLabel: {
			color: "#748AA1"
		}
  },
  yAxis: {
    type: 'category',
    data: ['t1', 't2', 't3', 'weather', 'machine', 'ship'],
    axisLine: {
		  lineStyle: {
				color: "#748AA1"
			}
		},
    axisTick: {
		  lineStyle: {
				color: "#748AA1"
			}
		},
    axisLabel: {
			color: "#748AA1"
		}
  },
  series: [
    {
      type: 'bar',
      name: "完整度",
      data: [83, 85, 85, 93, 96, 100]
    }
  ]
};