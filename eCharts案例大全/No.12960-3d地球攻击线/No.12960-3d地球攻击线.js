option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: "/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg",
        // heightTexture: "data-gl/asset/world.topo.bathy.200401.jpg",
        displacementScale: 0.04,
        // shading: 'color',
        environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        viewControl:{
            autoRotate:false,
            distance:200,
            targetCoord: [123.38, 6.09]
        },
        
        light: {
            // main: {
            //     intensity: 5,
            //     shadow: false
            // },
            ambient:{
                intensity:2
            },
            // ambientCubemap: {
            //     texture: 'data-gl/asset/pisa.hdr',
            //     diffuseIntensity: 5
            // }
        }
    },
    // backgroundColor: '#333',
    tooltip: {
        show: true
    },
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
            color: ['#87aa66', '#eba438', '#d94d4c']
        }
    }],
    series: [{
        name: 'lines3D',
        type: 'lines3D',
        coordinateSystem: 'globe',
        effect: {
            show: true,
            period: 2,
            trailWidth: 3,
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
    
    
};
for (let i = 0; i < 50; i++) {
    option.series[0].data = option.series[0].data.concat(rodamData())
}

function rodamData() {
    let name = '随机点' + Math.random().toFixed(5) * 100000
    // let longitude = Math.random() * 62 + 73
    let longitude = 105.18
    let longitude2 = Math.random() * 360 - 180
    // let latitude = Math.random() * 50 + 3.52
    let latitude = 37.51
    let latitude2 = Math.random() * 180 - 90
    return {
        coords: [
            [longitude2, latitude2],
            [longitude, latitude]
        ],
        value: (Math.random() * 3000).toFixed(2)
    }
}