data = {
	"test2": {
		"0": 264,
		"1": 61
	},
	"test3": {
		"0": 243,
		"1": 60
	},
	"test4": {
		"0": 287,
		"1": 31
	},
	"test5": {
		"0": 357,
		"1": 37
	},
	"test6": {
		"0": 278,
		"1": 607
	},
	"test7": {
		"0": 239,
		"1": 226
	},
	"test8": {
		"0": 1,
		"1": 0
	},
	"test9": {
		"0": 328,
		"1": 407
	},
	"test10": {
		"0": 104,
		"1": 188
	},
}
let xAxis = []
let series = [[], []]

for (var key in data) {
    xAxis.push(key)
    series[0].push(data[key][0])
    series[1].push(data[key][1])
}
option = {
    color: ['#2EC7C9', '#B6A2DE'],
    grid: {
        containLabel: true,
        left: 20,
        right: 10,
        bottom: 20,
        // top: 10,
        // height: '75%',
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC',
            },
        },
        textStyle: {
            color: '#666',
        },
    },
    legend: {
        x: 'center',
        show: true,
        orient: 'horizontal',
        textStyle: {
            color: '#666',
            fontSize: 16,
        },
        itemGap: 20,
        itemWidth: 20, // 图例图形的宽度
        itemHeight: 10, // 图例图形的高度
        data: [{ icon: 'roundRect', name: '测试', itemStyle: { color: '#ff9f24' } }, '新增'],
    },
    xAxis: {
        alignWithLabel: true, //类目轴中在 boundaryGap 为 true 的时候有效，
        axisLabel: {
            show: true,
            interval: 0,
            // rotate: 30,
            textStyle: {
                color: '#666',
                fontSize: 16,
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
            },
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },

        data: xAxis,
    },
    yAxis: [
        {
            type: 'value',
            name: '(单位：件)',
            nameTextStyle: {
                fontSize: 14,
                color: '#999',
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#ddd',
                    width: 1,
                },
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#666',
                    fontSize: 14,
                },
            },
            axisLine: {
                show: false,
            },
        },
        {
            type: 'value',
            name: '(单位：件)',
            nameTextStyle: {
                fontSize: 14,
                color: '#999',
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#ddd',
                    width: 1,
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#666',
                    fontSize: 14,
                },
            },
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '测试',
            data: series[0],
            yAxisIndex: 0,
            type: 'pictorialBar',
            barMinHeight: 10,
            barCategoryGap: '40%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#ff9f24',
                        },
                        {
                            offset: 0.65,
                            color: 'rgba(255, 159, 36, 0.6)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 159, 36, 0.05)',
                        },
                    ]),
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                        fontSize: 20,
                    },
                },
            },
            z: 10,
        },
        {
            name: '新增',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            symbolSize: '0',
            zlevel: 3,
            color: '#23bcca',
            lineStyle: {
                normal: {
                    color: '#23bcca',
                    shadowBlur: 3,
                    shadowColor: 'rgba(35, 188, 202, 0.48)',
                    shadowOffsetY: 8,
                },
            },
            data: series[1],
        },
    ],
};
