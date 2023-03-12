var oneData = ['材料A1', '材料A2', '材料B1', '材料B2', '材料C1', '材料C2'];
var secendData = ['部件A', '部件B', '部件C'];
var lastData = ['成品1', '成品2'];
var sourceData = [
  '材料A1',
  '材料A2',
  '材料B1',
  '材料B2',
  '材料C1',
  '材料C2',
  '材料A1',
  '部件A',
  '部件A',
  '部件B',
  '部件B',
  '部件C',
  '材料C2',
];
var targetData = [
  '部件A',
  '部件A',
  '部件B',
  '部件B',
  '部件C',
  null,
  '部件B',
  '成品1',
  '成品2',
  '成品1',
  '成品2',
  '成品2',
  '成品2',
];
var description = [
  '加工A1',
  '加工A2',
  '加工B1',
  '加工B2',
  '加工C1',
  '加工C2',
  '合成A1',
  '组装',
  '组装',
  '组装',
  '组装',
  '组装',
  '镶嵌',
];
var legendData = ['材料', '部件', '产品'];
var links = [];
var data1 = [],
  data2 = [],
  data3 = [];
var layout = 'none';
//第一层数据循环
for (var i = 0; i < oneData.length; i++) {
  data1.push({
    name: oneData[i],
    symbolSize: [30, 20],
    x: 0,
    y: i * (100 / oneData.length),
    //value: [0, i * (100 / oneData.length)],
    category: 0,
    linkTargetName: '部件A',
  });
}
//第二层数据循环
for (var i = 0; i < secendData.length; i++) {
  data2.push({
    name: secendData[i],
    symbolSize: [30, 20],
    x: 30,
    y: i * (100 / secendData.length),
    //value: [30, i * (100 / secendData.length)],
    category: 1,
  });
}
//第二层数据循环
for (var i = 0; i < lastData.length; i++) {
  data3.push({
    name: lastData[i],
    symbolSize: [30, 20],
    x: 60,
    y: i * (100 / lastData.length),
    value: [60, i * (100 / lastData.length)],
    category: 2,
  });
}
//.....多层数据绑定出现时，采用双重循环绑定数据

//连接线数据建立
for (var i = 0; i < sourceData.length; i++) {
  links.push({
    source: sourceData[i],
    label: {
      show: true,
      formatter: '{c}',
    },
    value: description[i] === null ? '' : description[i],
    target: targetData[i] === null ? '' : targetData[i],
  });
}

var datalist = data1.concat(data2, data3);
option = {
  title: {
    text: '层级结构图',
    subtext: 'Default layout',
    top: 'bottom',
    left: 'right',
  },
  tooltip: {},
  legend: [
    {
      data: legendData,
    },
  ],
  animationDuration: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      name: '层级结构图',
      type: 'graph',
      layout: layout, //布局方式：force引力布局
      draggable: true, //可拖动
      focusNodeAdjacency: true,
      roam: true,
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [0, 30],
      scaleLimit: {
            //所属组件的z分层，z值小的图形会被z值大的图形覆盖
            min: 0.5, //最小的缩放值
            max: 9 //最大的缩放值
        },
      label: {
        normal: {
          position: 'bottom',
          show: true,
          textStyle: {
            fontSize: 12,
          },
        },
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3,
      },
      data: datalist,
      links: links,
      categories: [
        {
          name: '材料',
        },
        {
          name: '部件',
        },
        {
          name: '产品',
        },
      ],
    },
  ],
};
