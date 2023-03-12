var categories = [{
        name: "政策问题"
    },
    {
        name: "政策文本"
    },
    {
        name: "期刊论文"
    },
    {
        name: "专家"
    }
];

option = {
    title: {
        text: "知识图谱"
    },
    tooltip: {
        formatter: function(params) {
            return params.name + (params.value ? ' : ' + params.value : '')
        }
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",

    toolbox: {
        feature: {
            restore: {}
        }
    },
    legend: {
        show: true,
        data: categories
    },
    series: [{
        type: "graph",
        layout: "force",
        roam: true,
        hoverAnimation: true,
        focusNodeAdjacency: true,
        draggable: true,
        symbolSize: 33,
        force: {
            repulsion: 200,
            edgeLength: 100
        },
        itemStyle: {
            normal: {
                borderColor: "#fff",
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.3)"
            }
        },
        lineStyle: {
            width: 0.5,
            curveness: 0.3,
            opacity: 0.8
        },
        label: {
            emphasis: {
                position: 'right',
                show: true
            }
        },
        emphasis: {
            itemStyle: {
                borderWidth: 3
            },
            lineStyle: {
                color: 'gray',
                width: 3,
            }
        },
        data: [{
                name: "公立医院薪酬制度改革",
                category: '政策问题',
                symbolSize: 70,
                label: {
                    show: true
                }
            }, 
            {
                name: "关于开展公立医院薪酬制度改革试点工作的指导意见",
                category: '政策文本'
            }, 
            {
                name: "国务院办公厅关于印发深化医药卫生体制改革2019年重点工作任务的通知",
                category: '政策文本'
            },
            {
                name: "国务院办公厅印发关于改革完善医疗卫生行业综合监管制度的指导意见",
                category: '政策文本'
            },
            {
                name: "国务院办公厅关于印发2011年公立医院改革试点工作安排的通知",
                category: '政策文本'
            },
            {
                name: "人力资源社会保障部财政部国家卫生计生委国家中医药管理局关于扩大公立医院薪酬制度改革试点的通知",
                category: '政策文本'
            },
            {
                name: "中共中央国务院关于深化医药卫生体制改革的意见",
                category: '政策文本'
            },
            {
                name: "国务院关于印发医药卫生体制改革近期重点实施方案（2009—2011年）的通知",
                category: '政策文本'
            },
            {
                name: "我国公立医院薪酬制度存在的问题及改革建议",
                category: '期刊论文',
            },
            {
                name: "改革公立医院竞争激励机制",
                category: '期刊论文'
            },
            {
                name: "医改背景下公立医院绩效分配制度研究",
                category: '期刊论文'
            },
            {
                name: "城市公立医院薪酬改革配套政策问题研究",
                category: '期刊论文'
            },
            {
                name: "宽带薪酬在我国大型公立医院的适用性分析",
                category: '期刊论文'
            },
            {
                name: "王延中",
                category: '专家',
            },
            {
                name: "李建军",
                category: '专家'
            }, 
            {
                name: "雷志勤",
                category: '专家'
            }, 
            {
                name: "李玉萍",
                category: '专家'
            },  
            {
                name: "张光鹏",
                category: '专家'
            }
        ],
        links: [{
            source: "我国公立医院薪酬制度存在的问题及改革建议",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "改革公立医院竞争激励机制",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "医改背景下公立医院绩效分配制度研究",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "城市公立医院薪酬改革配套政策问题研究",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "宽带薪酬在我国大型公立医院的适用性分析",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "王延中",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "张光鹏",
            target: "国务院办公厅关于印发深化医药卫生体制改革2019年重点工作任务的通知",
            value: "研究政策",
        }, {
            source: "张光鹏",
            target: "关于开展公立医院薪酬制度改革试点工作的指导意见",
            value: "研究政策",
        }, {
            source: "张光鹏",
            target: "国务院办公厅关于印发2011年公立医院改革试点工作安排的通知",
            value: "研究政策",
        }, {
            source: "国务院办公厅关于印发深化医药卫生体制改革2019年重点工作任务的通知",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "关于开展公立医院薪酬制度改革试点工作的指导意见",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "国务院办公厅印发关于改革完善医疗卫生行业综合监管制度的指导意见",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "国务院办公厅关于印发2011年公立医院改革试点工作安排的通知",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "人力资源社会保障部财政部国家卫生计生委国家中医药管理局关于扩大公立医院薪酬制度改革试点的通知",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "中共中央国务院关于深化医药卫生体制改革的意见",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "国务院关于印发医药卫生体制改革近期重点实施方案（2009—2011年）的通知",
            target: "公立医院薪酬制度改革",
            value: "提出解决方案",
        }, {
            source: "我国公立医院薪酬制度存在的问题及改革建议",
            target: "改革公立医院竞争激励机制",
            value: "对立"
        }, {
            source: "城市公立医院薪酬改革配套政策问题研究",
            target: "医改背景下公立医院绩效分配制度研究",
            value: "相继"
        }, {
            source: "王延中",
            target: "我国公立医院薪酬制度存在的问题及改革建议",
            value: "作者"
        }, {
            source: "李建军",
            target: "医改背景下公立医院绩效分配制度研究",
            value: "作者"
        }, {
            source: "李建军",
            target: "城市公立医院薪酬改革配套政策问题研究",
            value: "作者"
        }, {
            source: "雷志勤",
            target: "城市公立医院薪酬改革配套政策问题研究",
            value: "作者"
        }, {
            source: "李玉萍",
            target: "医改背景下公立医院绩效分配制度研究",
            value: "作者"
        }, {
            source: "关于开展公立医院薪酬制度改革试点工作的指导意见",
            target: "人力资源社会保障部财政部国家卫生计生委国家中医药管理局关于扩大公立医院薪酬制度改革试点的通知",
            value: "相继",
        }, {
            source: "人力资源社会保障部财政部国家卫生计生委国家中医药管理局关于扩大公立医院薪酬制度改革试点的通知",
            target: "国务院办公厅关于印发深化医药卫生体制改革2019年重点工作任务的通知",
            value: "相继",
        }, {
            source: "国务院办公厅印发关于改革完善医疗卫生行业综合监管制度的指导意见",
            target: "关于开展公立医院薪酬制度改革试点工作的指导意见",
            value: "支持"
        }, {
            source: "国务院关于印发医药卫生体制改革近期重点实施方案（2009—2011年）的通知",
            target: "中共中央国务院关于深化医药卫生体制改革的意见",
            value: "支持"
        }, {
            source: "国务院关于印发医药卫生体制改革近期重点实施方案（2009—2011年）的通知",
            target: "国务院办公厅关于印发2011年公立医院改革试点工作安排的通知",
            value: "总分"
        }, {
            source: "中共中央国务院关于深化医药卫生体制改革的意见",
            target: "国务院办公厅关于印发2011年公立医院改革试点工作安排的通知",
            value: "总分"
        },  ],
        categories: categories
    }]
}