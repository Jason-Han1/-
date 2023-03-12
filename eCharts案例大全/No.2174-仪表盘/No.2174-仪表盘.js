var option;

var placeHolderStyle = {
  label: {
    show: false,
  },
  labelLine: {
    show: false,
  },
  color: 'rgba(0,0,0,0)',
  borderWidth: 0,
};

option = {
    backgroundColor:"#000",
    title:{
        text:"MBPs",
        left:'43%',
        top:"66%",
        textStyle:{
            color:'#74757a',
            fontSize:'50'
        }
    },
  legend: {
    legend: {
      orient: 'vertical', //设置图例的方向
      right: 10,
      top: 'center',
      itemGap: 30, //设置图例的间距
    },
  },

  graphic: {
    type: 'text',
    left: '38%',
    top: '75%',
    style: {
      text: '实时业务宽带',
      textAlign: 'center',
      fill: '#fff',
      fontSize: 40,
    },
  },

  series: [
    // 仪表盘
    {
      type: 'gauge',
      min: 0,
      max: 100,
      splitNumber: 5,
      // 进度
      progress: {
        show: true,
        width: 18,
        roundCap: true,
        itemStyle:{
              color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              {
                offset: 0,
                color: '#4f61d5',
              },
              {
                offset: 1,
                color: '#8191f9',
              },
            ]),
          }
      },
      // 仪表盘轴线相关配置
      axisLine: {
        // 仪表盘轴线样式
        lineStyle: {
          width: 18,
          shadowBlur: 30,
          shadowColor: '#9a9696',
          color:[[1, '#54565c']]
        },
        // 是否在两端显示成圆形
        roundCap: true,
      },
      // 刻度样式
      axisTick: {
        show: false,
      },
      // 分隔线样式
      splitLine: {
        show: false,
      },
    //   刻度标签
      axisLabel: {
        distance: 25,
        color: '#999',
        fontSize: 20,
      },
    //   指针
      pointer:{
          length:"100%",
          width:12,
          itemStyle:{
              shadowColor:"#404247",
              shadowOffsetY:'10',
              shadowBlur: 10,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
              {
                offset: 0,
                color: '#4f61d5',
              },
              {
                offset: 1,
                color: '#8191f9',
              },
            ]),
          }
      },
      // 仪表盘详情
      detail: {
        // 是否开启标签的数字动画
        valueAnimation: true,
        fontSize: 80,
        offsetCenter: [0, '30%'],
        color: '#fff',
      },
      data: [
        {
          value: 20,
        },
      ],
    },
    // 外圆线
    {
      type: 'pie',
      radius: ['80%', '79%'],
      center: ['50%', '50%'],
      hoverAnimation: false, //鼠标移入变大
      startAngle: 225,
      labelLine: {
        show: false,
      },
      label: {
        position: 'center',
      },
      data: [
        {
          value: 75,
          itemStyle: {
            shadowBlur: 30,
            shadowColor: '#fff',
            color:'#4e576f'
          },
        },
        {
          value: 25,
          itemStyle: placeHolderStyle,
        },
      ],
    },
  ],
};
option && myChart.setOption(option);
