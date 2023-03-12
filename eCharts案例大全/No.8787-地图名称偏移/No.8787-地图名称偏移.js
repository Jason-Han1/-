var uploadedDataURL = "/asset/get/s/data-1579510140585-vHplW42Y.json";
$.getJSON(uploadedDataURL, function(geoJson) {
    console.log(geoJson);
    echarts.registerMap('江苏', geoJson);
    let option = {
        backgroundColor: "#000",
        geo: {
            map: '江苏',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#000'
                    },
                }
            },
            regions: [{
                name: "南京市",
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            padding: [0, 150, 25, 0]
                        },
                        position: "bottom",
                        distance: 15
                    }
                },
            },
            {
                name: "园区",
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#000',
                            padding: [0, 0, -25, 0],
                        },
                        
                    }
                },
            },
            {
                name: "保税区",
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#000',
                            padding: [0, 0, 25, 0],
                        },
                        
                    }
                },
            }]
        },
        series: []
    }
    myChart.setOption(option);
})