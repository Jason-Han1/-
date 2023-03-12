option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '教学资源建设情况分析',
        textStyle: {
            color: 'white', //坐标的字体颜色
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['教学课件', '教案','教学素材','其他'],
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
            name: '教学课件',
            type: 'bar',
            data: [202, 340, 460, 120,235,184,245,375,444],
        },
        {
            name: '教案',
            type: 'bar',
            data: [150, 225, 137, 346,330,227,434,323,141],
        },
        {
            name: '教学素材',
            type: 'bar',
            data: [250, 325, 127, 360,123,178,313,212,323],
        },
        {
            name: '其他',
            type: 'bar',
            data: [150, 225, 425, 260,322,278,213,112,423],
        }
    ]
};