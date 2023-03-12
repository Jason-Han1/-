var uploadedDataURL = "/asset/get/s/data-1607421620110-eSbhT88fu.json";


myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    //地理位置信息
    var geoCoordMap = {
       '罗湖区': [114.123885,22.555341],
    '福田区': [114.05096,22.541009],
    '南山区': [113.92943,22.531221],
    "宝安区": [113.828671,22.754741],
    '龙岗区': [114.251372,22.721511],
    "盐田区": [114.235366,22.555069],
    "龙华区": [114.044346,22.691963],
    "坪山区": [114.338441,22.69423],
    "光明区": [113.935895,22.748816]
    
};
//数据信息
    var data = [
        {name:"罗湖区",value:199},
    {name:"福田区",value:42},
    {name:"南山区",value:102},
    {name:"宝安区",value:81},
    {name:"龙岗区",value:47},
    {name:"盐田区",value:67},
    {name:"龙华区",value:82},
    {name:"坪山区",value:123},
    {name:"光明区",value:24}
    ];
   var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
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
        backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#0f378f' // 0% 处的颜色
        }, {
            offset: 1, color: '#00091a' // 100% 处的颜色
        }],
        globalCoord: false 
    },
        title: {
            top:20,
            text: '“设备实行情况” - 深圳市',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },    

       tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
              	return params.name + ' : ' + params.value;
              }else{
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
     /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
            legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    }, 
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {

            }
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            center:[114.123885,22.555341],
             zoom : 7,//当前视角缩放比例
            label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false,
				}
			},
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9',//线
                    shadowColor: '#092f8f',//外发光
                    shadowBlur: 20
                },
				 emphasis: {
                    areaColor: '#0a2dae',//悬浮区背景
                }
            }
        },
        series : [
      {
         
            symbolSize: 5,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            },
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            
        },
         {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#FFFFFF',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'Top 5',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [50,50],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    },
                    formatter (value){
                        return value.data.value[2]
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#D8BC37', //标志颜色
                }
            },
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
        },
         
    ]
    };
    myChart.setOption(option);
});