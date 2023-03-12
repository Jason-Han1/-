var option = {
    backgroundColor: "#0d235e",
    tooltip: {
        trigger: "axis"
    },
    grid: {
        top: "14%",
        left: "4%",
        right: "4%",
        bottom: "12%",
        containLabel: true
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
            "2012年",
            "2013年",
            "2014年",
            "2015年",
            "2016年",
            "2017年",
            "2018年"
        ],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "white"
        }
    },
    yAxis: {
        name: "",
        type: "value",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
            name: "line1",
            type: "line",
            smooth: true,
            lineStyle: {
                color: "#1CC2EB"
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0.18,
                                color: "rgba(51, 58, 82, 0)"
                            },
                            {
                                offset: 1,
                                color: "rgba(235, 238, 193,0.36)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                    shadowBlur: 10
                }
            },
            symbol: "none",
            data: [
                451,
                352,
                303,
                534,
                95,
                236,
                217,
            ]
        },
        {
            name: "line2",
            type: "line",
            smooth: true,
            itemStyle: {
                color: "#EBEEC1",
                width: 10
            },
            lineStyle: {
                color: "#EBEEC1"
            },
            markLine: {
                label:{
                    show:false
                },
                lineStyle:{
                    type:"solid",
                },
                
                data: [{
                        yAxis: 0
                    },
                    {
                        yAxis: 300
                    },
                    {
                        yAxis: 600
                    }
                ]
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0.12,
                                color: "rgba(51, 58, 82, 0)"
                            },
                            {
                                offset: 1,
                                color: "rgba(28, 194, 235,0.36)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                    shadowBlur: 10
                }
            },
            symbol: "none",
            data: [
                360,
                545,
                80,
                192,
                330,
                98,
                234
            ]
        }
    ]
};