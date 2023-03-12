var uploadedDataURL = '/asset/get/s/data-1619418162876-vDvrq4dZv.json';
let valArr1 = [
  {
    name: '成都',
    value: [103.942877, 30.498243],
  },
  {
    name: '绵阳',
    value: [104.755866, 31.421492],
  },
  {
    name: '南充',
    value: [106.184088, 30.819564],
  },
  {
    name: '巴中',
    value: [106.77735, 31.833093],
  },
  {
    name: '广元',
    value: [105.810553, 32.39142],
  },
  {
    name: '凉山',
    value: [102.163092, 27.90934],
  },
  {
    name: '乐山',
    value: [103.679205, 29.604364],
  },
  {
    name: '阿坝',
    value: [102.360846, 31.889079],
  },
  {
    name: '广安',
    value: [106.645514, 30.403534],
  },
];
let valArr2 = [
  {
    name: '成都',
    value: 111,
  },
  {
    name: '绵阳',
    value: 132,
  },
  {
    name: '南充',
    value: 345,
  },
  {
    name: '巴中',
    value: 543,
  },
  {
    name: '广元',
    value: 634,
  },
  {
    name: '凉山',
    value: 456,
  },
  {
    name: '乐山',
    value: 567,
  },
  {
    name: '阿坝',
    value: 765,
  },
  {
    name: '广安',
    value: 234,
  },
];
valArr1.forEach((item) => {
  let val = valArr2.find((ele) => ele.name == item.name).value;
  item.value.push(val);
});
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('chinamap', geoJson);
  loadMap('chinamap');
});
function loadMap(name) {
  option = {
    backgroundColor:'rgba(0,0,0,0.5)',
    tooltip: {
      show: true,
      // padding: [6, 10],
      // backgroundColor: 'transparent',
      borderColor:'#fff',
      textStyle: {
        align: 'left',
        verticalAlign: 'middle',
        lineHeight: 26,
        // color:'#fff'
      },
    },
    geo: {
      map: name,
      aspectScale: 1, //长宽比
      zoom: 0.9,
      selectedMode: 'false', //是否允许选中多个区域
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
          color: '#fff',
        },
      },
      itemStyle: {
        areaColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#144a69', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#0c6c96', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        label: { show: false },
        shadowColor: 'rgba(0,243,255,0.2)',
        shadowOffsetY: 5,
        shadowBlur: 10,
        borderColor: 'rgba(184, 239, 243,0.6)',
        borderWidth: 2,
        opacity: 1,
      },
      emphasis: {
        label: { show: false },
        itemStyle: {
          areaColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#144a69', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#0c6c96', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          opacity: 0,
        },
      },
      tooltip: {
        show: false,
      },
    },
    series: [
      {
        name: '',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: valArr1,
        symbol: 'circle',
        symbolOffset: [-10, 10],
        symbolSize: [10, 10],
        label: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          opacity: 0,
          color: 'red',
        },
        emphasis: {
          show: true,
          itemStyle: {
            opacity: 1,
          },
        },
        tooltip: {
          show: true,
        },
      },
      {
        name: 'MAP',
        type: 'map',
        map: name,
        // geoIndex: 0,
        label: {
          normal: {
            show: false,
            color: '#fff',
          },
          emphasis: {
            show: false,
            color: '#fff',
          },
        },
        aspectScale: 1, //长宽比
        zoom: 0.9,
        selectedMode: 'false', //是否允许选中多个区域
        itemStyle: {
          normal: {
            // areaColor: "#3facd3",
            areaColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#144a69', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#0c6c96', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            label: { show: false },
            borderColor: '#6bd4f8',
            borderWidth: 1,
            opacity: 1,
          },
        },
        emphasis: {
          label: { show: false },
          itemStyle: {
            areaColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#144a69', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#0c6c96', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            opacity: 1,
          },
        },
        tooltip: {
          show: false,
        },
        data: valArr2,
      },
    ],
  };
myChart.setOption(option);
  // tooltip轮播
  var faultByHourIndex = 0; //播放所在下标
  function tooltipcart() {
    //使得tootip每隔三秒自动显示
    myChart.dispatchAction({
      type: 'showTip', // 根据 tooltip 的配置项显示提示框。
      seriesIndex: 0,
      dataIndex: faultByHourIndex,
    });
    myChart.dispatchAction({
      type: 'highlight', // 高亮显示
      seriesIndex: 0,
      dataIndex: faultByHourIndex,
    });
    myChart.dispatchAction({
      type: 'downplay', // 取消高亮
      seriesIndex: 0,
      dataIndex: faultByHourIndex == 0 ? option.series[0].data.length - 1 : faultByHourIndex - 1,
    });

    faultByHourIndex++;
    if (faultByHourIndex > option.series[0].data.length - 1) {
      faultByHourIndex = 0;
    }
  }
  let faultByHourTime = setInterval(tooltipcart, 2000);
}
