var datas = {
    value: 0.82,
    title: "本单位计划完成率",
    type: 1,
    radiusType: 1
};

var fontColor = "#000";
var seriesName = "";
let noramlSize = 16;
let state = "";
let center = ["50%", "70%"];
let wqradius = 0,
    nqradius = 0,
    kdradius;
if (datas.radiusType == 1) {
    wqradius = "83%";
    nqradius = "76%";
    kdradius = "90%";
} else {
    wqradius = "99%";
    nqradius = "88%";
    kdradius = "110%";
    center = ["50%", "50%"];
    state =
        "可用容量" + datas.totalNum + "TB\n可用容量" + datas.useNum + "TB";
}
// console.log(wqradius, nqradius);
let nqColor = [
    [
        datas.value,
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: "rgba(211, 243, 242,1)"
            },
            {
                offset: 1,
                color: "rgba(39, 195, 191,1) "
            }
        ])
    ],
    [
        1,
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: "rgba(255, 255, 255,1)"
            },
            {
                offset: 1,
                color: "rgba(211, 243, 242,1) "
            }
        ])
    ]
];

let wqColor = "rgba(41, 195, 193, 0.9)";
if (datas.type == 1) {
    // state = "正常";
    // if (datas.value > 80) {
    //   state = "使用过度";
    // }
} else if (datas.type == 2) {
    // state = "总内存" + datas.totalNum + "TB\n已使用" + datas.useNum + "TB";
    wqColor = "rgba(80, 152, 237,0.9)";
    nqColor = [
        [
            datas.value,
            new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: "rgba(226, 239, 254,1)"
                },
                {
                    offset: 1,
                    color: "rgba(113, 178, 253,1) "
                }
            ])
        ],
        [
            1,
            new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: "rgba(255, 255, 255,1)"
                },
                {
                    offset: 1,
                    color: "rgba(226, 239, 254,1) "
                }
            ])
        ]
    ];
} else if (datas.type == 3) {
    // state = "总存储" + datas.totalNum + "PB\n已使用" + datas.useNum + "PB";
    wqColor = "rgba(171, 151, 229, 0.9)";
    nqColor = [
        [
            datas.value,
            new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: "rgba(238, 234, 249,1)"
                },
                {
                    offset: 1,
                    color: "rgba(171, 151, 229,1) "
                }
            ])
        ],
        [
            1,
            new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: "rgba(255, 255, 255,1)"
                },
                {
                    offset: 1,
                    color: "rgba(238, 234, 249,1) "
                }
            ])
        ]
    ];
}

myChart.setOption({
    title: {
        show: true,
        x: "center",
        bottom: "8%",
        text: datas.title,
        textStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: fontColor
        }
    },
    tooltip: {
        show: false
    },
    series: [{
            name: "白色圈刻度",
            type: "gauge",
            radius: kdradius,
            center: center,
            startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            z: 7,
            splitNumber: 5,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color: fontColor,
                fontSize: noramlSize,
                formatter: "{value}%"
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            detail: {
                show: false
            }
            // data: [
            //   {
            //     value: 0,
            //     name: ""
            //   }
            // ]
        },
        {
            name: "外层圈", //刻度背景
            type: "gauge",
            z: 2,
            radius: wqradius,
            startAngle: 180,
            endAngle: 0,
            center: center, //整体的位置设置
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [1, wqColor]
                    ],
                    width: 13,
                    opacity: 1 //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            // data: [
            //   {
            //     show: false,
            //     value: datas.value
            //   }
            // ], //作用不清楚
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: 0
            }
        },
        {
            name: "指针",
            type: "gauge",
            z: 9,
            radius: "70%",
            startAngle: 180,
            endAngle: 0,
            center: center, //整体的位置设置
            axisLine: {
                lineStyle: {
                    // 属性lineStyle控制线条样式//指针颜色
                    color: [
                        [1, "rgb(30, 191, 182)"]
                    ],
                    width: 0
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            min: 0,
            max: 1,
            pointer: {
                show: true,
                width: 10,
                length: "60%"
            },
            itemStyle: {
                normal: {
                    color: wqColor
                }
            },
            detail: {
                show: true,
                offsetCenter: [0, "40%"],
                formatter: [
                    "{value|" + (datas.value * 100) + "} {company|%}",
                    "{company|" + state + "}"
                ].join("\n"),
                rich: {
                    value: {
                        fontSize: 30,
                        lineHeight: 10,
                        color: "#000",
                        fontWeight: "700"
                    },
                    company: {
                        fontSize: 16,
                        lineHeight: 20,
                        color: "#000"
                    }
                }
            },
            data: [datas.value] //指针位置
        },
        {
            name: "内层盘",
            type: "gauge",
            z: 6,
            radius: nqradius,
            startAngle: 180,
            endAngle: 0,
            center: center, //整体的位置设置
            axisLine: {
                lineStyle: {
                    // 属性lineStyle控制线条样式//控制外圈位置
                    color: nqColor,
                    width: 53,
                    opacity: 0.9 //控制外圈位置，颜色，宽度，透明度
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            // data: [
            //   {
            //     show: false,
            //     value:0.8
            //   }
            // ],
            detail: {
                show: 0
            }
        }
    ]
});