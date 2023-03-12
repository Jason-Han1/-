//var tianjin = "/asset/get/s/data-1525844720391-Skugj-g0f.json";
//var uploadedDataURL = "/asset/get/s/data-1520413844487-rknqhXp_f.json";
var uploadedDataURL = "/asset/get/s/data-1482909900836-H1BC_1WHg.json";

$.get(uploadedDataURL, function(shJson) {
    echarts.registerMap('shanghai', shJson);
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'shanghai'
        }]
    });

    var geoCoordMap = {
        '黄浦区': [121.490317, 31.222771],
        '徐汇区': [121.43752, 31.179973],
        '长宁区': [121.4222, 31.218123],
        '静安区': [121.448224, 31.229003],
        '普陀区': [121.392499, 31.241701],
        '闸北区': [121.465689, 31.25318],
        '虹口区': [121.491832, 31.26097],
        '杨浦区': [121.522797, 31.270755],
        '闵行区': [121.375972, 31.111658],
        '宝山区': [121.489934, 31.398896],
        '嘉定区': [121.250333, 31.383524],
        '浦东新区': [121.7795171, 31.13357039],
        '金山区': [121.330736, 30.724697],
        '松江区': [121.223543, 31.03047],
        '青浦区': [121.113021, 31.151209],
        '奉贤区': [121.458472, 30.912345],
        '崇明县': [121.397516, 31.626946],
    };

    geoCoordMap = {
        '国江路停车场': [121.507594, 31.3471609],
        '市光路停车场': [121.51577, 31.312991],
        '闸殷路停车场': [121.529438, 31.338194],
        '国和路停车场': [121.518419, 31.3101223],
        // '长江南路枢纽':[121.486276, 31.3324719],
        // '长江西路枢纽':[121.44045, 31.331326],
        '逸仙路停车场': [121.48965, 31.297545],

        '内江路停车场': [121.54414, 31.2814823],
        '宝杨路停车场': [121.472237, 31.39105405],
        '月浦停车场': [121.418647, 31.402487],
        '南陈路停车场': [121.395156, 31.303682],
        '共和新路停车场': [121.4498947, 31.289106],
        '曹杨路停车场': [121.412671, 31.2412991],
        '武宁路停车场': [121.420969, 31.2397993],
        '真南路停车场': [121.384363, 31.269245],
        '天山路停车场': [121.379299, 31.2131657],
        '云岭路停车场': [121.385173, 31.222708],
        '莘庄停车场': [121.383896, 31.09950134],
        '漕宝路停车场': [121.3730387, 31.1645353],
        '重庆南场停车场': [121.4731173, 31.2106010],
        '斜土停车场': [121.4537303, 31.19446366],
        '申昆路停车场': [121.3342218, 31.1721365],
        // '长江西路枢纽':[121.44045, 31.331326],
        // '长江西路枢纽':[121.44045, 31.331326],
        
        '虹桥东枢纽站':[121.32478, 31.1988275],
        '虹桥西枢纽站':[121.3165836, 31.19750598],
        '申昆路枢纽站':[121.3342218, 31.1721365],
        '江月路枢纽站':[121.509219, 31.0838135],
        '沪军营路枢纽站':[121.4981799, 31.2060037],
        '十六铺枢纽站':[121.4952777, 31.2289926],
        '上海南站枢纽站':[121.4308993, 31.153357445],
        '宜虹路枢纽站':[121.396803, 31.170071],
        '静安寺枢纽站':[121.446735, 31.2261715],
        '中山公园枢纽站':[121.41602922, 31.2161294],
        '共和新路枢纽站':[121.447888, 31.2956888],
        '沪太路枢纽站':[121.418427, 31.292984],
        '江杨北路枢纽':[121.439498, 31.40713],
        '富锦路枢纽':[121.42353, 31.394822],
        '铁山路枢纽':[121.452882, 31.391196],
        '吴淞码头枢纽':[121.501017, 31.378419],
        '蕰川路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
        '长江西路枢纽':[121.44045, 31.331326],
    }

    var minSendNum = 0,
        maxSendNum = 1000
    var data = [{
        name: '黄浦区',
        value: 219
    }, {
        name: '徐汇区',
        value: 339
    }, {
        name: '长宁区',
        value: 412
    }, {
        name: '静安区',
        value: 429
    }, {
        name: '普陀区',
        value: 389
    }, {
        name: '闸北区',
        value: 352
    }, {
        name: '虹口区',
        value: 329
    }, {
        name: '杨浦区',
        value: 532
    }, {
        name: '闵行区',
        value: 299
    }, {
        name: '宝山区',
        value: 139
    }, {
        name: '嘉定区',
        value: 440
    }, {
        name: '浦东新区',
        value: 890
    }, {
        name: '金山区',
        value: 652
    }, {
        name: '松江区',
        value: 415
    }, {
        name: '青浦区',
        value: 329
    }, {
        name: '奉贤区',
        value: 752
    }, {
        name: '崇明县',
        value: 399
    }, ]

    data = [{
            name: '国江路停车场',
            value: 15
        },
        {
            name: '市光路停车场',
            value: 15
        },
        {
            name: '闸殷路停车场',
            value: 15
        },
        {
            name: '国和路停车场',
            value: 15
        },
        {
            name: '逸仙路停车场',
            value: 15
        },

        {
            name: '内江路停车场',
            value: 15
        },
        {
            name: '宝杨路停车场',
            value: 15
        },
        {
            name: '月浦停车场',
            value: 15
        },
        {
            name: '南陈路停车场',
            value: 15
        },
        {
            name: '共和新路停车场',
            value: 15
        },
        {
            name: '曹杨路停车场',
            value: 15
        },
        {
            name: '武宁路停车场',
            value: 15
        },
        {
            name: '真南路停车场',
            value: 15
        },
        {
            name: '天山路停车场',
            value: 15
        },
        {
            name: '云岭路停车场',
            value: 15
        },
        {
            name: '莘庄停车场',
            value: 15
        },
        {
            name: '漕宝路停车场',
            value: 15
        },
        {
            name: '重庆南场停车场',
            value: 15
        },
        {
            name: '斜土停车场',
            value: 15
        },
        {
            name: '申昆路停车场',
            value: 15
        },
    ];
    var data2 = [
        {
            name:'虹桥东枢纽站',
            value: 15
        },
        {
            name:'虹桥西枢纽站',
            value: 15
        },
        {
            name:'申昆路枢纽站',
            value: 15
        },
        {
            name:'江月路枢纽站',
            value: 15
        },
    ];

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };


    option = {
        backgroundColor: '#000',
        color:[ '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        title: {
            text: '上海市20个场站示意地图',
            subtext: '',
            x: 'left',
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            show: false,
            trigger: 'item',
            backgroundColor: '#09bdb1',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value;
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        legend: {
            orient: 'vertical',
            top: 'top',
            left: 'right',
            data: ['停车场'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: { //颜色的设置  dataRange
            show: false,
            x: 'left',
            y: 'center',
            seriesIndex: [1],
            min: 70,
            max: 90,
            text: ['高', '低'], // 文本，默认为数值文本
            textStyle: {
                color: '#fff'
            },
            inRange: {
                color: ['#5db8ea']

            }
        },
        geo: {
            map: 'shanghai',
            //视角缩放比例
            zoom: 3,
            //鼠标缩放和平移
            roam: true,
            //显示文本样式
            label: {
                show: false
            },
            itemStyle: {
                areaColor: '#071446',// 地图色块颜色
                borderColor: '#f9f9fd',//  地图区域边框颜色
                borderWidth: 1
            },
            emphasis: {
                label: {
                    show: false
                },
                itemStyle: {
                    areaColor: '#191747',
                    borderWidth: 0
                }
            }
        },
        series: [{
            name: '停车场',
            type: 'effectScatter',
            left: '150',
            coordinateSystem: 'geo',
            // data: convertData(data),
            symbolSize: function(val) {
                return 15;
            },
            symbol:'circle',
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#ffe3bb', //字体颜色
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    // color: ['#7ee8ff', '#42ddff', '#a9c6e7'],
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#7ee8ff' // 0% 处的颜色
                        }, {
                            offset: 0.3, color: '#42ddff' // 100% 处的颜色
                        }, {
                            offset: 1, color: '#a9c6e7' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowBlur: 0,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 2
        }, {
            name: '枢纽站',
            type: 'effectScatter',
            left: '150',
            coordinateSystem: 'geo',
            symbol:'pin',//图标
            data: convertData(data2),
            symbolSize: function(val) {
                return 15;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#fff', //字体颜色
                    show: true
                }
            },
            itemStyle: {
                normal: {
        //             color: '#fff',// 图标 颜色
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#ffcb75' // 0% 处的颜色
                        }, {
                            offset: 0.3, color: '#ffebc3' // 100% 处的颜色
                        }, {
                            offset: 1, color: '#f8dca2' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowBlur: 0,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 3
        }, {
            type: 'map',
            mapType: 'shanghai',
            geoIndex: 0,
            aspectScale: 1, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            roam: true,
            animation: false,
            zoom: 3,
            itemStyle: { //地图区域的多边形 图形样式
                color: '#6f6ccf',// 图标颜色
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: false, //是否显示标签
                        textStyle: {
                            color: 'transparent'
                        },
                    },
                    borderWidth: 1,
                    borderColor: '#6f6ccf',
                    areaColor: '#6f6ccf',
                },
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: false,
                        textStyle: {
                            color: 'transparent'
                        },
                    },
                    borderColor: '#28729f',
                    areaColor: '#9ea9f7',
                }
            },

            data: data
        }]
    };
    myChart.setOption(option);
})
// })