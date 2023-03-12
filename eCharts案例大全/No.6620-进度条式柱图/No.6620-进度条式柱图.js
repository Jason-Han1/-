var peract = [0.333, 0.588, 0.822, 0.666, 0.444];
var hehe = [1, 1, 1, 1, 1, 1];
var daoxu = [6, 5, 4, 3, 2, 1];
var numArr = [{
    cum: 50,
    plan: 70
}, {
    cum: 40,
    plan: 49
}, {
    cum: 50,
    plan: 55
}, {
    cum: 60,
    plan: 62
}, {
    cum: 80,
    plan: 83
}, ]
option = {
    backgroundColor: '#000',
    xAxis: [
        // //隐藏x轴刻度
        {
            show: false,
        },

        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            color: '#fff',
        },
        // itemStyle: {
        //     show: true
        // },
        // axisTick: {
        //     show: false, //隐藏Y轴刻度
        // },
        axisLine: {
            show: false, //隐藏Y轴线段
        },
        data: ['国网母公司', '国网电科院', '国网河南电力', "国网福建电力", "国网山东电力"],
    },
    grid: {
        top: '5%',
        left: '10%',
        right: '5%',
        bottom: '5%',
        // containLabel: true
    },
    series: [
        //背景色--------------------------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-90%',
            barWidth: '40%', //统计条宽度 
            itemStyle: {
                normal: {
                    color: 'rgba(23,157,252,0.4)',
                    borderWidth: 1,
                    borderColor: 'rgba(23,157,252,1)',
                },
            },
            z: 3,
            label: {
                normal: {
                    show: true,
                    // position: ['60%', '30%'],
                    // label 的position位置可以是top bottom left,right,也可以是固定值
                    // 在这里需要上下统一对齐,所以用固定值
                    position: ["10%", "40%"],
                    rich: { //富文本
                        white: { //自定义颜色
                            color: '#ffffff',
                            fontWeight: "bold"
                        },
                        whitebold: {
                            color: '#ffffff',
                            fontWeight: "bold",
                            fontSize: 14
                        },
                        black: {
                            color: '#000',
                            fontWeight: "bold"
                        },
                        know: {
                            color: "#02E1E7",
                            fontWeight: "bold",
                            fontSize: 14
                        }
                    },
                    formatter: function(data) {
                        if (daoxu[data.dataIndex] == 1) {
                            return "{black|   实际签到: }" + "{whitebold|" + numArr[data.dataIndex].cum + "}" + "{black|人"
                        } else if (daoxu[data.dataIndex] == 2) {
                            return "{black|   实际签到: }" + "{whitebold|" + numArr[data.dataIndex].cum + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 3) {
                            return "{black|   实际签到: }" + "{whitebold|" + numArr[data.dataIndex].cum + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 4) {
                            return "{black|   实际签到: }" + "{whitebold|" + numArr[data.dataIndex].cum + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 5) {
                            return "{black|   实际签到: }" + "{whitebold|" + numArr[data.dataIndex].cum + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 6) {
                            return "{black|   实际签到: }" + "{whitebold|" + numArr[data.dataIndex].cum + "}" + "{black|人}"
                        } else {
                            return ""
                        }
                    },
                }
            },
            data: hehe,
        },
        //蓝条--------------------------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-80%',
            barWidth: '28%', //统计条宽度
            itemStyle: {
                normal: {
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#00FBFF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#39A7FC' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    },
                },
            },
            // max: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff', //百分比颜色
                    },
                    position: "right",
                    rich: { //富文本
                        white: { //自定义颜色
                            color: '#ffffff',
                        },
                        white: { //自定义颜色
                            color: '#ffffff',
                            fontWeight: "bold"
                        },
                        whitebold: {
                            color: '#ffffff',
                            fontWeight: "bold",
                            fontSize: 14
                        },
                        black: {
                            color: '#000',
                            fontWeight: "bold"
                        },
                        know: {
                            color: "#02E1E7",
                            fontWeight: "bold",
                            fontSize: 14
                        }
                    },
                    //百分比格式
                    formatter: function(data) {
                        if (daoxu[data.dataIndex] == 1) {
                            return "{white|   应签到: }" + "{know|" + numArr[data.dataIndex].plan + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 2) {
                            return "{white|   应签到:}" + "{know|" + numArr[data.dataIndex].plan + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 3) {
                            return "{white|   应签到:}" + "{know|" + numArr[data.dataIndex].plan + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 4) {
                            return "{white|   应签到:}" + "{know|" + numArr[data.dataIndex].plan + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 5) {
                            return "{white|   应签到:}" + "{know|" + numArr[data.dataIndex].plan + "}" + "{black|人}"
                        } else if (daoxu[data.dataIndex] == 6) {
                            return "{white|   应签到:}" + "{know|" + numArr[data.dataIndex].plan + "}" + "{black|人}"
                        } else {
                            return ""
                        }
                    },
                }
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: peract,
        },
        //数据条--------------------------------------------------//
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-85%',
            barWidth: '30%', //
            // position: ['100%','100%'],
            itemStyle: {
                normal: {
                    // barBorderRadius: 200,
                    color: 'rgba(22,203,115,0.05)'
                    // border:
                },
            },
            label: {
                normal: {
                    show: true,
                    position: ['0', '-100%'],
                    rich: { //富文本
                        white: { //自定义颜色
                            color: '#ffffff',
                        },
                        know: {
                            color: "#02E1E7",
                            fontWeight: "bold",
                            fontSize: 14
                        }
                    },
                    

                }
            },
            data: [50, 40, 50, 60, 80]
        }

    ]
};