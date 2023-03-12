const JJJ = "/asset/get/s/data-1568010881871-0of0Mrx7V.json";

$.getJSON(JJJ, mapData => {
    echarts.registerMap('JJJ', mapData);
    // myChart.hideLoading();
    
    const geoCoordMap = {
        '厦门市':[118.11022, 24.490474, 20],
        '福州市': [119.306239, 26.075302, 60],
        '泉州市':  [118.589421, 24.908853, 5],
        '漳州市':  [117.661801, 24.510897, 33],
        '龙岩市':[117.02978, 25.091603, 20],
        '莆田市':[119.007558, 25.431011, 8], 
    };
    // [{
    //             "name": "厦门市",
    //             "value": 
    //         }, {
    //             "name": "福州市",
    //             "value":
    //         }, {
    //             "name": "泉州市",
    //             "value": [118.589421, 24.908853, 5]
    //         }, {
    //             "name": "漳州市",
    //             "value": [117.661801, 24.510897, 1]
    //         }, {
    //             "name": "龙岩市",
    //             "value": [117.02978, 25.091603, 1]
    //         }, {
    //             "name": "莆田市",
    //             "value": [119.007558, 25.431011, 1]
    //         }]
    let seriesData = [{
                "dsid": 592,
                "name": "厦门市",
                "value": 109
            }, {
                "dsid": 591,
                "name": "福州市",
                "value": 999
            }, {
                "dsid": 595,
                "name": "泉州市",
                "value": 499
            }, {
                "dsid": 596,
                "name": "漳州市",
                "value": 1
            }, {
                "dsid": 597,
                "name": "龙岩市",
                "value": 1
            }, {
                "dsid": 594,
                "name": "莆田市",
                "value": 1
            }];
    let convertData = function(data) {
        let scatterData = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                scatterData.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return scatterData;
    };
    option = {
        // backgroundColor: 'transparent',
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        tooltip: { //提示框组件。
            trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            formatter: '{a} <br/> {b}: {c}',
            textStyle: {
                fontSize: '24px'
            }
        },
        legend: {
            show: false,
            orient: 'horizontal', //图例的排列方向
            x: 'left', //图例的位置
            data: ['']
        },
        geo: {
            map: 'JJJ',
            left: '150',
            itemStyle: { //地图区域的多边形 图形样式
                // color: 'rgba(209,250,12,0.5)',
                normal: { //是图形在默认状态下的样式
                    color: 'rgba(37,124,169)',
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: 'rgb(249, 249, 249)'
                        },
                    },

                    borderWidth: 3,
                    borderColor: 'rgba(37,124,169)',
                    // areaColor: 'rgba(37,124,169)',
                    shadowColor: 'rgba(37,124,169)',
                    shadowOffsetY: 15,
                    shadowOffsetX: 8,
                    // shadowBlur: 3,

                },

            },

            // layoutCenter: ['50%', '30%'],
            //如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            // layoutSize: 100,
        },
        visualMap: { //颜色的设置  dataRange
            show: false,
            x: 'left',
            y: 'center',
            seriesIndex: [0],

            min: 1000,
            max: 3000,
            // splitList: [


            // ],
            //            min: 0,
            //            max: 2500,
            //            calculable : true,//颜色呈条状
            text: ['高', '低'], // 文本，默认为数值文本
            color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
            textStyle: {
                color: '#fff'
            },

        },
        toolbox: { //工具栏
            show: true,
            orient: 'vertical', //工具栏 icon 的布局朝向
            x: 'right',
            y: 'center',
            feature: { //各工具配置项。
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                }, //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
                restore: {
                    show: true
                }, //配置项还原。
                saveAsImage: {
                    show: true
                } //保存为图片。
            }
        },
        roamController: { //控制地图的上下左右放大缩小 图上没有显示
            show: false,
            x: 'right',
            mapTypeControl: {
                'china': false
            }
        },
        series: [{
                name: `行业：'全部'`,
                type: 'map',
                mapType: 'JJJ',
                // map: 'JJJ',
                // top: '90%',//组件距离容器的距离
                left: '150',
                // zoom: 1.2,
                roam: false, //是否开启鼠标缩放和平移漫游
                itemStyle: { //地图区域的多边形 图形样式
                    color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
                    normal: { //是图形在默认状态下的样式
                        label: {
                            show: true, //是否显示标签
                            textStyle: {
                                color: 'rgb(249, 249, 249)'
                            },
                            // shadowColor:'rgba(17,84,148,0.8)',
                        },

                        borderWidth: 3,
                        borderColor: 'rgba(37,124,169)',
                        areaColor: 'rgba(20,78,139,1)',
                        // shadowColor: 'rgba(20,78,139,1)',
                        // shadowOffsetY: 15,
                        // shadowOffsetX: 15,
                        // // shadowBlur: 100,
                    },
                    emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label: {
                            show: true
                        },
                        borderColor: '#3baced',
                        areaColor: '#0b558e',
                    }
                },

                data: seriesData
            },
            {
                name: '',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                color: 'rgba(209,250,12,0.5)',
                // symbolSize:50, //function (val) {
                //     var a = (maxSize4Pin - minSize4Pin) / (max - min);
                //     var b = minSize4Pin - a*min;
                //     b = maxSize4Pin - a*max;
                //     return a*val[2]+b;
                // },
                symbolSize: function(value) {
                    return value[2] / 1;
                },
                tooltip: {
                    show: false
                },
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                            fontSize: 9,
                        }
                    }
                },

                itemStyle: {
                    normal: {
                        color: 'rgba(209,250,12,0.5)', //标志颜色
                    }
                },
                zlevel: 1,
                data: convertData(seriesData),
            },
        ]
    };
    myChart.setOption(option);
});