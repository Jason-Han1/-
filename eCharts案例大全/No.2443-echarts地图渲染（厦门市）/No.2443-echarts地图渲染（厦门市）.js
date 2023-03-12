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
        // visualMap: {
        //     show: false,
        //     max: 100,
        //     seriesIndex: [3],
        //     inRange: {
        //         color: ['#A5DCF4', '#006edd'],
        //     },
        // },
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
                // itemStyle: {
                //     borderColor: '#2b9bf9', //省市边界线,
                //     borderWidth: 2,
                //     normal: {
                //         show: false,
                //         color: '#e9e6b3', //地图背景色
                //         borderColor: '#2b9bf9', //省市边界线
                //         borderWidth: 1,
                //     },
                //     emphasis: {
                //         show: false,
                //         color: '#0f2666', //悬浮背景
                //     },
                // },
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
                        label:{
                          color:'red'  
                        },
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
