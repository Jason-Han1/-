let bgColor = "#040811";
let color = [
    "#0090FF",
    "#EE8931",
    "#8B5CFF"
];
let echartData = [{
        name: "1月",
        value1: 13512,
        value2: 0,
        value3: 0,
    },
    {
        name: "2月",
        value1: 9806,
        value2: 0,
        value3: 0,
    },
    {
        name: "3月",
        value1: 19727,
        value2: 0,
        value3: 0,
    },
    {
        name: "4月",
        value1: 17046,
        value2: 12689,
        value3: 7479
    },
    {
        name: "5月",
        value1: 17780,
        value2: 13396,
        value3: 6355
    },
    {
        name: "6月",
        value1: 19359,
        value2: 13220,
        value3: 5940,
    },
    {
        name: "7月",
        value1: 16229,
        value2: 11836,
        value3: 10234,
    },
    {
        name: "8月",
        value1: 18176,
        value2: 13478,
        value3: 10755,
    },
    {
        name: "9月",
        value1: 18515,
        value2: 12911,
        value3: 9806,
    },
    {
        name: "10月",
        value1: 13658,
        value2: 9479,
        value3: 8613,
    },
    {
        name: "11月",
        value1: 16364,
        value2: 10839,
        value3: 8826,
    },
    {
        name: "12月",
        value1: 13973,
        value2: 8816,
        value3: 7291,
    }
];

let legendItem = ['实际接受服务','持续接受服务','完成两次面对面服务'];

let xAxisData = echartData.map(v => v.name);
//  ["1", "2", "3", "4", "5", "6", "7", "8"]
let yAxisData1 = echartData.map(v => v.value1);
// [100, 138, 350, 173, 180, 150, 180, 230]
let yAxisData2 = echartData.map(v => v.value2);
// [233, 233, 200, 180, 199, 233, 210, 180]
let yAxisData3 = echartData.map(v => v.value3);
//[133,133,100,80,99,133,110,80]
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
      center: true,
      top: 10,
      data: legendItem,
      textStyle: {
            color: '#00DEFF',
      },
    },
    // calculable: true,
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                console.log(v)
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                万元`;
            })
            
    

            return html
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        // axisPointer: {
        //     type: 'shadow',
        //     shadowStyle: {
        //         // color: '#ffffff',
        //         shadowColor: 'rgba(225,225,225,1)',
        //         shadowBlur: 5
        //     }
        // }
    },
    grid: {
        top: 100,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255,0.5)"
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: 'rgba(255, 255, 255,0.7)', // x轴颜色
                fontWeight: 'normal',
                fontSize: '14',
                lineHeight: 22
            }
        },
       
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        name: '(t)',
        axisLabel: {
            textStyle: {
                color: "rgba(255, 255, 255,0.7)"
            }
        },
        nameTextStyle: {
            color: "rgba(255, 255, 255,0.7)",
            fontSize: 12,
            lineHeight: 40,
            padding:[0,0,0,-20],
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255,0.5)"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "rgba(255, 255, 255,0.5)"
            }
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: legendItem[0],
        type: "line",
        smooth: false, //是否平滑
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[0],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[0], 0.5),
                shadowOffsetY: 0
            }
        },
        // areaStyle: {
        //     normal: {
        //         color: new echarts.graphic.LinearGradient(
        //             0,
        //             0,
        //             0,
        //             1,
        //             [{
        //                     offset: 0,
        //                     color: hexToRgba(color[0], 0.3)
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: hexToRgba(color[0], 0.1)
        //                 }
        //             ],
        //             false
        //         ),
        //         shadowColor: hexToRgba(color[0], 0.1),
        //         shadowBlur: 10
        //     }
        // },
        data: yAxisData1
    }, {
        name: legendItem[1],
        type: "line",
        smooth: false,
        // showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[1],
                shadowBlur: 0,
                shadowColor: hexToRgba(color[1], 0.5),
                shadowOffsetY: 0
            }
        },
        // areaStyle: {
        //     normal: {
        //         color: new echarts.graphic.LinearGradient(
        //             0,
        //             0,
        //             0,
        //             1,
        //             [{
        //                     offset: 0,
        //                     color: hexToRgba(color[1], 0.3)
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: hexToRgba(color[1], 0.1)
        //                 }
        //             ],
        //             false
        //         ),
        //         shadowColor: hexToRgba(color[1], 0.1),
        //         shadowBlur: 10
        //     }
        // },
        data: yAxisData2
    },
    {
        name: legendItem[2],
        type: "line",
        smooth: false,
        // showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[2],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[2], 0.5),
                shadowOffsetY: 0
            }
        },
        // areaStyle: {
        //     normal: {
        //         color: new echarts.graphic.LinearGradient(
        //             0,
        //             0,
        //             0,
        //             1,
        //             [{
        //                     offset: 0,
        //                     color: hexToRgba(color[2], 0.3)
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: hexToRgba(color[2], 0.1)
        //                 }
        //             ],
        //             false
        //         ),
        //         shadowColor: hexToRgba(color[2], 0.1),
        //         shadowBlur: 10
        //     }
        // },
        data: yAxisData3
    }
    ]
};