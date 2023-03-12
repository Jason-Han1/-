option = {
    backgroundColor: 'rgba(2, 2, 2, 0.8)',
    legend: {
      show: true,
      textStyle: {
        color: '#28E9F6',
        fontSize: 14,
      },
    },
    tooltip: {
      // 鼠标悬浮时的信息展示框
      backgroundColor: 'rgba(2, 2, 2, 0.8)',
      borderColor: '#195760',
      borderWidth: 1,
      padding: 12,
      extraCssText: 'border-radius:0;',
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      nameTextStyle: {
        // 单位的样式
        color: '#fff',
        fontSize: 14,
      },
      axisLabel: {
        // x轴坐标点文字样式
        fontSize: 12,
        color: '#fff',
      },
      axisTick: {
        // 是否显示x轴上的分割点
        show: false,
      },
      axisLine: {
        // 是否显示x轴以及x轴样式
        show: true,
        lineStyle: {
          color: '#9394A5',
        },
      },
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    },
    yAxis: {
      type: 'value',
      name: '%', // 单位
      // interval: 100,不要固定
      nameTextStyle: {
        color: '#fff',
        fontSize: 14,
      },
      splitLine: {
        show:false
      },
      axisLabel: {
        fontSize: 12,
        color: '#fff',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#9394A5',
        },
      },
    },
    series: [
      {
        name: '概算',
        type: 'line',
        smooth: false,
        symbolSize: 25,
        symbol: 'circle',
        showAllSymbol: true,
        lineStyle: {
          color: '#F4B32B',
          width: 2,
        },
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: '#fff',//中心颜色
              },
              {
                offset: 0.4,
                color: '#fff',
              },
              {
                offset: 0.5,
                color: '#ffffff00',
              },
              {
                offset: 1,
                color: '#ffffff00',
              },
            ],
          },
          borderColor: '#F4B32B',
          borderWidth: 2,
        },

        data: [120, 132, 101, 134, 90, 230, 610,120, 132, 101, 134, 90],
      }
    ],
};
