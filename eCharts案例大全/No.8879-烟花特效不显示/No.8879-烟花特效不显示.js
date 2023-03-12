//初始化echarts实例
const fireworksChart = echarts.init(
    document.getElementById("fireworksChart")
);
let moonAndStars = {
    type: "graph",
    data: function() {
        let moonPosition = {
            x: 190,
            y: 0.5
        };
        let moon = [{
                symbolSize: 70,
                x: moonPosition.x,
                y: moonPosition.y
            },
            {
                symbolSize: 60,
                x: moonPosition.x - 1.5,
                y: moonPosition.y - 1.5,
                itemStyle: {
                    normal: {
                        color: "rgb(51, 51, 51)"
                    }
                }
            },
            {
                symbolSize: 0,
                x: 0,
                y: 0
            },
            {
                symbolSize: 0,
                x: 200,
                y: 100
            }
        ];
        let num = 100;
        let stars = [];
        for (let i = 0; i < num; i++) {
            stars.push({
                symbolSize: r(3),
                x: r(200),
                y: r(50)
            });
        }
        return moon.concat(stars)
    },
    itemStyle: {
        normal: {
            color: "#ccc"
        }
    },
    silent: true,
    z: -1
};

let roofs = [
    /*三角形*/
    [1, 2, 3, 4, 5, 4, 3, 2, 1],
    /*凸*/
    [2, 2, 2, 4, 4, 4, 2, 2, 2],
    [2, 2, 2, 4, 20, 4, 2, 2, 2],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    [6, 6, 6, 6, 6, 5, 4, 3, 2, 1],
    [
        0.3,
        1,
        1.6,
        2.5,
        3,
        3.5,
        3.6,
        3.7,
        3.7,
        3.6,
        3.5,
        3,
        2.5,
        1.6,
        1,
        0.3
    ],
    [6, 6, 6, 6, 6, 2, 2, 2],
    [6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5],
    [1, 1, 1, 1, 1, 1.5, 2, 2.5, 3, 3.5, 4],
    [1, 1, 1, 1, 1, 1, 1],
    [4, 4, 4, 2, 2, 2, 4, 4, 4]
];
let build = function(height) {
    let arr = [100];
    let l = 14;
    let h = height || 50;
    let addFloor = function(arr, l) {
        let a = [];
        for (let i = 0; i < arr.length; i++) {
            a.push(arr[i] + l);
        }
        return a;
    };
    for (let i = 0; i < l; i++) {
        let newRoof = addFloor(roofs[r(11)], r(h));
        if (Math.random() < 0.5) {
            newRoof.reverse();
        }
        arr = arr.concat(newRoof);
        if (Math.random() < 0.5) {
            arr.push(0);
        }
    }
    return arr;
};
let building = build();
let building2 = (function() {
    let b = build(100);
    for (let i = 0; i < b.length; i++) {
        if (b[i] > building[i]) {
            b[i] = b[i] - building[i];
        }
    }
    return b;
})();

let option = {
    title: {
        text: "",
        top: 20,
        left: "center",
        textStyle: {
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold"
        }
    },
    stack: true,
    grid: {
        bottom: 0,
        top: 0,
        left: -10,
        right: -10
    },
    xAxis: {
        data: [],
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
            type: "bar",
            data: building,
            itemStyle: {
                normal: {
                    color: "rgb(38, 41, 57)"
                }
            },
            animationDelay: function(idx) {
                return idx * 10;
            }
        },
        {
            type: "bar",
            data: building2,
            itemStyle: {
                normal: {
                    color: "rgb(28, 31, 47)"
                }
            },
            animationDelay: function(idx) {
                return idx * 10 + 300;
            }
        },
        {
            coordinateSystem: "cartesian2d",
            type: "lines",
            zlevel: 9999,
            symbolSize: 0.2,
            effect: {
                show: true,
                period: 10,
                trailLength: 0.01,
                symbolSize: 100,
                symbol: "pin",
                loop: true,
                polyline: true // 允许多个点
            },

            lineStyle: {
                normal: {
                    color: "#BF3EFF",
                    opacity: 10,
                    // curveness: -0.05,
                    width: 0.01,
                    // opacity: 0.6,
                    curveness: 0.1
                }
            },
            data: [{
                    coords: [
                        // 竖直向上
                        [-40, -160],
                        [-30, -160]
                    ]
                },
                {
                    // 水平向右
                    coords: [
                        [41, 165],
                        [65, 165]
                    ]
                },
                {
                    // 水平向左
                    coords: [
                        [39, 165],
                        [15, 165]
                    ]
                },
                {
                    // 垂直向下
                    coords: [
                        [40, 164],
                        [40, 115]
                    ]
                },
                {
                    //第一象限
                    coords: [
                        [40, 164],
                        [55, 192]
                    ]
                },
                {
                    //第一象限
                    coords: [
                        [40, 164],
                        [56, 175]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [0, 0],
                        [0, 0]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [41, 190],
                        [47, 215]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [48, 190],
                        [57, 205]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [52, 180],
                        [62, 185]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [55, 170],
                        [68, 171]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [39, 166],
                        [24, 190]
                    ]
                },
                {
                    //第二象限
                    coords: [
                        [40, 164],
                        [24, 175]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [40, 164],
                        [31, 195]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [25, 168],
                        [13, 176]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [29, 175],
                        [18, 195]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [33, 179],
                        [24, 210]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [36, 185],
                        [35, 210]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [40, 164],
                        [26, 137]
                    ]
                },
                {
                    //第三象限
                    coords: [
                        [40, 164],
                        [34, 135]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [40, 164],
                        [25, 153]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [39, 144],
                        [36, 120]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [34, 144],
                        [22, 123]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [30, 151],
                        [21, 143]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [30, 159],
                        [18, 157]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    // 第四象限
                    coords: [
                        [40, 164],
                        [55, 135]
                    ]
                },
                {
                    // 第四象限
                    coords: [
                        [40, 164],
                        [55, 152]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    // 第四象限
                    coords: [
                        [40, 164],
                        [46, 135]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFFFF"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [52, 160],
                        [65, 153]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [52, 150],
                        [62, 133]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [47, 144],
                        [53, 123]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [43, 134],
                        [45, 113]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#00FF33"
                        }
                    }
                }
            ],
            animationDelay: 1100
        },
        //第一个主子
        {
            coordinateSystem: "cartesian2d",
            type: "lines",
            zlevel: -2,
            effect: {
                show: true,
                period: 1,
                trailLength: 0.01,
                symbolSize: 12,
                symbol: "circle",
                loop: true
            },
            lineStyle: {
                normal: {
                    color: "#ccc",
                    opacity: 0,
                    curveness: 0
                }
            },
            //圆柱的位置
            data: [{
                coords: [
                    [40, 25],
                    [40, 165]
                ]
            }],
            animationDelay: 1100
        },
        {
            coordinateSystem: "cartesian2d",
            type: "lines",
            zlevel: -2,
            effect: {
                show: true,
                period: 1,
                trailLength: 0.01,
                symbolSize: 12,
                symbol: "circle",
                loop: true
            },
            lineStyle: {
                normal: {
                    color: "#ccc",
                    opacity: 0,
                    curveness: 0
                }
            },
            //第二个圆柱的位置
            data: [{
                coords: [
                    [110, 25],
                    [110, 165]
                ]
            }],
            animationDelay: 1100
        },
        {
            coordinateSystem: "cartesian2d",
            type: "lines",
            zlevel: 2,
            symbolSize: 3,
            effect: {
                show: true,
                period: 1,
                trailLength: 0.01,
                symbolSize: 5,
                symbol: "pin",
                loop: true
            },
            lineStyle: {
                normal: {
                    color: "#ccc",
                    opacity: 0.02,
                    //curveness: -0.05,
                    width: 0.01,
                    //opacity: 0.6,
                    curveness: 0.1
                }
            },
            data: [{
                    coords: [
                        // 竖直向上
                        [110, 166],
                        [110, 210]
                    ]
                },
                {
                    // 水平向右
                    coords: [
                        [111, 165],
                        [135, 165]
                    ]
                },
                {
                    // 水平向左
                    coords: [
                        [109, 165],
                        [85, 165]
                    ]
                },
                {
                    // 垂直向下
                    coords: [
                        [110, 164],
                        [110, 115]
                    ]
                },
                {
                    //第一象限
                    coords: [
                        [110, 164],
                        [125, 192]
                    ]
                },
                {
                    //第一象限
                    coords: [
                        [110, 164],
                        [126, 175]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [110, 164],
                        [116, 197]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [111, 190],
                        [117, 215]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [118, 190],
                        [127, 205]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [122, 180],
                        [132, 185]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第一象限
                    coords: [
                        [125, 170],
                        [138, 171]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [109, 166],
                        [94, 190]
                    ]
                },
                {
                    //第二象限
                    coords: [
                        [110, 164],
                        [94, 175]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [110, 164],
                        [101, 195]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [95, 168],
                        [83, 176]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [99, 175],
                        [88, 195]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [103, 179],
                        [94, 210]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第二象限
                    coords: [
                        [106, 185],
                        [105, 210]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [110, 164],
                        [96, 137]
                    ]
                },
                {
                    //第三象限
                    coords: [
                        [110, 164],
                        [104, 135]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [110, 164],
                        [95, 153]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [109, 144],
                        [106, 120]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [104, 144],
                        [92, 123]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [100, 151],
                        [91, 143]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第三象限
                    coords: [
                        [100, 159],
                        [88, 157]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    // 第四象限
                    coords: [
                        [110, 164],
                        [125, 135]
                    ]
                },
                {
                    // 第四象限
                    coords: [
                        [110, 164],
                        [125, 152]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    // 第四象限
                    coords: [
                        [110, 164], // 红色象限位置错乱 由 [555, 164] 改为[110, 164]
                        [116, 135]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#DD2222"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [122, 160],
                        [135, 153]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [122, 150],
                        [132, 133]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [117, 144],
                        [123, 123]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                },
                {
                    //第四象限
                    coords: [
                        [113, 134],
                        [115, 113]
                    ],
                    lineStyle: {
                        normal: {
                            color: "#FFFF00"
                        }
                    }
                }
            ],
            animationDelay: 1100
        }
    ],
    animationEasing: "elasticOut",
    animationDelayUpdate: function(idx) {
        return idx * 5;
    }
};