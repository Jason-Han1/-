let everyDepartment = {
  stages: [
    { name: '维护', max: 100 },
    { name: '活动', max: 100 },
    { name: '巡查', max: 100 },
    { name: '整改', max: 100 },
    { name: '值班', max: 100 },
  ],
  scores: [73, 87, 93, 80, 72],
};

function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i].name === obj) {
      return i;
    }
  }
  return false;
}
// 格式化数据
function formatNumber(n) {
  var b = parseInt(n).toString();
  var len = b.length;
  if (len <= 3) {
    return b;
  }
  var r = len % 3;
  return r > 0
    ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',')
    : b.slice(r, len).match(/\d{3}/g).join(',');
}
option = {
  backgroundColor: '#081A2F',
  color: ['#fff'],
  radar: {
    center: ['50%', '50%'],
    radius: '50%',
    triggerEvent: true,
    splitNumber: 6,
    name: {
      rich: {
        a: {
          color: '#B3BBD9',
          fontSize: 12,
          fontFamily: 'Microsoft YaHei',
          fontWeight: 'bold',
          lineHeight: 20,
        },
        b: {
          color: '#FFF',
          fontSize: 12,
          align: 'right',
          fontFamily: 'Microsoft YaHei',
          fontWeight: 'bold',
        },
        d: {
          color: '#fff',
          fontSize: 12,
          align: 'right',
          fontFamily: 'Microsoft YaHei',
          fontWeight: 'bold',
        },
        triggerEvent: true,
      },
      formatter: (a, index) => {
        let values = a.length > 6 ? a.slice(0, 6) + '...' : a;
        let i = contains(everyDepartment.stages, a); // 处理对应要显示的样式
        return `{b| ${formatNumber(everyDepartment.scores[i])}}{d|%}\n{a| ${values}}`;
      },
    },
    nameGap: '2',
    indicator: everyDepartment.stages,
    splitArea: {
      areaStyle: {
        color: [
          'rgba(38, 96, 144, .1)',
          'rgba(38, 96, 144, .2)',
          'rgba(38, 96, 144, .4)',
          'rgba(38, 96, 144, .6)',
          'rgba(38, 96, 144, .8)',
          'rgba(38, 96, 144, 1)',
        ].reverse(),
      },
    },
    // axisLabel:{//展示刻度
    //     show: true
    // },
    axisLine: {
      //指向外圈文本的分隔线样式
      lineStyle: {
        color: '#205278',
        width: 2,
      },
    },
    splitLine: {
      lineStyle: {
        width: 2,
        color: 'RGBA(24, 67, 101, 1)',
      },
    },
  },

  series: [
    {
      type: 'radar',
      symbol: 'circle',
      symbolSize: 10,
      lineStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: '#03AFFF',
            },
            {
              offset: 1,
              color: '#03AFFF',
            },
          ],
          false
        ),
        width: 2,
      },
      itemStyle: {
        color: '#fff ',
        borderColor: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: '#03AFFF',
            },
            {
              offset: 1,
              color: '#03AFFF',
            },
          ],
          false
        ),
        borderWidth: 2,
        opacity: 1,
      },
      data: [
        {
          value: everyDepartment.scores,
          name: '',
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#000',
              },
              shadowColor: '#000',
              shadowBlur: 20,
            },
          },
          areaStyle: {
            normal: {
              color: 'RGBA(42, 151, 193, .8)',
            },
          },
        },
      ],
    },
  ],
};
