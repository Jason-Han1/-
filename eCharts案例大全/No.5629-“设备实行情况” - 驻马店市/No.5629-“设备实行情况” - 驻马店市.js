var uploadedDataURL = "/asset/get/s/data-1602138948201-u_so-hcN8.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    //地理位置信息
    var geoCoordMap = {
       '贵阳市': [106.713478,26.578343], 
    "新蔡县": [114.979952,32.752487]
    
};
//数据信息
    var data = [
        {name:"贵阳市",value:199},
    {name:"上蔡县",value:42},
    {name:"西平县",value:102},
    {name:"驿城区",value:81},
    {name:"确山县",value:47},
    {name:"泌阳县",value:67},
    {name:"汝南县",value:82},
    {name:"正阳县",value:123},
    {name:"平舆县",value:24},
    {name:"新蔡县",value:92}
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
            text: '“设备实行情况” - 驻马店市',
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
            center:[106.713478,26.578343],
            zoom : 4,//当前视角缩放比例
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