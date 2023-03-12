option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '各年级不同职称教师人数分析',
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
        data: ['正高级教师', '高级教师', '一级教师', '二级教师','三级教师']
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 20,
           
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
            data: [13, 15, 16, 9,10],
        },
        {
            name: '高二',
            type: 'bar',
            data: [12,15,8,12,11],
        },
        {
            name: '高三',
            type: 'bar',
            data: [11, 14, 15, 16,9],
        }
    ]
};