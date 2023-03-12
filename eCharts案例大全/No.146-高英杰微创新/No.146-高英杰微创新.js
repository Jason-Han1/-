var uploadedDataURL = "/asset/get/s/data-1482909768458-HJlU_yWBe.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('anhui', geoJson);
    var chinaGeoCoordMap = {
        "合肥市": [117.29, 32.0581],
        "亳州市": [116.1914, 33.4698],
        "六安市": [116.3123, 31.8329],
        "安庆市": [116.7517, 30.5255],
        "宣城市": [118.8062, 30.6244],
        "宿州市": [117.5208, 33.6841],
        "池州市": [117.3889, 30.2014],
        "淮北市": [116.6968, 33.6896],
        "淮南市": [116.7847, 32.7722],
        "滁州市": [118.1909, 32.536],
        "芜湖市": [118.3557, 31.0858],
        "蚌埠市": [117.4109, 33.1073],
        "铜陵市": [117.9382, 30.9375],
        "阜阳市": [115.7629, 32.9919],
        "马鞍山市": [118.6304, 31.5363],
        "黄山市": [118.0481, 29.9542]
    };
    var chinaDatas = [
        [{
            name: '合肥市',
            value: 0
        }],
        [{
            name: '亳州市',
            value: 0
        }],
        [{
            name: '六安市',
            value: 0
        }],
        [{
            name: '安庆市',
            value: 0
        }],
        [{
            name: '宣城市',
            value: 0
        }],
        [{
            name: '宿州市',
            value: 0
        }],
        [{
            name: '池州市',
            value: 0
        }],
        [{
            name: '淮北市',
            value: 0
        }],
        [{
            name: '淮南市',
            value: 0
        }],
        [{
            name: '滁州市',
            value: 0
        }],
        [{
            name: '芜湖市',
            value: 0
        }],
        [{
            name: '蚌埠市',
            value: 0
        }],
        [{
            name: '铜陵市',
            value: 0
        }],
        [{
            name: '阜阳市',
            value: 0
        }],
        [{
            name: '马鞍山市',
            value: 0
        }],
        [{
            name: '黄山市',
            value: 0
        }]
    ];

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [117.29, 32.0581];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };
    
    var series = [];
    [['合肥市', chinaDatas]].forEach(function(item, i) {
        console.log(item)
        series.push({
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 5, //图标大小
                },
                lineStyle: {
                    normal: {
                        width: 1, //尾迹线条宽度
                        opacity: 1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: convertData(item[1])
            }, {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right', //显示位置
                        offset: [5, 0], //偏移设置
                        formatter: function(params) { //圆环显示文字
                            return params.data.name;
                        },
                        fontSize: 13
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize: function(val) {
                    return 5 + val[2] * 5; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
            //被攻击点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#f60"
                    }
                },
                symbol: 'pin',
                symbolSize: 50,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                }],
            }
        );
    });

    option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
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
                var value = params.value[params.seriesIndex + 1];
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        backgroundColor: "#013954",
        visualMap: { //图例值控制
            min: 0,
            max: 1,
            calculable: true,
            show: true,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'anhui',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: series
    };

    myChart.setOption(option);
});