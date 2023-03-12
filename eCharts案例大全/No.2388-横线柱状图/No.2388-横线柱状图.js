var colorList = ['#FC6466', '#FC6D00', '#FFCC51', '#34EBD8'];
var datas = [
  {
    value: 16000,
    name: '一类',
  },
  {
    value: 8400,
    name: '二类',
  },
  {
    value: 6290,
    name: '三类',
  },
  {
    value: 22125,
    name: '四类',
  },
  {
    value: 25235,
    name: '五类',
  },
  {
    value: 14619,
    name: '六类',
  },
  {
    value: 1175,
    name: '七类',
  },
];

option = {
  tooltip: {
    show: false,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    show: false,
  },
  grid: {
    left: '30%',
    right: '20%',
  },
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      data: datas.map((item) => item.name),
      axisLabel: {
        margin: 200,
        fontSize: 32,
        align: 'left',
        color: (value, index) => colorList[index < 3 ? index : 3],
        rich: {
          a1: {
            backgroundColor: colorList[0],
            width: 13,
            height: 13,
            borderRadius: 25,
          },
          a2: {
            backgroundColor: colorList[1],
            width: 13,
            height: 13,
            borderRadius: 25,
          },
          a3: {
            backgroundColor: colorList[2],
            width: 13,
            height: 13,
            borderRadius: 25,
          },
          b: {
            backgroundColor: colorList[3],
            width: 13,
            height: 13,
            borderRadius: 25,
          },
        },
        formatter: function (name) {
          var index = datas.map((item) => item.name).indexOf(name) + 1;

          if (index <= 3) {
            return ['{a' + index + '|}' + '   0' + index + '   ' + name].join('\n');
          } else {
            return ['{b|}' + '  0' + index + '   ' + name].join('\n');
          }
        },
      },
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      data: datas.map((item) => item.value),
      axisLabel: {
        show: true,
        color: (value, index) => colorList[index < 3 ? index : 3],
        fontSize: 32,
      },
    },
  ],
  series: [
    {
      name: 'value',
      type: 'bar',
      barWidth: 20,
      data: datas.map((item, i) => {
        const itemStyle = {
          color: i > 2 ? colorList[3] : colorList[i],
        };
        return {
          value: item.value,
          itemStyle: itemStyle,
        };
      }),
      label: {
        show: false,
      },
      showBackground: true,
      backgroundStyle: {
        color: '#083d57',
      },
    },
  ],
};
