var uploadedDataURL = "/asset/get/s/data-1560850821493-6FG9jqvQH.geoJson";
var barData = [{
        name: '奉节县',
        value: randomData()
    },
    {
        name: '巫溪县',
        value: randomData()
    },
    {
        name: '开州区',
        value: randomData()
    },
    {
        name: '酉阳土家族苗族自治县',
        value: randomData()
    },
    {
        name: '彭水苗族土家族自治县',
        value: randomData()
    },
    {
        name: '云阳县',
        value: randomData()
    },
    {
        name: '万州区',
        value: randomData()
    },
    {
        name: '城口县',
        value: randomData()
    },
    {
        name: '江津区',
        value: randomData()
    },
    {
        name: '石柱土家族自治县',
        value: randomData()
    },
    {
        name: '巫山县',
        value: randomData()
    },
    {
        name: '涪陵区',
        value: randomData()
    },
    {
        name: '丰都县',
        value: randomData()
    },
    {
        name: '武隆区',
        value: randomData()
    },
    {
        name: '南川区',
        value: randomData()
    },
    {
        name: '秀山土家族苗族自治县',
        value: randomData()
    },
    {
        name: '黔江区',
        value: randomData()
    },
    {
        name: '合川区',
        value: randomData()
    },
    {
        name: '綦江区',
        value: randomData()
    },
    {
        name: '忠县',
        value: randomData()
    },
    {
        name: '梁平县',
        value: randomData()
    },
    {
        name: '巴南区',
        value: randomData()
    },
    {
        name: '潼南区',
        value: randomData()
    },
    {
        name: '永川区',
        value: randomData()
    },
    {
        name: '垫江县',
        value: randomData()
    },
    {
        name: '渝北区',
        value: randomData()
    },
    {
        name: '长寿区',
        value: randomData()
    },
    {
        name: '大足区',
        value: randomData()
    },
    {
        name: '铜梁区',
        value: randomData()
    },
    {
        name: '荣昌区',
        value: randomData()
    },
    {
        name: '璧山区',
        value: randomData()
    },
    {
        name: '北碚区',
        value: randomData()
    },
    {
        name: '万盛区',
        value: randomData()
    },
    {
        name: '九龙坡区',
        value: randomData()
    },
    {
        name: '沙坪坝区',
        value: randomData()
    },
    {
        name: '南岸区',
        value: randomData()
    },
    {
        name: '江北区',
        value: randomData()
    },
    {
        name: '大渡口区',
        value: randomData()
    },
    {
        name: '渝中区',
        value: randomData()
    },
];
myChart.showLoading();

function randomData() {
    return Math.round(Math.random() * 1000);
}

barData.sort(function(o1, o2) {
    if (isNaN(o1.value) || o1.value == null) return -1;
    if (isNaN(o2.value) || o2.value == null) return 1;
    return o1.value - o2.value;
});
var categoryData = [];
for (var i = 0; i < barData.length; i++) {
    categoryData.push(barData[i].name);
}

$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('chongqing', geoJson);

    myChart.setOption(option = {
        backgroundColor: '#001B9A',
        title: {
            text: '重庆市地图',
            textStyle: {
                color: '#fff',
                fontSize: 30
            },
            subtext: '数据来自Echarts',
            left: 'center'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            },

        },
        visualMap: {
            min: 0,
            max: 3000,
            text: ['High', 'Low'],
            textStyle: {
                color: '#fff'
            },
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['#e0ffff', '#006edd']
            },

        },
        grid: {
            right: '5%',
            top: '15%',
            bottom: '10%',
            width: '20%'
        },
        xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            min: 0,
            boundaryGap: false,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: 2,
                textStyle: {
                    color: '#aaa'
                }
            },
        },
        yAxis: {
            type: 'category',
             name: '单位：个',
            nameGap: 16,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#ddd'
                }
            },
            data: categoryData
        },
        series: [
            {
                name: '重庆市地图',
                type: 'map',
                center: [110.4, 29.77],
                mapType: 'chongqing', // 自定义扩展图表类型
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        borderColor: 'white',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            textStyle: {
                                color: 'darkslategray',
                            }
                        }
                    }
                },
                data: barData,

            },
            //右边柱状图
            {
              type: 'bar',
              roam: false,
              visualMap: false,
              zlevel: 2,
              barMaxWidth: 16,
              barGap: 0,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var colorArray = [
                      {
                        top: '#ffa800', //黄
                        bottom: 'rgba(11,42,84,.3)'
                      }, {
                        top: '#1ace4a', //绿
                        bottom: 'rgba(11,42,84, 0.3)'
                      },
                      {
                        top: '#4bf3ff', //蓝
                        bottom: 'rgba(11,42,84,.3)'
                      }, {
                        top: '#4f9aff', //深蓝
                        bottom: 'rgba(11,42,84,.3)'
                      },
                      {
                        top: '#b250ff', //粉
                        bottom: 'rgba(11,42,84,.3)'
                      }
                    ];
                    let num = colorArray.length;
                    return {
                      type: 'linear',
                      colorStops: [{ offset: 0, color: colorArray[params.dataIndex % num].bottom },
                        { offset: 1, color: colorArray[params.dataIndex % num].top }],
                    }
                  },
                  barBorderRadius: [0,15,15,0]
                }
              },
              label:{
                normal: {
                  show: true,
                  position: 'right',
                  textStyle: {
                    color: 'white',
                  },
                },
              },
              data: barData,
            },

        ]
    });
});