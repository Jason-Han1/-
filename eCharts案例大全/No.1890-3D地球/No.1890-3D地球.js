
    var data = [
       {},
       {
        name: '中国',
        lng: 111.11,
        lat: 33.33,
       },
    ];
    var canvas = document.createElement("canvas");
    var mapChart = echarts.init(canvas, null, {
      width: 4096,
      height: 2048,
    });
    mapChart.setOption({
      backgroundColor: "#044161",
      series: [
        {
          type: "map",
          map: "world",
          // 绘制完整尺寸的 echarts 实例
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
            [-180, 90],
            [180, -90],
          ],
          itemStyle: {
            emphasis: {
                areaColor:"#EEF824",
            }
          },
        },
      ],
    });
    option = {
      tooltip: {
      },
      globe: {
        baseTexture: mapChart,
        shading: "color",
        environment:
          "/asset/get/s/data-1631152139982-Bdn5u7gsd.jpg",
        atmosphere: {
          show: true,
        },
        viewControl: {
          autoRotate: false,
          targetCoord: [100.46, 39.92]
        }
      }, 
      series: [
        {
          name: '数据',
          type: 'scatter3D',
          coordinateSystem: 'globe',
          emphasis: {
           label: {
            show: false
           }
          },
          data: data.map((v) => {
           return {
            name: v.name,
            value: [v.lng, v.lat]
           };
          }),
        },
    ],
  };