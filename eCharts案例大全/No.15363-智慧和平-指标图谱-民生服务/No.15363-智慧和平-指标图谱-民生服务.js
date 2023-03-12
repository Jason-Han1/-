option = {
    title: {
        text: "",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
    },

    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
        offset: 0,
        color: '#174b78'
    }, {
        offset: 1,
        color: '#174b78'
    }]),
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '一级指标',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 6,
            name: '社区服务网络指标'
        }, {
            value: 3,
            name: '社区服务对象指标'
        }, {
            value: 8,
            name: '社区服务态势指标'
        }, {
            value: 16,
            name: '社区服务评价指标'
        }]
    }, {
        name: '二级指标',
        type: 'pie',
        radius: ['32%', '60%'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 6,
            name: '社区服务网格分布情况'
        }, {
            value: 3,
            name: '全区人口分布情况'
        }, {
            value: 3,
            name: '社区服务工作开展情况'
        }, {
            value: 5,
            name: '社区服务业务办理情况'
        }, {
            value: 7,
            name: '社区服务工作效能情况'
        }, {
            value: 4,
            name: '重点案件处置效能情况'
        }, {
            value: 2,
            name: '社区服务运行保障情况'
        }, {
            value: 3,
            name: '街道工作效能情况'
        }]
    }, {
        name: '三级指标',
        type: 'pie',
        radius: ['62%', '70%'],
        label: {
            normal: {
                position: 'outer'
            }
        },
        data: [{
            value: 6,
            name: '社区服务网格数量'
        }, {
            value: 2,
            name: '全区常住人口同比增长'
        }, {
            value: 1,
            name: '重点服务人群同比增长'
        }, {
            value: 2,
            name: '社区服务案件数环比增长'
        }, {
            value: 1,
            name: '重点案件数环比增长'
        }, {
            value: 1,
            name: '上报事件占比'
        }, {
            value: 1,
            name: '受理事件占比'
        }, {
            value: 1,
            name: '处理中事件占比'
        }, {
            value: 1,
            name: '核查中事件占比'
        }, {
            value: 1,
            name: '已结案事件占比'
        }, {
            value: 1,
            name: '事件按时签收率环比增长'
        }, {
            value: 1,
            name: '事件按时确认率环比增长'
        }, {
            value: 1,
            name: '事件按时申请率环比增长'
        }, {
            value: 1,
            name: '事件按时反馈率环比增长'
        }, {
            value: 1,
            name: '事件办结率环比增长'
        }, {
            value: 1,
            name: '事件返工率环比增长'
        }, {
            value: 1,
            name: '事件市民满意率环比增长'
        }, {
            value: 1,
            name: '党建云转办案件绩效评价环比增长'
        }, {
            value: 1,
            name: '8890专线转办案件绩效评价环比增长'
        }, {
            value: 1,
            name: '重点督办案件绩效评价环比增长'
        }, {
            value: 1,
            name: '反复投诉案件绩效评价环比增长'
        }, {
            value: 1,
            name: '联动反应评价环比增长'
        }, {
            value: 1,
            name: '电话交办评价环比增长'
        }, {
            value: 1,
            name: '社区服务上报事件环比增长'
        }, {
            value: 1,
            name: '社区服务结案率环比增长'
        }, {
            value: 1,
            name: '社区服务按期结案率环比增长'
        }]
    }]
};