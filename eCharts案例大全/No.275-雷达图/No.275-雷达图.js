var stages = [
  { name: '萧塘', max: 100 },
  { name: '环城东路', max: 100 },
  { name: '望园路', max: 100 },
  { name: '奉贤新城', max: 100 },
  { name: '奉浦大道', max: 100 },
  { name: '金海湖', max: 100 },
];

var scores = [
  {
    name: '进站',
    value: [43, 90, 80, 53, 78, 89, 77, 50],
  },
  {
    name: '出站',
    value: [50, 44, 56, 69, 43, 77, 90, 20],
  },
];
function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i].name === obj) {
      return i;
    }
  }
  return false;
}
option = {
  backgroundColor: '#000928',
  color: ['#41E1FF', 'rgb(255,292,203)'],
  legend: {
    top: 25,
    right: 40,
    icon: 'rect',
    itemWidth: 17, // 图例标记的图形宽度。[ default: 25 ]
    itemHeight: 12, // 图例标记的图形高度。[ default: 14 ]
    itemGap: 9, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
      fontSize: 16,
      color: '#fff',
    },
    data: ['进站', '出站'],
  },
  radar: {
    radius: '60%',
    triggerEvent: true,
    // name: {
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: '16',
    //     borderRadius: 3,
    //     padding: [3, 5],
    //   },
    // },

    name: {
      rich: {
        a: {
          fontSize: 16,
          color: '#fff',
          lineHeight: '40',
          padding: [0, 15, 0, 15],
        },
        b: {
          color: '#41E1FF',
          fontSize: 16,
          padding: [0, 0, 0, 15],
        },
        c: {
          color: '#fff',
          fontSize: 16,
        },
        d: {
          color: 'rgb(255,292,203)',
          fontSize: 16,
          padding: [0, 15, 0, 0],
        },
        triggerEvent: true,
      },
      formatter: (a) => {
        let i = contains(stages, a); // 处理对应要显示的样式
        return `{a| ${a}}\n{b| ${scores[0]['value'][i]}}{c|  / }{d| ${scores[1]['value'][i]}}`;
      },
    },
    nameGap: '2',
    indicator: stages,
    splitArea: {
      areaStyle: {
        color: [
          // '#172C65' ,'#122454','#0A1835',

          'rgba(39,67,143, 0.1)',
          'rgba(39,67,143, 0.2)',
          'rgba(39,67,143, 0.4)',
          'rgba(39,67,143, 0.6)',
          'rgba(39,67,143, 0.8)',
          'rgba(39,67,143, 1)',
        ].reverse(),
      },
    },
    // axisLabel:{//展示刻度
    //     show: true
    // },
    axisLine: {
      //指向外圈文本的分隔线样式
      lineStyle: {
        color: 'rgba(0,0,0,0)',
      },
    },
    splitLine: {
      lineStyle: {
        width: 2,
        color: ['rgba(45,65,110, 0.6)'].reverse(),
      },
    },
  },

  series: [
    {
      name: '进站',
      type: 'radar',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            [
              {
                offset: 0,
                color: '#37c5f4',
                opacity: 1,
              },
              {
                offset: 1,
                color: '#19469a',
                opacity: 1,
              },
            ],
            false
          ),
        },
      },
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: '#32a9ea',
          width: 1,
        },
      },
      data: [scores[0]],
    },
    {
      name: '出站',
      type: 'radar',
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            [
              {
                offset: 0,
                color: '#ffc40b',
              },
              {
                offset: 1,
                color: '#e3c424',
              },
            ],
            false
          ),

          opacity: 0.6,
        },
      },
      symbolSize: 0,
      lineStyle: {
        normal: {
          color: 'rgba(255,292,203, 0.6)',
          width: 1,
        },
      },
      data: [scores[1]],
    },
  ],
};
