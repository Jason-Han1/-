var color = new echarts.graphic.LinearGradient(0, 1, 1, 1, [
  { offset: 0, color: 'rgba(205,133,63, .3)' },
  { offset: 0.5, color: 'rgba(205,133,63, .5)' },
  { offset: 1, color: 'rgba(205,133,63, 1)' },
]);
var val = 60;
var fontColor = val > 30 ? 'red' : 'green';
const sourceData = [
  // {
  //   name: '',
  //   value: 10,
  // },
  {
    name: '10',
    value: 10,
  },
  {
    name: '20',
    value: 10,
  },
  {
    name: '30',
    value: 10,
  },
  {
    name: '40',
    value: 10,
  },
  {
    name: '50',
    value: 10,
  },
  {
    name: '60',
    value: 10,
  },
  {
    name: '70',
    value: 10,
  },
  {
    name: '80',
    value: 10,
  },
  {
    name: '90',
    value: 10,
  },
  {
    name: '100',
    value: 10,
  },
  {
    name: '',
    value: 90,
  },
];

const total = sourceData.reduce((num, item) => {
  num += item.value;
  return num;
}, 0);

// 为了实现内环间隔距离，需要额外插入的数值。200 只是个系数，值越大，单位间隔的距离越小。
const inSplitValue = Math.floor(total / 400);

// 为了实现外环间隔距离，需要额外插入的数值。
const outSplitValue = Math.floor(total / 400);

// 内环数据的总数
const valueTotal = total + inSplitValue * sourceData.length;

function getTextAngle(currentAngle, angle) {
  currentAngle = currentAngle + angle;
  console.log('currentAngle', currentAngle);
  return 90 - currentAngle;
}

// 外环数据
const outValueData = sourceData.reduce((arr, item, index) => {
  const currentTotal = arr.reduce((total, item) => {
    total += item.value;
    return total;
  }, 0);

  const currentAngle = 360 * (currentTotal / valueTotal);
  const angle = (360 * (item.value / valueTotal)) / 2;

  arr.push(
    {
      name: item.name,
      value: item.value,
      label: {
        color: 'rgb(160, 60, 60)',
        position: 'inside',
        align: 'center',
        // lineHeight: 20,
        // verticalAlign: 'top',
        rotate: getTextAngle(currentAngle, angle),
      },
    },
    {
      name: '',
      value: outSplitValue,
      itemStyle: {
        color: 'transparent',
        opacity: 0,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
    }
  );
  return arr;
}, []);
option = {
  backgroundColor: '#fff',
  title: {
    text: val + '%',
    x: 'center',
    y: '50%',
    textStyle: {
      fontSize: 35,
      color: fontColor,
    },
    subtext: '您的计划可行性',
    subtextStyle: {
      fontSize: 20,
    },
  },
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '60%'],
      min: 5,
      max: 100,
      splitNumber: 9,
      // 外层圈
      axisLine: {
        roundCap: true,
        lineStyle: {
          width: 16,
          color: [[1, color]],
        },
      },
      // 箭头
      pointer: {
        length: '10%',
        width: 10,
        offsetCenter: [0, '-58%'],
        itemStyle: {
          color: 'orange',
        },
      },
      // 小刻度
      axisTick: {
        show: false,
      },
      // 大刻度
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
        formatter: (e) => {
          if (e) {
            return e;
          }
        },
        color: 'orange',
      },
      // 百分比
      detail: {
        show: false,
      },
      data: [
        {
          value: val,
        },
      ],
    },
    {
      type: 'pie',
      radius: '45%',
      animation: false, // 此处的动画禁用是为了防止指针在初始化时候露出来尾巴
      color: ['#fff', '#fff'],
      startAngle: 180,
      endAngle: 0,
      silent: true,
      label: {
        normal: {
          position: 'center',
        },
      },
      labelLine: {
        show: false,
      },
      center: ['50%', '60%'],
      data: [
        {
          value: 50,
          itemStyle: {
            shadowColor: 'rgba(205,133,63, .3)', // 阴影
            shadowBlur: 5,
            shadowOffsetY: -5,
          },
        },
        { value: 50 },
      ],
    },
    {
      type: 'pie',
      startAngle: 180,
      endAngle: 0,
      radius: ['40%', '80%'],
      center: ['50%', '60%'],
      itemStyle: {
        opacity: 1,
        color: 'transparent',
      },
      label: {
        show: true,
        formatter(params) {
          return '{a|' + params.data.name + '}';
        },
        rich: {
          a: {
            color: '#dedede',
          },
        },
      },
      labelLine: {
        show: false,
      },
      data: outValueData,
    },
  ],
};
