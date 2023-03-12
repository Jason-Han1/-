var color = ['#00FDFA', '#00B1BF', '#00F7F8']

option = {
    backgroundColor:'#061321',
  title: {
    text: '95%',
    textStyle: {
        color: color[2],
        fontSize: 35
    },
    itemGap: 20,
    left: 'center',
    top: 'center'
  },
  tooltip: {
  },
  angleAxis: {
      max: 100,
      clockwise: false, // 逆时针
      // 隐藏刻度线
      show: false,
      boundaryGap: ['40%', '40%'],
      startAngle: 90,
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
  polar: [{
      center: ['50%', '50%'], //中心点位置
      radius: '80%' //图形大小
  }],
  series: [{
          name: '小环',
          type: 'gauge',
          splitNumber: 15,
          radius: '32%', //中间装饰环
          center: ['50%', '50%'],
          startAngle: 0,
          endAngle: 359.9999,
          axisLine: {
              show: false
          },
          axisTick: {
              show: true,
              lineStyle: {
                  color: "#0BF4E4",
                  width: 2,
                  shadowBlur: 1,
                  shadowColor: color[1],
              },
              length: 20,
              splitNumber: 2
          },
          splitLine: {
              show: false
          },
          axisLabel: {
              show: false
          },
          detail: {
              show: false
          }
      }, {
          type: 'bar',
          z: 10,
          data: [50],
          showBackground: false,
          backgroundStyle: {
              color: "blue",
              borderWidth: 10,
              width: 10
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 35, //大的占比环
          itemStyle: {
              normal: {
                  opacity: 1,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                      offset: 0,
                      color: '#13d67d'
                  }, {
                      offset: 1,
                      color: '#8ddcac'
                  }])
              }
          },
      },
      {
          type: 'pie',
          name: '内层细圆环',
          radius: ['46%', '34%'],
          startAngle: 110,
          hoverAnimation: false,
          clockWise: true,
          itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                      offset: 0,
                      color: 'rgba(151,179,166,0.74)'
                  }, {
                      offset: 1,
                      color: 'rgba(151,179,166,0.74)'
                  }]),
                  shadowBlur: 20,
                  shadowColor: '#66666a',
              }
          },
          tooltip: {
              show: false,
          },
          label: {
              show: false
          },
          data: [100]
      }
  ]
};