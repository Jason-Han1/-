var uploadedDataURL = '/asset/get/s/data-1528971808162-BkOXf61WX.json';

$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('china', geoJson);

    var colors = ['rgba(0,255,0,0.24)', 'rgba(0,255,0,0.50)', 'rgba(0,255,0,1)']
    let chartData = [
        {
            year:2021,
            month:1,
            name: '内蒙古',
            coord: [110.3467, 41.4899],
            from: [
                { name: '甘肃', coord: [103.5901, 36.3043], value: 100 },
                { name: '宁夏', coord: [106.3586, 38.1775], value: 100 },
                { name: '青海', coord: [101.4038, 36.8207], value: 100 },
                { name: '新疆', coord: [87.9236, 43.5883], value: 100 },
                { name: '西藏', coord: [91.11, 29.97], value: 100 },
                { name: '四川', coord: [103.9526, 30.7617], value: 100 },
                { name: '重庆', coord: [108.384366, 30.439702], value: 100 },
                { name: '山东', coord: [117.1582, 36.8701], value: 100 },
                { name: '河南', coord: [113.4668, 34.6234], value: 100 },
                { name: '江苏', coord: [118.8062, 31.9208], value: 100 },
                { name: '安徽', coord: [117.29, 32.0581], value: 100 },
                { name: '湖北', coord: [114.3896, 30.6628], value: 100 },
                { name: '浙江', coord: [119.5313, 29.8773], value: 100 },
                { name: '福建', coord: [119.4543, 25.9222], value: 100 },
                { name: '江西', coord: [116.0046, 28.6633], value: 100 },
                { name: '湖南', coord: [113.0823, 28.2568], value: 100 },
                { name: '贵州', coord: [106.6992, 26.7682], value: 100 },
                { name: '云南', coord: [102.9199, 25.4663], value: 100 },
                { name: '广东', coord: [113.12244, 23.009505], value: 100 },
                { name: '广西', coord: [108.479, 23.1152], value: 100 },
                { name: '海南', coord: [110.3893, 19.8516], value: 100 },
            ],
        },
        {
            name: '重庆',
            year:2021,
            month:1,
            coord: [108.384366, 30.439702],
            from: [
                { name: '黑龙江', coord: [127.9688, 45.368], value: 100 },
                { name: '内蒙古', coord: [110.3467, 41.4899], value: 100 },
                { name: '吉林', coord: [125.8154, 44.2584], value: 100 },
                { name: '北京市', coord: [116.4551, 40.2539], value: 100 },
                { name: '辽宁', coord: [123.1238, 42.1216], value: 100 },
                { name: '河北', coord: [114.4995, 38.1006], value: 100 },
                { name: '天津', coord: [117.4219, 39.4189], value: 100 },
                { name: '山西', coord: [112.3352, 37.9413], value: 100 },
                { name: '陕西', coord: [109.1162, 34.2004], value: 100 },
                { name: '甘肃', coord: [103.5901, 36.3043], value: 100 },
                { name: '宁夏', coord: [106.3586, 38.1775], value: 100 },
                { name: '青海', coord: [101.4038, 36.8207], value: 100 },
                { name: '新疆', coord: [87.9236, 43.5883], value: 100 },
                { name: '西藏', coord: [91.11, 29.97], value: 100 },

                { name: '广西', coord: [108.479, 23.1152], value: 100 },
                { name: '海南', coord: [110.3893, 19.8516], value: 100 },
            ],
        },
    ];

    let optionXyMap01 = {
        timeline: {
            data: chartData.map((m) => {
                return m.name;
            }),
            axisType: 'category',
            autoPlay: true,
            playInterval: 3000,
            left: '10%',
            right: '10%',
            bottom: '3%',
            width: '80%',
             label: {
                normal: {
                    textStyle: {
                        color: 'rgba(2,139,255,1)'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'rgba(2,139,255,1)'
                    }
                }
            },
            
            symbolSize: 10,
            lineStyle: {
                color: 'rgba(40,68,253,0.6)'
            },
            checkpointStyle: {
                borderColor: 'rgba(113,245,247,1)',
                color: 'rgba(40,68,253,1)',
                borderWidth: 2,
            },
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                normal: {
                    color: 'rgba(40,68,253,0.6)',
                    borderColor: 'rgba(40,68,253,0.6)'
                },
                emphasis: {
                    color: 'rgba(40,68,253,0.6)',
                    borderColor: 'rgba(40,68,253,0.6)'
                }
            }
        },
        baseOption: {
            animation: true,
            animationDuration: 1000,
            animationEasing: 'cubicInOut',
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            grid: {
                right: '1%',
                top: '15%',
                bottom: '10%',
                width: '20%',
            },
            visualMap: {
                text: ['高', '低'],
                showLabel: false,
                left: '3%',
                bottom: '20%',
                calculable: true,
                seriesIndex: [1, 2, 3],
                inRange: {
                    color: colors,
                },
                textStyle: {
                    color: '#24CFF4',
                },
            },
            tooltip: {
                trigger: 'axis', // hover触发器
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        color: 'rgba(150,150,150,0.1)', //hover颜色
                    },
                },
            },
            geo: {
                show: true,
                map: 'china',
                roam: false,
                zoom: 1,
                label: {
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#092765', //地图背景色
                        borderColor: 'RGB(083, 217, 255,0.3)', //省市边界线00fcff 516a89
                        borderWidth: 5,
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowBlur: 5,
                    },
                    emphasis: {
                        areaColor: 'rgba(2,139,255,1)',
                        borderWidth: 0,
                    },
                    emphasis: {
                        color: 'RGB(037, 120, 184)', //悬浮背景
                        borderWidth: 0,
                    },
                },
            },
        },
        options: [],
    };
    for (var it of chartData) {
        optionXyMap01.options.push({
            backgroundColor: '#000000',

            series: [
                //地图
                {
                    type: 'map',
                    map: 'china',
                    roam: false,
                    //geoIndex: 0,
                    //aspectScale: 1, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff',
                            },
                        },
                    },

                    itemStyle: {
                        normal: {
                            borderColor: 'RGB(083, 217, 255,0.5)', //省市边界线00fcff 516a89
                            borderWidth: 1,
                            areaColor: 'RGB(000, 038, 109)',
                        },
                        emphasis: {
                            areaColor: 'RGB(037, 120, 184)', //悬浮背景
                            borderWidth: 0,
                        },
                    },
                    animation: true,
                    data: it.from.map((item) => {
                        return { name: item.name, value: [...item.coord, item.value] };
                    }),
                },
                //地图线的动画效果
                {
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 5, //箭头指向速度，值越小速度越快
                        trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 6, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            //color: colors[0],
                            width: 0.1, //尾迹线条宽度
                            opacity: 0.5, //尾迹线条透明度
                            curveness: 0.3, //尾迹线条曲直度
                        },
                    },

                    data: it.from.map((item) => {
                        return [
                            {
                                coord: item.coord,
                                value: item.value,
                            },
                            {
                                coord: it.coord,
                                name:it.name
                            },
                        ];
                    }),
                },
                {
                    //文字和标志
                    name: 'light',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: it.from.map((item) => {
                        return { name: item.name, value: [...item.coord, item.value] };
                    }),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            //color: colors[0],
                        },
                    },
                },
                //地图点的动画效果
                {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: it.from.map((item) => {
                        return { name: item.name, value: [...item.coord, item.value] };
                    }),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke',
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            //color: colors[0],
                            shadowBlur: 10,
                           // shadowColor: colors[0],
                        },
                    },
                    zlevel: 1,
                },
            ],
        });
    }
    myChart.setOption(optionXyMap01);
});
