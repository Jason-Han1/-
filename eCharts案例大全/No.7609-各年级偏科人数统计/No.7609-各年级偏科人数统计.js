option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '各年级偏科人数统计',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['高一', '高二','高三'],
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
        data: ['语文', '数学', '英语', '生物','物理','化学']
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 50,
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
            name: '高一',
            type: 'bar',
            data: [12, 14, 22, 31,15,20],
        },
        {
            name: '高二',
            type: 'bar',
            data: [24, 13, 16, 22,19,14],
        },
        {
            name: '高三',
            type: 'bar',
            data: [20, 15, 31, 22,14,12],
        }
    ]
};