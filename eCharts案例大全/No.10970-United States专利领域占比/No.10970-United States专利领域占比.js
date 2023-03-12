option = {
    title: {
        text: 'United States专利领域占比2014年到2018年',
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
        name: 'United States',
        type: 'pie',
        label: {
            show: true,
            formatter: '{b}: {d}%',
            fontSize: 22,
        },
        data: [{
                value: 1295,
                name: '智能传感器'
            },
            {
                value: 240,
                name: '机器学习'
            },
            {
                value: 2198,
                name: '分布式计算框架'
            },
            {
                value: 615,
                name: '计算机视觉'
            },
            {
                value: 301,
                name: '模式识别'
            },
            {
                value: 493,
                name: '自然语言处理'
            },
            {
                value: 188,
                name: '人机交互'
            },
            {
                value: 230,
                name: '智能芯片'
            },
            {
                value: 352,
                name: '图计算'
            },
            {
                value: 121,
                name: '虚拟现实增强现实'
            },
            {
                value: 372,
                name: '其他'
            }
        ]
    }]
};