option = {
  backgroundColor: '#0e1733',
  xAxis: [
    {
      show: true,
      splitLine: {
        show: false,
      },
      type: 'value',
      data: [3, 4, 5, 6, 7],
      axisTick: {
        show: true,
        alignWithLabel: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#35F7FF',
        },
      },
      axisLabel: {
        interval: 0,
        show: true,
        textStyle: {
          fontFamily: '微软雅黑',
          fontSize: 12,
        },
        formatter: function (params) {
          return params + 3;
        },
      },
    },
  ],
  yAxis: [
    {
      show: false,
      type: 'category',
    },
  ],
  series: [
    {
      name: '优秀',
      type: 'bar',
      stack: 'total',
      data: [0.5],
      barWidth: 24,
      yAxisIndex: 0,
      label: {
        normal: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: function (params) {
            return '优秀';
          },
        },
      },
      itemStyle: {
        normal: {
          color: '#528CED',
        },
      },
    },
    {
      name: '良好',
      type: 'bar',
      stack: 'total',
      data: [0.5],
      barWidth: 24,
      yAxisIndex: 0,
      label: {
        normal: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: function (params) {
            return '良好';
          },
        },
      },
      itemStyle: {
        normal: {
          color: '#3DD7C1',
        },
      },
    },
    {
      name: '一般',
      type: 'bar',
      stack: 'total',
      data: [1],
      barWidth: 24,
      yAxisIndex: 0,
      label: {
        normal: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: function (params) {
            return '一般';
          },
        },
      },
      itemStyle: {
        normal: {
          color: '#E5BB3C',
        },
      },
    },
    {
      name: '急需改造',
      type: 'bar',
      stack: 'total',
      data: [2],
      barWidth: 24,
      yAxisIndex: 0,
      label: {
        normal: {
          show: true,
          color: '#fff',
          fontSize: 14,
          formatter: function (params) {
            return '急需改造';
          },
        },
      },
      itemStyle: {
        normal: {
          color: '#EF5286',
        },
      },
    },
    {
      name: '刻度',
      type: 'bar',
      markPoint: {
        data: [
          {
            value: '0.5',
            xAxis: 0.5,
            y: 100,
            itemStyle: {
              normal: {
                color: '#E5BB3C',
                barBorderRadius: 10,
              },
            },
            label: {
              position: 'top',
              show: true,
              color: '#E5BB3C',
              fontSize: 14,
              fontWeight: 'bold',
              formatter: function (params) {
                return `当前能效` + params.value;
              },
            },
          },
        ],
      },
    },
  ],
};
