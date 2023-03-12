var geoCoordMap = [
    { name: '上海', value: 100, location: [121.4648, 31.2891], img: 'https://www.makeapie.com/asset/get/s/data-1619059442567-s5l7-f8Eu9.png' },
    { name: '东莞', value: 100, location: [113.8953, 22.901], img: 'https://www.makeapie.com/asset/get/s/data-1619059442567-s5l7-f8Eu9.png' },
    { name: '东营', value: 100, location: [118.7073, 37.5513], img: 'https://www.makeapie.com/asset/get/s/data-1619059442567-s5l7-f8Eu9.png' }
  ];

  var img2 = 'image://asset/get/s/data-1619318279159-o6ZbTGoO0.png';

  var series = [];
  geoCoordMap.forEach(function (item, i) {
    //console.log(item)
    series.push(
      {
        name: item.name,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          scale: 10,
          brushType: 'stroke',
        },
        showEffectOn: 'render',
        symbol: 'circle',
        symbolSize: [10, 5],
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
            color: '#fff'
          }
        },
        itemStyle: {
          normal: {
            shadowColor: '#0ff',
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            color: function (params) {
              var colorList = [
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: '#64fbc5',
                  },
                  {
                    offset: 1,
                    color: '#018ace',
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: '#64fbc5',
                  },
                  {
                    offset: 1,
                    color: '#018ace',
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: '#168e6d',
                  },
                  {
                    offset: 1,
                    color: '#c78d7b',
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: '#61c0f1',
                  },
                  {
                    offset: 1,
                    color: '#6f2eb6',
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: '#168e6d',
                  },
                  {
                    offset: 1,
                    color: '#c78d7b',
                  },
                ]),
                new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  {
                    offset: 0,
                    color: '#61c0f1',
                  },
                  {
                    offset: 1,
                    color: '#6f2eb6',
                  },
                ]),
              ];
              return colorList[params.dataIndex];
            },
          },
        },
        data: [{
          name: item.name,
          value: item.location,

        }]
      });


    series.push({
      type: 'scatter',
      coordinateSystem: 'geo',
      itemStyle: {
        color: '#f00',
      },
      symbol: function (value, params) {
        console.log(params)
        return params.data.img;
      },
      symbolSize: [32, 41],
      symbolOffset: [0, -20],
      z: 9999,
      data: [{
        name: item.name,
        value: item.location,
        datas: item.value,
        img: 'image://asset/get/s/data-1619059442567-s5l7-f8Eu9.png',
      }]
    })

    series.push({
      type: 'scatter',
      coordinateSystem: 'geo',
      label: {
        normal: {
          show: true,
          formatter: function (params) {
            var name = params.name;
            var value = params.data.datas;
            var text = `{fline|${value}}\n{tline|${name}}`;
            return text;
          },
          color: '#fff',
          rich: {
            fline: {
              padding: [0, 25],
              color: '#fff',
              textShadowColor: '#030615',
              textShadowBlur: '0',
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              fontSize: 14,
              fontWeight: 400,
            },
            tline: {
              padding: [0, 27],
              color: '#ABF8FF',
              fontSize: 12,
            },
          },
        },
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        color: '#00FFF6',
      },
      symbol: img2,
      symbolSize: [100, 50],
      symbolOffset: [0, -60],
      z: 999,
      data: [{
        name: item.name,
        value: item.location,
        datas: item.value,
      }],
    });
  });


  var option = {
    backgroundColor: '#000',
    title: {
      text: '模拟',
      subtext: 'test',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },

    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: true,
          color: '#fff'
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#00186E',
          borderColor: '#195BB9',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: '#2B91B7'
        }
      }
    },
    series: series
  };