/**
 * @author liang
 * 3D散点图，高度设为0，紧贴球表面，通过大小反映数据量多少
 */

// 使用 echarts 绘制世界地图的实例作为纹理
let canvas = document.createElement('canvas');
let mapChart = echarts.init(canvas, null, {
    width: 4096,
    height: 2048
});
let pOp = {
    // 两种方法绘制地图都可以
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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
            [-180, 90],
            [180, -90]
        ]
    },
    // series: [
    //     {
    //         type: 'map',
    //         map: 'world',
    //         top: 0, left: 0,
    //         right: 0, bottom: 0,
    //         boundingCoords: [[-180, 90], [180, -90]],
    //         itemStyle: {
    //             areaColor: 'transparent',
    //             borderColor: '#00FDFF'
    //         },
    //         label:{
    //             fontSize: 80
    //         },
    //     }    
    // ]
}
// const randomData = () => {
//     let longitude = (Math.random() * 360 - 180).toFixed(6)
//     let latitude = (Math.random() * 180 - 90).toFixed(6)
//     let value = (Math.random() * 3000).toFixed(2)
//     return [longitude, latitude, -1, value]
// }
let data = [1,2,3,4]
// for (let i = 0; i < 500; i++) {
//     data.push(randomData())
// }
mapChart.setOption(pOp);
option = {
    backgroundColor: '#333',
    tooltip: {
        show: true,
        formatter(d) {
            return '经度：' + d.data[0] + '</br>纬度：' + d.data[1] + '</br>数据量：' + d.data[3]
        }
    },
    visualMap: [{
        // show: false,
        type: 'continuous',
        seriesIndex: 0,
        text: ['scatter3D'],
        textStyle: {
            color: '#fff'
        },
        // dimension: 3,
        calculable: true,
        max: 3000,
        inRange: {
            color: ['#87aa66', '#eba438', '#d94d4c'],
            symbolSize: [8, 30]
        }
    }],
    globe: {
        baseTexture: '/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg',
        heightTexture: '/asset/get/s/data-1491889019097-rJQYikcpl.jpg',
        displacementScale: 0.04,
        shading: 'lambert',
        environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',
        realisticMaterial: {
            roughness: 0.9
        },
        
        light: { // 光照阴影
            main: {
                color: '#fff', // 光照颜色
                intensity: 1.2, // 光照强度
                // shadowQuality: 'high', //阴影亮度
                shadow: false, // 是否显示阴影
                alpha: 40,
                beta: -30
            },
            ambient: {
                intensity: 0.5
            }
        },
        viewControl: {
            alpha: 30,
            beta: 160,
            // targetCoord: [116.46, 39.92],
            autoRotate: true,
            autoRotateAfterStill: 10,
            distance: 150
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
        // symbolSize (d) {
        //     return d[3] * (maxSymbal - minSymbal) / 3000
        // },
        // blendMode: 'lighter',
        data: data
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
            // width: 2
            width: 1,
            color: '#0087f4',
            opacity: 0
        },
        data: [],
        silent: false,
        
    }]
}

for (let i = 0; i < 50; i++) {
    option.series[1].data = option.series[1].data.concat(rodamData())
}

function rodamData() {
    let name = '随机点' + Math.random().toFixed(5) * 10000
    // let longitude = Math.random() * 62 + 73
    let longitude = 10.18
    let longitude2 = Math.random() * 135.20
    // let latitude = Math.random() * 50 + 3.52
    let latitude = 20.51
    let latitude2 = Math.random() * 53.33
    return {
        coords: [
            [longitude2, latitude2],
            [longitude, latitude]
        ],
        value: (Math.random() * 30).toFixed(2)
    }
}