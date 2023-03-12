option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '家校互通情况分析',
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
        data: ['及时沟通', '沟通性一般', '沟通性差', '拒绝沟通']
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
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
            name: '高一',
            type: 'bar',
            data: [91, 87, 60, 20],
        },
        {
            name: '高二',
            type: 'bar',
            data: [120,99,56,12],
        },
        {
            name: '高三',
            type: 'bar',
            data: [111, 104, 15, 16],
        }
    ]
};