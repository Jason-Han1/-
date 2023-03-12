var uploadedDataURL = "/asset/get/s/data-1594281065688-80dQTMwuL.json";

$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson)
    let data = [
        ['116.405285', '39.904989', 800],
        ['117.190182', '39.125596', 600]
    ]
    
    let mapMax = Math.max(...data.map(item => item[2]))
    let mapMin = Math.min(...data.map(item => item[2]))
    
    myChart.setOption({
        geo: {
            map: 'china',
            label: {
                show: true
            },
            itemStyle: {
                areaColor: '#76b1ff',
                borderColor: '#eee',
                shadowColor: '#76b1ff',
                shadowBlur: 10,
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#409EFF',
                    borderWidth: 0
                }
            }
        },
        visualMap: {
            show: true,
            color: ['#ff4601', '#fffc00', '#87cffa'],
            min: mapMin,
            max: mapMax,
        },
        series: [{
            name: 'AQI',
            type: 'heatmap',
            coordinateSystem: 'geo',
            data: data
        }]
    })
})
