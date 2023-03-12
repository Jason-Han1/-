var uploadedDataURL = "/asset/get/s/data-1605780387483-5dtoPaOtO.json";



$.get(uploadedDataURL, (res) => {
    var mapData = JSON.parse(res)
    echarts.registerMap('changsha', mapData);

    var centerMap = {};
    if (mapData && mapData.features && mapData.features.length > 0) {
        for (var i = 0; i < mapData.features.length; i++) {
            var feature = mapData.features[i]
            var properties = feature.properties || {};
            if (properties && properties.name) {
                centerMap[properties.name] = properties.cp || [];
            }
        }
    }
    console.log('centerMap:', centerMap);

    var option = {
        backgroundColor: '#0F2666',
        title: {
            text: '长沙市',
        },
        visualMap: {
            show: false,
            max: 100,
            seriesIndex: [3],
            inRange: {
                color: ['#A5DCF4', '#006edd'],
            },
        },
        geo: [{ //如果在vue里effectScatter没生效，一定要看一下有没有引入geo插件
            map: 'changsha',
            // roam: false, // 是否允许缩放
            // zoom: 1.1, // 默认显示级别
            // scaleLimit: {
            //     min: 0,
            //     max: 3,
            // }, // 缩放级别
            layoutCenter: ["47%", "68%"], //地图位置
            layoutSize: "630",
            itemStyle: {
                borderColor: "#2b9bf9", //省市边界线,
                borderWidth: 2,
                normal: {
                    show: false,
                    color: "#0f2666", //地图背景色
                    borderColor: "#2b9bf9", //省市边界线
                    borderWidth: 1,
                },
                emphasis: {
                    show: false,
                    color: "#0f2666", //悬浮背景
                },
            },
            label: {
                show: false
            }

        }],
        series: [{
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [
                    // {
                    //     value: [113.016337, 28.109937, 10]
                    // },
                    // {
                    //     value: [113.116337, 28.109937, 100]
                    // },
                    // {
                    //     value: [113.216337, 28.109937, 1000]
                    // },
                    {
                        value: [112.96667,28.2]
                    },
                    {
                        value: [112.68353,22.38265]
                    }

                ],
                symbolSize: '10',
                itemStyle: {
                    normal: {
                        color: 'rgba(209,248,0,1)'
                    }
                }
            },
            // {
            //     type: 'effectScatter',
            //     coordinateSystem: 'geo',
            //     data: [{
            //             value: [113.016337, 28.209937, 10]
            //         },
            //         {
            //             value: [113.116337, 28.209937, 100]
            //         },
            //         {
            //             value: [113.216337, 28.509937, 1000]
            //         },{
            //             value:[112.0, 28.009937, 100],
            //         }

            //     ],
            //     symbolSize: function(val) {
            //         return 8 + val[2] / 1000; //圆环大小
            //     },
            //     rippleEffect: {
            //         //涟漪特效
            //         period: 10, //动画时间，值越小速度越快
            //         brushType: "stroke", //波纹绘制方式 stroke, fill
            //         scale: 4, //波纹圆环最大限制，值越大波纹越大
            //     },
            //     itemStyle: {
            //         normal: {
            //             color: 'rgba(209,248,0,1)'
            //         }
            //     }
            // },
            // {
            //     type: "lines",
            //     coordinateSystem: 'geo',
            //     zlevel: 2,
            //     animation: false,
            //     effect: {
            //         show: true,
            //         color: "#d1f800",
            //         period: 7, //箭头指向速度，值越小速度越快
            //         //constantSpeed:2,
            //         trailLength: 0.7, //特效尾迹长度[0,1]值越大，尾迹越长重
            //         symbol: "circle", //箭头图标
            //         symbolSize: 4, //图标大小
            //         loop: true, //是否循环显示特效
            //     },
            //     lineStyle: {
            //         normal: {
            //             color: "#d1f800",
            //             width: 1, //尾迹线条宽度
            //             opacity: 0, //尾迹线条透明度
            //             //curveness: 0.3 //尾迹线条曲直度
            //         },
            //     },
            //     data: [{
            //             coords: [
            //                 [113.016337, 28.209937],
            //                 [113.016337, 29]
            //             ],
            //         },
            //         {
            //             coords: [
            //                 [113.116337, 28.209937],
            //                 [113.116337, 29]
            //             ],
            //         },
            //         {
            //             coords: [
            //                 [113.216337, 28.509937],
            //                 [113.216337, 29]
            //             ],
            //         },
            //         {
            //             coords: [
            //                 [112.216337, 28.509937],
            //                 [112.216337, 29]
            //             ],
            //         }
            //     ],

            // },



        ],
    };

    myChart.setOption(option);

})