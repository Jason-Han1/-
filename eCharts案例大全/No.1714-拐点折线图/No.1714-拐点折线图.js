// 提示标题
const nameArr = ['报警','故障','提示']
let dateArray = ['9/3','9/4','9/5','9/6','9/7','9/8','9/9','9/10']; // 日期
let yData1 = [10,20,30,50,22,33,11,55]; 
let yData2 = [30,10,20,55,50,22,33,11]; 
let yData3 = [11,10,30,50,22,33,55,20]; 

option = {
    backgroundColor: '#313131',
    color: ['red', 'yellow', 'blue'],
    tooltip: {
        backgroundColor: 'rgba(50,50,50,0.7)',
        borderWidth: 0,
        padding: [5, 10],
        textStyle: {
            color: '#FFFFFF',
            fontFamily: 'sans-serif'
        },
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        // 格式化提示内容
        formatter: function (params) {
            return params[1].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#EB6060'></span>" +
                params[0].seriesName + ' : ' + params[0].value + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#E3B947'></span>" +
                params[1].seriesName + ' : ' + params[1].value + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#17FFF1'></span>" +
                params[2].seriesName + ' : ' + params[2].value + '<br/>'
        },
    },
    title: {
        text: "单位：条",
        top: -5,
        left: -5,
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '14',
            fontWeight: 400,
            fontFamily: 'SourceHanSansCN-Regular'
        }
    },
    grid: {
        top: '30',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, //坐标轴两边留白
        data: dateArray,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#FFFFFF',
                fontStyle: '400',
                fontSize: '14',
                fontFamily: 'SourceHanSansCN-Regular'
            }
        },
        axisTick: {
            //坐标轴刻度相关设置
            show: false,
        },
        axisLine: {
            //坐标轴轴线相关设置
            show: false
        },
        splitLine: {
            //坐标轴分隔线
            show: false
        }
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontStyle: 400,
                fontSize: '14',
                fontFamily: 'SourceHanSansCN-Regular'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.12)'
            }
        }

    }],
    series: [
        // 红色折线图
        {
            name: nameArr[0],
            type: 'line',
            // 拐点标记配置项
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: "#EB6060",
                    borderWidth: 1,
                    lineStyle: {
                        color: "#EB6060",
                        width: 2
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(235, 96, 96, 0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(235, 96, 96, 0)'
                        }])
                    }
                }
            },
            symbol: '/assets/images/red-dot.png',
            symbolSize: 11,
            data: yData1
        },
        // 黄色折线图圆点
        {
            name: nameArr[1],
            type: 'line',
            // 拐点标记配置项
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: "#E3B947",
                    borderWidth: 1,
                    lineStyle: {
                        color: "#E3B947",
                        width: 2
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(227, 185, 71, 0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(227, 185, 71, 0)'
                        }])
                    }
                }
            },
            symbol: '/assets/images/yellow-dot.png',
            symbolSize: 11,
            data: yData2
        },
        // 蓝色折线图圆点
        {
            name: nameArr[2],
            type: 'line',
            // 拐点标记配置项
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: "#17FFF1",
                    borderWidth: 1,
                    lineStyle: {
                        color: "#17FFF1",
                        width: 2
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(23, 255, 241, 0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(23, 255, 241, 0)'
                        }])
                    }
                }
            },
            symbol: '/assets/images/blue-dot.png',
            symbolSize: 11,
            data: yData3
        }
    ]
};