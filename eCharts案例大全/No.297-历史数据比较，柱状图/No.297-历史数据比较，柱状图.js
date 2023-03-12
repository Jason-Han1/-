var option = {
    backgroundColor: '#091126',
    tooltip: {
        //提示框组件
        trigger: 'axis',
        formatter: '{b}<br />{a2}: {c2}<br />{a1}: {c1}<br />{a5}: {c5}',
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
        top: '58%',
        //	padding:'0 0 10 0',
        containLabel: true,
    },
    legend: {
        //图例组件，颜色和名字
        right: '10%',
        top: '52%',
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        selectedMode: false,
        data: ['当前寿命≤100', '100<当前寿命≤200', '200<当前寿命≤300', '当前寿命>300'],
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
            //	boundaryGap: true,//坐标轴两边留白
            data: ['8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#', '16#', '17#'],
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: '#078ceb',
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
                    color: 'rgba(255,255,255,0.4)',
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
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: '#078ceb',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#fff'],
                    opacity: 0.06,
                },
            },
        },
    ],
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [24, 10],
            symbolOffset: [-36, -5],
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",barGap
            label: {
                normal: {
                    show: true,
                    offset: [-36, 0],
                    position: 'top',
                    textAlign: 'left',
                    formatter: function (data) {
                        if (data.value === 0) {
                            return '';
                        }
                        return data.value + '%';
                    },
                    fontSize: 14,
                    color: 'rgba(51,135,255, 1)',
                },
            },
            color: 'rgba(51,135,255, 1)',
            data: [15, 51, 8, 46, 15, 51, 8, 46, 15, 51],
        },
        {
            name: '当前寿命≤100',
            type: 'bar',
            data: [15, 51, 8, 46, 15, 51, 8, 46, 15, 51],
            barWidth: 24,
            barGap: 20, //柱间距离
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(51,135,255, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(51,135,255, .2)',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
        },

        {
            name: '', //头部
            type: 'pictorialBar',
            symbolSize: [24, 10],
            symbolOffset: [-12, -5],
            z: 12,
            symbolPosition: 'end',
            // itemStyle:{
            //     color:'rgba(51,135,255, 1)',
            //     opacity:1,
            // },
            label: {
                normal: {
                    offset: [-12, 0],
                    show: true,
                    position: 'top',
                    // "formatter": "{c}%",
                    fontSize: 14,
                    color: '#4acf6f',
                    formatter: function (data) {
                        if (data.value === 0) {
                            return '';
                        }
                        return data.value + '%';
                    },
                },
            },
            color: '#4acf6f',
            data: [65, 45, 24, 48, 65, 45, 24, 48, 65, 45],
        },
        {
            name: '100<当前寿命≤200',
            type: 'bar',
            barWidth: 24,
            barGap: '20',
            z: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(52, 209, 135, 1)',
                        },
                        {
                            offset: 1,
                             color: 'rgba(52, 209, 135, 0)',
                        },
                    ]),
                    opacity: 0.8,
                },
            },

            data: [65, 45, 24, 48, 65, 45, 24, 48, 65, 45],
        },

        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [24, 10],
            symbolOffset: [12, -5],
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",barGap
            label: {
                normal: {
                    offset: [12, 0],
                    show: true,
                    position: 'top',
                    // "formatter": "{c}%",
                    fontSize: 14,
                    color: '#f09f38',
                    formatter: function (data) {
                        if (data.value === 0) {
                            return '';
                        }
                        return data.value + '%';
                    },
                },
            },
             color: '#f09f38',
            data: [18, 4, 60, 6, 18, 4, 60, 6, 18, 4],
        },
        {
            name: '200<当前寿命≤300',
            type: 'bar',
            data: [18, 4, 60, 6, 18, 4, 60, 6, 18, 4],
            barWidth: 24,
            barGap: '0', //柱间距离
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(228, 131, 38, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(228, 131, 38, 0)',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
        },

        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [24, 10],
            symbolOffset: [36, -5],
            symbolPosition: 'end',
            z: 12,
            // "barWidth": "0",barGap
            label: {
                normal: {
                    offset: [36, 0],
                    show: true,
                    position: 'top',
                    formatter: function (data) {
                        if (data.value === 0) {
                            return '';
                        }
                        return data.value + '%';
                    },
                    fontSize: 14,
                    color: '#d9302e',
                },
            },
            color: '#d9302e',
            data: [2, 0, 8, 0, 2, 0, 8, 0, 2, 0],
        },
        {
            name: '当前寿命>300',
            type: 'bar',
            data: [2, 0, 8, 0, 2, 0, 8, 0, 2, 0],
            barWidth: 24,
            barGap: '0', //柱间距离
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(196, 46, 45, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(196, 46, 45, 0)',
                        },
                    ]),
                    opacity: 0.8,
                },
            },
        },
    ],
};
