data = [
 {
  name: '本科',
  value: 754,
 },
 {
  name: '硕士',
  value: 611,
 },
 {
  name: '大专',
  value: 400,
 },
 {
  name: '博士',
  value: 200,
 },
 {
  name: '小学',
  value: 100,
 },
];
let sumValue = 1000;
let optionData = getData(data);
function getData(data) {
 let res = {
  series: [],
  yAxis: [],
 };
 for (let i = 0; i < data.length; i++) {
  res.series.push({
   name: '学历',
   type: 'pie',
   clockWise: true,
   z: 2,
   hoverAnimation: false,
   radius: [100 - i * 13 + '%', 95 - i * 13 + '%'],
   center: ['50%', '50%'],
   label: {
    show: false,
   },
   labelLine: {
    show: false,
   },
   data: [
    {
     value: data[i].value,
     name: data[i].name,
    },
    {
     value: sumValue - data[i].value,
     name: '',
     itemStyle: {
      color: 'rgba(0,0,0,0)',
      borderWidth: 0,
     },
     tooltip: {
      show: false,
     },
     label: {
      show: false,
     },
     hoverAnimation: false,
    },
   ],
  });
  res.series.push({
   name: '背景线',
   type: 'pie',
   silent: true,
   z: 1,
   clockWise: true,
   hoverAnimation: false,
   radius: [98 - i * 13 + '%', 96 - i * 13 + '%'],
   center: ['50%', '50%'],
   label: {
    show: false,
   },
   itemStyle: {
    label: {
     show: false,
    },
    labelLine: {
     show: false,
    },
    borderWidth: 5,
   },
   data: [
    {
     value: 100,
     itemStyle: {
      color: 'rgba(255,255,255,.2)',
      borderWidth: 0,
     },
     tooltip: {
      show: false,
     },
     hoverAnimation: false,
    },
   ],
  });
  res.yAxis.push(data[i].name);
 }
 return res;
}
option = {
 backgroundColor: 'RGB(8,20,67)',
 color: [
  {
   type: 'linear',
   x: 0,
   y: 0,
   x2: 1,
   y2: 1,
   colorStops: [
    {
     offset: 0,
     color: 'rgba(184, 237, 255, 0.2)',
    },
    {
     offset: 1,
     color: 'rgba(184, 237, 255, 1)',
    },
   ],
   global: false,
  },
  {
   type: 'linear',
   x: 0,
   y: 0,
   x2: 1,
   y2: 1,
   colorStops: [
    {
     offset: 0,
     color: 'rgba(255, 126, 32, .2)',
    },
    {
     offset: 1,
     color: 'rgba(255, 126, 32, 1)',
    },
   ],
   global: false,
  },
  {
   type: 'linear',
   x: 0,
   y: 0,
   x2: 1,
   y2: 1,
   colorStops: [
    {
     offset: 0,
     color: 'rgba(237, 71, 20, .2)',
    },
    {
     offset: 1,
     color: 'rgba(237, 71, 20, 1)',
    },
   ],
   global: false,
  },
  {
   type: 'linear',
   x: 0,
   y: 0,
   x2: 1,
   y2: 1,
   colorStops: [
    {
     offset: 0,
     color: 'rgba(255, 174, 32, .2)',
    },
    {
     offset: 1,
     color: 'rgba(255, 174, 32, 1)',
    },
   ],
   global: false,
  },
  {
   type: 'linear',
   x: 0,
   y: 0,
   x2: 1,
   y2: 1,
   colorStops: [
    {
     offset: 0,
     color: 'rgba(189, 152, 119, .2)',
    },
    {
     offset: 1,
     color: 'rgba(189, 152, 119, 1)',
    },
   ],
   global: false,
  },
 ],
 grid: {
  top: '16%',
  bottom: '54%',
  left: '50%',
  containLabel: false,
 },
 yAxis: [
  {
   type: 'category',
   inverse: true,
   z: 3,
   axisLine: {
    show: false,
   },
   axisTick: {
    show: false,
   },
   axisLabel: {
    show: false,
   },
   data: optionData.yAxis,
  },
 ],
 xAxis: [
  {
   show: false,
  },
 ],
 series: optionData.series,
};
