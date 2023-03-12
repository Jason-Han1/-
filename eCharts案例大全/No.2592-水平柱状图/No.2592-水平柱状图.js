
option = {
    backgroundColor: 'rgba(2, 2, 2, 0.8)',
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        type: 'category',
        data: [60, 80, 30],
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          formatter: (params) => {
            const percent = (Number(params) / 100).toFixed(2) * 100;
            return `{p|${percent}%}\n{t|已使用}`;
          },
          rich: {
            t: {
              color: '#28E9F6',
              fontSize: 14,
            },
            p: {
              color: '#fff',
              fontSize: 14,
            },
          },
        },
        axisTick: {
          show: false,
        },

      },
      {
        type: 'category',
        data: [60, 80, 30],
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          formatter: (params) => {
            const percent = ((100 - Number(params)) / 100).toFixed(2) * 100;
            return `{p|${percent}%}\n{t|未占用}`;
          },
          rich: {
            t: {
              color: '#28E9F6',
              fontSize: 14,
            },
            p: {
              color: '#fff',
              fontSize: 14,
            },
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '背景',
        type: 'bar',
        data: [100, 100, 100],
        itemStyle: {
          borderWidth: 1,
          borderColor: '#006075',
          color: '#00607522',
        },
        barWidth: 50,
        z: 1,
      },
      {
        // 分隔
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            color: '#05E5FF',
          },
        },
        barWidth: 48,
        symbol: 'rect',
        symbolSize: [13, 20],
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbolClip: true,
        data: [60, 80, 30],
        z: 2,
      },
    ],
};
