
$.getJSON('/asset/get/s/data-1491887968120-rJODPy9ae.json', function (data) {

    data = data.filter(function (dataItem) {
        return dataItem[2] > 0;
    }).map(function (dataItem) {
        return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
    });

    myChart.setOption({
        visualMap: {
            show: false,
            min: 0,
            max: 60,
            inRange: {
                symbolSize: [1.0, 10.0]
            }
        },
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
            autoRotate:true,
            distance:350,
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
        series: [{
            type: 'scatter3D',
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            symbolSize: 2,
            itemStyle: {
                color: 'rgb(50, 50, 150)',
                opacity: 1
            },
            data: data
        },{
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
    
    });
    for (let i = 0; i < 50; i++) {
    myChart.series[0].data = myChart.series[0].data.concat(rodamData())
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
});

