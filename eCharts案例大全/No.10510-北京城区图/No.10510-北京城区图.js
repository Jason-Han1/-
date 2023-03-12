var uploadedDataURL = "/asset/get/s/data-1565011264432-rhwU1Jg8l.json";

myChart.showLoading();
$.get(uploadedDataURL, function(geoJson) {

    echarts.registerMap('Beijing', geoJson);
    myChart.hideLoading();
    myChart.setOption({
        // geo: { // 与series type: map 类似
        //     map: 'Beijing',

        //     itemStyle: {
        //         normal: { // 普通状态下的样式
        //             label: {
        //                 show: true
        //             },
        //             areaColor: '#1B7E52',
        //             borderColor: '#0CA562'
        //         },
        //         emphasis: {
        //             label: {
        //                 show: true
        //             },
        //             areaColor: '#0CA562',
        //             borderColor: '#1B7E52'
        //         }
        //     },
        //     label: {
        //         normal: {
        //             textStyle: {
        //                 fontSize: 15,
        //                 fontWeight: 'bold',
        //                 color: '#58D846'
        //             }
        //         },
        //         emphasis: {
        //             textStyle: {
        //                 fontSize: 15,
        //                 fontWeight: 'bold',
        //                 color: 'white'
        //             }
        //         }
        //     }
        // },
        title: {
            text: '北京城区图',
            subtext: '地图来源于网络',
            //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },

        series: [{
                type: 'map',
                roam: true,
                map: 'Beijing',
                selectedMode: 'single',
                itemStyle: {
                    normal: { // 普通状态下的样式
                        label: {
                            show: true
                        },
                        areaColor: '#1B7E52',
                        borderColor: '#0CA562'
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        areaColor: '#0CA562',
                        borderColor: '#1B7E52'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#58D846'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    }
                }
            }
        ]
    });
});