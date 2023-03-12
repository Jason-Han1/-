option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '2016年全国各省份离婚率',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 4.89, name: '北京市' },
        { value: 4.24, name: '天津市' },
        { value: 2.96, name: '河北省' },
        { value: 2.09, name: '山西省' },
        { value: 3.92, name: '内蒙古自治区' },
        { value: 3.65, name: '辽宁省' },
        { value: 4.71, name: '吉林省' },
        { value: 4.91, name: '黑龙江省' },
        { value: 3.41, name: '上海市' },
        { value: 3.27, name: '江苏省' },
        { value: 2.65, name: '浙江省' },
        { value: 3.54, name: '安徽省' },
        { value: 2.51, name: '福建省' },
        { value: 2.24, name: '江西省' },
        { value: 2.58, name: '山东省' },
        { value: 2.93, name: '河南省' },
        { value: 3.13, name: '湖北省' },
        { value: 2.85, name: '湖南省' },
        { value: 1.95, name: '广东省' },
        { value: 2.35, name: '广西壮族自治区' },
        { value: 1.83, name: '海南省' },
        { value: 4.6, name: '重庆市' },
        { value: 3.61, name: '四川省' },
        { value: 3.43, name: '贵州省' },
        { value: 2.52, name: '云南省' },
        { value: 1.08, name: '西藏自治区' },
        { value: 2.67, name: '陕西省' },
        { value: 1.94, name: '甘肃省' },
        { value: 2.58, name: '青海省' },
        { value: 2.92, name: '宁夏回族自治区' },
        { value: 3.98, name: '新疆维吾尔自治区' }
      ]
    }
  ]
};