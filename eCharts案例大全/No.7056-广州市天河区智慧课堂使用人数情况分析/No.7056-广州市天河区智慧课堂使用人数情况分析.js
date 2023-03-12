option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '广州市天河区学生活跃度情况分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
         left: '50%',
        data: ['回答问题', '与老师互动','其他'],
      
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
        data: ['高一', '高二', '高三']
    }],
    yAxis: [

        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 1000,
           
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
            name: '回答问题',
            type: 'bar',
            data: [781, 654, 801],
        },
        {
            name: '与老师互动',
            type: 'bar',
            data: [620,909,560],
        },
        {
            name: '其他',
            type: 'bar',
            data: [821,765,884],
        }
    ]
};