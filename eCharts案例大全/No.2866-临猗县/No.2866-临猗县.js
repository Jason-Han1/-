var uploadedDataURL = '/asset/get/s/data-1625456082632-CVPw0gSZI.json';
myChart.showLoading();
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('LYX', geoJson);
  myChart.hideLoading();
  var geoCoordMap = {
    猗氏镇: [110.794718, 35.153412],
    嵋阳镇: [110.700156, 35.098839],
    临晋镇: [110.562886, 35.103333],
    七级镇: [110.542294, 35.005277],
    东张镇: [110.425047, 35.064532],
    孙吉镇: [110.520964, 35.23726],
    三管镇: [110.843768, 35.233411],
    牛杜镇: [110.800853, 35.103173],
    耽子镇: [110.573897, 35.17244],
    楚侯乡: [110.876782, 35.096131],
    庙上乡: [110.654908, 35.039086],
    角杯乡: [110.448141, 35.136125],
    北辛乡: [110.586949, 35.207343],
    北景乡: [110.743682, 35.212466],
  };

  var data = [
    { name: '猗氏镇', value: 8888 },
    { name: '嵋阳镇', value: 110 },
    { name: '临晋镇', value: 110 },
    { name: '七级镇', value: 110 },
    { name: '东张镇', value: 110 },
    { name: '孙吉镇', value: 222 },
    { name: '三管镇', value: 110 },
    { name: '牛杜镇', value: 110 },
    { name: '耽子镇', value: 110 },
    { name: '楚侯乡', value: 110 },
    { name: '庙上乡', value: 333 },
    { name: '角杯乡', value: 110 },
    { name: '北辛乡', value: 110 },
    { name: '北景乡', value: 9999 },
  ];

  var convertData = (data) => {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };

  option = {
    backgroundColor: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#0f378f', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#00091a', // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {},
    },
    geo: {
      map: 'LYX',
      show: true,
      roam: true,
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          areaColor: '#00091a',
          borderColor: '#00091a', //线
          shadowColor: '#00091a', //外发光
          shadowBlur: 20,
        },
        emphasis: {
          areaColor: '#00091a', //悬浮区背景
        },
      },
    },
    series: [
      {
        name: '临猗县',
        type: 'map',
        mapType: 'LYX',
        label: {
          normal: {
            textStyle: {
              fontSize: 15,
              fontWeight: 'bold',
              color: '#fff',
            },
          },
        },
        aspectScale: 0.75,
        zoom: 1,
        itemStyle: {
          normal: {
            label: { show: true },
            color: '#F4F4F4',
            borderWidth: 0.5, //区域边框宽度
            borderColor: '#080E1F', //区域边框颜色
            // areaColor: "#5389EB", //区域颜色
            areaColor: '#243fa1', //区域颜色
          },
          emphasis: {
            label: { show: true },
            borderWidth: 0.5,
            borderColor: '#4b0082',
            areaColor: '#ffdead',
          },
        },
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        legendHoverLink: true,
        symbolSize: [50, 50],
        // legendHoverLink: true,
        label: {
          show: true,
          formatter(value) {
            return value.data.value[2];
          },
          color: '#fff',
        },
        itemStyle: {
          normal: {
            color: '#D8BC37', //标志颜色
            shadowBlur: 2,
            shadowColor: 'D8BC37',
          },
        },
        data: convertData(data),
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke',
        },
        hoverAnimation: true,
        zlevel: 1,
      },
    ],
  };
  myChart.setOption(option);
});
