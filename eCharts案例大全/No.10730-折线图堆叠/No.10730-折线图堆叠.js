option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['音乐喷泉','断桥残雪','太子湾','灵隐景区','岳飞墓']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
                type: 'value',
                min: 0,
                max: 24,
                interval: 3,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#121e43', //左边线的颜色
                    }
                },
                axisLabel: {
                    formatter: function (value, index) {
                        if(value<10) {
                            value = '0'+value
                        }
                        return value + ':00';
                    },
                    textStyle: {
                        color: '#4875c2', //坐标值得具体的颜色
                    }
                },
            },
    // xAxis: {
    //     type: 'category',
    //             boundaryGap: false,
    //             splitLine: {
    //                 show: false
    //             },
    //             axisLine: {
    //                 lineStyle: {
    //                     color: '#121e43', //左边线的颜色
    //                 }
    //             },
    //             axisLabel: {
    //                 formatter: function (value, index) {
    //                     if (parseInt(value) < 10) {
    //                         value = '0' + value
    //                     }
    //                     return value + ':00';
    //                 },
    //                 textStyle: {
    //                     color: '#4875c2', //坐标值得具体的颜色
    //                 }
    //             },
    //             interval: 3,
    //             data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23','24']
    // },
    yAxis: {
		        type: 'value',
		        axisLine: {
		            show: true,
		            lineStyle: {
		              color: '#121e43'
		            }
		          },
		          splitLine: {
		            lineStyle: {
		              color: '#0a0f33',
		            }
		          },
		          axisLabel: {
		            textStyle: {
		              color: '#4875c2'
		            }
		          }
		    },
    series: [
    {
        "name": "音乐喷泉",
        "type": "line",
        "data": [
            [
                1,
                "284918"
            ],
            [
                6,
                "281013"
            ],
            [
                10,
                "279809"
            ],
            [
                11,
                "281013"
            ],
            [
                12,
                "286071"
            ],
            [
                13,
                "288394"
            ],
            [
                16,
                "290035"
            ],
            [
                18,
                "289406"
            ],
            [
                23,
                "281013"
            ]
        ]
    },
    {
        "name": "断桥残雪",
        "type": "line",
        "data": [
            [
                1,
                "175316"
            ],
            [
                6,
                "175732"
            ],
            [
                10,
                "173263"
            ],
            [
                11,
                "175732"
            ],
            [
                12,
                "178014"
            ],
            [
                13,
                "178175"
            ],
            [
                16,
                "179046"
            ],
            [
                18,
                "176005"
            ],
            [
                23,
                "175732"
            ]
        ]
    },
    {
        "name": "太子湾",
        "type": "line",
        "data": [
            [
                1,
                "25704"
            ],
            [
                6,
                "28633"
            ],
            [
                10,
                "27562"
            ],
            [
                11,
                "28633"
            ],
            [
                12,
                "28564"
            ],
            [
                13,
                "27248"
            ],
            [
                16,
                "27600"
            ],
            [
                18,
                "28805"
            ],
            [
                23,
                "28633"
            ]
        ]
    },
    {
        "name": "灵隐景区",
        "type": "line",
        "data": [
            [
                1,
                "16100"
            ],
            [
                6,
                "13426"
            ],
            [
                10,
                "14301"
            ],
            [
                11,
                "13426"
            ],
            [
                12,
                "13138"
            ],
            [
                13,
                "13283"
            ],
            [
                16,
                "13427"
            ],
            [
                18,
                "14323"
            ],
            [
                23,
                "13426"
            ]
        ]
    },
    {
        "name": "岳飞墓",
        "type": "line",
        "data": [
            [
                1,
                "35814"
            ],
            [
                6,
                "36141"
            ],
            [
                10,
                "34703"
            ],
            [
                11,
                "36141"
            ],
            [
                12,
                "38088"
            ],
            [
                13,
                "38271"
            ],
            [
                16,
                "37393"
            ],
            [
                18,
                "34835"
            ],
            [
                23,
                "36141"
            ]
        ]
    }
]
};
