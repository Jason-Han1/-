option = {
    tooltip: {
      showContent: true,
      trigger: 'axis',
      backgroundColor: 'rgba(8,36,68,.7)',
      color: '#fff',
      textStyle: {
        color: '#fff'
      },
    },
    textStyle: {
      "color": "#c0c3cd",
      "fontSize": 14
    },
    legend: {
      top: "4%",
      left: '75%',
      "itemWidth": 13,
      "itemHeight": 13,
      itemStyle: {
        color: "#18A4FF"
      },
      "icon": "rect",
      "padding": 0,
      textStyle: {
        "color": "#c0c3cd",
        fontSize: 13,
        "padding": [2, 0, 0, 0]
      }
    },
    grid: {
      top: '23%',
      left: '14%',
      bottom: '25%',
      right: '10%'
    },
    xAxis: {
      nameTextStyle: {
        "color": "#c0c3cd",
        "padding": [0, 0, -10, 0],
        "fontSize": 14
      },
      axisLabel: {
        interval: 0,
        rotate: '45',
        formatter: function (value) {
          if (value.length > 3) {
            return `${value.slice(0, 2)}...`;
          }
          return value;
        },
        textStyle: {
          color: '#639FD2' //坐标轴字颜色
        },
        margin: 15
      },
      axisTick: {
        show: false //隐藏X轴刻度
      },
      splitLine: {     //网格线
        "show": false
      },
      data: ["武汉", "恩施", "十堰", "宜昌", "黄石", "黄冈", "鄂州", "随州"],
      type: "category"
    },
    yAxis: {
      axisLine: {
        show: false, //隐藏X轴轴线
        lineStyle: {
          color: '#11417a'
        }
      },
      axisTick: {
        show: false //隐藏X轴刻度
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      splitLine: {     //网格线
        "show": false
      }
    },
    series: [
      {
        name: '农机数量(辆)',
        data: [200, 85, 112, 275, 305, 415, 741, 405],
        "type": "bar",
        "showBackground": true,
        backgroundStyle: {
          color: "#0c3252"
        },
        "barMaxWidth": "auto",
        // "barWidth": 7,
        "barWidth": 17,
        "itemStyle": {
          barBorderRadius: [7, 7, 0, 0], // 圆角（左上、右上、右下、左下）
          "color": {
            "x": 0,
            "y": 0,
            "x2": 0,
            "y2": 1,
            "type": "linear",
            "global": false,
            "colorStops": [{
              "offset": 0,
              "color": "#0b9eff"
            }, {
              "offset": 1,
              "color": "#63caff"
            }]
          }
        },
        "label": {
          "show": true,
          "position": "top",
          "distance": 10,
          "color": "#fff",
          "fontSize":13
        }
      },
    ],
};
