//数据
let XName = [
  '00:00',
  '02:00',
  '04:00',
  '06:00',
  '08:00',
  '10:00',
  '12:00',
  '14:00',
  '16:00',
  '18:00',
  '20:00',
  '22:00',
  '24:00',
];
let data1 = [
  [25, 23, 29, 29, 17, 13, 9, 1, 26, , , , ,],
  [, , , , , , , , 26, 18, 24, 11, 19],
  [28, 7, 9, 26, 6, 19, 4, 21, 24, , , , ,],
  [, , , , , , , , 24, 25, 1, 26, 3],
  [21, 29, 14, 18, 28, 20, 9, 29, 1, , , , ,],
  [, , , , , , , , 1, 19, 16, 28, 14],
  [29, 1, 8, 18, 27, 14, 28, 2, 15, , , , ,],
  [, , , , , , , , 15, 6, 22, 21, 15],
];
let Line = ['整体', '整体预测', '地铁', '地铁预测', '公交', '公交预测', '机动车', '机动车预测'];
let color = ['#00f8ff', '#00f8ff', '#00f15a', '#00f15a', '#0696f9', '#0696f9', '#dcf776', '#dcf776'];

//数据处理
let datas = [];
Line.map((item, index) => {
  datas.push({
    symbolSize: 10,
    symbol: 'circle',
    name: item,
    type: 'line',
    smooth: false,
    yAxisIndex: 1,
    lineStyle: {
      type: index % 2 == 1 ? 'dashed' : 'solid',
    },
    data: data1[index],
    itemStyle: {
      normal: {
        borderWidth: 5,
        color: color[index],
      },
    },
  });
});

option = {
  backgroundColor: '#043065',
  grid: {
    left: '3%',
    top: '10%',
    bottom: '12%',
    right: '5%',
  },
  tooltip: {
    trigger: 'axis', //鼠标放在坐标轴上触发
    position: function (point, params, dom, rect, size) {
      // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
      // 提示框位置
      var x = 0; // x坐标位置
      var y = 0; // y坐标位置 // 当前鼠标位置

      var pointX = point[0];
      var pointY = point[1]; // 外层div大小 // var viewWidth = size.viewSize[0]; // var viewHeight = size.viewSize[1]; // 提示框大小

      var boxWidth = size.contentSize[0];
      var boxHeight = size.contentSize[1]; // boxWidth > pointX 说明鼠标左边放不下提示框

      if (boxWidth > pointX) {
        x = pointX + 10;
      } else {
        // 左边放的下
        x = pointX - boxWidth - 10;
      } // boxHeight > pointY 说明鼠标上边放不下提示框

      if (boxHeight > pointY) {
        y = 5;
      } else {
        // 上边放得下
        y = pointY - boxHeight;
      }

      return [x, y];
    },
    textStyle: {
      fontSize: 20,
    },
  },
  legend: {
    type: 'scroll',
    data: Line,
    itemWidth: 20,
    itemHeight: 20,
    itemGap: 100,
    textStyle: {
      color: '#fff',
      fontSize: 24,
    },
    top: '5',
    right: 'center',
    icon: 'plain',
  },
  yAxis: [
    {
      type: 'value',
      position: 'right',
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    {
      type: 'value',
      position: 'left',
      nameTextStyle: {
        color: 'rgba(135,140,147,0.1)',
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(135,140,147,0.1)',
          },
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(135,140,147,0.1)',
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(135,140,147,0.8)',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
        fontSize: 24,
      },
      max: function (value) {
        return value.max + 10;
      },
    },
  ],
  xAxis: [
    {
      type: 'category',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(135,140,147,0.8)',
        },
      },
      axisLabel: {
        inside: false,
        textStyle: {
          color: '#fff', // x轴颜色
          fontWeight: 'normal',
          fontSize: 24,
          lineHeight: 30,
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(135,140,147,0.1)',
        },
      },
      data: XName,
    },
  ],
  series: datas,
};
