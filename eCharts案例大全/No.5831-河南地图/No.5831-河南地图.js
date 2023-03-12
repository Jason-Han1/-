var uploadedDataURL = "/asset/get/s/data-1600756991897-HN5Hz2zv8.json";


$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('henan', geoJson);
    var geoCoordMap = {
       '郑州市': [113.649644,34.75661],
      '安阳市': [114.351807,36.110267],
      '鹤壁市': [114.29777,35.755426],
      '焦作市': [113.211836,35.234608],
      '开封市': [114.351642,34.801854],
      '洛阳市': [112.447525,34.657368],
      '漯河市': [114.046061,33.576279],
      '南阳市': [112.542842,33.01142],
      '平顶山市': [113.300849,33.745301],
      '濮阳市': [115.026627,35.753298],
      '三门峡市': [111.181262,34.78332],
      '商丘市': [115.641886,34.438589],
      '信阳市': [113.91269,35.307258],
      '许昌市': [113.835312,34.02674],
      '周口市': [114.654102,33.623741],
      '驻马店市': [114.049154,32.983158],
    }
    var data =  [
            {
                name: '郑州市',
                value: 0
            },
            {
                name: '安阳市',
                value: 0
            }, {
                name: '洛阳市',
                value: 0
            }, {
                name: '焦作市',
                value: 0
            }, {
                name: '信阳市',
                value: 0
            }, {
                name: '商丘市',
                value: 0
            }, {
                name: '濮阳市',
                value: 0
            }, {
                name: '许昌市',
                value: 0
            }, {
                name: '周口市',
                value: 0
            }, {
                name: '驻马店市',
                value: 0
            }];
 var data3 = [
        {
          name: "省厅",
          value: 153
        }
      ];
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };


    option = {
        backgroundColor:'#00094A',

        title: {
            text: "",
            subtext: "",
            x: "center",
            textStyle: {
              color: "#ccc"
            }
          },
          tooltip: {
            trigger: "item",
            formatter: function(params) {
              // //debugger
              if (params.seriesType == "scatter") {
                return params.name + " : " + params.value[2];
              }
              if (isNaN(params.value)) {
                return params.name + " : " + 0;
              } else {
                return params.name + " : " + params.value;
              }
            }
          },
          legend: {
            orient: "vertical",
            y: "bottom",
            x: "right",
            // data: ['credit_pm2.5'],
            textStyle: {
              color: "#fff"
            }
          },
          visualMap: {
            show: false,

            left: "left",
            top: "bottom",
            text: ["高", "低"], // 文本，默认为数值文本
            // calculable: true,
            seriesIndex: [0],
            inRange: {
              color: [
                "rgba(5, 109, 230, .1)",
                "rgba(61, 196, 255, .2)",
                "rgba(88, 254, 208, .3)",
                "rgba(253, 246, 44, .4)",
                "rgba(255, 132, 0, .5)"
              ] // 黑紫黑
            }
          },
          geo: {
            show: true,
            map: "henan",
            label: {
              normal: {
                show: true,
                color: "#ccc"
              },
              emphasis: {
                show: false,
                color: "#fff"
              }
            },
            roam: true,
            layoutCenter: ["40%", "40%"],
            layoutSize: 650,
            itemStyle: {
              normal: {
                areaColor: "rgba(5, 109, 230,.1)",
                borderColor: "rgb(32, 150, 156)"
              },
              emphasis: {
                areaColor: "#2B91B7"
                // borderColor: 'red',
              }
            }
          },
          series: [
            {
              type: "map",
              map: "guangdong",
              geoIndex: 0,
              aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              roam: false,
              animation: false,
              data: data
            },
            {
              name: "点",
              type: "scatter",
              coordinateSystem: "geo",
              symbol: "path://M100,0 L41.22,180.90 L195.10,69.09 L4.89,69.09 L158.77,180.90 z", //五角星,
              symbolSize: 20,
              label: {
                normal: {
                  formatter: "{b}",
                  position: "right",
                  show: true,
                  color: "#fff"
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  // color: '#05C3F9'
                  color: "red"
                }
              },
              zlevel: 6,
              data: convertData(data3)
            }
          ]
        
    };
    myChart.setOption(option);
});