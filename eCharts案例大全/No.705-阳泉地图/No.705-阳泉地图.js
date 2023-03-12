myChart.showLoading();
$.get('/asset/get/s/data-1637724266574-j_enXc11O.json', function (mapJson) {
  myChart.hideLoading();
  echarts.registerMap('jiangsu', mapJson);

  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}',
    },
    geo: {
      map: 'jiangsu',
      roam: true,
      zoom: 1,
      label: {
        normal: {
          show: true,
          textStyle: {
            color: '#fff',
          },
        },
        emphasis: {
          textStyle: {
            color: '#fff',
          },
        },
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(147, 235, 248, 1)',
          borderWidth: 1,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(147, 235, 248, 0.5)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(20, 155, 255, 0.9)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          shadowColor: 'rgba(128, 217, 248, 1)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 10,
        },
        emphasis: {
          areaColor: '#389BB7',
          borderWidth: 0,
        },
      },
    },
    visualMap: {
      min: 10,
      max: 100,
      left: '3%',
      bottom: '5%',
      calculable: true,
      seriesIndex: [0],
      inRange: {
        color: ['#24CFF4', '#2E98CA', '#1E62AC'],
      },
      textStyle: {
        color: '#24CFF4',
      },
    },
    series: [
      {
        type: "map",
        mapType: "jiangsu", // 自定义扩展图表类型
        
        label: {
              normal:{ //普通状态下的标签文本样式。(省份名称)
                show: true, //是否在普通状态下显示标签。
                textStyle: { // 文字设置
                  color: '#fff'
                },
              },
              emphasis: { // 是否在高亮状态下显示标签。(省份名称)
                show: true,
                textStyle: { // 文字设置
                  color: '#fff'
                },
              }
            },
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            itemStyle: { // 地图板块区域的多边形 图形样式
                normal: { // 默认板块信息
                    areaColor: '#0559ff',
                    borderColor: '#0c4c9b'
                },
                emphasis: { // 高亮版板块信息
                    areaColor: '#2085ff'
                }
            },
      },
      {
        name: '江苏',
        type: 'map',
        geoIndex: 0,
        map: 'jiangsu',
        roam: true,
        zoom: 1.3,
        tooltip: {
          trigger: 'item',
          formatter: (p) => {
            let val = p.value;
            if (p.name == '南海诸岛') return;
            if (window.isNaN(val)) {
              val = 0;
            }
            let txtCon = "<div style='text-align:left'>" + p.name + ':<br />销售额：' + val.toFixed(2) + '万</div>';
            return txtCon;
          },
        },
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          },
        },
        
      },
      {
        name: '地点',
        type: 'effectScatter', // 特效散点图
        coordinateSystem: 'geo', // 'cartesian2d'使用二维的直角坐标系。'geo'使用地理坐标系
        zlevel: 2, // 所有图形的 zlevel 值。
        rippleEffect: {
          //涟漪特效相关配置。
          brushType: 'stroke', //波纹的绘制方式，可选 'stroke' 和 'fill'。
          period: 4, // 动画的时间。
          scale: 2.5, // 动画中波纹的最大缩放比例。
        },
        label: {
          normal: {
            show: false, //是否显示标签。
            position: 'inside', //标签的位置。// 绝对的像素值[10, 10]
            offset: [30, 40], //是否对文字进行偏移。默认不偏移。例如：[30, 40] 表示文字在横向上偏移 30，纵向上偏移 40。
            formatter: '{b}: {c}', //标签内容格式器。模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
          },
          emphasis: {
            show: true,
            position: 'right',
            formatter: '{b}',
          },
        },
        symbolSize: 2, // 标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
        showEffectOn: 'render', // 配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效。
        itemStyle: {
          // 图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
          normal: {
            color: '#46bee9',
          },
        },
        data: [
          { name: '南京', value: [118.767413, 32.041544], symbolSize: 20, itemStyle: { normal: { color: '#F58158' } } },
          { name: '无锡', value: [120.301663, 31.574729], symbolSize: 20, itemStyle: { normal: { color: '#F58158' } } },
          { name: '常州', value: [119.946973, 31.772752], symbolSize: 40, itemStyle: { normal: { color: '#F58158' } } },
        ],
      },
    ],
  };
  myChart.setOption(option);

  // //点击空白区域
  // myChart.getZr().on('click', params => {
  //     if(!params.target) {
  //       option.series[0].data = [
  //           { name: "盂县", selected: false },
  //           { name: "郊区", selected: false },
  //           { name: "平定县" , selected: false},
  //           { name: "矿区" , selected: false},
  //           { name: "城区", selected: false }
  //         ];//将拼接好的数组赋给参数集合
  //       myChart.setOption(option, true);
  //     }
  //   })

  //   myChart.on('click', params=>{
  //     console.log(params)
  //   })
});
