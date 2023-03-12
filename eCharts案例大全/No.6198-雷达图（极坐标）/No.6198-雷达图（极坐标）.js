option = {
    radar: {
        name: {
            textStyle: {
                color: "#01C1DF",
                fontSize: 14
            }
        },
        shape: "polygon",
        center: ["50%", "50%"],
        radius: "80%",
        scale: true,
        indicator: [{
                name: "横向社团",
                max: 100
            },
            {
                name: "投标人与招标人抱团",
                max: 100
            },
            {
                name: "投标人与招标代理抱团",
                max: 100
            },
            {
                name: "投标人-专家",
                max: 100
            },
            {
                name: "中标率异常",
                max: 100
            },
            {
                name: "投标效能",
                max: 100
            }
        ],
        splitArea: {
            show: false
        }
    },
    polar: {},
    angleAxis: {
        min: 0,
        max: 360,
        interval: 5,
        clockwise: false,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        min: 0,
        max: 100,
        interval: 20,
        splitLine: {
            show: false
        }
    },
    series: [{
        type: "radar",
        areaStyle: {
            normal: {
                color: "#01C1DF",
                opacity: 0.3
            }
        },
        lineStyle: {
            width: 0
        },
        data: [{
            value: [20, 50, 60, 60, 90, 80]
        }]
    }]
};