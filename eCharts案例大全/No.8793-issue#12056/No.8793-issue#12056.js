 option = {
              xAxis: [
                        {
                            data: [
                                "Год - 2",
                                "Год - 1",
                                "Год"
                            ],
                        },
                    ],
                    yAxis: [
                        {
                            type: "value"
                        }
                    ],
                    series: [
                        {
                            type: "bar",
                            data: [
                                {
                                    value: 83
                                },
                                {
                                    value: 82
                                },
                                {
                                    value: 81
                                }
                            ],
                            stack: "defaultStack"
                        },
                        {
                            type: "bar",
                            data: [
                                {
                                    value: 14,
                                },
                                {
                                    value: 15,
                                },
                                {
                                    value: 17,
                                }
                            ],
                        stack: "defaultStack"
                        },
                        {
                        type: "bar",
                        data: [
                            {
                                value: 3
                            },
                            {
                                value: 3
                            },
                            {
                                value: 2
                            }
                        ],
                        stack: "defaultStack"
                        },
                        {
                            type: "bar",
                            stack: "defaultStack",
                            data: [2, 3, 4],
                            tooltip: {
                                show: false,
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    fontSize: 25,
                                }
                            }
                        }
                    ],
};