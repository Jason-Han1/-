var option = {
  color: ['#659d84', '#ABD8CD', '#fb8e6a', '#8fbf8f'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    formatter: function (seriesData, ticket, callback) {
                  var showHtm = ''
                  for (var i = 0; i < seriesData.length; i++) {
                    var marker = seriesData[i].marker
                    var name = seriesData[i].seriesName
                    var text = seriesData[i].name
                    var value = seriesData[i].value
                    if (i == 0) {
                      showHtm = text + '<br>'
                    }
                    showHtm += marker + name + ': ' + value + '%' + '<br>'
                  }
                  return showHtm
                }
  },
  legend: {
    type: 'plain',
    bottom: 0,
    itemGap: 20,
    itemWidth: 10,
    itemHeight: 10,
    data: ['father', 'mother', 'son', 'home'],
  },
  grid: {
    left: '5%',
    right: '4%',
    bottom: '30px',
    borderWidth: 1,
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      position: 'center',
      axisPointer: {
        tyep: 'shadow',
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#999999',
        },
      },
      axisTick: {
        show: false,
      },
      data: [
        '2021/02/11',
        '2021/02/12',
        '2021/02/13',
        '2021/02/14',
        '2021/02/15',
        '2021/02/16',
        '2021/02/17',
        '2021/02/18',
        '2021/02/19',
        '2021/02/20',
      ],
    },
    {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitArea: { show: false },
      splitLine: { show: false },
    },
    {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitArea: { show: false },
      splitLine: { show: false },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '套娃图:￥',
      nameTextStyle: {
        align: 'right',
        color: '#999999',
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#eeeeee',
        },
      },
      axisLabel: {
        textStyle: {
          color: '#999999',
        },
      },
    },
    {
      type: 'value',
      show: false,
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: 'father',
      type: 'bar',
      z: '1',
      // barGap: '-100%',
      barWidth: 30,
      data: [100, 90, 80, 60, 50, 40, 30, 20, 10, 5],
    },
    {
      name: 'mother',
      type: 'bar',
      z: '1',
      barGap: '-100%',
      barWidth: 30,
      data: [-100, -90, -80, -70, -60, -50, -40, -30, -20, -10],
    },
    {
      name: 'son',
      type: 'bar',
      z: '2',
      barWidth: 15,
      xAxisIndex: 2,
      data: [-50,-25,50, 40, 30, 20, 10, -10, -5, -2],
    },
    {
      name: 'home',
      type: 'line',
      yAxisIndex: 1,
      data: [5, 4, 3, 2, 1, -1, -2, -3, -4, -5],
    },
  ],
};
