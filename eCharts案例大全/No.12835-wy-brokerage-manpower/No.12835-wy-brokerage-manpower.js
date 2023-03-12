option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  toolbox: {
    show: true,
    right: 80,
    feature: {
      saveAsImage: {}
    }
  },
  legend: {
    type: 'scroll',
    data: ['上岗人力', '出单人力', '在职人力']
  },
  xAxis: {
    type: 'category',
    data: ['浙江分公司', '江苏分公司', '云南', '安徽分部', '山西', '上海', '广州', '河北']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '上岗人力',
      type: 'bar',
      barCategoryGap: 30,
      // label: {
      //   position: 'top',
      //   show: true
      // },
      data: [45, 180, 210, 90, 94, 88, 560, 190]
    },
    {
      name: '出单人力',
      type: 'bar',
      barCategoryGap: 30,
      // label: {
      //   position: 'top',
      //   show: true
      // },
      data: [20, 100, 160, 50, 80, 100, 400, 202]
    },
    {
      name: '在职人力',
      type: 'bar',
      barCategoryGap: 30,
      // label: {
      //   position: 'top',
      //   show: true
      // },
      data: [50, 200, 360, 100, 100, 200, 460, 220]
    }
  ]
};
