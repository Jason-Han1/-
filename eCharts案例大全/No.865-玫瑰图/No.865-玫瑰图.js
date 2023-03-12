option = {
  legend: {
    show: false,
    top: 'bottom',
  },
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },

  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      showEmptyCircle: false,
      label: {
        rotate: 0,
        show: true,
        overflow: 'truncate',
        position: 'outer',
        alignTo: 'none',
        edgeDistance: '25%',
        bleedMargin: 10,
        formatter: '{b},{c}',
      },
      data:[{"name":"电子","value":17.78},{"name":"机械","value":13.74},{"name":"医药","value":13.68},{"name":"食品饮料","value":7.26},{"name":"计算机","value":7.15},{"name":"基础化工","value":6.07},{"name":"银行","value":5.87},{"name":"轻工制造","value":5.41},{"name":"电力及公用事业","value":5.12},{"name":"建筑","value":3.65},{"name":"通信","value":2.83},{"name":"房地产","value":2.54},{"name":"电力设备及新能源","value":2.22},{"name":"煤炭","value":1.62},{"name":"交通运输","value":1.53},{"name":"商贸零售","value":1.09},{"name":"建材","value":0.81},{"name":"汽车","value":0.68},{"name":"农林牧渔","value":0.58},{"name":"消费者服务","value":0.23},{"name":"家电","value":0.12},{"name":"石油石化","value":0},{"name":"有色金属","value":0},{"name":"钢铁","value":0},{"name":"国防军工","value":0},{"name":"纺织服装","value":0},{"name":"非银行金融","value":0},{"name":"传媒","value":0},{"name":"综合","value":0},{"name":"综合金融","value":0}],
    },
  ],
};
