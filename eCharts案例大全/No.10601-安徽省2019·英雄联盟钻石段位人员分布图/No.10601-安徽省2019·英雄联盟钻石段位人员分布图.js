/**
 本例主要需要引入对应省份json数据，
 后通过registerMap()注册对应地图。
*/

let uploadedDataURL = "/asset/get/s/data-1564210925940-PVXI0w9yW.json";

$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('lol', geoJson); // 自定义地图
    let geoCoordMap = {
        '合肥': [117.37, 31.786],
        '六安': [116.27, 31.586],
        '滁州': [118.07, 32.486],
        '蚌埠': [117.27, 33.086],
        '淮南': [116.87, 32.586],
        '宿州': [117.37, 33.716],
        '淮北': [116.67, 33.686],
        '亳州': [116.27, 33.386],
        '阜阳': [115.57, 32.916],
        '安庆': [116.47, 30.586],
        '池州': [117.47, 30.286],
        '黄山': [118.17, 29.886],
        '宣城': [118.87, 30.716],
        '芜湖': [118.17, 31.186],
        '马鞍山': [118.298, 31.676],
        '铜陵': [117.47, 30.856],
    };
    let data = [{
            name: '合肥',
            value: 500
        },
        {
            name: '六安',
            value: 470
        },
        {
            name: '滁州',
            value: 0
        },
        {
            name: '蚌埠',
            value: 490
        },
        {
            name: '淮南',
            value: null
        },
        {
            name: '宿州',
            value: 120
        },
        {
            name: '淮北',
            value: 320
        },
        {
            name: '亳州',
            value: 110
        },
        {
            name: '阜阳',
            value: 289
        },
        {
            name: '安庆',
            value: 37
        },
        {
            name: '池州',
            value: 434
        },
        {
            name: '黄山',
            value: 117
        },
        {
            name: '宣城',
            value: 64
        },
        {
            name: '芜湖',
            value: 354
        },
        {
            name: '马鞍山',
            value: 432
        },
        {
            name: '铜陵',
            value: 190
        },
    ];

    let handleData = function(data) {
        let list = [];
        for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                list.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return list;
    };


    let option = {
        baseOption: {
            timeline: {
                show: false,
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if(!params.value) {
                        return  `${params.name}暂无钻石段位`
                    }
                    else {
                        return  `${params.name}钻石段位${params.value}人`
                    }
                },
            },
        },
        options: [{
            backgroundColor: "#051835",
            title: {
                text: '安徽省2019·英雄联盟钻石段位人员分布图',
                left: 'center',
                top: "10",
                textStyle: {
                    color: '#ffffff',
                    fontSize: 24,
                }
            },
            visualMap: {
                min: 0,
                max: 500,
                left: '20',
                bottom: '50',
                text: ['500', '0'],
                calculable: false,
                inRange: {
                    color: ['#fefef9', '#f5e9a3', '#f0c291', '#c6202f']
                },
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                },
                itemWidth: 30,
                itemHeight: 150,
            },
            geo: {
                show: true,
                map: 'lol',
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: 'transparent',
                        shadowColor: 'transparent',
                        shadowBlur: 30
                    },
                    emphasis: {
                        areaColor: '#000',
                    }
                }
            },
            "series": [{
                    name: 'light',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: handleData(data),
                    symbolSize: 1,
                    label: {
                        normal: {
                            formatter: '{b}',
                            fontSize: 10,
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ccc',
                            areaColor: 'transparent',
                            borderColor: 'transparent',
                            label: {
                                show: true,
                                textStyle: {
                                    color: "#000",
                                    fontSize: 12
                                }
                            }
                        },
                    }
                },
                {
                    center: "center",
                    "data": data,
                    "label": {
                        "emphasis": {
                            "show": false
                        },
                        "normal": {
                            "show": false
                        }
                    },
                    "mapType": "lol",
                    "roam": false,
                    "type": "map",
                    itemStyle: { //地图区域的多边形 图形样式
                        // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
                        normal: { //是图形在默认状态下的样式
                            label: {
                                show: true, //是否显示标签
                                textStyle: {
                                    color: 'transparent'
                                },
                            },
                            // borderWidth: 1,
                            // borderColor: '#000',
                            // areaColor: '#000',
                        },
                        emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                            borderColor: '#28729f',
                            areaColor: '#f0c291',
                        }
                    }
                }
            ]
        }]
    }
    myChart.setOption(option);
});