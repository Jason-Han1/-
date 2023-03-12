option = {
    backgroundColor: '#050d19',
    series: [{
            center: ["50%", "60%"], //仪表的位置
            name: "刻度", //仪表的名字
            type: "gauge", //统计图类型为仪表
            radius: "83%", //统计图的半径大小
            min: 0, //最小刻度
            max: 16, //最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 180, //开始刻度的角度
            endAngle: 0, //结束刻度的角度
            axisLine: { //设置默认刻度盘上的刻度不显示，重新定义刻度盘
                show: false,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, "rgba(255,255,255,0)"]
                    ]
                }
            }, //仪表盘轴线
            axisLabel: { //仪表盘上的数据
                show: false,
                color: "#4d5bd1", //仪表盘上的轴线颜色
                distance: 25, //图形与刻度的间距
                formatter: function(v) { //刻度轴上的数据相关显示
                    switch (v + "") {
                        case "0":
                            return "0";
                        case "2":
                            return "2W";
                        case "4":
                            return "4W";
                        case "6":
                            return "6W";
                        case "8":
                            return "8W";
                        case "10":
                            return "10W";
                        case "12":
                            return "12W";
                        case "14":
                            return "14W";
                        case "16":
                            return "16W";
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7, //刻度的段落数
                lineStyle: {
                    color: '#fff',
                    width: 1 //刻度的宽度
                },
                length: -8 //刻度的长度
            }, //刻度样式
            splitLine: { //文字和刻度的偏移量
                show: true,
                length: -20, //便宜的长度
                lineStyle: {
                    color: "#fff",
                }
            }, //分隔线样式
        },
        {
            type: "gauge", //刻度轴表盘
            radius: "80%", //刻度盘的大小
            center: ["50%", "60%"], //刻度盘的位置
            splitNumber: 10, //刻度数量
            startAngle: 180, //开始刻度的角度
            endAngle: 0, //结束刻度的角度
            axisLine: { //刻度的线条
                show: true,
                lineStyle: {
                    width: 15, //定义一个宽15的数轴
                    color: [ //颜色为渐变色
                        [
                            0.9,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: "#5c53de"
                                },
                                {
                                    offset: 1,
                                    color: "#18c8ff"
                                }
                            ])
                        ],
                        [1, "#413e54"]
                    ]
                }
            },
            //分隔线样式。
            splitLine: { //表盘上的轴线
                show: false
            },
            axisLabel: { //表盘上的刻度数值文字
                show: false
            },
            axisTick: { //表盘上的刻度线
                show: false
            },
            pointer: { //表盘上的指针
                show: true
            },
            itemStyle:{//表盘指针的颜色
              color:  '#18c8ff'
            },
            title: { //标题
                show: true,
                offsetCenter: [0, "-26%"], // x, y，单位px
                textStyle: {
                    color: "#fff",
                    fontSize: 20 //表盘上的标题文字大小
                }
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '16%'],
                color: '#ffffff',
                formatter: function(params) {
                    return params
                },
                textStyle: {
                    fontSize: 30
                }
            },
            data: [ //当前数值的数据
                {
                    name: "总车流量",
                    value: 90.61
                }
            ]
        }
    ]
};