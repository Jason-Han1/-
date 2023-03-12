option = {
    backgroundColor: 'black',
    visualMap: {
        show: false,
        min: 0,
        max: 90,
        inRange: {
            color: ["#57C5D2"]
        }
    },
    tooltip: {
        trigger: "item"
    },
    angleAxis: {
        type: "category",
        data: [
            "横栏",
            "古镇",
            "东升",
            "大涌",
            "三乡",
            "南朗",
            "西区",
            "小榄",
            "东区",
            "火炬",
            "南头",
            "板芙"
        ],
        axisLine: {
            lineStyle: {
                color: "#80E2FF"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#80E2FF"
            }
        },
        axisTick: {
            show: false
        },
        boundaryGap: true,
        zlevel: 10
    },
    radiusAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    polar: {},
    series: [{
        type: "bar",
        data: [50, 31, 30, 40, 26, 73, 54, 34, 29, 51, 18, 49],
        coordinateSystem: "polar",
        name: "区域分布详情",
        stack: "a",
        itemStyle: {
            borderWidth: 4,
            borderColor: 'black',//同背景色
        }
    }]
};