var datas = {
    value: 82,
    title: "分数",
    type: 1,
    radiusType: 1
};
let  startAngle=180,endAngle=0;
var fontColor = "#00f6f7";
var seriesName = "";
let noramlSize = 16;
let state = "";
let center = ["50%", "70%"];
let wqradius = 0,
    nqradius = 0,
    kdradius;
    wqradius = "60%";
    nqradius = "60%";
    kdradius = "90%";
let min=0,max=100;
let nqColor = [
    [
        datas.value/100,
        "rgba(3, 169, 159,0.2)"
    ],
    [
        1,
       "rgba(3, 169, 159,0)"
    ]
];

let wqColor = "rgba(22, 138, 255, 0.9)";
let circleLineW=2;
myChart.setOption({
    backgroundColor:"#000",
    title: {
        show: true,
        x: "center",
        bottom: "22%",
        text: datas.title,
        textStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: '#fff'
        }
    },
    tooltip: {
        show: false
    },
    series: [
        {
            type: "gauge",
            radius: "70%",
            startAngle,
            endAngle,
            center,
            pointer: {
              show: false,
            },
            // data: dataArr,
            title: {
              show: false,
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgb(4, 145, 139)",
                width: 35,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1,
              },
            },
            axisTick: {
              show: true,
              splitNumber: 5,
              length: 8,
              lineStyle: {
                width: 1,
                color: "#20c998",
              }, 
            },
            splitLine: {
              length:15, //刻度节点线长度
              lineStyle: {
                width: 1,
                color: "#20c998",
              }, //刻度节点线
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: 0,
            },
            animationDuration: 4000,
          },{
            name: "白色圈刻度",
            type: "gauge",
            radius: kdradius,
            center,
            startAngle, //刻度起始
            endAngle, //刻度结束
            z: 7,
            splitNumber: 5,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false,
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
           
        },
        {
            name: "外层圈", //刻度背景
            type: "gauge",
            z: 2,
            radius: wqradius,
            startAngle,
            endAngle,
            center, //整体的位置设置
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [1, wqColor]
                    ],
                    width: circleLineW,
                    opacity: 1 //刻度背景宽度
                }
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
            startAngle,
            endAngle,
            center, //整体的位置设置
            axisLine: {
                show:false,
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
            min,
            max,
            //指针样式位置
            pointer: {
                show: true,
                width: 4,
                length: "20%",
                offsetCenter: [0,-100],
            },
            itemStyle: {
                normal: {
                    color: wqColor
                }
            },
            detail: {
                show: true,
                offsetCenter: [0, -25],
                formatter: [
                    "{value|" + (datas.value) + "}"
                ].join("\n"),
                rich: {
                    value: {
                        fontSize: 30,
                        lineHeight: 10,
                        color: fontColor,
                        fontWeight: "700"
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
            startAngle,
            endAngle,
            center, //整体的位置设置
            axisLine: {
                lineStyle: {
                    // 属性lineStyle控制线条样式//控制外圈位置
                    color: nqColor,
                    width: 95,
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
            detail: {
                show: 0
            }
        },
        {
            name: "内层小环",
            type: "gauge",
            z: 6,
            radius: "30%",
            startAngle,
            endAngle,
            center: center, //整体的位置设置
            axisLine: {
                lineStyle: {
                    // 属性lineStyle控制线条样式//控制外圈位置
                   color: [
                        [1, wqColor]
                    ],
                    width:circleLineW,
                    // opacity: 0.9 //控制外圈位置，颜色，宽度，透明度
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
            detail: {
                show: 0
            }
        }
    ]
});