var uploadedDataURL = "/asset/get/s/data-1482909832739-rJ-cdy-Hx.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('jilin', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
       "吉林市":[126.565,43.9074],
        "白城市":[122.84 ,45.6119],
        "松原市":[124.821,45.1722],
        "四平市":[124.374,43.1667],
        "白山市":[126.42 ,41.9261],
        "长春市":[125.308,43.8841],
        "通化市":[125.92 ,41.7233],
        "辽源市":[125.136,42.9102],
        "延边朝鲜自治州":[129.509,42.91],

    }
    var data = [
     {name: '辽源市', value: 9},
     {name: '松原市', value: 89},
     {name: '四平市', value: 12}
 

];

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
            formatter: function(params) {
                return params.name + ' : ' + params.value[2];
            }
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
       geo: {
        map: 'jilin',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077'
            },
            emphasis: {
                areaColor: '#2B91B7'
            }
        }
    },
      series : [
        {
            name: 'pm2.5',
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
                    show: false
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
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
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
        }
    ]
    };
    myChart.setOption(option);
});