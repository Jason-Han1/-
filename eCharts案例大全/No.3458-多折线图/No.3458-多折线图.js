
option = {
    backgroundColor: "#fff",
    color:['#157DFF','#5FD77E','#F7B500'],
    legend: {
      right: 10,
      top: 10
    },
    tooltip: {
        trigger: "axis",
    },
    grid: {
        top: 100,
        containLabel: true
    },
    		xAxis: [{
					type: 'category',
                    axisLine: {
						show: true,
						lineStyle: {
						    color: 'rgba(151, 151, 151, 1)'
						}
					},
					axisLabel: {
						show: true,
						// margin: 20,
						textStyle: {
							color: '#000',
						},
					},
					axisTick: {
						show: false
					},
					// boundaryGap: true,
					data: ['2017年', '2018年', '2019年', '2020年', '2021年'],

				}],

				yAxis: [{
					type: 'value',
					axisLine: {
						show: true,
						lineStyle: {
						    color: 'rgba(151, 151, 151, 1)'
						}
					},
					axisLabel: {
						show: true,
						// margin: 20,
						textStyle: {
							color: '#000',
						},
					},
					axisTick: {
						show: true,
						color: 'rgba(151, 151, 151, 1)'
					},
					splitLine: {
					 show: false,
						lineStyle: {
							color: 'rgba(226, 232, 236, 1)',
							type: 'dashed',
						}
					},
					splitArea: {
					 show: true,
					 areaStyle: {
					  color: ["#fff",'rgba(245, 246, 250, 1)']
					 }
					}
				}],
    series: [{
        name: "公务员编制",
        type: "line",
        smooth: false,
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: '#157DFF',
            }
        },
        data: [100, 138, 150, 153, 180]
    }, {
        name: "事业编编制",
        type: "line",
        smooth: false,
        // showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: '#5FD77E',
            }
        },
        data: [233, 233, 200, 180, 199]
    }, {
        name: "非编制人员",
        type: "line",
        smooth: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: '#F7B500',
            }
        },
        data: [154, 189, 250, 210, 300]
    }]
};