let chartData = [
  ['product', '2019销售', '存量店增长', '新开店增长', '关店损失', '2020销售'],
  ['汇总', 97776906, '-', '-', '-', 103242635],
  ['辅助', '-', 97776906, 102352413, 103242635, '-'],
  ['增加', '-', 4575507, 1464162, '-', '-'],
  ['减少', '-', '-', '-', 573940, '-'],
];

option = {
  dataset: {
    source: chartData,
  },
  title: {
    text: '阶梯瀑布图',
    left: 'left',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: function (params) {
      const currentData = params
        .filter((_val, i) => {
          return i !== 1;
        })
        .map((val) => {
          return {
            name: val.seriesName,
            value: val.value[val.encode.y[0]],
          };
        })
        .filter((val) => {
          return val.value !== '-';
        })[0];

      return params[0].name + '<br/>' + currentData.name + ' : ' + currentData.value;
    },
  },
  legend: {
    orient: 'horizontal',
    y: 30,
    data: ['汇总', '增加', '减少'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: 70,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        position: 'top',
      },
      seriesLayoutBy: 'row',
    },
    {
      type: 'bar',
      stack: 'total',
      itemStyle: {
        barBorderColor: 'rgba(0,0,0,0)',
        color: 'rgba(0,0,0,0)',
      },
      emphasis: {
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
      },
      seriesLayoutBy: 'row',
    },
    {
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        position: 'top',
      },
      seriesLayoutBy: 'row',
    },
    {
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        position: 'bottom',
      },
      seriesLayoutBy: 'row',
    },
  ],
};
