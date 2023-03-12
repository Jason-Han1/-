let bgColor = "#fff";
let color = [
    "#1EB66D",
    "#36CE9E",
    "#FFC005",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];
let echartData = [{
        name: "10/1",
        value: 100,
    },
    {
        name: "10/2",
        value: 138,
    },
    {
        name: "10/3",
        value: 350,
    },
    {
        name: "10/4",
        value: 173,
    },
    {
        name: "10/5",
        value: 180,
    },
    {
        name: "10/6",
        value: 150,
    },
    {
        name: "10/7",
        value: 180,
    },
    {
        name: "10/8",
        value: 230,
    }
];

let xAxisData = echartData.map(v => v.name);
let seriesData = echartData.map(v => v.value);
const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

option = {
    backgroundColor: bgColor,
    color: color,
    legend: {
        show: false,
        type: 'plain',
        icon: 'circle'
    },
    tooltip: {
        trigger: "axis",
    },
    grid: {
        top: 100,
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: function(value, index) {
                if (index === 0 || index === xAxisData.length - 1) {
                    return value;
                }
            },
            textStyle: {
                color: "#999999"
            },
        },
        axisLine: {
            lineStyle: {
                color: "#999999"
            }
        },
        axisTick: {
            show: false
        },
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        axisLabel: {
            show: false,
            textStyle: {
                color: "#666"
            }
        },
        nameTextStyle: {
            color: "#666",
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: "dashed",
                color: "#E9E9E9"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: "2019",
        type: "line",
        smooth: true,
        symbol: 'none',
        lineStyle: {
            normal: {
                color: color[0],
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[1], 0.5)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[1], 0.1)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[1], 0.1),
                shadowBlur: 10
            }
        },
        data: seriesData
    }]
};