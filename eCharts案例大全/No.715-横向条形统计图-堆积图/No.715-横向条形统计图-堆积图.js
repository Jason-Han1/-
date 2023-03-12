const className = ['导入期', '成长期', '成熟期', '衰退期'].reverse();
const cycleName = ['宽带类', '家庭终端', '手机终端', '套餐合约', '权益', '新业务'];
const data1 = [
 [150, 100, 170, 200],
 [50, 160, 90, 200],
 [90, 100, 110, 100],
 [130, 60, 170, 200],
 [70, 260, 170, 200],
 [120, 260, 170, 50],
];
const colorList = ['#5179ff', '#18c2bc', '#33b4ff', '#fda124', '#ff4b55', '#68d568'];
const colorList2 = ['#7d9bff', '#4cd1c3', '#56d1ff', '#ffd55e', '#ff9ca2', '#abe7ab'];
const defaultData = [1000, 1000, 1000, 1000, 1000, 1000];
const sumList = [];
className.forEach((item, index) => {
 let sum = 0;
 data1.forEach((value) => {
  sum += value[index];
 });
 sumList.push(sum);
});
const series = [];
cycleName.forEach((item, index) => {
 series.push({
  name: item,
  type: 'bar',
  stack: '总量',
  zlevel: 1,
  itemStyle: {
   normal: {
    barBorderRadius: 10,
    color: (params) => {
     const i = JSON.parse(JSON.stringify(index));
     // return colorList[i]
     return new echarts.graphic.LinearGradient(
      0,
      0,
      1,
      0,
      [
       { offset: 0, color: colorList[i] },
       { offset: 1, color: colorList2[i] },
      ],
      false
     );
    },
   },
  },
  barWidth: 10,
  data: data1[index],
 });
});
series.push({
 name: '背景',
 type: 'bar',
 barWidth: 10,
 barGap: '-100%',
 data: defaultData,
 itemStyle: {
  normal: {
   color: '#e9efff',
   barBorderRadius: 0,
  },
 },
 axisLabel: {
  show: true,
 },
});
option = {
 color: colorList,
 backgroundColor: '#fff',
 legend: {
  show: true,
  icon: 'circle',
  itemHeight: 12,
  itemWidth: 12,
  textStyle: {
   fontSize: 12,
   color: '#999999',
  },
  top: 10,
  itemGap: 10, // 垂直间距
  y: 'top', // 延Y轴居中
  data: cycleName,
 },
 grid: {
  left: '5%',
  right: '5%',
  bottom: '5%',
  top: '10%',
  containLabel: true,
 },
 tooltip: {
  trigger: 'axis',
  axisPointer: {
   type: 'none',
  },
  formatter: function (params) {
   params.pop();
   let str =
    '<div style="text-align: left;color:#8994a5;">' +
    params[0].name +
    '</div><div style="text-align: left;line-height: 25px;">';
   params.forEach((item, index) => {
    str += item.marker + item.seriesName + ':' + item.value + '<br/>';
   });
   str += '</div>';
   return str;
  },
 },

 xAxis: {
  show: true,
  type: 'value',
  max: 1000,
  splitLine: {
   show: true,
   lineStyle: {
    type: 'dashed',
   },
  },
 },
 yAxis: [
  {
   type: 'category',
   inverse: true,
   axisLabel: {
    show: true,
    textStyle: {
     color: '#4e5663',
    },
   },
   splitLine: {
    show: false,
   },
   axisTick: {
    show: false,
   },
   axisLine: {
    show: false,
   },
   data: className,
  },
  {
   triggerEvent: true,
   show: true,
   inverse: true,
   data: sumList,
   axisLine: {
    show: false,
   },
   splitLine: {
    show: false,
   },
   axisTick: {
    show: false,
   },
   axisLabel: {
    interval: 0,
    color: ['#fff'],
    align: 'left',
    verticalAlign: 'center',
    fontSize: 14,
    formatter: function (value, index) {
     return value;
    },
   },
  },
 ],
 series: series,
};
