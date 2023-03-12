let num = 8 //当前值
let totalNum = 10 //数据总数

let colorOut = 'rgba(91,144,250,1)' // 最外层颜色
let colorCenter = 'rgba(98,150,255,0.2)' // 中间层颜色
let colorLeft = 'rgb(11,41,64)' // 剩余层颜色
let listOut = [] //最外层数据
let listCenter = [] //中间层数据

let innerRadius = ["0", "30%"] //内层半径
let centerRadius = ["40%", "68%"] //中间层半径
let outRadius = ["68%", "72%"] //最外层半径

// 空白间隔
let placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: colorLeft,
        borderColor: colorLeft,
        borderWidth: 0
    }
};

// 饼状图 数据
// 外层数据
listOut.push({
    value: num,
    itemStyle: {
        normal: {
            color: colorOut
        }
    }
}, {
    value: totalNum - num,
    itemStyle: placeHolderStyle
})
// 中间层数据
listCenter.push({
    value: num,
    itemStyle: {
        normal: {
            color: colorCenter
        }
    }
}, {
    value: totalNum - num,
    itemStyle: placeHolderStyle
})

option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    series: [{
            // 最外层
            name: '',
            type: 'pie',
            clockWise: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            center: ['50%', '50%'],
            radius: outRadius,
            hoverAnimation: false,
            data: listOut,
        },
        {
            // 中间层
            name: '',
            type: 'pie',
            clockWise: false,
            center: ['50%', '50%'],
            radius: centerRadius,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    }
                }
            },
            data: listCenter,
        },
        {
            // 最内层
            name: '',
            type: "pie",
            hoverAnimation: false,
            radius: innerRadius,
            center: ["50%", "50%"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                // 总数
                value: num,
                name: "",
                label: {
                    normal: {
                        show: true,
                        position: "center",
                        color: "#fff",
                        formatter: params => {
                            return params.value;
                        },
                        fontSize: 28
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.RadialGradient(
                            0.5,
                            0.5,
                            0.99,
                            [{
                                    offset: 0,
                                    color: "rgb(0, 0, 0, 0)"
                                },
                                {
                                    offset: 1,
                                    color: "#d7eaf5"
                                }
                            ],
                            false
                        )
                    }
                }
            }]
        }
    ]
};