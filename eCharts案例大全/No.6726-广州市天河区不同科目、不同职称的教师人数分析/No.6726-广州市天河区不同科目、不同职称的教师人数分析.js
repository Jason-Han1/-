option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '广州市天河区不同科目、不同职称的教师人数分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['一级教师', '二级教师','三级教师'],
        left: '60%',
        textStyle: {
            color: 'white', //坐标的字体颜色
        },
    },
    toolbox: {
        show: false,
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
        data: ['语文','数学','英语','生物','化学','物理','地理','历史','政治']
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数(人)',
            min: 0,
            max: 500,
            interval: 100,
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
    series: [{
            name: '一级教师',
            type: 'bar',
            data: [450, 447, 276, 391,286,195,281,285,374],
        },
        {
            name: '二级教师',
            type: 'bar',
            data: [190, 290, 183, 395,291,318,371,292,189],
        },
        {
            name: '三级教师',
            type: 'bar',
            data: [168, 172, 274,180,328,144,187,265,171],
        }
    ]
};