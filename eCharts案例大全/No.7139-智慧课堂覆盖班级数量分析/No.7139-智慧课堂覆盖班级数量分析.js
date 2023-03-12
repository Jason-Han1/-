option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '智慧课堂覆盖班级数量分析',
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
        data: ['一班',   '二班', '三班', '四班','五班','六班']
    }],
    yAxis: [

        {
            type: 'value',
            name: '数量',
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
            data: [22, 14, 46, 20,35,18],
        },
        {
            name: '高二',
            type: 'bar',
            data: [15, 25, 37, 46,33,27],
        },
        {
            name: '高三',
            type: 'bar',
            data: [25, 5, 27, 36,23,17],
        }
    ]
};