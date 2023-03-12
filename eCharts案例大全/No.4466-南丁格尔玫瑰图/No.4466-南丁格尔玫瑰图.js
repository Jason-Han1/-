option = {
    title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['业务支持', '人才培养', '培训预算', '知识沉淀', 
                '精进创新', '项目运营', '系统平台', '讲师队伍',
                '课程产品','文化传承','团队建设','校长影响力',
                '组织结构','战略规划','品牌塑造','硬件设施']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 10, name: '业务支持'},
                {value: 5, name: '人才培养'},
                {value: 15, name: '培训预算'},
                {value: 25, name: '知识沉淀'},
                {value: 20, name: '精进创新'},
                {value: 35, name: '项目运营'},
                {value: 30, name: '系统平台'},
                {value: 40, name: '讲师队伍'},
                {value: 40, name: '课程产品'},
                {value: 40, name: '文化传承'},
                {value: 40, name: '团队建设'},
                {value: 40, name: '校长影响力'},
                {value: 40, name: '组织结构'},
                {value: 40, name: '战略规划'},
                {value: 40, name: '品牌塑造'},
                {value: 40, name: '硬件设施'}
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
                {value: 10, name: '业务支持'},
                {value: 5, name: '人才培养'},
                {value: 15, name: '培训预算'},
                {value: 25, name: '知识沉淀'},
                {value: 20, name: '精进创新'},
                {value: 35, name: '项目运营'},
                {value: 30, name: '系统平台'},
                {value: 40, name: '讲师队伍'},
                {value: 40, name: '课程产品'},
                {value: 40, name: '文化传承'},
                {value: 40, name: '团队建设'},
                {value: 40, name: '校长影响力'},
                {value: 40, name: '组织结构'},
                {value: 40, name: '战略规划'},
                {value: 40, name: '品牌塑造'},
                {value: 40, name: '硬件设施'}
            ]
        }
    ]
};
