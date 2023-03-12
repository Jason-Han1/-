option = {
  title: {
      text: '预约情况',
      left: 'center',
      top: '20'
  },
  tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'shadow'
  		},
	},
	legend: {
        data: ['剩余', '总量'],
        right: '20',
        top: '20'
    },
    xAxis: {
        type: 'value',
        splitLine:  {
            show: false
        },
		axisTick:  {
            show: false
        },
		axisLabel: {
			textStyle: {
				color: '#777b8f',
				fontSize: 12
			}
		},
		axisLine: {
			lineStyle: {
				color: '#ddd'
			}
		}
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
		axisTick:  {
            show: false
        },
		data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		axisLabel: {
			textStyle: {
				color: '#777b8f',
				fontSize: 12
			}
		},
		axisLine: {
			lineStyle: {
				color: '#ddd'
			}
		}
    },
    series: [{
			name: '剩余',
			type: 'bar',
			data: [80, 80, 97, 53, 95, 70,88],
			itemStyle: {
			    emphasis: {
				    barBorderRadius: 15
				},
				normal: {
				    barBorderRadius: 15,
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: '#1CC6FC' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#2A71FD' // 100% 处的颜色
					}], false)
				}
			},
			label: {
				normal: {
					show: true,
					formatter: '{c}',
					position: 'insideRight',
					offset: [-2, 1.5],
					textStyle: {
						color: '#fff',
						fontSize: 10
					}

				}
			}
		}, {
			name: '总量',
			type: 'bar',
			barGap: '-100%',
			itemStyle: {
				color: 'rgba(0,0,0,0)',
				borderColor: '#2A71FD',
				padding: 0,
				emphasis: {
				    barBorderRadius: 15
				},
				normal: {
				    barBorderRadius: 15,
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: '#f2f2f2' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#f2f2f2' // 100% 处的颜色
					}], false)
				}
			},
			label: {
				normal: {
					show: true,
					lineHeight: 12,
					formatter: '{c}',
					position: 'right',
					right: 0,
					textStyle: {
						color: '#000',
						fontSize: 12
					}

				}
			},
			z: -10,
			data: [160, 170, 166, 170, 170, 130,130]
		}],
		barCategoryGap: '40%'
};
