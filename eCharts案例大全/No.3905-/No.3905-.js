var data = "/asset/get/s/data-1614935658057-1nj-C87aLA.json";

$.getJSON(data, function(data) {
    echarts.registerMap("北京市", data);
    option = {
        backgroundColor: '#000',
        color: ["#32B9FF", "#D24651"],
        legend: {
            top: 8,
            right: 10,
            data: [{
                    name: "安全点位",
                    icon: "circle"
                },
                {
                    name: "报警点位",
                    icon: "circle"
                }
            ],
            textStyle: {
                color: "#fff",
                fontSize: 14
            }
        },
        geo: {
            type: "map",
            map: "北京市",
            layoutCenter: ["50%", "50%"],
            layoutSize: "150%",
            show: true,
            roam: true,
            scaleLimit: {
                max: 10,
                min: 0
            },
            label: {
                normal: {
                    show: false, // 是否展示地区名称
                    textStyle: {
                        color: "#fff"
                    }
                },
                emphasis: {
                    show: false, // 滑过是否展示地区名称
                    textStyle: {
                        color: "#fff"
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: "#143DBC",
                    borderColor: "#2174E1",
                    borderWidth: 2,
                    shadowColor: "#2174E1",
                    shadowBlur: 5
                },
                emphasis: {
                    areaColor: "#143DBC"
                }
            }
        },
        series: [{
                // type: "custom",
                name: "安全点位",
                type: "scatter",
                coordinateSystem: "geo",
                hoverAnimation: false,
                symbol: 'image://asset/get/s/data-1614936189028-ZJls01OtT.png',
                symbolSize: [24, 30],
                label: {
                    show: true,
                    position: "bottom",
                    color: "#fff",
                    formatter(params) {
                        return params.name;
                    }
                },
                data: [{
                        name: "点位1",
                        value: [116.534124, 40.318936]
                    },
                    {
                        name: "点位2",
                        value: [116.486409, 40.132489]
                    },
                    {
                        name: "点位3",
                        value: [116.396794, 40.195309]
                    },
                    {
                        name: "点位5",
                        value: [116.286968, 39.863642]
                    },
                    {
                        name: "点位6",
                        value: [116.195445, 39.914601]
                    },
                    {
                        name: "点位7",
                        value: [116.139157, 39.735535]
                    },
                    {
                        name: "点位8",
                        value: [116.658603, 39.902486]
                    }
                ]
            },
            {
                // type: "custom",
                name: "报警点位",
                type: "scatter",
                coordinateSystem: "geo",
                hoverAnimation: false,
                symbol: "image://asset/get/s/data-1614936225209-J4259E7SH.png",
                symbolSize: [24, 30],
                label: {
                    show: true,
                    position: "bottom",
                    color: "#fff",
                    formatter(params) {
                        return params.name;
                    }
                },
                // label: {
                //     show: true,
                //     padding: [8, 10, 18, 40],
                //     position: [18, -85],
                //     color: "#fff",
                //     backgroundColor: {
                //         image: '/asset/get/s/data-1614936141734-WnHi1FzA8.png'
                //     },
                //     borderRadius: 6,
                //     formatter(params) {
                //         //data[params.dataIndex]
                //         let arr = [
                //             "报警类型：" + params.data.alarmType,
                //             "报警时间：" + params.data.alarmTime,
                //             "报警次数：" + params.data.alarmCount + "次"
                //         ];
                //         return arr.join("\n");
                //     },
                //     textStyle: {
                //         align: "left",
                //         lineHeight: 20
                //     }
                // },
                data: [{
                        name: "点位9",
                        value: [116.235906, 40.218085],
                        alarmType: '类型1',
                        alarmTime: '2020-12-1 12:00',
                        alarmCount: '3'
                    },
                    {
                        name: "点位4",
                        value: [116.310316, 39.956074],
                        alarmType: '类型3',
                        alarmTime: '2020-12-1 15:12',
                        alarmCount: '3'
                    },
                    {
                        name: "点位10",
                        value: [116.653525, 40.128936],
                        alarmType: '类型2',
                        alarmTime: '2020-12-1 09:01',
                        alarmCount: '3'
                    }
                ]
            }
        ]
    }
    myChart.setOption(option);
})