var  getfpkszb=[62.35];//非贫困生占比
var  getfpksrs=[1265];//非贫困生人数


//贫困生分布-非贫困生图表
option = {
    backgroundColor:'#062D67',
    graphic: {
        elements: [{
            type: "image",
            z: 999,
            style: {
                image:'data:image/png;base64,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',
                width:50,
                height: 45
            },
            left: 'center',
            top: "50%",
        }]
    },
    title: {
    text: getfpkszb+'%',
    textStyle: {
      color: '#34E3EA',
      fontSize: 24
    },/*
    subtext: '非贫困生',
    subtextStyle: {
      color: '#FFF',
	  fontSize: 14
    },
	itemGap: 60, // 主副标题距离*/
    left: 'center',
    top: '43%'
	},
    tooltip: {
        formatter: function (params) {
            return '<span style="color: #fff;">非贫困生人数：'+ getfpksrs + '人</span>';
        }
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
    data: getfpkszb,
	showBackground: true,
	backgroundStyle: {
		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(14,116,255,.5)'
          }, {
            offset: 1,
            color: 'rgba(92,234,255,.5)'
          }])
	},
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: 30,
    itemStyle: {
        normal: {
        opacity: 1,
        color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(14,116,255,1)'
          }, {
            offset: 1,
            color: 'rgba(92,234,255,1)'
          }]),
    }
    },
  }]
};