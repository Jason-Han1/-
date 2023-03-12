var option;
var data = [
    {
        name: '北京',
        value: [116.24, 39.55, 100],
    },

    {
        name: '重庆',
        value: [106.54, 29.59],
    },
    {
        name: '浙江',
        value: [120.19, 30.26],
    },
];

option = {
    backgroundColor: 'black',
    geo: {
        map: 'china',
        aspectScale: 0.85,
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',
        itemStyle: {
            normal: {
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
            aspectScale: 0.85,
            layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: '100%',
            zoom: 1, //当前视角的缩放比例
            // roam: true, //是否开启平游或缩放
            scaleLimit: {
                //滚轮缩放的极限控制
                min: 1,
                max: 2,
            },
            itemStyle: {
                normal: {
                    areaColor: '#0c274b',
                    borderColor: '#1cccff',
                    borderWidth: 1.5,
                },
                emphasis: {
                    areaColor: '#02102b',
                    label: {
                        color: '#fff',
                    },
                },
            },
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbolSize: 10,
            rippleEffect: {
                period: 3,
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
        {
            type: 'lines',
            zlevel: 1, //设置这个才会有轨迹线的小尾巴
            polyline: true,
            effect: {
                show: true,
                period: 4,
                trailLength: 0.7,
                color: '#fff', //流动点颜色
                symbol: 'arrow',
                symbolSize: 6,
            },
            lineStyle: {
                normal: {
                    color: '#fff', //线条颜色
                    width: 1.5,
                    curveness: 0.2,
                    shadowColor: '#fff',
                },
            },
            data: [
                {
                    fromName: '北京',
                    toName: '重庆',
                    coords: [
                        [116.24, 39.55, 100],
                        [106.54, 29.59],
                    ],
                },
                {
                    fromName: '重庆',
                    toName: '浙江',
                    coords: [
                        [106.54, 29.59],
                        [120.19, 30.26],
                    ],
                },
                {
                    fromName: '浙江',
                    toName: '北京',
                    coords: [
                        [120.19, 30.26],
                        [116.24, 39.55, 100],
                    ],
                },
            ],
        },
        {
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3,
            },
            lineStyle: {
                normal: {
                    color: '#ffa022',
                    width: 0,
                    curveness: 0.2,
                },
            },
            data: [
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [121.4648, 31.2891],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [113.5107, 23.2196],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [122.2229, 39.4409],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [108.479, 23.1152],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [116.0046, 28.6633],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [91.1865, 30.1465],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [125.8154, 44.2584],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [110.3467, 41.4899],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [107.7539, 30.1904],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [119.4543, 31.5582],
                    },
                ],
            ],
        },
        {
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 15,
            },
            lineStyle: {
                normal: {
                    color: '#ffa022',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2,
                },
            },
            data: [
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [121.4648, 31.2891],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [113.5107, 23.2196],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [122.2229, 39.4409],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [108.479, 23.1152],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [116.0046, 28.6633],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [91.1865, 30.1465],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [125.8154, 44.2584],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [110.3467, 41.4899],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [107.7539, 30.1904],
                    },
                ],
                [
                    {
                        coord: [116.4551, 40.2539],
                    },
                    {
                        coord: [119.4543, 31.5582],
                    },
                ],
            ],
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke',
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            itemStyle: {
                normal: {
                    color: '#ffa022',
                },
            },
            data: [
                {
                    name: '上海',
                    value: [121.4648, 31.2891, 95],
                },
                {
                    name: '广州',
                    value: [113.5107, 23.2196, 90],
                },
                {
                    name: '大连',
                    value: [122.2229, 39.4409, 80],
                },
                {
                    name: '南宁',
                    value: [108.479, 23.1152, 70],
                },
                {
                    name: '南昌',
                    value: [116.0046, 28.6633, 60],
                },
                {
                    name: '拉萨',
                    value: [91.1865, 30.1465, 50],
                },
                {
                    name: '长春',
                    value: [125.8154, 44.2584, 40],
                },
                {
                    name: '包头',
                    value: [110.3467, 41.4899, 30],
                },
                {
                    name: '重庆',
                    value: [107.7539, 30.1904, 20],
                },
                {
                    name: '常州',
                    value: [119.4543, 31.5582, 10],
                },
            ],
        },
    ],
};
