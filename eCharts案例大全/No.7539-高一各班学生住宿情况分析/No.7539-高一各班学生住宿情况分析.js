option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '高一各班学生住宿情况分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['住宿', '走读'],
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
    // color: [  '#6449f7', '#7cb17b'],
    series: [{
            name: '住宿',
            type: 'bar',
            data: [56, 45, 77, 71,39,20],
        },
        {
            name: '走读',
            type: 'bar',
            data: [24, 33, 10,23,49,60],
        }
    ]
};