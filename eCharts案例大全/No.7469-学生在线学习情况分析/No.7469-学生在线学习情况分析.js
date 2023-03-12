option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '学生在线学习情况分析',
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
        data: ['语文', '数学', '英语', '生物','化学','物理','政治','历史','地理']
    }],
    yAxis: [

        {
            type: 'value',
            name: '学习时长',
            min: 0,
            max: 150,
           
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
    // color: [  '#6449f7', '#7cb17b'],
    series: [{
            name: '男生',
            type: 'bar',
            data: [91, 87, 60, 20,98,56,77,69,60],
        },
        {
            name: '女生',
            type: 'bar',
            data: [120,99,56,12,87,98,108,96,88],
        }
    ]
};