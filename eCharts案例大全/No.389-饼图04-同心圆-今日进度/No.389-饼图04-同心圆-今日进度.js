//做环形图的本质是 radius: ['内半径', '外半径'] 内半径!=0
//画渐变色的原理是：data里面可以设置itemStyle
const value = 78; //今日完成78%
const backgroundColor = '#101736';
const title = {
  text: '今日进度',
  textStyle: {
    color: '#fff',
    fontSize: 16,
  },
  padding: 0,
  top: 35,
  left: 'center',
};
const legend = {
  show: false,
};
const tooltip = {
  show: false,
};
const color = ['#03acd1', '#04cab7'];
const innerRingColor = {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
    {
      offset: 0,
      color: color[0], // 0% 处的颜色
    },
    {
      offset: 1,
      color: color[1], // 100% 处的颜色
    },
  ],
  global: false, // 缺省为 false
};
option = {
  backgroundColor,
  color,
  title,
  tooltip,
  legend,

  series: [
    {
      name: '',
      type: 'pie',
      center: ['50%', '50%'], //圆心的位置
      radius: ['40%', '45%'], //环形图的本质就在这里 [内半径!=0，外半径] 外半径越大，圆越大
      avoidLabelOverlap: false, //做同心圆用到
      clockwise: false, //顺时针排列
      startAngle: 90, //起始角度 影响不大
      label: {
        show: true, //false不显示饼图上的标签
        position: 'center', //inside（在饼图上显示）,outside(默认就会出现引导线) center
        formatter: '{d}%',
        fontSize: 50,
        fontWeight: 'bold',
      },

      data: [
        { value: value, name: '完成', itemStyle: { color: innerRingColor, opacity: 1 } },
        { value: 100 - value, name: '未完成', itemStyle: { color: '#282c40' } },
      ].sort((a, b) => b.value - a.value), //数组从大到小排序

      emphasis: {
        scale: true,
        scaleSize: 10,
        label: {
          show: true,
          formatter: (params) => (params.name === '完成' ? `${value}%` : ''),
        },
        //启用鼠标放上去放大效果，这个挺好的
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
    {
      name: '',
      type: 'pie',
      center: ['50%', '50%'], //圆心的位置
      radius: ['50%', '58%'], //环形图的本质就在这里 [内半径!=0，外半径] 外半径越大，圆越大
      avoidLabelOverlap: false, //做同心圆用到
      clockwise: false, //顺时针排列
      startAngle: 90, //起始角度 影响不大

      label: {
        show: true, //false不显示饼图上的标签
        position: 'center', //inside（在饼图上显示）,outside(默认就会出现引导线) center
        formatter: '{d}%',
        fontSize: 50,
        fontWeight: 'bold',
      },

      data: [
        { value: value, name: '完成' },
        { value: 100 - value, name: '未完成' },
      ].sort((a, b) => b.value - a.value), //数组从大到小排序

      emphasis: {
        scale: true,
        scaleSize: 10,
        label: {
          show: true,
          formatter: (params) => (params.name === '完成' ? `${value}%` : ''),
        },
        //启用鼠标放上去放大效果，这个挺好的
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};
