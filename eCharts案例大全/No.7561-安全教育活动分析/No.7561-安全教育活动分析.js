option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '反馈建议数据分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['教师', '学生','家长'],
        textStyle: {
            color: 'white', //坐标的字体颜色
        },
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['bar']
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
    xAxis: [{
        axisLine: {
            lineStyle: {
                color: 'white', //坐标轴的颜色
            },
        },
        type: 'category',
        data: ['作息时间', '校园建设', '文化建设', '校园安全','学生个性化建设']
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                textStyle: {
                    color: 'white', //坐标的字体颜色
                },
                formatter: '{value} '
            },
            axisLine: {
                lineStyle: {
                    color: 'white', //坐标轴的颜色
                },
            },

        }
    ],
    color: [  '#6449f7', '#7cb17b'],
    series: [{
            name: '教师',
            type: 'bar',
            data: [62, 84, 76, 90,45],
        },
        {
            name: '学生',
            type: 'bar',
            data: [45, 55, 87, 76,63],
        },
        {
            name: '家长',
            type: 'bar',
            data: [77, 45, 35, 65,90],
        }
    ]
};