var uploadedDataURL = "/asset/get/s/data-1520166901794-HJRxuDtOG.json";
var bg = '<div class="bg-tooltip"></div>'

$.get(uploadedDataURL, function(as) {
    echarts.registerMap('gd', as); 
    option = {
        geo3D: {
            map: 'gd',
            viewControl: {
                center: [-10, 0, 10],
                autoRotate:true
            },
            light: {
                main: {
                    intensity: 1,
                    shadow: true,
                    alpha: 120,
                    beta: 80
                },
            },
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                offset: 0,
                color: 'black' // 天空颜色           
            }, {
                offset: 0.7,
                color: 'black' // 地面颜色
            }, {
                offset: 1,
                color: 'black' // 地面颜色
            }], false),
            itemStyle: {
                borderColor: 'rgb(62,215,213)',
                areaColor: '#4490fc',
                borderWidth: 1
            },
        },

        series: [
            {
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                bevelSize: 0,
                tooltip: { //提示框的内容
                    formatter: function(data) {
                        return  'name:'+data.name+'<br />'+'value:'+data.value[2];
                    }
                },
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'top',
                    textStyle: {
                        color: '#000',
                        backgroundColor: '#fff',
                    }
                },
                shading: 'lambert',
                data: [{
                        "name": "阳江市",
                        "value": [
                            111.989062,
                            21.858167,
                            100
                        ],
                        itemStyle: {
                            color: '#17e3ff',
                            opacity: 1
                        },
                    },
                    {
                        "name": "惠州市",
                        "value": [
                            114.42356,
                            23.113434,
                            100,
                        ],
                        itemStyle: {
                            color: '#fffe00',
                            opacity: 1
                        },
                    },
                    {
                        "name": "清远市",
                        "value": [
                            113.057866,
                            23.690082,
                            100,
                        ],
                        itemStyle: {
                            color: '#18d0ff',
                            opacity: 1
                        },
                    },
                    {
                        "name": "梅州市",
                        "value": [
                            116.126091,
                            24.291806,
                            100,
                        ],
                        itemStyle: {
                            color: '#e94971',
                            opacity: 1
                        },
                    },
                    {
                        "name": "湛江市",
                        "value": [
                            110.358655,
                            21.280766,
                            100,
                        ],
                        itemStyle: {
                            color: '#634fd4',
                            opacity: 1
                        },
                    },
                ],
            }
        ]
    };
    myChart.setOption(option);

});