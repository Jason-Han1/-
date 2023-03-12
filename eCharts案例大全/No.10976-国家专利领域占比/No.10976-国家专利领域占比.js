option = {
    title: {
        text: '国家专利领域占比',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['智能传感器', '基础理论', '计算智能', '分布式计算框架', '计算机视觉', '模式识别', '自然语言处理', '人机交互', '图计算', '智能芯片', "其他"]
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
        radius: [0, 100],
        center: ['20%', '25%'],
        data: [{
                value: 3280,
                name: '智能传感器'
            },
            {
                value: 2404,
                name: '基础理论'
            },
            {
                value: 2383,
                name: '计算智能'
            },
            {
                value: 2020,
                name: '分布式计算框架'
            },
            {
                value: 1690,
                name: '计算机视觉'
            },
            {
                value: 1152,
                name: '模式识别'
            },
            {
                value: 715,
                name: '自然语言处理'
            },
            {
                value: 328,
                name: '人机交互'
            },
            {
                value: 325,
                name: '图计算'
            },
            {
                value: 246,
                name: '智能芯片'
            },
            {
                value: 1299,
                name: '其他'
            }
        ]
    }, {
        name: 'Japan',
        type: 'pie',
        radius: [0, 100],
        center: ['50%', '25%'],
        data: [{
                value: 754,
                name: '智能传感器'
            },
            {
                value: 338,
                name: '基础理论'
            },
            {
                value: 358,
                name: '计算智能'
            },
            {
                value: 63,
                name: '分布式计算框架'
            },
            {
                value: 2570,
                name: '计算机视觉'
            },
            {
                value: 899,
                name: '模式识别'
            },
            {
                value: 2923,
                name: '自然语言处理'
            },
            {
                value: 149,
                name: '人机交互'
            },
            {
                value: 128,
                name: '图计算'
            },
            {
                value: 36,
                name: '智能芯片'
            },
            {
                value: 577,
                name: '其他'
            }
        ]
    }, {
        name: 'Germany',
        type: 'pie',
        radius: [0, 100],
        center: ['80%', '25%'],
        data: [{
                value: 184,
                name: '智能传感器'
            },
            {
                value: 229,
                name: '基础理论'
            },
            {
                value: 28,
                name: '计算智能'
            },
            {
                value: 18,
                name: '分布式计算框架'
            },
            {
                value: 126,
                name: '计算机视觉'
            },
            {
                value: 44,
                name: '模式识别'
            },
            {
                value: 172,
                name: '自然语言处理'
            },
            {
                value: 44,
                name: '人机交互'
            },
            {
                value: 13,
                name: '图计算'
            },
            {
                value: 30,
                name: '智能芯片'
            },
            {
                value: 132,
                name: '其他'
            }
        ]
    }]
};