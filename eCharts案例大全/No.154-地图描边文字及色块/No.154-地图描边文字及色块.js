var uploadedDataURL = "/asset/get/s/data-1605510661041-oDutJVlSC.json";
		var nameMap = '山东省';
		window.dataList = [  { name: '济南市', value: 396 },
        { name: '青岛市', value: 66 },
        { name: '烟台市', value: 222 },
        { name: '潍坊市', value: 688 },
        { name: '菏泽市', value: 75 },
        { name: '日照市', value: 121 },
        { name: '威海市', value: 91 },
        { name: '枣庄市', value: 479 },
        { name: '临沂市', value: 34 },
        { name: '滨州市', value: 631 },
        { name: '东营市', value: 1203 },
        { name: '淄博市', value: 988 },
        { name: '泰安市', value: 693 },
        { name: '聊城市', value: 934 },
        { name: '济宁市', value: 748 },
        { name: '德州市', value: 1267 }
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
	
let textStyle = {}

                  textStyle.textBorderColor='red'
                  textStyle.textBorderType='solid'
                  textStyle.textBorderWidth=5
                  textStyle.fontSize= 16
                  textStyle.fontWeight='bolder'
                  textStyle.color= '#ddd'


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
          text: '地图',
          top: '2%',
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
            color: ['rgb(202,249,130)', 'rgb(129,211,248)', 'rgb(255,255,128)', 'rgb(128,255,255)', 'rgb(0,255,255)', 'rgb(128,128,255)', 'rgb(236,128,141)', 'rgb(194,128,255)', 'rgb(245,154,35)', 'rgb(112,182,3)', 'rgb(0,182,128)', 'rgb(99,0,191)']
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
            color: ['#FF6464', '#FFA85A', '#FFEC6F', '#8BBCFE'].reverse()
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
               color:'#ddd',
              show: true
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
            itemStyle:{
              show:true,
              color:'#ddd'
            },
            label: {
              normal: {
                show: true,
                formatter:"{b}",
                position:'right',
                textStyle: textStyle
              }
            },
            data: window.dataList
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbol: 'circle',
            symbolSize: 10,
           
            label: {
               emphasis:{
              show:true
            },
              normal: {
                show: true,
                position:'right',
                textStyle: textStyle,
                formatter (value) {
                  return value.data.value[2]
                }
              }
            },
            rippleEffect:{
              period:4,
              brushStyle:'stroke',
              scale:4
            },
           // hoverAnimation: true,
            itemStyle: {
              normal: {
                show:true,
                color: '#ddd' // 标志颜色
              }
            },
            zlevel: 2,
            data: convertData(window.dataList)
          }
        ]

		    };
		    myChart.setOption(optionMap, true);
		});