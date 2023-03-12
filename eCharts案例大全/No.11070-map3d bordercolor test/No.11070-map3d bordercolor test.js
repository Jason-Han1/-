// var uploadedDataURL = "/asset/get/s/data-1560914759463-NbH42Chnc.js";

var uploadedDataURL = "/asset/get/s/data-1560906388246-zXXTeI17j.json";
fetch(uploadedDataURL).then(res => res.json()).then(geojson => {
    let regionData = geojson.features.map(f => {
        return {
            name: f.properties.name,
            // value: item[1]
            // height: 2 * Math.random(),
            itemStyle: {
                // name:item.name,
                color: randomColor(),
                // borderColor: randomColor(),
                // borderWidth: 1
            }
        }
    })

    // regionData = regionData.slice(0, 20);

    const option = {
        backgroundColor: '#cdcfd5',
        series: [{
            type: 'map3D',
            map: 'china',
            shading: 'lambert',
            realisticMaterial: {
                roughness: 0.2,
                metalness: 0
            },
            postEffect: {
                enable: true,
                SSAO: {
                    enable: true,
                    radius: 2,
                    intensity: 1
                }
            },
            groundPlane: {
                show: true
            },
            light: {
                main: {
                    intensity: 2,
                    shadow: true,
                    shadowQuality: 'high',
                    alpha: 30
                },
                ambient: {
                    intensity: 0
                },
                ambientCubemap: {
                    texture: "/asset/get/s/data-1560906611297-pX0cCq08t.hdr",
                    exposure: 2,
                    diffuseIntensity: 1
                }
            },
            viewControl: {
                distance: 50,
                panMouseButton: 'left',
                rotateMouseButton: 'right'
            },

            // itemStyle: {
            //     // color: '#333',
            //     borderColor: 'green',
            //     borderWidth: 1
            // },

            regionHeight: 1,

            data: regionData
        }]
    }
    myChart.setOption(option);
})