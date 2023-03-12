
option = {
    backgroundColor: '#000',
    textStyle: {
        color: '#40E7F4',
        fontSize: 16,
        fontWeight: 'normal'
    },
    title : {
          left: '9%',
          top: 10,
          itemGap: 36,
          text: '本周-上周月融资额对比',
        subtext: '单位：万元',
          textStyle: {
            color: '#40E7F4',
            fontSize: 32,
            fontWeight: 'normal'
          },
          subtextStyle: {
            fontSize: 16,
            color: 'rgba(64, 231, 244, .59)',
          }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            lineStyle: {
                opacity: 0.3
            },
            crossStyle: {
                opacity: 0.3
            },
            label: {
                backgroundColor: 'rgba(255, 255, 255, .2)'
            }
        }
    },
    legend: {
        right: '10%',
        top: 86,
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 36,
        textStyle: {
          color: '#40E7F4',
          fontSize: 16
        }
      },
    dataset: {
        dimensions: ['month', '本周', '上周'],
        source: [
          ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          [49, 7.0, 23.2, 25.6, 76.7, 32.6, 72],
          [16.4, 23.2, 25.6, 28.7, 70.7, 48.7, 46]
        ]
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '8%',
        top: '25%',
        containLabel: true,
      },
    xAxis : [
        {	
		type : 'category',
        boundaryGap: false, //坐标轴两边留白
        offset: 10,
        axisTick:{//坐标轴刻度相关设置。
			show: false,
		},
		axisLine:{//坐标轴轴线相关设置
			lineStyle:{
				color: '#81D8D0',
				opacity: 0.79,
			}
		},
		splitLine: { //坐标轴在 grid 区域中的分隔线。
			show: false,
		},
		axisLabel: {
		    fontSize: 16
		}
      }
    ],
    yAxis : [
        {
            type : 'value',
            splitNumber: 8,
			axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, .1)'
                }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#81D8D0',
                opacity: 0.2
              }
            },
			axisLabel: {
                fontSize: 16,
                // verticalAlign: 'bottom',
            },
        }
    ],
    series : [
        {
            type:'line',
            smooth: true,
            seriesLayoutBy: 'row',
            lineStyle: {
                width: 4
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(52,105,226, 1)'
                    }, {
                        offset: 0.9,
                        color: 'rgba(87,255,224, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [
                          { offset: 0, color: '#3469E2' },
                          { offset: 0.3, color: '#3AA5C7' },
                          { offset: 1, color: '#57FFE0' }
                        ]
                    }
                }
            }
        },
        {
            type:'line',
            smooth: true,
            seriesLayoutBy: 'row',
            lineStyle: {
                width: 4
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(195,89,208, 1)'
                    }, {
                        offset: 0.9,
                        color: 'rgba(150,62,245, 0.01)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [
                          { offset: 0, color: '#F78678' },
                          { offset: 0.3, color: '#C359D0' },
                          { offset: 1, color: '#963EF5' }
                        ]
                    }
                }
            }
        }
    ]
};
