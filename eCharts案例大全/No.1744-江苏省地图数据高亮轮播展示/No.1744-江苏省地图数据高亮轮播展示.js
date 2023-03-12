var img = '/asset/get/s/data-1632277841252-aNTf3ao-v.png';
var img2 = '/asset/get/s/data-1632277834142-Mf9W_CtZ9.png';
var uploadedDataURL = '/asset/get/s/data-1632277940597-6IMJ-f-un.json';

var dataList = [
  {
    name: '南京市',
    value: 6666
  },
  {
    name: '无锡市',
    value: 7777
  },
  {
    name: '苏州市',
    value: 8888
  },
  {
    name: '扬州市',
    value: 99999
  },
]; // 测试数据
var dataList2 = [];
var gdGeoCoordMap = {
  南京市: [118.767413, 32.041544],
  无锡市: [120.301663, 31.574729],
  徐州市: [117.184811, 34.261792],
  常州市: [119.946973, 31.772752],
  苏州市: [120.619585, 31.299379],
  南通市: [120.864608, 32.016212],
  连云港市: [119.144784, 34.536075],
  淮安市: [119.021265, 33.597506],
  盐城市: [120.139998, 33.377631],
  扬州市: [119.421003, 32.393159],
  镇江市: [119.452753, 32.204402],
  泰州市: [119.915176, 32.484882],
  宿迁市: [118.275162, 33.963008]
};
$.get(uploadedDataURL, function (geoJson) {
  echarts.registerMap('jiangsu', { geoJSON: geoJson });
  // var chart = echarts.init(document.querySelector('.map'));
  // 如果有的城市没有返回数据就补零
  for (var key in gdGeoCoordMap) {
    for (var i = 0; i < dataList.length; i++) {
      if (key === dataList[i].name) {
        dataList2.push({
          name: key,
          value: gdGeoCoordMap[key].concat(dataList[i].value),
        });
        break;
      } else if (i + 1 === dataList.length) {
        dataList2.push({
          name: key,
          value: gdGeoCoordMap[key].concat(0),
        });
      }
    }
  }
  var option = {
    backgroundColor:"RGBA(4, 10, 36, 1)",
    geo: {
      map: 'jiangsu',
      roam: true,
      showLegendSymbol: true,
      zoom: 1.2,
      // 地图区域的颜色
      itemStyle: {
        areaColor: 'rgba(0,0,0,0)',
        color: 'blue',
        borderColor: '#22F7F8',
        borderWidth: 2,
        shadowColor: '#22F7F8',
        shadowBlur: 15,
        // shadowOffsetX:10,
        shadowOffsetY: 5,
      },
      label: {
        show: true,
        color: '#FFFFFF',
      },
      // 高亮区域的配置
      emphasis: {
        label: {
          show: true,
          color: '#ffffff', // 选中文字颜色
        },
        itemStyle: {
          areaColor: '#2B91B7', // 高亮区域颜色
          // opacity:'0.5'
        },
      },
      selectedMode: true,
      select: {
        label: {
          show: true,
          color: '#ffffff',
        },
        itemStyle: {
          areaColor: '#2B91B7', // 选中区域颜色
        },
      },
      regions: [
        {
          name: '南京市',
          selected: true,
        },
      ],
    },
    series: [
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          scale: 10,
          brushType: 'stroke',
        },
        showEffectOn: 'render',
        itemStyle: {
          normal: {
            color: '#00FFFF',
          },
        },
        label: {
          normal: {
            color: '#fff',
          },
        },
        symbol: 'circle',
        symbolSize: [10, 5],
        data: [dataList2[0]],
        zlevel: 1,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        itemStyle: {
          color: '#00FFF6',
        },
        symbol:'image://'+ img2,
        symbolSize: [24, 33],
        symbolOffset: [0, -20],
        data: [dataList2[0]],
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        label: {
          show: true,
          formatter: function (params) {
            var value = params.value[2];
            var text = `{fline|${value}元}`;
            return text;
          },
          rich: {
            // align:'center',
            fline: {
              padding: [15, 15, 15, 15],
              color: '#FFD426',
              fontSize: 16,
              fontWeight: 700,
            },
          },
          emphasis: {
            show: true,
          },
          backgroundColor: {
            image: img,
          },
          // backgroundColor:'red'
        },
        itemStyle: {
          color: '#00FFF6',
        },
        // symbol: 'image://../images/home/map.png',
        symbolSize: [0, 0], // 100 50
        symbolOffset: [0, -70], //60
        data: [dataList2[0]],
      },
    ],
  };
  myChart.setOption(option, true);
  var j = 1;
  //   每隔5秒高亮显示一个城市的数据
  setInterval(() => {
    option.series.forEach((item) => {
      item.data = [];
      item.data.push(dataList2[j]);
    });
    option.geo.regions = [];
    option.geo.regions.push({
      name: dataList2[j].name,
      selected: true,
    });
    console.log(option.geo);
    j++;
    if (j === 13) {
      j = 0;
    }
    myChart.setOption(option, true);
  }, 5000);
  // 点击当前城市高亮显示数据
  myChart.on('click', function (params) {
    option.geo.regions.push({
      name: params.name,
      selected: true,
    });
    option.series.forEach((item) => {
      item.data.forEach((item2, index) => {
        if (item2.name === params.name) {
          return false;
        } else if (index + 1 === item.data.length) {
          dataList2.forEach((item3) => {
            if (item3.name === params.name) {
              item.data.push(item3);
            }
          });
        }
      });
    });
    myChart.setOption(option, true);
  });
  window.addEventListener('resize', function () {
    myChart.resize();
  });
});
