var uploadedDataURL = "/asset/get/s/data-1565921299158-E_Qo5w30V.json";


$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china1', geoJson);
    myChart.setOption(option = {
        backgroundColor: '#fff',
        geo: {
            show: true,
            map: 'china1',
            label: {},
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgb(234,181,137)',
                    borderColor: 'rgb(218,128,86)',
                    borderWidth: 1,
                    shadowBlur: 1
                },
                emphasis: {
                    areaColor: 'rgb(193,94,41)'
                }
            }
        },
        series: [

            {
                type: 'map',
                map: 'china1',
                geoIndex: 0,
                aspectScale: 0.75,
                data: [

                ]
            }
        ]
    })
})