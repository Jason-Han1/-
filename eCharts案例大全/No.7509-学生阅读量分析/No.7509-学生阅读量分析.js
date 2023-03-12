option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '学生阅读量分析',
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
        data: ['语言文学', '自然科学', '生物科学', '军事','综合性图书']
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
            data: [62, 84, 76, 90,45,78],
        },
        {
            name: '学生',
            type: 'bar',
            data: [45, 55, 87, 76,63,87],
        }
    ]
};