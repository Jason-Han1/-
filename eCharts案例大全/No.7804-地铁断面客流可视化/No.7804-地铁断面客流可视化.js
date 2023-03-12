//关于这个图表我做的视频简介：https://www.bilibili.com/video/BV1pD4y127tW
//各位观众老爷们一键三连，下次一定！

var uploadedDataURL = "/asset/get/s/data-1589081496416-ZU707Io91.json";


//myChart是百度地图的部分
myChart.setOption(option = {
		title: {
        text: "地铁客流时变",
        left: 10,
        top: 10,
        textStyle: {
            color: 'rgba(255,255,255,1)',
            fontSize: 40
        }
    },	visualMap: {
            min: 0,
            max: 15000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
			seriesIndex:0,
            inRange: {
                color: ['#9DCC42','#FFFE03','#F7941D','#E9420E','#FF0000']
            }
        },
		animation: false,
		//bmap组件是百度地图的参数
		bmap: {
			center: [121.401206, 31.203083],
			zoom: 12,
			roam: true,
			//地图个性化设置
			mapStyle: {
                styleJson: [
          {
                    "featureType": "land",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#222222"
                    }
          },
          {
                    "featureType": "building",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#2b2b2b"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -42,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -77,
                              "saturation": -94
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
         
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#212121",
                              "hue": "#000000",
                              "lightness": -40
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry.stroke",
                    "stylers": {
                              "color": "#181818"
                    }
          },
          {
                    "featureType": "railway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -52
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                              "color": "#313131"
                    }
          },
          {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": {
                              "color": "#8b8787"
                    }
          },
          {
                    "featureType": "manmade",
                    "elementType": "geometry",
                    "stylers": {
                              "color": "#1b1b1b"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -75,
                              "saturation": -91
                    }
          },
          {
                    "featureType": "subway",
                    "elementType": "geometry",
                    "stylers": {
                              "lightness": -65
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                              "lightness": -40,
                              "visibility": "off"
                    }
          }
]
            }
		},
		series: [
		]
	});
if (!app.inNode) {
	// 添加百度地图插件
	var bmap = myChart.getModel().getComponent('bmap').getBMap();
	bmap.addControl(new BMap.MapTypeControl());
}



	$.getJSON(uploadedDataURL, function (data) {
	    console.log(data)
	linedata = []
	for (var i = 0; i < data.length; i += 1) {
		linedata.push({'coords':data[i][2],'value':data[i][1],'lineStyle':{'width':6*data[i][0]}})
	}
//读取数据

	
myChart.setOption(option = {
		title: {
        text: "上午8时地铁客流"},
	        series: [{
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: linedata,
            silent: false,
            lineStyle: {
                color: 'rgb(200,200,200)',
                opacity: 1,
                width: 2
            },
            progressiveThreshold: 500,
            progressive: 200
        }]
})
})
