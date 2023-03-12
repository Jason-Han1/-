
let color = [
    "#8B5CFF",
    "#00CA69"
];

let xAxisData = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
let yAxisData1 = [700, 650, 510, 600, 700, 800, 1000, 790];
let yAxisData2 = [400, 500, 690, 600, 500, 900, 1200, 920];

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
    backgroundColor: '#fff',
    color: color,
    legend: {
      top: 0
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}2020.${v.name}  
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px;margin-left:5px">${v.value}</span>
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
        left: '1%',
        right: '3%',
        top: '10%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: "#333"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#D9D9D9"
            }
        },
        data: xAxisData,
    }],
    yAxis: [{
        type: "value",
        name: '',
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
        // 分割线
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
        // name: "2018",
        name: "固定",
        type: "line",
        smooth: true,
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
        symbol: 'circle',//数据交叉点样式
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[0], 0.3)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0.1)
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
        name: "流动",
        type: "line",
        smooth: true,
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
        symbol: 'circle',//数据交叉点样式 (实心点)
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[1], 0.3)
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
        data: yAxisData2
    }]
};