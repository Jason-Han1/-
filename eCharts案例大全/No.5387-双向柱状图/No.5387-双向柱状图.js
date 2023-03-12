// 使用了工具库lodash，cdn：https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.15/lodash.js

let yAxisData = ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'];
let data1 = [5, 19, 23, 43, 34, 53, 12, 34];
let data2 = [5, 12, 10, 7, 32, 40, 28, 34];

option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    legend: {
        show: false
    },
    grid: [{
        show: false,
        left: '10%',
        top: '15%',
        width: '40%',
        containLabel: true,
        bottom: 60
    }, {
        show: false,
        left: '6%',
        top: 120,
        bottom: 60,
        width: '0%',
    }, {
        show: false,
        left: '50%',
        top: '15%',
        bottom: 60,
         containLabel: true,
        width: '40%',
    }],
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLabel: {
            show: true,
            color: '#979797',
            margin: 0
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        show: true,
        axisLabel: {
            color: '#979797',
            margin: 0
        },
        splitLine: {
            lineStyle: {
                color: '#979797',
                type: 'dashed'
            }
        }
    }, {
        gridIndex: 2,
        type: 'value',
        axisLabel: {
            show: true,
            color: '#979797',
            margin: 0
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [
        {
            type: 'category',
            inverse: false,
            position: 'right',
            axisLabel: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#979797'
                }
            },
            axisTick: {
                show: false
            },
            data: yAxisData
        },
        {
            type: 'category',
            inverse: false,
            gridIndex: 1,
            position: 'left',
            axisLabel: {
                align: 'left',
                padding: [8, 0, 0, 0],
                fontSize: 12,
                fontWeight: 500,
                color: `#979797`
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#979797'
                }
            },
            axisTick: {
                show: false
            },
            data: yAxisData
        },
        {
            type: 'category',
            inverse: false,
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#979797'
                }
            },
            axisTick: {
                show: false
            },
            data: yAxisData
        }
    ],
    series: [{
            type: 'bar',
            barWidth: 20,
            name: '供应情况',
            label: {
                normal: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [
							{
								offset: 0,
								color: "rgba(216, 255, 168, 0.78)"
							},
							{
								offset: 1,
								color: "rgba(65, 255, 113, 0.78)"
							}
						],
						globalCoord: false
					}
				}
            },
            data: data1
        },
        {
            type: 'bar',
            barWidth: 20,
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '需求情况',
            label: {
                normal: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 1,
						y2: 0,
						colorStops: [
							{
								offset: 0,
								color: "rgba(255, 173, 65, 0.78)"
							},
							{
								offset: 1,
								color: "rgba(255, 199, 117, 0.78)"
							}
						],
						globalCoord: false
					}
				}
            },
            data: data2
        }
    ]
};