
    var myHosName = "江苏省";
	var geoCoordMap = {
       '安徽': [117.17, 31.52],
      '北京市': [116.24, 39.55],
      '重庆市': [106.54, 29.59],
      '福建省': [119.18, 26.05],
      '甘肃省': [103.51, 36.04],
      '广东': [113.14, 23.08],
      '广西壮族自治区': [108.19, 22.48],
      '贵州省': [106.42, 26.35],
      '海南省': [110.20, 20.02],
      '河北省': [114.30, 38.02],
      '河南省': [113.40, 34.46],
      '黑龙江省': [128.36, 45.44],
      '湖北省': [112.27, 30.15],
      '湖南省': [112.59, 28.12],
      '吉林省': [125.19, 43.54],
      '江苏省': [118.46, 32.03],
      '江西': [115.55, 28.40],
      '辽宁省': [123.25, 41.48],
      '内蒙古': [108.41, 40.48],
      '宁夏回族自治区': [106.16, 38.27],
      '青海省': [101.48, 36.38],
      '山东省': [118.00, 36.40],
      '山西省': [112.33, 37.54],
      '陕西省': [108.57, 34.17],
      '上海': [121.29, 31.14],
      '海南': [108.77, 19.10],
      '四川省': [104.04, 30.40],
      '天津市': [117.12, 39.02],
      '西藏自治区': [91.08, 29.39],
      '新疆维吾尔自治区': [87.36, 43.45],
      '云南省': [102.42, 25.04],
      '浙江': [120.10, 30.16],
      '澳门': [115.07, 21.33],
      '台湾省': [121.21, 23.53]   
    };

    var NJData = [   	   	
    	[{name:"江苏省"},{name: '浙江',value: 68,proportion:"30%"}],
    	[{name:"江苏省"},{name: '安徽',value: 58,proportion:"20%"}], 
    	[{name:"江苏省"},{name: '广东',value: 68,proportion:"29%"}],
    	[{name:"江苏省"},{name: '江西',value: 48,proportion:"50%"}], 
    	[{name:"江苏省"},{name: '上海',value: 78,proportion:"50%"}]
    ];
 var planePath = "path://M917.965523 917.331585c0 22.469758-17.891486 40.699957-39.913035 40.699957-22.058388 0-39.913035-18.2302-39.913035-40.699957l-0.075725-0.490164-1.087774 0c-18.945491-157.665903-148.177807-280.296871-306.821991-285.4748-3.412726 0.151449-6.751774 0.562818-10.240225 0.562818-3.450589 0-6.789637-0.410346-10.202363-0.524956-158.606321 5.139044-287.839661 127.806851-306.784128 285.436938l-1.014096 0 0.075725 0.490164c0 22.469758-17.854647 40.699957-39.913035 40.699957s-39.915082-18.2302-39.915082-40.699957l-0.373507-3.789303c0-6.751774 2.026146-12.903891 4.91494-18.531052 21.082154-140.712789 111.075795-258.241552 235.432057-312.784796C288.420387 530.831904 239.989351 444.515003 239.989351 346.604042c0-157.591201 125.33352-285.361213 279.924387-285.361213 154.62873 0 279.960203 127.770012 279.960203 285.361213 0 97.873098-48.391127 184.15316-122.103966 235.545644 124.843356 54.732555 215.099986 172.863023 235.808634 314.211285 2.437515 5.290493 4.01443 10.992355 4.01443 17.181311L917.965523 917.331585zM719.822744 346.679767c0-112.576985-89.544409-203.808826-199.983707-203.808826-110.402459 0-199.944821 91.232864-199.944821 203.808826s89.542362 203.808826 199.944821 203.808826C630.278335 550.488593 719.822744 459.256752 719.822744 346.679767z";
 var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
              res.push({
                  fromName: dataItem[0].name,
                  toName: dataItem[1].name,
                  coords: [fromCoord, toCoord]
              });
          }
      }
      return res;
  };

  var mySeries = [];
  [
      [myHosName, NJData]
  ].forEach(function(item, i) {
      mySeries.push({ //线
          name: item[0],        
          type: 'lines',
          zlevel: 1,
          effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color:'#fff',
              symbolSize: 3
          },
          lineStyle: {
              normal: {
                  color:'#FF9A56',
                  width: 0,
                  curveness: 0.2
              }
          },
          data: convertData(item[1])
      }, { //移动 点
          name: item[0],                   
          type: 'lines',
          zlevel: 2,
          effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 10
          },
          lineStyle: {
              normal: {
                  color:'#FF9A56',
                  width: 1,
                  opacity: 1,
                  curveness: 0.2
              }
          },
          data: convertData(item[1])
      }, { //省份圆点
          name: item[0],       
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
              brushType: 'stroke'
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
              }
          },
          symbolSize: function(val) {
              return val[2] / 6;
          },
          itemStyle: {
              normal: {
                  color: function(params) { 
                   var tmp = params.dataIndex;
                    if (tmp=='0') {
                          return '#F8E71C';
                      } else if (tmp=='1') {
                          return '#23FFF4'
                      } else if (tmp=='2') {
                          return '#FA4D41'
                      }else if (tmp=='3') {
                          return '#85FF0A'
                      }else{
                          return '#DD7B87';	 
                      }
                  }
              }
          },
          data: item[1].map(function(dataItem) {
              return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                  proportion:dataItem[1].proportion
              };
          })
      });
  });

    //var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    

  	option = {
  	    backgroundColor: '#404a59',
	    tooltip: {
	        trigger: 'item',
	        formatter: function(params) {  		        	
	             if (params.seriesIndex == 2 || params.seriesIndex == 5 || params.seriesIndex == 8) {
                  return params.name + ':'+ params.data.proportion + '&nbsp;' + params.data.value[2] + 'G';
                } 
          	}
	    },
	    
	    geo: {	    	
	    	/*zoom:1.1,缩放*/
	        map: 'china',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        roam: true,
	       /*center: [115.55, 28.40],*/
	        silent: true,
	        itemStyle: {
	            normal: {               	
                	borderColor: '#2E617D',
                	areaColor:'#04294A'                	
            	},
	            emphasis: {
	                areaColor: '#2a333d'
	            }
	        }
	    },
	    series:mySeries       
	};   