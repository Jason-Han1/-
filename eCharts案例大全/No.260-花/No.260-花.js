option = {
  backgroundColor: '#404A59',
  color: ['#ffd285', '#ff733f', '#ec4863'],

  toolbox: {
    show: false,
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    show: false,
    axisLine: {
      lineStyle: {
        color: '#c0576d',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: '#ffd285',
      },
    },
    boundaryGap: true, //false时X轴从0开始
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: {
    show: false,
    axisLine: {
      lineStyle: {
        color: '#c0576d',
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '#c0576d',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
      textStyle: {
        color: '#ffd285',
      },
    },
    type: 'value',
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [0, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 60,
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 40, name: 'rose 2' },
        { value: 40, name: 'rose 3' },
        { value: 40, name: 'rose 4' },
        { value: 40, name: 'rose 5' },
      ],
    },
    {
      name: '',
      type: 'pie',
      radius: [0, 250],
      startAngle: 18,
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        show: false,
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },

        {
          value: 4,
          name: '分段二',
          label: {
            normal: {
              rotate: 150, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            borderRadius: [0, 15],
          },
        },
        {
          value: 4,
          name: '分段三',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 130, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 3,
          name: '分段四',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 110, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 2,
          name: '分段五',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 90, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 1,
          name: '分段六',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 70, //文字旋转角度，新版本只能单独设置
            },
          },
        },
      ],
    },
    {
      name: '',
      type: 'pie',
      radius: [0, 250],
      startAngle: 90,
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        show: false,
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },

        {
          value: 4,
          name: '分段二',
          label: {
            normal: {
              rotate: 150, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            borderRadius: [0, 15],
          },
        },
        {
          value: 4,
          name: '分段三',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 130, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 3,
          name: '分段四',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 110, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 2,
          name: '分段五',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 90, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 1,
          name: '分段六',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 70, //文字旋转角度，新版本只能单独设置
            },
          },
        },
      ],
    },
    {
      name: '',
      type: 'pie',
      radius: [0, 250],
      startAngle: 162,
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        show: false,
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },

        {
          value: 4,
          name: '分段二',
          label: {
            normal: {
              rotate: 150, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            borderRadius: [0, 15],
          },
        },
        {
          value: 4,
          name: '分段三',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 130, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 3,
          name: '分段四',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 110, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 2,
          name: '分段五',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 90, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 1,
          name: '分段六',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 70, //文字旋转角度，新版本只能单独设置
            },
          },
        },
      ],
    },
    {
      name: '',
      type: 'pie',
      radius: [0, 250],
      startAngle: 234,
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        show: false,
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },

        {
          value: 4,
          name: '分段二',
          label: {
            normal: {
              rotate: 150, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            borderRadius: [0, 15],
          },
        },
        {
          value: 4,
          name: '分段三',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 130, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 3,
          name: '分段四',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 110, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 2,
          name: '分段五',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 90, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 1,
          name: '分段六',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 70, //文字旋转角度，新版本只能单独设置
            },
          },
        },
      ],
    },
    {
      name: '',
      type: 'pie',
      radius: [0, 250],
      startAngle: 306,
      center: ['50%', '50%'],
      roseType: 'area',
      label: {
        show: false,
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },
        {
          value: 0,
          name: '',
          label: {
            normal: {
              show: false,
            },
          },
        },

        {
          value: 4,
          name: '分段二',
          label: {
            normal: {
              rotate: 150, //文字旋转角度，新版本只能单独设置
            },
          },
          itemStyle: {
            borderRadius: [0, 15],
          },
        },
        {
          value: 4,
          name: '分段三',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 130, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 3,
          name: '分段四',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 110, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 2,
          name: '分段五',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 90, //文字旋转角度，新版本只能单独设置
            },
          },
        },
        {
          value: 1,
          name: '分段六',
          itemStyle: {
            borderRadius: 0,
          },
          label: {
            normal: {
              rotate: 70, //文字旋转角度，新版本只能单独设置
            },
          },
        },
      ],
    },
  ],
};
