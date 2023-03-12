data = [
  {
    name: '单位供应商',
    value: 59,
  },
  {
    name: '个人供应商',
    value: 45,
  },
];
color = ['#2E6CF6', '#FE9A0D'];
series = [];
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
  var dd = [];
  // dd[i] = data[i].value;
  if (i === 0) {
    dd[data.length - 1] = data[i].value;
  } else {
    dd[0] = data[i].value;
  }
  series.push({
    stack: 'ring',
    type: 'bar',
    name: data[i].name,
    data: dd.map((v) => v || 0),
    showBackground: true,
    itemStyle: {
      color: color[i],
    },
    backgroundStyle: { color: '#F1F5FF' },
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth: '55%',
    barGap: '-100%', // 两环重叠
    // radius: ['44%', '47%'],
  });
}

option = {
  title: {
    text: '26,798',
    subtext: '供应商总数',
    textAlign: 'center',
    textVerticalAlign: 'center',
    top: '50%',
    left: '25%',
    textStyle: {
      color: '#1B2231',
      fontSize: 24,
    },
    subtextStyle: {
      color: '#828282',
      fontSize: 20,
    },
  },
  angleAxis: {
    max: 100, // 一圈是多少
    clockwise: false, // 逆时针
    show: false, // 隐藏刻度线
    startAngle: 90, // startAngle表示起始角度
    axisLine: {
      show: false, // 隐藏角度轴（圆心角）
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false, // 隐藏分割线
    },
  },

  radiusAxis: {
    type: 'category',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    z: 5,
  },
  polar: {
    center: ['25%', '50%'],
    radius: ['25%', '50%'], // 总体的最小半径、最大半径
  },
  tooltip: {
    show: true,
    formatter: function (e) {
      console.log(e);
      return `${e.seriesName}<br/>${e.marker} ${e.value} `;
    },
  },
  legend: {
    orient: 'vertical',
    data: data.map((v) => v.name),
    right: '0',
    top: '40%',
    itemGap: 30,
    itemWidth: 8,
    itemHeight: 24,
    formatter: function (name) {
      var total = 0;
      var target;
      for (var i = 0, l = data.length; i < l; i++) {
        total += data[i].value;
        if (data[i].name == name) {
          target = data[i].value;
        }
      }
      var arr = ['{a|' + name + '}', '{b|' + target + ' ' + ((target / total) * 100).toFixed(2) + '%} {c|占比}'];
      return arr.join('\n');
    },
    textStyle: {
      rich: {
        a: {
          fontSize: 26,
          verticalAlign: 'top',
          align: 'left',
          padding: [80, 0, 0, 0],
          color: '#828282',
        },
        b: {
          fontSize: 36,
          align: 'bottom',
          padding: [0, 0, 0, 0],
          lineHeight: 75,
          color: '#1B2231',
        },
        c: {
          fontSize: 20,
          align: 'bottom',
          padding: [0, 0, 0, 0],
          lineHeight: 75,
          color: '#828282',
        },
      },
    },
  },
  series,
};
