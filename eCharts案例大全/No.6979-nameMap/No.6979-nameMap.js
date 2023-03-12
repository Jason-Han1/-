var uploadedDataURL = "/asset/get/s/data-1594281065688-80dQTMwuL.json";


$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);

    var data = [{
            name: "澳门",
            value: 10
        },
        {
            name: "香港",
            value: 11
        },
        {
            name: "台湾省",
            value: 10
        },
        {
            name: "新疆维吾尔自治区",
            value: 106
        },
        {
            name: "宁夏回族自治区",
            value: 80
        },
        {
            name: "青海省",
            value: 64
        },
        {
            name: "甘肃省",
            value: 114
        },
        {
            name: "陕西省",
            value: 173
        },
        {
            name: "西藏自治区",
            value: 24
        },
        {
            name: "云南省",
            value: 117
        },
        {
            name: "贵州省",
            value: 103
        },
        {
            name: "四川省",
            value: 238
        },
        {
            name: "重庆市",
            value: 141
        },
        {
            name: "海南省",
            value: 92
        },
        {
            name: "广西壮族自治区",
            value: 123
        },
        {
            name: "广东省",
            value: 293
        },
        {
            name: "湖南省",
            value: 165
        },
        {
            name: "湖北省",
            value: 195
        },
        {
            name: "河南省",
            value: 235
        },
        {
            name: "山东省",
            value: 361
        },
        {
            name: "江西省",
            value: 149
        },
        {
            name: "福建省",
            value: 165
        },
        {
            name: "安徽省",
            value: 178
        },
        {
            name: "浙江省",
            value: 251
        },
        {
            name: "江苏省",
            value: 242
        },
        {
            name: "上海市",
            value: 224
        },
        {
            name: "黑龙江省",
            value: 200
        },
        {
            name: "吉林省",
            value: 180
        },
        {
            name: "辽宁省",
            value: 242
        },
        {
            name: "内蒙古自治区",
            value: 230
        },
        {
            name: "山西省",
            value: 225
        },
        {
            name: "河北省",
            value: 529
        },
        {
            name: "天津市",
            value: 295
        },
        {
            name: "北京市",
            value: 740
        }
    ];

    var option = {
        // backgroundColor: {
        //     type: 'linear',
        //     x: 0,
        //     y: 0,
        //     x2: 1,
        //     y2: 1,
        //     colorStops: [{
        //         offset: 0,
        //         color: '#0f378f'
        //     }, {
        //         offset: 1,
        //         color: '#00091a'
        //     }],
        //     globalCoord: false
        // },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['男', '女', '城镇人口', '农村人口']
        },
        visualMap: { //左边的图标
            min: 0,
            max: 100000,
            left: 26,
            bottom: 30,
            legend: false,
            seriesIndex: 1,
            pieces: [{
                gt: 800,
                // label: "> 10000人",
                color: "#7f1100"
            }, {
                gte: 600,
                lte: 800,
                // label: "1000 - 10000人",
                color: "#ff5428"
            }, {
                gte: 400,
                lt: 600,
                // label: "100 - 1000人",
                color: "#ff8c71"
            }, {
                gt: 200,
                lt: 400,
                // label: "1 - 100人",
                color: "#ffd768"
            }, {
                gt: 0,
                lt: 200,
                color: "#ffffff"
            }],
            show: !0
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            label: {
                show: true,
                color: '#fff'
            },
            emphasis: {
                label: {
                    show: false,
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9', //线
                    shadowColor: '#092f8f', //外发光
                    shadowBlur: 20
                },
                emphasis: {
                    areaColor: '#0a2dae', //悬浮区背景
                }
            }
        },
        series: [{
            name: '总人口',
            type: 'map',
            mapType: 'loudi',
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#CD4F39',
                    areaColor: '#54FF9F',
                    borderWidth: 4,
                    opacity: 0.2
                }
            },
            data: data,
        }, {
            name: "确诊病例",
            type: "map",
            geoIndex: 0,
            data: data
        }]
    }
    myChart.setOption(option)
});