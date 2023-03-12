var uploadedDataURL = "/asset/get/s/data-1505284886122-SkAzQUUcZ.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shandong', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '朝阳':[120.22,41.8],
        '丹东':[124.38,40.33],
        '抚顺':[124.48,41.88],
        '本溪':[125.12,41.30],
        '铁岭':[124.03,42.828],
        '大连':[122.00,39.62],
        '营口':[122.43,40.27],
        '鞍山':[123.28,40.47],
        '辽阳':[123.17,41.27],
        '沈阳':[123.03,42.10],
        '盘锦':[122.07,41.12],
        '锦州':[121.13,41.30],
        '阜新':[121.57,42.32],
        '葫芦岛':[120.33,40.62]
    }
    //后台接口返回数据
    var data = [
        {name: '朝阳', value: 23},
        {name: '丹东', value: 22},
        {name: '抚顺', value: 23},
        {name: '本溪', value: 54},
        {name: '铁岭', value: 12},
        {name: '大连', value: 12},
        {name: '营口', value: 54},
        {name: '鞍山', value: 34},
        {name: '辽阳', value: 64},
        {name: '沈阳', value: 23},
        {name: '盘锦', value: 40},
        {name: '锦州', value: 55},
        {name: '阜新', value: 43},
        {name: '葫芦岛', value: 23}
    ];
    var max = 480, min = 9; 
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
        backgroundColor: '#091C3D',
        title: {
            top:20,
            text: '辽宁',
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
            text: ['高', '低'], 
            calculable: true,
            seriesIndex: [1],
            inRange: {}
        },
        geo: {
            show: true,
            map: 'shandong',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
      {
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
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
                    color: '#F4E925'
                }
            }
        },
         {
            type: 'map',
            map: 'shandong',
            geoIndex: 0,
            aspectScale: 0.75, 
            showLegendSymbol: false, 
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
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#F4E925',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 1
        },
         
    ],
    };
    myChart.setOption(option);
});