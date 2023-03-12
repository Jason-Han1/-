option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '授课次数分析',
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
        data: ['语文','数学','英语','生物','化学','物理','地理','历史','政治']
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
            data: [22, 14, 46, 20,35,18,45,37,44],
        },
        {
            name: '高二',
            type: 'bar',
            data: [15, 25, 37, 46,33,27,34,23,41],
        },
        {
            name: '高三',
            type: 'bar',
            data: [25, 5, 27, 36,23,17,33,12,23],
        }
    ]
};