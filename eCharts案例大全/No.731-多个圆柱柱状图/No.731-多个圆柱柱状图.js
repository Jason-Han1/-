  let xData = ['1月', '铅酸电池', 'UPS设备', '普通空调', '机房环境', '智能电表'],
    yData = [22,52,55,12,35,44]
  yData1 = [32,42,50,22,30,40];


  option = {
    legend: {
      data: ['故障', '急停'],
      show:false
    },
    backgroundColor: '#062544',
    grid: {
      top: '10%',
      left: '5%',
      bottom: '5%',
      right: '5%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'item',
    },
    animation: false,
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#ddd',
          },
          margin: 30,
        },
        interval: 1,
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'value',

      },
    ],
    series: [
      {
        name: '上部圆',
        type: 'pictorialBar',
        silent: true,
        symbolSize: [20, 10],
        symbolOffset: [-11, -6],
        symbolPosition: 'end',
        z: 12,
        label: {
          normal: {
            show: true,
            position: 'top',
            padding:[0,22,0,0],
            fontSize: 15,
            fontWeight: 'bold',
            color: '#5BFCF4',
          },
        },
        color: '#5BFCF4',
        data: yData,
      },
      {
        name: '上部圆1',
        type: 'pictorialBar',
        silent: true,
        symbolSize: [20, 10],
        symbolOffset: [11, -6],
        symbolPosition: 'end',
        z: 12,
        label: {
          normal: {
            show: true,
            position: 'top',
            fontSize: 15,
            padding:[0,0,0,20],
            fontWeight: 'bold',
            color: '#5BFCF4',
          },
        },
        color: '#5BFCF4',
        data: yData1,
      },
      {
        name: '底部圆',
        type: 'pictorialBar',
        silent: true,
        symbolSize: [20, 10],
        symbolOffset: [-11, 7],
        z: 12,
        color: '#5BFCF4',
        data: yData,
      },
      {
        name: '底部圆1',
        type: 'pictorialBar',
        silent: true,
        symbolSize: [20, 10],
        symbolOffset: [11, 7],
        z: 12,
        color: '#5BFCF4',
        data: yData1,
      },
      {
        name: '故障',
        type: 'bar',
        barWidth: '20',
        barGap: '10%', // Make series be overlap
        barCateGoryGap: '10%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
              {
                offset: 0,
                color: 'rgba(210,210,210,0.3)',
              },
              {
                offset: 1,
                color: '#5BFCF4',
              },
            ]),
            opacity: 0.8,
          },
        },
        data: yData,
      },
      {
        name: '急停',
        type: 'bar',
        barWidth: '20',
        barGap: '10%', // Make series be overlap
        barCateGoryGap: '10%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
              {
                offset: 0,
                color: 'rgba(210,210,210,0.3)',
              },
              {
                offset: 1,
                color: '#5BFCF4',
              },
            ]),
            opacity: 0.8,
          },
        },
        data: yData1,
      },
    ],
  };