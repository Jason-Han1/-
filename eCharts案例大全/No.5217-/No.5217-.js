var uploadedDataURL = "/asset/get/s/data-1604389381108-QHckRgRzF.json";

var airData = [{
        name: '北京',
        value: 49225
    },
    {
        name: '天津',
        value: 560000
    },
    {
        name: '上海',
        value: 50000
    },
    {
        name: '重庆',
        value: 247490
    },
    {
        name: '河北',
        value: 625000
    },
    {
        name: '河南',
        value: 115800
    },
    {
        name: '云南',
        value: 343739
    },
    {
        name: '辽宁',
        value: 225191
    },
    {
        name: '黑龙江',
        value: 211000
    },
    {
        name: '湖南',
        value: 537000
    },
    {
        name: '安徽',
        value: 499000
    },
    {
        name: '山东',
        value: 530381
    },
    {
        name: '新疆',
        value: 207400
    },
    {
        name: '江苏',
        value: 348600
    },
    {
        name: '浙江',
        value: 306000
    },
    {
        name: '江西',
        value: 365000
    },
    {
        name: '湖北',
        value: 374302
    },
    {
        name: '广西',
        value: 507000
    },
    {
        name: '甘肃',
        value: 263000
    },
    {
        name: '山西',
        value: 325675
    },
    {
        name: '内蒙古',
        value: 197901
    },
    {
        name: '陕西',
        value: 375000
    },
    {
        name: '吉林',
        value: 150329
    },
    {
        name: '福建',
        value: 202600
    },
    {
        name: '贵州',
        value: 470000
    },
    {
        name: '广东',
        value: 779600
    },
    {
        name: '青海',
        value: 57200
    },

    {
        name: '西藏',
        value: 24400
    },
    {
        name: '四川',
        value: 670000
    },
    {
        name: '宁夏',
        value: 60298
    },
    {
        name: '海南',
        value: 57000
    },
    // { name: '台湾', value: 88 },
    // { name: '香港', value: 66 },
    // { name: '澳门', value: 77 },
    // { name: '南海诸岛', value: 55 }
]


$.getJSON(uploadedDataURL, function(china) {
    echarts.registerMap('china', china)
    var option = {
        backgroundColor: '#000E1A',

        geo: {
            type: 'map',
            map: 'china',

            roam: true, //允许缩放及拖动

            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }

            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255, 255, 255, .5)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .5)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(255, 255, 255, .5)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: 'rgba(249,157,51, .9)',
                    borderWidth: 0
                }
            },
            // zoom: 1.2, // 初始化缩放比例
            // center: [87.617733, 43.792828], // 设置地图中心点坐标
        },
        series: [{
            data: airData,
            geoIndex: 0, // 2020各省高考报考人数的数据和第0个geo配置关联在一起
            type: 'map',
            tooltip: {
                trigger: "item",
                triggerOn: "mousemove",
                backgroundColor: "rgba(0,0,0,.8)",
                borderColor: "#3574c8",
                borderWidth: "2",
                extraCssText: "padding:10px;box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
                show: false,
                formatter: function(params) {
                    var res;
                    if (params.value > 0) {
                        res = params.data.value2 + "<br/>";
                        res += params.data.value3;
                    } else {
                        res = "";
                    }
                    return res;
                }
            },

        }],
        visualMap: {
            min: 49000,
            max: 120000,
            inRange: {
                color: ['#02BBBE', '#1C6A82', '#004D6B', '#33A4E1', '#519BB3', '#00FEE2', '#0094E4', '#408AF1']
            },
            textStyle: {
                color: 'rgba(150,173,255,1)',
                fontSize: '20'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#FABC61',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            outOfRange: {
                color: [
                    "rgba(48,59,175,1)",
                ]
            },
            calculable: true // 出现滑块

        }

    }
    myChart.setOption(option, true);
})