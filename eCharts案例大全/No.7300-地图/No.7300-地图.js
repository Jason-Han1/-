var uploadedDataURL = "/asset/get/s/data-1637826904039-zHU2nal-3.json";



myChart.showLoading('default', {
    text: '统计中，请稍候...',
    maskColor: '#2957A2',
    textColor: '#fff',
});

var mapDate = [
  {
   count:2,
   sourceLat:'39.66064453125',
   sourceLng: '115.51025390625',
   targetName: '国家体育馆',
   targetId: '001'
  },
   {
   count:2,
   sourceLat:'39.57275390625',
   sourceLng: '115.99365234375',
   targetName: '国家体育馆',
   targetId: '001'
  }
 ]

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = [dataItem.sourceLng,dataItem.sourceLat];
        var toCoord = [116.33224936, 39.944965353];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem.count
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var series = [];

    series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 15, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .1 //尾迹线条曲直度
                }
            },
            data: convertData(mapDate)
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 8 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function(params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 16
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 5 + val[2] * 2; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: mapDate.map(function(dataItem) {
                return {
                    name: '',
                    value: [dataItem.sourceLng,dataItem.sourceLat,dataItem.count]
                };
            }),
        },
        //被攻击点
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function(params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 16
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 2 + val[2] * 2; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#0f0'
                }
            },
            data: [{
                name: '国家体育馆',
                value: ['116.33224936','39.944965353',10],
            }],
        }
    );

var mapInit = () => { 
    $.getJSON(uploadedDataURL, function (geoJson) {
        echarts.registerMap('bj', geoJson);
        myChart.hideLoading();
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
                max: 6,
                calculable: true,
                show: true,
                color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'bj',
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
};
mapInit();
