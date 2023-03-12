let canvas = document.createElement('canvas');
let mapChart = echarts.init(canvas, null, {
    width: 4096,
    height: 2048
});
let pOp = {
    geo: {
        map: 'china',
        label: {
            fontSize: 12
        },
        itemStyle: {
            areaColor: 'transparent',
            borderColor: '#00FDFF'
        },
        emphasis: {
            areaColor: 'transparent'
        },
        regions: [
	       	{
              name: "南海诸岛",
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false
                  }
                }
              }
            }
        ],
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
            [-180, 90],
            [180, -90]
        ]
    },
    data: [
        ],
    series: [
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [
                {"name":"北京","value":[127.9688, 45.368]},
            ],
            symbolSize: 20,
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
        {
            type: 'lines',
            zlevel: 8,
            effect: {
                show: true,
                period: 3, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 8, //图标大小
            },
            lineStyle: {
                normal: {
                    color: "#44FCF7",
                    width: 1, //线条宽度
                    opacity: 0.8, //尾迹线条透明度
                    curveness: 0.3 //尾迹线条曲直度
                },
            },
            data: [
                {
                coords: [
                    [127.9688, 45.368],
                    [121.4543, 31.007]
                ]

            }]
        }
    ]
}
mapChart.setOption(pOp);
option = {
    backgroundColor: '#333',
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        text: ['scatter3D'],
        textStyle: {
            color: '#fff'
        },
        calculable: true,
        max: 3000,
        inRange: {
            color: ['#87aa66', '#eba438', '#d94d4c'],
            symbolSize: [8, 30]
        }
    }
    ],
    globe: {
        baseTexture: "/asset/get/s/data-1565167424629-_VRUzTZn2.jpg",
        heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',
        displacementScale: 0.04,
        shading: 'lambert',
        environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',
        light: { // 光照阴影
            main: {
                color: '#fff', // 光照颜色
                intensity: 1.2, // 光照强度
                shadow: false, // 是否显示阴影
                alpha: 40,
                beta: -30
            },
            ambient: {
                intensity: 0.5
            }
        },
        viewControl: {
            projection: 'perspective',
            alpha: 90,
            beta: 0,
            center: [0, 50, 0], // 视角
            targetCoord: [110.46, 10.92], 
            autoRotate: false,
            autoRotateAfterStill: 10,
            distance: 50 // 视距
        },
        postEffectL: {
            enable: true,
            depthOfFieldL: {
                enable: true,
                focalDistance: 1000,
                fstop: 100
            }
        },
        layers: [{
            type: 'blend',
            texture: mapChart
        }]
    },
    series: [{
        type: 'scatter3D',
        coordinateSystem: 'globe',
        label: {
            show: false
        },
        emphasis: {
            label: {
                show: false
            }
        },
        data: []
    },{
        name: 'lines3D',
        type: 'lines3D',
        coordinateSystem: 'globe',
        effect: {
            show: true,
            period: 2,
            trailWidth: 1,
            trailLength: 0.5,
            trailOpacity: 1,
            trailColor: '#0087f4'
        },
        blendMode: 'lighter',
        lineStyle: {
            width: 1,
            color: '#0087f4',
            opacity: 0
        },
        data: [],
        silent: false,
        
    }]
}

myChart.setOption(option);

for (let i = 0; i < 50; i++) {
    option.series[1].data = option.series[1].data.concat(getRandomData())
}

function getRandomData() {
    return {
        coords: [
            [Math.random() * 135.20, Math.random() * 53.33],
            [121.51585, 31.23045]
        ],
        value: (Math.random() * 30).toFixed(2)
    }
}