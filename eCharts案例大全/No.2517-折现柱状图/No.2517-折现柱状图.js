var tbzf = [12, -20, 30, 49, 18, 90, 48, 39, 27, 49, 58, 28, 38, 19, 60, 30];
var value = [
  {
    thisEnd: 23,
    orgName: '山东',
  },
  {
    thisEnd: 123,
    orgName: '浙江',
  },
  {
    thisEnd: 203,
    orgName: '河南',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
  {
    thisEnd: 423,
    orgName: '河北',
  },
  {
    thisEnd: 993,
    orgName: '湖北',
  },
  {
    thisEnd: 203,
    orgName: '湖南',
  },
  {
    thisEnd: 723,
    orgName: '四川',
  },
  {
    thisEnd: 230,
    orgName: '福建',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
  {
    thisEnd: -23,
    orgName: '福建',
  },
];
var name = [
  '山东',
  '浙江',
  '河南',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
  '福建',
];
var year = '2021';
var date = '0727';
option = {
  //标题
  title: {
    show: true,
    text: '(元)',
    x: 3,
    y: 15,
    textStyle: {
      color: '#222222',
      fontSize: 10,
      fontWeight: '400',
    },
  },
  graphic: {
    type: 'text',
    top: '5.5%',
    right: '3%',
    style: {
      fill: '#222222',
      text: year + '/' + data,
      fontSize: 10,
    },
  },
  // 背景色
  backgroundColor: '#ffffff',
  //提示框
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        type: 'dashed',
        color: '#ffffff',
      },
      label: {
        show: false,
      },
    },
    formatter: function (params) {
      let sndParams;
      let text;
      let firstParams = params[0];
      if (params.length > 1) {
        sndParams = params[1];
        text =
          "<div style='min-width:94px;padding:0px 5px;border-radius:5px'>" +
          "<div style='font-size:12px'>" +
          firstParams.name +
          '</div>' +
          "<div style='display:flex;justify-content: space-between;font-size:12px'><div>" +
          firstParams.seriesName +
          ':</div><div>' +
          firstParams.value +
          '亿</div></div>' +
          "<div style='display:flex;justify-content: space-between;font-size:12px'><div>" +
          sndParams.seriesName +
          ':</div><div>' +
          sndParams.value +
          '%</div></div>' +
          '</div>';
      } else {
        let dw;
        if (firstParams.seriesName == '柱状图') {
          dw = '亿';
        } else {
          dw = '%';
        }
        text =
          "<div style='width:94px;padding:0px 5px;border-radius:5px'>" +
          "<div style='font-size:12px'>" +
          firstParams.name +
          '</div>' +
          "<div style='display:flex;justify-content: space-between;font-size:12px'><div>" +
          firstParams.seriesName +
          ':</div><div>' +
          firstParams.value +
          dw;
        '</div></div>' + '</div>';
      }

      return text;
    },
  },
  // 图例
  color: ['#2855FF', '#FF6800'],
  legend: {
    data: ['柱状图', '折线'],
    // selectedMode: false,
    textStyle: {
      color: '#222222',
      fontSize: 10,
      fontWeight: 300,
    },
    icon: 'circle',
    top: '3%',
    right: '18%',
    itemWidth: 5,
    itemHeight: 5,
  },
  grid: {
    left: '11%',
    right: '1%',
    top: '20%',
    bottom: '22%',
  },
  xAxis: {
    data: name,
    axisLine: {
      lineStyle: {
        type: 'dashed', //虚线
        color: 'rgba(255,22,43,1)',
        width: 1, //设置线条粗细
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      interval: 0,
      textStyle: {
        color: '#222222',
        fontWeight: 400,
        fontSize: 10,
      },
      formatter: function (value) {
        return value.split('').join('\n');
      },
    },
  },
  yAxis: [
    {
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed', //虚线
          color: 'rgba(255,22,43,0.2)',
          width: 1, //设置线条粗细
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#B4B4B4',
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#222222',
          fontWeight: 500,
          fontSize: 10,
        },
        formatter: '{value} ',
      },
      axisTick: {
        show: false,
      },
    },
    {
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed', //虚线
          color: 'rgba(255,22,43,0.2)',
          width: 1, //设置线条粗细
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#B4B4B4',
        },
      },
      axisLabel: {
        show: false,
        textStyle: {
          color: '#222222',
          fontWeight: 500,
          fontSize: 10,
        },
        formatter: '{value} ',
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '柱状图',
      type: 'bar',
      barWidth: 10,
      data: value.map((item, index) => {
        return {
          value: item.thisEnd,
          itemStyle: {
            normal: {
              barBorderRadius: item.thisEnd > 0 ? [5, 5, 0, 0] : [0, 0, 5, 5], //左上角参数1, 右上角参数2, 右下角参数3, 左下角参数4
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color:
                    item.orgName == '山东' || item.orgName == '中行'
                      ? item.thisEnd > 0
                        ? 'rgba(255,22,43,1)'
                        : 'rgba(255,22,43,0.2)'
                      : item.thisEnd > 0
                      ? 'rgba(22,69,255,1)'
                      : 'rgba(22,69,255,0.2)',
                },
                {
                  offset: 1,
                  color:
                    item.orgName == '山东' || item.orgName == '中行'
                      ? item.thisEnd > 0
                        ? 'rgba(255,22,43,0.2)'
                        : 'rgba(255,22,43,1)'
                      : item.thisEnd > 0
                      ? 'rgba(22,69,255,0.2)'
                      : 'rgba(22,69,255,1)',
                },
              ]),
            },
          },
        };
      }),
    },
    {
      name: '折线',
      type: 'line',
      smooth: 0,
      showAllSymbol: true,
      showSymbol: false,
      hoverAnimation: false,
      symbol: 'emptyCircle',
      symbolSize: 6,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          color: "#FF6800",
        },
        emphasis: {
          // 鼠标经过时：
          // symbolSize: 4,
        },
      },
      data: tbzf,
    },
  ],
};
      //图例切换
   myChart.on("legendselectchanged", function (obj) {
        const { selected, name } = obj;
        let yAxisIndex, x;
          if (selected["柱状图"]) {
            yAxisIndex = 1;
            option.title.text = "(元)";
            x = 3;
          } else if (!selected["柱状图"] && !selected["折线"]) {
            yAxisIndex = 1;
            option.title.text = "";
          } else {
            yAxisIndex = 0;
            option.title.text = "%";
            x = 15;
          }
        option.series[1].yAxisIndex = yAxisIndex;
        option.title.x = x;
        myChart.setOption(option);
      });
