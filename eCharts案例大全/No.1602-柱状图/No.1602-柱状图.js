 var data = [91,82,73,61,54,46];
 var yAxis = ['北京市','天津市','河北省','吉林省','辽宁省','内蒙古']
 option = {
     backgroundColor:'#000',
    tooltip: {
      textStyle: {
        fontSize: 16
      },
      formatter: function (res) {
        return `${res.name} : ${res.data}万人`;
      }
    },
    legend: {
      selectedMode: false,
      show: false
    },
    grid: {
      left: '2%',
      right: '5%',
      bottom: '5%',
      top: 5,
      containLabel: true
    },
    xAxis: [{
      type: 'value',
      show: false
    }],
    yAxis: [{
      splitLine: {
        show: false
      },
      axisLine: { // y轴
        show: false
      },
      type: 'category',
      inverse: true, /// 柱状图顺序
      axisTick: {
        show: false
      },
      data: yAxis,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#ffffff'
        },
        formatter: (res, index) => {
          var num = 0;
          num = index + 1;
          if (index === 0) {
            return '{no1|' + 'TOP' + num + '}' + '{data|' + res + '}';
          } else if (index === 1) {
            return '{no2|' + 'TOP' + num + '}' + '{data|' + res + '}';
          } else if (index === 2) {
            return '{no3|' + 'TOP' + num + '}' + '{data|' + res + '}';
          } else if (index === 3) {
            return '{no4|' + 'TOP' + num + '}' + '{data|' + res + '}';
          } else if (index === 4) {
            return '{no5|' + 'TOP' + num + '}' + '{data|' + res + '}';
          } else if (index === 5) {
            return '{no6|' + 'TOP' + num + '}' + '{data|' + res + '}';
          }
          return res;
        },
        rich: {
          no1: {
            color: '#EF5525',
            fontSize: 14
          },
          data: {
            color: '#fff',
            fontSize: 14
          },
          no2: {
            color: '#EFAF25',
            fontSize: 14
          },
          no3: {
            color: '#D0EF25',
            fontSize: 14
          },
          no4: {
            color: '#26EFC2',
            fontSize: 14
          },
          no5: {
            color: '#2BE4FF',
            fontSize: 14
          },
          no6: {
            color: '#2BE4FF',
            fontSize: 14
          }
        }

      }
    }],
    series: [{
      name: '标准化',
      type: 'bar',
      barWidth: 10, // 柱子宽度
      label: {
        show: true,
        position: 'right', // 位置
        color: '#fff',
        fontSize: 14,
        distance: 5 // 距离
      }, // 柱子上方的数值
      itemStyle: {
        barBorderRadius: [20, 20, 20, 20],
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          '#4C67EB', '#00F6FF'
        ].map((color, offset) => ({
          color,
          offset
        }))) // 渐变
      },
      data: data
    }]
  }
