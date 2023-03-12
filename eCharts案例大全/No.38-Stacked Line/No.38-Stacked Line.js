option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['广州西门子变压器公司', '耐恒（广州）纸品有限公司', '广州斗原钢铁有限公司', '广州璨宇光学有限公司', '佐登妮丝（广州）有限公司']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2021-12-20 00:00:00', '2021-12-20 06:00:00', '2021-12-20 12:00:00', '2021-12-20 18:00:00', '2021-12-21 00:00:00', '2021-12-21 06:00:00', '2021-12-21 12:00:00', '2021-12-21 18:00:00', '2021-12-22 00:00:00']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '广州西门子变压器公司',
      type: 'line',
      // stack: 'Total',
      data: [130, 105, 135, 120, 175, 205, 185, 195, 208],
      smooth: true,
    },
    {
      name: '耐恒（广州）纸品有限公司',
      type: 'line',
      // stack: 'Total',
      data: [225, 222, 180, 234, 205, 180, 170, 220, 231],
      smooth: true,
    },
    {
      name: '广州斗原钢铁有限公司',
      type: 'line',
      // stack: 'Total',
      data: [180, 230, 201, 150, 230, 230, 240, 210, 240],
      smooth: true,
    },
    {
      name: '广州璨宇光学有限公司',
      type: 'line',
      // stack: 'Total',
      data: [180, 175, 201, 210, 200, 142, 205, 235, 248],
      smooth: true,
    },
    {
      name: '佐登妮丝（广州）有限公司',
      type: 'line',
      // stack: 'Total',
      data: [235, 250, 238, 252, 260, 245, 235, 235, 230],
      smooth: true,
    }
  ]
};