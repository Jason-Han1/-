option = {
 backgroundColor: '#ffffff',
 title: {
  text: '',
  left: 'center',
 },
 tooltip: {
  trigger: 'axis',
  axisPointer: {
   // 坐标轴指示器，坐标轴触发有效
   type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
  },
 },
 grid: {
  left: '3%',
  right: '4%',
  bottom: '5%',
  containLabel: true,
 },
 xAxis: [
  {
   type: 'category',
   axisTick: {
    show: false,
   },
      axisLine: {
         lineStyle: {
          type: 'solid',
          width: 0.5,
          color: "#ccc",
          // opacity: 0.5
      }
      },
   // data: ['1月','2月','3月']
  },
 ],
 yAxis: {
  type: 'value',
  nameTextStyle: {
   fontSize: 14,
   color: '#fff',
  },
  axisLabel: {
   textStyle: {
    fontSize: 12,
    color: '#4D4D4D',
   },
  },
  splitLine: {
   lineStyle: {
    type: 'dotted',
    width: 0.5,
    color: '#f2f2f2', //网格线颜色
    // opacity: 0.5
   },
  },
  axisLine: {
   show: false,
  },
  axisTick: {
   show: false,
  },
 },
 series: [
  {
   type: 'bar',
   barWidth: '10',
   label: {
    show: true,
    position: 'top',
    textStyle: {
     color: '#000000',
    },
   },
   itemStyle: {
    normal: {
     color: function (params) {
   
      var colorListr = ['#0f4471', '#00adb5', '#ff5722'];
      return colorListr[params.dataIndex];
     },
     label: {
      show: true,
      position: 'top',
      formatter: '{c}',
      fontSize: 14,
      color:'#000'
      
     },
     shadowBlur: 1,
     shadowColor: 'rgba(40, 40, 40, 0.3)',
    },
   },
   data: [2031, 1793, 3640],
  },
 ],
};
