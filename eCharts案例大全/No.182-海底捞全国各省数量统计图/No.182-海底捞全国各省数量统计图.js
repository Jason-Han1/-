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
  title: {
    text: '海底捞全国各省数量统计图',
    left: 'center'
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 200],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 176, name: '广东' },
        { value: 143, name: '江苏' },
        { value: 114, name: '浙江' },
        { value: 74, name: '北京' },
        { value: 72, name: '河南' },
        { value: 69, name: '陕西' },
        { value: 69, name: '上海' },
        { value: 67, name: '山东' },
        { value: 64, name: '湖北' },
        { value: 57, name: '福建' },
        { value: 46, name: '安徽' },
        { value: 46, name: '河北' },
        { value: 42, name: '湖南' },
        { value: 40, name: '四川' },
        { value: 29, name: '天津' },
        { value: 24, name: '广西' },
        { value: 24, name: '江西' },
        { value: 22, name: '辽宁' },
        { value: 18, name: '山西' },
        { value: 15, name: '云南' },
        { value: 14, name: '甘肃' },
        { value: 14, name: '吉林' },
        { value: 14, name: '重庆' },
        { value: 12, name: '内蒙' },
        { value: 11, name: '贵州' },
        { value: 10, name: '黑龙江' },
        { value: 9, name: '海南' },
        { value: 8, name: '宁夏' },
        { value: 3, name: '青海' }
      ]
    }
  ]
};