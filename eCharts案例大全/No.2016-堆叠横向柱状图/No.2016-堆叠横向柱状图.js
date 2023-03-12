option = {
 backgroundColor: '#0f375f',
 title: {
  text: '乡村产业用地面积统计',
  left: 'center',
  top: '20',
 },
 dataZoom: [
  //Y轴滑动条
  {
   type: 'slider', //滑动条
   show: true, //开启
   yAxisIndex: [0],
   left: '93%', //滑动条位置
   start: 100, //初始化时，滑动条宽度开始标度
   end: 70,
   width: '0',
   fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
    {
     offset: 0,
     color: '#47ACE7',
    },
    {
     offset: 1,
     color: '#47ACE7',
    },
   ]),
   // handleIcon:'image://https://csdnimg.cn/medal/qixiebiaobing4@240.png',
   borderColor: 'transparent',
   backgroundColor: 'white', //两边未选中的滑动条区域的颜色
   showDataShadow: false, //是否显示数据阴影 默认auto
   showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
  },
  {
   type: 'inside',
   yAxisIndex: 0,
   zoomOnMouseWheel: false, //滚轮是否触发缩放
   moveOnMouseMove: true, //鼠标滚轮触发滚动
   moveOnMouseWheel: true,
  },
 ],
 tooltip: {
  trigger: 'axis',
  textStyle: {
   // 提示框浮层的文本样式。
   color: '#fff',
   fontStyle: 'normal',
   fontWeight: 'normal',
   fontFamily: 'sans-serif',
   fontSize: 14,
  },
  axisPointer: {
   type: 'shadow',
  },
  extraCssText:
   'color:#fff;border:1px solid #eee;background:rgba(11,56,109,0.8);box-shadow:rgb(132, 255, 255) 0px 0px 10px inset;',
 },
 legend: {
  data: ['其中使用存量集体建设用地面积', '用地面积'],
  right: '80',
  top: '20',
  textStyle: {
   //文字样式
   color: '#fff',
   fontSize: '12',
  },
 },
 xAxis: {
  type: 'value',
  splitLine: {
   show: true,
   lineStyle: {
    color: '#666',
   },
  },
  axisTick: {
   show: false,
  },
  axisLabel: {
   textStyle: {
    color: '#fff',
    fontSize: 12,
   },
  },
  axisLine: {
   lineStyle: {
    color: '#fff',
   },
  },
 },
 yAxis: {
  type: 'category',
  splitLine: {
   show: false,
  },
  axisTick: {
   show: false,
  },
  data: [
   '菏泽市',
   '滨州市',
   '聊城市',
   '德州市',
   '临沂市',
   '莱芜市',
   '日照市',
   '威海市',
   '泰安市',
   '济宁市',
   '潍坊市',
   '烟台市',
   '东营市',
   '枣庄市',
   '淄博市',
   '青岛市',
   '济南市',
  ],
  axisLabel: {
   textStyle: {
    color: '#fff',
    fontSize: 12,
   },
  },
  axisLine: {
   lineStyle: {
    color: '#ddd',
   },
  },
 },
 series: [
  {
   name: '其中使用存量集体建设用地面积',
   type: 'bar',
   data: [80, 80, 97, 53, 95, 70, 88, 66, 99, 87, 53, 79, 91, 82, 53, 62, 71, 88, 98],
   itemStyle: {
    emphasis: {
     barBorderRadius: [0, 20, 20, 0],
    },
    normal: {
     barBorderRadius: [0, 20, 20, 0],
     color: new echarts.graphic.LinearGradient(
      0,
      0,
      1,
      0,
      [
       {
        offset: 0,
        color: 'rgba(30,188,222,0.1)', // 0% 处的颜色
       },
       {
        offset: 1,
        color: 'rgba(31,204,234,0.9)', // 100% 处的颜色
       },
      ],
      false
     ),
    },
   },
   label: {
    normal: {
     show: false,
     formatter: '{c}',
     position: 'insideRight',
     offset: [-2, 1.5],
     textStyle: {
      color: '#fff',
      fontSize: 10,
     },
    },
   },
  },
  {
   name: '用地面积',
   textStyle: {
    // 提示框浮层的文本样式。
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: 14,
   },
   type: 'bar',
   barGap: '-100%',
   itemStyle: {
    color: 'rgba(0,0,0,0)',
    borderColor: '#fff',
    padding: 0,
    emphasis: {
     barBorderRadius: [0, 20, 20, 0],
    },
    normal: {
     barBorderRadius: [0, 20, 20, 0],
     color: new echarts.graphic.LinearGradient(
      0,
      0,
      1,
      0,
      [
       {
        offset: 0,
        color: 'rgba(5,90,202,0.1)', // 0% 处的颜色
       },
       {
        offset: 1,
        color: 'rgba(4,121,255,0.9)', // 100% 处的颜色
       },
      ],
      false
     ),
    },
   },
   label: {
    normal: {
     show: false,
     lineHeight: 12,
     formatter: '{c}',
     position: 'right',
     right: 0,
     textStyle: {
      color: '#fff',
      fontSize: 12,
     },
    },
   },
   z: -10,
   data: [130, 150, 146, 130, 150, 124, 127, 129, 138, 112, 139, 148, 158, 168, 175, 187, 193],
  },
 ],
 barCategoryGap: '40%',
};
