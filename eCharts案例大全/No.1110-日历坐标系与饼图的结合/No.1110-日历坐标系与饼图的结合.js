const cellSize = [80, 80];
const pieRadius = 30;
// 得到虚拟的散点数据
function getVirtulData() {
  let date = +echarts.number.parseDate('2021-01-01');
  let end = +echarts.number.parseDate('2021-03-01');
  let dayTime = 3600 * 24 * 1000;
  let data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.format.formatTime('yyyy-MM-dd', time),
      Math.floor(Math.random() * 500)
    ]);
  }
  return data;
}
// 在日历坐标系中根据每个散点得到一个饼图
function getPieSeries(scatterData, chart) {
  return scatterData.map(function (item, index) {
    var center = chart.convertToPixel('calendar', item);
    return {
      id: index + 'pie',
      type: 'pie',
      center: center,
      label: {
        formatter: '{c}',
        position: 'inside'
      },
      radius: pieRadius,
      data: [
        { name: '优', value: Math.round(Math.random() * 24) },
        { name: '良', value: Math.round(Math.random() * 24) },
        { name: '轻度污染', value: Math.round(Math.random() * 24) },
        { name: '中度污染', value: Math.round(Math.random() * 24) },
        { name: '重度污染', value: Math.round(Math.random() * 24) },
        { name: '严重污染', value: Math.round(Math.random() * 24) }
      ]
    };
  });
}

var scatterData = getVirtulData();
option = {
  tooltip: {},
  legend: {
        data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'],
        bottom: 20
    },
    color: [
        '#00E400', '#FFFF00', '#FF7E00', '#FF0000',
        '#99004C', '#7E0023'
    ],
  calendar: {
    top: 'middle',
    left: 'center',
    orient: 'vertical',
    cellSize: cellSize,
    yearLabel: {
      show: false,
      fontSize: 30
    },
    dayLabel: {
      margin: 20,
      firstDay: 1,
      nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    monthLabel: {
      show: true,
      nameMap: 'cn',
    },
    range: ['2021-01', '2021-02-28']
  },
  series: [
    {
      id: 'label',
      type: 'scatter',
      coordinateSystem: 'calendar',
      symbolSize: 0,
      label: {
        show: true,
        formatter: function (params) {
          return echarts.format.formatTime('dd', params.value[0]);
        },
        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
        fontSize: 14
      },
      data: scatterData
    }
  ]
};

setTimeout(function () {
  myChart.setOption({
    series: getPieSeries(scatterData, myChart)
  });
}, 10);
