option = {
    title: {
        text: 'Japan专利领域占比',
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
    series: [
        {
        name: 'Japan',
        type: 'pie',
        label:{
                show:true,
                formatter:'{b}: {d}%'
            },
        data: [{
                value: 754,
                name: '智能传感器'
            },
            {
                value:  338,
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
    }]
};