option = {
            // backgroundColor: "#0B1837",
            color: ["#48b8ef", "#f48953", "#f9de69", "#666262", "#f96969", "#77e07d"],
            grid: {
                left: -100,
                top: 50,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                type: "scroll",
                orient: "vartical",
                // x: "right",
                top: "center",
                right: "15",
                // bottom: "0%",
                itemWidth: 16,
                itemHeight: 8,
                itemGap: 16,
                textStyle: {
                    color: '#00deff',
                    fontSize: 12,
                    fontWeight: 0
                },
                data: ['机械维修1', '机械维修2', '机械维修3', '机械维修4', '机械维修5', '机械维修6']
            },
            polar: {},
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B4A6B",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    color: "#0B4A6B",
                    margin: 8,
                    fontSize: 16
                },
            },
            radiusAxis: {
                min: 40,
                max: 120,
                interval: 20,
                axisLine: {//内短横线
                    show: false,
                    lineStyle: {
                        color: "#f8f8f8",
                        width: 1,
                        type: "solid"
                    },
                },
                // 标题
                axisLabel: {
                    formatter: '{value} %',
                    show: false,
                    padding: [0, 0, 25, 0],
                    color: "#ffffff",
                    fontSize: 16
                },//线圈
                splitLine: {
                    lineStyle: {
                        color: "#0eaac2",
                        width: 2,
                        type: "solid"
                    }
                }
            },
            calculable: true,
            series: [{
                type: 'pie',
                radius: ["5%", "10%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                //内圈
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#00deff"
                        }
                    }
                }]
            }, {
                type: 'pie',
                radius: ["90%", "95%"],
                hoverAnimation: false,
                shadowColor: 'rgba(0,255,225,1)',
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "",
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0eaac2"
                        }
                    }
                }]
            }, {
                stack: 'a',
                type: 'pie',
                radius: ['20%', '80%'],
                roseType: 'area',
                zlevel: 10,
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            fontSize: 12,
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 20,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                        value: 12,
                        name: '机械维修1'
                    },
                    {
                        value: 20,
                        name: '机械维修2'
                    },
                    {
                        value: 100,
                        name: '机械维修3'
                    },
                    {
                        value: 80,
                        name: '机械维修4'
                    },
                    {
                        value: 100,
                        name: '机械维修5'
                    },
                    {
                        value: 100,
                        name: '机械维修6'
                    }
                ]
            }, ]
        }
