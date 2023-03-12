//风向频率数组，按顺时针方向，上北下南左西右东，16方位
let percentList = [1, 3, 1, 4, 4, 6, 10, 5, 6, 9, 15, 10, 8, 13, 2, 3, 1, 3, 1];
//风向 16方位
let namelist = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
//数据
const seriesData = [];
for (let i = 0; i <= namelist.length; i++) {
  var jiaodu = (360 / namelist.length) * i;
  seriesData.push([percentList[i], jiaodu]); //[径向，角度]
}
console.log(seriesData);
option = {
  title: {
    text: '风向玫瑰图',
    subtext: '风向频率玫瑰图',
  },
  legend: {
    data: ['line'],
  },
  polar: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  angleAxis: {
    type: 'value',
    startAngle: 90,
    min: 0, //最小刻度
    max: 360, //最大刻度
    interval: 360 / namelist.length, //间隔刻度 16方位间隔22.5，可改8方位
    axisLabel: {
      formatter: function (value, index) {
        return namelist[index];
      },
    },
  },
  radiusAxis: {},
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      data: seriesData,
    },
  ],
};
