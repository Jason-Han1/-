// geo文件地址
var uploadedDataURL = '/asset/get/s/data-1617778426692-KdrH1rape.json';

// 默认option
options = {
  title: {
    text: '数据集dataset使用示例',
  },
  tooltip: {},
  dataset: [
    {
      source: [
        { name: '北京市', value: 589 },
        { name: '广东省', value: 543 },
        { name: '云南省', value: 536 },
        { name: '四川省', value: 368 },
        { name: '江苏省', value: 329 },
        { name: '上海市', value: 318 },
        { name: '浙江省', value: 315 },
        { name: '陕西省', value: 269 },
        { name: '山东省', value: 267 },
        { name: '广西壮族自治区', value: 258 },
        { name: '黑龙江省', value: 245 },
        { name: '台湾省', value: 244 },
        { name: '河北省', value: 237 },
        { name: '河南省', value: 233 },
        { name: '湖南省', value: 216 },
        { name: '湖北省', value: 202 },
        { name: '重庆市', value: 189 },
        { name: '江西省', value: 187 },
        { name: '吉林省', value: 182 },
        { name: '天津市', value: 173 },
        { name: '福建省', value: 170 },
        { name: '新疆维吾尔自治区', value: 170 },
        { name: '青海省', value: 167 },
        { name: '安徽省', value: 159 },
        { name: '贵州省', value: 154 },
        { name: '辽宁省', value: 146 },
        { name: '内蒙古自治区', value: 137 },
        { name: '海南省', value: 125 },
        { name: '山西省', value: 96 },
        { name: '香港', value: 75 },
        { name: '甘肃省', value: 73 },
        { name: '西藏自治区', value: 71 },
        { name: '宁夏回族自治区', value: 44 },
        { name: '澳门', value: 5 },
      ],
    },
  ],
  grid: [
    {
      top: 5,
      right: '5%',
      bottom: '39%',
      left: '65%',
      height: '55%',
      containLabel: true,
    },
  ],
  xAxis: {},
  yAxis: {
    type: 'category',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  visualMap: [
    {
      type: 'piecewise',
      splitNumber: 10,
      min: 0,
      max: 600,
      minOpen: true,
      maxOpen: true,
      selectedMode: 'multiple',
      text: ['高', '低'],
      textGap: 6,
      itemGap: 0,
      dimension: 1,
      inRange: {
        color: ['#E9E3F5', '#51259F'],
      },
    },
  ],
  series: [
    {
      type: 'map',
      mapType: 'map',
      roam: true,
      zoom: 1,
      left: '5%',
      top: '5%',
      right: '40%',
      bottom: '5%',
      scaleLimit: {
        min: 1,
        max: 4,
      },
      label: {
        show: false,
      },
      aspectScale: 0.75,
      tooltip: {
        formatter: '{b}:{c}',
      },
      nameMap: {
        'CHN.15': '内蒙古自治区',
        'CHN.37': '山东省',
        'CHN.14': '山西省',
        'CHN.36': '江西省',
        'CHN.13': '河北省',
        'CHN.35': '福建省',
        'CHN.12': '天津市',
        'CHN.34': '安徽省',
        'CHN.11': '北京市',
        'CHN.33': '浙江省',
        'CHN.32': '江苏省',
        'CHN.54': '西藏自治区',
        'CHN.31': '上海市',
        'CHN.53': '云南省',
        'CHN.52': '贵州省',
        'CHN.51': '四川省',
        'CHN.50': '重庆市',
        'CHN.82': '澳门',
        'CHN.81': '香港',
        'CHN.46': '海南省',
        'CHN.23': '黑龙江省',
        'CHN.45': '广西壮族自治区',
        'CHN.22': '吉林省',
        'CHN.44': '广东省',
        'CHN.21': '辽宁省',
        'CHN.43': '湖南省',
        'CHN.65': '新疆维吾尔自治区',
        'CHN.42': '湖北省',
        'CHN.64': '宁夏回族自治区',
        'CHN.41': '河南省',
        'CHN.63': '青海省',
        'CHN.62': '甘肃省',
        'CHN.61': '陕西省',
        'CHN.71': '台湾省',
      },
    },
    {
      type: 'bar',
      barMaxWidth: 15,
      barCategoryGap: '12px',
      axisLabel: {
        show: true,
      },
      encode: {
        x: 'value',
        y: 'name',
      },
    },
    {
      type: 'pie',
      radius: ['40%', '70%'],
      emphasis: {
        label: {
          show: true,
          fontSize: 24,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      top: '61%',
      right: '5%',
      bottom: 5,
      left: '65%',
      height: '35%',
      encode: {
        itemName: 'name',
        value: 'value',
      },
    },
  ],
};

// 异步加载地图geo文件
fetch(uploadedDataURL)
  .then(function (response) {
    // 转换为 JSON
    return response.json();
  })
  .then(function (mapJson) {
    echarts.registerMap('map', mapJson);
    myChart.setOption(options);
  });
