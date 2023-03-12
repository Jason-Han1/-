// 获取设置图形的颜色样式
function getCircle(option = {}) {
  option.color = option.color || [];
  return {
    shadowBlur: 10,
    shadowColor: option.shadowColor || '#D65CEA',
    color: {
      type: 'radial', // 径向渐变
      x: 0.5, // 圆心坐标（中心）
      y: 0.5,
      r: 0.5, // 半径长度
      colorStops: [
        {
          offset: 0.1,
          color: option.color[0] || '#FCA7FF', // offset：坐标为0处的颜色
        },
        {
          offset: 1,
          color: option.color[1] || '#F772FB', // offset：坐标为1处的颜色
        },
      ],
    },
  };
}

// 计算线条箭头，根据source 样式设置箭头颜色
function calcLines(links, seriesData) {
  let obj = {};
  links.forEach((v) => {
    if (obj[v.source]) {
      obj[v.source].data.push({
        coords: [seriesData[v.source].value, seriesData[v.target].value],
      });
    } else {
      obj[v.source] = {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        z: 1,
        zlevel: 2,
        animation: false,
        effect: {
          show: true,
          period: 10,
          trailLength: 0.01,
          symbolSize: 8,
          symbol: 'arrow',
          loop: true,
          //   color: "rgba(55,155,255,0.9)"
          color: seriesData[v.source].itemStyle.shadowColor,
        },
        // lines 线条样式，echarts 5.0+ 不生效时可以使用 方法1
        // lineStyle: {
        //     opacity: 0.9,
        //     width: 1,
        //     curveness: 0.3,
        //     color: seriesData[v.source].itemStyle.shadowColor,
        // },
        lineStyle: {
          width: 0,
          curveness: 0.3,
        },
        data: [
          {
            coords: [seriesData[v.source].value, seriesData[v.target].value],
          },
        ],
      };
    }
  });
  let arr = Object.keys(obj).map((v) => obj[v]);

  return arr;
}

// 获取几种基础颜色图形
let pinkCircle = getCircle();
let cyanCircle = getCircle({
  color: ['#42D9D6', '#1EA9A6'],
  shadowColor: '#5EF1E7',
});
let blueCircle = getCircle({
  color: ['#89C4FF', '#449BF3'],
  shadowColor: '#60BDF6',
});
let purpleCircle = getCircle({
  color: ['#B1A7FF', '#7161F7'],
  shadowColor: '#9487FF',
});
let orangeCircle = getCircle({
  color: ['#FFB7A5', '#EC7E64'],
  shadowColor: '#FA9E88',
});
let yellowCircle = getCircle({
  color: ['#FFD4A8', '#FDAC59'],
  shadowColor: '#FCCD84',
});

// 连接关联数据 根据index 下标连接
const links = [
  { source: 0, target: 1 },
  { source: 2, target: 0 },
  { source: 0, target: 3 },
  { source: 4, target: 0 },
  { source: 2, target: 1 },
  { source: 2, target: 3 },
  { source: 5, target: 3 },
  { source: 3, target: 1 },
  { source: 5, target: 4 },
  { source: 0, target: 5 },
  { source: 6, target: 0 },
  { source: 7, target: 0 },
];

// 图形数据
const seriesData = [
  {
    name: '北京分院',
    symbolSize: 50,
    value: [20, 40],
    itemStyle: yellowCircle,
  },
  {
    name: '中国计量科学研究院',
    symbolSize: 120,
    value: [-20, 30],
    itemStyle: pinkCircle,
  },
  {
    name: '湖北计量中心',
    symbolSize: 50,
    value: [0, 55],
    itemStyle: purpleCircle,
  },
  {
    name: '国网计量中心',
    symbolSize: 90,
    value: [0, 30],
    itemStyle: cyanCircle,
  },
  {
    name: '江西计量中心',
    symbolSize: 50,
    value: [36, 39],
    itemStyle: orangeCircle,
  },
  {
    name: '武汉分院',
    symbolSize: 50,
    value: [5, 5],
    itemStyle: blueCircle,
  },
  {
    name: '辽宁计量中心',
    symbolSize: 50,
    value: [35, 55],
    itemStyle: cyanCircle,
  },
  {
    name: '四川计量中心',
    symbolSize: 50,
    value: [30, 15],
    itemStyle: cyanCircle,
  },
];

// 根据图形样式，创建图例样式
const categories = seriesData.map((v) => {
  return {
    name: v.name,
    itemStyle: {
      color: v.itemStyle.color,
    },
  };
});

option = {
  xAxis: {
    show: false,
    type: 'value',
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  legend: {
    show: true,
    top: '10',
    left: 'center',
    textStyle: { color: 'rgba(255,255,255,.9)' },
    itemWidth: 8,
    itemHeight: 8,
  },
  series: [
    {
      type: 'graph',
      layout: 'none', // 图的布局
      zlevel: 3,
      symbolSize: 90,
      coordinateSystem: 'cartesian2d',
      categories: categories,
      label: {
        show: true,
        position: 'bottom',
        textStyle: { fontSize: 14, color: 'rgba(255,255,255,.9)' },
      },
      data: seriesData,
      links: links,
      //   兼容echarts 5.0+ 线条样式 方法2
      //   links: links.map(v => {
      //       v.lineStyle = {
      //         color: seriesData[v.source].itemStyle.color
      //       }
      //       return v;
      //   }),
      lineStyle: {
        opacity: 1,
        width: 1.5,
        curveness: 0.3, // 曲线弯曲度
        // 根据连接线开始节点颜色设置，目前ehcarts5.0+ 不支持
        // 可以在 上一个属性 links 里指定样式，也可以在type: lines seriesItem 里指定线条样式 ↑↑↑↑↑
        color: 'source',
      },
    },
    ...calcLines(links, seriesData),
  ],
  backgroundColor: '#000000',
};
