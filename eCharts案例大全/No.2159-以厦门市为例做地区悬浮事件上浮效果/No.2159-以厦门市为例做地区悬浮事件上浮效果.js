var uploadedDataURL = "/asset/get/s/data-1628045698067-F_q-w3jYq.json";

$.get(uploadedDataURL, (res) => {
    var mapData = JSON.parse(res);
    echarts.registerMap('xiamen', mapData);
    var centerMap = {};
    if (mapData && mapData.features && mapData.features.length > 0) {
        for (var i = 0; i < mapData.features.length; i++) {
            var feature = mapData.features[i];
            var properties = feature.properties || {};
            if (properties && properties.name) {
                centerMap[properties.name] = properties.cp || [];
            }
        }
    }
    console.log('centerMap:', centerMap);

    var option = {
        backgroundColor: '#fff',
        title: {
            text: '厦门市',
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                console.log(params);
                return params.name + params.data;
            },
        },
        geo: [
            {
                map: 'xiamen',
                layoutCenter: ['50%', '50%'], //地图位置
                layoutSize: '630',
                itemStyle: {
                    borderColor: '#2b9bf9', //省市边界线,
                    borderWidth: 2,
                    normal: {
                        show: false,
                        color: '#e9e6b3', //地图背景色
                        borderColor: '#2b9bf9', //省市边界线
                        borderWidth: 1,
                    },
                  emphasis: {
                    show: true,
                    color: "#d6eaff", //悬浮背景
                    // focus: "self",  // emphasis only itself [default:none]
                    // itemStyle: {
                    // The next code is the key to control the shadow of map.
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    //   shadowColor: "rgba(0, 0, 0, 0.5)",
                    shadowBlur: 5,
                    // },
                  },
                },
                label: {
                    show: true,
                },
                regions: [
                    {
                        name: '湖里区', //区块名称
                        itemStyle: {
                            normal: {
                                areaColor: '#ebccb9',
                            },
                        },
                    },
                    {
                        name: '思明区', //区块名称
                        itemStyle: {
                            normal: {
                                areaColor: '#e4a2a3',
                            },
                        },
                    },
                    {
                        name: '翔安区', //区块名称
                        itemStyle: {
                            normal: {
                                areaColor: '#d8c0d6',
                            },
                        },
                    },
                    {
                        name: '海沧区', //区块名称
                        itemStyle: {
                            normal: {
                                areaColor: '#acd4a0',
                            },
                        },
                    },
                    {
                        name: '集美区', //区块名称
                        itemStyle: {
                            normal: {
                                areaColor: '#b4d3d6',
                            },
                        },
                    },
                    {
                        name: '同安区', //区块名称
                        itemStyle: {
                            normal: {
                                areaColor: '#e9e6b3',
                            },
                        },
                    },
                ],
            },
        ],
        series: [
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [
                    {
                        name: '湖里区',
                        value: 10,
                    },
                    {
                        name: '思明区',
                        value: 1123,
                    },
                    {
                        name: '集美区',
                        value: 3421,
                    },
                    {
                        value: [112.68353, 22.38265],
                    },
                ],
                symbolSize: '10',
                itemStyle: {
                    normal: {
                        color: 'rgba(209,248,0,1)',
                    },
                },
            },
        ],
    };

    myChart.setOption(option);
});
