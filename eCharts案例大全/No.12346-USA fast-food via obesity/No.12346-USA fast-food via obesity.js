var uploadedDataURL = "/asset/get/s/data-1547275769288-ukt59TRPr.json";




myChart.showLoading();


$.get(uploadedDataURL, function(usaJson) {
    myChart.hideLoading();

    echarts.registerMap('USA', usaJson, {
      Alaska: { // 把阿拉斯加移到美国主大陆左下方
        left: -131,
        top: 25,
        width: 45
      },
      Hawaii: {
        left: -110, // 夏威夷
        top: 28,
        width: 20
      },
      'Puerto Rico': { // 波多黎各
        left: -76,
        top: 26,
        width: 10
      }
    });

    let geoCoordMap = {
      "Alabama": [-86.25, 32.30],

      "Alaska": [-127.40, 26.33],

      "Arizona": [-112.00, 33.50],

      "Arkansas": [-92.33, 34.75],

      "California": [-121.47, 38.57],

      "Colorado": [-105.00, 39.75],

      "Connecticut": [-72.75, 41.75],

      "Delaware": [-75.50, 39.00],

      "Florida": [-84.28, 30.50],

      "Georgia": [-84.45, 33.75],

      "Hawaii": [-157.00, 21.33],

      "Idaho": [-116.17, 43.60],

      "Illinois": [-73.50, 42.00],

      "Indiana": [-86.00, 39.75],

      "Iowa": [-93.60, 41.50],

      "Kansas": [-95.75, 39.00],

      "Kentucky": [-84.85, 38.16],

      "Louisiana": [-91.10, 30.50],

      "Maine": [-69.75, 44.33],

      "Maryland": [-77.15, 39.33],

      "Massachusetts": [-71.10, 42.33],

      "Michigan": [-80.75, 40.10],

      "Minnesota": [-93.10, 45.00],

      "Mississippi": [-90.20, 32.00],

      "Missouri": [-92.20, 38.50],

      "Montana": [-112.00, 45.50],

      "Nebraska": [-96.10, 40.80],

      "Nevada": [-118.75, 39.00],

      "New Hampshire": [-71.50, 43.20],

      "New Jersey": [-74.75, 40.20],

      "New Mexico": [-106.00, 35.10],

      "New York": [-73.80, 42.10],

      "North Carolina": [-78.67, 35.75],

      "North Dakota": [-100.80, 46.75],

      "Ohio": [-83.00, 40.00],

      "Oklahoma": [-97.50, 35.50],

      "Oregon": [-123.00, 45.00],

      "Pennsylvania": [-77.00, 40.25],

      "Rhode Island": [-71.47, 41.80],

      "South Carolina": [-81.00, 34.00],

      "South Dakota": [-100.00, 44.33],

      "Tennessee": [-86.75, 36.00],

      "Texas": [-97.75, 30.25],

      "Utah": [-111.90, 40.75],

      "Vermont": [-72.50, 44.25],

      "Virginia": [-77.50, 37.50],

      "Washington": [-122.90, 47.00],

      "West Virginia": [-81.00, 38.40],

      "Wisconsin": [-89.40, 43.10],

      "Wyoming": [-106.80, 43.10],
    };

    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
            tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
          });
        }
      }
      // console.log(res)
      return res;
    };

   var convert_bar = function(params){
     var res =
     [
       ['xAxis', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015'],
       ['amount', 1, 1, 1, 1, 1, 98.7, 65.1, 53.3, 41.1, 30.4, 53.3]

     ]
     
     var list =['Alaska','Aria']
       if (params == list[0]) {
         res[1] = ['amount', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7, 65.1, 53.3, 41.1, 30.4, 53.3]
       }

     // console.log(res)
     return res;
   };


    function tooltipCharts(params) {
      console.log(arguments[0]);
      var myChart = echarts.init(document.getElementById('tooltipBarId'));
      var option = {
        dataset: {
          source: (convert_bar(params))
        },
        xAxis: {
          type: 'category',
          interval: true,
          axisLabel: {
            rotate: 45
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {},
        color: ['#4FA8F9', '#F5A623'],
        grid: {
          show: true,
          backgroundColor: '#FAFAFA',
          left: 30,
          right: 20,
          top: 20
        },
        series: [{
          type: 'bar',
          smooth: true,
          seriesLayoutBy: 'row',
          barWidth: 10
        }]
      };
      myChart.setOption(option);
    }
    let option = {
      baseOption: {
        timeline: {
          //loop: false,
          axisType: 'category',
          show: true,
          autoPlay: false,
          playInterval: 1000,
          data: ['1985', '1990', '1995', '2000', '2005', '2010', 'Now']
        },
        tooltip: {
          padding: 0,
          enterable: true,
          transitionDuration: 1,
          textStyle: {
            color: '#000',
            decoration: 'none',
          },
          // position: function (point, params, dom, rect, size) {
          //   return [point[0], point[1]];
          // },
          formatter: function(params) {
            // console.log(params)
            var tipHtml = '<div style="height:360px;width:400px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa">' +
              '    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
              '        <span style="line-height:50px;margin-left:18px">' + params.name + '</span>' +
              '        <span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer" onclick="mapTooltipClick(this);">Click for more information</span>' +
              '    </div>' +
              '    <div style="height:110px;width:100%;background:#fff">' +
              '        <div style="padding-left:18px;padding-top:22px">' +
              '            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
              '            <span>One information</span>' +
              '            <span style="float:right;margin-right:18px">' + params.data.tipData[0] + 'unknown</span>' +
              '        </div>' +
              '        <div style="padding-left:18px;padding-top:14px">' +
              '            <span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
              '            <span>Another information</span>' +
              '            <span style="float:right;margin-right:18px">' + params.data.tipData[1] + 'unknown</span>' +
              '        </div>' +
              '    </div>' +
              '    <div id="tooltipBarId" style="height:200px;width:100%;border-radius:0 0 5px 0;background:#fff"></div>' +
              '</div>';
            setTimeout(function() {
              tooltipCharts(params.name);
            }, 10);
            return tipHtml;
          }
        },



        title: {
          text: 'USA fast-food via obesity',
          subtext: 'Data from worldbank, Mcdonald,KFC',
          sublink: 'http://www.census.gov/popest/data/datasets.html',
          left: 'right'
        },
        visualMap: [
          /*{
                            left: 'right',
                            min: 500000,
                            max: 38000000,
                            inRange: {
                              color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                            },
                            text:['High','Low'],           // 文本，默认为数值文本
                            calculable: true
                          },*/
          {
            type: 'continuous',
            seriesIndex: 0,
            text: ['Restaurant numbers'],
            calculable: true,
            min: 100,
            max: 1050,
            inRange: {
              color: ['#87aa66', '#eba438', '#d94d4c']
            }
          }
        ],
        toolbox: {
          show: true,
          //orient: 'vertical',
          left: 'left',
          top: 'top',
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },

      },
      options: [
        {
        geo3D: {
          map: 'USA',
          roam: true,
          itemStyle: {
            areaColor: '#33a3dc',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: false,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          },
          regions: [

            {
              name: 'Alabama',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Alaska',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Arizona',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Arkansas',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'California',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Colorado',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Connecticut',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Delaware',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Florida',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Georgia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Hawaii',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Idaho',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Illinois',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Indiana',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Iowa',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Kansas',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Kentucky',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Louisiana',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Maine',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Maryland',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Massachusetts',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Michigan',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Minnesota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Mississippi',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Missouri',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Montana',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Nebraska',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Nevada',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewHampshire',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewJersey',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewMexico',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewYork',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NorthCarolina',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NorthDakota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Ohio',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Oklahoma',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Oregon',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Pennsylvania',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'RhodeIsland',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'SouthCarolina',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'SouthDakota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Tennessee',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Texas',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Utah',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Vermont',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Virginia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Washington',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'WestVirginia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Wisconsin',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Wyoming',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

          ]
        },
        series: [

          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //size of bar
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([
              {
              name: "Alabama",
              value: 211.59

            },
              {
                name: "Alaska",
                value: 112.78

              },
              {
                name: "Arizona",
                value: 276.73

              },
              {
                name: "Arkansas",
                value: 240.34

              },
              {
                name: "California",
                value: 169.49

              },
              {
                name: "Colorado",
                value: 224.30

              },
              {
                name: "North Carolina",
                value: 233.60

              },
              {
                name: "South Carolina",
                value: 230.30

              },
              {
                name: "Connecticut",
                value: 150.00

              },
              {
                name: "Delaware",
                value: 196.72

              },
              {
                name: "North Dakota",
                value: 117.65

              },
              {
                name: "South Dakota",
                value: 142.86

              },
              {
                name: "Florida",
                value: 266.08

              },
              {
                name: "Georgia",
                value: 261.74

              },
              {
                name: "Hawaii",
                value: 192.60

              },
              {
                name: "Idaho",
                value: 214.78

              },
              {
                name: "Illinois",
                value: 196.49

              },
              {
                name: "Indiana",
                value: 221.24

              },
              {
                name: "Iowa",
                value: 188.38

              },
              {
                name: "Kansas",
                value: 233.34

              },
              {
                name: "Kentucky",
                value: 200.00

              },
              {
                name: "Louisiana",
                value: 195.01

              },
              {
                name: "Maine",
                value: 172.41

              },
              {
                name: "Maryland",
                value: 262.04

              },
              {
                name: "Massachusetts",
                value: 155.65

              },
              {
                name: "Michigan",
                value: 214.15

              },
              {
                name: "Minnesota",
                value: 207.89

              },
              {
                name: "Mississippi",
                value: 192.75

              },
              {
                name: "Missouri",
                value: 226.80

              },
              {
                name: "Montana",
                value: 206.69

              },
              {
                name: "Nebraska",
                value: 174.69

              },
              {
                name: "Nevada",
                value: 502.78

              },
              {
                name: "New Hampshire",
                value: 212.63

              },
              {
                name: "New Jersey",
                value: 121.53

              },
              {
                name: "New Mexico",
                value: 214.00

              },
              {
                name: "New York",
                value: 132.86

              },
              {
                name: "Ohio",
                value: 232.77

              },
              {
                name: "Oklahoma",
                value: 204.49

              },
              {
                name: "Oregon",
                value: 236.60

              },
              {
                name: "Pennsylvania",
                value: 149.53

              },
              {
                name: "Rhode Island",
                value: 139.78

              },
              {
                name: "Tennessee",
                value: 256.58

              },
              {
                name: "Texas",
                value: 231.83

              },
              {
                name: "Utah",
                value: 208.57

              },
              {
                name: "Vermont",
                value: 174.43

              },
              {
                name: "Virginia",
                value: 237.76

              },
              {
                name: "West Virginia",
                value: 157.07

              },
              {
                name: "Washington",
                value: 228.32

              },
              {
                name: "Wisconsin",
                value: 218.95

              },
              {
                name: "Wyoming",
                value: 197.22

              },
            ])
          },
        ]
      }, {
        geo3D: {
          map: 'USA',
          roam: true,
          itemStyle: {
            areaColor: '#33a3dc',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: false,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          },
          regions: [

            {
              name: 'Alabama',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Alaska',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Arizona',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Arkansas',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'California',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Colorado',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Connecticut',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Delaware',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Florida',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Georgia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Hawaii',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Idaho',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Illinois',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Indiana',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Iowa',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Kansas',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Kentucky',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Louisiana',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Maine',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Maryland',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Massachusetts',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Michigan',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Minnesota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Missouri',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Montana',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Nebraska',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Nevada',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewHampshire',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewJersey',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewMexico',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewYork',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NorthCarolina',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NorthDakota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Ohio',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Oklahoma',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Oregon',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Pennsylvania',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'RhodeIsland',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'SouthCarolina',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'SouthDakota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Tennessee',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Texas',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Utah',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Vermont',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Virginia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Washington',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'WestVirginia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Wisconsin',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Wyoming',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

          ]
        },
        series: [

          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //size of bar
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([{
              name: "Alabama",
              value: 476.94,

            },
              {
                name: "Alaska",
                value: 263.69

              },
              {
                name: "Arizona",
                value: 549.49

              },
              {
                name: "Arkansas",
                value: 540.75

              },
              {
                name: "California",
                value: 342.17

              },
              {
                name: "Colorado",
                value: 486.32

              },
              {
                name: "North Carolina",
                value: 488.69

              },
              {
                name: "South Carolina",
                value: 487.11

              },
              {
                name: "Connecticut",
                value: 316.11

              },
              {
                name: "Delaware",
                value: 453.55

              },
              {
                name: "North Dakota",
                value: 312.94

              },
              {
                name: "South Dakota",
                value: 355.18

              },
              {
                name: "Florida",
                value: 526.24

              },
              {
                name: "Georgia",
                value: 544.61

              },
              {
                name: "Hawaii",
                value: 404.42

              },
              {
                name: "Idaho",
                value: 471.81

              },
              {
                name: "Illinois",
                value: 439.20

              },
              {
                name: "Indiana",
                value: 476.53

              },
              {
                name: "Iowa",
                value: 417.27

              },
              {
                name: "Kansas",
                value: 512.40

              },
              {
                name: "Kentucky",
                value: 488.49

              },
              {
                name: "Louisiana",
                value: 454.98

              },
              {
                name: "Maine",
                value: 404.27

              },
              {
                name: "Maryland",
                value: 541.81

              },
              {
                name: "Massachusetts",
                value: 340.72

              },
              {
                name: "Michigan",
                value: 451.61

              },
              {
                name: "Minnesota",
                value: 433.79

              },
              {
                name: "Mississippi",
                value: 433.65

              },
              {
                name: "Missouri",
                value: 496.39

              },
              {
                name: "Montana",
                value: 474.81

              },
              {
                name: "Nebraska",
                value: 389.02

              },
              {
                name: "Nevada",
                value: 892.06

              },
              {
                name: "New Hampshire",
                value: 429.31

              },
              {
                name: "New Jersey",
                value: 277.14

              },
              {
                name: "New Mexico",
                value: 454.36

              },
              {
                name: "New York",
                value: 291.27

              },
              {
                name: "Ohio",
                value: 516.13

              },
              {
                name: "Oklahoma",
                value: 475.77

              },
              {
                name: "Oregon",
                value: 498.52

              },
              {
                name: "Pennsylvania",
                value: 338.92

              },
              {
                name: "Rhode Island",
                value: 303.88

              },
              {
                name: "Tennessee",
                value: 553.28

              },
              {
                name: "Texas",
                value: 493.23

              },
              {
                name: "Utah",
                value: 430.23

              },
              {
                name: "Vermont",
                value: 369.98

              },
              {
                name: "Virginia",
                value: 491.11

              },
              {
                name: "West Virginia",
                value: 379.89

              },
              {
                name: "Washington",
                value: 462.50

              },
              {
                name: "Wisconsin",
                value: 466.26

              },
              {
                name: "Wyoming",
                value: 491.11

              },
            ])
          },
        ]
      }, {
        geo3D: {
          map: 'USA',
          roam: true,
          itemStyle: {
            areaColor: '#33a3dc',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: false,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          },
          regions: [

            {
              name: 'Alabama',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Alaska',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Arkansas',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Delaware',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Illinois',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Indiana',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Iowa',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Kentucky',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Louisiana',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Michigan',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Mississippi',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Missouri',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Nebraska',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'NorthCarolina',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'NorthDakota',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Ohio',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Pennsylvania',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'SouthCarolina',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Tennessee',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Texas',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'WestVirginia',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Wisconsin',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Arizona',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'California',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Colorado',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Connecticut',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Florida',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Georgia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Hawaii',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Idaho',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Kansas',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Maine',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Massachusetts',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Minnesota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Montana',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Nevada',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewHampshire',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewJersey',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewMexico',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'NewYork',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Oklahoma',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Oregon',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'RhodeIsland',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'SouthDakota',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Utah',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Vermont',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Virginia',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Washington',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Wyoming',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

          ]
        },
        series: [

          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //size of bar
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([{
              name: "Alabama",
              value: 809.30

            },
              {
                name: "Alaska",
                value: 438.81

              },
              {
                name: "Arizona",
                value: 826.19

              },
              {
                name: "Arkansas",
                value: 897.64

              },
              {
                name: "California",
                value: 593.06

              },
              {
                name: "Colorado",
                value: 767.62

              },
              {
                name: "North Carolina",
                value: 810.88

              },
              {
                name: "South Carolina",
                value: 864.00

              },
              {
                name: "Connecticut",
                value: 572.29

              },
              {
                name: "Delaware",
                value: 750.00

              },
              {
                name: "North Dakota",
                value: 563.09

              },
              {
                name: "South Dakota",
                value: 594.59

              },
              {
                name: "Florida",
                value: 850.07

              },
              {
                name: "Georgia",
                value: 873.12

              },
              {
                name: "Hawaii",
                value: 666.67

              },
              {
                name: "Idaho",
                value: 728.81

              },
              {
                name: "Illinois",
                value: 774.35

              },
              {
                name: "Indiana",
                value: 875.21

              },
              {
                name: "Iowa",
                value: 752.61

              },
              {
                name: "Kansas",
                value: 884.62

              },
              {
                name: "Kentucky",
                value: 843.19

              },
              {
                name: "Louisiana",
                value: 835.62

              },
              {
                name: "Maine",
                value: 709.68

              },
              {
                name: "Maryland",
                value: 930.97

              },
              {
                name: "Massachusetts",
                value: 605.86

              },
              {
                name: "Michigan",
                value: 820.25

              },
              {
                name: "Minnesota",
                value: 759.66

              },
              {
                name: "Mississippi",
                value: 742.65

              },
              {
                name: "Missouri",
                value: 855.02

              },
              {
                name: "Montana",
                value: 772.73

              },
              {
                name: "Nebraska",
                value: 662.65

              },
              {
                name: "Nevada",
                value: 1227.85

              },
              {
                name: "New Hampshire",
                value: 741.38

              },
              {
                name: "New Jersey",
                value: 482.67

              },
              {
                name: "New Mexico",
                value: 720.93

              },
              {
                name: "New York",
                value: 521.60

              },
              {
                name: "Ohio",
                value: 925.00

              },
              {
                name: "Oklahoma",
                value: 821.75

              },
              {
                name: "Oregon",
                value: 805.03

              },
              {
                name: "Pennsylvania",
                value: 601.64

              },
              {
                name: "Rhode Island",
                value: 490.20

              },
              {
                name: "Tennessee",
                value: 923.08

              },
              {
                name: "Texas",
                value: 813.29

              },
              {
                name: "Utah",
                value: 686.57

              },
              {
                name: "Vermont",
                value: 610.17

              },
              {
                name: "Virginia",
                value: 836.58

              },
              {
                name: "West Virginia",
                value: 681.32

              },
              {
                name: "Washington",
                value: 769.81

              },
              {
                name: "Wisconsin",
                value: 824.66

              },
              {
                name: "Wyoming",
                value: 734.69

              },
            ])
          },
        ]
      }, {
        geo3D: {
          map: 'USA',
          roam: true,
          itemStyle: {
            areaColor: '#33a3dc',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: false,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          },
          regions: [

            {
              name: 'Alabama',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Alaska',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Arkansas',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Georgia',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Illinois',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Indiana',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Iowa',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Kentucky',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Louisiana',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Michigan',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Mississippi',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Missouri',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Nebraska',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NorthCarolina',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NorthDakota',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Ohio',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Oklahoma',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Pennsylvania',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'SouthCarolina',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Tennessee',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Texas',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'WestVirginia',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'California',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Connecticut',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Delaware',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Florida',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Hawaii',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Idaho',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Kansas',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Maine',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Maryland',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Massachusetts',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Minnesota',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Montana',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Nevada',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'NewHampshire',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'NewJersey',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'NewMexico',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'NewYork',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Oregon',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'RhodeIsland',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'SouthDakota',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Utah',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Vermont',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Virginia',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Washington',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Wisconsin',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Wyoming',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Arizona',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

            {
              name: 'Colorado',
              itemStyle: {
                areaColor: '#afdfe4'
              }
            },

          ]
        },
        series: [

          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //size of bar
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([{
              name: "Alabama",
              value: 1036.07

            },
              {
                name: "Alaska",
                value: 553.47

              },
              {
                name: "Arizona",
                value: 940.61

              },
              {
                name: "Arkansas",
                value: 1138.81

              },
              {
                name: "California",
                value: 727.94

              },
              {
                name: "Colorado",
                value: 910.80

              },
              {
                name: "North Carolina",
                value: 975.08

              },
              {
                name: "South Carolina",
                value: 1063.21

              },
              {
                name: "Connecticut",
                value: 760.83

              },
              {
                name: "Delaware",
                value: 932.18

              },
              {
                name: "North Dakota",
                value: 748.79

              },
              {
                name: "South Dakota",
                value: 782.77

              },
              {
                name: "Florida",
                value: 1019.63

              },
              {
                name: "Georgia",
                value: 1032.31

              },
              {
                name: "Hawaii",
                value: 887.71

              },
              {
                name: "Idaho",
                value: 883.90

              },
              {
                name: "Illinois",
                value: 981.93

              },
              {
                name: "Indiana",
                value: 1065.43

              },
              {
                name: "Iowa",
                value: 975.71

              },
              {
                name: "Kansas",
                value: 1130.34

              },
              {
                name: "Kentucky",
                value: 1067.59

              },
              {
                name: "Louisiana",
                value: 1075.79

              },
              {
                name: "Maine",
                value: 929.54

              },
              {
                name: "Maryland",
                value: 1169.23

              },
              {
                name: "Massachusetts",
                value: 771.69

              },
              {
                name: "Michigan",
                value: 1049.03

              },
              {
                name: "Minnesota",
                value: 947.17

              },
              {
                name: "Mississippi",
                value: 939.32

              },
              {
                name: "Missouri",
                value: 1085.93

              },
              {
                name: "Montana",
                value: 1009.87

              },
              {
                name: "Nebraska",
                value: 860.08

              },
              {
                name: "Nevada",
                value: 1280.69

              },
              {
                name: "New Hampshire",
                value: 919.54

              },
              {
                name: "New Jersey",
                value: 611.09

              },
              {
                name: "New Mexico",
                value: 907.97

              },
              {
                name: "New York",
                value: 667.79

              },
              {
                name: "Ohio",
                value: 1198.25

              },
              {
                name: "Oklahoma",
                value: 1042.43

              },
              {
                name: "Oregon",
                value: 990.54

              },
              {
                name: "Pennsylvania",
                value: 784.54

              },
              {
                name: "Rhode Island",
                value: 692.48

              },
              {
                name: "Tennessee",
                value: 1141.36

              },
              {
                name: "Texas",
                value: 970.11

              },
              {
                name: "Utah",
                value: 822.55

              },
              {
                name: "Vermont",
                value: 812.71

              },
              {
                name: "Virginia",
                value: 1038.65

              },
              {
                name: "West Virginia",
                value: 922.12

              },
              {
                name: "Washington",
                value: 928.82

              },
              {
                name: "Wisconsin",
                value: 1051.32

              },
              {
                name: "Wyoming",
                value: 1079.19

              },
            ])
          },
        ]
      }, {
        geo3D: {
          map: 'USA',
          roam: true,
          itemStyle: {
            areaColor: '#33a3dc',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: false,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          },
          regions: [

            {
              name: 'Alabama',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Arkansas',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Georgia',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Indiana',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Kentucky',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Louisiana',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Michigan',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Mississippi',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Missouri',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Oklahoma',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'SouthCarolina',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Tennessee',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Texas',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'WestVirginia',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Alaska',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Arizona',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'California',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Delaware',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Florida',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Idaho',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Illinois',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Iowa',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Kansas',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Maine',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Maryland',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Minnesota',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Nebraska',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Nevada',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NewHampshire',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NewJersey',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NewMexico',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NewYork',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NorthCarolina',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NorthDakota',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Ohio',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Oregon',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Pennsylvania',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'SouthDakota',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Utah',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Virginia',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Washington',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Wisconsin',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Wyoming',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Colorado',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Connecticut',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Hawaii',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Massachusetts',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Montana',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'RhodeIsland',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

            {
              name: 'Vermont',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

          ]
        },
        series: [

          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //size of bar
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([{
              name: "Alabama",
              value: 1100.98

            },
              {
                name: "Alaska",
                value: 563.61

              },
              {
                name: "Arizona",
                value: 876.73

              },
              {
                name: "Arkansas",
                value: 1188.39

              },
              {
                name: "California",
                value: 753.34

              },
              {
                name: "Colorado",
                value: 913.16

              },
              {
                name: "North Carolina",
                value: 983.70

              },
              {
                name: "South Carolina",
                value: 1087.42

              },
              {
                name: "Connecticut",
                value: 787.41

              },
              {
                name: "Delaware",
                value: 940.50

              },
              {
                name: "North Dakota",
                value: 813.59

              },
              {
                name: "South Dakota",
                value: 828.69

              },
              {
                name: "Florida",
                value: 995.71

              },
              {
                name: "Georgia",
                value: 1008.24

              },
              {
                name: "Hawaii",
                value: 918.96

              },
              {
                name: "Idaho",
                value: 866.36

              },
              {
                name: "Illinois",
                value: 1045.84

              },
              {
                name: "Indiana",
                value: 1126.14

              },
              {
                name: "Iowa",
                value: 1052.96

              },
              {
                name: "Kansas",
                value: 1205.74

              },
              {
                name: "Kentucky",
                value: 1121.12

              },
              {
                name: "Louisiana",
                value: 1174.14

              },
              {
                name: "Maine",
                value: 986.84

              },
              {
                name: "Maryland",
                value: 1206.65

              },
              {
                name: "Massachusetts",
                value: 826.77

              },
              {
                name: "Michigan",
                value: 1038.46

              },
              {
                name: "Minnesota",
                value: 990.86

              },
              {
                name: "Mississippi",
                value: 1003.00

              },
              {
                name: "Missouri",
                value: 1137.25

              },
              {
                name: "Montana",
                value: 1050.56

              },
              {
                name: "Nebraska",
                value: 913.14

              },
              {
                name: "Nevada",
                value: 1154.78

              },
              {
                name: "New Hampshire",
                value: 953.00

              },
              {
                name: "New Jersey",
                value: 647.80

              },
              {
                name: "New Mexico",
                value: 935.16

              },
              {
                name: "New York",
                value: 712.44

              },
              {
                name: "Ohio",
                value: 1287.19

              },
              {
                name: "Oklahoma",
                value: 1103.75

              },
              {
                name: "Oregon",
                value: 1016.79

              },
              {
                name: "Pennsylvania",
                value: 842.82

              },
              {
                name: "Rhode Island",
                value: 738.34

              },
              {
                name: "Tennessee",
                value: 1176.05

              },
              {
                name: "Texas",
                value: 963.90

              },
              {
                name: "Utah",
                value: 797.20

              },
              {
                name: "Vermont",
                value: 868.79

              },
              {
                name: "Virginia",
                value: 1056.88

              },
              {
                name: "West Virginia",
                value: 1007.48

              },
              {
                name: "Washington",
                value: 944.09

              },
              {
                name: "Wisconsin",
                value: 1105.17

              },
              {
                name: "Wyoming",
                value: 1126.59

              },
            ])
          },
        ]
      }, {
        geo3D: {
          map: 'USA',
          roam: true,
          itemStyle: {
            areaColor: '#33a3dc',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: false,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          },
          regions: [

            {
              name: 'Alabama',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Mississippi',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'WestVirginia',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Alaska',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Arizona',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Arkansas',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Delaware',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Florida',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Georgia',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Idaho',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Illinois',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Indiana',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Iowa',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Kansas',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Kentucky',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Louisiana',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Maine',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Maryland',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Michigan',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Minnesota',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Missouri',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Nebraska',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NewHampshire',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NewMexico',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NorthCarolina',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NorthDakota',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Ohio',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Oklahoma',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Oregon',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Pennsylvania',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'SouthCarolina',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'SouthDakota',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Tennessee',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Texas',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Virginia',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Washington',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Wisconsin',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Wyoming',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'California',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Connecticut',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Hawaii',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Massachusetts',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Montana',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Nevada',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NewJersey',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'NewYork',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'RhodeIsland',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Utah',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Vermont',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Colorado',
              itemStyle: {
                areaColor: '#90d7ec'
              }
            },

          ]
        },
        series: [

          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //size of bar
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([{
              name: "Alabama",
              value: 1059.32

            },
              {
                name: "Alaska",
                value: 534.91

              },
              {
                name: "Arizona",
                value: 828.48

              },
              {
                name: "Arkansas",
                value: 1146.03

              },
              {
                name: "California",
                value: 726.89

              },
              {
                name: "Colorado",
                value: 853.53

              },
              {
                name: "North Carolina",
                value: 920.98

              },
              {
                name: "South Carolina",
                value: 1011.26

              },
              {
                name: "Connecticut",
                value: 815.81

              },
              {
                name: "Delaware",
                value: 899.13

              },
              {
                name: "North Dakota",
                value: 787.20

              },
              {
                name: "South Dakota",
                value: 798.45

              },
              {
                name: "Florida",
                value: 951.32

              },
              {
                name: "Georgia",
                value: 957.11

              },
              {
                name: "Hawaii",
                value: 869.23

              },
              {
                name: "Idaho",
                value: 799.30

              },
              {
                name: "Illinois",
                value: 1045.32

              },
              {
                name: "Indiana",
                value: 1098.50

              },
              {
                name: "Iowa",
                value: 1031.59

              },
              {
                name: "Kansas",
                value: 1170.07

              },
              {
                name: "Kentucky",
                value: 1091.22

              },
              {
                name: "Louisiana",
                value: 1165.73

              },
              {
                name: "Maine",
                value: 984.56

              },
              {
                name: "Maryland",
                value: 1177.91

              },
              {
                name: "Massachusetts",
                value: 823.40

              },
              {
                name: "Michigan",
                value: 1161.53

              },
              {
                name: "Minnesota",
                value: 965.86

              },
              {
                name: "Mississippi",
                value: 992.02

              },
              {
                name: "Missouri",
                value: 1115.47

              },
              {
                name: "Montana",
                value: 101.04

              },
              {
                name: "Nebraska",
                value: 884.50

              },
              {
                name: "Nevada",
                value: 1044.07

              },
              {
                name: "New Hampshire",
                value: 950.68

              },
              {
                name: "New Jersey",
                value: 642.74

              },
              {
                name: "New Mexico",
                value: 882.86

              },
              {
                name: "New York",
                value: 718.67

              },
              {
                name: "Ohio",
                value: 1297.04

              },
              {
                name: "Oklahoma",
                value: 1049.62

              },
              {
                name: "Oregon",
                value: 970.92

              },
              {
                name: "Pennsylvania",
                value: 834.22

              },
              {
                name: "Rhode Island",
                value: 762.12

              },
              {
                name: "Tennessee",
                value: 1123.82

              },
              {
                name: "Texas",
                value: 881.97

              },
              {
                name: "Utah",
                value: 726.17

              },
              {
                name: "Vermont",
                value: 866.04

              },
              {
                name: "Virginia",
                value: 1007.87

              },
              {
                name: "West Virginia",
                value: 992.91

              },
              {
                name: "Washington",
                value: 884.92

              },
              {
                name: "Wisconsin",
                value: 1089.94

              },
              {
                name: "Wyoming",
                value: 1039.25

              },
            ])
          },
        ]
      }, {
        geo3D: {
          map: 'USA',
          roam: true,
          itemStyle: {
            areaColor: '#33a3dc',
            opacity: 1,
            borderWidth: 0.4,
            borderColor: '#000'
          },
          label: {
            show: false,
            textStyle: {
              color: '#000', //地图初始化区域字体颜色
              fontSize: 8,
              opacity: 1,
              backgroundColor: 'rgba(0,23,11,0)'
            },
          },
          emphasis: { //当鼠标放上去  地区区域是否显示名称
            label: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 3,
                backgroundColor: 'rgba(0,23,11,0)'
              }
            }
          },
          //shading: 'lambert',
          light: { //光照阴影
            main: {
              color: '#fff', //光照颜色
              intensity: 1.2, //光照强度
              //shadowQuality: 'high', //阴影亮度
              shadow: false, //是否显示阴影
              alpha: 55,
              beta: 10

            },
            ambient: {
              intensity: 0.3
            }
          },
          regions: [

            {
              name: 'Alabama',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Arkansas',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Kentucky',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Louisiana',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Mississippi',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Oklahoma',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Tennessee',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'WestVirginia',
              itemStyle: {
                areaColor: '#228fbd'
              }
            },

            {
              name: 'Alaska',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Arizona',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Delaware',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Florida',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Georgia',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Idaho',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Illinois',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Indiana',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Iowa',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Kansas',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Maine',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Maryland',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Michigan',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Minnesota',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Missouri',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Nebraska',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Nevada',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NewHampshire',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NewJersey',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NewMexico',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NewYork',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NorthCarolina',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'NorthDakota',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Ohio',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Oregon',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Pennsylvania',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'RhodeIsland',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'SouthCarolina',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'SouthDakota',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Texas',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Virginia',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Washington',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Wisconsin',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'Wyoming',
              itemStyle: {
                areaColor: '#33a3dc'
              }
            },

            {
              name: 'California',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Colorado',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Connecticut',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Hawaii',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Massachusetts',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Montana',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Utah',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

            {
              name: 'Vermont',
              itemStyle: {
                areaColor: '#7bbfea'
              }
            },

          ]
        },
        series: [

          {
            name: 'bar3D',
            type: "bar3D",
            coordinateSystem: 'geo3D',
            barSize: 1, //size of bar
            shading: 'lambert',
            opacity: 1,
            bevelSize: 0.3,
            label: {
              show: false,
              formatter: '{b}'
            },
            data: convertData([{
              name: "Alabama",
              value: 1055.95

            },
              {
                name: "Alaska",
                value: 521.59

              },
              {
                name: "Arizona",
                value: 806.33

              },
              {
                name: "Arkansas",
                value: 1136.35

              },
              {
                name: "California",
                value: 711.20

              },
              {
                name: "Colorado",
                value: 823.66

              },
              {
                name: "North Carolina",
                value: 881.55

              },
              {
                name: "South Carolina",
                value: 988.76

              },
              {
                name: "Connecticut",
                value: 797.23

              },
              {
                name: "Delaware",
                value: 864.88

              },
              {
                name: "North Dakota",
                value: 736.30

              },
              {
                name: "South Dakota",
                value: 783.45

              },
              {
                name: "Florida",
                value: 920.56

              },
              {
                name: "Georgia",
                value: 936.00

              },
              {
                name: "Hawaii",
                value: 842.72

              },
              {
                name: "Idaho",
                value: 783.45

              },
              {
                name: "Illinois",
                value: 1046.62

              },
              {
                name: "Indiana",
                value: 1090.71

              },
              {
                name: "Iowa",
                value: 1023.47

              },
              {
                name: "Kansas",
                value: 1163.88

              },
              {
                name: "Kentucky",
                value: 1084.36

              },
              {
                name: "Louisiana",
                value: 1148.95

              },
              {
                name: "Maine",
                value: 989.62

              },
              {
                name: "Maryland",
                value: 1156.02

              },
              {
                name: "Massachusetts",
                value: 809.14

              },
              {
                name: "Michigan",
                value: 1165.15

              },
              {
                name: "Minnesota",
                value: 951.12

              },
              {
                name: "Mississippi",
                value: 990.45

              },
              {
                name: "Missouri",
                value: 1113.78

              },
              {
                name: "Montana",
                value: 995.47

              },
              {
                name: "Nebraska",
                value: 870.03

              },
              {
                name: "Nevada",
                value: 1015.58

              },
              {
                name: "New Hampshire",
                value: 955.57

              },
              {
                name: "New Jersey",
                value: 638.07

              },
              {
                name: "New Mexico",
                value: 874.66

              },
              {
                name: "New York",
                value: 711.37

              },
              {
                name: "Ohio",
                value: 1300.33

              },
              {
                name: "Oklahoma",
                value: 1030.35

              },
              {
                name: "Oregon",
                value: 955.99

              },
              {
                name: "Pennsylvania",
                value: 833.92

              },
              {
                name: "Rhode Island",
                value: 766.04

              },
              {
                name: "Tennessee",
                value: 1106.97

              },
              {
                name: "Texas",
                value: 844.99

              },
              {
                name: "Utah",
                value: 699.70

              },
              {
                name: "Vermont",
                value: 870.50

              },
              {
                name: "Virginia",
                value: 984.84

              },
              {
                name: "West Virginia",
                value: 998.02

              },
              {
                name: "Washington",
                value: 876.39

              },
              {
                name: "Wisconsin",
                value: 1086.00

              },
              {
                name: "Wyoming",
                value: 1008.58

              },
            ])
          },
        ]
      }, ]

    };


    myChart.setOption(option);
    myChart.on('mouseover', function(params) {
      console.log(params)
      clearInterval(timeTicket);
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
      });
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
      });
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: params.dataIndex,
      });
    });
    myChart.on('mouseout', function(params) {
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function() {
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
        });
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: (count) % dataLength
        });
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: (count) % dataLength
        });
        count++;
      }, 1000);
    });
  }

);



// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);