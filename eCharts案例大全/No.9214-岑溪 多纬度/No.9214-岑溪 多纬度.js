var uploadedDataURL = "/asset/get/s/data-1576122710336-HEDsN9Oj.json";myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('guangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
       '岑溪': [111.003154,22.925685],
       '藤县': [110.989913,23.350225],
       '合浦': [109.214017,21.66593],
       '田阳': [106.920265,23.740418],
       '兴业': [109.883847,22.743869],
       '平桂': [111.502419,24.448841],
       '覃塘': [109.464024,23.127934]
    }
    var data1 = [{
            name: '藤县',
            value: 100
        }, {
            name: '合浦',
            value: 80
        }, {
            name: '田阳',
            value: 90
        }, {
            name: '平桂',
            value: 70
        } , {
            name: '覃塘',
            value: 50
        }
    ];
	var data2 = [{
            name: '岑溪',
            value: 120
        },
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
        backgroundColor:'#222',
	  tooltip: {
		 
               formatter : function(e){
                   if (typeof(e.value)[2] == "undefined") {
                       return e.name;
                   }else{
                       return e.name + ':' + e.value[2] + '家';
                   }
               }
           },
        legend: {
            
           // orient: 'vertical', 竖排 
            top: '0',
            right: 'center',
            data: ['图例1','图例2'],
            textStyle: {
                color: '#fff',
				fontSize:16,
            },
			//selectedMode : 'single'//单选模式
        },

        geo: {
            map: 'guangxi',
			zoom: 1.1,//放大
            type: 'map',
            roam: true, //是否开启鼠标缩放和平移漫游
			label: {//区域名样式 
                normal: {
                    show: true,
                    textStyle: {
						fontSize:10,
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'rgba(255,255,255,1)'
                    }
                }
            },
			
			 itemStyle: {
            normal: {
                areaColor: 'rgba(0,97,225,.3)',
                borderColor: 'rgba(255,255,255,.6)'
            },
            emphasis: {
                areaColor: 'rgba(0,97,225,.5)',
            }
        }
           
        },
        series: [
			{
            name: '图例1',
             type: 'effectScatter',
            rippleEffect: {
                brushType: 'stroke'
            },
				  data: data1,
            coordinateSystem: 'geo',
            data: convertData(data1),
            symbolSize: function(val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#3bafff',
                }
            },
            zlevel: 1
        },
			{
            name: '图例2',
            type: 'effectScatter',
				 rippleEffect: {
                brushType: 'stroke'
            },
			data: data2,
            coordinateSystem: 'geo',
            data: convertData(data2),
            symbolSize: function(val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#00d488',
                }
            },
           // zlevel: 1
        },]
    };
    myChart.setOption(option);

	 window.addEventListener("resize",function(){
            myChart.resize();
		
        });
});