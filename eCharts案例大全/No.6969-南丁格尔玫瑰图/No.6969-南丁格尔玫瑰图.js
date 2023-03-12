option = {
 // color: [[]'#4956ff', '#2d82ff', '#2dc6ff', '#2fca95', '#f4d040'],
 backgroundColor: 'rgba(0,20,67,0)',
 tooltip: {
  trigger: 'item',
  formatter: '{a} <br/>{b} : {c} ({d}%)',
 },
 /* legend: {
					left: 'center',
					top: 'bottom',
					data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
				}, */
 toolbox: {
  show: true,
  feature: {
   mark: {
    show: true,
   },
   dataView: {
    show: true,
    readOnly: false,
   },
   magicType: {
    show: true,
    type: ['pie', 'funnel'],
   },
   restore: {
    show: true,
   },
   saveAsImage: {
    show: true,
   },
  },
 },
 series: [
  {
   name: '半径模式',
   type: 'pie',
   radius: [30, 100],
   center: ['50%', '50%'],
   roseType: 'radius',
   label: {
    show: false,
   },
   emphasis: {
    label: {
     show: true,
    },
   },
   itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0, 103, 255, 0.2)',
    shadowOffsetX: -5,
    shadowOffsetY: 5,
    color: function (params) {
     // 颜色定制显示（按顺序）
     var colorList = [
      ['#df2679', '#e69029'],
      ['#007be4', '#08b7a5'],
      ['#f1d72b', '#cf7f14'],
      ['#16e5cc', '#139dd6'],
      ['#23a8e6', '#4359ea'],
     ];
     let obj = {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
       {
        offset: 0,
        color: colorList[params.dataIndex][0], // 0% 处的颜色
       },
       {
        offset: 1,
        color: colorList[params.dataIndex][1], // 100% 处的颜色
       },
      ],
      global: false, // 缺省为 false
     };
     console.log(obj);
     return obj;
    },
   },
   data: [
    {
     value: 10,
     name: 'rose1',
    },
    {
     value: 15,
     name: 'rose2',
    },
    {
     value: 20,
     name: 'rose3',
    },
    {
     value: 25,
     name: 'rose4',
    },
    {
     value: 30,
     name: 'rose5',
    },
   ],
  },
  {
   type: 'pie',
   z: 1,
   radius: ['10%', '27%'],
   label: {
    show: false,
   },
   data: [
    {
     value: 100,
     itemStyle: {
      color: '#e4e7ff',
     },
    },
   ],
  },
  {
   type: 'pie',
   zlevel: 3,
   silent: true,
   radius: ['28%', '29%'],
   label: {
    normal: {
     show: false,
    },
   },
   labelLine: {
    normal: {
     show: false,
    },
   },
   data: _pie3(),
  },
 ],
};

function _pie3() {
 let dataArr = [];
 for (var i = 0; i < 100; i++) {
  if (i % 2 === 0) {
   dataArr.push({
    name: (i + 1).toString(),
    value: 25,
    itemStyle: {
     normal: {
      color: 'rgb(126,190,255)',
      borderWidth: 0,
      borderColor: 'rgba(0,0,0,0)',
     },
    },
   });
  } else {
   dataArr.push({
    name: (i + 1).toString(),
    value: 20,
    itemStyle: {
     normal: {
      color: 'rgba(0,0,0,0)',
      borderWidth: 0,
      borderColor: 'rgba(0,0,0,0)',
     },
    },
   });
  }
 }
 return dataArr;
}
