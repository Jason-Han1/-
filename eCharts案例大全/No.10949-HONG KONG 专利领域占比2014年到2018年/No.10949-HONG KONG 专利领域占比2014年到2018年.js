option = {
    title: {
        text: 'HONG KONG 专利领域占比2014年到2018年',
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
        data: ['智能芯片', '人机交互', '分布式计算框架', '模式识别', '智能传感器', '机器学习', '计算机视觉', '自然语言处理', '迁移学习', '虚拟现实增强现实']
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
                value: 18,
                name: '智能芯片'
            },
            {
                value: 17,
                name: '人机交互'
            },
            {
                value: 7,
                name: '分布式计算框架'
            },
            {
                value: 6,
                name: '模式识别'
            },
            {
                value: 6,
                name: '智能传感器'
            },
            {
                value: 5,
                name: '机器学习'
            },
            {
                value: 5,
                name: '计算机视觉'
            },
            {
                value: 2,
                name: '自然语言处理'
            },
            {
                value: 2,
                name: '迁移学习'
            },
            {
                value: 1,
                name: '虚拟现实增强现实'
            },
        ]
    }]
};