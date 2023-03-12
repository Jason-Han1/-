myChart.showLoading();


var data1 = {
    "name": "法国 夺冠",
    "children": [{
        "name": "法国4",
        "children": [{
                "name": "法国1",
                "children": [{
                        "name": "乌拉圭0",
                        "children": [{
                                "name": "乌拉圭2",

                            },
                            {
                                "name": "葡萄牙1",


                            },
                        ],
                    },

                    {
                        "name": "法国2",
                        "value": 1,
                        "children": [{
                                "name": "法国4",

                            },
                            {
                                "name": "阿根廷3",

                            },
                        ],
                    }
                ]
            },
            {
                "name": "比利时0",
                "children": [{
                        "name": "巴西1",
                        "children": [{
                                "name": "巴西2",

                            },
                            {
                                "name": "墨西哥0",

                            },
                        ],
                    },
                    {
                        "name": "比利时2",
                        "children": [{
                                "name": "比利时3",

                            },
                            {
                                "name": "日本2",

                            },
                        ],
                    }

                ]
            }
        ]

    }]
};
var data2 = {
    "name": "",
    "children": [{
        "name": "克罗地亚2",
        "children": [{
                "name": "克罗地亚2",
                "children": [{
                        "name": "俄罗斯5",
                        "children": [{
                                "name": "西班牙4",

                            },
                            {
                                "name": "俄罗斯5",


                            },
                        ],
                    },

                    {
                        "name": "克罗地亚6",
                        "value": 1,
                        "children": [{
                                "name": "克罗地亚4",

                            },
                            {
                                "name": "丹麦3",

                            },
                        ],
                    }
                ]
            },
            {
                "name": "英格兰1",
                "children": [{
                        "name": "瑞典0",
                        "children": [{
                                "name": "瑞典1",

                            },
                            {
                                "name": "瑞士0",

                            },
                        ],
                    },
                    {
                        "name": "英格兰2",
                        "children": [{
                                "name": "哥伦比亚4",

                            },
                            {
                                "name": "英格兰5",

                            },
                        ],
                    }

                ]
            }
        ]
    }]
};

var data3 = {
    "name": "积分赛",
    "children": [{
            "name": "A组",
            "children": [{
                    "name": "俄罗斯",
                },
                {
                    "name": "乌拉圭",
                },
                {
                    "name": "埃及",
                },
                {
                    "name": "沙特阿拉伯",
                },
            ]
        },
        {
            "name": "B组",
            "children": [{
                "name": "西班牙",
            }, {
                "name": "葡萄牙",
            }, {
                "name": "伊朗",
            }, {
                "name": "摩洛哥",
            }]
        },
        {
            "name": "C组",
            "children": [

                {
                    "name": "法国",
                }, {
                    "name": "丹麦",
                }, {
                    "name": "澳大利亚",
                }, {
                    "name": "秘鲁",
                }
            ]
        },
        {
            "name": "D组",
            "children": [{
                "name": "克罗地亚",
            }, {
                "name": "尼日利亚",
            }, {
                "name": "冰岛",
            }, {
                "name": "阿根廷",
            }]
        },
        {
            "name": "E组",
            "children": [{
                "name": "巴西",
            }, {
                "name": "瑞士",
            }, {
                "name": "塞尔维亚",
            }, {
                "name": "哥斯达黎加",
            }]
        },
        {
            "name": "F组",
            "children": [{
                "name": "墨西哥",
            }, {
                "name": "德国",
            }, {
                "name": "瑞典",
            }, {
                "name": "韩国",
            }]
        },
        {
            "name": "G组",
            "children": [{
                "name": "英格兰",
            }, {
                "name": "比利时",
            }, {
                "name": "突尼斯",
            }, {
                "name": "巴拿马",
            }]
        },
        {
            "name": "H组",
            "children": [{
                "name": "日本",
            }, {
                "name": "塞内加尔",
            }, {
                "name": "哥伦比亚",
            }, {
                "name": "波兰",
            }]
        },
    ],
};

myChart.hideLoading();

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },

    series: [

        {
            type: 'tree',
            name: '淘汰赛',
            data: [data1],

            top: '20%',
            left: '2%',
            bottom: '2%',
            right: '10%',
            width: '80%',
            height: '30%',

            symbolSize: 8,
            orient: 'BT',
            initialTreeDepth: 6,
            label: {
                normal: {
                    position: 'bottom',
                    verticalAlign: 'middle',
                    align: 'left',
                    distance: 8
                    //rotate: 90,

                }
            },
            lineStyle: {
                curveness: 1,
            },

            leaves: {
                label: {
                    normal: {
                        position: 'top',
                        verticalAlign: 'middle',
                        align: 'center',
                        //rotate: 90,

                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
        },
        {
            type: 'tree',
            name: '淘汰赛',
            data: [data2],

            top: '50%',
            left: '2%',
            bottom: '2%',
            right: '10%',
            width: '80%',
            height: '30%',

            symbolSize: 8,
            orient: 'TB',
            initialTreeDepth: 6,
            label: {
                normal: {
                    position: 'top',
                    verticalAlign: 'middle',
                    align: 'left',
                    distance: 8
                    //rotate: -90,

                }
            },
            lineStyle: {
                curveness: 1,
            },

            leaves: {
                label: {
                    normal: {
                        position: 'bottom',
                        verticalAlign: 'middle',
                        align: 'center',
                        //rotate: -90,
                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
        },
        {
            type: 'tree',
            name: '积分赛',
            data: [data3],

            top: '8%',
            left: '80%',
            bottom: '2%',
            right: '10%',
            width: '10%',
            height: '86%',

            symbolSize: 8,
            orient: 'LR',
            initialTreeDepth: 6,
            edgeShape :'polyline',
            label: {
                normal: {
                    position: 'top',
                    verticalAlign: 'middle',
                    align: 'center',

                }
            },
             lineStyle: {
                // curveness: 1,
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
});