data = 50
option = {
    backgroundColor:'RGBA(26, 38, 67, 1)',
    title: {
      "text": '测试',
      "bottom": '20%',
      x:'center',
      "textStyle": {
        "fontSize":20,
        "fontWeight": "bold",
        "color": "#bcbfff"
      }
    },
    angleAxis: {
    show: false,
    startAngle: 275, //极坐标初始角度
    splitLine: {
      show: false,
    },
    },
    barMaxWidth: 10, //圆环宽度
    radiusAxis: {
    show: false,
    type: 'category',
    },
    //圆环位置和大小
    polar: {
    center: ['50%', '50%'],
    radius: '80%',
    },
    series: [
    {
      type: 'bar',
      stack: '测试',
      data: [
        {
          //上层圆环，显示数据
          value: data,
          name: 'sdfasdf',
          itemStyle: {
            color: { // 颜色渐变
                 colorStops: [{
                   offset: 0,
                   color: 'rgba(48, 236, 166, 0.2)' // 0% 处的颜色
                 }, {
                   offset: 1,
                   color: 'rgba(48, 236, 166, 1)' // 100% 处的颜色1
                 }]
            },
          },
        },
      ],
      barGap: '-100%', //柱间距离,上下两层圆环重合
      coordinateSystem: 'polar',
      roundCap: true, //顶端圆角从 v4.5.0 开始支持
      z: 2, //圆环层级，同zindex
    },
    {
      //下层圆环，显示最大值
      type: 'bar',
      data: [
        {
          value: 100,
          itemStyle: {
            color: {
              //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1, //从左到右 0-1
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: 'transparent',
                },
                {
                  offset: 1,
                  color: 'transparent',
                },
              ],
            },
          },
        },
      ],
      barGap: '-100%',
      coordinateSystem: 'polar',
      roundCap: true,
      z: 1,
    },
    {
      stack: '测试',
      type: 'bar',
      data: [0.1],
      showBackground: false,
      coordinateSystem: 'polar',
      roundCap: true,
      barWidth: 12,
      itemStyle: {
        color: '#fff',
        borderColor: 'rgba(220,197,239,.4)',
        borderWidth: 4,
        shadowColor: 'rgb(220,197,239)',
      },
    },
    {
      name: '外部刻度',
      type: 'gauge',
      //  center: ['20%', '50%'],
      radius: '70%',
      splitNumber: 4, //刻度数量
      axisLine: {
        show: false,
      },
      //仪表盘文字
      axisLabel: {
        show: false,
    
      }, //刻度标签。
      axisTick: {
        show: false,
    
      }, //刻度样式
      splitLine: {
        show: false,
    
      }, //分隔线样式
      detail: {
        show: false,
    
      },
      pointer: {
        show: false,
      },
      title: {
        show: true,
        offsetCenter: [0, 0],
        textStyle: {
          fontSize: 32,
          color: '#30ECA6',
          fontWeight:600,
    
        },
      },
      data: [
        {
          value: 100,
          name: data+'%'
        },
      ],
    },
    ],
};
myChart.setOption(option)