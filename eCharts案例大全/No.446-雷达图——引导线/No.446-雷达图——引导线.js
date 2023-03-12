var data = [76.98, 75.4, 86.1, 75.4, 76.98, 86.1];
var indicatorname = ['主业营收', '规模增长', '盈利能力', '规模增长', '企业外部资源整合', '专业管理能力'];
var maxdata = [100, 100, 100, 100, 100, 100];

function contains(arrays, obj) {
  var i = arrays.length;
  while (i--) {
    if (arrays[i] === obj) {
      return i;
    }
  }
  return false;
}

var indicator = [];
for (var i = 0; i < indicatorname.length; i++) {
  indicator.push({
    name: indicatorname[i],
    max: maxdata[i],
  });
}

function innerdata(i) {
  var innerdata = [];
  for (let j = 0; j < data.length; j++) {
    innerdata.push(100 - 20 * i);
  }
  return innerdata;
}

option = {
  backgroundColor: '#FFFFFF',
  tooltip: {
    show:false,
    formatter: function () {
      var html = '';
      for (var i = 0; i < data.length; i++) {
        html += indicatorname[i] + ' : ' + data[i] + '<br>';
      }
      return html;
    },
    borderWidth:0
  },
  radar: {
    radius: '50%', //大小
    nameGap: 40, // 图中工艺等字距离图的距离
    center: ['50%', '50%'], // 图的位置
    name: {
      textStyle: {
        rich: {
          a: {
            fontSize: '12',
            color: '#333333',
            lineHeight: '20',
            fontWeight: '500',
          },
          b: {
            fontSize: '12',
            color: '#666666',
          },
        },
      },
      formatter: function (params, index) {
        var i = contains(indicatorname, params);
        var percent = (data[i] / 100) * 100;
        return '{b|' + params + '}\n' + '{a|' + percent + '}';
      },
    },
    indicator: indicator,
    axisLine: {
      lineStyle: {
        color: '#3299FD30',
      },
      show: true,
      symbolSize: [1, 30],
      symbol: ['none', 'rect'],
      symbolOffset: [0, 25],
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: 'transparent', // 图表背景的颜色
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: '#3299FD30', // 设置网格的颜色
      },
    },
  },

  series: [
    {
      name: '报警类型分析',
      type: 'radar',
      symbol: 'circle',
      itemStyle: {
        normal: {
          areaStyle: { type: 'default' },
        },
      },
      data: [
        {
          symbol: 'none',
          symbolSize: 5,
          value: data,
          areaStyle: { color: 'transparent' },

          lineStyle: {
            color: '#3299FD',
            width: 4,
          },
        },
      ],
    },
  ],
};
