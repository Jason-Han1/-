var data = [
 '唐山',
 '张家口',
 '秦皇岛',
 '承德',
 '廊坊',
 '送变电',
 '检修',
 '唐山',
 '张家口',
 '秦皇岛',
 '承德',
 '廊坊',
 '送变电',
 '检修',
 '承德',
 '廊坊',
 '送变电',
 '检修',
 '唐山',
 '张家口',
 '秦皇岛',
 '承德',
 '廊坊',
 '送变电',
 '检修',
];
var value = [40, 80, 60, 20, 30, 40, 80, 40, 80, 60, 20, 30, 40, 80];

option = {
 backgroundColor: '#000',
 xAxis: {
  data: data,
  position: 'bottom',
  type: 'category',
  axisLine: {
   show: true,
   lineStyle: {
    color: '#ECF1F6',
   },
  },
  axisTick: {
   show: false,
  },
  axisLabel: {
   show: true,
   rotate: 0,
   fontSize: 12,
   color: '#1EC2FF',
  },
  splitLine: {
   show: true,
   lineStyle: {
    color: ['#ECF1F6', '#ECF1F6'],
    width: 0,
    type: 'dashed',
   },
  },
  gridIndex: 0,
 },
 yAxis: {
  axisLine: {
   show: false,
  },
  axisTick: {
   show: false,
  },
  axisLabel: {
   show: true,
   rotate: 0,
   fontSize: 12,
   color: '#1EC2FF',
  },
  splitLine: {
   show: true,
   lineStyle: {
    color: ['#195FB4'],
    width: 1,
    type: 'dashed',
   },
  },
 },
 series: [
  {
   //背景柱状图
   type: 'bar',
   itemStyle: {
    normal: {
     barBorderRadius: [0, 0, 0, 0],
     color: 'rgba(0, 169, 217, 0.2)',
     borderColor: '#34D2FF',
     borderWidth: 1
    },
   },
   data: value,
   z: 0,
  },
 ],
};
