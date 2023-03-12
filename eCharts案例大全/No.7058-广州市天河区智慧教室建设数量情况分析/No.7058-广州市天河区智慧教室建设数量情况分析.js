option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '广州市天河区智慧教室建设数量情况分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: '50%',
        data: ['建设总量', '新建数量'],
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
        data: ['2016年','2017年', '2018年', '2019年','2020年']
    }],
    yAxis: [

        {
            type: 'value',
            name: '数量',
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
    color: [  '#6449f7', '#7cb17b'],
    series: [{
            name: '建设总量',
            type: 'bar',
            data: [124, 242,365,434,497],
        },
        {
            name: '新建数量',
            type: 'bar',
            data: [36, 118,123,69,63],
        }
    ]
};