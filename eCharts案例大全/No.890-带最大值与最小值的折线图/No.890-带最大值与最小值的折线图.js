let color = ['#8B5CFF', '#00CA69'];

let xAxisData = ['1', '2', '3', '4', '5', '6', '7', '8'];
let yAxisData1 = [100, 138, 350, 173, 180, 150, 180, 230];
let yAxisData2 = [233, 233, 200, 180, 199, 233, 210, 180];

const hexToRgba = (hex, opacity) => {
    let rgbaColor = '';
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt(
            '0x' + hex.slice(5, 7)
        )},${opacity})`;
    }
    return rgbaColor;
};

option = {
    backgroundColor: '#fff',
    color: color,
    legend: {
        top: 20,
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            let html = '';
            params.forEach((v) => {
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                    color[v.componentIndex]
                };"></span>
                ${v.seriesName}2020.${v.name}  
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px;margin-left:5px">${
                    v.value
                }</span>
                万元`;
            });
            return html;
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#ffffff',
                shadowColor: 'rgba(225,225,225,1)',
                shadowBlur: 5,
            },
        },
    },
    grid: {
        top: 100,
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                formatter: '2020-{value}',
                textStyle: {
                    color: '#333',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#D9D9D9',
                },
            },
            data: xAxisData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位（万/亿KWh）',
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            nameTextStyle: {
                color: '#666',
                fontSize: 12,
                lineHeight: 40,
            },
            // 分割线
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            // name: "2018",
            name: '预测出电量',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[0], 0.5),
                    shadowOffsetY: 8,
                },
            },
            // markPoint: {
            //     symbol: 'pin', //标记(气泡)的图形
            //     symbolSize: 50, //标记(气泡)的大小
            //     itemStyle: {
            //         // color: '#4587E7', //图形的颜色。
            //         borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
            //         borderWidth: 0, //描边线宽。为 0 时无描边。
            //         borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
            //     },
            //     data: [
            //         { type: 'max', name: '最大值' },
            //         { type: 'min', name: '最小值' },
            //     ],
            // },
            // markLine: {
            //     data: [{ type: 'average', name: '平均值' }],
            // },
            //设置最大值最小值
            markPoint: {
                data: [
                    {
                        type: 'max',
                        name: '最大值',
                    },
                    {
                        type: 'min',
                        name: '最小值',
                    },
                ],
            },
            symbol: 'circle', //数据交叉点样式
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: hexToRgba(color[0], 0.3),
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.1),
                            },
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10,
                },
            },
            data: yAxisData1,
        },
        {
            name: '实际用电量',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[1],
                    shadowBlur: 3,
                    shadowColor: hexToRgba(color[1], 0.5),
                    shadowOffsetY: 8,
                },
            },
            //设置最大值最小值
            markPoint: {
                data: [
                    {
                        type: 'max',
                        name: '最大值',
                    },
                    {
                        type: 'min',
                        name: '最小值',
                    },
                ],
            },
            symbol: 'circle', //数据交叉点样式 (实心点)
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: hexToRgba(color[1], 0.3),
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[1], 0.1),
                            },
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[1], 0.1),
                    shadowBlur: 10,
                },
            },
            data: yAxisData2,
        },
    ],
};
