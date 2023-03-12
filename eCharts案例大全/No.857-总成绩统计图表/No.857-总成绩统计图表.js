var data = [
  {
    name: '连锁1班',
    dataValue: [
      {
        name: '优秀(90-100)', //分段
        value: 49, //占比
      },
      {
        name: '良好(80-90)', //分段
        value: 58, //占比
      },
      {
        name: '中等(70-80)', //分段
        value: 11, //占比
      },
      {
        name: '及格(60-70)', //分段
        value: 16, //占比
      },
      {
        name: '不及格(0-60)', //分段
        value: 39, //占比
      },
    ],
  },
  {
    name: '连锁2班',
    dataValue: [
      {
        name: '优秀(90-100)', //分段
        value: 39, //占比
      },
      {
        name: '良好(80-90)', //分段
        value: 52, //占比
      },
      {
        name: '中等(70-80)', //分段
        value: 24, //占比
      },
      {
        name: '及格(60-70)', //分段
        value: 30, //占比
      },
      {
        name: '不及格(0-60)', //分段
        value: 10, //占比
      },
    ],
  },
  {
    name: '连锁3班',
    dataValue: [
      {
        name: '优秀(90-100)', //分段
        value: 49, //占比
      },
      {
        name: '良好(80-90)', //分段
        value: 58, //占比
      },
      {
        name: '中等(70-80)', //分段
        value: 11, //占比
      },
      {
        name: '及格(60-70)', //分段
        value: 16, //占比
      },
      {
        name: '不及格(0-60)', //分段
        value: 39, //占比
      },
    ],
  },
  {
    name: '连锁4班',
    dataValue: [
      {
        name: '优秀(90-100)', //分段
        value: 59, //占比
      },
      {
        name: '良好(80-90)', //分段
        value: 38, //占比
      },
      {
        name: '中等(70-80)', //分段
        value: 17, //占比
      },
      {
        name: '及格(60-70)', //分段
        value: 26, //占比
      },
      {
        name: '不及格(0-60)', //分段
        value: 50, //占比
      },
    ],
  },
  {
    name: '连锁5班',
    dataValue: [
      {
        name: '优秀(90-100)', //分段
        value: 40, //占比
      },
      {
        name: '良好(80-90)', //分段
        value: 68, //占比
      },
      {
        name: '中等(70-80)', //分段
        value: 18, //占比
      },
      {
        name: '及格(60-70)', //分段
        value: 46, //占比
      },
      {
        name: '不及格(0-60)', //分段
        value: 59, //占比
      },
    ],
  },
  {
    name: '连锁6班',
    dataValue: [
      {
        name: '优秀(90-100)', //分段
        value: 49, //占比
      },
      {
        name: '良好(80-90)', //分段
        value: 28, //占比
      },
      {
        name: '中等(70-80)', //分段
        value: 31, //占比
      },
      {
        name: '及格(60-70)', //分段
        value: 20, //占比
      },
      {
        name: '不及格(0-60)', //分段
        value: 29, //占比
      },
    ],
  },
];

var dataStyle = {
  normal: {
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
  },
};

var textStyle = {
  color: '#333',
  fontWeight: 'normal',
  fontSize: 14,
};

var placeHolderStyle = {
  normal: {
    color: 'rgba(0,0,0,0)',
    label: {
      show: false,
    },
    labelLine: {
      show: false,
    },
  },
  emphasis: {
    color: 'rgba(0,0,0,0)',
  },
};
var titleArr = [], //班级数组
  seriesArr = []; //

data.forEach(function (item, index) {
  titleArr.push({
    text: item.name,
    left: index > 3 ? (index - 4) * 24 + 14 + '%' : index * 24 + 14 + '%',
    top: index > 3 ? '85%' : '42%',
    textAlign: 'center',
    textStyle: textStyle,
  });

  seriesArr.push({
    name: '',
    type: 'pie',
    radius: '26%',
    center: [index > 3 ? (index - 4) * 24 + 14 + '%' : index * 24 + 14 + '%', index > 3 ? '70%' : '27%'],
    label: {
      normal: {
        formatter: '{a|{b}}\n{per|{d}%}',
        rich: {
          a: {
            fontSize: 14,
            color: '#333',
            lineHeight: 16,
            align: 'center',
          },
          per: {
            color: '#333',
            fontSize: 14,
            align: 'right',
            padding: [5, 0, 0, 0],
            lineHeight: 16,
          },
        },
      },
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    },

    data: [
      {
        value: item.dataValue[0].value,
        name: item.dataValue[0].name,
      },
      {
        value: item.dataValue[1].value,
        name: item.dataValue[1].name,
      },
      {
        value: item.dataValue[2].value,
        name: item.dataValue[2].name,
      },
      {
        value: item.dataValue[3].value,
        name: item.dataValue[3].name,
      },
      {
        value: item.dataValue[4].value,
        name: item.dataValue[4].name,
      },
    ],
  });
});

option = {
  color: ['#0cb4d7', '#9acff9', '#80d5ac', '#fe9c3a', '#eb7c6f'],
  legend: {
    textStyle: textStyle,
  },
  tooltip: {
    trigger: 'item',
    formatter: '分段 : {b}<br>占比 : {c}%',
  },
  title: titleArr,
  series: seriesArr,
};
