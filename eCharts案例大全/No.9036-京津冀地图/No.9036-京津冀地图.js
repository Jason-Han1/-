const JJJ = "/asset/get/s/data-1540869454345-3FYx9ANOY.json";

$.getJSON(JJJ, mapData => {
    echarts.registerMap('JJJ', mapData);
    // myChart.hideLoading();
    const geoCoordMap = {
        '北京': [116.405285, 39.904989],
        '天津': [117.190182, 39.125596],
        '承德市': [117.939152, 40.976204],
        '张家口市': [114.884091, 40.811901],
        '秦皇岛市': [119.586579, 39.942531],
        '唐山市': [118.175393, 39.635113],
        '廊坊市': [116.704441, 39.523927],
        '保定市': [115.482331, 38.867657],
        '沧州市': [116.857461, 38.310582],
        '石家庄市': [114.502461, 38.045474],
        '衡水市': [115.665993, 37.735097],
        '邢台市': [114.508851, 37.0682],
        '邯郸市': [114.490686, 36.612273],
    };
    let seriesData = [{
            name: "北京",
            value: 2350
        },
        {
            name: "天津",
            value: 3231
        },
        {
            name: "石家庄市",
            value: 1234
        },
        {
            name: "唐山市",
            value: 1234
        },
        {
            name: "邯郸市",
            value: 1234
        },
        {
            name: "秦皇岛市",
            value: 1234
        },
        {
            name: "邢台市",
            value: 1234
        },
        {
            name: "保定市",
            value: 1234
        },
        {
            name: "张家口市",
            value: 1234
        },
        {
            name: "承德市",
            value: 1234
        },
        {
            name: "廊坊市",
            value: 1234
        },
        {
            name: "沧州市",
            value: 1234
        },
        {
            name: "衡水市",
            value: 1234
        }
    ];
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
                    return value[2] / 100;
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