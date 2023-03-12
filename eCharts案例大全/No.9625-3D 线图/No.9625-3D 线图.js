let canvas = document.createElement('canvas');
let mapChart = echarts.init(canvas, null, {
    width: 4096,
    height: 2048
});
let pOp = {
    geo: {
        // map: 'world',  // 切换中国地图和世界地图
        show:true,
        map: 'china',
        label: {
			show: true,
			color: '#f66',         // 地图上标签的颜色
			fontWeight: 'bold',    //  字体粗细
			fontSize:16,           // 字体大小
			emphasis: {
				color: '#000',     // 鼠标选中后的颜色
				show: false
			}
		},
        itemStyle: {
            areaColor: 'transparent',
            borderColor: '#ffff00',
            
        },
        emphasis: {
            areaColor: 'transparent'
        },
        regions: [{
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
        }],
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
            [-180, 90],
            [180, -90]
        ]
    },
    data: []
}
mapChart.setOption(pOp);


option = {
    backgroundColor: '#333',
    visualMap: {
        show: false,
        // min: 0,
        max: 3000,
        type: 'continuous',
        seriesIndex: 0,
        text: ['scatter3D'],
        textStyle: {
            color: '#fff'
        },
        calculable: true,
        inRange: {
            // symbolSize: [1.0, 10.0]
            color: ['#87aa66', '#eba438', '#d94d4c'],  //
            symbolSize: [8, 30]
        },
    },
    globe: {
        // baseTexture: ROOT_PATH + "data-gl/asset/world.topo.bathy.200401.jpg",
        // heightTexture: ROOT_PATH + "data-gl/asset/world.topo.bathy.200401.jpg",
        baseTexture: "/asset/get/s/data-1565167424629-_VRUzTZn2.jpg",
        heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',
        displacementScale: 0.04,
        displacementQuality: 'high',
        globeOuterRadius: 110,         // 数据半径（数据值 与 地心的距离）
        // baseColor: '#000',          // 地表颜色
        shading: 'realistic',
        // environment: ROOT_PATH + 'data-gl/asset/starfield.jpg',    // 背景环境
        environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',
        realisticMaterial: {
            roughness: 0.9,
            // metalness: 0
        },
        postEffect: {
            enable: true,
            // depthOfField: {                              // 景深（模糊处理）
            //     focalRange: 15,
            //     enable: true,
            //     focalDistance: 100
            // }
        },
        temporalSuperSampling: {
            enable: false
        },
        light: {
            main: {
                color: '#fff', // 光照颜色
                intensity: 2.8, // 光照强度
                shadow: false // 是否显示纹理的阴影
            },
            ambientCubemap: { // 背景光照调节
                // texture: ROOT_PATH + 'data-gl/asset/pisa.hdr',
                // exposure: 1,
                // specularIntensity: 2,
                diffuseIntensity: 0.2
            }
        },
        viewControl: {
            projection: 'perspective',
            alpha: 0,
            beta: 180,
            center: [0, 0, 0], // 距离地轴的位置[左、上、右]
            targetCoord: [120, 38], // 旋转的水平面的起点坐标
            autoRotate: true,
            autoRotateAfterStill: 20, // 暂停20秒后会自动旋转
            distance: 166 // 视距
        },
        layers: [{
            type: 'blend',
            texture: mapChart
        }]
    },
    series: [
    {   // 气泡图
        type: 'scatter3D', // 可视化类型
        coordinateSystem: 'globe', // 坐标系统
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
            // color: 'rgb(255,255, 255)',   
            color: 'rgb(255,0,0)', // 数据颜色
            opacity: 1
        },
        // data: data
        data: []
    }, 
    {   // 线图
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