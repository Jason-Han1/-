var uploadedDataURL = "/asset/get/s/data-1630657618994-LpKky1VZv.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('hangzhou', geoJson);
    myChart.hideLoading();
    // 点坐标
    let geoCoordMap = {
      '萧山区交通运输局': [120.266934, 30.187366],
      '富阳区交通运输局': [119.943834, 30.07327],
      '余杭区交通运输局': [119.99224, 30.343826],
      '临平区交通运输局': [120.301038, 30.426579],
      '临安区交通运输局': [119.703838, 30.22169],
      '桐庐县交通运输局': [119.701737, 29.791497],
      '建德市交通运输局': [119.300279, 29.483262],
      '淳安县交通运输局': [119.041705, 29.616495]
    }
    // 地图波纹点
  let mapData = [
    { name: '萧山区交通运输局'},
    { name: '富阳区交通运输局'},
    { name: '余杭区交通运输局'},
    { name: '临平区交通运输局'},
    { name: '临安区交通运输局'},
    { name: '桐庐县交通运输局'},
    { name: '建德市交通运输局'},
    { name: '淳安县交通运输局'}
  ]
  let maps = [
    { name: '萧山区'},
    { name: '富阳区'},
    { name: '余杭区'},
    { name: '临平区'},
    { name: '临安区'},
    { name: '桐庐县'},
    { name: '建德市'},
    { name: '淳安县'}
  ]
  let index = 0
  let series = [];
  [
    ['地图点位', mapData]
  ].forEach(function (item) {
    series.push({
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        // 涟漪特效
        period: 5, // 动画时间，值越小速度越快
        brushType: 'stroke', // 波纹绘制方式 stroke, fill
        scale: 5 // 波纹圆环最大限制，值越大波纹越大
      },
      Symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          show: true,
          color: '#f00f00'
        },
        emphasis: {
          show: true,
          color: '#f00f00'
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem.name,
          value: geoCoordMap[dataItem.name].concat([dataItem.value])
        }
      })
    })
  });
  [
    ['地图', maps]
  ].forEach((item) => {
    series.push({
      type: 'map',
      name: '杭州',
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: '{b}',
        textStyle: {
          color: '#ffffff'
        }
      },
      map: 'hangzhou', // 自定义扩展图表类型
      showLegendSymbol: false,
      aspectScale: 0.85,
      zoom: 1.23,
      itemStyle: {
        areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#3FA9FC' // 0%处的颜色
          },
          {
            offset: 1,
            color: '#1378F8' // 100%处的颜色
          }
        ], false),
        borderColor: '#222222',
        borderWidth: 0.5
      },
      emphasis: {
        label: {
          show: true,
          color: '#9932CC', // 地图字体颜色
          // 地图字体内容
          formatter: (params, ticket, callback) => {
            let data = ''
            maps.forEach(item => {
              if (params.name === item.name) {
                data = `${params.name}交通运输局`
              }
            })
            return data
          }
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem.name,
          value: dataItem.name.concat([dataItem.value])
        }
      })
    })
  })
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    position: 'bottom',
    geo: {
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: '{b}',
        textStyle: {
          color: '#ffffff'
        }
      },
      name: '杭州',
      map: 'hangzhou', // 自定义扩展图表类型
      showLegendSymbol: false,
      aspectScale: 0.85,
      zoom: 1.23,
      itemStyle: {
        areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#3FA9FC' // 0%处的颜色
          },
          {
            offset: 1,
            color: '#1378F8' // 100%处的颜色
          }
        ], false),
        borderColor: '#222222',
        borderWidth: 0.5
      },
      emphasis: {
        label: {
          show: true,
          color: '#ffffff',
          formatter: (params, ticket, callback) => {
            let data = ''
            mapData.forEach(item => {
              if (`${params.name}交通运输局` === item.name) {
                data = `${params.name}交通运输局`
              }
            })
            return data
          }
        },
        itemStyle: {
          areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#EACF3E' // 0%处的颜色
            },
            {
              offset: 1,
              color: '#DD831F' // 100%处的颜色
            }
          ], false),
          borderColor: '#222222',
          borderWidth: 0.5
        }
      }
    },
    series: series
  }
  myChart.setOption(option, true)
  // 清除之前的高亮
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 1
  })
  // 当前下标高亮
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 1,
    dataIndex: index
  })
  // 地图高亮轮播
  mTime = setInterval(() => {
    // 清除之前的高亮
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 1
    })
    index++
    // 当前下标高亮
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 1,
      dataIndex: index
    })
    if (index >= option.series[1].data.length - 1) {
      index = -1
    }
  }, 2000)
  myChart.on('mouseover', (params) => {
    clearInterval(mTime)
    mTime = null
    // 清除之前的高亮
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 1
    })
    // 当前下标高亮
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 1,
      dataIndex: params.dataIndex
    })
  })
  myChart.on('mouseout', () => {
    mTime = setInterval(() => {
      // 清除之前的高亮
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1
      })
      index++
      // 当前下标高亮
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: index
      })
      if (index >= option.series[1].data.length - 1) {
        index = -1
      }
    }, 2000)
  })
});