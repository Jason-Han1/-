var uploadedDataURL = '/asset/get/s/data-1619331932890-vGo73FpJO.json';

// 默认option
options = {
  title: {
    text: '数据集dataset使用示例'
  },
  tooltip: {},
  dataset: [
    {
      source: [
        { name: '南宁市', value: 20057.34 },
        { name: '桂林市', value: 15477.48 },
        { name: '梧州市', value: 31686.1 },
        { name: '北海市', value: 6992.6 },
        { name: '防城港市', value: 44045.49 },
        { name: '钦州市', value: 40689.64 },
        { name: '贵港市', value: 37659.78 },
        { name: '玉林市', value: 45180.97 },
        { name: '百色市', value: 55204.26 },
        { name: '贺州市', value: 65204.26 },
        { name: '河池市', value: 15204.26 },
        { name: '柳州市', value: 25204.26 },
        { name: '来宾市', value: 35204.26 },
      ],
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'value', order: 'asc' },
      },
    },
  ],
  grid: {
    top: '75%',
    height: '20%',
  },
  xAxis: [
    {
      type: 'category',
      inverse: true,
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  visualMap: {
    type: "piecewise",
    splitNumber: 8,
    min: 0,
    max: 100000,
    calculable: true,
    realtime: false,
    inRange: {
      color: ["#ceebff", "#9ad5ff", "#52b8ff", "#1096f3", "#047fd4"]
    }
  },
  series: [
    {
      type: 'map',
      mapType: 'map',
      roam: true,
      top: '5%',
      bottom: '33%',
      scaleLimit: {
        min: 1,
        max: 4,
      },
      label: {
        show: false,
      },
      aspectScale: 0.75,
      tooltip: {
        formatter: '{b}: {c}',
      },
    },
    {
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        borderRadius: [8, 8, 0, 0],
      },
      barWidth: 16,
      itemStyle: {
        borderRadius: [8, 8, 0, 0],
      },
      datasetIndex: 1,
      encode: {
        x: 'name',
        y: 'value',
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
