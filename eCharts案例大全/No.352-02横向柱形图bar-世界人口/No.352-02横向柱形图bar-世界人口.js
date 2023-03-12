/*
横向柱形图的本质是：X轴的type: 'value'；Y轴的type: 'category',仅此而已
多个数据就配多个series
*/
const backgroundColor = '#101736';
const color =  ['#ff9500', '#02d8f9', '#027fff']; //2个以上的series就需要用到color数组
const color2 = ['#4aa4ff', '#ffb349', '#4aa4ff'];
const title = {
  show: true,
  text: '世界人口数量',
  textStyle: {
    color: '#fff',
    fontSize: 16,
  },
  padding: 0,
  top: 35,
  left: 40,
};
const legend = {
  show: true,
  //data，就是取得每个series里面的name属性。
  orient: 'horizontal',
  icon: 'circle', //图例形状
  padding: 0,
  top: 35,
  right: 40,
  itemWidth: 14, //小圆点宽度
  itemHeight: 14, // 小圆点高度
  itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
  textStyle: {
    fontSize: 14,
    color: '#00E4FF',
  },
};
const tooltip = {
  show: true,
  trigger: 'axis',
  axisPointer: {
    type: 'shadow',
  },
};
const commonSeries = {
  type: 'bar',
  barWidth: '30%', //柱条的宽度，不设时自适应。
  itemStyle: {
    //定义柱子的样式
    borderRadius: [0, 20, 20, 0], //柱子圆角[上右下左]，也可以统一值。
    // color:'red' //不写color，每个series取上面定义的全局color，很好的啊
    //自己来自定义color
    color: (params) => {
      return {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: color2[params.seriesIndex], // 0% 处的颜色 rgba(0,0,0,.1)
          },
          {
            offset: 1,
            color: color[params.seriesIndex], // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      };
    },
  },
  showBackground: true, //柱子是否带有背景，默认是没有的
  backgroundStyle: {
    //只有showBackground=true，设置backgroundStyle才会有效果
    color: 'rgba(180, 180, 180, .2)', //
    borderRadius: [0, 20, 20, 0],
  },
};
let series = [
  { name: '2011', data: [18203, 23489, 29034, 104970, 131744, 630230] },
  { name: '2012', data: [19325, 23438, 31000, 121594, 134141, 681807] },
];
series = series.map((item) => ({
  ...item,
  ...commonSeries,
}));
option = {
  backgroundColor,
  color,
  title,
  legend,
  tooltip,
  xAxis: {
    type: 'value',
    axisLine: {
      show: true, //显示Y轴
    },
    axisTick: {
      show: false, //不显示小的刻度线
    },
    splitLine: {
      show: false, //不显示竖向分割线
    },
  },
  yAxis: {
    type: 'category',
    axisLine: {
      show: true, //显示X轴
    },
    axisTick: {
      show: false, //不显示小的刻度线
    },
    splitLine: {
      show: false, //不显示横向分割线
    },
    data: ['巴西', '尼西亚', '美国', '印度', '中国', '全球'],
  },
  series,
};
//图表自动轮播高亮显示函数 myChart直接用
const animation = (delay = 3000) => {
  let currentIndex = -1;
  const length = option.series[0].data.length;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % length;
    // 高亮当前图形
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,

      dataIndex: currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
      type: 'showTip',

      seriesIndex: 0,
      dataIndex: currentIndex,
    });
  }, delay);
};
// animation(10000)
