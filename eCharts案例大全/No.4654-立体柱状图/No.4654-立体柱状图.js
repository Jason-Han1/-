const data = [20, 82, 91, 34, 90, 30, 10]
const sideData = data.map(item => item + 1)

option = {

    backgroundColor: "#041730",
    tooltip: {
        trigger: 'axis',
        formatter: "{b} : {c}",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        data: ['辅助功能', '车体', '辅助系统', '全列车控制', '转向架', '牵引系统', '制动'],
        //坐标轴
        axisLine: {
            show: false
        },
        //坐标值标注
        axisLabel: {
            show: true,
            textStyle: {
                color: '#B3D6FF',
            },
            rotate: -90
        },
        axisTick: {
          show: false
        }
    },
    yAxis: {
        //坐标轴
        axisLine: {
            show: false,
        },
        //坐标值标注
        axisLabel: {
            show: true,
            textStyle: {
                color: '#7094CF',
            }
        },
        //分格线
        splitLine: {
            show: false
        },
        axisTick: {
            lineStyle: {
                color: '#354869'
            }
        }
    },
    series: [
        {
        name: 'a',
        tooltip: {
            show: false
        },
        type: 'bar',
        barWidth: 15,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#274A82" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#73C4F1" // 100% 处的颜色
                }], false),
                borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#203F75" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#96E4FB" // 100% 处的颜色
                }], false),
                // borderColor: '#f00',
                borderWidth: 1
            }
        },
        data: data,
        barGap: 0
    }, 
    {
        type: 'bar',
        barWidth: 6,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#19315F" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#91E8FC" // 100% 处的颜色
                }], false),
                borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#29477D" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#B5F1F9" // 100% 处的颜色
                }], false),
                borderWidth: 1
            }
        },
        barGap: 0,
        data: sideData
    }, 
    {
        name: 'b',
        tooltip: {
            show: false
        },
        type: 'pictorialBar',
        itemStyle: {
            borderWidth: 1,
            borderColor: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#B5F1F9" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#29477D" // 100% 处的颜色
                }], false),
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#91E8FC" // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#19315F" // 100% 处的颜色
                }], false)
        },
        symbol: 'path://M 100,0 l 120,0 l -60,60 l -120,0 z',
        symbolSize: ['21', '6'],
        symbolOffset: ['0', '-6.5'],
        // symbolRotate: -5,
        symbolPosition: 'end',
        data: data,
        z: 3
    }
    ]
};