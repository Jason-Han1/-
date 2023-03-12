
let _textColor = '#40E7F4', _textColorAlpha = 'rgba(64, 231, 244, .59)'

var option = {
      title: '',
      subText: '',
      itemColor: ['#57FFE0', '#3469E2']
    }


option = {
    backgroundColor: '#000',
    textStyle: {
        color: _textColor,
        fontSize: 20,
        fontWeight: 'normal'
    },
    title : {
        text: '本周运单数据对比图',
        left: '7%',
        top: '6%',
        textStyle: {
            color: _textColor,
            fontSize: 22,
            fontWeight: 'normal'
        },
        subtext: '单位：吨',
        subtextStyle: {
            fontSize: 16,
            color: _textColorAlpha
        }
    },
    tooltip : {
        trigger: 'axis',
        formatter: '{c}',
        axisPointer: {
            type: 'none'
        }
    },
    dataset: {
        source: [
            ['周一', '周二', '周三', '周四', '周五', '周六', '周七', '周八', '周九', '周十', '周十一', '周十二', '周十三'],
            [49, 23.2, 76.7, 26.4, 28.7, 48.7, 5.9, 23.2, 76.7, 26.4, 28.7, 48.7, 5.9]
        ]
    },
    legend: {
        show: false
    },
    calculable : true,
	grid: {
		left: '8%',
		right: '8%',
		bottom: '6%',
		top: '20%',
		containLabel: true,
	},
    xAxis : [
        {
            type : 'category',
            offset: 10,  // Y 轴相对于默认位置的偏移
            boundaryGap: true, //坐标轴两边留白
            axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
				    color: '#81D8D0',
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			},
			axisLabel: {
			    fontSize: 14
			}
        }
    ],
    yAxis : [
        {
            offset: 16,
            type : 'value',
            axisLabel: {
                fontSize: 14,
                color: _textColor,
                verticalAlign: 'bottom',
                margin: -16,
            },
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#81D8D0',
					opacity: 0.2
				}
			}
        }
    ],
    series : [
        {
            name:'本周',
            type:'bar',
            barWidth: '32%',
            seriesLayoutBy: 'row',
            itemStyle: {
                barBorderRadius: [36, 36, 0, 0],
                color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {offset: 0, color: '#57FFE0'},
                            {offset: 1, color: '#3469E2'}
                        ]
                    }
            },
            label: {
                normal: {
                   show: true,
                   position: 'top',
                   textStyle: {
                       color: _textColor,
                       fontStyle: 'normal',
                       fontSize: 14,
                   },
                },
            },
        }
    ]
};
