var uploadedDataURL = "/asset/get/s/data-1509618385039-rktRfuu0-.json";
// 根据目标的起点终点，通过百度DrivingRoute接口获取路线坐标，并绘制线路
// 由于兼容多数浏览器，采用简单语法
var couriers = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
$.get(uploadedDataURL, function (uploadedData) {
    uploadedData = JSON.parse(uploadedData)
    var couriersData = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []] // 运动轨迹
    var convertData = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []] // 静止点
    function printItem (val) {
        val.map(function (coum, key) {
          var hStep = 300 / (coum.length - 1);
          coum.map(function (item, index) {
            let points = []
            for (var i = 0; i < item.length; i++) {
              points.push([item[i].lng, item[i].lat])
            }
            couriersData[key].push({coords: points, lineStyle: {normal: {color: 'yellow'}}})
          })
        })
        /*减少数据请求，进行数据缓存*/
        localStorage.setItem('couriersData', JSON.stringify(couriersData));
        localStorage.setItem('convertData', JSON.stringify(convertData));
     };
    if (localStorage.getItem('couriersData') && localStorage.getItem('convertData')) {
        couriersData = JSON.parse(localStorage.getItem('couriersData'))
        convertData = JSON.parse(localStorage.getItem('convertData'))
      } else {
        var map = new BMap.Map("bmap");
        for (let i = 0; i < uploadedData.length; i++) {
          var sameNumber = 0
          for (let j = 0; j < uploadedData[i].length; j++) {
            /*判断是否为静止点，减少数据请求*/
            if (uploadedData[i][j].bVcdflon === uploadedData[i][j].eVcdflon && uploadedData[i][j].bVcdflat === uploadedData[i][j].eVcdflat) {
              convertData[i].push({name: uploadedData[i][j].rn, value: [uploadedData[i][j].eVcdflon, uploadedData[i][j].eVcdflat]})
              sameNumber += 1
            } else {
              (function () {
                var driving = new BMap.DrivingRoute(map);
                var myP1 = new BMap.Point(uploadedData[i][j].bVcdflon, uploadedData[i][j].bVcdflat);    //起点
                var myP2 = new BMap.Point(uploadedData[i][j].eVcdflon, uploadedData[i][j].eVcdflat);    //终点
                driving.search(myP1, myP2);
                driving.setSearchCompleteCallback(function(){
                    couriers[i].push(driving.getResults().getPlan(0).getRoute(0).getPath())
                    if (i === uploadedData.length - 1 && couriers[i].length === uploadedData[i].length - sameNumber) printItem(couriers)
                })
              })()
            }
          }
        }
     }
    myChart.setOption(option = {
        baseOption: {
          animationDurationUpdate: 2000,
          animationEasingUpdate: 'quinticInOut',
          animation: false,
          timeline: {
            autoPlay: true,
            axisType: 'time',
            orient: 'vertical',
            currentIndex: 18,
            playInterval: 2000,
            right: 0,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            itemStyle: {
              normal: {
                color: '#04a5f1'
              },
              emphasis: {
                color: '#04a5f1'
              }
            },
            lineStyle: {
              color: '#ddd'
            },
            checkpointStyle: {
              color: '#04a5f1',
              borderColor: 'rgba(4, 165, 261, .5)'
            },
            data: ['2017/10/21 01:00', '2017/10/21 02:00', '2017/10/21 03:00', '2017/10/21 04:00', '2017/10/21 05:00', '2017/10/21 06:00', '2017/10/21 07:00', '2017/10/21 08:00', '2017/10/21 09:00', '2017/10/21 10:00', '2017/10/21 11:00', '2017/10/21 12:00', '2017/10/21 13:00', '2017/10/21 14:00', '2017/10/21 15:00', '2017/10/21 16:00', '2017/10/21 17:00', '2017/10/21 18:00', '2017/10/21 19:00', '2017/10/21 20:00', '2017/10/21 21:00', '2017/10/21 22:00', '2017/10/21 23:00']
          },
          bmap: {
            center: [113.527882, 22.204539],
            zoom: 12,
            roam: true,
            mapStyle: {
              'styleJson': [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                  'color': '#031628'
                }
              },
              {
                'featureType': 'land',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#000102'
                }
              },
              {
                'featureType': 'poi',
                "elementType": 'labels',
                'stylers': {
                  "visibility": 'off'
                }
              },
              {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              },
              {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                  'color': '#000000'
                }
              },
              {
                'featureType': 'arterial',
                'elementType': 'geometry.stroke',
                'stylers': {
                  'color': '#0b3d51'
                }
              },
              {
                'featureType': 'local',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#000000'
                }
              },
              {
                'featureType': 'railway',
                'elementType': 'geometry.fill',
                'stylers': {
                  'color': '#000000'
                }
              },
              {
                'featureType': 'railway',
                'elementType': 'geometry.stroke',
                'stylers': {
                  'color': '#08304b'
                }
              },
              {
                'featureType': 'subway',
                'elementType': 'geometry',
                'stylers': {
                  'lightness': -70
                }
              },
              {
                'featureType': 'building',
                'elementType': 'geometry.fill',
                'stylers': {
                  'color': '#000000'
                }
              },
              {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': {
                  'color': '#857f7f'
                }
              },
              {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': {
                  'color': '#000000'
                }
              },
              {
                'featureType': 'building',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#022338'
                }
              },
              {
                'featureType': 'green',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#062032'
                }
              },
              {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                  'color': '#465b6c'
                }
              },
              {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                  'color': '#022338'
                }
              },
              {
                'featureType': 'label',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }]
            }
          },
          title: {
            bottom: '10%',
            right: '25%',
            textStyle: {
              color: '#dbdbdb',
            }
          },
          series: [
            {
              type: 'lines',
              coordinateSystem: 'bmap',
              polyline: true,
              silent: true,
              lineStyle: {
                normal: {
                  opacity: 0.2,
                  width: 2
                }
              },
              progressiveThreshold: 500,
              progressive: 200
            },
            {
              type: 'lines',
              coordinateSystem: 'bmap',
              polyline: true,
              lineStyle: {
                normal: {
                  width: 0
                }
              },
              effect: {
                constantSpeed: 50,
                show: true,
                trailLength: 0.1,
                symbolSize: 2
              },
              zlevel: 5
            },
            {
              type: 'scatter',
              coordinateSystem: 'bmap',
              label: {
                normal: {
                  show: false
                }
              },
              symbolSize: 2,
              itemStyle: {
                normal: {
                  color: 'yellow'
                }
              },
              zlevel: 1
            }
          ]
        },
        options: [
          {title: {text: '珠海市快递员0: 00 - 1：00流动'}, series: [{data: couriersData[0]}, {data: couriersData[0]}, {data: convertData[0]}]},
          {title: {text: '珠海市快递员1: 00 - 2：00流动'}, series: [{data: couriersData[1]}, {data: couriersData[1]}, {data: convertData[1]}]},
          {title: {text: '珠海市快递员2: 00 - 3：00流动'}, series: [{data: couriersData[2]}, {data: couriersData[2]}, {data: convertData[2]}]},
          {title: {text: '珠海市快递员3: 00 - 4：00流动'}, series: [{data: couriersData[3]}, {data: couriersData[3]}, {data: convertData[3]}]},
          {title: {text: '珠海市快递员4: 00 - 5：00流动'}, series: [{data: couriersData[4]}, {data: couriersData[4]}, {data: convertData[4]}]},
          {title: {text: '珠海市快递员5: 00 - 6：00流动'}, series: [{data: couriersData[5]}, {data: couriersData[5]}, {data: convertData[5]}]},
          {title: {text: '珠海市快递员6: 00 - 7：00流动'}, series: [{data: couriersData[6]}, {data: couriersData[6]}, {data: convertData[6]}]},
          {title: {text: '珠海市快递员7: 00 - 8：00流动'}, series: [{data: couriersData[7]}, {data: couriersData[7]}, {data: convertData[7]}]},
          {title: {text: '珠海市快递员8: 00 - 9：00流动'}, series: [{data: couriersData[8]}, {data: couriersData[8]}, {data: convertData[8]}]},
          {title: {text: '珠海市快递员9: 00 - 10：00流动'}, series: [{data: couriersData[9]}, {data: couriersData[9]}, {data: convertData[9]}]},
          {title: {text: '珠海市快递员10: 00 - 11：00流动'}, series: [{data: couriersData[10]}, {data: couriersData[10]}, {data: convertData[10]}]},
          {title: {text: '珠海市快递员11: 00 - 12：00流动'}, series: [{data: couriersData[11]}, {data: couriersData[11]}, {data: convertData[11]}]},
          {title: {text: '珠海市快递员12: 00 - 13：00流动'}, series: [{data: couriersData[12]}, {data: couriersData[12]}, {data: convertData[12]}]},
          {title: {text: '珠海市快递员13: 00 - 14：00流动'}, series: [{data: couriersData[13]}, {data: couriersData[13]}, {data: convertData[13]}]},
          {title: {text: '珠海市快递员14: 00 - 15：00流动'}, series: [{data: couriersData[14]}, {data: couriersData[14]}, {data: convertData[14]}]},
          {title: {text: '珠海市快递员15: 00 - 16：00流动'}, series: [{data: couriersData[15]}, {data: couriersData[15]}, {data: convertData[15]}]},
          {title: {text: '珠海市快递员16: 00 - 17：00流动'}, series: [{data: couriersData[16]}, {data: couriersData[16]}, {data: convertData[16]}]},
          {title: {text: '珠海市快递员17: 00 - 18：00流动'}, series: [{data: couriersData[17]}, {data: couriersData[17]}, {data: convertData[17]}]},
          {title: {text: '珠海市快递员18: 00 - 19：00流动'}, series: [{data: couriersData[18]}, {data: couriersData[18]}, {data: convertData[18]}]},
          {title: {text: '珠海市快递员19: 00 - 20：00流动'}, series: [{data: couriersData[19]}, {data: couriersData[19]}, {data: convertData[19]}]},
          {title: {text: '珠海市快递员20: 00 - 21：00流动'}, series: [{data: couriersData[20]}, {data: couriersData[20]}, {data: convertData[20]}]},
          {title: {text: '珠海市快递员21: 00 - 22：00流动'}, series: [{data: couriersData[21]}, {data: couriersData[21]}, {data: convertData[21]}]},
          {title: {text: '珠海市快递员22: 00 - 23：00流动'}, series: [{data: couriersData[22]}, {data: couriersData[22]}, {data: convertData[22]}]},
        ]
    });
})