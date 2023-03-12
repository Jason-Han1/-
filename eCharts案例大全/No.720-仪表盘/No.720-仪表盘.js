var datas = {
    title: "吃饭次数",
    company: "次",
    dataArr: [{
        value: "22"
    }]
};
var fontColor = "#000";
var seriesName = "";
let noramlSize = 16;
//   let myChart = echarts.init(dom);
var value = datas.dataArr[0].value;
var min = value.split(".");
var max = 30;
var degrees = 180 - (180 * value) / max; //蓝色刻度尺计算
// 蓝色背景
var num = value / max;
var colorSet = [
    [num, "#988bbe"],
    [1, "#e6e6e6"]
];
var centerArr = ["50%", "85%"];
option={
    backgroundColor:'#fff',
    series: [{
            name: "白色圈刻度",
            type: "gauge",
            radius: "100%",
            splitNumber: 6,
            center: centerArr,
            startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 35, //刻度节点线长度
                lineStyle: {
                    width: 5,
                    color: "#fff"
                } //刻度节点线
            },
            axisLabel: {
                show: false,
                color: "#",
                fontSize: 12
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
        {
            name: "最外圈数字刻度",
            type: "gauge",
            z: 2,
            radius: "125%",
            splitNumber: 6,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: max,
            center: centerArr, //整体的位置设置
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    // color: [[0.8, "#00B3FE"], [1, "#212D43"]],
                    width: 25,
                    opacity: 0 //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            data: [{
                show: false,
                value: "80"
            }],
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#988bbe",
                    fontSize: noramlSize
                },
                formatter: "{value}" + datas.company
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
            name: "紫色外圈", //刻度背景
            type: "gauge",
            z: 2,
            radius: "100%",
            splitNumber: 6,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: max,
            center: centerArr, //整体的位置设置
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: colorSet,
                    width: 25,
                    opacity: 1 //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            data: [{
                show: false,
                value: "80"
            }],
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
        //   {
        //     name: "刻度尺", //刻度背景
        //     type: "gauge",
        //     z: 2,
        //     radius: "95%",
        //     splitNumber: 6,
        //     startAngle: 180,
        //     endAngle: 0,
        //     min: 0,
        //     max: max,
        //     center: centerArr, //整体的位置设置
        //     axisLine: {
        //       // 坐标轴线
        //       lineStyle: {
        //         // 属性lineStyle控制线条样式
        //         color: [[0.8, "#00B3FE"], [1, "#212D43"]],
        //         width: 35,
        //         opacity: 0 //刻度背景宽度
        //       }
        //     },

        //     axisLabel: {
        //       show: false
        //     },
        //     pointer: {
        //       show: false
        //     },
        //     axisTick: {
        //       show: true,
        //       lineStyle: {
        //         color: "#e6e6e6",
        //         width: 2
        //       },
        //       length: 8,
        //       splitNumber: 6
        //     },
        //      detail: {
        //       formatter: function(params) {
        //         return (
        //           "{gray|" + datas.title + "\n" + "}{white|" + value + "}"
        //         );
        //       },
        //       rich: {
        //         gray: {
        //           fontSize: 20,
        //           color: "#000",
        //           padding: 20
        //         },
        //         white: {
        //           fontSize: 45,
        //           fontWeight: 700,
        //           color: "#000"
        //         }
        //       },
        //       offsetCenter: ["0", "-30%"]
        //     },
        //     splitLine: {
        //       length: 25, //刻度节点线长度
        //       lineStyle: {
        //         width: 2,
        //         color: "#e6e6e6"
        //       } //刻度节点线
        //     },
        //      data: [
        //       {
        //         show: false,
        //       }
        //     ]
        //   },
        {
            name: "紫色刻度尺", //刻度背景
            type: "gauge",
            z: 4,
            radius: "85%",
            splitNumber: 4,
            startAngle: 180,
            endAngle: degrees,
            center: centerArr, //整体的位置设置
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [0.8, "#00B3FE"],
                        [1, "#212D43"]
                    ],
                    width: 25,
                    opacity: 0 //刻度背景宽度
                }
            },
            data: datas.dataArr,
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#988bbe",
                    width: 3
                },
                length: 8,
                splitNumber: 6
            },
            detail: {
                formatter: function(params) {//图表中间文字数据展示
                    return (
                        "{gray|" + datas.title + "\n" + "}{white|" + value + "}  {company|" + datas.company + "}"
                    );
                },
                rich: {
                    gray: {
                        fontSize: 20,
                        color: "#000",
                        padding: 20
                    },
                    white: {
                        fontSize: 45,
                        fontWeight: 700,
                        color: "#000"
                    },
                    company: {
                        fontSize: 14,
                        color: "#000"
                    }
                },
                offsetCenter: ["0", "-30%"]
            },
            splitLine: {
                length: 25, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: "#988bbe"
                } //刻度节点线
            }
        }
    ]
};