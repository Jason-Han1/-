var value = 83;
option = {
    title: {
         text: '总数',
         subtext: 7789,
         textStyle: {
             fontSize: 40,
             // align: 'center'
         },
         subtextStyle: {
             fontSize: 30,
             color: ['#ff9d19']
         },
         x: 'center',
         y: 'center',
     },
    series: [
        // 进度圈1
        {
            type: 'pie',
            clockWise: true,
            "center": [
                "50%",
                "50%"
            ],
            "radius": [
                "46%",
                "50%"
            ],
            "startAngle": 241.6,
            "clockWise": true,
            data: [
                {
                    value: value,
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                            borderColor: '#7940FE',
                            color: '#7940FE',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        },
                    }
                },
                {
                    name: 'gap',
                    value: 100 - value,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        }
                    },
                }
            ]
        },
        // 进度圈2
        {
            type: 'pie',
            clockWise: true,
            "center": [
                "50%",
                "50%"
            ],
            "radius": [
                "52%",
                "55%"
            ],
            "startAngle": 241.6,
            "clockWise": true,
            data: [
                {
                    value: value,
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                            borderColor: "#5886f0",
                            color: "#5886f0",
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        },
                    }
                },
                {
                    name: 'gap',
                    value: 100 - value,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        }
                    },
                }
            ]
        },
    ]
}