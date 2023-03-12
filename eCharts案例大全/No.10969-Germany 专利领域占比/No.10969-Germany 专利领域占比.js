option = {
    title: {
        text: 'Germany 专利领域占比',
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
        name: 'Germany',
        type: 'pie',
        label:{
                show:true,
                formatter:'{b}: {d}%'
            },
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