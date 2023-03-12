function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '销售趋势',
      left: 'left'
    },
    color: ["#37A2DA", ],
    legend: {
      data: ['销售额', ],
      top: 30,
      left: 'center',
      backgroundColor: 'orange',
      z: 100,
      show: true
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7'],
      show: true
    },
    yAxis:{
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }, 
      rich: {},
      show: true
    },
    series: [{
      name: '销售额',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 118, 40, 33],  
    },]
    
  };
    
  chart.setOption(option);
  return chart;
}
