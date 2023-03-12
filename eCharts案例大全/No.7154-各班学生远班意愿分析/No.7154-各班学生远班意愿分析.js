option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '各班学生远班意愿分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['文科班', '理科班'],
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
        data: ['一班', '二班', '三班','四班','五班','六班']
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 100,
           
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
            name: '文科班',
            type: 'bar',
            data: [61, 27, 30,54,44,34],
        },
        {
            name: '理科班',
            type: 'bar',
            data: [30,46,54,44,65,45],
        }
    ]
};