// 指定图表的配置项和数据
var option = {
    backgroundColor: "#000f1d",
    tooltip: {
    //鼠标悬浮弹出提示框
    trigger: "axis" //提示框弹出的触发时间，折线图和柱状图为axis
  },
  legend: {
    top: "8%",
    left: "5%",
    itemGap: 20,
    data: [{
        name: "本期",
        icon: "path://M1.667752 1.667752h1020.664496v1020.664496H1.667752z",
        textStyle: {
            color: "#ffffff"
        }
    }, {
        name: "同期",
        icon: "path://M1.667752 1.667752h1020.664496v1020.664496H1.667752z",
        textStyle: {
            color: "#ffffff"
        }
    }, {
        name: "目标",
        icon: "path://M1.667752 1.667752h1020.664496v1020.664496H1.667752z",
        textStyle: {
            color: "#ffffff"
        }
    }]
  },
  grid: {
    top: "20%",
    left: "10%",
    right: "10%",
    bottom: "15%",
    containLabel: true
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
          show: true
      },
      axisTick: {
          color: '#41515f',
          length: 20
      },
      splitLine: {
          show:false
      },
      axisLabel: {
          color: '#41515f',
          padding: [0, 0 , 15, 0]
      }
    }
  ],
  xAxis: [
    {
      type: "category",
      axisLine: {
          symbol: ['none', 'arrow'],
          symbolSize: [6, 20]
      },
      axisTick: {
          show:false
      },
      splitLine: {
          show:false
      },
      axisLabel: {
        interval: 0,
        show: true,
        splitNumber: 5,
        textStyle: {
          fontSize: 12,
          color: "#ffffff"
        }
      },
      data: ["团险", "金融", "政保"]
    }
  ],
  series: [
    {
      name: "本期",
      type: "bar",
      data: [9, 50, 9],
      color: "#50a2be"
    },
    {
      name: "同期",
      type: "bar",
      data: [20, 15, 20],
      color: "#005071"
    },
    {
      name: "目标",
      type: "bar",
      color: "#00285a",
      data: [20, 14, 20]
    }
  ]
};