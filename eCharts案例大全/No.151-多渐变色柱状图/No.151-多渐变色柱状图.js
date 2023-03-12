const xAxisData = ['8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#', '16#', '17#']

const seriesData = [
    {name: "系列1", data: [15, 51, 8, 46, 15, 51, 8, 46, 15, 51], colors: [ "rgba(245, 171, 82, 1)","rgba(251, 213, 138, 0)"]},
    {name: "系列2", data: [65, 45, 24, 48, 65, 45, 24, 48, 65, 45], colors: ["rgba(214, 0, 1, 1)", "rgba(237, 0, 2, 0)"]},
    {name: "系列3", data: [18, 4, 60, 6, 18, 4, 60, 6, 18, 4], colors: ["rgba(0, 222, 193, 1)", "rgba(0, 241, 226, 0)"]},
]

const getSeries = () => {
    return seriesData.map(item => {
        return {
            name: item.name,
            type: 'bar',
            data: item.data,
            barWidth: 10,
            barGap: 0.5, //柱间距离
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: item.colors[0],
                        },
                        {
                            offset: 1,
                            color: item.colors[1],
                        },
                    ]),
                    opacity: 0.8,
                    borderRadius: [5, 5, 0, 0],
                },
            },
        }
    })
}

option = {
    backgroundColor: '#02090d',
    tooltip: {
        //提示框组件
        trigger: 'axis',
        backgroundColor: "#02090d",
        // formatter: (params) => {
        //     return params.value
        // },
        borderColor: "rgba(0, 243, 230, 0.4)", // 边框颜色
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: 'rgba(17, 27, 54, 1)',
            },
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14,
        },
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: '38%',
        //	padding:'0 0 10 0',
        containLabel: true,
    },
    legend: {
        //图例组件，颜色和名字
        right: '10%',
        top: '32%',
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        selectedMode: false,
        data: ['系列1', '系列2', '系列3'],
        textStyle: {
            color: '#08f1f8',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        },
    },
    xAxis: [
        {
            type: 'category',
            // 	boundaryGap: true,//坐标轴两边留白
            data: xAxisData,
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#9AAFC2',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                },
                rotate: 0,
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false,
            },
            axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                    color: '#506B98',
                },
            },
            //splitLine: {
            //         show: true,
            //         lineStyle: {
            //             color: 'rgba(255,255,255,0.2)',
            //         }
            //     },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: "单位：人",
            nameTextStyle: {
                color: "#9AAFC2",
                lineHeight: 20,
                padding: [0, 0, 10, 0],
            },
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: '#9AAFC2',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#506B98',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['#fff'],
                    opacity: 0.06,
                },
            },
        },
    ],
    series: getSeries(),
};
