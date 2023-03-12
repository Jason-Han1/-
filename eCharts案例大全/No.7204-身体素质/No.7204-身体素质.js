
let yData = ["优秀", "良好", "及格", "不及格"];
let xData = [1000, 600, 400, 150];
let amount = [50000000, 22000000, 10000000, 5000000, 2000000];
let bgData = [1600, 1600, 1600, 1600, 1600];

option = {
    backgroundColor:'#0F201C',
    grid: {
        left: "5%",
        right: "5%",
        bottom: "5%",
        top: "10%",
        containLabel: true
    },
    
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "none"
        },
        formatter: function(params) {
            return (
                params[0].name +
                "<br/>" +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(74,202,150,0.9)'></span>" +
                params[0].seriesName +
                " : " +
                params[0].value +
                "人<br/>"
            );
        }
    },
    xAxis: {
        show: true,
        type: "value",
        axisLabel: {
            show: true,
            textStyle: {
                color: "#81ab9a"
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: [{
            type: "category",
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#81ab9a"
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#6a9084"
                }
            },
            data: yData
        },
        {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: false,
            axisLabel: {
                textStyle: {
                    color: "#ffffff",
                    fontSize: '12'
                }
            },
            data: xData
        }
    ],
    series: [{
            name: "身体素质",
            type: "bar",
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: "#4aca96"
                }
            },
            barWidth: 20,
            data: xData
        },
        {
            name: "背景",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            data: bgData,
            itemStyle: {
                normal: {
                    color: "#4b695e",
                    barBorderRadius: 0
                }
            }
        }
    ]
};