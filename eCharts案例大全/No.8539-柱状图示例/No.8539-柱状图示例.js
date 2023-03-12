const xData = ['2011-12-01','2011-12-01','2011-12-01']
const yData = ['123','2011','11']

option = {
    color: ['#6F7AF8'],
    grid: {
      top: '15%',
      left: 16,
      right: 16,
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        lineStyle: {
          color: 'rgba(0,0,0,0.25)',
        },
      },
      backgroundColor: 'rgba(255,255,255)',
      padding: 12,
      textStyle: {
        color: 'rgba(0,0,0,0.65);',
      },
      hideDelay: 3000,
      enterable: true,
      confine: true,
    },
    legend: {
      show: false,
    },
    xAxis: {
      type: 'category',
      data: xData,
    },
    yAxis: {
      type: 'value',
      name: '实例数',
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    series: [
      {
        data: yData,
        type: 'bar',
        name: '实例数',
        barCategoryGap: '70%',
      },
    ],
    dataZoom: [
      { show: true, type: 'slider', height: 16 },
      { show: true, type: 'inside', height: 16 },
    ],
  }