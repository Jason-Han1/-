var uploadedDataURL = "/asset/get/s/data-1598770376853-S8m1N7TvW.json";
//https://www.makeapie.com//asset/get/s/data-1598770376853-S8m1N7TvW.json
let data1 = [{
        name: "南海诸岛",
        show:true,
        value: 0
    },
    {
        name: '北京市',
        value: 54
    },
    {
        name: '天津市',
        value: 13
    },
    {
        name: '上海市',
        value: 40
    },
    {
        name: '重庆市',
        value: 75
    },
    {
        name: '河北省',
        value: 13
    },
    {
        name: '河南省',
        value: 83
    },
    {
        name: '云南省',
        value: 11
    },
    {
        name: '辽宁省',
        value: 19
    },
    {
        name: '黑龙江省',
        value: 15
    },
    {
        name: '湖南省',
        value: 69
    },
    {
        name: '安徽省',
        value: 60
    },
    {
        name: '山东省',
        value: 39
    },
    {
        name: '新疆维吾尔自治区',
        value: 4
    },
    {
        name: '江苏省',
        value: 31
    },
    {
        name: '浙江省',
        value: 104
    },
    {
        name: '江西省',
        value: 36
    },
    {
        name: '湖北省',
        value: 1052
    },
    {
        name: '广西壮族自治区',
        value: 33
    },
    {
        name: '甘肃省',
        value: 7
    },
    {
        name: '山西省',
        value: 9
    },
    {
        name: '内蒙古自治区',
        value: 7
    },
    {
        name: '陕西省',
        value: 22
    },
    {
        name: '吉林省',
        value: 4
    },
    {
        name: '福建省',
        value: 18
    },
    {
        name: '贵州省',
        value: 5
    },
    {
        name: '广东省',
        value: 98
    },
    {
        name: '青海省',
        value: 1
    },
    {
        name: '西藏自治区',
        value: 0
    },
    {
        name: '四川省',
        value: 44
    },
    {
        name: '宁夏回族自治区',
        value: 4
    },
    {
        name: '海南省',
        value: 22
    },
    {
        name: '台湾省',
        value: 3
    },
    {
        name: '香港特别行政区',
        value: 5
    },
    {
        name: '香港特别行政区',
        value: 5
    },
    {
        name: '西藏自治区',
        value: 3
    }
]
$.getJSON(uploadedDataURL, function(geoJson) {
     echarts.registerMap('china', geoJson)
                  myChart.setOption({
                visualMap: {
                    min: 0,
                    max: 1000,
                    left: 26,
                    bottom: 40,
                    showLabel: !0,
                    text: ["高", "低"],
                    pieces: [{
                        gt: 100,
                        label: "> 100",
                        color: "#7f1100"
                    }, {
                        gte: 10,
                        lte: 100,
                        label: "10 - 100",
                        color: "#ff5428"
                    }, {
                        gte: 1,
                        lt: 10,
                        label: "1 - 9",
                        color: "#ff8c71"
                    }, {
                        gt: 0,
                        lt: 1,
                        label: "<9",
                        color: "#ffd768"
                    }, {
                        value: 0,
                        color: "#b7d6f3"
                    }],
                    show: !0
                },
                series: [{
                    name: 'china',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true,
                            fontSize: "14",
                            color: "#fff"
                        }
                    },
                    zoom: 5,
                    center: [110.97, 35.71],
                    roam: true,
                    itemStyle: {
                        emphasis: {
                            areaColor: '#ff6700',
                        }
                    },

                    data: data1
                }]
            })
})