/*
https://www.makeapie.com/editor.html?c=xmQZRm2IHw 参考的图形
*/

var trafficWay = [
  { name: '火车', value: 20 },
  { name: '飞机', value: 10 },
  { name: '客车', value: 30 },
  { name: '轮渡', value: 40 },
];

var data = [];
var color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'];
for (var i = 0; i < trafficWay.length; i++) {
  data.push(
    {
      value: trafficWay[i].value,
      name: trafficWay[i].name,
      itemStyle: {
        borderWidth: 5,
        shadowBlur: 15,
        borderColor: color[i],
        shadowColor: color[i],
      },
    },
    {
      value: 2,
      name: '',
      itemStyle: {
        color: 'rgba(0, 0, 0, 0)',
      },
    }
  );
}
var seriesOption = [
  {
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [105, 109],
    hoverAnimation: false,
    data: data,
  },
];
option = {
  backgroundColor: '#0A2E5D',
  color: color,
  toolbox: {
    show: false,
  },
  series: seriesOption,
};
