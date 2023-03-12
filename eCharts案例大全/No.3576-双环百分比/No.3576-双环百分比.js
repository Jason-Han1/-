const cpu = 31;
  const ram = 55
  const textStyle = {
    color: '#fff',
    fontSize: 32,
    fontWeight: '100',
  };

  const title = [{
    text: '百分比图示',
    x: 'center',
    top: '35%',
    textStyle,
  }];
  option = {
    backgroundColor: '#082448',
    title,
    polar: {
      radius: ['56%', '80%'],
      center: ['50%', '40%'],
    },
    angleAxis: {
      max: 100,
      // 隐藏刻度线
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: 'category',
    },
    series: [
      {
        type: 'bar',
        barWidth: 20,
        coordinateSystem: 'polar',
        roundCap: true,
        showBackground: true,
        backgroundStyle: {
          color: '#213A5A',
        },
        data: [
          {
            value: cpu,
            itemStyle: {
              normal: {
                color: '#04D58B',
              },
            },
          },
          {
            value: ram,
            itemStyle: {
              normal: {
                color: '#129BFF',
              },
            },
          },
        ],
      },
    ],
  };