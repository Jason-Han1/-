var  getvalue=[90];

option = {
    title: {
        text: '{a|' + getvalue + '}{b|' + '分' + '}',
        textStyle: {
            rich: {
                a: {
                    fontSize: 48,
                    color: '#E23A38',
                    fontWeight:'600',
                },
                b: {
                    fontSize: 12,
                    color: '#E23A38',
                    fontWeight:'600',
                    padding: [0, 0, 24, 5]
                }
            }
        },
        left: 'center',
        top: 'center'
	},

  angleAxis: {
    max: 100,
    clockwise: true, // 逆时针
    // 隐藏刻度线
    show: false
  },
  radiusAxis: {
        type: 'category',
        
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
  },
  polar: {
    center: ['50%', '50%'],
    radius: '100%' //图形大小
  },
  series: [{
    type: 'bar',
    
    data: getvalue,
	showBackground: true,
	backgroundStyle: {
		color: '#9d9ea2',
	},
    coordinateSystem: 'polar',
    // roundCap: true,
    barWidth: 30,
    itemStyle: {
        normal: {
        color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#E23A38'
          }, {
            offset: 1,
            color: '#E23A38'
          }]),
        // shadowBlur: 5,
        // shadowColor: '#E23A38',
    }
    },
  }]
};