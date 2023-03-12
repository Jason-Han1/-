// 节点图标
let sy = 'image://' + '/asset/get/s/data-1638861140286-vsToDvgiA.png';
let slaveSymbol = 'image://' + '/asset/get/s/data-1638861620745-fiCrC1Vxt.png';
let topDown = 'image://' + '/asset/get/s/data-1638861388640-2q0tSpfatW.png';
let topBenbu = 'image://' + '/asset/get/s/data-1638861450634-bSzdnDaVJ.png';
let topGreen = 'image://' + '/asset/get/s/data-1638861577274-81LygLOwJ.png';
let topBlue = 'image://' + '/asset/get/s/data-1638861460862-mtC6_15KG.png';
let linksArray = [
  {
    source: '阿坝',
    target: '500KV 谭家湾',
    lineStyle: { normal: { color: '#AA89BD' } },
  },
  {
    source: '雅安',
    target: '500KV 雅安',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '雅安',
    target: '500KV 雅安',
    lineStyle: { normal: { curveness: -0.06, color: '#ACDAE2' } },
  },
  {
    source: '雅安',
    target: '500KV 尖山',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '甘孜',
    target: '500KV 尖山',
    lineStyle: { normal: { color: '#AA89BD' } },
  },
  {
    source: '500KV 尖山',
    target: '南站 PE\nSR8808',
    lineStyle: { normal: { curveness: -0.06, color: '#AA89BD' } },
  },
  {
    source: '西昌',
    target: '500KV 雅安',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '西昌',
    target: '500KV 尖山',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '攀枝花',
    target: '500KV 尖山',
    lineStyle: {
      normal: { curveness: -0.1, color: 'rgba(126,206,244,0.5)' },
    },
  },
  {
    source: '攀枝花',
    target: '500KV 尖山',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '眉山',
    target: '500KV 尖山',
    lineStyle: {
      normal: { curveness: -0.1, color: 'rgba(126,206,244,0.5)' },
    },
  },
  {
    source: '眉山',
    target: '500KV 尖山',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '乐山',
    target: '500KV 尖山',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '乐山',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '资阳',
    target: '500KV 尖山',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '资阳',
    target: '500KV 尖山',
    lineStyle: {
      normal: { curveness: 0.1, color: 'rgba(126,206,244,0.5)' },
    },
  },
  {
    source: '资阳',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '内江',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '内江',
    target: '500KV 洪沟',
    lineStyle: {
      normal: { curveness: 0.06, color: 'rgba(126,206,244,0.5)' },
    },
  },
  {
    source: '宜宾',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '宜宾',
    target: '500KV 尖山',
    lineStyle: { normal: { curveness: 0.06, color: '#ACDAE2' } },
  },
  {
    source: '泸州',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '泸州',
    target: '500KV 洪沟',
    lineStyle: { normal: { curveness: 0.1, color: '#ACDAE2' } },
  },
  {
    source: '自贡',
    target: '500KV 尖山',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '自贡',
    target: '500KV 洪沟',
    lineStyle: { normal: { curveness: 0.1, color: '#ACDAE2' } },
  },
  {
    source: '自贡',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '绵阳',
    target: '500KV 谭家湾',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '绵阳',
    target: '500KV 尖山',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '德阳',
    target: '500KV 谭家湾',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '德阳',
    target: '500KV 谭家湾',
    lineStyle: { normal: { curveness: -0.1, color: '#ACDAE2' } },
  },
  {
    source: '广元',
    target: '500KV 谭家湾',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '广元',
    target: '500KV 谭家湾',
    lineStyle: { normal: { curveness: -0.1, color: '#ACDAE2' } },
  },
  {
    source: '巴中',
    target: '500KV 南充',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '巴中',
    target: '500KV 谭家湾',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '达州',
    target: '500KV 南充',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '达州',
    target: '500KV 南充',
    lineStyle: { normal: { curveness: -0.1, color: '#ACDAE2' } },
  },
  {
    source: '广安',
    target: '500KV 南充',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '广安',
    target: '500KV 南充',
    lineStyle: { normal: { curveness: -0.1, color: '#ACDAE2' } },
  },
  {
    source: '遂宁',
    target: '500KV 南充',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '遂宁',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: '#ACDAE2' } },
  },
  {
    source: '南充',
    target: '500KV 南充',
    lineStyle: { normal: { color: 'rgba(126,206,244,0.5)' } },
  },
  {
    source: '500KV 尖山',
    target: '500KV 雅安',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 雅安',
    target: '500KV 谭家湾',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 谭家湾',
    target: '500KV 南充',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 南充',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 自贡',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 洪沟',
    target: '500KV 尖山',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 尖山',
    target: '省公司 R2\nNE40E-X16',
    lineStyle: {
      normal: { curveness: -0.1, color: '#52C7FF', width: 4 },
    },
  },
  {
    source: '500KV 洪沟',
    target: '省公司 R2\nNE40E-X16',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '南充',
    target: '500KV 洪沟',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 洪沟',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 雅安',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 谭家湾',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 谭家湾',
    target: '本部',
    lineStyle: {
      normal: { curveness: 0.1, color: '#52C7FF', width: 4 },
    },
  },
  {
    source: '500KV 南充',
    target: '南充第二汇聚点\nPE NE40E-X8',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 南充',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '500KV 南充',
    target: '省公司 R2\nNE40E-X16',
    lineStyle: { normal: { color: '#52C7FF', width: 4 } },
  },
  {
    source: '成都',
    target: '天府新区',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '省公司 R2\nNE40E-X16',
    target: '天府新区',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '省公司 R1\nNE40E-X16',
    target: '天府新区',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '成都',
    target: '南站 PE\nSR8808',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '南站 PE\nSR8808',
    target: '本部',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '省公司 R2\nNE40E-X16',
    target: 'NE40E-X8\nGRR/VRR2',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '省公司 R2\nNE40E-X16',
    target: 'NE40E-X8\nGRR/VRR1',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '省公司 R2\nNE40E-X16',
    target: '国网侧 PE2\nNE40E-X8',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: 'NE40E-X8\nGRR/VRR2',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: 'NE40E-X8\nGRR/VRR2',
    target: 'NE40E-X8\nGRR/VRR1',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: 'NE40E-X8\nGRR/VRR1',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: 'NE40E-X8\nGRR/VRR1',
    target: '国网侧 PE1\nNE40E-X8',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: 'NE40E-X8\nGRR/VRR3',
    target: '南充第二汇聚点\nPE NE40E-X8',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: 'NE40E-X8\nGRR/VRR3',
    target: '国网侧 PE3\nNE40E-X8',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '南充',
    target: 'NE40E-X8\nGRR/VRR3',
    lineStyle: { normal: { color: '#89C997', width: 3 } },
  },
  {
    source: '南充',
    target: '南充第二汇聚点\nPE NE40E-X8',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '南充第二汇聚点\nPE NE40E-X8',
    target: '国网侧 PE3\nNE40E-X8',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '省公司 R1\nNE40E-X16',
    target: '国网侧 PE1\nNE40E-X8',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '省公司 R1\nNE40E-X16',
    target: '省公司 R2\nNE40E-X16',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '省公司 R1\nNE40E-X16',
    target: '本部',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '省公司 R2\nNE40E-X16',
    target: '本部',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '成都',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '成都',
    target: '省公司 R2\nNE40E-X16',
    lineStyle: { normal: { color: '#FFF799', width: 4 } },
  },
  {
    source: '南充',
    target: '南站 PE\nSR8808',
    lineStyle: { normal: { color: '#FBB8A0', width: 2 } },
  },
  {
    source: '阿坝',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: ' #B1B075', width: 2 } },
  },
  {
    source: '甘孜',
    target: '省公司 R1\nNE40E-X16',
    lineStyle: { normal: { color: ' #B1B075', width: 2 } },
  },
];
let nodeLeftName = ['阿坝', '雅安', '甘孜', '西昌', '攀枝花', '眉山', '乐山'];
let nodeTopName=['绵阳','德阳','广元','巴中','达州','广安','遂宁','南充'];
let nodeBottomName=['资阳','内江','宜宾','泸州','自贡','天府新区','成都','本部'];
// 左边
let nodeLeft = [];
nodeLeftName.map((item, index) => {
  nodeLeft.push({
    name: item,
    value: [10, 128 - index * 16],
    symbol: sy,
    symbolSize: [76, 53],
    label: {
      show: true,
      position: 'inside', // inside
      offset: [-55, 0], // 偏移量
      formatter: function (item) {
        return item.data.name;
      },
    },
  });
});
// 顶部
let nodeTop=[]
nodeTopName.map((item,index)=>{
  nodeTop.push({
    name: item,
    symbol: slaveSymbol,
    symbolSize: [53, 76],
    value: [58+index*46, 145],
    label: {
      show: true,
      position: 'inside', // inside
      offset: [0, -45], // 偏移量
      formatter: function (item) {
        return item.data.name;
      },
    },
  },)
})
// 底部
let nodeBottom=[];
nodeBottomName.map((item,index)=>{
nodeBottom.push({
    name:item,
    symbol: item=='本部'?topBenbu:topDown,
    symbolSize:item=='本部'? [97, 31]:[53,76],
    value:item=='本部'?[388, 11]: [59+index*43, 18],
})
})
//中间1
let middleOne = [
  {
    name: '500KV 谭家湾',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [180, 99],
  },
  {
    name: '500KV 雅安',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [179, 83],
  },
  {
    name: '500KV 尖山',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [179, 67],
  },
];
// 中间2
let middleTwo = [
  {
    name: '500KV 南充',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [252, 99],
  },
  {
    name: '500KV 洪沟',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [252, 67],
  },
];
// 中间3
let middleThree = [
  {
    name: '南站 PE\nSR8808',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [388, 35],
  },
];
// 右边1
let nodeRightOne = [
  {
    name: 'NE40E-X8\nGRR/VRR2',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [452, 46],
  },
  {
    name: '省公司 R2\nNE40E-X16',
    symbolSize: [24, 27],
    symbol: topGreen,
    value: [431, 51],
  },
  {
    name: '国网侧 PE2\nNE40E-X8',
    symbol: topBlue,
    symbolSize: [24, 27],
    value: [476, 57],
  },
];
// 右边2
let nodeRightTow = [
  {
    name: 'NE40E-X8\nGRR/VRR1',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [451, 72],
  },
  {
    name: '省公司 R1\nNE40E-X16',
    // coordConfig: {level: 2},
    symbolSize: [24, 27],
    symbol: topGreen,
    value: [432, 80],
  },
  {
    name: '国网侧 PE1\nNE40E-X8',
    symbol: topBlue,
    symbolSize: [24, 27],
    value: [476, 82],
  },
];
// 右边3
let nodeRightThree = [
  {
    name: '南充第二汇聚点\nPE NE40E-X8',
    symbol: topGreen,
    symbolSize: [24, 27],
    value: [431, 99],
  },
  {
    name: 'NE40E-X8\nGRR/VRR3',
    symbolSize: [24, 27],
    symbol: topGreen,
    value: [447, 115],
  },
  {
    name: '国网侧 PE3\nNE40E-X8',
    symbol: topBlue,
    symbolSize: [24, 27],
    value: [476, 97],
  },
];

// 节点数据
let nodeDataList = [
  ...nodeLeft,
  // ...middleOne,
  // ...middleTwo,
  // ...middleThree,
  // ...nodeRightOne,
  // ...nodeRightTow,
  // ...nodeRightThree,
  ...nodeBottom,
  ...nodeTop,
];
var option = {
  backgroundColor: '#102A46',
  title: {
    text: '',
    top: 'top',
    left: 'center',
    show: false,
  },
  grid: {
    left: '3.5%',
    right: '0%',
    bottom: '0%',
    containLabel: true,
  },
  itemStyle: {
    normal: {
      color: '#67C23A',
    },
    shadowBlur: 0,
  },
  textStyle: {
    color: '#fff',
    fontSize: 4,
    fontWeight: 600,
  },
  legend: [
    {
      formatter: function (name) {
        return echarts.format.truncateText(name, 200, '12px', '…');
      },
      tooltip: {
        show: true,
      },
      selectedMode: 'false',
      bottom: 20,
    },
  ],
  animationDuration: 500,
  animationEasingUpdate: 'quinticInOut',
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  series: [
    {
      type: 'graph',
      coordinateSystem: 'cartesian2d',
      legendHoverLink: true,
      hoverAnimation: true,
      nodeScaleRatio: true,
      //建头
      edgeSymbol: ['circle', 'none'],
      edgeSymbolSize: [2, 15],
      edgeLabel: {
        show: true,
        normal: {
          show: false,
          position: 'middle',
          textStyle: {
            fontSize: 12,
          },
          formatter: '{c}',
        },
      },
      focusNodeAdjacency: true,
      roam: true,
      //圆形上面的文字
      label: {
        normal: {
          position: 'bottom',
          show: true,
          textStyle: {
            fontSize: 12,
          },
        },
      },
      itemStyle: {
        normal: {
          color: '#409eff',
        },
        shadowBlur: 0,
      },
      lineStyle: {
        normal: {
          width: 0,
          shadowColor: 'none',
          color: 'transparent',
        },
      },
      data: nodeDataList,
      // links: linksArray,
      lineStyle: {
        opacity: 1,
        width: 2,
        curveness: 0,
      },
    },
  ],
};
