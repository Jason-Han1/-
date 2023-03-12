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
            value: 17,
            name: '组织能力指标'
        }, {
            value: 6,
            name: '业务能力指标'
        }, {
            value: 10,
            name: '工作态势指标'
        }, {
            value: 31,
            name: '效能考核指标'
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
            value: 4,
            name: '地区工作能力情况'
        }, {
            value: 13,
            name: '地区网格分布情况'
        }, {
            value: 3,
            name: '日常工作动态情况'
        }, {
            value: 2,
            name: '上报事件来源情况'
        }, {
            value: 1,
            name: '事件部件关联情况'
        }, {
            value: 6,
            name: '事件流转态势'
        }, {
            value: 3,
            name: '部件故障态势'
        }, {
            value: 1,
            name: '人员工作态势'
        }, {
            value: 5,
            name: '总体工作效能评价'
        }, {
            value: 2,
            name: '监督员工作能力评价'
        }, {
            value: 2,
            name: '巡检员工作能力评价'
        }, {
            value: 1,
            name: '值班室任务量评价'
        }, {
            value: 3,
            name: '街道核查能力评价'
        }, {
            value: 15,
            name: '万米网格管理效能评价'
        }, {
            value: 3,
            name: '责任单位效能评价'
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
            value: 2,
            name: '工作人员数量'
        }, {
            value: 2,
            name: '责任单位数量'
        }, {
            value: 7,
            name: '万米网格数量'
        }, {
            value: 6,
            name: '城区部件数量'
        }, {
            value: 1,
            name: '业务事件环比增长'
        }, {
            value: 1,
            name: '常发事件环比增长'
        }, {
            value: 1,
            name: '偶发事件环比增长'
        }, {
            value: 1,
            name: '主要来源环比增长'
        }, {
            value: 1,
            name: '次要来源环比增长'
        }, {
            value: 1,
            name: '关联部件事件数量环比增长'
        }, {
            value: 1,
            name: '上报中事件占比'
        }, {
            value: 1,
            name: '受理中事件占比'
        }, {
            value: 1,
            name: '立案派遣中事件占比'
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
            name: '部件损坏类事件占比'
        }, {
            value: 1,
            name: '部件丢失类事件占比'
        }, {
            value: 1,
            name: '部件被圈占类事件占比'
        }, {
            value: 1,
            name: '在岗人员占比'
        }, {
            value: 1,
            name: '事件立案数环比增长'
        }, {
            value: 2,
            name: '事件结案率环比增长'
        }, {
            value: 2,
            name: '事件按期结案率环比增长'
        }, {
            value: 1,
            name: '监督员上报数量环比增长'
        }, {
            value: 1,
            name: '监督员上报准确率环比增长'
        }, {
            value: 1,
            name: '巡检员上报数量环比增长'
        }, {
            value: 1,
            name: '巡检员上报准确率环比增长'
        }, {
            value: 1,
            name: '值班室任务量环比增长'
        }, {
            value: 1,
            name: '街道事件核查数环比增长'
        }, {
            value: 1,
            name: '街道事件核查率环比增长'
        }, {
            value: 1,
            name: '街道事件按期核查率环比增长'
        }, {
            value: 3,
            name: 'A类等级网格数量环比增长'
        }, {
            value: 3,
            name: 'B类等级网格数量环比增长'
        }, {
            value: 3,
            name: 'C类等级网格数量环比增长'
        }, {
            value: 3,
            name: 'D类等级网格数量环比增长'
        }, {
            value: 3,
            name: 'E类等级网格数量环比增长'
        }, {
            value: 1,
            name: '责任单位事件应处置数环比增长'
        }, {
            value: 1,
            name: '责任单位事件处置率环比增长'
        }, {
            value: 1,
            name: '责任单位事件按期处置率环比增长'
        }]
    }]
};