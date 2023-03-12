const idata = [
  [
    [2.86, 1.77, 321773631, 'Australia', 1990],
    [3.12, 2.74, 321773631, 'Canada', 1990],
    [1.52, 2.68, 321773631, 'China', 1990],
    [1.37, 4.77, 321773631, 'Cuba', 1990],
    [2.86, 3.75, 321773631, 'Finland', 1990],
    [2.95, 0.77, 321773631, 'France', 1990],
    [3.15, 2.74, 321773631, 'Germany', 1990],
    [2.87, 3.71, 321773631, 'Iceland', 1990],
    [1.78, 2.77, 321773631, 'India', 1990],
    [2.96, 2.71, 321773631, 'Japan', 1990],
    [2.08, 3.69, 321773631, 'North Korea', 1990],
    [1.22, 2.72, 321773631, 'South Korea', 1990],
    [2.4, 2.54, 321773631, 'New Zealand', 1990],
    [4.33, 1.78, 321773631, 'Norway', 1990],
    [1.02, 3.78, 321773631, 'Poland', 1990],
    [1.93, 4.66, 321773631, 'Russia', 1990],
    [4.06, 2.63, 321773631, 'Turkey', 1990],
    [2.64, 0.77, 321773631, 'United Kingdom', 1990],
    [3.71, 4.75, 321773631, 'United States', 1990],
  ],
  [
    [4.41, 1.81, 321773631, 'Australia', 2015],
    [4.32, 2.81, 321773631, 'Canada', 2015],
    [1.33, 3.76, 321773631, 'China', 2015],
    [2.13, 3.75, 321773631, 'Cuba', 2015],
    [3.84, 4.8, 321773631, 'Finland', 2015],
    [3.76, 1.81, 321773631, 'France', 2015],
    [4.41, 2.81, 321773631, 'Germany', 2015],
    [4.23, 3.82, 321773631, 'Iceland', 2015],
    [1.9, 2.66, 321773631, 'India', 2015],
    [3.62, 2.83, 321773631, 'Japan', 2015],
    [1.39, 1.71, 321773631, 'North Korea', 2015],
    [3.44, 1.8, 321773631, 'South Korea', 2015],
    [3.42, 4.8, 321773631, 'New Zealand', 2015],
    [2.43, 3.81, 321773631, 'Norway', 2015],
    [2.47, 1.77, 321773631, 'Poland', 2015],
    [2.3, 2.73, 321773631, 'Russia', 2015],
    [1.93, 0.76, 321773631, 'Turkey', 2015],
    [3.82, 4.81, 321773631, 'United Kingdom', 2015],
    [4.33, 1.79, 321773631, 'United States', 2015],
  ],
];
for (let i of idata) {
  for (let p of i) {
    p[2] = 17938;
    p[3] = '';
  }
}

option = {
  title: {
    text: '风险热力图',
    left: '5%',
    top: '0%',
  },
  legend: {
    right: '10%',
    top: '3%',
  },
  grid: {
    left: '8%',
    top: '10%',
  },
  xAxis: {
    name: '风险发生可能性',
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
  },
  yAxis: {
    name: '风险影响度',
    splitLine: {
      lineStyle: {
        type: 'dashed',
      },
    },
    scale: true,
  },
  series: [
    {
      name: '最终风险评级',
      data: idata[0],
      type: 'scatter',
      symbolSize(data1) {
        return data1[2] / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter(param) {
            return param.data[3];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(251, 118, 123)',
          },
          {
            offset: 1,
            color: 'rgb(204, 46, 72)',
          },
        ]),
      },
    },
    {
      name: '问卷风险评级',
      data: idata[1],
      type: 'scatter',
      symbolSize(data1) {
        return data1[2] / 5e2;
      },
      emphasis: {
        focus: 'series',
        label: {
          show: true,
          formatter(param) {
            return param.data[3];
          },
          position: 'top',
        },
      },
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(129, 227, 238)',
          },
          {
            offset: 1,
            color: 'rgb(25, 183, 207)',
          },
        ]),
      },
    },
  ],
};
