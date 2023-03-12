var chinaGeoCoordMap = {
    "成都42%": [104.075045,30.663774],
    '绵阳市': [104.689584,31.476866],
    "重庆25%": [106.55408,29.578697],
    "西安7%": [108.94113,34.352069],
    "北京6%": [116.382836,39.926047],
    "兰州6%": [103.799085,36.114321],
    "武汉4%": [114.285544,30.65433],
    "贵阳3%": [106.669064,26.696559],
    "广州2%": [113.218501,23.2084522],
    "南京2%": [118.802027,32.095359],
    "上海1%": [121.423696,31.320051]
};
var chinaDatas = [
    [{
        name: '成都42%',
        value: 0.42
    }],
    [{
        name: '重庆25%',
        value: 0.25
    }],
    [{
        name: '西安7%',
        value: 0.07
    }],
    [{
        name: '北京6%',
        value: 0.06
    }],
    [{
        name: '兰州6%',
        value: 0.06
    }],
    [{
        name: '武汉4%',
        value: 0.04
    }],
    [{
        name: '贵阳3%',
        value: 0.03
    }],
    [{
        name: '广州2%',
        value: 0.02
    }],
    [{
        name: '南京2%',
        value: 0.002
    }],
    [{
        name: '上海1%',
        value: 0.001
    }],
       ];

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [104.689584,31.476866];
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
[
    ['绵阳市', chinaDatas]
].forEach(function(item, i) {
    console.log(item)
    series.push({
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 3, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 2, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .1 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 2, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 2 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [70, 0], //偏移设置
                    formatter: function(params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 20,
                     zlevel: 1,
                    padding: [0,0,-100,-155]
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 20 + val[2] * 50; //圆环大小
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
            zlevel: 1,
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
                        color: "#f0",
                        fontSize: 20
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
    title: {
            text: '绵阳市\n对主要城市的交通吸引',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 30
            }
        },
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
        map: 'china',
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
                borderWidth: 2
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
            }
        }
    },
    series: series
};