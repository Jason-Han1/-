  let canvas = document.createElement('canvas');
  let canvas2 = document.createElement('canvas');
  let mapChart = echarts.init(canvas, null, {
      width: 2048,
      height: 1024
  });
  let mapHeightChart = echarts.init(canvas2, null, {
      width: 2048,
      height: 1024
  })
  mapChart.setOption({
      backgroundColor: 'transparent',
      series: [
          {
          type: 'map',
          map: 'china',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          boundingCoords: [
              [-180, 90],
              [180, -90]
          ],
          label: {
              normal: {
                  show: false,
                  fontSize: 4,
                  lineHeigh: 4,
                  color: '#000',

              }
          },
          itemStyle: {
              normal: {
                  areaColor: 'transparent',
                  borderWidth: 1,

                  borderType: 'solid',
                  borderColor: '#a85000'
              }
          },

      }]
  });
  option = {
      backgroundColor: '#000',
      globe: {
          globeRadius: 100, //地球的半径。单位相对于三维空间，
          baseTexture: '/asset/get/s/data-1491890179041-Hkj-elqpe.jpg', //地球的纹理。支持图片路径字符串，图片或者 Canvas 的对象
          silent: true,
          environment: '/asset/get/s/data-1499132777213-SyZdmO_4-.jpg', //环境贴图，支持純颜色值，渐变色，全景贴图的

          displacementQuality: 'ultra', //地球顶点位移的质量
          shading: 'realistic', //地球中三维图形的着色效果
          light: { //光照相关的设置。在 shading 为 'color' 的时候无效。
              main: { //场景主光源的设置
                  shadow: true, //主光源是否投射阴影
                  intensity: 1 //主光源的强度。
              },
              ambient: { //全局的环境光设置。
                  intensity: 0
              },
              ambientCubemap: { // 会使用纹理作为光源的环境光， 决定是否有阴影
                  texture: '/assets/img/li7.jpg', //环境光纹理的 url，
                  diffuseIntensity: 1 //漫反射的强度。
              }
          },
          viewControl: { //用于鼠标的旋转，缩放等视角控制。
              autoRotate: true, //是否开启视角绕物体的自动旋转查看。
              targetCoord: [116.46, 39.92] //定位目标的经纬度坐标。
          },
          postEffect: { //理特效的相关配置，
              enable: true, //是否开启后处理特效
              SSAO: { //屏幕空间的环境光遮蔽效果
                  enable: true,
                  radius: 10
              }
          },
          layers: [{ //地球表面层的配置，你可以使用该配置项加入云层，
              type: 'overlay',
              show: true,
              texture: mapChart,
              distance: 0
          }]
      },
      series: [
          {
          type: 'lines3D',
          effect: { //飞线的尾迹特效。
              show: true,
              period: 1, //尾迹特效的周期。
              trailWidth: 5, //尾迹宽度
              trailLength: 2, //尾迹的长度，
              trailOpacity: 1, //尾迹的不透明度，默认跟线条不透明度相同。
              trailColor: '#0ff420'
          },
          lineStyle: { //飞线的样式
              width: 1,
              color: '#f4281a',
              opacity: 1
          },
          blendMode: 'lighter',
          data: [{
                  // 飞线的坐标与海拔高度
                  coords: [
                      [10, 46, 10],
                      [100, 46, 10]
                  ],
                  // 数据值
                  value: 10,
                  // 数据名
                  name: 'foo',
              },
              {
                  coords: [
                      [20, 56, 20],
                      [120, 56, 20]
                  ],
                  // 数据值
                  value: 10,
                  // 数据名
                  name: 'foo',
              },
              {
                  coords: [
                      [30, 66, 30],
                      [140, 66, 30]
                  ],
                  // 数据值
                  value: 10,
                  // 数据名
                  name: 'foo',
              }
          ]
      }]
  };