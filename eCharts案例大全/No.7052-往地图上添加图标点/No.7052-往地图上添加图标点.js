

var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var imageURL="/asset/get/s/data-1556957097230-ADWAaIDQo.png"
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    console.log(geoJson)
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413]
    
};
var geoCoordMap2={
    '食堂1': [126.4688, 45.368],
    '食堂2': [109.3467, 41.4899],
    "食堂3": [124.8154, 44.2584],
    '食堂4': [115.4551, 40.2539],
    "食堂5": [122.1238, 42.1216],
    "食堂6": [113.8995, 38.5006],
    "食堂7": [116.4219, 38.4189],
    "食堂8": [111.3352, 36.9413]
}
    var data1 = [
        {name:"黑龙江",value:199},
    {name:"内蒙古",value:42},
    {name:"吉林",value:102},
    {name:"北京市",value:81},
    {name:"辽宁",value:47},
    {name:"河北",value:67},
    {name:"天津",value:82},
    {name:"山西",value:123}
    ];
    var data2=[
     {name:"食堂1",value:199,adr:"黑龙江街道"},
    {name:"食堂2",value:42,adr:"内蒙古街道"},
    {name:"食堂3",value:102,adr:"吉林街道"},
    {name:"食堂4",value:81,adr:"北京市街道"},
    {name:"食堂5",value:47,adr:"辽宁街道"},
    {name:"食堂6",value:67,adr:"河北街道"},
    {name:"食堂7",value:82,adr:"天津街道"},
    {name:"食堂8",value:123,adr:"山西街道"}
        ]

  var convertData = function (data,geoCoordMap) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord
            });
        }
    }
    return res;
};



    option = {
        backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#0f378f' // 0% 处的颜色
        }, {
            offset: 1, color: '#00091a' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
        title: {
            top:20,
            text: '地图散点图标使用',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },    

       tooltip: {
            trigger: 'item',
            triggerOn:'none',
            enterable: true,
            transitionDuration: 0.3,
            formatter: function (params) {
                var html='<div style="width:250px;height:200px;"><div style="float:right;width:100px;height:30px;background-color:blue;text-align:center;line-height:30px;">查看详情>></div></div>'
              return html
            }
        },
     /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
            legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
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
            seriesIndex: [1],
            inRange: {

            }
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false,
				}
			},
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9',//线
                },
				 emphasis: {
                    areaColor: '#0a2dae',//悬浮区背景
                }
            }
        },
        series : [
      {
         
            symbolSize: 5,
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
                    color: '#fff'
                }
            },
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data1,geoCoordMap),
            
        },
        {
            name: '数据',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'image://'+imageURL,
            symbolSize: [30,30],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    },
                    formatter (value){
                        return value.data.value[2]
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#D8BC37', //标志颜色
                }
            },
            data: convertData(data2,geoCoordMap2),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
        },
         
    ]
    };
    myChart.setOption(option);
    console.log(option)
    myChart.on('mouseover', function(params) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: params.dataIndex,
    });
});
    myChart.on('mouseout', function(params) {
    myChart.dispatchAction({
        type: 'hideTip',
        seriesIndex: 1,
        dataIndex: params.dataIndex,
    });
});
});