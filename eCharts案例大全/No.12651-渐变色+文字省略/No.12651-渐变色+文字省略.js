option = {
  backgroundColor: '#131535',
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      },
      textStyle:{
          fontSize:20
      }
      // formatter: "{b} <br> 合格率: {c}%"
  },
  grid: {
      left: '4%',
      right: '4%',
      top: 200,
      bottom: 150,
      containLabel: true
  },
  xAxis: {
      type: 'value',
      axisLine: {
          show: false,
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitLine: {
          lineStyle: {
              color: '#2f396a'
          }
      }
  },
  yAxis: {
      type: 'category',
      data: ['刑满释放人员', '社区矫正人员', '易肇事肇祸患人员', '有为法犯罪人员', '重点青少年', '其他重点工作人员', '重点上访人员'],
      axisLabel: {
          show: true,
          interval: 0,
          rotate: 0,
          textStyle: {
              color: '#cddafd',
              fontWeight: '50',
              fontSize:20
          },
          formatter: function(a) {
              for (let i in a)
                  return a.length > 6 ? a.substring(0, 5) + "..." : a
          }
      },
      axisTick: {
          show: false
      },
      splitLine: {
          lineStyle: {
              color: '#2f396a'
          }
      }
  },
  series: [{
      type: 'bar',
      barWidth:30,
      label: {

          normal: {
              show: true,
              fontSize:20,
              position: 'right',
              // formatter: '{c}',
              formatter: function(v) {
                  var val = v.data;
                  if (val == 0) {
                      return '';
                  }
                  return val;
              },
              color: function(params) {
                  var colorList = [
                      ['#3fc9fb', '#7fe4e1'],
                      ['#162b5f', '#508ce7'],
                      ['#3fc9fb', '#7fe4e1'],
                      ['#162b5f', '#508ce7'],
                      ['#3fc9fb', '#7fe4e1'],
                      ['#162b5f', '#508ce7'],
                      ['#3fc9fb', '#7fe4e1'],
                  ];
                  return colorList[params.dataIndex][1]
              },
          }
      },
      data: [22, 33, 44, 55, 66, 77, 88],
      itemStyle: {
          //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          //设置渐变色
          color: function(params) {
              var colorList = [
                  ['#3fc9fb', '#7fe4e1'],
                  ['#162b5f', '#508ce7'],
                  ['#3fc9fb', '#7fe4e1'],
                  ['#162b5f', '#508ce7'],
                  ['#3fc9fb', '#7fe4e1'],
                  ['#162b5f', '#508ce7'],
                  ['#3fc9fb', '#7fe4e1'],
              ];
              return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                      offset: 0,
                      color: colorList[params.dataIndex][0]
                  },
                  {
                      offset: 1,
                      color: colorList[params.dataIndex][1]
                  }
              ]);
          },
      }
  }]
};