option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br>{a}：{c}%<br>{a1}: {c1}小时'
    },
    backgroundColor: "#ffffff",
    // legend: {
    //     data:['学生成绩','平均分']
    // },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    dataZoom: [ //dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
        {
            show: true,
            start: 0,
            end: 100,
            textStyle: false,
            maxValueSpan:8,
            minValueSpan:5,
            filterMode:'empty'

        }
    ],

    xAxis: [{
        type: 'category',
        data: ['听短对话', '听长对话', '单项选择', '完形填空', '阅读理解', '改错题', '选词填空', '中译英', '英译中', '张三', '张三', '张三']
    }],
    yAxis: [{
            type: 'value',
            name: '答题正确率: %'
        },
        {
            type: 'value',
            name: "平均作答时长: 小时"
        }
    ],
    series: [{
            name: '答题正确率',
            type: 'bar',
            barMaxWidth: 25,
            data: [110, 90, 80, 70, 60, 100, 110, 120, 110, 150, 110, 98],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            }
        },
        {
            name: '平均作答时长',
            type: 'line',
            yAxisIndex: 1, //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
            data: [30, 80, 80, 70, 60, 10, 50, 10, 40, 80, 70, 78],
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 204, 102)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 153, 51)'
                    }]),
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            fontSize: '14',
                            color: 'rgb(255, 156, 54)',
                        }
                    }
                },
            },
        }
    ]
};