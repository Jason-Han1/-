var myData = {
  name: ['1月', '2月', '3月', '4月', '5月', '6月'],
  value: [200, 300, 250, 280, 455, 400],
  value2: [30000, 50000, 35000, 45000, 35000, 30000],
};
var max = Math.max(...myData.value)||1;
var max2 = Math.max(...myData.value2)||1;
var multiple = max2 / max;
for (var i in myData.value2) {
  myData.value2[i] = myData.value2[i] / multiple;
}
var option = {
  backgroundColor: '#020323',
  grid: {
    left: '6%',
    right: '6%',
    top: '17%',
    bottom: '10%',
    containLabel: true,
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    formatter: function (params, ticket, callback) {
      return (
        params[0].name +
        '<br/>' +
        params[0].seriesName +
        '：' +
        params[0].value +
        '个' +
        '<br/>' +
        params[1].seriesName +
        '：' +
        params[1].value * multiple +
        '元'
      );
    },
  },
  legend: [
    {
      show: true,
      data: ['设备数量'],
      top: 31,
      right: 150,
      icon: 'circle',
      itemWidth: 6,
      itemHeight: 6,
      itemGap: 20,
      itemStyle: {
        color: '#064CC4',
      },
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
    {
      show: true,
      data: ['设备总价'],
      top: 31,
      right: 65,
      icon: 'circle',
      itemWidth: 6,
      itemHeight: 6,
      itemGap: 20,
      itemStyle: {
        color: '#4FB8F9',
      },
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
  ],
  xAxis: [
    {
      type: 'category',
      axisLabel: {
        align: 'center',
        color: '#979797',
      },
      axisLine: {
        lineStyle: {
          color: '#1E467E',
        },
      },
      axisTick: {
        show: false,
      },
      data: myData.name,
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '单位：个',
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 14,
        align: 'right',
        padding: [10, 0],
      },
      min: 0,
      max: max,
      splitNumber: 5,
      interval: max / 5,
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#979797',
          fontSize: 14,
        },
      },
      splitLine: {
        show: false,
      },
    },
    {
      type: 'value',
      name: '单位：元',
      nameLocation: 'end',
      nameTextStyle: {
        fontSize: 14,
        align: 'left',
        padding: [10, 0],
      },
      min: 0,
      max: max2,
      splitNumber: 5,
      interval: max2 / 5,
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#979797',
          fontSize: 14,
        },
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '设备数量',
      type: 'line',
      symbol: 'rect',
      symbolSize: 8,
      itemStyle: {
        color: '#fff',
        borderColor: '#064CC4',
        borderWidth: 2,
        borderType: 'solid',
      },
      lineStyle: {
        color: '#064DC4',
        width: 2,
      },
      data: myData.value,
    },
    {
      name: '设备总价',
      type: 'line',
      symbol: 'rect',
      symbolSize: 8,
      itemStyle: {
        color: '#fff',
        borderColor: '#4FB8F9',
        borderWidth: 2,
        borderType: 'solid',
      },
      lineStyle: {
        color: '#4FB8F9',
        width: 2,
      },
      data: myData.value2,
    },
    {
      // name: '占位背景',
      type: 'bar',
      itemStyle: {
        normal: {
          show: true,
          color: '#070f33',
        },
      },
      silent: true,
      barWidth: '50%',
      barGap: 0,
      data: [1000, 1000, 1000, 1000, 1000, 1000],
      animation: false,
    },
  ],
};
