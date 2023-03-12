//echarts配置
const fontSize = 36;
const fontColor = '#7DD6EA';
const fontFamily = 'MicrosoftYaHei';

const lineColor = '#4B93B5';
const splitLineColor = '#4B93B5';
const legendColor = "#7DD6EA";
const legendFontSize = 30;
const lineWidth = 2;
const line = 3;
//实际值
let data1 = [89, 80, 72, 62, 45, 0];
//计划值
let data2 = [89, 80, 72, 62, 45, 33];
option = {
    backgroundColor:'#143D58',
    tooltip: {
        show: false,
        trigger: 'axis',
        formatter: '{b0}: {c0}℃',
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
    },
    yAxis: {
        name: '单位(小时)\n',
        nameTextStyle: {
            color: fontColor,
            fontSize: fontSize,
            fontFamily: fontFamily,
            lineHeight: 30
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: lineColor,
                width: lineWidth
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: splitLineColor,
            }
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: fontColor,
                fontSize: fontSize,
                fontFamily: fontFamily
            },
        },
    },
    xAxis: [{
            data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年', ],
            name: '\n',
            nameTextStyle: {
                color: fontColor,
                fontSize: fontSize,
                fontFamily: fontFamily,
                lineHeight: 30
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: lineColor,
                    width: lineWidth
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: splitLineColor,
                }
            },
            axisLabel: {
                margin: 30,
                textStyle: {
                    color: fontColor,
                    fontSize: fontSize,
                    fontFamily: fontFamily
                },
            },
        },
        {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                show: false,
            },
            data: [0, 0, 0, 0, 0, 0],
        },
        {
            name: '',
            nameGap: '50',
            axisTick: 'none',
            axisLine: 'none',
            data: [],
        },
    ],
    series: [{
            name: '℃',
            type: 'bar',
            xAxisIndex: 0,
            data: data1,
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#43AFF5',
                        },
                        {
                            offset: 1,
                            color: '#3D6BED',
                        },
                    ]),
                },
            },
            z: 2,
        },
        {
            name: '温度背景框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: data2,
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: '#10354ccc',
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: fontColor,
                    fontSize: 36
                }
            },
            z: 1,
        },
        {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: data2,
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 5,
                    borderColor: '#18B1FB'
                },
            },
            z: 0,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0],
            xAxisIndex: 2,
            symbolSize: 43,
            itemStyle: {
                normal: {
                    color: (params) => {
                        if (data1[params.dataIndex] === 0) {
                            return '#10354ccc'
                        } else {
                            return '#43ADF5'
                        }
                    },
                    opacity: 1,
                },
            },
            z: 2,
        },
        {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0],
            xAxisIndex: 1,
            symbolSize: 43,
            itemStyle: {
                normal: {
                    color: '#10354ccc',
                    opacity: 1,
                },
            },
            z: 1,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0],
            xAxisIndex: 2,
            symbolSize: 49,
            itemStyle: {
                normal: {
                    color: '#43ADF5',
                    opacity: 1,
                },
            },
            z: 0,
        },
    ],
};