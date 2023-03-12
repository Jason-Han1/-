var uploadedDataURL = "/asset/get/s/data-1629787193061-4dYSW2x6I.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('my', geoJson);
    option = {
        backgroundColor: '#000f1e',
        grid: {
            left: '0', // 与容器左侧的距离
            right: '0', // 与容器右侧的距离
            top: '0', // 与容器顶部的距离
            bottom: '0', // 与容器底部的距离
        },
        geo: {
            map: 'my',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: '108%',

            itemStyle: {
                normal: {
                    shadowColor: '#276fce',
                    shadowOffsetX: 0,
                    shadowOffsetY: 15,
                    opacity: 0.3,
                },
            },
        },
        series: [
            {
                type: 'map',
                mapType: 'my',
                aspectScale: 0.85,
                layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: '108%',
                zoom: 1, //当前视角的缩放比例
                // roam: true, //是否开启平游或缩放
                scaleLimit: { //滚轮缩放的极限控制
                    min: 1,
                    max: 2
                },
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.9,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .6)' // 100% 处的颜色
                            }],
                        },
                        borderColor: '#1cccff',
                        borderWidth: 1.5,
                        shadowColor: '#092f8f', //外发光
                        shadowBlur: 20,

                    },
                    emphasis: {
                        areaColor: '#0c274b',
                        // borderColor: '#087cf9',
                        // borderWidth: 5,
                        label: {
                            color: '#fff'

                        },
                    },
                   
}
            },
                 {
                                type: 'effectScatter',
                                coordinateSystem: 'geo',
                                symbolSize: 10,
                                rippleEffect: { //坐标点动画
                                    period: 3,
                                    scale: 5,
                                    brushType: 'fill'
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'right',
                                        formatter: '{b}',
                                        color: '#f28813',
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }
                                },

                                data: [{
                                    name: "总部生产中心",
                                    value: [104.27471, 30.55663],
                                    data: "Project_mq"
                                },
                                    {
                                        name: "同城灾备中心",
                                        value: [104.10194, 30.65984],
                                        data: "Project_gl"
                                    },
                                    {
                                        name: "异地灾备中心",
                                        value: [101.70413, 26.54639],
                                        data: "Project_tz"
                                    },
                                  
                                ],
                                itemStyle: { //坐标点颜色
                                    normal: {
                                        show: true,
                                        color: '#fff',
                                        shadowBlur: 20,
                                        shadowColor: '#fff'
                                    },
                                    emphasis: {
                                        areaColor: '#f00'
                                    }
                                },
                },

        ]
    };
    myChart.setOption(option);
});