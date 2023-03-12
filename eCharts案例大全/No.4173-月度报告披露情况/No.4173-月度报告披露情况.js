option = {
        	title: {
			text: '月度数据情况',
			x: 'center',
			textStyle: {
				color: '#666'
			}
		},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [
        {
            bottom: "20%"
        },
        {
            height: 50,
            bottom: "5%"
        }
    ],
    xAxis: [{
        name:"月份",
        nameTextStyle: {
      color: "#333"
    },
        type: 'category',
        data: ["1月",
"2月",
"3月",
"4月",
"5月",
"6月",
"7月",
"8月",
"9月",
"10月",
"11月",
"12月",

],
        gridIndex: 0,
        axisLabel: {
            color: '#333'
        },
        axisLine: {
            lineStyle: {
                color: '#e7e7e7'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#e7e7e7'
            }
        },
        zlevel: 2
    }, {
        type: 'category',
        gridIndex: 1,
        axisLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data:["一季度","二季度","三季度","四季度"],
        zlevel: 1
    }],
    yAxis: [{
        name:"个数",
        nameTextStyle: {
      color: "#333"
    },
        type: 'value',
        gridIndex: 0,
        axisLabel: {
            color: '#333'
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },{
        type: 'value',
        gridIndex: 1,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        data: [86,
87,
9,
4,
27,
99,
17,
67,
75,
47,
105,
123
],
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#555'
            }
        },
        itemStyle: {
            normal: {
                color: (params) => {
                    let colors = ['#a7bee1', '#a7bee1', '#a7bee1', '#d3c688', '#d3c688', '#d3c688', '#8a9f8e', '#8a9f8e', '#8a9f8e', '#f68c60', '#f68c60', '#f68c60']
                    return colors[params.dataIndex]
                }
            }
        },
        xAxisIndex: 0,
        yAxisIndex: 0
    },
    {
        data: [182,
132,
159,
239
],
        type: 'bar',
        label: {
            show: true,
            position: 'inside',
            textStyle: {
                color: '#555'
            }
        },
        itemStyle: {
            normal: {
                color: (params) => {
                    let colors = ['#a7bee1', '#d3c688','#8a9f8e', '#f68c60']
                    return colors[params.dataIndex]
                }
            }
        },
        barWidth: '100%',
        xAxisIndex: 1,
        yAxisIndex: 1
    }
    ]
};
