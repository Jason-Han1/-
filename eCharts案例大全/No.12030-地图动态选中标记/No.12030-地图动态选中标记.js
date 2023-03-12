var uploadedDataURL = "/asset/get/s/data-1551408729759-EYay3THxl.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('huaibei', geoJson);
    myChart.hideLoading();
    var areaScatterData = function(name) {
        var areaData = [{
                name: "杜集区",
                value: [116.881568, 34.051293]
            },
            {
                name: "相山区",
                value: [116.74977, 34.00924]
            },
            {
                name: "濉溪县",
                value: [116.674713, 33.752328]
            },
            {
                name: "烈山区",
                value: [116.878912, 33.891355]
            }
        ];
        var res = [];
        for (var i = 0; i < areaData.length; i++) {
            if (areaData[i].name == name) {
                res.push(areaData[i]);
            }
        }
        return res;
    };
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name;
            }
        },
        geo: {
            show: true,
            roam: 'scale',
            map: 'huaibei',
            nameMap: '淮北',
            selectedMode: 'single',
            label: {
                distance: 10,
                show: true,
                normal: {
                    show: true,
                    color: '#fff',
                },
                emphasis: {
                    color: '#fff',
                    show: true
                }

            },
            itemStyle: {

                normal: {
                    areaColor: '#01a6ef',
                    borderColor: '#1e4583',
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#CCCC99'
                            },
                            {
                                offset: 1,
                                color: '#00ffff'
                            }
                        ]
                    ),
                    borderColor: '#f0f9fb',
                    shadowColor: 'rgba(7, 89, 153, 0.78)',
                    shadowBlur: 8
                }
            },
            regions: [{
                    name: '杜集区',
                    itemStyle: {
                        areaColor: '#0095df'
                    }
                },
                {
                    name: '相山区',
                    itemStyle: {
                        areaColor: '#0076d2'
                    }
                },
                {
                    name: '濉溪县',
                    itemStyle: {
                        areaColor: '#01a6ef'
                    }
                },
                {
                    name: '烈山区',
                    itemStyle: {
                        areaColor: '#099ee0'
                    }
                }
            ],

        },
        series: [{
            type: 'map',
            map: 'huaibei',
            geoIndex: 0,
            roam: 'scale',
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            clickable: true,
            hoverable: false,
            markPoint: {
                symbol: 'circle'
            },
            label: {
                normal: {
                    show: false,
                    color: '#fff'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            animation: false,
        }]
    };
    myChart.setOption(option);
    myChart.on('geoselectchanged', function(params) {
        var _batch = params.batch[0];
        var _arr = params.batch[0].selected;
        // 选中区域
        if (_arr[_batch.name]) {
            console.log('选中' + _batch.name);
            myChart.setOption({
                series: [{
                    name: 'areaScatter',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: areaScatterData(_batch.name),
                    symbol: 'circle',
                    symbolSize: 19,
                }]
            })
        }
        // 取消选择
        else {
            console.log('取消选择')
            myChart.setOption({
                series: [{
                    name: 'areaScatter',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [],
                    symbol: 'circle',
                    symbolSize: 23,
                }]
            })
        }
    });

})