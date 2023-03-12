option = {
    backgroundColor: "#fff",
    angleAxis: {
        max: 100,
        show: false,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{c}%'
    },
    graphic: { //图形中间文字
        type: "text",
        left: "center",
        top: "center",
        style: {
            text: "完成率 ",
            textAlign: "center",
            fill: "#666",
            fontSize: 14,
            fontWeight: 'bold'
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
        roundCap: true,
        barWidth: 40,
        showBackground: true,
        backgroundStyle: {
            color: "#f0f0f0"
        },
        itemStyle: {
            normal: {
                opacity: 1,
                color: '#2d82ff',
            },

        },
        data: [{
            value: 90,
            itemStyle: {
                color: '',
                shadowBlur: 10, //浅蓝色阴影
                shadowColor: 'rgba(0, 103, 255, 0.2)',
                shadowOffsetX: -5,
                shadowOffsetY: 5,
            },

        }, ],
        coordinateSystem: 'polar',
        name: 'A',
        label: {
            show: true,
        },

    }],
};