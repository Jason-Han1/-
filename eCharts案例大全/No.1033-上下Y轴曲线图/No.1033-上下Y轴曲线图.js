// prettier-ignore
let timeData = [
  '2022-01-11',
  '2022-01-12',
  '2022-01-13',
  '2022-01-14',
  '2022-01-15',
  '2022-01-16',
  '2022-01-17'
    ];
timeData = timeData.map(function (str) {
  return str.replace('2022-', '');
});
option = {
  title: {
    text: 'Rainfall vs Evaporation',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false,
    },
  },
  legend: {
    data: ['Evaporation', 'Rainfall'],
    left: 10,
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
      restore: {},
      saveAsImage: {},
    },
  },
  axisPointer: {
    link: [
      {
        xAxisIndex: 'all',
      },
    ],
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1],
    },
    {
      type: 'inside',
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1],
    },
  ],
  grid: [
    {
      left: 60,
      right: 50,
      height: '35%',
      bottom:"55%"
    },
    {
      left: 60,
      right: 50,
      top: '55%',
      height: '35%',
    },
  ],
  xAxis: [
    {
      type: 'category',
      axisLine: { onZero: true },
      data: timeData,
      axisLabel: {
        interval: 0,
        color: '#000',
        fontSize: 18,
        rotate: 30, //x轴倾斜40°
        align:'center',
        textStyle: {
          color: '#000',
          fontSize: 18,
          // fontSize:20,
          fontWeight: 700,
        },
        margin: 13, //刻度标签与轴线之间的距离。
        lineStyle: {
          width: 20,
        },
      },
    },
    {
      gridIndex: 1,
      type: 'category',
      axisLine: { onZero: true },
      data: timeData,
      position: 'top',
      axisLabel: {
        interval: 0,
        color: '#000',
        fontSize: 18,
        rotate: 30, //x轴倾斜40°
        align:'center',
        textStyle: {
          color: '#000',
          fontSize: 18,
          // fontSize:20,
          fontWeight: 700,
        },
        margin: 13, //刻度标签与轴线之间的距离。
        lineStyle: {
          width: 20,
        },
      },
    },
  ],
  yAxis: [
    {
      name: 'Evaporation(m^3/s)',
      type: 'value',
    },
    {
      gridIndex: 1,
      name: 'Rainfall(mm)',
      type: 'value',
      inverse: true,
    },
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'line',
      symbolSize: 8,
      xAxisIndex: 0,
      yAxisIndex: 0,
      // prettier-ignore
      data:[432,511,235,902,246,756,509],
    },
    {
      name: 'Rainfall',
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      symbolSize: 8,
      // prettier-ignore
      data:[782,796,802,602,688,329,289],
    },
  ],
};
