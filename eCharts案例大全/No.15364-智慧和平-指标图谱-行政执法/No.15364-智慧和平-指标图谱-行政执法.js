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
            value: 66,
            name: '执法组织体系指标'
        }, {
            value: 6,
            name: '执法业务能力指标'
        }, {
            value: 8,
            name: '案件监督态势指标'
        }, {
            value: 8,
            name: '监督效能考核指标'
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
            value: 12,
            name: '街道办事处执法主体'
        }, {
            value: 54,
            name: '委办局执法主体'
        }, {
            value: 2,
            name: '执法案件来源情况'
        }, {
            value: 2,
            name: '执法案件程序情况'
        }, {
            value: 2,
            name: '执法案件处罚情况'
        }, {
            value: 5,
            name: '监督来源情况'
        }, {
            value: 3,
            name: '自动预警监督来源情况'
        }, {
            value: 2,
            name: '执法案件立案情况'
        }, {
            value: 2,
            name: '执法案件执行情况'
        }, {
            value: 2,
            name: '执法检查工作情况'
        }, {
            value: 2,
            name: '执法案件监督结果'
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
            name: '街道办执法人员人数'
        }, {
            value: 6,
            name: '街道办执法职权数'
        }, {
            value: 27,
            name: '委办局执法人员人数'
        }, {
            value: 27,
            name: '委办局执法职权数'
        }, {
            value: 1,
            name: '常发来源执法案件环比增长'
        }, {
            value: 1,
            name: '偶发来源执法案件环比增长'
        }, {
            value: 1,
            name: '一般程序案件环比增长'
        }, {
            value: 1,
            name: '简易程序案件环比增长'
        }, {
            value: 1,
            name: '常发执法案件处罚数环比增长'
        }, {
            value: 1,
            name: '偶发执法案件处罚数环比增长'
        }, {
            value: 1,
            name: '自动预警监督案件数环比增长'
        }, {
            value: 1,
            name: '主动抽样监督案件数环比增长'
        }, {
            value: 1,
            name: '重大案件监督案件数环比增长'
        }, {
            value: 1,
            name: '投诉举报监督案件数环比增长'
        }, {
            value: 1,
            name: '交办转办监督案件数环比增长'
        }, {
            value: 1,
            name: '执法资格预警案件数环比增长'
        }, {
            value: 1,
            name: '执法程序预警案件数环比增长'
        }, {
            value: 1,
            name: '执法结果预警案件数环比增长'
        }, {
            value: 2,
            name: '执法案件立案件率'
        }, {
            value: 2,
            name: '执法案件办结率'
        }, {
            value: 2,
            name: '执法案件检查率'
        }, {
            value: 2,
            name: '执法案件准确率'
        }]
    }]
};