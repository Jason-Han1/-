var data = [
    { name: '太原', value: 10 },
    { name: '晋城', value: 10 },
    { name: '济源', value: 10 },
    { name: '郑州', value: 10 },
    { name: '武汉', value: 10 },
    { name: '深圳', value: 20 },
    { name: '鹤壁', value: 10 },
    { name: '兰考', value: 20 },
];
var geoCoordMap = {
    兰考: [114.81, 34.85],
    晋城: [112.86, 35.5],
    太原: [112.53, 37.87],
    武汉: [114.31, 30.52],
    深圳: [114.07, 22.62],
    郑州: [113.65, 34.76],
    鹤壁: [114.27, 35.73],
    济源: [112.6, 35.06],
};
option = {
    backgroundColor: '#0F2C53',
    geo: {
        map: 'china',
        show: true,
        roam: false,
        zoom: 1.3, //当前视角的缩放比例
        aspectScale: 0.86,
        layoutCenter: ['50%', '50%'], //地图位置
        layoutSize: '100%',
        itemStyle: {
            normal: {
                areaColor: {
                    type: 'linear-gradient',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#DBE4F0',
                        },
                        {
                            offset: 0.5,
                            color: '#678CBC',
                        },
                        {
                            offset: 1,
                            color: '#124B95',
                        },
                    ],
                },
                opacity: 1,
            },
            emphasis: {
                areaColor: 'rgba(0,243,255,1)',
                label: {
                    show: false,
                },
            },
        },
        regions: [
            {
                name: '南海诸岛',
                itemStyle: {
                    areaColor: 'rgb(0,243,255)',
                    borderColor: '#7C99BF',
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
            zoom: 1.3, //当前视角的缩放比例
            roam: false, //是否开启平游或缩放
            scaleLimit: {
                //滚轮缩放的极限控制
                min: 1,
                max: 2,
            },
            itemStyle: {
                normal: {
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#DBE4F0',
                            },
                            {
                                offset: 0.4,
                                color: '#7798C4',
                            },

                            {
                                offset: 0.9,
                                color: '#255A9F',
                            },
                            {
                                offset: 1,
                                color: '#0F2C53',
                            },
                        ],
                    },
                    borderColor: '#7C99BF',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#DBE4F0',
                            },
                            {
                                offset: 0.5,
                                color: '#678CBC',
                            },
                            {
                                offset: 1,
                                color: '#124B95',
                            },
                        ],
                    },
                    borderColor: 'rgba(44,58,75,0.1)',
                    shadowBlur: 5,
                    borderWidth: 1,
                    label: {
                        show: false,
                    },
                },
            },
            select: {
                label: {
                    show: false,
                },
                borderColor: 'rgba(44,58,75,0.1)',
                shadowBlur: 2,
                itemStyle: {
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#DBE4F0',
                            },
                            {
                                offset: 0.5,
                                color: '#678CBC',
                            },
                            {
                                offset: 1,
                                color: '#124B95',
                            },
                        ],
                    },
                },
            },
        },
        {
            name: 'city',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [
                {
                    name: '兰考',
                    symbolSize: 8,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                        },
                    },
                    value: [114.81, 34.85, 30],
                },
            ],
            symbolSize: 3,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                period: 3,
                scale: 5,
                color:'red',
            },
            itemStyle: {
                color: 'yellow',
            },
            hoverAnimation: true,
            zlevel: 1,
        },
        {
            name: 'city',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
                {
                    name: '深圳',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                        },
                    },
                    value: [114.07, 22.62, 20],
                },
                {
                    name: '武汉',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                        },
                    },
                    value: [114.31, 30.52, 20],
                },
                {
                    name: '晋城',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'left',
                            show: true,
                        },
                    },
                    value: [112.86, 35.5, 20],
                },
                {
                    name: '济源',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'left',
                            show: true,
                        },
                    },
                    value: [112.6, 35.06, 20],
                },
                {
                    name: '郑州',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'bottom',
                            show: true,
                        },
                    },
                    value: [113.65, 34.76, 20],
                },
                {
                    name: '鹤壁',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                        },
                    },
                    value: [114.27, 35.73, 20],
                },
                {
                    name: '太原',
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'left',
                            show: true,
                        },
                    },
                    value: [112.53, 37.87, 20],
                },
            ],
            symbolSize: 8,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
            },
            itemStyle: {
                color: 'yellow',
            },
            hoverAnimation: true,
            zlevel: 1,
        },
        {
            type: 'lines',
            zlevel: 3,
            effect: {
                show: false,
            },
            lineStyle: {
                normal: {
                    color: 'yellow',
                    width: 2,
                    opacity: 1,
                    curveness: 0.2,
                },
            },
            data: [
                {
                    coords: [
                        [114.07, 22.62],
                        [114.31, 30.52],
                    ],
                    fromName: '深圳',
                    toName: '武汉',
                },
                {
                    coords: [
                        [114.07, 22.62],
                        [113.65, 34.76],
                    ],
                    fromName: '深圳',
                    toName: '郑州',
                },
                {
                    coords: [
                        [114.07, 22.62],
                        [114.81, 34.85],
                    ],
                    fromName: '深圳',
                    toName: '兰考',
                },
                {
                    coords: [
                        [114.31, 30.52],
                        [113.65, 34.76],
                    ],
                    fromName: '武汉',
                    toName: '郑州',
                },
                {
                    coords: [
                        [114.31, 30.52],
                        [112.6, 35.06],
                    ],
                    fromName: '武汉',
                    toName: '济源',
                },
                {
                    coords: [
                        [114.31, 30.52],
                        [114.81, 34.85],
                    ],
                    fromName: '武汉',
                    toName: '兰考',
                },
                {
                    coords: [
                        [113.65, 34.76],
                        [112.6, 35.06],
                    ],
                    fromName: '郑州',
                    toName: '济源',
                },
                {
                    coords: [
                        [113.65, 34.76],
                        [114.81, 34.85],
                    ],
                    fromName: '郑州',
                    toName: '兰考',
                },
                {
                    coords: [
                        [113.65, 34.76],
                        [112.86, 35.5],
                    ],
                    fromName: '郑州',
                    toName: '晋城',
                },
                {
                    coords: [
                        [112.6, 35.06],
                        [112.86, 35.5],
                    ],
                    fromName: '济源',
                    toName: '晋城',
                },
                {
                    coords: [
                        [112.86, 35.5],
                        [112.53, 37.87],
                    ],
                    fromName: '晋城',
                    toName: '太原',
                },

                {
                    coords: [
                        [114.27, 35.73],
                        [114.81, 34.85],
                    ],
                    fromName: '鹤壁',
                    toName: '兰考',
                },
                {
                    coords: [
                        [114.27, 35.73],
                        [112.86, 35.5],
                    ],
                    fromName: '鹤壁',
                    toName: '晋城',
                },
                {
                    coords: [
                        [114.27, 35.73],
                        [112.53, 37.87],
                    ],
                    fromName: '鹤壁',
                    toName: '太原',
                },
            ],
        },
    ],
};
