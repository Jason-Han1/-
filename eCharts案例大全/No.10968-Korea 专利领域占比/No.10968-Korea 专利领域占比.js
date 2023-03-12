option = {
    title: {
        text: 'Korea 专利领域占比',
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
        name: 'Korea',
        type: 'pie',
        label:{
                show:true,
                formatter:'{b}: {d}%'
            },
        data: [{
                value: 478,
                name: '智能传感器'
            },
            {
                value: 178,
                name: '基础理论'
            },
            {
                value: 174,
                name: '计算智能'
            },
            {
                value: 127,
                name: '分布式计算框架'
            },
            {
                value: 258,
                name: '计算机视觉'
            },
            {
                value: 139,
                name: '模式识别'
            },
            {
                value: 421,
                name: '自然语言处理'
            },
            {
                value: 82,
                name: '人机交互'
            },
            {
                value: 27,
                name: '图计算'
            },
            {
                value: 34,
                name: '智能芯片'
            },
            {
                value: 284,
                name: '其他'
            }
        ]
    }]
};