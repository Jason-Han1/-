var population_data = "/asset/get/s/data-1573131280684-B3_8BYdo.json";

// ROOT_PATH  = 'https://www.echartsjs.com/examples/'
$.getJSON(population_data, function (data) {
    data = data.filter(function (dataItem) {
        return dataItem[2] > 0;
    }).map(function (dataItem) {
        return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
    });
    
    let canvas = document.createElement('canvas');
    let mapChart = echarts.init(canvas, null, {
        width: 4096,
        height: 2048
    });
    
    //---------------------     中国/世界矢量边界      ----------------------
    // let pOp = {
    //     geo: {
    //         // map: 'world',  // 切换中国地图和世界地图
    //         map: 'china',
    //         label: {
    //             fontSize: 18
    //         },
    //         itemStyle: {
    //             areaColor: 'transparent',
    //             borderColor: '#ffff00'
    //         },
    //         emphasis: {
    //             areaColor: 'transparent'
    //         },
    //         regions: [{
    //             name: "南海诸岛",
    //             value: 0,
    //             itemStyle: {
    //                 normal: {
    //                     opacity: 0,
    //                     label: {
    //                         show: false
    //                     }
    //                 }
    //             }
    //         }],
    //         top: 0,
    //         left: 0,
    //         right: 0,
    //         bottom: 0,
    //         boundingCoords: [
    //             [-180, 90],
    //             [180, -90]
    //         ]
    //     },
    //     data: []
    // }
    // mapChart.setOption(pOp);
    
    
    // 世界人口分布气泡图
    option = {
        // backgroundColor: '#333',
        title: {
            text: '世界人口分布',
            subtext: 'data from echarts examples',
            sublink: 'https://www.echartsjs.com/examples/data-gl/asset/data/population.json',
            top: 10,    //  与顶部的距离
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 60,
            type: 'continuous',
            seriesIndex: 0,
            inRange: {
                symbolSize: [1.0, 10.0]
            }
        },
        globe: {
            baseTexture: "/asset/get/s/data-1565167424629-_VRUzTZn2.jpg",  // 底图
            heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',  // 纹理（高度）贴图
            // heightTexture: '/asset/get/s/data-1573130275525-nUJPfdWG.jpg',  // 纹理（高度）贴图
            displacementScale: 0.04,
            displacementQuality: 'high',
            globeOuterRadius: 120,          // 数据半径（数据值 与 地心的距离）
            // baseColor: '#000',           // 地表颜色
            shading: 'realistic',
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
                enable: true
            },
            light: {
                main: {
                    color: '#fff', // 光照颜色
                    intensity: 1.2, // 光照强度
                    shadow: false // 是否显示纹理的阴影
                },
                // ambientCubemap: { // 背景光照调节
                //     // texture: ROOT_PATH + 'data-gl/asset/pisa.hdr',
                //     // exposure: 1,
                //     // specularIntensity: 2,
                //     diffuseIntensity: 0.2
                // }
            },
            viewControl: {
                projection: 'perspective',
                alpha: 90,
                beta: 0,
                center: [0, 0, 0],             // 距离地轴的位置[左、上、右]
                targetCoord: [120, 38],        // 旋转的水平面的起点坐标
                autoRotate: true,
                autoRotateAfterStill: 20,      // 暂停20秒后会自动旋转
                distance: 200 // 视距
            },
            layers: [{
                type: 'blend',
                texture: mapChart
            }]
        },
        series: {
            type: 'scatter3D', // 可视化类型
            coordinateSystem: 'globe', // 坐标系统
            blendMode: 'lighter',
            symbolSize: 2,
            itemStyle: {
                // color: 'rgb(255,255, 255)',   
                color: 'rgb(138,138,0)', // 数据颜色
                opacity: 1
            },
            data: data
            // data: []
        }
    }
    
    myChart.setOption(option);
});     
    
    
    
    
    
    