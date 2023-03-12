var geoCoordMap = {
        "1": [119.2070396626, 26.0471838188],
        "2": [119.2147498638, 26.0481609598],
        "3": [119.209339, 26.038355],
        "4": [119.2163806469, 26.0442086921],
        "5": [119.2132263691, 26.0498767809],
        "6": [119.219382299, 26.0524969442],
        "7": [119.2194920093, 26.0496647145],
        "8": [119.2194276363, 26.0475440293],
        "9": [119.225689, 26.044945],
        "10": [119.215699, 26.045237],
        "11": [119.2191260061, 26.0366349971],
        "12": [119.212969, 26.039069]
      };
      var oneData = [
        [
          {
            name: "1"
          },
          {
            name: "2",
            value: 20
          }
        ],
        [
          {
            name: "1"
          },
          {
            name: "3",
            value: 20
          }
        ],
        [
          {
            name: "1"
          },
          {
            name: "4",
            value: 20
          }
        ]
      ];
      var twoData = [
        [
          {
            name: "5"
          },
          {
            name: "6",
            value: 20
          }
        ],
        [
          {
            name: "5"
          },
          {
            name: "7",
            value: 20
          }
        ],
        [
          {
            name: "5"
          },
          {
            name: "8",
            value: 20
          }
        ]
      ];
      var threeData = [
        [
          {
            name: "9"
          },
          {
            name: "10",
            value: 20
          }
        ],
        [
          {
            name: "9"
          },
          {
            name: "11",
            value: 20
          }
        ],
        [
          {
            name: "9"
          },
          {
            name: "12",
            value: 20
          }
        ]
      ];

      var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[1].name];
          var toCoord = geoCoordMap[dataItem[0].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[1].name,
              toName: dataItem[0].name,
              coords: [fromCoord, toCoord]
            });
          }
        }
        return res;
      };

      var color = ["#a6c84c", "#ffa022", "#46bee9"];
      var series = [];
      [["1", oneData], ["5", twoData], ["9", threeData]].forEach(function(
        item,
        i
      ) {
        series.push(
          {
            name: item[0],
            type: "effectScatter",
            coordinateSystem: "bmap",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}"
              }
            },
            symbolSize: function(val) {
              return val[2] / 4;
            },
            showEffectOn: "render",
            itemStyle: {
              normal: {
                color: color[i]
              }
            },
            data: [
              {
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
              }
            ]
          },
          {
            name: item[0] + " Top10",
            type: "lines",
            coordinateSystem: "bmap",
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: "#fff",
              symbolSize: 3
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + " Top10",
            type: "lines",
            coordinateSystem: "bmap",
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              normal: {
                color: color[i],
                width: 1,
                opacity: 0.4,
                curveness: 0.2
              }
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + " Top10",
            type: "effectScatter",
            coordinateSystem: "bmap",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}"
              }
            },
            symbolSize: function(val) {
              return val[2] / 4;
            },
            showEffectOn: "render",
            itemStyle: {
              normal: {
                color: color[i]
              }
            },
            data: item[1].map(function(dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
            })
          }
        );
      });

      var option = {
        bmap: {
          // 百度地图中心经纬度 坐标拾取器http://api.map.baidu.com/lbsapi/getpoint/index.html
          center: [119.2166696096, 26.0446365813],
          // 百度地图缩放等级，数字越大，放大越大，地图比例尺越小
          zoom: 16,
          // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
          roam: false,
          // mapStyle是百度地图的自定义样式，见 http://developer.baidu.com/map/custom/
          mapStyle: {
            styleJson: [
              {
                featureType: "water",
                elementType: "all",
                stylers: {
                  color: "#021019"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#000000"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#147a92"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry.fill",
                stylers: {
                  color: "#000000"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#0b3d51"
                }
              },
              {
                featureType: "local",
                elementType: "geometry",
                stylers: {
                  color: "#000000"
                }
              },
              {
                featureType: "land",
                elementType: "all",
                stylers: {
                  color: "#08304b"
                }
              },
              {
                featureType: "railway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#000000"
                }
              },
              {
                featureType: "railway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#08304b"
                }
              },
              {
                featureType: "subway",
                elementType: "geometry",
                stylers: {
                  lightness: -70
                }
              },
              {
                featureType: "building",
                elementType: "geometry.fill",
                stylers: {
                  color: "#000000"
                }
              },
              {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#857f7f"
                }
              },
              {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#000000"
                }
              },
              {
                featureType: "building",
                elementType: "geometry",
                stylers: {
                  color: "#022338"
                }
              },
              {
                featureType: "green",
                elementType: "geometry",
                stylers: {
                  color: "#062032"
                }
              },
              {
                featureType: "boundary",
                elementType: "all",
                stylers: {
                  color: "#1e1c1c"
                }
              },
              {
                featureType: "manmade",
                elementType: "geometry",
                stylers: {
                  color: "#022338"
                }
              },
              {
                featureType: "poi",
                elementType: "all",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "all",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#2da0c6",
                  visibility: "on"
                }
              },
              {
                featureType: "background",
                elementType: "all",
                stylers: {
                  color: "#0e1054ff"
                }
              }
            ]
          }
        },
        //series是在地图上的线条等效果的配置文件，具体可以查阅文档。
        series: series
      };