var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";



$.getJSON(uploadedDataURL, function(geoJson) {

    echarts.registerMap('china', geoJson);
 
    option = {
        backgroundColor: '#013954',

        // geo: {
        //     map: 'china',
        //   aspectScale: 0.75, //长宽比
        //   zoom: 1.1,
        //   roam: true,
        //   itemStyle: {
        //     normal: {
        //       areaColor: {
        //                 type: 'radial',
        //                 x: 0.5,
        //                 y: 0.5,
        //                 r: 0.8,
        //                 colorStops: [{
        //                     offset: 0,
        //                     color: '#09132c' // 0% 处的颜色
        //                 }, {
        //                     offset: 1,
        //                     color: '#274d68'  // 100% 处的颜色
        //                 }],
        //                 globalCoord: true // 缺省为 false
        //             },

        //     },

        //   },
        //  regions: [{
        //     name: '南海诸岛',
        //     itemStyle: {
        //         areaColor: 'rgba(0, 10, 52, 1)',

        //         borderColor: 'rgba(0, 10, 52, 1)',
        //         normal: {
        //             opacity: 0,
        //             label: {
        //                 show: false,
        //                 color: "#009cc9",
        //             }
        //         }
        //     },


        // }]
        // },
        series: [{
                type: 'map',
                roam: true,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#1DE9B6'
                        }
                    },

                },

                itemStyle: {
                    normal: {
                        borderColor: 'rgb(147, 235, 248)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: '#09132c' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#274d68' // 100% 处的颜色
                            }],
                            globalCoord: true // 缺省为 false
                        },
                    },

                },
                zoom: 1.1,
                map: 'china' //使用

            },


        ]
    };
    myChart.setOption(option, true);
});