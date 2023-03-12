var uploadedDataURL = "/asset/get/s/data-1633939162808-GypYIdFqt.geoJson";
 
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('hebei', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '石家庄市':[114.444982,38.133034],
        '唐山市':[118.343325,39.71703],
        '秦皇岛市':[119.193332,40.088346],
        '邯郸市':[114.548854,36.553496],
        '邢台市':[114.822676,37.213788],
        '保定市':[115.177642,39.025137],
        '张家口市':[115.038685,40.874645],
        '承德市':[117.551533,41.356206],
        '沧州市':[116.771341,38.270959],
        '廊坊市':[116.540212,39.111215],
        '衡水市':[115.828761,37.7648],
    }
    var data = [
        {name: '石家庄市', value: 199},
        {name: '唐山市', value: 39},
        {name: '秦皇岛市', value: 152},
        {name: '邯郸市', value: 299},
        {name: '邢台市', value: 89},
        {name: '保定市', value: 52},
        {name: '张家口市', value: 9},
        {name: '承德市', value: 352},
        {name: '沧州市', value: 99},
        {name: '廊坊市', value: 39},
        {name: '衡水市', value: 480},
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
         backgroundColor: '#1D346F',
        title: {
            text: '',
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
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
       
        geo: {
            show: true,
            map: 'hebei',
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
                    areaColor: '#1D346F',
                    borderWidth: 0,
                    shadowColor: '#23074d',
                    shadowBlur: 30,
                    shadowOffsetX: -2,
                    shadowOffsetY: 5,
                },
                emphasis: {
                    areaColor: '#2a333d',
                },
            },
        },
        series : [
       
         {
            type: 'map',
            map: 'hebei',
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
                    areaColor: '#1D346F',
                    borderColor: '#D79D3D',
                },
                emphasis: {
                    areaColor: '#0f2c70',
                },
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: function (val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a*min;
                b = maxSize4Pin - a*max;
                return a*val[2]+b;
            },
              label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        },
                        formatter(value) {
                            return value.data.value[2]
                        }
                    }
                },
            itemStyle: {
                normal: {
                    areaColor: '#1D346F',
                    borderColor: '#D79D3D',
                },
                emphasis: {
                    areaColor: '#0f2c70',
                },
            },
           data: convertData(data),
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                zlevel: 6
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 11)),
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
                    areaColor: '#1D346F',
                    borderColor: '#D79D3D',
                },
                emphasis: {
                    areaColor: '#0f2c70',
                },
            },
            zlevel: 1
        },
         
    ]
    };
    myChart.setOption(option);
});