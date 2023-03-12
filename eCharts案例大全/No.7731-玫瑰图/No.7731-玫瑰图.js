var labelV = {
        position: "inner",
        fontSize: 8,
        align: "right",
        padding: 4,
    },

    option = {
        series: [{
                type: 'pie',
                clockWise: false,
                radius: ["20%", "80%"],
                center: ['50%', '50%'],
                //  startAngle: 150,
                roseType: 'area',

                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                "#d34c57", "#fb8d37", "#01866E", "#2ED0EB", "#399EE2", "#3C6FE6", "#4345E7", "#3233E3", "#0A0D9A", "#5C10BE", "#740BEE"
                            ];
                            return colorList[params.dataIndex]
                        },

                    },
                },
                data: [{
                        value: 100,
                        name: '杭州市',
                        label: {
                            normal: {
                                formatter: '{b}\n{c}亿元',
                                padding: 4,

                            },
                            textStyle: {
                                rich: {
                                    name: {
                                        fontSize: 20
                                    },
                                    num: {
                                        fontSize: 20
                                    }
                                }
                            },

                        },
                    },
                    {
                        value: 95,
                        name: '北京市',
                        label: labelV
                    },
                    {
                        value: 90,
                        name: '南京市',
                        label: labelV
                    },
                    {
                        value: 85,
                        name: '青岛市',
                        label: labelV
                    },
                    {
                        value: 80,
                        name: '厦门市',
                        label: labelV
                    },
                    {
                        value: 75,
                        name: '宁波市',
                        label: labelV
                    },
                    {
                        value: 70,
                        name: '武汉市',
                        label: labelV
                    },
                    {
                        value: 65,
                        name: '广州市',
                        label: labelV
                    },
                    {
                        value: 60,
                        name: '上海市',
                        label: labelV
                    },
                    {
                        value: 55,
                        name: '济南市',
                        label: labelV
                    },
                    {
                        value: 50,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 45,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 40,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 35,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 30,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 25,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 20,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 15,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 10,
                        name: '测试',
                        label: labelV
                    },
                    {
                        value: 5,
                        name: '测试',
                        label: labelV
                    },
                ]

            }

        ]

    };