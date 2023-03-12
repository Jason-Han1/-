let xData = ["2018年", "2019年", "2020年", "2021年"];
let legendData = ["第一产业", "第三产业"]; //图例
let firstIndustry = [72, 37, 4, 75]; //第一产业
let thirdIndustry = [8, 15, 34, 31]; //第三产业
option = {
    backgroundColor:"#061740",
    grid: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        top: '15%',
        left: '3%',
        right: '3%',
        bottom: '20%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        orient: 'vertical',
        left: 'center',
        bottom: 'bottom',
        padding: [10, 0, 0, 0],
        data: legendData,
        //图例滚动
        // type: 'scroll',
        //图例文字样式
        textStyle: {
            color: 'rgba(36, 173, 254, 1)',
            fontSize:"1rem"
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            interval: 1,
            axisLabel: {
                color: 'rgba(36, 173, 254, 1)',
                fontSize:"1rem"
            },
            axisLine: {
                show: false
            },
            data: xData,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} '
            },
            axisLabel: {
                textStyle: {
                    //坐标轴颜色
                    color: 'rgba(36, 173, 254, 1)',
                    fontSize:"1rem"
                }
            },
            //坐标轴线样式
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid', //solid实线;dashed虚线
                    color: 'rgba(36, 173, 254, 0.2)'
                }
            },
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}'
            },
            axisLabel: {
                textStyle: {
                    //坐标轴颜色
                    color: 'rgba(36, 173, 254, 1)',
                    fontSize:"1rem"
                }
            },
            //坐标轴线样式
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(36, 173, 254, 0.2)'
                }
            },
        }
    ],
    series: [
        {
            name: "第一产业",
            data: firstIndustry,
            type: 'line',
            smooth: true, //true曲线; false折线
            itemStyle: {
                normal: {
                    color: '#ffc600', //改变折线点的颜色
                    lineStyle: {
                        color: '#ffc600', //改变折线颜色
                        type: 'solid'
                    }
                }
            },
            areaStyle: {
                //折线图颜色半透明
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(255,198,0, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255,198,0, 0.1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name: "第三产业",
            data: thirdIndustry,
            type: 'line',
            smooth: true, //true曲线; false折线
            itemStyle: {
                normal: {
                    color: '#24adfe', //改变折线点的颜色
                    lineStyle: {
                        color: '#24adfe', //改变折线颜色
                        type: 'solid'
                    }
                }
            },
            areaStyle: {
                //折线图颜色半透明
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(36,173,254, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(52,112,252, 0.1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    ]
};
