
let label = [233, 233, 200, 180, 199, 233, 210, 180]
let value = [233, 233, 200, 180, 199, 233, 210, 180]

option = {
    backgroundColor:"#101e44",
    grid: {
        top: 100,
        containLabel: true
    },
    tooltip:{
        trigger: "axis",
    },
    xAxis: [{
        type: "category",
        boundaryGap: true,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: "#5b657f"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#191514"
            }
        },
        data: label
    }],
    yAxis: [
        {
        type: "value",
        axisLabel: {
            textStyle: {
                color: "#5b657f"
            }
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#283352"
            }
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:"#283352"
            }
        },
        axisTick: {
            show: false
        }
    }
    ],
    series: [{
        name: "报名",
        type: "line",
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                width:4,
                color: "rgba(88,255,255,1)",
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(88,255,255,0.4)"
                        },
                        {
                            offset: 1,
                            color: "rgba(88,255,255,0)"
                        }
                    ],
                    false
                ),
            }
        },
        data: value
    }]
};