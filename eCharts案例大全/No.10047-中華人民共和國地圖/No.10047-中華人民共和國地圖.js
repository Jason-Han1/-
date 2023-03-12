var uploadedDataURL = "/asset/get/s/data-1568175541645-ltY4Mkcpv.json";

//var uploadedDataURL = "/asset/get/s/data-1567588182028-i2QuSn-Tj.json";
$.getJSON(uploadedDataURL, function(geoJSON) {
    const backgroundColor = 'transparent',
        borderColor = 'whitesmoke', //'',
        textColor = '#666666',
        shadowColor = 'white',
        mapAreaColor = '#bee7fb';
    $('body').css({
        'background': 'radial-gradient(#063d7e,#081a2e)',
        color: '#42423f',
        'text-shadow': '0 1px 2px white',
        'font-family': '隶书',
        'font-weight': 'bold',
        //'writing-mode': 'vertical-rl'
    });
    echarts.registerMap("china", geoJSON);
    option = {
        title: [{
            text: '中華人民共和國地圖',
            left: 'left',
            top: 10,
            textStyle: {
                color: textColor,
                fontSize: 28,
                //fontFamily: '隶书',
                textShadowColor: shadowColor,
                textShadowBlur: 2,
            },
            //padding: 6,
            //backgroundColor: mapAreaColor,
            //borderColor: borderColor,
            //borderWidth: 3
        }]
    };
    option.globe = {
        baseTexture: '/asset/get/s/data-1568168168276-rhs_FhJOs.jpg',
        heightTexture: '/asset/get/s/data-1568167925700-QJsl5Cr-a.jpg',
        displacementScale: 0.1,

        shading: 'lambert',
        environment: 'asset/get/s/data-1567743711128-O_8Ju_06S.jpg',
        realisticMaterial: {
            roughness: 0.9
        },
        viewControl: {
            autoRotate: false,
            targetCoord: geoJSON.properties.center,
            distance: 100
        },
        light: {
            ambient: {
                intensity: 0.1
            },
            main: {
                intensity: 1.5
            }
        },

        /* layers: [{
             type: 'blend',
             blendTo: 'emission',
             texture: '/asset/get/s/data-1568168378964-5lPu7k74-.jpg'
         }, {
             type: 'overlay',
             texture: '/asset/get/s/data-1568168390545-VP1XI1TjJ.png',
             shading: 'lambert',
             distance: 5
         }]*/
    };

    option.series = [];
    let polygons = [];
    let props = geoJSON.properties;
    geoJSON.geometry.coordinates.forEach(function(coordinate, index) {
        coordinate.forEach(function(coords) {
            polygons.push({
                name: props.name,
                value: index,
                coords: coords.map(function(lnglat) {
                    return [lnglat.lng, lnglat.lat];
                })
            });
        })
    });

    option.series.push({
        type: 'lines3D',
        polyline: true,
        lineStyle: {
            color: 'yellow',
            width: 3.2
        },
        //blendMode: 'lighter',
        effect: {
            show:true,
            trailWidth: 2.1,
            trailColor: 'red'
        },
        data: polygons
    });
    polygons = [];
    geoJSON.features.forEach(function(feature) {
        let props = feature.properties;
        feature.geometry.coordinates.forEach(function(coordinate, index) {
            coordinate.forEach(function(coords) {
                polygons.push({
                    name: props.name,
                    value: props.subFeatureIndex,
                    coords: coords
                });
            })
        });
    })
    option.series.push({
        type: 'lines3D',
        polyline: true,
        lineStyle: {
            color: borderColor,
            type:'dashed',
            width: 1.2
        },
        //blendMode: 'lighter',
        effect: {
            show:true,
            trailWidth: 1.5,
            trailColor: 'yellowgreen'
        },
        data: polygons
    });


    option.series.push({
        type: 'scatter3D',
        coordinateSystem: option.globe ? 'globe' : 'geo3D',
        symbolSize: 6,
        symbol: 'circle',
        itemStyle: {
            color: 'white',
            borderColor: 'darkgray',
            borderWidth: .52,
            opacity: 1
        },
        label: {
            show: true,
            formatter: '{b}',
            distance: 0,
            //position:'top',
            textStyle: {
                color: textColor,
                textShadowColor: shadowColor,
                textShadowBlur: 2,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                //borderWidth: 3,
                fontFamily: '隶书',
                fontSize: 12,
                fontWeight: 'bold',
                padding: 0
            }
        },
        data: geoJSON.features.map(function(feature, index, features) {
            let props = feature.properties;
            return {
                name: '省会',
                value: props.center
            }
        })
    });
    option.series.push({
        silent: true,
        zlevel: 1,
        type: 'scatter3D',
        coordinateSystem: option.globe ? 'globe' : 'geo3D',
        symbolSize: 2,
        symbol: 'circle',
        itemStyle: {
            color: 'black',
            borderWidth: 0,
            opacity: 1
        },
        data: geoJSON.features.map(function(feature, index, features) {
            let props = feature.properties;
            return {
                name: props.name,
                value: props.center
            }
        })
    });
    option.series.push({
        type: "bar3D",
        coordinateSystem: 'globe',
        barSize: 0.521, //柱子粗细
        shading: 'realistic',
        opacity: 1,
        //bevelSize: 0.5,
        label: {
            show: option.geo3D ? !option.geo3D.label.show : true,
            formatter: '{b}',
            distance: 10,
            textStyle: {
                color: textColor,
                textShadowColor: shadowColor,
                textShadowBlur: 2,
                //backgroundColor: backgroundColor,
                //borderColor: borderColor,
                //borderWidth: 4,
                fontFamily: '隶书',
                fontSize: 14,
                fontWeight: 'bold',
                padding: 2
            }
        },
        itemStyle: {
            color: borderColor
        },
        data: geoJSON.features.map(function(feature, index, features) {
            let props = feature.properties;
            let height;
            if (option.geo3D) {
                height = features.length - (props.subFeatureIndex ? props.subFeatureIndex : index);
            } else {
                height = 0;
            }
            return {
                name: props.name,
                value: props.center.concat(0)
            }
        })
    });

    myChart.setOption(option);
})