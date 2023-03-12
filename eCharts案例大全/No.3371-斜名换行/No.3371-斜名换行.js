// 斜线柱状图

var data = [
  {
    ny: '定边',
    bl: 40,
  },
  {
    ny: '西安',
    bl: 20,
  },
  {
    ny: '乌审旗',
    bl: 10,
  },
  {
    ny: '庆阳',
    bl: 20,
  },
  {
    ny: '吴起',
    bl: 20,
  },
  {
    ny: '靖边',
    bl: 20,
  },
];
var xData = [],
  yData = [];
var seriesdata_bj = [];

data.map(function (a, b) {
  xData.push(a.ny);
  if (a.bl === 0) {
    yData.push({
      name: a.ny,
      value: a.bl,
    });
  } else {
    yData.push({
      name: a.ny,
      value: a.bl,
    });
  }
  seriesdata_bj.push(100);
});

option = {
  tooltip: {
    trigger: 'axis',
  },

  legend: {
    top: 10,
    data: ['总工作天数', '工作天数'],
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    top: '7%',
    height: '85%',
  },
  xAxis: [
    {
      type: 'category',
      gridIndex: 0,

      data: xData,
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: '#CCC',
        },
      },
      axisLabel: {
        show: true,
        color: 'black',
        rotate: 50,
        margin: 20,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitNumber: 2,
      name: '',
      nameTextStyle: {
        color: 'rgb(170,170,170)',
      },
      max: 100,
      min: 0,
      gridIndex: 0,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#0c3b71',
        },
      },
      axisLabel: {
        color: 'black',
        formatter: '{value}',
      },
    },
    {
      type: 'value',
      gridIndex: 0,
      min: 0,
      max: 100,
      splitNumber: 12,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)'],
        },
      },
    },
  ],
  series: [
    {
      name: '总工作天数',
      type: 'bar',
      barWidth: '18px',
      xAxisIndex: 0,
      yAxisIndex: 1,
      barGap: '-100%',
      data: seriesdata_bj,
      itemStyle: {
        normal: {
          color: '#8bb6ff',
          barBorderRadius: 0,
        },
      },
    },
    {
      name: '工作天数',
      type: 'bar',
      barWidth: '18px',
      xAxisIndex: 0,
      yAxisIndex: 0,
      itemStyle: {
        normal: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#268682',
            },
            {
              offset: 0.5,
              color: '#268682',
            },
            {
              offset: 1,
              color: '#268682',
            },
          ]),
        },
      },
      data: yData,
      zlevel: 11,
    },

    {
      name: '动用率',
      type: 'line',
      symbolSize: 10,
      itemStyle: {
        normal: {
          color: 'rgba(252,230,48,1)',
          barBorderRadius: 0,
          label: {
            show: true,
            position: 'top',
            formatter: function (p) {
              return p.value > 0 ? p.value : '';
            },
          },
        },
      },
      data: [55, 33, 22, 10, 29, 15],
    },
  ],
};
