option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '2019年广州中学各班达线人数统计',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['一本', '二本','专科'],
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
            name: '一本',
            type: 'bar',
            data: [42, 24, 46, 20,35,18],
        },
        {
            name: '二本',
            type: 'bar',
            data: [15, 35, 37, 46,33,27],
        },
        {
            name: '专科',
            type: 'bar',
            data: [25, 5, 27, 36,23,17],
        }
    ]
};