var uploadedDataURL = "/asset/get/s/data-1526873220753-BJTF331Jm.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('xiangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '古丈': [109.91, 28.62],
        '泸溪': [109.99, 28.10],
        '凤凰': [109.43, 27.92],
        '花垣': [109.46, 28.59],
        '保靖': [109.64, 28.7],
        '吉首': [109.71, 28.3],
        '永顺': [109.84, 29],
        '龙山': [109.42, 29.34]
    }
    var data = [
        {name: '古丈', value: 199},
        {name: '泸溪', value: 39},
        {name: '凤凰', value: 152},
        {name: '花垣', value: 299},
        {name: '保靖', value: 89},
        {name: '吉首', value: 52},
        {name: '永顺', value: 9},
        {name: '龙山', value: 352}
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
        backgroundColor:'#fff',
        geo: {
            show: true,
            map: 'xiangxi',
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
                    //区域背景颜色
                    areaColor: '#031525',
                    //区域边框颜色
                    borderColor: '#3B5077',
                },
                emphasis: {
                    //鼠标放置区域背景颜色
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
      {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9'
                }
            }
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
                        color: '#fff',//气泡内数值颜色
                        fontSize: 9,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#F62157', //气泡颜色
                }
            },
            zlevel: 6,
            data: convertData(data),
        }
         
    ]
    };
    myChart.setOption(option);
});