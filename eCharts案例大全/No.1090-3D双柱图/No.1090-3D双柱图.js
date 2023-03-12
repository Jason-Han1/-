var xData = [
  '竹山路乐天玛特超市',
  '何山路与滨河路路口',
  '石路国际生活广场',
  '金狮大厦',
  '狮山路滨河路路口',
  '狮山路工商银行',
  '苏州银监局',
  '太湖大道锦峰路路口',
  '新区美罗广场',
  '新区金鹰百货',
];
var data0 = [1, 1, 1, 1, 1, 1, 1];
var data1 = [100, 150, 130, 170, 185, 160, 180, 175, 185, 160];
var data4 = [120, 100, 140, 160, 210, 180, 200, 190, 220, 170];
var data3 = [];
var data5 = [];
for (let i = 0; i < data1.length; i++) {
  data3.push(data1[i] + data4[i]);
}
for (let i = 0; i < data1.length; i++) {
  data5.push(data1[i]);
}
option = {
        backgroundColor: '#000E1A', //背景色
        tooltip: {
          trigger: 'axis',
          borderColor: 'rgba(255,255,255,.3)',
          backgroundColor: 'rgba(13,5,30,.6)',
          textStyle: {
            color: 'white', //设置文字颜色
          },
          borderWidth: 1,
          padding: 5,
          formatter: function (parms) {
            var str =
              parms[0].axisValue +
              '</br>' +
              parms[0].marker +
              '商业：' +
              parms[0].value +
              '</br>' +
              parms[1].marker +
              '公益：' +
              parms[1].value;
            return str;
          },
        },
        textStyle: {
          color: '#C9C9C9',
        },

        // color: ['#fbc292', '#06fbfe',  '#f06e91'],
        legend: {
          data: ['商业', '公益'],
          right: 60,
          top: 0,
          selectedMode: false, //图例点击失效
          textStyle: {
            fontSize: 15,
            color: '#fff',
          },
          // selectedMode: "single",
          itemWidth: 30, // 设置宽度
          itemHeight: 15, // 设置高度
          itemGap: 20, // 设置间距
        },
        grid: {
          borderWidth: 0,
          x: 70,
          x2: 65,
          y: 40,
          y2: 80,
          textStyle: {
            color: '#fff',
          },
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.5)',
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              margin: 30,
              align: 'center',
              rotate: 20,
              color: '#ffff',
              fontSize: 12,
              lineHeight: 8,
              formatter: function (name, index) {
                switch (index) {
                  case 0:
                    return name.substring(0, 4) + '\n' + '\n' + name.substring(4);
                  case 1:
                    return name.substring(0, 4) + '\n' + '\n' + name.substring(4);
                  case 2:
                    return name.substring(0, 7) + '\n' + '\n' + name.substring(7);
                  case 3:
                    return name.substring(0, 7) + '\n' + '\n' + name.substring(7);
                  case 4:
                    return name.substring(0, 5) + '\n' + '\n' + name.substring(5);
                  case 5:
                    return name.substring(0, 7) + '\n' + '\n' + name.substring(7);
                  case 6:
                    return name.substring(0, 11) + '\n' + '\n' + name.substring(11);
                  case 7:
                    return name.substring(0, 13) + '\n' + '\n' + name.substring(13);
                  case 8:
                    return name.substring(0, 5) + '\n' + '\n' + name.substring(5);
                  case 9:
                    return name.substring(0, 2) + '\n' + '\n' + name.substring(2);
                  default:
                    return name;
                }
              },
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '小时',
            nameTextStyle: {
              //y轴上方单位的颜色
              color: '#fff',
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: '#ffff',
              fontSize: 16,
            },
          },
        ],
        series: [
          {
            type: 'bar',
            name: '商业',
            type: 'bar',
            data: data1,
            stack: 'zs',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  type: 'linear',
                  global: false,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#06fbfe',
                    },
                    {
                      offset: 1,
                      color: '#017ebb',
                    },
                  ],
                },
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                  },
                  position: ['120%', '50%'],
                  formatter: function (p) {
                    return p.value;
                  },
                },
              }
            },
          },

          {
            name: '公益',
            type: 'bar',
            data: data4,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  type: 'linear',
                  global: false,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#05b76e',
                    },
                    {
                      offset: 1,
                      color: '#028878',
                    },
                  ],
                },
                label: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                  },
                  position: ['120%', '50%'],
                  formatter: function (p) {
                    return p.value;
                  },
                },
              }
              
            },
          },

          {
            data: data0,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
              normal: {
                color: '#0184be',
              },
            },
          },
          {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
          },
          {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
          },
          {
            data: data5,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [0, 20],
            zlevel: 2,
          },
          {
            data: data5,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
              normal: {
                color: '#06fbfe',
              },
            },
          },
          {
            data: data3,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [30, 20],
            zlevel: 2,
            itemStyle: {
              normal: {
                color: '#07e564',
              },
            },
          },
        ],
      };
