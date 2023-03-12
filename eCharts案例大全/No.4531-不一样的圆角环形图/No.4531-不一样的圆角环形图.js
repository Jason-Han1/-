option = {
    backgroundColor: "#000",
    angleAxis: {
        max: 100,
        show: false,
    },
    title: {
        text: "完成率",
        left: "center",
        top: "center",
        textStyle: {
            fontSize: 60,
            fontWeight: 'bold',
            color: "#fff"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{c}%'
    },
    graphic: { //图形中间文字
        type: "text",
        left: "center",
        top: "53%",
        style: {
            text: "2",
            textAlign: "center",
            fill: "#fff",
            fontSize: 60,
            fontWeight: 'bold',
        }
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    polar: {
        radius: ['50%', '65%'],
        center: ['50%', '50%'],
    },
    series: [{
        type: 'bar',
        roundCap: true, //设置圆角
        barWidth: 80,
        showBackground: true,
        backgroundStyle: {
            color: "rgba(19, 48, 80,.8)"
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgb(0, 169, 246)'
                }, {
                    offset: 1,
                    color: 'rgb(0, 106, 221)'
                }]),
            }
        },
        data: [{
            value: 90,

        }, ],
        coordinateSystem: 'polar',
        name: 'A',
        label: {
            show: false,
            position: "top",
            formatter: (p) => {
                return "aaaaaaaaaa"
            },
            color: "red"
        },

    }],
};