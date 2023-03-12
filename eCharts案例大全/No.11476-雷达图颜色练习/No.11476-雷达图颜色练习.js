option = {
    legend: {
        bottom: 0,
        data: [{
            name: '本次测评结果',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAUklEQVQoke3LvRVAMBSA0c/L+2mNYgPbmEerM4q5JBGdjnPSu/0dlq1NwCrSELlIqaJaUauYFswLbhmPgnsm4iQi7wqMwEyfQzrD448f/vgGuAFbnRDPluumVgAAAABJRU5ErkJggg=='
        }]
    },

    radar: {
        splitArea: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#4E73F1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#A0D4D1' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        axisLine: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#4E73F1' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#A0D4D1' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        name: {
            textStyle: {
                color: '#606060'
            }
        },
        indicator: [{
                name: '责任心',
                max: 100
            },
            {
                name: '执行力',
                max: 100
            },
            {
                name: '情商',
                max: 100
            },
            {
                name: '沟通能力',
                max: 100
            },
            {
                name: '合作性',
                max: 100
            },
            {
                name: '影响力',
                max: 100
            },
            {
                name: '学习能力',
                max: 100
            },
            {
                name: '洞察力',
                max: 100
            },
            {
                name: '开放性',
                max: 100
            },
            {
                name: '成就动机',
                max: 100
            },
            {
                name: '坚韧性',
                max: 100
            }
        ]
    },

    series: [{
        type: 'radar',
        zlevel: 1,
        tooltip: {
            show: true
        },
        lineStyle: {
            width: 1,
            opacity: 1
        },
        areaStyle: {
            normal: {}
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#9DDDDD' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#6699FF' // 100% 处的颜色
            }]
        },
        data: [{
                value: [1],
                name: '本次测评结果'
            },
            {
                value: [2],
                name: '本次测评结果'
            },
            {
                value: [3],
                name: '本次测评结果'
            },
            {
                value: [4],
                name: '本次测评结果'
            }
        ]
    }]
};