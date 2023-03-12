var home = "image:///asset/get/s/data-1544514405859-oal-uuABu.png";

var task_scheduling = "image:///asset/get/s/data-1544514213101-eEzMS0vx4.png"; //任务调度

var server = "image:///asset/get/s/data-1544514208221-yNcetloRp.png"; //前置服务器

var middle_table = "image:///asset/get/s/data-1544514203431-anU298V_z.png"; //表

var datacenter = "image:///asset/get/s/data-1544514198345-kfpUB8q6e.png"; //数据中心

let symbolSizeSetting = 50; //图标大小
let labelOne = { //文字1省级市级五区
    normal: {
        position: "bottom",
        distance: 2, //离图标多远					
        show: true,
        textStyle: {
            fontSize: 20,
            color: '#00eaff',
            fontFamily: 'microsoftYaHei'
        },
    }
};
let labelTwo = { //文字2
    normal: {
        position: "bottom",
        show: true,
        distance: 2,
        textStyle: {
            fontSize: 18,
            color: '#fff',
            fontWeight: '500',
            fontFamily: 'microsoftYaHei'
        },
    }
};
let labelThree = { //文字3
    normal: {
        position: "bottom",
        show: true,
        distance: 2,
        textStyle: {
            fontSize: 16,
            color: '#00eaff',
            fontFamily: 'microsoftYaHei'
        },
    }
};
let lineColorOne = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#58B3CC'
}, {
    offset: 1,
    color: '#F58158'
}])
let dataList = [{
        name: "炼焦煤",
        symbol: home,
        symbolSize: symbolSizeSetting,
        draggable: false,
        fixed: true,
        value: [0, 200],
        label: labelOne,
    },
    {
        name: "铁矿",
        symbol: home,
        symbolSize: symbolSizeSetting,
        draggable: false,
        fixed: true,
        value: [0, 150],
        label: labelOne,
    },
    {
        name: "石灰石",
        symbol: home,
        symbolSize: symbolSizeSetting,
        draggable: false,
        fixed: true,
        value: [0, 60],
        label: labelOne,
    },
    {
        name: "焦化",
        symbol: middle_table,
        symbolSize: symbolSizeSetting,
        draggable: false,
        fixed: true,
        value: [200, 200],
        label: labelTwo,
    },
    {
        name: "球团",
        symbol: middle_table,
        symbolSize: symbolSizeSetting,
        draggable: false,
        fixed: true,
        value: [100, 130],
        label: labelTwo,
    },
    {
        name: "烧结",
        symbol: middle_table,
        symbolSize: symbolSizeSetting,
        draggable: false,
        fixed: true,
        value: [100, 170],
        label: labelTwo,
    },
    {
        name: "石灰窑",
        symbol: middle_table,
        symbolSize: symbolSizeSetting,
        draggable: false,
        fixed: true,
        value: [300, 60],
        label: labelTwo,
    }, {
        name: "高炉",
        value: [200, 150],
        draggable: false,
        symbol: task_scheduling,
        symbolSize: symbolSizeSetting,
        label: labelThree,
    }, {
        name: "转炉",
        symbol: server,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [300, 150],
        label: labelTwo,
    }, {
        name: "连铸",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [400, 150],
        label: labelThree,
    }, {
        name: "板坯",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [400, 100],
        label: labelThree,
    }, {
        name: "加热炉",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [500, 150],
        label: labelThree,
    }, {
        name: "热轧机",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [600, 150],
        label: labelThree,
    }, {
        name: "冷轧机",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [700, 150],
        label: labelThree,
    }, {
        name: "钢卷",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [600, 100],
        label: labelThree,
    }, {
        name: "铸铁块",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [200, 100],
        label: labelThree,
    }, {
        name: "冷轧卷",
        symbol: datacenter,
        symbolSize: symbolSizeSetting,
        draggable: false,
        value: [700, 100],
        label: labelThree,
    }

]
option = {
    grid: {
        left: '5%',
        top: '10%',
        bottom: '5%',
        right : '5%'
    },
    textStyle: {
        color: '#f00',
        fontSize: 16,
        fontWeight: 600,
    },
    backgroundColor: "#013954",
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            legendHoverLink: false,
            hoverAnimation: true,
            nodeScaleRatio: false,
            roam: false,
            lineStyle: { //去掉自带的那条线，不要删
                normal: {
                    width: 0,
                    shadowColor: 'none',
                    color: 'transparent'
                },
            },
            data: dataList,
        },
        {
            type: 'lines', //铁矿------>球团、烧结
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    opacity: 0.6,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [0, 150],
                    [100, 130]
                ]
            }, {
                coords: [
                    [0, 150],
                    [100, 170]
                ]
            }]
        },
        {
            type: 'lines', //炼焦煤 --->焦化
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [0, 200],
                    [200, 200]
                ]
            }]
        }, {
            type: 'lines', //石灰石 ------> 石灰窑
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [0, 60],
                    [300, 60]
                ]
            }]
        }, {
            type: 'lines', //焦化、球团、烧结 -----> 高炉
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [200, 200],
                    [200, 150]
                ]
            }, {
                coords: [
                    [100, 170],
                    [200, 150]
                ]
            }, {
                coords: [
                    [100, 130],
                    [200, 150]
                ]
            }, {
                coords: [
                    [300, 60],
                    [300, 150]
                ]
            }]
        },
        {
            type: 'lines', //块1,2...n到节点A,B...N
            coordinateSystem: 'cartesian2d',
            // animationDelay: 10000,
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [200, 150],
                    [300, 150]
                ]
            }]
        }, {
            type: 'lines', //节点A,B...N到节点X
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [300, 150],
                    [400, 150]
                ]
            }]
        }, {
            type: 'lines', //连铸------>板坯
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 1,
                }
            },
            data: [{
                coords: [
                    [400, 150],
                    [400, 100]
                ]
            }]
        }, {
            type: 'lines', //热轧机------>钢卷
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 1,
                }
            },
            data: [{
                coords: [
                    [600, 150],
                    [600, 100]
                ]
            }]
        }, {
            type: 'lines', //连铸------>加热炉
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [400, 150],
                    [500, 150]
                ]
            }]
        }, {
            type: 'lines', //加热炉------>热轧机
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [500, 150],
                    [600, 150]
                ]
            }]
        }, {
            type: 'lines', //高炉------>铸铁块
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 3,
                }
            },
            data: [{
                coords: [
                    [200, 150],
                    [200, 100]
                ]
            }]
        }, {
            type: 'lines', //高炉------>铸铁块
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 1,
                }
            },
            data: [{
                coords: [
                    [600, 150],
                    [700, 150]
                ]
            }]
        }, {
            type: 'lines', //冷轧机------>冷轧卷
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: true,
                trailLength: 0,
                symbol: "arrow",
                color: '#ffc776',
                symbolSize: 8,
                period: 6,
                loop: true,
            },
            lineStyle: {
                normal: {
                    curveness: 0,
                    color: lineColorOne,
                    width: 1,
                }
            },
            data: [{
                coords: [
                    [700, 150],
                    [700, 100]
                ]
            }]
        }

    ]
};