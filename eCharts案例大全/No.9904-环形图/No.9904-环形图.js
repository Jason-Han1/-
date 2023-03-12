option = {
    backgroundColor:'#0e2147',
    series: [
        {
            center: [
                "50%",
                "30%",
            ],
            radius: [
                "30%",
                "31%"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 20,
                            color:'#ffffff',
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#13b5b1",
                    borderColor: "#13b5b1",
                    borderWidth: 15
                },
            },
            data: [
                {
                    value: 52.7,
                    name: "52.7% 男"
                },
                {
                    name: " ",
                    value: 47.3,
                    itemStyle: {
                        normal: {
                            label: {
                                "show": false
                            },
                            labelLine: {
                                "show": false
                            },
                            color: "#13b5b1",
                            borderColor: "#13b5b1",
                            borderWidth: 0
                        },
                    }
                }
            ]
        },
        {
            center: [
                "50%",
                "72%"
                
            ],
            radius: [
                "30%",
                "31%"
            ],
            clockWise: false,
            hoverAnimation: false,
            type: "pie",
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 20,
                            color:'#ffffff',
                        },
                        position: "center"
                    },
                    labelLine: {
                        show: false
                    },
                    color: "#00a0e9",
                    borderColor: "#00a0e9",
                    borderWidth: 15
                },
            },
            data: [
                {
                    value: 47.3,
                    name: "47.3% 女"
                },
                {
                    name: " ",
                    value: 52.7,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: "#00a0e9",
                            borderColor: "#00a0e9",
                            borderWidth: 0
                        },
                    }
                }
            ]
        }
    ]
};