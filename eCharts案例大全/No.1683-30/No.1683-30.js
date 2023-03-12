
    var data = 30;
    var province = '北京市';
    var max = 30
    option = {
        backgroundColor:'#000',
    title: [{
      text: data,
      x: 'center',
      y: '33%',
      textStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400'
      }
    }, {
      text: province,
      x: 'center',
      bottom: '10%',
      textStyle: {
        fontSize: 12,
        color: '#fff',
        opacity: 1
      }
    }],
    polar: {
      radius: ['65%', '75%'],
      center: ['50%', '40%']
    },
    angleAxis: {
      max: max * 1.3,
      show: false
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [{
      name: '',
      type: 'bar',
      roundCap: true,
      barWidth: 60,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(26, 63, 79, 1)'
      },
      data: [data],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: '#0D7BE1'
          },
          {
            offset: 1,
            color: '#2CBEFF'
          }
          ])
        }
      }

    }]
  }
  ;