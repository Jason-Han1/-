var uploadedDataURL = "/asset/get/s/data-1634526956327-oeoy5N0nW.geoJson";

 
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('shanghai', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '黄浦区':[121.483572,31.215946],
        '徐汇区':[121.439405,31.162992],
        '长宁区':[121.380949,31.20737],
        '静安区':[121.450659,31.270821],
        '普陀区':[121.392042,31.257895],
        '虹口区':[121.485443,31.276649],
        '杨浦区':[121.529302,31.29835],
        '闵行区':[121.418901,31.087213],
        '宝山区':[121.404861,31.392111],
        '嘉定区':[121.24439,31.358138],
        '浦东新区':[121.742177,31.083823],
        '金山区':[121.255144,30.818932],
        '松江区':[121.220231,31.015194],
        '青浦区':[121.085188,31.124681],
        '奉贤区':[121.56251,30.897998],
        '崇明区':[121.568484,31.635916]
    }
    var data = [
        {name:'黄浦区', value: 11}, 
        {name:'徐汇区', value: 4}, 
        {name:'长宁区', value: 22}, 
        {name:'静安区', value: 14}, 
        {name:'普陀区', value:19}, 
        {name:'虹口区', value: 7}, 
        {name:'杨浦区', value: 14}, 
        {name:'闵行区', value: 22}, 
        {name:'宝山区', value: 17},  
        {name:'嘉定区', value: 36}, 
        {name:'浦东新区', value: 45}, 
        {name:'金山区', value: 43}, 
        {name:'松江区', value: 23}, 
        {name:'青浦区', value: 17}, 
        {name:'奉贤区', value: 32}, 
        {name:'崇明区', value: 53} 
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
            map: 'shanghai',
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
            map: 'shanghai',
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