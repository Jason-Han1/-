option = {
  tooltip: {
    position: 'top',
    formatter: function (params) {
      return (
        option.yAxis.data[params.value[1]] +
        '<br />' +
        params.marker +
        option.xAxis.data[params.value[0]] +
        '数量:' +
        params.value[2]
      );
    },
  },
  legend: {
    left: 'center',
  },
  title: [],
  xAxis: {
    name: '时间',
    nameLocation: 'center',
    nameGap: 30,
    // type: 'category',
    data: ['11:20', '11:30', '11:40', '11:50', '12:00', '12:10', '12:20'],
    boundaryGap: false,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  yAxis: {
    name: '分类',
    nameLocation: 'center',
    nameGap: 50,
    //type: 'category',
    data: ['志愿组织', '志愿活动', '志愿奖品', '志愿积分'],
    axisLabel: {
      margin: 20,
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
      },
    },
    axisLine: {
      show: false,
    },
  },
  series: [
    {
      name: '志愿组织',
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] % 20;
      },
      data: [
        [0, 0, 444],
        [1, 0, 699],
        [2, 0, 951],
        [3, 0, 1126],
        [4, 0, 1347],
        [5, 0, 1993],
        [6, 0, 3096],
      ],
      animationDelay: function (idx) {
        return idx * 10;
      },
    },
    {
      name: '志愿活动',
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] % 40;
      },
      data: [
        [0, 1, 484],
        [1, 1, 239],
        [2, 1, 351],
        [3, 1, 126],
        [4, 1, 347],
        [5, 1, 993],
        [6, 1, 2096],
      ],
      animationDelay: function (idx) {
        return idx * 5;
      },
    },
    {
      name: '志愿奖品',
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] % 40;
      },
      data: [
        [0, 2, 44],
        [1, 2, 69],
        [2, 2, 1951],
        [3, 2, 116],
        [4, 2, 147],
        [5, 2, 993],
        [6, 2, 3096],
      ],
      animationDelay: function (idx) {
        return idx * 5;
      },
    },
    {
      name: '志愿积分',
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] % 40;
      },
      data: [
        [0, 3, 1444],
        [1, 3, 1699],
        [2, 3, 1951],
        [3, 3, 1126],
        [4, 3, 147],
        [5, 3, 1993],
        [6, 3, 396],
      ],
      animationDelay: function (idx) {
        return idx * 5;
      },
    },
  ],
};
