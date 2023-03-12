var data = [
        {
          name: "内蒙古",
          itemStyle: {
            areaColor: "#56b1da",
          },
          value:[110.3467, 41.4899]
        },
      ];
      var option = {
        backgroundColor: "black",
        geo: {
          map: "china",
          aspectScale: 0.8,
          layoutCenter: ["50%", "50%"],
          layoutSize: "120%",
          itemStyle: {
            normal: {
              areaColor: {
                type: "linear-gradient",
                x: 0,
                y: 1200,
                x2: 1000,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#152E6E", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#0673AD", // 50% 处的颜色
                  },
                ],
                global: true, // 缺省为 false
              },
              shadowColor: "#0f5d9d",
              shadowOffsetX: 0,
              shadowOffsetY: 15,
              opacity: 0.5,
            },
            emphasis: {
              areaColor: "#0f5d9d",
            },
          },

          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                areaColor: "rgba(0, 10, 52, 1)",
                borderColor: "rgba(0, 10, 52, 1)",
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: "#009cc9",
                  },
                },
              },
              label: {
                show: false,
                color: "#FFFFFF",
                fontSize: 12,
              },
            },
          ],
        },
        series: [
          {
            type: "map",
            selectedMode: "multiple",
            mapType: "china",
            aspectScale: 0.8,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "120%",
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1,
              max: 2,
            },
            label: {
              show: false,
              color: "#FFFFFF",
              fontSize: 16,
            },
            itemStyle: {
              normal: {
                areaColor: "#0c3653",
                borderColor: "#1cccff",
                borderWidth: 1.8,
              },
              emphasis: {
                areaColor: "#56b1da",
                label: {
                  show: false,
                  color: "#fff",
                },
              },
            },
            data: data,
          },
          {
              name: 'Top 5',
              type: 'scatter',
              coordinateSystem: 'geo',
            //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
              // symbolSize: [30,120],
              // symbolOffset:[0, '-40%'] ,
              label: {
                  normal: {
                      show: false,
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#D8BC37', //标志颜色
                  }
              },
              data: data,
              showEffectOn: 'render',
              rippleEffect: {
                  brushType: 'stroke'
              },
              hoverAnimation: true,
              zlevel: 1
          },
        ],
      };
