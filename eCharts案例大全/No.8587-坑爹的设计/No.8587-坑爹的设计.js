option = {
    calculable: true,
    series: [

        {
            name: '弧度',
            type: 'pie',
            radius: [100, 150],
            center: ['50%', '50%'],
            data: [{
                    value: 100,
                    name: 'rose1',
                    itemStyle: {
                        color: '#ff4236'
                    },
                    label: {
                        color: "#333333",
                        fontSize: 14,
                        formatter: '{c}',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                },
                {
                    value: 100,
                    name: 'rose2',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 200,
                    name: 'rose3',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '弧度',
            type: 'pie',
            radius: [100, 120],
            center: ['50%', '50%'],
            data: [{
                    value: 100,
                    name: 'rose1',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 200,
                    name: 'rose3',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 100,
                    name: 'rose2',
                    itemStyle: {

                        color: '#348fe6'
                    },
                    label: {
                        color: "#333333",
                        fontSize: 14,
                        formatter: '{c}',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                }
            ]
        },
        {
            name: '弧度',
            type: 'pie',
            radius: [100, 110],
            center: ['50%', '50%'],
            data: [{
                    value: 100,
                    name: 'rose1',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 200,
                    name: 'rose3',
                    itemStyle: {
                     color: '#625bef'
                    },
                    label: {
                       color: "#333333",
                        fontSize: 14,
                        formatter: '{c}',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                },
                {
                    value: 100,
                    name: 'rose2',
                    itemStyle: {
                        color: "transparent"
                    }
                },
            ]
        },
    ]
};