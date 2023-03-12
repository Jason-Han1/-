//var tianjin = "/asset/get/s/data-1525844720391-Skugj-g0f.json";
//var uploadedDataURL = "/asset/get/s/data-1520413844487-rknqhXp_f.json";
var uploadedDataURL = "/asset/get/s/data-1482909900836-H1BC_1WHg.json";

$.get(uploadedDataURL, function(shJson) {
    echarts.registerMap('shanghai', shJson);
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'shanghai'
        }]
    });

    var geoCoordMap = {
        '黄浦区': [121.490317, 31.222771],
        '徐汇区': [121.43752, 31.179973],
        '长宁区': [121.4222, 31.218123],
        '静安区': [121.448224, 31.229003],
        '普陀区': [121.392499, 31.241701],
        '闸北区': [121.465689, 31.25318],
        '虹口区': [121.491832, 31.26097],
        '杨浦区': [121.522797, 31.270755],
        '闵行区': [121.375972, 31.111658],
        '宝山区': [121.489934, 31.398896],
        '嘉定区': [121.250333, 31.383524],
        '浦东新区': [121.7795171, 31.13357039],
        '金山区': [121.330736, 30.724697],
        '松江区': [121.223543, 31.03047],
        '青浦区': [121.113021, 31.151209],
        '奉贤区': [121.458472, 30.912345],
        '崇明县': [121.397516, 31.626946],
    };

    var minSendNum = 0,
        maxSendNum = 1000
    var data = [{
        name: '黄浦区',
        value: 219
    }, {
        name: '徐汇区',
        value: 339
    }, {
        name: '长宁区',
        value: 412
    }, {
        name: '静安区',
        value: 429
    }, {
        name: '普陀区',
        value: 389
    }, {
        name: '闸北区',
        value: 352
    }, {
        name: '虹口区',
        value: 329
    }, {
        name: '杨浦区',
        value: 532
    }, {
        name: '闵行区',
        value: 299
    }, {
        name: '宝山区',
        value: 139
    }, {
        name: '嘉定区',
        value: 440
    }, {
        name: '浦东新区',
        value: 89
    }, {
        name: '金山区',
        value: 652
    }, {
        name: '松江区',
        value: 415
    }, {
        name: '青浦区',
        value: 329
    }, {
        name: '奉贤区',
        value: 752
    }, {
        name: '崇明县',
        value: 399
    }, ]

    function convertSend(area, id) {
        var arr = []
        data.map(item => {
            if (item['name'] !== area) {
                arr.push([{
                    name: area
                }, {
                    id: id,
                    name: item['name'],
                    value: item['value']
                }])
            }
        })
        return arr
    }

    var goData = convertSend('浦东新区', 1)
    var goData2 = [
        [{
            name: '浦东新区'
        }, {
            id: 1,
            name: '徐汇区',
            value: 75
        }],
        [{
            name: '浦东新区'
        }, {
            id: 1,
            name: '嘉定区',
            value: 35
        }],

        //  [{name:'蓟县'}, {name:'宁河',value:95}],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var arcAngle = function(data) {
        var j, k;
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            if (dataItem[1].id == 1) {
                j = 0.2;
                return j;
            } else if (dataItem[1].id == 2) {
                k = -0.2;
                return k;
            }
        }
    }

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (dataItem[1].id == 1) {
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                    }, {
                        coord: toCoord,
                        value: dataItem[1].value //线条颜色

                    }]);
                }
            } else if (dataItem[1].id == 2) {
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                    }, {
                        coord: toCoord
                    }]);
                }
            }
        }
        return res;
    };

    var series = [];
    [
        ['1', goData]
    ].forEach(function(item, i) {
        series.push({
            name: item[0],
            type: 'lines',
            zlevel: 2,
            //线特效配置
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                symbol: planePath, //标记类型
                symbolSize: 10
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.4,
                    curveness: arcAngle(item[1]), //弧线角度
                    color: '#fff'
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            //波纹效果
            rippleEffect: {
                period: 2,
                brushType: 'stroke',
                scale: 3
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom',
                    formatter: '{b}'
                }
            },
            //终点形象
            symbol: 'circle',
            //圆点大小
            symbolSize: function(val) {
                // return val[2] / 8;
                return val[2] / 30;
            },
            itemStyle: {
                normal: {
                    show: true
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })

        });

    });
    
    
    
    /**************************************************/
    series.push({
                type: 'map',
                map: 'shanghai',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                roam: true,
                animation: false,
                data: data
            })
/**************************************************/
            
            

    option = {
        backgroundColor: '#173b84',
        textStyle: {
            color: '#fff'
        },
        title: {
            text: '上海送货',
            subtext: '数据可更换，去掉头尾注释可直接应用到本地',
            left: 'center'
        },/*
        tooltip: {
            trigger: 'item',
            formatter: "{b}"
        },*/
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(12, 204, 104, 0.92)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value;
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        //线颜色及飞行轨道颜色
        visualMap: [{
            show: false,
            min: minSendNum,
            max: maxSendNum,
            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
        }, {
            show: false,
            min: minSendNum,
            max: maxSendNum,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [2],
            dimension: 0,
            inRange: {
                color: ['#9074c3', '#4487d5', '#7e9e8e', '#51a2c2'] // 随机区域颜色

            },
            textStyle: {
                color: '#fff'
            }
        }],
        //地图相关设置
        geo: {
            map: 'shanghai',
            //视角缩放比例
            zoom: 1,
            //鼠标缩放和平移
            roam: true,
            //显示文本样式
            label: {
                show: false
            },
            itemStyle: {
                areaColor: '#4487d5',
                borderColor: '#3B5077',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    show: false
                },
                itemStyle: {
                    areaColor: '#2B91B7',
                    borderWidth: 0
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
})
// })