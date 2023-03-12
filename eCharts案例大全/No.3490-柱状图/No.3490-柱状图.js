// 指定图表的配置项和数据
var jinzhan = [135, 52, 52, 37, 34, 25, 24, 24, 23, 18, 14, 14, 14, 13, 9, 7 ]
var sanjiao = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAmElEQVRYR+2Vyw2AIBBEZwuxMCuxAi8W4dE216CYeFD24wEPw4VAAvN4ybKCzkM654MANEADNEAD/zagqiOAGYDWnnHNZendW0Vkees5poEKsSWb1tQKL3eaAMdTTxNRCDPcDZCAcIWHAAIQ7vAwgAMiFJ4CaECEw9MADxCp8E8AN4jBKrVWCbvKMPkHuI4RgAZogAa6G9gBRz4yIaDh8qEAAAAASUVORK5CYII='
var datacity =  ['浦东', '闵行', '徐汇', '普陀', '宝山', '黄埔', '长宁', '静安', '杨浦', '虹口', '崇明', '松江', '金山', '嘉定', '青浦', '奉贤']
var jinzhan2=[135, 92, 92, 77, 74, 65, 64, 64,63, 58, 54, 34, 34, 33, 29, 27 ]
var total =140
var option = {
    backgroundColor: '#091534',
    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show:false
    },
    grid: { //图表的位置
        top: '10%',
        left: '0%',
        right: '0%',
        bottom: '10%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        inverse: false,
        axisLabel: { //坐标轴刻度标签的相关设置。
            show:false,
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#6B9DD7',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
            }
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            }
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            },
        },
        axisTick:{
            
            show:false,
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        position: 'bottom',
        axisLabel: { //坐标轴刻度标签的相关设置。
            show:false
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: 'rgba(27,63,129,.4)'
            }
        },
        axisTick:{
            
            show:false,
        },
        data: datacity,
    }, {
        type: 'category',
        inverse: false,
        offset:-10,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16'
            },
            
        },
        data:jinzhan
    }],
    series: [{
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: "#061348"
                }
            },
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAAAAXNSR0IArs4c6QAAAYNJREFUSA211M1Kw0AQB/D/btNPW6z6Dh482Fq9iIIBxR4EfQufI6/hK3hT8BA9VEFBRJT25KFPIPgBxcbaNOtsS6Qfpmna3YHSpGXy29nJDsyKSEFj8FgLm4TkdRkcBpLxNtb3rsS8DoR3Yrj3ODwmsKEDYXLVW2cil0ijZAAG9/Bsl/EBRqSC6AI6kT9AFzIA6ED48DbfHbHGj4Mn+t2l5q+VbSxAiJGFDOcF3QcmHt6KnNNEiRJnanwgIFekAhkLqEBGeiAf2h/n26yRzvR60o6jeHCBfJSehFbgY/u2mGszFOkwpr5d1HYf8GZZzPP/D/oOrcBPvCyzL/GJKr1PrZSB1esdLFqWCM2fuAIfkmOFtqxAgyRJW1Y1b/A+rpLIgISiIFMBUZCpgUmR0CbJBwWFHCuZdK/xNOb/bfxMFfiwPPFNBwWaXQn61PobrwSQUBCiDJCIeSqyfAkrcJGNMbzQa/yqFOgiFUK8HsI56sqBAaSDvBagD1mW19ri+OQx/gvkiMQ+IOnzCgAAAABJRU5ErkJggg==',
            symbolRepeat: "auto",
            symbolMargin: -2,
            symbolSize: [18, 15],
            symbolPosition: "start",
            symbolBoundingData: 40,
            symbolClip: true,
            z: 2,
            data:jinzhan2,
            animationEasing: "elasticOut"
        },
        {
            name: '0-1年',
            type: 'bar',
            barWidth: '18',
            itemStyle: {
                normal: {
                    color: function (params) {
                        if (params.dataIndex < 5) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#b3323c',
                                },
                                {
                                    offset: 1,
                                    color: '#48222f',
                                },
                            ]);
                        } else if (params.dataIndex > 9) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#1f4d9c',
                                },
                                {
                                    offset: 1,
                                    color: '#082a64',
                                },
                            ]);
                        }else{ return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                 {
                                    offset: 0,
                                    color: '#b3883c',
                                },
                                {
                                    offset: 1,
                                    color: '#495036',
                                },
                            ]);
                        }
                    },
                    opacity: 0.7,
                },
            },
            stack: 'sum1',
            data: jinzhan2,
            z: 1
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-109%", // 设置外框粗细
            data:[total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total],
            barWidth: '20',
            itemStyle: {
                normal: {
                    color: "#001a3a", // 填充色
                    barBorderColor: "#194c92", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    label: {
                        // 标签显示位置
                        show: false,
                       
                    },
                }
            },
            z: 0
        },
        {
            name: "三角",
            type: "pictorialBar",
            data: [total, total, total,total,total,total,total,total,total,total,total,total,total,total,total,total],
            symbol:'triangle',
            symbolSize: [10, 7],
            symbolOffset: [0, -12],
            color:'#fff',
            symbolPosition: 'end',
            itemStyle: {
                show:false
            },
            z: 0
        }
    ]
};