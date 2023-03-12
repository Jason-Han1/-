option = {
    title: {
        text: 'China专利领域占比2014年到2018年',
        x: 'center',
        textStyle: {
            fontSize: 28
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['智能传感器', '机器学习', '分布式计算框架', '计算机视觉', '模式识别', '自然语言处理', '人机交互', '智能芯片', '图计算', '虚拟现实增强现实', "其他"]
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    calculable: true,
    series: [{
        name: 'China',
        type: 'pie',
        label: {
            show: true,
            formatter: '{b}: {d}%',
            fontSize: 22,
        },
        data: [{
                value: 3310,
                name: '智能传感器'
            },
            {
                value: 2692,
                name: '机器学习'
            },
            {
                value: 1605,
                name: '分布式计算框架'
            },
            {
                value: 1457,
                name: '计算机视觉'
            },
            {
                value: 898,
                name: '模式识别'
            },
            {
                value: 448,
                name: '自然语言处理'
            },
            {
                value: 373,
                name: '人机交互'
            },
            {
                value: 297,
                name: '智能芯片'
            },
            {
                value: 286,
                name: '图计算'
            },
            {
                value: 121,
                name: '虚拟现实增强现实'
            },
            {
                value: 338,
                name: '其他'
            }
        ]
    }]
};