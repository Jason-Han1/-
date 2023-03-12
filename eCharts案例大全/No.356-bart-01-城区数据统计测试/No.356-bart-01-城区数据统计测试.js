const backgroundColor = '#101736';
const color = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']; //2个以上的series就需要用到color数组
const title = {
  show: false,
  text: '城区数据统计测试',
  textStyle: {
    color: '#fff',
    fontSize: 16,
  },
  padding: 0,
  top: 35,
  left: 40,
};
const legend = {
  show: false,
  //data，就是取得每个series里面的name属性。
  orient: 'vertical',
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

option = {
  backgroundColor,
  color,
  title,
  legend,
  tooltip,
  xAxis: {
    type: 'category',
    axisLine: {
      show: true, //显示Y轴
    },
    axisTick: {
      show: false, //不显示小的刻度线
    },
    splitLine: {
      show: false, //不显示竖向分割线
    },
    data: ['德州', '德城区', '陵城区', '禹城市', '乐陵市', '临邑县', '平原县', '夏津县'],
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true, //显示X轴
    },
    axisTick: {
      show: false, //不显示小的刻度线
    },
    splitLine: {
      show: false, //不显示横向分割线
    },
  },
  series: [
    {
      name: '城区数据',
      data: [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349],
      type: 'bar',
      barWidth: '60%', //柱条的宽度，不设时自适应。
      itemStyle: {
        //定义柱子的样式
        // color:params=>color[params.dataIndex],//定义每根柱子的不同颜色(不渐变)
        //不同柱子颜色渐变
        color: (params) => ({
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: color[params.dataIndex], // 柱子最高度% 处的颜色
            },
            {
              offset: 1,
              color: 'transparent', // X轴处的颜色
            },
          ],
          global: false, // 缺省为 false
        }),
        borderRadius: [8, 8, 0, 0], //柱子圆角[上右下左]，也可以统一值。
      },
      showBackground: true, //柱子是否带有背景，默认是没有的
      backgroundStyle: {
        //只有showBackground=true，设置backgroundStyle才会有效果
        color: 'rgba(180, 180, 180, .2)', //
        borderRadius: 8,
      },
    },
  ],
};
//图表自动轮播高亮显示函数 myChart直接用
const animation = (delay=3000) => {
  
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
animation(10000)
