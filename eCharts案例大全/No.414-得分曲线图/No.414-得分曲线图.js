var data = new Array(80).fill(0).map(function (item, index) {
  var value = Math.floor(Math.abs(Math.sin((Math.PI / 20) * index)) * 100);
  return {
    value: value,
    itemStyle: {
      shadowBlur: 10,
      shadowColor: value < 60 ? 'red' : value < 80 ? '#fddd60' : value < 90 ? '#4992ff' : '#7cffb2',
    },
  };
});
var time = new Array(97).fill(0).map(function (item, index) {
  return 1634486400 + 15 * 60 * index;
});
option = {
  tooltip: {
    show: true,
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: time,
    axisLabel: {
      formatter: function (value) {
        var date = new Date(parseInt(value) * 1000)
        return date.getHours() + ':'+ date.getMinutes()
      },
    },
  },
  yAxis: {
    name: '分',
    type: 'value',
  },
  series: [
    {
      type: 'line',
      color: 'red',
      data: data,
      name: '得分',
      smooth: true,
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 10,
      markLine: {
        symbol: 'none',
        silent: true,
        animation: false,
        data: [
          [
            {
              name: '14:50',
              x: '20%',
              y: '89%',
              lineStyle: {
                type: 'dashed',
                color: '#AEB9CB',
              },
              label: {
                color: '#FFF',
                show: true,
                backgroundColor: 'rgba(141 ,152 ,170 , 0.9)',
                borderRadius: 2,
                padding: 4,
                position: 'start',
                distance: 4,
              },
            },
            {
              x: '20%',
              y: '10%',
            },
          ],
          [
            {
              name: '16:26',
              x: '30%',
              y: '89%',
              lineStyle: {
                color: '#AEB9CB',
              },
              label: {
                color: '#FFF',
                show: true,
                backgroundColor: 'rgb(141 152 170 / 0.9)',
                borderRadius: 2,
                padding: 4,
                position: 'start',
                distance: 4,
              },
            },
            {
              x: '30%',
              y: '10%',
            },
          ],
        ],
      },
      markArea: {
        data: [
          [
            {
              x: '20%',
              itemStyle: {
                color: 'blue',
                opacity: 0.03,
              },
            },
            {
              x: '30%',
            },
          ],
        ],
        silent: true,
      },
    },
  ],

  visualMap: {
    seriesIndex: 0,
    show: true,
    top: 0,
    orient: 'horizontal',
    inverse: true,
    itemGap: 30,
    itemSymbol: 'circle',
    pieces: [
      {
        gte: 90,
        lte: 100,
        label: '优秀',
        color: '#7cffb2',
      },
      { gte: 80, lt: 90, label: '良好', color: '#4992ff' },
      { gte: 60, lt: 80, label: '及格', color: '#fddd60' },
      { gte: 0, lt: 60, label: '不及格', color: '#ff6e76' },
    ],
  },
};
