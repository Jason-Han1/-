//引入市区json文件
var uploadedDataURL = "/asset/get/s/data-1597452450339-dQm5JP9rx.json";


myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    //地理位置信息
    var geoCoordMap = {
        '遂平县': [114.015819, 33.150944],
        '上蔡县': [114.276256, 33.267906],
        '西平县': [114.022143, 33.394355],
        "驿城区": [114.006045, 32.978599],
        '确山县': [114.033641, 32.810768],
        "泌阳县": [113.335694, 32.731107],
        "汝南县": [114.375141, 33.016389],
        "正阳县": [114.398138, 32.615372],
        "平舆县": [114.629254, 32.969876],
        "新蔡县": [114.979952, 32.752487]

    };
    //数据信息
    var data = [{
            name: "遂平县",
            value: 199
        },
        {
            name: "上蔡县",
            value: 170
        },
        {
            name: "西平县",
            value: 102
        },
        {
            name: "驿城区",
            value: 81
        },
        {
            name: "确山县",
            value: 147
        },
        {
            name: "泌阳县",
            value: 130
        },
        {
            name: "汝南县",
            value: 172
        },
        {
            name: "正阳县",
            value: 123
        },
        {
            name: "平舆县",
            value: 120
        },
        {
            name: "新蔡县",
            value: 292
        }
    ];
    var max = 480,
        min = 9; // todo 
    var maxSize4Pin = 100,
        minSize4Pin = 20;

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
        backgroundColor: '#404a59',
        title: {
            text: 'XX数量-驻马店市',

            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',

            //自定义修改显示
            formatter: function(value) {
                                                          //这只能填2，不太明白，希望大神指教
                return res = '<div><p>数量：' + value.data.value[2] + '</p></div>'

            },
        },

        geo: {
            map: 'china',
            center: [114.006045, 32.978599],
            zoom: 12,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: 'pm2.5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
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
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }]
    };
    myChart.setOption(option);
});