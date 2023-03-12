var yData = ["63.12", "36.88"];

option = {
      backgroundColor:"#051F54",
    grid: {
        top: '1%',
        left: "21%",
        right: "22%",
    },
    xAxis: {
        type: "value",
        show: false,
    },
    yAxis: {
        type: "category",
        show: false,
    },
    series: [{
            name: "男",
            data: [-63.12],
            type: "bar",
            stack: "总量",
            barWidth: 10,
            cursor: "default",
            label: {
                show: true,
                formatter: '63.1' + "%",
                color: "rgba(35, 254, 232, 1)",
                position: 'top',
                fontSize: 20,
            },
            itemStyle: {
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "rgba(62,79,122,1)",
                barBorderRadius: [
                    10,
                    0,
                    10,
                    10,
                ],
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0, // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [{
                            offset: 0,
                            color: "rgba(35, 255, 231, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(39, 201, 255, 1)"
                        },
                    ] // 数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                ),
            },
            markPoint: {
                symbol: "circle",
                symbolSize: [100, 100],
                symbolOffset: [-50, 0],
                label: {
                    position: "bottom",
                    padding: [4, 0, 0, 0],
                    fontSize: 16,
                    color: "rgba(189, 209, 248, 1)",
                    formatter: "男性客户",
                },
                data: [{
                    type: "max",
                }, ],
                silent: true,
            },
        },
        {
            name: "女性客户",
            data: [36.88],
            type: "bar",
            stack: "总量",
            barWidth: 10,
            cursor: "default",
            label: {
                show: true,
                formatter: '36.88' + "%",
                color: "rgba(117, 244, 72, 1)",
                position: 'top',
                fontSize: 20,
            },
            itemStyle: {
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "rgba(62,79,122,1)",
                barBorderRadius: [
                    10,
                    10,
                    10,
                    0,
                ],
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0, // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [{
                            offset: 0,
                            color: "rgba(128, 249, 63, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(4, 196, 173, 1)"
                        },
                    ] // 数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                ),
            },
            markPoint: {
                symbol: "circle",
                symbolSize: [100, 100],
                symbolOffset: [50, 0],
                label: {
                    position: "bottom",
                    padding: [4, 0, 0, 0],
                    fontSize: 16,
                    color: "rgba(189, 209, 248, 1)",
                    formatter: "女性客户",
                },
                data: [{
                    type: "max",
                }, ],
                silent: true,
            },
        },
    ],
}