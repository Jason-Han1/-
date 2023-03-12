var uploadedDataURL = "/asset/get/s/data-1536199082590-rJQ3F-RvQ.json";



$.get(uploadedDataURL, function(geoJson) {

    echarts.registerMap('china', geoJson);

    option = {
        backgroundColor: "#181C28",
        title: [{
            text: '小麦种植项目在全国的分布',
            id: "map",
            textStyle: {
                color: "blue"
            },
            left: "10%",
            subtext:"数据来自木可的虚构"

        }],
        tooltip: {},
        geo: {
            map: "china",
            left: "10%",
            label: {
                show: true,
                position: ["50", "50"],
                distance: 30,
                color: "#fff",
                fontWeight: 500,
                fontSize: 16
            },
            itemStyle: {
                normal: {
                    areaColor: "#0098FF",
                    borderWidth: 3,
                    borderColor: "#181C28"

                }
            },
            emphasis: {
                label: {
                    color: "#fff"
                },
                itemStyle: {
                    areaColor: "#0371FE",
                }
            },
            regions: [{
                name: '南海诸岛',
                itemStyle: {
                    normal: {
                        borderColor: "#0098FF"
                    }
                }
            }]
        },
        visualMap: {
            min: 800,
            max: 50000,
            text: ['High', 'Low'],
           textStyle:{
               color:"#fff"
           },
            calculable: false,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        series: [{
            name: '小麦分布',
            type: 'map',
            // mapType: 'geo', // 自定义扩展图表类型
            geoIndex: 0,
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [{
                    name: '北京',
                    value: 20057.34
                },
                {
                    name: '新疆',
                    value: 15477.48
                },
                {
                    name: '西藏',
                    value: 31686.1
                },
                {
                    name: '青海',
                    value: 6992.6
                },
                {
                    name: '内蒙古',
                    value: 44045.49
                },
                {
                    name: '甘肃',
                    value: 40689.64
                },
                {
                    name: '四川',
                    value: 37659.78
                },
                {
                    name: '云南',
                    value: 45180.97
                },
                {
                    name: '重庆',
                    value: 55204.26
                },
                {
                    name: '贵州',
                    value: 21900.9
                },
                {
                    name: '广西',
                    value: 4918.26
                },
                {
                    name: '广东',
                    value: 5881.84
                },
                {
                    name: '福建',
                    value: 4178.01
                },
                {
                    name: '香港',
                    value: 2227.92
                },
                {
                    name: '台湾',
                    value: 2180.98
                },
                {
                    name: '南海诸岛',
                    value: 9172.94
                },
                {
                    name: '福建',
                    value: 3368
                },
                {
                    name: '江西',
                    value: 806.98
                }
            ],


        }]


    };

    myChart.setOption(option)
})