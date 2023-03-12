var uploadedDataURL = "/asset/get/s/data-1567588182028-i2QuSn-Tj.json";
$.getJSON(uploadedDataURL, function(geoJSON) {
    const backgroundColor = '#d9d7be',
        borderColor = '#42423f',
        textColor = '#42423f';
    $('body').css({
        'background': 'url(/asset/get/s/data-1567753065799-HMPWh2MJC.jpg)', //'#2a6d87',
        color: '#42423f',
        'text-shadow': '0 1px 2px white',
        'font-family': '隶书',
        'font-weight': 'bold',
        //'writing-mode': 'vertical-rl'
    });
    const regions = geoJSON.features.map(function(feature) {
        let props = feature.properties;
        return {
            name: props.name,
            height: Math.random()//props.adcode / 100000
        }
    });
    console.log(regions);
    echarts.registerMap("china", geoJSON);
    option = {
        title: [{
            text: '中华人民共和国舆图',
            left: 'center',
            top: 10,
            textStyle: {
                color: textColor,
                fontSize: 21,
                fontFamily: '隶书'
            },
            padding: 6,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 3
        }],
        geo3D: {
            map: "china",
            roam: !0,
            selectedMode: "single",
            regions: regions,
            itemStyle: {
                areaColor: '#e5ca9f',
                borderColor: borderColor,
                borderWidth: .52,
                borderType: 'dotted',
                shadowColor: borderColor,
                shadowBlur: 2.1
            },
            label: {
                show: true,
                textStyle: {
                    color: textColor,
                    textShadowColor: 'white',
                    textShadowBlur: 2,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 3,
                    fontFamily: '隶书',
                    fontSize: 16,
                    fontWeight: 'bold',
                    padding: 4
                }

            }
        }
    }
    myChart.setOption(option);
})