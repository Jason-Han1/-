
option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '学生对教师评价',
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
            name: '分数',
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
    color: [  'green', 'orange','pink'],
    series: [{
            name: '高一',
            type: 'bar',
            data: [92, 97, 94, 87,85,89],
        },
        {
            name: '高二',
            type: 'bar',
            data: [86, 92, 90, 95,91,90],
        },
        {
            name: '高三',
            type: 'bar',
            data: [80, 98, 94, 93,96,92],
        }
    ]
};