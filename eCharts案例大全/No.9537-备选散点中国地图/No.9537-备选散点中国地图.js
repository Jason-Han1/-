option = {
    backgroundColor: '#333',
    geo: {
        map: 'china',
        roam: false,
        zoom: 0.8,
        aspectScale: 0.75, //长宽比
        itemStyle: {
            normal: {
                areaColor: '#0c3b42',
                borderColor: '#03212c',
            },
            emphasis: {
                areaColor: '#0c3b42',
            }
        },
        label: {
            emphasis: {
                color: '#0c3b42',
            }
        }
    },
    series: [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [
                {"name":"北京","value":[116.405285,39.904989,199]},
                {"name":"上海","value":[121.472644,31.231706,199]},
                {"name":"苏州","value":[119.28531600000003,32.428886,199]},
                {"name":"杭州","value":[120.20000,30.06667,199]},
                {"name":"福州","value":[119.30000,26.08333,199]},
                {"name":"西安","value":[108.95000,34.26667,199]},
                {"name":"成都","value":[104.06667,30.66667,199]},
                {"name":"昆明","value":[102.73333,25.05000,199]},
            ],
            symbolSize: 10,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                color: '#44FCF7',
                period: 8,
                scale: 3
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    padding: [0, 0, 0, 8],
                    show: true,
                    fontSize: 14
                }
            },
            itemStyle: {
                normal: {
                    color: '#44FCF7',
                    shadowBlur: 10,
                }
            },
            zlevel: 1
        },

    ]
};