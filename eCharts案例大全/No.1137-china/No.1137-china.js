var option;
var data = [
    {
        name: '四川',
        // value: [122.24, 29.55, 100],
        selected: true,
    },
];
var mapDate = [
    {
        name: '青岛',
        value: [120.417483, 36.110931],
        datas: 1354,
    },

];

option = {
    backgroundColor: 'black',
    geo: {
        map: 'china',
        aspectScale: 0.8,
        layoutCenter: ['50%', '50%'],
        layoutSize: '120%',
        itemStyle: {
            normal: {
                areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 1200,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#152E6E90', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0673AD', // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                shadowColor: '#276fce',
                shadowOffsetX: 0,
                shadowOffsetY: 15,
                opacity: 0.5,
            },
            emphasis: {
                areaColor: '#276fce',
            },
        },
        regions: [
            {
                name: '南海诸岛',
                itemStyle: {
                    areaColor: 'rgba(0, 10, 52, 1)',
                    borderColor: 'rgba(0, 10, 52, 1)',
                    normal: {
                        opacity: 0,
                        label: {
                            show: false,
                            color: '#009cc9',
                        },
                    },
                },
                label: {
                    show: false,
                    color: '#FFFFFF',
                    fontSize: 12,
                },
            },
        ],
    },
    series: [
        {
            type: 'map',
            mapType: 'china',
            aspectScale: 0.8,
            layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: '120%',
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: {
                //滚轮缩放的极限控制
                min: 1,
                max: 2,
            },
            label: {
                show: true,
                color: '#FFFFFF80',
                fontSize: 16,
            },
            itemStyle: {
                normal: {
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 1200,
                        x2: 1000,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#152E6E90', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#0673AD', // 50% 处的颜色
                            },
                        ],
                        global: true, // 缺省为 false
                    },
                    borderColor: '#1cccff50',
                    borderWidth: 1.8,
                },
                emphasis: {
                    // areaColor: '#02102b',
                     areaColor: 'rgba(147, 235, 248, 0)',
                    label: {
                        color: '#fff',
                    },
                },
            },
            data: data,
        },
        {
                    tooltip: {
                        show: false,
                    },
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    rippleEffect: {
                        scale: 10,
                        brushType: 'stroke',
                    },
                    showEffectOn: 'render',
                    itemStyle: {
                        normal: {
                            shadowColor: '#0ff',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            color: function (params) {
                                var colorList = [
                                    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                                        {
                                            offset: 0,
                                            color: '#64fbc5',
                                        },
                                        {
                                            offset: 1,
                                            color: '#018ace',
                                        },
                                    ]),
                                    
                                ];
                                return colorList[params.dataIndex];
                            },
                        },
                    },
                    label: {
                        normal: {
                            color: '#fff',
                        },
                    },
                    symbol: 'circle',
                    symbolSize: [6, 2],
                    data: mapDate,
                    zlevel: 1,
                },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: 10,
            rippleEffect: {
                period: 13,
                scale: 5,
                brushType: 'fill',
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    color: '#b3e2f2',
                    fontWeight: 'bold',
                    fontSize: 18,
                },
            },

            data: data,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#a68625',
                    shadowBlur: 20,
                    shadowColor: '#fff',
                },
                emphasis: {
                    areaColor: '#f00',
                },
            },
        },
    ],
};
