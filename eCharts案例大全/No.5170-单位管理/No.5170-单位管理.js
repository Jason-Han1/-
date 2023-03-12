option = {
    tooltip: {
        formatter: "{b}:{c}家",
    },
    grid: {
        left: "8%",
        right: "5%",
        bottom: "0%",
        top: "15%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#333",
            },
        },
        axisLabel: {
            fontSize: 14,
            interval: 0,
        },
        axisTick: {
            //x轴刻度线
            show: true,
        },
        data: [
            "设计单位",
            "基建单位",
            "检修单位",
            "运行/维护单位"
        ],
    },
    yAxis: {
        type: "value",
        name: "数量/家",
        nameLocation: "end", //坐标位置，支持start,end，middle
        nameTextStyle: {
            //字体样式
            fontSize: 14, //字体大小
            padding: 0, //距离坐标位置的距离
        },
        min: 0,
        axisLine: {
            lineStyle: {
                color: "#333",
            },
            show: true,
        },
        axisLabel: {
            show: true,
            ontSize: 24,
            formatter: "{value}",
        },
        splitLine: {
            show: true,
        },
        axisTick: {
            show: true,
        },
    },
    series: [{
        type: "bar",
        barWidth: 50,
        data: [170, 350, 103, 732],
        itemStyle: {
            normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [30, 30, 0, 0],
                label: {
                    show: true,
                    position: "top",
                    formatter: "{c}",
                    fontSize: 22
                },
            },
        },
    }, ],
    color: "#00bfbf",
};