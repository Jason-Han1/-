let bgColor = "#fff";
let color = [
    "#FFC005",
    "#0090FF",
    "#36CE9E",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];


let xAxisData = ["1", "2", "3", "4", "5", "6", "7", "8"];
let yAxisData1 = [100, 138, 350, 173, 180, 150, 180, 230];
let yAxisData2 = [73, 98, 103, 77, 32, 87, 100, 90];
let yAxisData3 = [93, 33, 79, 110, 63, 23, 90, 110];

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
      show: true,
      right: 10,
      top: 10
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                console.log(v)
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                万元`;
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
        // boundaryGap: false,
        axisLabel: {
            formatter: '{value}月',
            textStyle: {
                color: "#333"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#D9D9D9"
            }
        },
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        name: '单位：万千瓦时',
        axisLabel: {
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
        name: "基准负荷",
        type: "line",
        smooth: true,
        showSymbol: false,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[0],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[0], 0.5),
                shadowOffsetY: 8
            }
        },
        itemStyle: {
          normal:{
              borderColor: color[0],
              borderWidth: 2
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
                            color: hexToRgba(color[0], 0.4)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0.05)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[0], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData1
    },{
        name: "需求量",
        type: "bar",
        barWidth: 20,
        zlevel: 3,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: '#1890FF'
                        },
                        {
                            offset: 1,
                            color: '#6EBDFF'
                        }
                    ],
                    false
                ),
            }
        },
        data: yAxisData2
    }, {
        name: "执行量",
        type: "bar",
        barWidth: 20,
        zlevel: 3,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: '#10D294'
                        },
                        {
                            offset: 1,
                            color: '#67DAB4'
                        }
                    ],
                    false
                ),
            }
        },
        data: yAxisData3
    }]
};