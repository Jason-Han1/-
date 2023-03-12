// 是否显示百分比，通过调整改参数控制显示的是数值还是百分比
const isPercent = false;
// 数据配置：[y轴类目名，类目值]
const dataConfig = [
    ['类目1', 10],
    ['类目2', 20],
    ['类目3', 30],
    ['类目4', 40]
];

const total = dataConfig.reduce((t, v) => t + v[1], 0);
const yData = dataConfig.map(item => item[0]);
const seriesData = dataConfig.map(item => item[1]);

option = {
  title: {
    text: '条形图',
    left: 'center',
    top: 20
  },
  grid: {
    width: 300,
    height: 200,
    left: 'center',
    top: 70
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      formatter(value) {
        return isPercent
            ? `${Number(value).toFixed(1)}%`
            : value;
      }
    }
  },
  yAxis: {
    type: 'category',
    data: yData,
    inverse: true,
    axisTick: {
        show: false
    },
    axisLine: {
        show: false
    }
  },
  series: [
    {
      type: 'bar',
      data: seriesData,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true,
        formatter(params) {
          return isPercent
            ? `${Number(params.value * 100 / total).toFixed(1)}%`
            : params.value;
        }
      },
      barWidth: 30
    }
  ],
};