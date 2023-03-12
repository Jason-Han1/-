var info = [{
  name: 'shuiqiu',
  value: '45%'
}]
var value = parseInt(info[0].value.split('%')[0]) / 100
var colors = [
  [{
    offset: 1,
    color: 'rgba(230, 183, 93, 0.1)'
  }, {
    offset: 0.5,
    color: 'rgba(230, 183, 93, 0.8)'
  }, {
    offset: 0,
    color: 'rgba(230, 183, 93, 1)'
  }]
]
option = {
  // 标题标签
  title: {
    text: (value * 100).toFixed(0) + '{a|%}',
    textStyle: {
      fontSize: 26,
      fontFamily: 'BYfont',
      fontWeight: 'normal',
      color: '#fff',
      rich: {
      }
    },
    x: 'center',
    y: '30%'
  },
  graphic: [{
    type: 'group',
    left: 'center',
    bottom: '10%',
    children: [{
      type: 'text',
      z: 100,
      left: '10',
      top: 'middle',
      style: {
        fill: '#000',
        text: info[0].name,
        fontSize: 30
      }
    }]
  }],
  series: [
    {
      type: 'liquidFill',
      radius: '75%',
      center: ['50%', '40%'],
      data: [value, value, value, value], // 水数量
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 1,
            color: 'rgba(0, 54, 75, 1)'
          }, {
            offset: 0,
            color: 'rgba(0, 0, 0, 1)'
          }],
        },
        // globalCoord: false,
      },
        // 替换根据水位变化的标签
      // label: {
      //   normal: {
      //     show: true,
      //     textStyle: {
      //       fontSize: 24,
      //       color: '#fff',
      //       fontFamily: 'BYfont'
      //     }
      //   }
      // },
      // 隐藏外边框
      outline: {
        show: false,
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0
        }
      },
      // 改变水颜色
      itemStyle: {
        opacity: 0.5,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: colors[0],
          globalCoord: false
        },
      },
      // hover水的style
      emphasis: {
        itemStyle: {
          opacity: 1
        }
      }
    }
  ]
};
