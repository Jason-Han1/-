let bgColor = "#1A213E";
let color = [
    "#0090FF",
    "#36CE9E",
    "#FFC005",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];
let echartData = [{
        name: "1",
        value1: 100,
        value2: 233,
        value3: 188
    },
    {
        name: "2",
        value1: 138,
        value2: 233,
        value3: 123
    },
    {
        name: "3",
        value1: 350,
        value2: 200,
        value3: 156
    },
    {
        name: "4",
        value1: 173,
        value2: 180,
        value3: 256
    },
    {
        name: "5",
        value1: 180,
        value2: 199,
        value3: 239
    },
    {
        name: "6",
        value1: 150,
        value2: 233,
        value3: 307
    },
    {
        name: "7",
        value1: 180,
        value2: 210,
        value3: 223
    },
    {
        name: "8",
        value1: 230,
        value2: 180,
        value3: 123
    }
];

let xAxisData = echartData.map(v => v.name);
// ["1", "2", "3", "4", "5", "6", "7", "8"]
let yAxisData1 = echartData.map(v => v.value1);
let yAxisData2 = echartData.map(v => v.value2);
let yAxisData3 = echartData.map(v => v.value3);
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
      right: 40,
      top: 53,
        textStyle: {
          color: "#9FACBC"
        },
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                console.log(v)
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.name}月.${v.seriesName}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                次`;
            })
            
    

            return html
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#ffffff',
                shadowColor: 'rgba(225,225,225,1)',
                shadowBlur: 5
            }
        }
    },
    grid: {
        top: 100,
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}月',
            textStyle: {
                color: "#9FACBC"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#293755"
            }
        },
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        name: '单位：次',
        axisLabel: {
            textStyle: {
                color: "#9FACBC"
            }
        },
        nameTextStyle: {
            color: "#9FACBC",
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#293755"
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
        name: "数据API",
        type: "line",
        smooth: true,
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[0],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[0], 0.5),
                shadowOffsetY: 8
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
                            color: hexToRgba(color[0], 0.2)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[0], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData1
    }, {
        name: "服务API",
        type: "line",
        smooth: true,
        // showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[1],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[1], 0.5),
                shadowOffsetY: 8
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
                            color: hexToRgba(color[1], 0.2)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[1], 0)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[1], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData2
    }, {
        name: "数据回写API",
        type: "line",
        smooth: true,
        // showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[2],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[2], 0.5),
                shadowOffsetY: 8
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
                            color: hexToRgba(color[2], 0.2)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[2], 0)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[2], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData3
    }]
};