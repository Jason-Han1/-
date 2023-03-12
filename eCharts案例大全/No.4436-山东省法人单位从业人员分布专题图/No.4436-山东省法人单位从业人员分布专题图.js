var uploadedDataURL = "/asset/get/s/data-1605510661041-oDutJVlSC.json";
		var nameMap = '山东省';
		window.dataList = [  { name: '济南市', value: 318.6 },
        { name: '青岛市', value: 385.3 },
        { name: '烟台市', value: 241.7 },
        { name: '潍坊市', value: 228.3 },
        { name: '菏泽市', value: 152.1 },
        { name: '日照市', value: 63.4 },
        { name: '威海市', value: 111.9 },
        { name: '枣庄市', value: 78.7 },
        { name: '临沂市', value: 203.9 },
        { name: '滨州市', value: 89.2 },
        { name: '东营市', value: 76.3 },
        { name: '淄博市', value: 137.5 },
        { name: '泰安市', value: 109.1 },
        { name: '聊城市', value: 96.0 },
        { name: '济宁市', value: 205.5 },
        { name: '德州市', value: 122.3 }
		];
		var geoCoordMap = {};
		var convertData = function(data) {
		    console.log('data', data)
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var geoCoord = geoCoordMap[data[i].name];
		        if (geoCoord) {
		            res.push({
		                name: data[i].name,
		                value: geoCoord.concat(data[i].value),
		            });
		        }
		    }
		    console.log('res', res)
		    return res;
		};

		$.get(uploadedDataURL, function(gdMap) {
		    debugger
		    echarts.registerMap(nameMap, gdMap);
		    /*获取地图数据*/
		    myChart.showLoading();
		    var mapFeatures = echarts.getMap(nameMap).geoJson.features;
		    myChart.hideLoading();
		    mapFeatures.forEach(function(v) {
		        // 地区名称
		        var name = v.properties.name;
		        // 地区经纬度
		        geoCoordMap[name] = v.properties.center;

		    });
		    console.log(geoCoordMap)
		    //GDP
		  var optionMap = {
		        title: {
          text: '山东省法人单位从业人员分布专题图',
          x: 'center',
          textStyle: {
            color: '#000',
            fontSize: 16
          }
        },
        visualMap: [{
          min: 0,
          max:  1000,
          show: false,
          //   text: ['High', 'Low'],
          realtime: false,
          calculable: false,
          seriesIndex: [0],
          inRange: {
            color: ['#ccc', '#ccc', 'rgb(129,211,248)', '#23074d', 'rgb(128,255,255)', 'rgb(0,255,255)', 'rgb(128,128,255)', 'rgb(236,128,141)', 'rgb(194,128,255)', 'rgb(245,154,35)', 'rgb(112,182,3)', 'rgb(0,182,128)', 'rgb(99,0,191)']
          }
        },
        {
          min: 0,
          max: 1000,
          seriesIndex: 1,
          show: true,
          splitNumber: 4,
          right: '2%',
          inRange: {
            color: ['#FF6464','rgb(129,211,248)'].reverse()
          },
          formatter: function (value) {
            return ''
          }
        }],
        geo: {
          map: nameMap,
          show: false,
          roam: true,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          }
        },
        series: [
          { // 地图块的相关信息
            type: 'map',
            map: nameMap,
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  fontWeight: 400,
                  color: 'rgb(0,0,0) '
                }
              }
            },
            data: window.dataList
          },
          
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [40, 40],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#000',
                  fontSize: 10,
                  fontWeight: 600
                },
                formatter (value) {
                  return value.data.value[2]
                }
              }
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: 'green' // 标志颜色
              }
            },
            zlevel: 6,
            data: convertData(window.dataList)
          }
        ]

		    };
		    myChart.setOption(optionMap, true);
		});
		