/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = "/asset/get/s/data-1525848254835-HyDpOfl0f.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('hubei', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '武汉':[114.31,30.52],
        '鄂州':[114.899,30.39],
        '恩施':[109.49,30.28],
        '黄冈':[114.90,30.44],
        '黄石':[115.04,30.19],
        '荆门':[112.216,31.044],
        '孝感':[113.55,30.55],
        '荆州':[112.14,30.206],
        '十堰':[110.47,32.37],
        '襄阳':[112.12,32.04],
        '随州':[113.38,31.69],
        '咸宁':[114.19,29.50],
        '宜昌':[111.28,30.69]

    }
    var data = [
        {name: '武汉', value: 107},
        {name: '鄂州', value: 105},
        {name: '恩施', value: 102},
        {name: '黄冈', value: 72},
        {name: '黄石', value: 89},
        {name: '荆门', value: 117},
        {name: '孝感', value: 110},
        {name: '荆州', value: 139},
        {name: '十堰', value: 107},
        {name: '襄阳', value: 147},
        {name: '随州', value: 97},
        {name: '咸宁', value: 78},
        {name: '宜昌', value: 105},
    ];
    var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];//坐标
        console.log(geoCoord+1111111111111);
        var yyy = data[i].name;
        console.log(yyy+6666666666666);
        var ys = data[i].value;
        console.log(ys+111);   //空气数值
        var yy = data[i];
        console.log(yy);
        
        if (geoCoord) {
            res.push({
                name: data[i].name,        //显示地名
                value: geoCoord.concat(data[i].value)//关键的一句
            });
        }
       
    }
    
     
        // console.log(res);//荆州139
        // console.log(res[2].value[2]);//荆州139
    return res;
};


    option = {
        title: {
            text: '“空气简报” - 湖北省',
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
            x: 'right',
            data: ['credit_pm2.5'],
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
            seriesIndex: [1],//切换位置圆点显示形态0~...
            inRange: {
                color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            }
        },
        geo: {
            show: true,
            map: 'hubei',
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
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
      {
            name: 'credit_pm2.5',
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
                    color: '#05C3F9'
                }
            }
        },
         {
            type: 'map',
            map: 'hubei',
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
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
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
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
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
                    color: '#05C3F9',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 1
        },
         
    ]
    };
    myChart.setOption(option);
});