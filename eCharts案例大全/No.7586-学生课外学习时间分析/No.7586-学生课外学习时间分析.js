option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '学生课外学习时间分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['男生', '女生'],
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
        data: ['一班', '二班', '三班', '四班','五班','六班']
    }],
    yAxis: [

        {
            type: 'value',
            name: '分钟',
            min: 0,
            max: 150,
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
            name: '男生',
            type: 'bar',
            data: [56, 130, 77, 31,59,20],
        },
        {
            name: '女生',
            type: 'bar',
            data: [24, 13, 80,33,19,140],
        }
    ]
};