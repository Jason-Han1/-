//echarts配置
var fontSize = 28;
var fontColor = '#78c5ec';
// var fontFamily = 'SourceHanSansCN';
var fontFamily = 'MicrosoftYaHei';

var lineColor = '#0079D3';
var splitLineColor = '#012548';
var legendColor = "#CBCDD1";
var legendFontSize = 28;
var lineWidth = 2;
var line = 3;
let yAxisData = ['巡视', '检修', '缺陷'];
    option = {
        backgroundColor:'#000',
        tooltip: {
            show: true,
            trigger: 'axis',
            textStyle:{
                fontSize:fontSize
            }
        },
        title:{
            text:'月度(个)',
            textStyle:{
                fontSize:fontSize,
                color:legendColor,
                fontFamily:fontFamily,
                fontWeight:'normal'
            },
            top:'6%',
            left:'5%'
        },
        legend: {
            show: true,
            right: 'center',
            top:'2%',
            icon:'roundRect',
            itemWidth: 39,
            itemHeight: 23,
            itemGap:20,
            textStyle: {
                color: legendColor,
                fontSize: legendFontSize,
                fontFamily:fontFamily
            },
        },
        grid: [{
            show: false,
            left: '15%',
            top: '15%',
            width: '35%',
            containLabel: true,
            bottom: 60
        }, {
            show: false,
            left: '6%',
            top: '15%',
            bottom: 60,
            width: '0%',
            // containLabel: true,
        }, {
            show: false,
            left: '50%',
            top: '15%',
            bottom: 60,
            containLabel: true,
            width: '35%',
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLabel: {
                show: false,
                color: '#979797',
                margin: 0
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }, {
            gridIndex: 1,
            show: true,
            axisLabel: {
                show:false,
                color: '#979797',
                margin: 0
            },
            splitLine: {
                lineStyle: {
                    color: '#979797',
                    type: 'dashed'
                }
            }
        }, {
            gridIndex: 2,
            type: 'value',
            axisLabel: {
                show: false,
                color: '#979797',
                margin: 0
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [
            {
                type: 'category',
                inverse: true,
                position: 'right',
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#979797'
                    }
                },
                axisTick: {
                    show: false
                },
                data: yAxisData
            },
            {
                type: 'category',
                inverse: true,
                gridIndex: 1,
                position: 'left',
                axisLabel: {
                    align: 'left',
                    fontSize: 32,
                    fontFamily:fontFamily,
                    color: `#00F5E5`
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#979797'
                    }
                },
                axisTick: {
                    show: false
                },
                data: yAxisData
            },
            {
                type: 'category',
                inverse: true,
                gridIndex: 2,
                position: 'left',
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#00C0D0',
                        width:lineWidth
                    }
                },
                axisTick: {
                    show: false
                },
                data: yAxisData
            }
        ],
        series: [{
            type: 'bar',
            barWidth: 22,
            name: '输电',
            stack:'总1',
            label: {
                normal: {
                    show: true,
                    position:'top',
                    fontSize:fontSize,
                    fontFamily:fontFamily,
                    offset:[-20,0]
                },
            },
            itemStyle: {
                normal: {
                    color: '#E3D500'
                }
            },
            data: [1172.6,1113.1,1111.6]
        },
            {
                type: 'bar',
                barWidth: 22,
                name: '变电',
                stack:'总1',
                label: {
                    normal: {
                        show: true,
                        position:'bottom',
                        fontSize:fontSize,
                        fontFamily:fontFamily,
                        offset:[-20,0]
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#1AA6FE'
                    }
                },
                data: [1273.3,1160.8,1121.2]
            },
            {
                type: 'bar',
                barWidth: 22,
                name: '配电',
                stack:'总1',
                label: {
                    normal: {
                        show: true,
                        position:'top',
                        fontSize:fontSize,
                        fontFamily:fontFamily,
                        offset:[-60,0]
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#00FDEB',
                        barBorderRadius:[10,0,0,10]
                    }
                },
                data: [3856.2,2148.9,2133.3]
            },
            {
                type: 'bar',
                barWidth: 22,
                xAxisIndex: 2,
                yAxisIndex: 2,
                name: '输电',
                stack:'总2',
                label: {
                    normal: {
                        show: true,
                        position:'top',
                        fontSize:fontSize,
                        fontFamily:fontFamily,
                        offset:[30,0]
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#E3D500'
                    }
                },
                data: [846,1128,1176]
            },
            {
                type: 'bar',
                barWidth: 20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                name: '变电',
                stack:'总2',
                label: {
                    normal: {
                        show: true,
                        position:'bottom',
                        fontSize:fontSize,
                        fontFamily:fontFamily,
                        offset:[20,0]
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#1AA6FE'
                    }
                },
                data: [1296,1395,2249]
            },
            {
                type: 'bar',
                barWidth: 20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                name: '配电',
                stack:'总2',
                label: {
                    normal: {
                        show: true,
                        position:'top',
                        fontSize:fontSize,
                        fontFamily:fontFamily,
                        offset:[60,0]
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#00FDEB',
                        barBorderRadius:[0,10,10,0]
                    }
                },
                data: [3771,631,1371]
            }
        ]
    };